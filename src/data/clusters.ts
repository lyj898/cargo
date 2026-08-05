// The cluster registry — the single place that knows what programmatic page
// clusters exist, and the resolver that turns any internal path into a
// linkable card ({ href, label, summary }).
//
// Everything downstream reads from here: hub pages, the internal-link mesh,
// the HTML sitemap, nav, and footer. Adding a cluster means adding one entry
// here and one [slug].astro route.

import type { Cluster, SpokeBase } from './types';
import { countrySpokes, countryRegions } from './countries';
import { cargoSpokes, cargoGroups } from './cargo';
import { venueSpokes } from './venues';
import { guideSpokes, guideGroups } from './guides';
import { permitSpokes, permitGroups } from './permits';
import { services } from './services';

export type ClusterDef = Cluster & {
  spokes: SpokeBase[];
  /** Group ordering for the hub page. Empty = don't group. */
  groupOrder: readonly string[];
  /** Shown in nav/footer? */
  inNav: boolean;
};

export const clusters: ClusterDef[] = [
  {
    base: 'guides',
    label: 'Guides',
    hubTitle: 'Singapore import guides',
    hubMetaTitle: 'Singapore Import Guides | Customs, Permits, GST & Documentation',
    hubMetaDescription:
      'Plain-language guides to importing into Singapore — TradeNet and permits, GST and customs duty, HS codes, Incoterms, and freight decisions.',
    hubH1: 'Singapore import guides',
    hubLede:
      'The things people need to understand before their first shipment, and the things experienced importers still get caught by. Written for the awkward, one-off, documentation-heavy jobs rather than routine container traffic.',
    blurb: 'How Singapore importing actually works — permits, GST, documents, and freight decisions.',
    spokes: guideSpokes,
    groupOrder: guideGroups,
    inNav: true,
  },
  {
    base: 'permits',
    label: 'Permits by product',
    hubTitle: 'Do you need an import permit?',
    hubMetaTitle: 'Singapore Import Permits by Product | Controlled Goods',
    hubMetaDescription:
      'Which goods need a permit to enter Singapore, which agency controls them, and which are prohibited outright. Product-by-product answers.',
    hubH1: 'Do you need a permit to import this into Singapore?',
    hubLede:
      'Singapore controls a wide range of goods through agencies other than Customs. These pages tell you which authority regulates what, what is typically required, and which goods cannot be imported at all.',
    blurb: 'Product-by-product: which goods are controlled, by whom, and what is prohibited.',
    spokes: permitSpokes,
    groupOrder: permitGroups,
    inNav: true,
  },
  {
    base: 'cargo',
    label: 'Cargo types',
    hubTitle: 'Shipping by cargo type',
    hubMetaTitle: 'Importing by Cargo Type Into Singapore | Handling & Permits',
    hubMetaDescription:
      'Practical guidance by category of goods — machinery, lab and medical equipment, art, exhibition materials, stone, vehicles, and regulated products.',
    hubH1: 'Shipping into Singapore by cargo type',
    hubLede:
      'What actually determines whether a shipment arrives usable: the handling it needs, the authority that has an interest in it, and the details worth having ready before you enquire.',
    blurb: 'Category-by-category handling, permits, and planning for awkward cargo.',
    spokes: cargoSpokes,
    groupOrder: cargoGroups,
    inNav: true,
  },
  {
    base: 'shipping-from',
    label: 'Origin countries',
    hubTitle: 'Shipping to Singapore by origin',
    hubMetaTitle: 'Shipping to Singapore by Origin Country | Transit Times',
    hubMetaDescription:
      'Lane-by-lane guides to importing into Singapore — indicative transit times, main ports, trade agreements, and the problems that recur on each origin route.',
    hubH1: 'Shipping to Singapore, by origin country',
    hubLede:
      'Every lane has its own failure modes. These pages cover indicative transit times, the ports that actually matter, and the documentation problems that recur on each route.',
    blurb: 'Transit times, ports, and lane-specific problems for each origin country.',
    spokes: countrySpokes,
    groupOrder: countryRegions,
    inNav: true,
  },
  {
    base: 'exhibitions',
    label: 'Exhibition venues',
    hubTitle: 'Exhibition logistics by venue',
    hubMetaTitle: 'Singapore Exhibition Venue Logistics | Freight by Venue',
    hubMetaDescription:
      'Shipping exhibition and event cargo to Singapore venues — EXPO, Sands Expo, Suntec, Changi and more. Access constraints and build-up planning.',
    hubH1: 'Exhibition and event logistics, by Singapore venue',
    hubLede:
      'Event cargo is defined by a date that cannot move. These pages cover what to plan for at each major Singapore venue — access constraints, build-up timing, and the customs treatment that suits goods which are only visiting.',
    blurb: 'Venue-by-venue access, build-up planning, and temporary import options.',
    spokes: venueSpokes,
    groupOrder: [],
    inNav: true,
  },
];

