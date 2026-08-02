// FAQ copy per page. Keep answers specific and cautious on anything
// customs/regulatory — see the disclaimer in src/config/site.ts.

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: 'What counts as a "special" or "unusual" shipment?',
    a: 'Anything that a generalist freight forwarder might hesitate on: oversized or awkward dimensions, fragile or high-value equipment, exhibition materials tied to a fixed date, low-volume commercial imports, or shipments where you’re not sure which permits apply. If you’re unsure, start the guided enquiry and select “Not sure” — we’ll help you work out the category.',
  },
  {
    q: 'Do I need to know exactly what service I need before I contact you?',
    a: 'No. Most people who reach out aren’t sure yet, and that’s expected. The guided enquiry is built to help you describe the shipment in plain terms — what it is, where it’s going, and when — and we work out what kind of support applies from there.',
  },
  {
    q: 'Can you help with a one-off shipment, not an ongoing account?',
    a: 'Yes. One-off and infrequent shipments are a core part of what we handle — exhibitors, SMEs with a single unusual import, and businesses that don’t ship often enough to justify a standing freight contract.',
  },
  {
    q: 'Is SwyftClear.com a customs broker or Declaring Agent?',
    a: 'SwyftClear.com helps you prepare, coordinate, and understand what a shipment needs before and during the customs process, and can connect you with the appropriate licensed support where a Declaring Agent is required. See our about page for exactly how this works.',
  },
  {
    q: 'How fast will I hear back after submitting an enquiry?',
    a: 'We aim to respond within one business day, and sooner for enquiries flagged as time-sensitive. If your timing is fixed — an event date or a delivery deadline — say so in the enquiry and we’ll prioritise accordingly.',
  },
];

export const faqsBySlug: Record<string, Faq[]> = {
  'special-cargo-singapore': [
    {
      q: 'What makes a shipment "special cargo" rather than standard freight?',
      a: 'Usually one of: non-standard dimensions, unusual packaging, sensitive or high-value contents, a commercial import with no established import history, or handling requirements a generalist forwarder isn’t set up for. We assess this case by case rather than against a fixed checklist.',
    },
    {
      q: 'Will a normal freight forwarder just refuse the job?',
      a: 'Sometimes, or they’ll quote conservatively because the job doesn’t fit their standard process. That’s the gap this service is built for — jobs that are a coordination problem before they’re a transport problem.',
    },
    {
      q: 'Do you handle both import and export cargo?',
      a: 'Most enquiries we receive are imports into Singapore. Tell us the direction of your shipment in the guided enquiry and we’ll confirm whether it’s something we can help coordinate.',
    },
  ],
  'customs-support-singapore': [
    {
      q: 'What exactly does "customs support" mean here?',
      a: 'We help you understand what information a shipment is likely to need before it clears — whether a permit applies, what a Declaring Agent will ask you for, and how to prepare invoices, packing lists, and product details in advance. We are not positioning ourselves as a licensed Declaring Agent unless stated otherwise for a specific engagement.',
    },
    {
      q: 'Do I need a UEN to import into Singapore?',
      a: 'Generally, businesses need a Unique Entity Number (UEN) and to activate a Customs Account with Singapore Customs before import permits can be applied for via TradeNet. If you don’t have these yet, tell us in the enquiry and we can help you understand the sequence of steps.',
    },
    {
      q: 'Can you submit the permit application for me?',
      a: 'Permit applications are submitted through TradeNet, typically by a Declaring Agent appointed by the importer. We help you prepare what’s needed and can connect you with appropriate support for the declaration itself.',
    },
    {
      q: 'What if I don’t know whether my goods need a permit?',
      a: 'That’s a common starting point. Describe the goods as specifically as you can in the enquiry — what they are, their value, and where they’re from — and we’ll help you work out what to check next.',
    },
  ],
  'exhibition-logistics-singapore': [
    {
      q: 'How close to the event date can you take on a job?',
      a: 'Tell us your event date and whether timing is fixed in the guided enquiry — we prioritise time-sensitive jobs and will tell you plainly if a timeline looks too tight to work with safely.',
    },
    {
      q: 'Do you deliver directly to the venue?',
      a: 'Venue delivery is one of the support options in the enquiry flow. Tell us the venue, any loading-dock or access constraints you’re aware of, and your target delivery window.',
    },
    {
      q: 'Can you help with the return shipment after the event too?',
      a: 'Yes — return shipment is one of the options in the enquiry flow. It’s worth flagging upfront so return logistics can be planned alongside the inbound delivery, not arranged separately afterward.',
    },
  ],
  'oversized-cargo-singapore': [
    {
      q: 'How large is "oversized" in this context?',
      a: 'Anything beyond what a standard courier or generalist forwarder handles comfortably — long, tall, heavy, or oddly shaped items such as machinery, structural pieces, or bulky equipment. Give us dimensions and weight in the enquiry and we’ll confirm feasibility.',
    },
    {
      q: 'Do you handle delivery to sites without loading docks?',
      a: 'This is exactly the kind of detail that changes how a job is planned. Tell us the delivery location type and any access constraints in the enquiry so we can plan the right equipment and approach.',
    },
    {
      q: 'Is oversized cargo always more expensive to coordinate?',
      a: 'Cost depends on dimensions, weight, access constraints, and timing, not size alone. We assess each shipment individually rather than applying a blanket surcharge.',
    },
  ],
  'fragile-equipment-shipping-singapore': [
    {
      q: 'What kind of equipment do you typically help with?',
      a: 'Sensitive instruments, prototypes, lab or medical equipment, delicate machinery parts, and similar high-value items where handling and packing quality matter more than speed.',
    },
    {
      q: 'Do you provide packing, or do I need to arrange that myself?',
      a: 'Packing and repacking support is one of the options in the guided enquiry. If your item is already professionally packed, you can indicate that instead and we’ll focus on transport and delivery coordination.',
    },
    {
      q: 'What if the equipment needs climate or handling precautions?',
      a: 'Note any special handling requirements — temperature sensitivity, orientation, shock sensitivity — in the shipment details step, so we can factor it in before proposing an approach.',
    },
  ],
  'tradenet-permit-help-singapore': [
    {
      q: 'What is TradeNet?',
      a: 'TradeNet is Singapore’s national single window for submitting trade declarations, including import and export permit applications, to the relevant government agencies.',
    },
    {
      q: 'What do I need before I can apply for a permit?',
      a: 'In general, a business needs a UEN and an activated Customs Account with Singapore Customs. From there, permit applications are typically submitted via TradeNet by a Declaring Agent appointed by the importer.',
    },
    {
      q: 'What is a Declaring Agent, and do I need one?',
      a: 'A Declaring Agent is a party authorised to submit permit declarations on TradeNet on behalf of an importer or exporter. Many SMEs and first-time importers appoint one rather than applying directly. We can help you understand whether this applies to your shipment and connect you with appropriate support.',
    },
    {
      q: 'Can SwyftClear.com apply for the permit on my behalf?',
      a: 'We help you prepare and understand what a permit application needs, and can connect you with the appropriate declaring support. Please see our about page for exactly what we do and don’t do.',
    },
  ],
};
