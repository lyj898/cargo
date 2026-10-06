import type { Guide } from '../model';
import { junkToClear } from '../links';
import { sources } from '../sources';

// "JTC" in these guides would be ambiguous: in Singapore it means JTC
// Corporation, the government's industrial landlord. Always write "JTC
// Corporation" for the landlord and "Junk to Clear" for the disposal company we refer jobs to.

// Business premises at the end of a lease. The reader is an office manager or
// a facilities manager with a lease end date, a landlord's inspection, and a
// deposit at stake. These guides lean on what the lease says, because that is
// what actually governs reinstatement, and on the PDPA and NEA rules for the
// parts of a clear-out that carry data or count as e-waste.

export const businessGuides: Guide[] = [
  {
    hub: 'business',
    slug: 'reinstatement',
    label: 'Reinstatement at the end of a lease',
    metaTitle: 'Office Reinstatement in Singapore: What Bare Shell Means',
    metaDescription:
      'What reinstatement means at the end of a commercial lease in Singapore, what “bare shell” and “original condition” usually cover, and how to plan the clear-out.',
    h1: 'Reinstatement at the end of a lease: what “bare shell” means and how to plan it',
    lede: 'Many commercial leases end with a reinstatement clause: hand the unit back as you found it, or as bare shell, by the last day of the term. How much work that is depends on the wording and on what you built. Read it early, because the clear-out, the works and the landlord’s inspection all have to fit before the lease ends.',
    summary: 'What the clause usually requires, and a timeline that finishes before the lease does.',
    keyPoints: [
      'The lease decides what you owe. Read the reinstatement clause and ask for the landlord’s reinstatement specification before you book anyone.',
      '“Bare shell” usually means taking out what you added, such as partitions, ceilings, flooring, cabling and signage, but the building’s own specification is what counts.',
      'The works normally have to be finished before the lease ends, not started on the last day. Plan backwards from the handover inspection.',
      'Clear the unit in order: data-bearing items first, then what moves, what’s sold or donated, what’s disposed of, and only then the strip-out.',
    ],
    sections: [
      {
        heading: 'Read the clause, not the summary',
        body: [
          'Reinstatement is a contract question before it’s a building one. The same office can need extensive work under one lease and very little under another, depending on what the clause says. Find these in the lease before anything else:',
        ],
        bullets: [
          'The standard the unit must be returned to: bare shell, its original condition when you took it, or its condition at the start of the lease “fair wear and tear excepted”.',
          'Who decides what that means in practice, usually by reference to the landlord’s specification or fit-out guide.',
          'The deadline: whether the works must be complete by the last day of the term, and whether there’s a joint inspection before handover.',
          'Whether the landlord can choose to keep some of your fit-out, or do the reinstatement itself and charge you for it.',
          'What happens to the security deposit, and what the landlord can deduct from it.',
        ],
        after: [
          'If the lease refers to plans or a schedule of condition from when you moved in, find them. They’re the best evidence of what “original condition” looked like.',
        ],
      },
      {
        heading: 'What “bare shell” usually covers',
        body: [
          'Buildings define it differently, so treat this as a starting point for the conversation with the landlord rather than a rule. In an office, bare shell commonly means removing what the tenant installed: partitions and doors, false ceilings, carpet and raised flooring, the tenant’s own lighting, power and data cabling, pantry fittings, and signage. Walls, floors and ceilings are then made good to the base building standard.',
          'Anything you remove creates waste, some of it bulky and some of it e-waste. Price the disposal as part of the reinstatement, not as an afterthought.',
        ],
      },
      {
        heading: 'Build the timeline backwards',
        body: ['Start from the date the unit has to be handed back and work towards today:'],
        steps: [
          {
            title: 'Get the landlord’s specification and agree the scope',
            body: 'Ask for the reinstatement specification and, if you can, walk the unit with the landlord or building manager so that you agree what has to go before a contractor quotes.',
          },
          {
            title: 'Deal with data-bearing items',
            body: 'Files, archive boxes, laptops, phones, servers, and the hard drives inside printers and copiers. See [disposing of company files, laptops and e-waste](/business/disposing-of-records-and-devices).',
          },
          {
            title: 'Move, sell, donate or dispose',
            body: 'Decide what goes to the new premises, what can be sold or donated, and what has to be disposed of. Book the removal of loose furniture before the strip-out starts.',
          },
          {
            title: 'Carry out the works',
            body: 'The strip-out and making good, done by a contractor working to the building’s rules on access, working hours, noise and debris removal. Check which approvals the works need before they start: see below.',
          },
          {
            title: 'Inspect and hand over',
            body: 'A joint inspection with the landlord, a list of anything still to fix, and the return of keys and access cards. Leave time before the last day of the lease for that list.',
          },
        ],
      },
      {
        heading: 'If your landlord is JTC Corporation or HDB',
        body: [
          'Government landlords publish their own rules, and they’re specific about timing. [JTC Corporation](https://www.jtc.gov.sg/get-help/managing-your-tenancy-or-lease/returning-your-premises-upon-lease-expiry) requires its tenants to reinstate before the lease expires. It arranges a joint site inspection about six months ahead, sets the reinstatement requirements after it, and charges double rent if reinstatement isn’t finished or the tenant stays on.',
        ],
        timeline: {
          caption: 'JTC Corporation: returning premises at lease expiry',
          milestones: [
            { when: 'About 6 months before', what: 'Joint site inspection. JTC Corporation then sets the reinstatement requirements.' },
            { when: 'Before expiry', what: 'Reinstatement finished and the premises handed back.' },
            { when: 'After expiry', what: 'Double rent if reinstatement isn’t finished, or the tenant stays on.' },
          ],
        },
        after: [
          '[HDB](https://www.hdb.gov.sg/shops-and-offices/managing-an-hdb-shop-or-office/terminate-tenancy) requires tenants of its shops and offices to restore the premises to their original condition and remove their furniture, fixtures and fittings, as the tenancy agreement sets out. If they don’t, HDB does the reinstatement itself and recovers the cost.',
        ],
      },
      {
        heading: 'Approvals and building rules',
        body: [
          'Much of an office strip-out is minor work in regulatory terms. Demolishing non-load-bearing walls and suspended false ceilings, and replacing floor and wall finishes, are among the [minor works BCA doesn’t require plans for](https://www1.bca.gov.sg/guidelines-and-requirements/building-works-not-requiring-approval/). Anything structural isn’t, and BCA advises using a qualified professional. Changes to sprinklers, exit signs, fire doors or escape routes need [SCDF’s approval](https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/plan-approval) before work starts, which can matter when a fit-out is being taken back to the base layout.',
          'Most managed buildings also have rules for contractors: a permit to work, insurance, loading bay and service lift bookings, and limits on noisy work during office hours. Ask building management for them early, because a strip-out that can only happen after hours takes longer, and costs more, than one that can run through the day.',
        ],
      },
      {
        heading: 'Paying instead of doing the works',
        body: [
          'Some landlords will accept a sum in place of the reinstatement, often when the next tenant is happy to take over the fit-out, or when the landlord plans its own works. It can save a lot of time, but only if it’s agreed in writing, with the amount and what it covers stated. Raise it early; it’s much harder to negotiate in the last month.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do we have to reinstate if the next tenant wants our fit-out?',
        a: 'Only the landlord can release you from the reinstatement clause, so get the agreement in writing from the landlord, not the incoming tenant. It should say which parts of the fit-out can stay and that you won’t be charged for them later.',
      },
      {
        q: 'What if the reinstatement isn’t finished when the lease ends?',
        a: 'That depends on the lease. Commonly the landlord can complete the works and charge you, or deduct the cost from the deposit, and you may be liable for staying past the end of the term. Read the clause and talk to the landlord before the deadline, not after it.',
      },
      {
        q: 'Who pays for disposing of the stripped-out materials?',
        a: 'Whoever carries out the works, which is normally the tenant or its contractor. Ask for disposal to be priced in the reinstatement quote, and for a record of where the waste went. It must go through a waste collector licensed by NEA.',
      },
      {
        q: 'Is there a standard for reinstatement in retail leases?',
        a: 'Not at the normal end of a lease. The Code of Conduct for Leasing of Retail Premises, which qualifying retail leases signed from February 2024 must follow, deals with reinstatement only in particular cases, such as a landlord ending the lease early for redevelopment. Otherwise, your lease decides.',
      },
    ],
    sources: [
      sources.jtcLeaseExpiry,
      sources.hdbShopTermination,
      sources.bcaMinorWorks,
      sources.scdfPlanApproval,
      sources.mtiRetailCode,
      sources.neaCollection,
    ],
    related: ['/business/disposing-of-records-and-devices', '/buildings/bulky-waste-in-condos'],
    help: {
      heading: 'When the unit has to be empty and reinstated by a date',
      body: 'Junk to Clear, a renovation and disposal company we refer jobs to, clears offices and commercial units, including furniture, e-waste and renovation debris, and gives commercial clients a certificate of disposal on request. It also arranges reinstatement works through vetted contractors: you share photos, a floor plan and your requirements, and it reviews the scope before quoting.',
      href: junkToClear.renovation,
      linkLabel: 'See Junk to Clear’s reinstatement works',
    },
  },
  {
    hub: 'business',
    slug: 'disposing-of-records-and-devices',
    label: 'Disposing of company files, laptops and e-waste',
    metaTitle: 'Disposing of Company Files, Laptops and E-Waste in Singapore',
    metaDescription:
      'How Singapore businesses should dispose of files, computers, phones and e-waste when they move or close: PDPA duties, secure destruction and NEA’s rules.',
    h1: 'Disposing of company files, laptops and e-waste properly',
    lede: 'Filing cabinets and old laptops are the part of an office clear-out that can come back to bite. Personal data has to be disposed of properly under the PDPA, and e-waste has its own rules. This guide covers what to do with each before anyone starts carrying furniture out.',
    summary: 'PDPA duties, secure destruction, and where business e-waste has to go.',
    keyPoints: [
      'Deal with anything that holds data before the furniture: files, laptops, phones, servers, drives, and the hard drives inside printers and copiers.',
      'Under the PDPA, you must stop keeping personal data once there’s no business or legal reason to keep it, and boxing old files into storage still counts as keeping them.',
      'Deleting files or formatting a drive isn’t enough. Wipe devices with a proper sanitisation method or have them physically destroyed, and keep a record of each one.',
      'Business e-waste must go through a waste collector licensed by NEA. Producers of equipment such as servers and large printers must take back units they supplied, free of charge.',
      'Get a certificate for every destruction job, and keep it with a list of what was destroyed.',
    ],
    sections: [
      {
        heading: 'Start with what holds data',
        body: [
          'An office clear-out usually starts with the furniture, because it’s the biggest and most visible. Start with data instead. Walk the premises and list everything that might hold personal or confidential information:',
        ],
        bullets: [
          'Filing cabinets, pedestals, archive boxes and the storeroom.',
          'Laptops, desktops, servers and network storage.',
          'External hard drives, USB sticks, memory cards and old backup tapes.',
          'Phones and tablets, including old ones in drawers.',
          'Printers, copiers and scanners, many of which have a hard drive that keeps copies of what was printed or scanned.',
          'CCTV recorders, door access systems and visitor management tablets.',
        ],
        after: [
          'Lock that list down before anything else leaves. It’s easy for a box of files or a laptop to go out with the furniture by accident, and once it has, you can’t get it back.',
        ],
      },
      {
        heading: 'What the PDPA expects',
        body: [
          'Two obligations in the Personal Data Protection Act matter most in a clear-out. The Protection Obligation requires reasonable security arrangements against unauthorised access, disposal and similar risks, and against losing any device or storage medium that holds personal data. The Retention Limitation Obligation requires you to stop keeping documents containing personal data, or anonymise them, once they no longer serve the purpose they were collected for and there’s no legal or business reason to keep them.',
          'The PDPC’s [advisory guidelines](https://www.pdpc.gov.sg/assets/34058be5-ae13-4c40-89e6-1c945d19f65c) are specific about what “stop keeping” means: returning the documents, destroying them, for example by shredding, or anonymising the data. Locking files away, sending them to a warehouse, or moving them to another party you control all still count as keeping them. So a lease-end clear-out is a good moment to destroy what you no longer need, rather than paying to store it.',
          'For computers and other hardware, the PDPC’s guide to [data protection practices for ICT systems](https://www.pdpc.gov.sg/assets/c752cf2b-844b-4163-82a5-ae5a9eb5c982) says to wipe or destroy data securely before disposing of equipment, using physical destruction, degaussing or a shredding service.',
        ],
        note: 'The maximum financial penalty under the PDPA is S$1 million, or 10% of annual Singapore turnover for an organisation whose turnover there is above S$10 million, whichever is higher.',
      },
      {
        heading: 'Paper files',
        body: [
          'First, separate what you must keep. Accounting, tax and employment records have legal retention periods, so check them with your accountant before anything is destroyed. Then deal with the rest in one of two ways: shred it on site, or use a secure destruction service that collects in locked bins and gives you a certificate afterwards. IMDA’s short guide to [disposing of personal data](https://www.imda.gov.sg/assets/0df83824-76d5-49e6-80fd-ee9a954692aa.pdf) covers the methods: shredding, pulping and incineration.',
          'Never put personal files in general recycling, a skip, or a bin bag with the office rubbish. Once it has left your control, you can’t show what happened to it.',
        ],
      },
      {
        heading: 'Computers, phones and drives',
        body: [
          'Deleting files and emptying the recycle bin leaves the data recoverable, and so does a quick format. For a device you’ll reuse, sell or donate, use a proper sanitisation method that overwrites or cryptographically erases the storage. For drives that have held sensitive data, or that won’t wipe, physical destruction is the safer choice.',
          'Keep a register as you go: the device, its serial number, how it was wiped or destroyed, when, and by whom. It takes minutes per device and it’s the record you’ll want if anyone ever asks.',
          'Licensed e-waste recyclers are themselves required to erase or destroy the data on devices they receive. Treat that as a second line of defence, not the first: wipe the devices before they leave, and keep your own record.',
        ],
      },
      {
        heading: 'E-waste has its own route',
        body: [
          'Old computers, screens, printers and phones are waste like anything else in a clear-out, and any business that disposes of waste must use a [collector licensed by NEA](https://www.nea.gov.sg/our-services/waste-management/waste-collection-systems). An unlicensed “free pickup” is one way office equipment ends up dumped, and NEA has prosecuted operators who took customers’ furniture and debris and dumped it instead of paying for disposal.',
          'For larger equipment there’s a free route. Since July 2021, producers of regulated non-consumer electronics, such as servers, network switches, printers over 20 kg and industrial batteries, have had to collect units they supplied when a customer asks. They can’t charge for collection or disposal, though they may charge for dismantling. [NEA’s e-waste page](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/extended-producer-responsibility-%28epr%29-system-for-e-waste-management-system) lists the products covered.',
          'Household channels don’t cover offices. ALBA’s free doorstep collection of large appliances is for homes only.',
        ],
        note: 'Chemicals and anything classed as toxic industrial waste can only go to a toxic industrial waste collector licensed by NEA. General clearance companies don’t take them, and that includes Junk to Clear, the disposal company we refer jobs to.',
      },
      {
        heading: 'Keep the paperwork',
        body: [
          'By the end, you should have a destruction certificate for every batch of files and devices, the device register, and a note of where the rest of the e-waste went. File them with the lease-end records. If a question about a data leak ever comes up, that file is how you show the clear-out was handled properly.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is deleting files or formatting a laptop enough?',
        a: 'No. Deleted files and quickly formatted drives can often be recovered with freely available tools. Use a sanitisation method that overwrites or cryptographically erases the drive, or have it physically destroyed, and record which you did.',
      },
      {
        q: 'Can we donate or sell our old laptops?',
        a: 'Yes, once they’ve been properly wiped and you’ve recorded how. Remove any company asset tags and log the devices out of your management and security systems first, so they aren’t still linked to your accounts.',
      },
      {
        q: 'What happens if personal data is disposed of carelessly?',
        a: 'The PDPC can impose a financial penalty of up to S$1 million, or up to 10% of annual Singapore turnover for an organisation whose turnover there is above S$10 million. Beyond the penalty, a data leak from a clear-out is hard to explain to the people whose data it was.',
      },
      {
        q: 'Can we just box up old files and put them in storage?',
        a: 'You can, but under the PDPA stored files still count as files you’re keeping. If there’s no longer a legal or business reason to keep them, the obligation is to destroy them or anonymise the data, not to move them somewhere else.',
      },
    ],
    sources: [
      sources.pdpcKeyConcepts,
      sources.pdpcIct,
      sources.pdpcElectronic,
      sources.imdaDisposal,
      sources.pdpcEnforcement,
      sources.neaCollection,
      sources.neaEwasteEpr,
      sources.neaToxic,
    ],
    related: ['/business/reinstatement', '/estates/before-you-throw-anything-out'],
    help: {
      heading: 'When you need proof it was destroyed',
      body: 'Junk to Clear, a disposal company we refer jobs to, has a secure disposal service covering document shredding and product destruction. It says every job comes with video or photo proof and a destruction certificate, which is the record worth keeping on file.',
      href: junkToClear.secure,
      linkLabel: 'See Junk to Clear’s secure disposal',
    },
  },
];