export function getCluster(base: string): ClusterDef | undefined {
  return clusters.find((c) => c.base === base);
}

/** Every generated spoke path on the site, for sitemap and link validation. */
export function allSpokePaths(): string[] {
  return clusters.flatMap((c) => c.spokes.map((s) => `/${c.base}/${s.slug}`));
}

// --- link resolution --------------------------------------------------------

export type LinkCard = {
  href: string;
  label: string;
  summary: string;
  /** Cluster label, shown as a small eyebrow on the card. */
  kind: string;
};

const serviceCards: Record<string, LinkCard> = Object.fromEntries(
  services.map((s) => [
    `/${s.slug}`,
    { href: `/${s.slug}`, label: s.title, summary: s.summary, kind: 'Service' },
  ]),
);

const spokeCards: Record<string, LinkCard> = Object.fromEntries(
  clusters.flatMap((c) =>
    c.spokes.map((s) => [
      `/${c.base}/${s.slug}`,
      { href: `/${c.base}/${s.slug}`, label: s.label, summary: s.summary, kind: c.label },
    ]),
  ),
);

const hubCards: Record<string, LinkCard> = Object.fromEntries(
  clusters.map((c) => [`/${c.base}`, { href: `/${c.base}`, label: c.hubTitle, summary: c.blurb, kind: 'Hub' }]),
);

const allCards: Record<string, LinkCard> = { ...serviceCards, ...spokeCards, ...hubCards };

/**
 * Resolves internal paths to link cards, silently dropping any that don't
 * exist. Dropping rather than throwing is deliberate: a stale cross-link in a
 * data file should not silently vanish either, so `npm run check:seo` walks the
 * built HTML and fails on any dead internal link.
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

/** Paths referenced anywhere in the data that don't resolve. Used by the link check. */
export function danglingLinks(): { from: string; to: string }[] {
  const bad: { from: string; to: string }[] = [];
  for (const c of clusters) {
    for (const s of c.spokes) {
      const from = `/${c.base}/${s.slug}`;
      for (const to of s.relatedPaths ?? []) {
        if (!allCards[to]) bad.push({ from, to });
      }
      for (const svc of s.relatedServices ?? []) {
        if (!allCards[`/${svc}`]) bad.push({ from, to: `/${svc}` });
      }
    }
  }
  return bad;
}

/**
 * Picks sibling spokes within a cluster for the "more in this section" grid.
 * Prefers same-group siblings, then falls back to the rest of the cluster, so
 * every page gets a full row of links even in small groups.
 */
export function siblingCards(base: string, slug: string, count = 6): LinkCard[] {
  const cluster = getCluster(base);
  if (!cluster) return [];
  const current = cluster.spokes.find((s) => s.slug === slug);
  const others = cluster.spokes.filter((s) => s.slug !== slug);
  const sameGroup = current?.group ? others.filter((s) => s.group === current.group) : [];
  const rest = others.filter((s) => !sameGroup.includes(s));
  // Rotate the fallback pool by the current page's index so different pages
  // surface different siblings, rather than every page linking the same six.
  const idx = Math.max(0, cluster.spokes.findIndex((s) => s.slug === slug));
  const rotated = [...rest.slice(idx % Math.max(1, rest.length)), ...rest.slice(0, idx % Math.max(1, rest.length))];
  return [...sameGroup, ...rotated]
    .slice(0, count)
    .map((s) => ({
      href: `/${base}/${s.slug}`,
      label: s.label,
      summary: s.summary,
      kind: cluster.label,
    }));
}
