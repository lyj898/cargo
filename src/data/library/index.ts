// The guide library: every guide, the standalone tools, and the resolver that
// turns an internal path into a linkable card.
//
// Adding a guide means adding one record to its section's file. The routes,
// section hub, sitemap, and link check all read from here.

import type { Guide, LinkCard } from '../model';
import { hubs } from '../hubs';
import { estatesGuides } from './estates';
import { handoverGuides } from './handover';
import { buildingsGuides } from './buildings';
import { businessGuides } from './business';

export const guides: Guide[] = [...estatesGuides, ...handoverGuides, ...buildingsGuides, ...businessGuides];

export function guidePath(guide: Guide): string {
  return `/${guide.hub}/${guide.slug}`;
}

export function guidesIn(hubSlug: string): Guide[] {
  return guides.filter((g) => g.hub === hubSlug);
}

/** Pages with their own route rather than a guide record. */
export type Tool = LinkCard & { hub: string };

export const tools: Tool[] = [
  {
    href: '/buildings/notice-templates',
    label: 'Notice templates for condos',
    summary: 'Resident notices for bulky items and things left in common areas, filled in as you type.',
    kind: 'Tool',
    hub: 'buildings',
  },
];

export function toolsIn(hubSlug: string): Tool[] {
  return tools.filter((t) => t.hub === hubSlug);
}

// --- link resolution --------------------------------------------------------

const hubLabel = (slug: string) => hubs.find((h) => h.slug === slug)?.label ?? slug;

const guideCards: Record<string, LinkCard> = Object.fromEntries(
  guides.map((g) => [guidePath(g), { href: guidePath(g), label: g.label, summary: g.summary, kind: hubLabel(g.hub) }]),
);

const hubCards: Record<string, LinkCard> = Object.fromEntries(
  hubs.map((h) => [`/${h.slug}`, { href: `/${h.slug}`, label: h.h1, summary: h.summary, kind: 'Section' }]),
);

const toolCards: Record<string, LinkCard> = Object.fromEntries(tools.map((t) => [t.href, t]));

const allCards: Record<string, LinkCard> = { ...guideCards, ...hubCards, ...toolCards };

export function cardFor(path: string): LinkCard | undefined {
  return allCards[path];
}

/**
 * Resolves internal paths to link cards, silently dropping any that don't
 * exist. Dropping rather than throwing keeps a stale cross-link from breaking
 * the build, and `npm run check:seo` still fails on any dead link that makes it
 * into the HTML.
 */
export function resolveLinks(paths: string[] = [], limit = 6): LinkCard[] {
  const seen = new Set<string>();
  const out: LinkCard[] = [];
  for (const p of paths) {
    const card = allCards[p];
    if (card && !seen.has(p)) {
      seen.add(p);
      out.push(card);
    }
    if (out.length >= limit) break;
  }
  return out;
}

/** Related paths in the guide data that don't resolve. */
export function danglingLinks(): { from: string; to: string }[] {
  return guides.flatMap((g) =>
    g.related.filter((to) => !allCards[to]).map((to) => ({ from: guidePath(g), to })),
  );
}
