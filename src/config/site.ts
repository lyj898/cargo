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

  // Corrections and questions about the guides.
  email: 'hello@swyftclear.com',

  // The enquiry form in each help box and on /about. Every family site takes
  // enquiries on its own FormSubmit form (family rule, 30 Sep 2026), and the
  // user passes each one to Junk to Clear or the partner who'll quote. This is
  // the same inbox as HomeToClean's form. The subject names the site and the
  // page, so enquiries can be counted per site and per page.
  //
  // FormSubmit can hold a new form until the link in its activation email is
  // clicked. Until then it refuses submissions, and the form shows an error
  // rather than a false "sent". Once it's active, swap the address for the
  // hashed alias FormSubmit provides, so the inbox is no longer in page source.
  enquiries: {
    endpoint: 'https://formsubmit.co/lyj898@gmail.com',
    subject: 'SwyftClear enquiry',
  },

  // GA4 measurement ID. The "SwyftClear" property sits in the Junktoclear
  // Analytics account, beside Junk to Clear's own property. Empty means no
  // analytics tag is emitted at all.
  ga4MeasurementId: 'G-DJDZ60W1D0',

  // Who publishes the site. Disclosed on every guide and on /about, because a
  // guide that links to its own publisher's service should say so plainly.
  publisher: {
    legalName: 'SKAP Waste Management Pte Ltd',
    brand: 'Junk to Clear',
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
