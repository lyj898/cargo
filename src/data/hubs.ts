// The four sections of the site, one per situation that forces a clearance.
//
// The split is by who is responsible and what deadline they face, not by item
// or by town: an executor, a seller or landlord, a building's management, and
// a business at the end of its lease each ask different questions, even when
// the lorry at the end is the same.
//
// Boundaries with the publisher's other guide sites, agreed across sessions:
//   - OurKampung (ourkampung.com): your own home in Singapore.
//   - Relocado (relocado.asia): anyone getting on a plane. Leaving Singapore,
//     arriving, the diplomatic clause, IR21, international shipping, and what
//     international movers won't take all belong there.
//   - SwyftClear: a property you're responsible for but don't live in.
// So don't write guides here for someone clearing their own home or leaving the
// country, and don't target Junk To Clear's own service searches either. An
// executor who lives abroad is still SwyftClear's reader: the property is the
// estate's, not theirs.

import type { Hub } from './model';
import { junkToClear } from './links';

export const hubs: Hub[] = [
  {
    slug: 'estates',
    label: 'After a death',
    h1: 'Clearing the home of someone who has died',
    metaTitle: 'Clearing a Late Relative’s Home in Singapore',
    metaDescription:
      'What to do, and in what order, when you have to clear the home of a parent or relative who has died in Singapore: authority, HDB rules, what to keep and timing.',
    lede: 'Clearing a parent’s or relative’s home is one of the hardest jobs a family takes on, and the order you do it in matters more than the speed. These guides cover who has the authority to decide, what to find before anything leaves the home, and how the estate and HDB rules shape the timeline.',
    audience: 'For executors, administrators and families',
    summary: 'Who can decide, what to find first, and how the estate and HDB rules set the timeline.',
    sections: [
      {
        heading: 'Authority comes before clearing',
        body: [
          'Everything in the home belongs to the estate, from the furniture to the photographs. Authority over it lies with the executor named in the will or, if there’s no will, an administrator, and the Family Justice Courts confirm that authority with a Grant of Probate or Letters of Administration. The family can and should secure the home and search it straight away. Decisions about giving things away, selling them or clearing them belong to whoever will hold the grant.',
        ],
      },
      {
        heading: 'The order that avoids regret',
        body: ['Every family’s situation is different, but the order rarely is:'],
        steps: [
          { title: 'Secure the home', body: 'Lock it, keep the keys with one or two people, and photograph each room as it is.' },
          { title: 'Search it', body: 'For the will, the papers that lead to money and property, valuables, and the things only the family can judge.' },
          { title: 'Settle who decides', body: 'The executor or administrator, with the grant in hand or applied for.' },
          { title: 'Check what the home needs', body: 'For an HDB flat, how it was owned decides whether it’s kept, transferred, sold or returned, and by when.' },
          { title: 'Let the family choose', body: 'Give everyone who should have a say a fair chance to ask for things, including relatives abroad.' },
          { title: 'Then clear', body: 'Free routes first, then a clearance for what’s left, booked well before any sale or handover date.' },
        ],
      },
      {
        heading: 'Where the deadline comes from',
        body: [
          'Usually from the home itself. When a sole owner or tenant-in-common of an HDB flat dies, HDB expects the executor or administrator to apply for transmission within six months of the grant, and to transfer the flat to an eligible beneficiary or sell it within the following twelve months. A surviving joint owner simply keeps the flat. For a rented home, the tenancy sets the date. Our guide to [clearing a late parent’s HDB flat](/estates/clearing-a-parents-hdb-flat) covers each case.',
        ],
      },
    ],
    help: {
      heading: 'When the family would rather not do the clearing',
      body: 'Junk To Clear clears whole homes, including furniture, appliances and general junk. It says it donates or recycles what can be reused and sends the rest to NEA-authorised incineration plants. It doesn’t take hazardous waste such as paint, solvents or chemicals. Quotes are based on what there is and where it is.',
      href: junkToClear.residential,
      linkLabel: 'See Junk To Clear’s home clearance',
    },
  },
  {
    slug: 'handover',
    label: 'Selling or letting',
    h1: 'Handing over a home you’ve sold or let',
    metaTitle: 'Handing Over a Sold or Rented Home in Singapore',
    metaDescription:
      'Clearing a home for someone else to move into: what vacant possession means at completion, and what to do when a tenant leaves belongings behind.',
    lede: 'Selling and letting end with the same obligation: an empty home, handed over on a date someone else is relying on. These guides cover what has to be gone, what can stay if it’s agreed, and what to do when things are left behind.',
    audience: 'For sellers and landlords',
    summary: 'Vacant possession at completion, and belongings a tenant leaves behind.',
    sections: [
      {
        heading: 'One date drives everything',
        body: [
          'For a sale, it’s completion. For a tenancy, it’s the day the lease ends and the next person gets the keys. Work backwards from that date: the clearing, any repairs, and the final clean each need their own slot, and the clearing has to come first, because the other two can’t happen around furniture.',
          'Leave slack in the last week. The final tenth of a home, the storeroom, the tops of the wardrobes, the household shelter, is where clearing always slows down, and it’s better to find that out with days to spare than on the morning of the handover.',
        ],
      },
      {
        heading: 'Put what stays in writing',
        body: [
          'Most handover disputes aren’t about what was left behind but about whether it was supposed to be. A buyer may have agreed to take the wardrobes; a tenant may have been told the fridge could stay. If the sale documents or the tenancy agreement list what stays, that list settles it. If they don’t, agree it in writing before the handover date, not at the inspection.',
        ],
      },
    ],
    help: {
      heading: 'When the deadline is close',
      body: 'Junk To Clear removes furniture, appliances and general junk from homes, and quotes upfront based on what there is and where it is. It recommends booking as early as you can, and its team calls 15 to 30 minutes before arriving.',
      href: junkToClear.residential,
      linkLabel: 'See Junk To Clear’s home clearance',
    },
  },
  {
    slug: 'buildings',
    label: 'Condos & strata',
    h1: 'Bulky waste and items left behind in condos and strata buildings',
    metaTitle: 'Bulky Waste in Condos: A Guide for MCSTs',
    metaDescription:
      'For MCSTs and managing agents in Singapore: handling bulky waste, renovation debris and items left in common areas, with notice templates you can adapt.',
    lede: 'The bin centre, the corridors and the car park are common property, and what residents and contractors leave there becomes the management’s problem. These guides set out a fair process, and the notice templates give you the wording.',
    audience: 'For MCSTs, managing agents and building managers',
    summary: 'Bin centres, corridors, and a fair process for things left in common areas.',
    sections: [
      {
        heading: 'Why it lands on the management',
        body: [
          'The bin centre, corridors, staircases and car park are common property, and keeping common property in order is one of the MCST’s core duties. So when a resident leaves a sofa beside the bins or a contractor leaves renovation debris in the loading bay, the problem, and often the cost, falls on every owner through the management fund.',
          'Most of it is avoidable. Residents usually dump bulky items because they don’t know what else to do, not because they want to break a rule. A published process, a renovation approval that makes debris the contractor’s job, and a fair notice-and-wait routine for what is still left behind deal with most of it.',
        ],
      },
      {
        heading: 'Fair, written, and recorded',
        body: [
          'Whatever process you use, three things make it hold up when an owner disputes it: it follows your by-laws, it gives notice in writing before anything is removed, and it is recorded, with photos, dates and copies of the notices. The guides below cover each of those, and the notice templates give you wording to start from.',
        ],
      },
    ],
    help: {
      heading: 'When the bin centre needs clearing',
      body: 'Junk To Clear clears bulky waste for condos and commercial buildings: furniture, appliances, renovation debris and general junk. It gives commercial clients a certificate of disposal on request, which is useful when a council has to account for the cost. It doesn’t take hazardous waste.',
      href: junkToClear.business,
      linkLabel: 'See Junk To Clear’s commercial disposal',
    },
  },
  {
    slug: 'business',
    label: 'Business premises',
    h1: 'Clearing business premises at the end of a lease',
    metaTitle: 'Clearing Business Premises at the End of a Lease',
    metaDescription:
      'For tenants and facilities managers in Singapore: what reinstatement means, how to clear an office or unit, and how to dispose of files, laptops and e-waste.',
    lede: 'A lease usually ends with an obligation to hand the unit back in an agreed condition, by a date, with a deposit riding on it. These guides cover what reinstatement means, how to clear the unit, and how to dispose of files, computers and e-waste without creating a data problem.',
    audience: 'For tenants, office managers and facilities managers',
    summary: 'Reinstatement, clearing the unit, and disposing of files and devices properly.',
    sections: [
      {
        heading: 'Read the lease before you book anyone',
        body: [
          'The lease decides almost everything: whether you have to reinstate at all, to what standard, by when, and whether the landlord can do the works and charge you instead. Find the reinstatement clause, the handover provisions and anything on the security deposit, and ask the landlord or building management for its reinstatement specification or fit-out guide, which usually sets out what “bare shell” means in that building.',
        ],
      },
      {
        heading: 'Clear in the right order',
        body: [
          'Deal with anything that holds data first: filing cabinets, archive boxes, laptops, phones, servers and the hard drives inside printers and copiers. Then decide what moves to the new premises, what can be sold or donated, and what has to be disposed of. Only then should the strip-out start. Getting the order wrong is how a box of personnel files ends up in a skip.',
        ],
      },
    ],
    help: {
      heading: 'When the unit has to be empty by a date',
      body: 'Junk To Clear clears offices and commercial units: furniture, e-waste, renovation debris and documents for destruction. It gives commercial clients a certificate of disposal on request, and it also takes on renovation and reinstatement work.',
      href: junkToClear.business,
      linkLabel: 'See Junk To Clear’s commercial disposal',
    },
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
