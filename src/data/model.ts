// Content model for the guide library.
//
// Guides are plain data rather than markup, so a page can be revised by editing
// one record, and the layout, schema, and link checks treat every guide the
// same way.
//
// Prose strings accept exactly two bits of inline markup, rendered by
// renderInline() in src/utils/inline.ts:
//   [label](/internal/path) or [label](https://…)   → a link
//   **text**                                       → strong
// Anything else, including raw HTML, is escaped.

export type Faq = { q: string; a: string };

export type OfficialSource = { label: string; url: string };

export type Step = { title: string; body: string };

/** A dated point on a deadline track, e.g. "Within 6 months". */
export type Milestone = { when: string; what: string };

export type Section = {
  heading: string;
  /** One or more paragraphs. */
  body: string[];
  /** Ordered steps, only where the order genuinely matters. */
  steps?: Step[];
  /** Unordered points. */
  bullets?: string[];
  /** The real deadlines in this part of the guide, drawn as a timeline. */
  timeline?: { caption?: string; milestones: Milestone[] };
  /** A rule or warning worth isolating, shown as an aside after the lists. */
  note?: string;
  /** Paragraphs that follow the list(s). */
  after?: string[];
};

/**
 * The box that says what Junk to Clear, a disposal company the family refers
 * jobs to, can do in this situation, with the enquiry form. Exactly one per
 * page, near the end, and always clearly labelled.
 */
export type HelpBox = {
  heading: string;
  body: string;
  href: string;
  linkLabel: string;
};

export type Hub = {
  /** URL segment: 'estates' → /estates/ */
  slug: string;
  /** Breadcrumb label and the eyebrow on every guide in the section. */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  /** Who the section is written for, shown on the home page. */
  audience: string;
  /** One line for cards and cross-links. */
  summary: string;
  /** Overview sections on the hub page itself. */
  sections: Section[];
  help: HelpBox;
};

export type Guide = {
  /** Hub slug this guide belongs to. */
  hub: string;
  slug: string;
  /** Short label for cards and breadcrumbs. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** One line for cards. */
  summary: string;
  keyPoints: string[];
  sections: Section[];
  faqs: Faq[];
  sources: OfficialSource[];
  /** Internal paths of related guides and tools. */
  related: string[];
  help: HelpBox;
};

export type LinkCard = {
  href: string;
  label: string;
  summary: string;
  /** Small eyebrow on the card, e.g. the section name. */
  kind: string;
  /** Section slug, so the card takes that section's colour. */
  section?: string;
};
