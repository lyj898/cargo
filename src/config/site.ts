// ---------------------------------------------------------------------------
// Central, editable site configuration.
// Change contact details, links, and the form submission endpoint here —
// nothing else in the codebase should need to change.
// ---------------------------------------------------------------------------

export const site = {
  name: 'SwyftClear.com',
  shortName: 'SwyftClear',
  legalDisclaimerName: 'SwyftClear.com', // used in disclaimer copy — keep in sync with `name`
  tagline: 'Singapore specialist for special cargo and customs support',
  description:
    'SwyftClear.com helps Singapore businesses handle unusual, urgent, and documentation-heavy cargo: special and oversized shipments, exhibition cargo, fragile equipment, and customs/TradeNet coordination.',
  // Origin only — no base path. Must match `site` in astro.config.mjs.
  url: 'https://swyftclear.com',
  locale: 'en-SG',

  // --- contact ---
  email: 'hello@swyftclear.com',
  phoneDisplay: '+65 8123 4567',
  phoneE164: '+6581234567',
  whatsappNumber: '6581234567', // digits only, country code first, no plus/spaces
  addressLocality: 'Singapore',
  addressCountry: 'SG',

  // --- form submission ---
  // Point this at a Formspree / Basin / Netlify Forms proxy / Zapier catch hook /
  // Google Apps Script Web App URL. Leave empty to keep the enquiry flow in
  // "demo mode" (it validates, stores state, and shows the confirmation
  // screen, but does not send data anywhere but WhatsApp/email fallback).
  formEndpoint: '',

  // --- nav ---
  // Kept to five items so the header stays legible on tablet widths. The two
  // library hubs (/guides, /permits) earn their place over individual service
  // pages because they are the entry points for search traffic; every service
  // page is still one click away via the footer and the homepage grid.
  primaryNav: [
    { label: 'Special cargo', href: '/special-cargo-singapore' },
    { label: 'Customs support', href: '/customs-support-singapore' },
    { label: 'Import guides', href: '/guides' },
    { label: 'Permits', href: '/permits' },
    { label: 'About', href: '/about' },
  ],

  ctaPrimaryLabel: 'Get shipment assessed',
  ctaSecondaryLabel: 'Chat on WhatsApp',
};

export function whatsappLink(prefilledMessage?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!prefilledMessage) return base;
  return `${base}?text=${encodeURIComponent(prefilledMessage)}`;
}

export function mailtoLink(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString()}`;
}

// Prefixes an internal path with Astro's configured `base` (see astro.config.mjs).
// Use this for every internal href/src instead of a raw "/..." string, so
// links keep working whether the site is deployed at a domain root or under
// a GitHub Pages subpath like /cargo.
//
// Page paths come back with a trailing slash. GitHub Pages serves
// directory-style URLs and 301s the slashless form to the slashed one, so
// emitting slashless links meant every internal link, every canonical, and
// every sitemap entry pointed at a URL that redirects. Matching what the host
// actually serves removes a redirect hop from all ~119 pages and stops the
// canonical from disagreeing with the URL that returns 200.
export function withBase(path: string): string {
  // import.meta.env.BASE_URL mirrors the `base` config value as-is — it is
  // NOT guaranteed to have a trailing slash (e.g. base: '/cargo' yields
  // BASE_URL === '/cargo', not '/cargo/'), so normalize before joining.
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!clean) return base;
  // Files (favicon.svg, og-default.svg) are served as-is and must not gain a
  // trailing slash; only page routes get one.
  const isFile = /\.[a-z0-9]+$/i.test(clean.split('/').pop() ?? '');
  return isFile ? `${base}${clean}` : `${base}${clean}/`;
}

export function absoluteUrl(path: string): string {
  const prefixed = withBase(path);
  return `${site.url}${prefixed.startsWith('/') ? prefixed : `/${prefixed}`}`;
}
