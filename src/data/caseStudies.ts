// Sample case studies. These are illustrative placeholders written to be
// realistic and specific without overclaiming — replace with real client
// outcomes (with permission) as they become available. Each field is plain
// data so the whole set can be edited without touching template markup.

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  situation: string;
  approach: string;
  outcome: string;
  details: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'exhibition-materials-singapore-event',
    category: 'Exhibition & event cargo',
    title: 'Booth materials delivered ahead of a Singapore trade show',
    situation:
      'An overseas exhibitor had booth panels, a demo unit, and printed materials arriving with a hard event build-up deadline, and no existing logistics contact in Singapore who understood venue delivery requirements.',
    approach:
      'We confirmed the venue’s loading-dock access window, coordinated delivery timing against the build-up schedule, and arranged for the crates to be received and moved to the booth location ahead of the exhibitor’s team arriving on site.',
    outcome:
      'Materials were on-site and unpacked before build-up began, with the exhibitor’s team able to focus on the booth setup rather than logistics coordination.',
    details: [
      { label: 'Cargo type', value: 'Booth panels, demo unit, printed materials' },
      { label: 'Origin', value: 'Regional Asia-Pacific' },
      { label: 'Timing', value: 'Fixed event build-up date' },
      { label: 'Support used', value: 'Venue delivery, timing coordination' },
    ],
  },
  {
    slug: 'oversized-commercial-cargo-import',
    category: 'Oversized cargo',
    title: 'One-off oversized equipment import for a local workshop',
    situation:
      'A Singapore-based SME purchased a piece of secondhand workshop machinery from overseas — a one-off import with no prior shipping relationship, unusual dimensions, and uncertainty about what documentation the import would need.',
    approach:
      'We reviewed the item’s dimensions and weight, helped the business understand what commercial invoice and packing list details would be needed, and coordinated delivery to a facility without a standard loading dock.',
    outcome:
      'The equipment arrived intact and was delivered to site with equipment suited to the access constraints, and the business had the documentation prepared in advance of the shipment landing.',
    details: [
      { label: 'Cargo type', value: 'Secondhand workshop machinery' },
      { label: 'Weight class', value: 'Oversized, single piece' },
      { label: 'Destination', value: 'Facility without loading dock' },
      { label: 'Support used', value: 'Documentation prep, site delivery coordination' },
    ],
  },
  {
    slug: 'fragile-equipment-timing-constraints',
    category: 'Fragile equipment',
    title: 'Sensitive lab equipment coordinated against a tight install window',
    situation:
      'A research team needed a delicate piece of lab equipment brought into Singapore and installed within a narrow window tied to a facility booking, with the equipment’s manufacturer specifying strict handling precautions.',
    approach:
      'We confirmed the manufacturer’s handling requirements, arranged appropriate packing checks before onward transport, and scheduled delivery to align with the facility’s access window rather than a generic delivery estimate.',
    outcome:
      'The equipment arrived within the required window and in the condition needed for installation, with handling instructions followed through each stage of the move.',
    details: [
      { label: 'Cargo type', value: 'Sensitive lab equipment' },
      { label: 'Handling need', value: 'Manufacturer-specified precautions' },
      { label: 'Timing', value: 'Fixed facility install window' },
      { label: 'Support used', value: 'Packing check, scheduled site delivery' },
    ],
  },
];
