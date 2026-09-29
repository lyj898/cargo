import type { Guide } from '../model';
import { junkToClear, homeToClean } from '../links';
import { sources } from '../sources';

// Selling or letting. The reader owns the home but is handing it to someone
// else on a date that person is relying on. Boundary: OurKampung writes for the
// tenant ending their own tenancy; these guides write for the owner.

export const handoverGuides: Guide[] = [
  {
    hub: 'handover',
    slug: 'vacant-possession',
    label: 'Vacant possession on completion day',
    metaTitle: 'Vacant Possession in Singapore: What Must Go by Completion',
    metaDescription:
      'What vacant possession means when you sell an HDB flat or a private home in Singapore, what can stay if it’s agreed, and how to plan the clearing before completion.',
    h1: 'Vacant possession: what has to be gone by completion day',
    lede: 'When you sell a home in Singapore, you normally hand it over empty on completion day, apart from whatever you’ve agreed to leave. That sounds simple until the last week, when the storeroom is still full and the movers can only come on Saturday. This is what vacant possession means, and how to plan the clearing so completion isn’t put at risk.',
    summary: 'What “empty” means at completion, what can stay, and a clearing plan that finishes in time.',
    keyPoints: [
      'Vacant possession means nobody is living in the home and everything you haven’t agreed to leave is gone by completion.',
      'Anything you and the buyer have agreed will stay, such as built-in wardrobes, curtains or the aircon, should be listed in writing. Everything else goes.',
      'For an HDB resale, completion is about eight weeks after HDB accepts the resale application, and you move out before the completion appointment.',
      'HDB’s temporary extension of stay allows up to three months after completion, but only for sellers already committed to buying a completed home, and only if the buyers agree.',
      'Plan backwards from completion and aim to have the home empty several days early, so there’s room for a second trip and a final clean.',
    ],
    sections: [
      {
        heading: 'What vacant possession means',
        body: [
          'On completion day the buyer takes over an empty home: no occupants, and none of your belongings except what the sale includes.',
          'For an HDB resale, HDB’s terms require the flat to be handed over with vacant possession at completion, and HDB asks sellers to move out before the completion appointment, where the keys are handed over. A few other things have to be settled first: service and conservancy charges up to the completion date, property tax to the end of the year, and any renovation works HDB hasn’t approved, which must be removed or regularised. [HDB’s completion page for sellers](https://www.hdb.gov.sg/managing-my-home/selling-a-flat/process-for-selling-a-flat/resale-flat-completion) lists them.',
          'Private sales commonly adopt the [Law Society’s Conditions of Sale 2020](https://www.lawsociety.org.sg/wp-content/uploads/2020/11/The-Law-Society-of-Singapores-Conditions-of-Sale-2020.pdf), as the standard option to purchase published by the Council for Estate Agencies does. Under them, on a sale with vacant possession, movable property that isn’t part of the sale must be removed by completion unless you and the buyer agree otherwise, and the home is handed over in the condition it was in when the option was granted, apart from fair wear and tear.',
        ],
      },
      {
        heading: 'What can stay, and how to agree it',
        body: [
          'Some things usually stay with a home because they’re part of it: built-in wardrobes and kitchen cabinets, for instance. Loose furniture and most appliances are yours to take unless you agree otherwise. Curtains, lights and the aircon can go either way, and that uncertainty is exactly why it’s worth writing down.',
          'If the buyer wants something to stay, list it in the sale documents or in a written inventory both of you sign. If you want to leave something the buyer hasn’t asked for, ask first. What feels like a favour to you, an old sofa or a bed frame, can look like a clearing bill to them.',
        ],
      },
      {
        heading: 'The dates that matter',
        body: [
          'For an HDB resale, completion is about eight weeks after HDB accepts the resale application. The date in HDB’s acceptance email is the earliest possible, and HDB won’t bring it forward. Pushing it back needs signed confirmation from both parties within a week of the acceptance letter, so check straight away whether the date works for your move.',
          'For a private sale, completion is whatever date the contract sets. There’s no standard period, so confirm the date in the option or the sale and purchase agreement with your lawyer as soon as it’s signed, and plan from that.',
        ],
        timeline: {
          caption: 'HDB resale: the dates a seller works to',
          milestones: [
            { when: 'Application accepted', what: 'HDB’s acceptance email gives the earliest completion date.' },
            { when: 'Within a week', what: 'The last chance to defer completion, with both parties’ signed confirmation.' },
            { when: 'About 8 weeks', what: 'Completion. You’ve moved out, and the keys are handed over.' },
            { when: 'Up to 3 months after', what: 'Only with HDB’s temporary extension of stay, agreed with the buyers.' },
          ],
        },
        note: 'If a seller or buyer dies before completion, the Law Society’s conditions allow completion to be postponed for a reasonable period, up to three months from the death, so that a grant can be obtained. If you’re selling a late relative’s home, our guide to [clearing a late parent’s HDB flat](/estates/clearing-a-parents-hdb-flat) covers HDB’s timelines for the estate.',
      },
      {
        heading: 'Plan the clearing backwards from completion',
        body: ['A plan that works for many sales, counting back from completion day:'],
        steps: [
          {
            title: 'As soon as the sale is agreed',
            body: 'Decide what’s coming with you, what’s staying under the agreement, and what has to go. Book movers early if you’re moving house at the same time.',
          },
          {
            title: 'Four to six weeks out',
            body: 'Sell, give away or donate what someone else can use. Charities and buyers need time to collect, and anything still here in the last week will probably be disposed of instead.',
          },
          {
            title: 'Two to three weeks out',
            body: 'Book the clearing for whatever’s left, for a date several days before completion. Tell the clearance company about anything awkward, such as heavy items, a household shelter full of boxes, or paint and chemicals they may not take.',
          },
          {
            title: 'The last few days',
            body: 'Walk through the empty home, open every cupboard, and check the household shelter, the service yard and the tops of the wardrobes. Then clean, take photos of each room, and gather the keys and access cards.',
          },
        ],
      },
      {
        heading: 'If something is left behind',
        body: [
          'At best, anything left behind means an awkward phone call and a clearing bill. At worst, it holds up completion or becomes a claim against you. The simplest protection is the final walk-through and a set of dated photos of the empty home, taken just before you hand over the keys.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I leave furniture behind if the buyer agrees?',
        a: 'Yes, as long as the agreement is in writing and lists what’s staying. A verbal “it’s fine” is easy to forget or dispute by completion day.',
      },
      {
        q: 'What if I need to stay in the flat after completion?',
        a: 'For an HDB resale, HDB’s [temporary extension of stay](https://www.hdb.gov.sg/managing-my-home/selling-a-flat/process-for-selling-a-flat/resale-flat-application/request-for-temporary-extension-of-stay) lets you stay up to three months after completion. It’s only open to sellers who have already committed to buying a completed property when they submit the resale application, the buyers must agree, and the arrangement has to be stated in the application. It can’t be extended. For a private sale, staying on after completion is a matter for the contract, so agree it through your lawyers.',
      },
      {
        q: 'Do I have to clean the home before handing it over?',
        a: `Check the sale documents, but even where it isn’t required, handing over a clean home avoids a dispute at inspection. Our sister brand HomeToClean arranges [move-out cleaning](${homeToClean.moveOut}).`,
      },
    ],
    sources: [sources.hdbResaleCompletion, sources.hdbExtensionOfStay, sources.lawSocietyConditions, sources.ceaSelling],
    related: ['/handover/tenant-left-belongings', '/estates/clearing-a-parents-hdb-flat'],
    help: {
      heading: 'When completion is close and the home isn’t empty',
      body: 'Junk to Clear removes furniture, appliances and general household items, and quotes upfront based on what there is and where it is. It recommends booking as early as you can, so don’t leave it to completion week. It doesn’t take hazardous waste such as paint, solvents or chemicals.',
      href: junkToClear.residential,
      linkLabel: 'See Junk to Clear’s home clearance',
    },
  },
  {
    hub: 'handover',
    slug: 'tenant-left-belongings',
    label: 'When a tenant leaves belongings behind',
    metaTitle: 'Tenant Left Belongings Behind? A Singapore Landlord’s Guide',
    metaDescription:
      'What a Singapore landlord can do when a tenant moves out and leaves furniture or belongings behind: the tenancy agreement, written notice, the deposit, and clearing.',
    h1: 'When a tenant moves out and leaves things behind',
    lede: 'The tenancy has ended, the keys are back, and the flat is half full of someone else’s things. It’s tempting to clear the lot and move on. Before you do, remember that those things may still belong to the tenant, and a short written process protects you if they come back for them.',
    summary: 'The tenancy agreement, written notice, the deposit, and when you can clear.',
    keyPoints: [
      'Things a tenant leaves behind don’t automatically become yours. Treat them as the tenant’s until you’ve given them a fair chance to collect.',
      'Check the tenancy agreement first. If it says what happens to items left at the end, follow it.',
      'Write to the tenant with photos, a list and a deadline to collect, and keep a copy of everything you send.',
      'Deduct clearing costs from the deposit only if the agreement allows it, and keep the invoices to show the cost was reasonable.',
    ],
    sections: [
      {
        heading: 'Their things are still theirs',
        body: [
          'When a tenancy ends, the flat comes back to you, but what the tenant left in it doesn’t automatically come with it. A tenant who returns for a laptop, a set of documents or a piece of furniture a week later, and finds it thrown out, has a grievance you’d rather not have to answer.',
          'That doesn’t mean you have to store a stranger’s broken chairs forever. It means clearing after a short, written, fair process, rather than straight away.',
          'There’s no Singapore law or official guidance written specifically for belongings a tenant leaves behind. What governs it is your tenancy agreement and, where that says nothing, acting reasonably and being able to show that you did.',
        ],
      },
      {
        heading: 'Check the tenancy agreement',
        body: [
          'Many tenancy agreements say what happens to items left in the property at the end of the lease, and whether the cost of removing them can come out of the deposit. If yours does, that clause is the process.',
          'The Council for Estate Agencies’ [template tenancy agreement](https://www.cea.gov.sg/consumers/transacting-on-your-own/renting-or-renting-out-a-private-residential-property/) for private homes is one example. Its end-of-tenancy checklist has the tenant remove their belongings, and gives the landlord the right to remove or dispose of anything left behind. It only applies if your agreement used it: CEA publishes the template as a guide, and nobody has to use it.',
          'If your agreement is silent, the steps below are a sensible way to act fairly and leave a record.',
        ],
      },
      {
        heading: 'Contact the tenant in writing',
        body: [
          'Send a message to every contact you have for the tenant, including email and WhatsApp, and to their agent if they had one. Say what was left, attach photos, and give a clear date by which they need to collect it or tell you they don’t want it. Say what will happen after that date.',
          'Keep it short and neutral. The aim isn’t to win an argument; it’s to show later that the tenant knew and had a fair chance.',
        ],
      },
      {
        heading: 'Store what has value',
        body: [
          'Clear obvious rubbish straight away: food, broken items, packaging. For anything with value, such as electronics, documents, jewellery or good furniture, keep it safe until the deadline passes. Documents like passports, NRICs, bank letters and certificates deserve special care. Keep them aside and make a specific effort to return them.',
        ],
      },
      {
        heading: 'The deposit and the cost of clearing',
        body: [
          'Deduct the cost of clearing from the deposit only if the tenancy agreement allows deductions of that kind, and only for what you actually spent. Keep the photos, your messages to the tenant, and the clearing invoice, so you can show the charge was reasonable.',
          'If the tenant disputes it, the [Small Claims Tribunals](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim) hear disputes over tenancies of residential premises of up to two years, for claims up to S$20,000, or S$30,000 if both sides agree in writing. For disputes that don’t involve a property agent, CEA points landlords and tenants to mediation at a Community Mediation Centre, or to the tribunals.',
        ],
      },
      {
        heading: 'Getting the flat ready again',
        body: [
          `Once the deadline has passed and anything of value has been returned or dealt with, clear the rest, then clean and fix what needs fixing before the next tenant moves in. Our sister brand HomeToClean arranges [move-out cleaning](${homeToClean.moveOut}) if you’d rather not do it yourself.`,
          'Take dated photos of the empty, clean flat before the new tenancy starts. They’re the starting point for the next inventory, and the answer to the next dispute.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long do I have to keep a tenant’s belongings?',
        a: 'No period is set in law. Follow your tenancy agreement if it sets one. If it doesn’t, give the tenant a reasonable written deadline, long enough for someone who has moved away to arrange a collection, and keep a record that you did.',
      },
      {
        q: 'Can I deduct the cost of clearing from the deposit?',
        a: 'If the tenancy agreement allows it, and the cost is reasonable and documented. Keep the invoice and the photos. If the tenant disagrees, disputes over residential tenancies of up to two years can go to the Small Claims Tribunals.',
      },
      {
        q: 'What if the tenant left owing rent?',
        a: 'Treat it as a separate matter from the belongings. Don’t hold their things back as security for the rent without legal advice. Pursue the rent through the usual routes, and deal with the belongings through the written process above.',
      },
    ],
    sources: [sources.ceaRenting, sources.smallClaims],
    related: ['/handover/vacant-possession', '/buildings/items-left-in-common-areas'],
    help: {
      heading: 'When the flat needs clearing before the next tenant',
      body: 'Once the tenant’s deadline has passed, Junk to Clear can remove furniture, appliances and general household items, with an upfront quote based on what there is and where it is. It doesn’t take hazardous waste such as paint, solvents or chemicals.',
      href: junkToClear.residential,
      linkLabel: 'See Junk to Clear’s home clearance',
    },
  },
];
