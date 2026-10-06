// JSON-LD. One @graph per page, emitted by BaseLayout.
//
// The model is deliberately plain: SwyftClear is a WebSite, published by the
// SwyftClear Organization, whose parent is OurKampung, the family of sites it
// belongs to. No company is named (the independence brief, 6 Oct 2026), so
// there is no legalName or foundingDate. Page nodes (Article, CollectionPage)
// reference both by @id rather than repeating them, so there is one
// authoritative description of each entity on the site.
//
// Deliberate omissions, which are not oversights:
//   - No LocalBusiness, address, or telephone. SwyftClear is a guide, not a
//     service with premises, and it publishes no phone number.
//   - No AggregateRating or Review. There are no reviews to mark up.
//   - FAQPage is opt-in on FAQSection. See the note there.

import { site } from '../config/site';
import { LAST_REVIEWED } from '../config/content';

export type JsonLdNode = Record<string, unknown>;

export const WEBSITE_ID = `${site.url}/#website`;
export const ORG_ID = `${site.url}/#org`;

export function websiteNode(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    inLanguage: 'en-SG',
    publisher: { '@id': ORG_ID },
  };
}

export function organizationNode(): JsonLdNode {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: `${site.url}/`,
    areaServed: { '@type': 'Country', name: 'Singapore' },
    parentOrganization: { '@type': 'Organization', name: site.family.name, url: site.family.url },
  };
}

/** A guide page. */
export function articleNode(opts: {
  url: string;
  headline: string;
  description: string;
  sectionName: string;
}): JsonLdNode {
  return {
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    inLanguage: 'en-SG',
    dateModified: LAST_REVIEWED,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    articleSection: opts.sectionName,
  };
}

/** A section hub, listing its guides. */
export function collectionNode(opts: {
  url: string;
  name: string;
  description: string;
  items: { name: string; url: string }[];
}): JsonLdNode {
  return {
    '@type': 'CollectionPage',
    '@id': `${opts.url}#collection`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: 'en-SG',
    dateModified: LAST_REVIEWED,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

/** Wraps site-wide and page nodes into the single graph a page emits. */
export function pageGraph(pageNodes: JsonLdNode[]): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    // Page nodes may arrive with their own @context; inside a graph it is noise.
    '@graph': [websiteNode(), organizationNode(), ...pageNodes.map(({ '@context': _ctx, ...node }) => node)],
  };
}
