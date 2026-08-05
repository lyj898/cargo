// Shared types for the programmatic (data-driven) page clusters.
//
// Every cluster follows the same contract so the layout, internal-linking,
// sitemap, and OG-image code can treat them uniformly:
//   slug          → URL segment inside the cluster
//   metaTitle     → <title> (must be unique across the whole site)
//   metaDescription → meta description (unique, 140–160 chars)
//   h1 / lede     → visible page opening
//   facts         → the key-facts table; the main source of per-page substance
//   sections      → free-form prose blocks
//   faqs          → FAQPage schema + accordion
//
// Keeping these as plain data (not markup) means a page can be revised by
// editing one record, and it keeps every generated page genuinely different
// from its siblings rather than a template with a word swapped.

export type Fact = { label: string; value: string };

export type Faq = { q: string; a: string };

export type Section = {
  heading: string;
  body: string;
  bullets?: string[];
};

/** A cluster definition — drives its hub page, breadcrumbs, and nav. */
export type Cluster = {
  /** URL segment, e.g. 'guides' → /guides/... */
  base: string;
  /** Breadcrumb + nav label */
  label: string;
  hubTitle: string;
  hubMetaTitle: string;
  hubMetaDescription: string;
  hubH1: string;
  hubLede: string;
  /** Short blurb used when this cluster is cross-linked from elsewhere. */
  blurb: string;
};

/** Anything a cluster page can be. All spoke records satisfy this. */
export type SpokeBase = {
  slug: string;
  /** Short label for cards, breadcrumbs, and internal links. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** One-line summary used on hub cards and related-link grids. */
  summary: string;
  facts: Fact[];
  sections: Section[];
  faqs: Faq[];
  /** Slugs of related service pages (root-level), for the linking mesh. */
  relatedServices?: string[];
  /** Free-form cross-cluster links: full internal paths. */
  relatedPaths?: string[];
  /** Grouping key used for hub filtering and sibling selection. */
  group?: string;
};
