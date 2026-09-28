// ---------------------------------------------------------------------------
// Central, editable site configuration.
// Change the publisher details, links, and analytics ID here — nothing else in
// the codebase should need to change.
// ---------------------------------------------------------------------------

export const site = {
  name: 'SwyftClear',
  shortName: 'SwyftClear',
  tagline: 'Guides for clearing a property you’re responsible for',
  description:
    'Singapore guides for sellers, landlords, building managers, businesses and executors who have to clear a home or premises by a deadline.',
  // Origin only — no base path. Must match `site` in astro.config.mjs.
  url: 'https://swyftclear.com',
  locale: 'en-SG',

  // Corrections and questions about the guides. This is a guide site with no
  // enquiry form of its own: every "get it done" link goes to Junk To Clear,
  // so enquiries land in one funnel where they can be measured.
  email: 'hello@swyftclear.com',

  // GA4 measurement ID (G-XXXXXXXXXX). Empty means no analytics tag is emitted
  // at all, which is the honest default until a property exists.
  ga4MeasurementId: '',

  // Who publishes the site. Disclosed on every guide and on /about, because a
  // guide that links to its own publisher's service should say so plainly.
  publisher: {
    legalName: 'SKAP Waste Management Pte Ltd',
    brand: 'Junk To Clear',
    url: 'https://junktoclear.com.sg/',
    foundingYear: 2009,
  },

  // --- nav ---
  // One item per section, plus About. Kept to five so the header stays legible
  // at tablet widths.
  primaryNav: [
    { label: 'Selling or letting', href: '/handover' },
    { label: 'Condos & strata', href: '/buildings' },
    { label: 'Business premises', href: '/business' },
    { label: 'Inherited homes', href: '/estates' },
    { label: 'About', href: '/about' },
  ],
};

// Prefixes an internal path with Astro's configured `base` (see astro.config.mjs).
// Use this for every internal href/src instead of a raw "/..." string, so
// links keep working whether the site is deployed at a domain root or under
// a GitHub Pages subpath like /cargo.
//
// Page paths come back with a trailing slash. GitHub Pages serves
// directory-style URLs and 301s the slashless form to the slashed one, so
// emitting slashless links meant every internal link, every canonical, and
// every sitemap entry pointed at a URL that redirects. Matching what the host
// actually serves removes a redirect hop from every page and stops the
// canonical from disagreeing with the URL that returns 200.
export function withBase(path: string): string {
  // import.meta.env.BASE_URL mirrors the `base` config value as-is — it is
  // NOT guaranteed to have a trailing slash (e.g. base: '/cargo' yields
  // BASE_URL === '/cargo', not '/cargo/'), so normalize before joining.
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  // Keep any #fragment out of the slash logic and re-attach it at the end.
  const [pathOnly, fragment] = path.split('#');
  const hash = fragment ? `#${fragment}` : '';
  const clean = pathOnly.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!clean) return `${base}${hash}`;
  // Files (favicon.svg, og-default.svg) are served as-is and must not gain a
  // trailing slash; only page routes get one.
  const isFile = /\.[a-z0-9]+$/i.test(clean.split('/').pop() ?? '');
  return isFile ? `${base}${clean}${hash}` : `${base}${clean}/${hash}`;
}

export function absoluteUrl(path: string): string {
  const prefixed = withBase(path);
  return `${site.url}${prefixed.startsWith('/') ? prefixed : `/${prefixed}`}`;
}
