import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -----------------------------------------------------
// Live on the custom domain swyftclear.com (DNS + /public/CNAME configured).
//
// To fall back to the default GitHub Pages URL instead, use the block below,
// remove /public/CNAME, and update `site.url` in src/config/site.ts to
// match `site` here. Every internal link in the codebase goes through
// `withBase()` (src/config/site.ts), so this is the only place that needs
// to change either way.
// -----------------------------------------------------------------------

// GitHub Pages default URL (fallback, no custom domain):
// export default defineConfig({
//   site: 'https://lyj898.github.io',
//   base: '/cargo',
//   trailingSlash: 'never',
//   build: { format: 'directory' },
//   integrations: [sitemap({ ... })],
// });

// Pages that should never appear in the sitemap: 404 is not a page.
const EXCLUDED = [/\/404\/?$/];

// Mirrors LAST_REVIEWED in src/config/content.ts. Duplicated because this file
// is plain .mjs and cannot import the TypeScript config module.
const LAST_REVIEWED = '2026-09-28';

// Priority is a hint, not a ranking factor. On a small site it mostly says
// which pages are the entry points: home, then the four section hubs.
function priorityFor(url) {
  const path = new URL(url).pathname.replace(/\/$/, '');
  if (path === '') return 1.0;
  const depth = path.split('/').filter(Boolean).length;
  // Section hubs
  if (depth === 1 && ['/estates', '/handover', '/buildings', '/business'].includes(path)) {
    return 0.9;
  }
  // Other top-level pages (about, sitemap)
  if (depth === 1) return 0.5;
  // Guides and tools
  if (depth === 2) return 0.8;
  return 0.5;
}

function changefreqFor(url) {
  const path = new URL(url).pathname.replace(/\/$/, '');
  if (path === '') return 'weekly';
  return 'monthly';
}

export default defineConfig({
  site: 'https://swyftclear.com',
  // 'always', not 'never': build.format 'directory' emits page/index.html, and
  // GitHub Pages 301s /page to /page/. Declaring 'never' meant every canonical
  // and sitemap entry named a URL that redirects. See withBase() in
  // src/config/site.ts, which appends the slash to internal links to match.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.some((re) => re.test(new URL(page).pathname)),
      serialize(item) {
        // Belt and braces: the sitemap must name the URL that returns 200,
        // not the one GitHub Pages redirects away from.
        if (!item.url.endsWith('/')) item.url = `${item.url}/`;
        item.priority = priorityFor(item.url);
        item.changefreq = changefreqFor(item.url);
        // Deliberately NOT `new Date()`. Stamping every URL as modified on
        // every deploy is a false freshness signal that crawlers learn to
        // ignore. Keep this in sync with LAST_REVIEWED in src/config/content.ts,
        // and only move it when the content is genuinely re-reviewed.
        item.lastmod = LAST_REVIEWED;
        return item;
      },
    }),
  ],
});
