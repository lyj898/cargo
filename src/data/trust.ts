export const trustBullets: string[] = [
  'Small and unusual commercial jobs welcome — you don’t need to be shipping at scale.',
  'Useful when the shipment is awkward, urgent, fragile, oversized, or paperwork-heavy.',
  'Singapore-focused coordination, from delivery access to permit-related preparation.',
  'Clear intake before quotation — we understand the job before we price it.',
  'Useful even if you’re not sure what kind of logistics support you need yet.',
];

export const whatToPrepare: { label: string; help: string }[] = [
  { label: 'Item description', help: 'What it is, and what it’s made of if relevant.' },
  { label: 'Dimensions', help: 'Length, width, height — estimates are fine to start.' },
  { label: 'Weight', help: 'Approximate is fine if you don’t have an exact figure.' },
  { label: 'Origin', help: 'City and country the shipment is coming from.' },
  { label: 'Destination', help: 'Where in Singapore it needs to end up.' },
  { label: 'Invoice or packing list', help: 'If available — helpful but not required to start.' },
  { label: 'Photos', help: 'Of the item and its current packaging, if any.' },
  { label: 'Timing deadline', help: 'Event date, delivery deadline, or “flexible”.' },
];

export const situations: { title: string; description: string }[] = [
  {
    title: 'An unusual shipment into Singapore',
    description: 'Something that doesn’t fit a normal freight category, and you’re not sure who to ask.',
  },
  {
    title: 'A one-off commercial import',
    description: 'You’re importing something once, not running an ongoing account, and the customs process is unfamiliar.',
  },
  {
    title: 'Exhibition materials with deadline pressure',
    description: 'Booth materials or event equipment tied to a fixed date that can’t move.',
  },
  {
    title: 'An oversized or fragile item that needs coordination',
    description: 'Awkward dimensions, delicate contents, or delivery to a site without standard loading access.',
  },
  {
    title: 'Uncertainty about permits and declarations',
    description: 'You’ve heard terms like TradeNet or Declaring Agent and want a plain-language explanation.',
  },
];
