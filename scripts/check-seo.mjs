// Post-build SEO checks. Runs against dist/, so it validates what actually
// ships rather than what the data files intend.
//
// Fails the build on things that are genuinely broken (dangling internal links,
// duplicate titles, missing canonicals). Warns on things that are judgement
// calls (meta description length, thin pages) without failing.
//
//   node scripts/check-seo.mjs

import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';

const errors = [];
const warnings = [];

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

/** dist/guides/what-is-tradenet/index.html -> /guides/what-is-tradenet */
function routeFor(file) {
  const rel = relative(DIST, file).split(sep).join('/');
  const withoutIndex = rel.replace(/(^|\/)index\.html$/, '');
  return '/' + withoutIndex.replace(/\.html$/, '');
}

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

const files = await htmlFiles(DIST);
const routes = new Set(files.map(routeFor));
const titles = new Map();
const descriptions = new Map();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const route = routeFor(file);

  const title = pick(html, /<title>([\s\S]*?)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]*)"/);
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  const noindex = /content="noindex/.test(html);

  // Guide data is drafted with [[VERIFY …]] markers where a fact is still being
  // checked against an official source. None of them may ship.
  if (html.includes('[[VERIFY')) errors.push(`${route}: unverified [[VERIFY]] marker in the page`);

  if (!title) errors.push(`${route}: missing <title>`);
  if (!canonical) errors.push(`${route}: missing canonical`);
  if (h1s.length === 0) errors.push(`${route}: no <h1>`);
  if (h1s.length > 1) errors.push(`${route}: ${h1s.length} <h1> elements`);

  if (!noindex) {
    if (title) {
      if (titles.has(title)) errors.push(`duplicate <title> on ${route} and ${titles.get(title)}`);
      else titles.set(title, route);
      if (title.length > 70) warnings.push(`${route}: title is ${title.length} chars (>70 may truncate)`);
    }
    if (!desc) {
      errors.push(`${route}: missing meta description`);
    } else {
      if (descriptions.has(desc)) {
        errors.push(`duplicate meta description on ${route} and ${descriptions.get(desc)}`);
      } else {
        descriptions.set(desc, route);
      }
      if (desc.length > 165) warnings.push(`${route}: description is ${desc.length} chars (>165 may truncate)`);
      if (desc.length < 70) warnings.push(`${route}: description is only ${desc.length} chars`);
    }

    // Thin-content guard. A guide that falls under this is not doing its job.
    const text = html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ');
    const words = text.split(' ').filter(Boolean).length;
    if (words < 450) warnings.push(`${route}: only ~${words} words of text`);
  }

  // Internal link integrity.
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1].replace(/\/$/, '') || '/';
    if (/\.(xml|svg|png|jpg|webp|ico|txt|css|js|json)$/.test(href)) continue;
    if (!routes.has(href)) errors.push(`${route}: dead internal link -> ${href}`);
  }
}

console.log(`Checked ${files.length} pages.`);
console.log(`  unique titles: ${titles.size}`);
console.log(`  unique descriptions: ${descriptions.size}`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log('  ! ' + w);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error('  x ' + e);
  process.exit(1);
}

console.log('\nNo SEO errors.');
