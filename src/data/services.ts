// Editable list of the six specialist service pages.
// Used for the homepage grid, related-service internal linking, and nav.

export type ServiceSummary = {
  slug: string;
  title: string;
  shortLabel: string;
  summary: string;
  situation: string;
  /**
   * Internal paths into the programmatic clusters that are genuinely relevant
   * to this service. Service pages are the strongest pages on the site, so
   * these links are the main way authority reaches the deeper cluster pages.
   */
  clusterLinks?: string[];
};

export const services: ServiceSummary[] = [
  {
    slug: 'special-cargo-singapore',
    title: 'Special cargo into Singapore',
    shortLabel: 'Special cargo',
    summary:
      'Coordination for shipments that fall outside standard freight categories — awkward shapes, unusual materials, or one-off commercial goods.',
    situation: 'Your shipment doesn’t fit a normal freight category.',
    clusterLinks: [
      '/cargo',
      '/shipping-from',
      '/cargo/industrial-machinery',
      '/cargo/prototypes-and-samples',
      '/guides/import-documentation-checklist',
      '/guides/lcl-vs-fcl-explained',
    ],
  },
  {
    slug: 'exhibition-logistics-singapore',
    title: 'Exhibition and event cargo',
    shortLabel: 'Exhibition & event cargo',
    summary:
      'Booth materials, display units, and event equipment coordinated against a fixed event date, with venue delivery and teardown support.',
    situation: 'You’re shipping to a fixed event date and can’t afford delays.',
    clusterLinks: [
      '/exhibitions',
      '/cargo/exhibition-booth-materials',
      '/cargo/stage-and-lighting-equipment',
      '/guides/ata-carnet-singapore',
      '/guides/temporary-import-into-singapore',
      '/exhibitions/singapore-expo',
    ],
  },
  {
    slug: 'oversized-cargo-singapore',
    title: 'Oversized and awkward shipments',
    shortLabel: 'Oversized cargo',
    summary:
      'Machinery, structures, and bulky one-off items that need dimension-aware planning and coordinated delivery to site.',
    situation: 'It’s too big, too heavy, or too oddly shaped for a standard courier.',
    clusterLinks: [
      '/cargo/industrial-machinery',
      '/cargo/cnc-and-machine-tools',
      '/cargo/marble-and-stone',
      '/cargo/marine-and-boat-equipment',
      '/guides/lcl-vs-fcl-explained',
      '/cargo',
    ],
  },
  {
    slug: 'fragile-equipment-shipping-singapore',
    title: 'Fragile equipment shipping',
    shortLabel: 'Fragile equipment',
    summary:
      'Sensitive instruments, prototypes, and delicate machinery that need careful packing guidance and handling coordination end to end.',
    situation: 'It’s delicate, expensive, or irreplaceable, and needs careful handling.',
    clusterLinks: [
      '/cargo/laboratory-equipment',
      '/cargo/semiconductor-equipment',
      '/cargo/art-and-sculptures',
      '/cargo/musical-instruments',
      '/guides/air-freight-vs-sea-freight-singapore',
      '/cargo',
    ],
  },
  {
    slug: 'customs-support-singapore',
    title: 'Customs and import coordination',
    shortLabel: 'Customs support',
    summary:
      'Help understanding what a shipment needs before it clears — permits, declarations, and the information a Declaring Agent will ask for.',
    situation: 'You’re not sure what permits or paperwork your import needs.',
    clusterLinks: [
      '/guides',
      '/permits',
      '/guides/gst-on-imports-singapore',
      '/guides/import-documentation-checklist',
      '/guides/controlled-goods-and-competent-authorities',
      '/guides/customs-duty-in-singapore',
    ],
  },
  {
    slug: 'tradenet-permit-help-singapore',
    title: 'TradeNet permit guidance',
    shortLabel: 'TradeNet permit help',
    summary:
      'Plain-language guidance on the TradeNet permit process — what a UEN and Customs Account are for, and how a Declaring Agent fits in.',
    situation: 'You’ve heard of TradeNet but don’t know where to start.',
    clusterLinks: [
      '/guides/what-is-tradenet',
      '/guides/uen-and-customs-account',
      '/guides/what-is-a-declaring-agent',
      '/guides/import-permit-types-singapore',
      '/permits',
      '/guides',
    ],
  },
];

export function getService(slug: string): ServiceSummary | undefined {
  return services.find((s) => s.slug === slug);
}

export function relatedServices(currentSlug: string, count = 3): ServiceSummary[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
