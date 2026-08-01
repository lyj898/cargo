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
  url: 'https://cargoadvisor.sg',
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

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${clean === '/' ? '' : clean}`;
}
