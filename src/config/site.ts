// ---------------------------------------------------------------------------
// Central, editable site configuration.
// Change contact details, links, and the form submission endpoint here —
// nothing else in the codebase should need to change.
// ---------------------------------------------------------------------------

export const site = {
  name: 'CargoAdvisor.sg',
  shortName: 'CargoAdvisor',
  legalDisclaimerName: 'CargoAdvisor.sg', // used in disclaimer copy — keep in sync with `name`
  tagline: 'Singapore specialist for special cargo and customs support',
  description:
    'CargoAdvisor.sg helps Singapore businesses handle unusual, urgent, and documentation-heavy cargo: special and oversized shipments, exhibition cargo, fragile equipment, and customs/TradeNet coordination.',
  // Origin only — no base path. Must match `site` in astro.config.mjs.
  // Currently the GitHub Pages default URL; switch to 'https://cargoadvisor.sg'
  // once the domain is bought and astro.config.mjs is switched over.
  url: 'https://lyj898.github.io',
  locale: 'en-SG',

  // --- contact ---
  email: 'hello@cargoadvisor.sg',
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
  primaryNav: [
    { label: 'Special cargo', href: '/special-cargo-singapore' },
    { label: 'Customs support', href: '/customs-support-singapore' },
    { label: 'Exhibition logistics', href: '/exhibition-logistics-singapore' },
    { label: 'Case studies', href: '/case-studies' },
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
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. '/' or '/cargo/'
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}${clean}` : base;
}

export function absoluteUrl(path: string): string {
  const prefixed = withBase(path);
  return `${site.url}${prefixed.startsWith('/') ? prefixed : `/${prefixed}`}`;
}
