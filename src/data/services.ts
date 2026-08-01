// Editable list of the six specialist service pages.
// Used for the homepage grid, related-service internal linking, and nav.

export type ServiceSummary = {
  slug: string;
  title: string;
  shortLabel: string;
  summary: string;
  situation: string;
};

export const services: ServiceSummary[] = [
  {
    slug: 'special-cargo-singapore',
    title: 'Special cargo into Singapore',
    shortLabel: 'Special cargo',
    summary:
      'Coordination for shipments that fall outside standard freight categories — awkward shapes, unusual materials, or one-off commercial goods.',
    situation: 'Your shipment doesn’t fit a normal freight category.',
  },
  {
    slug: 'exhibition-logistics-singapore',
    title: 'Exhibition and event cargo',
    shortLabel: 'Exhibition & event cargo',
    summary:
      'Booth materials, display units, and event equipment coordinated against a fixed event date, with venue delivery and teardown support.',
    situation: 'You’re shipping to a fixed event date and can’t afford delays.',
  },
  {
    slug: 'oversized-cargo-singapore',
    title: 'Oversized and awkward shipments',
    shortLabel: 'Oversized cargo',
    summary:
      'Machinery, structures, and bulky one-off items that need dimension-aware planning and coordinated delivery to site.',
    situation: 'It’s too big, too heavy, or too oddly shaped for a standard courier.',
  },
  {
    slug: 'fragile-equipment-shipping-singapore',
    title: 'Fragile equipment shipping',
    shortLabel: 'Fragile equipment',
    summary:
      'Sensitive instruments, prototypes, and delicate machinery that need careful packing guidance and handling coordination end to end.',
    situation: 'It’s delicate, expensive, or irreplaceable, and needs careful handling.',
  },
  {
    slug: 'customs-support-singapore',
    title: 'Customs and import coordination',
    shortLabel: 'Customs support',
    summary:
      'Help understanding what a shipment needs before it clears — permits, declarations, and the information a Declaring Agent will ask for.',
    situation: 'You’re not sure what permits or paperwork your import needs.',
  },
  {
    slug: 'tradenet-permit-help-singapore',
    title: 'TradeNet permit guidance',
    shortLabel: 'TradeNet permit help',
    summary:
      'Plain-language guidance on the TradeNet permit process — what a UEN and Customs Account are for, and how a Declaring Agent fits in.',
    situation: 'You’ve heard of TradeNet but don’t know where to start.',
  },
];

export function getService(slug: string): ServiceSummary | undefined {
  return services.find((s) => s.slug === slug);
}

export function relatedServices(currentSlug: string, count = 3): ServiceSummary[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
