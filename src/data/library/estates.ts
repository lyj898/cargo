import type { Guide } from '../model';
import { junkToClear, homeToClean } from '../links';
import { sources } from '../sources';

// Inherited homes: clearing a home after a death. The reader is grieving, often exhausted, sometimes abroad,
// and usually being told by someone that the flat "needs to be cleared". The
// guides slow that down: authority and paperwork first, clearing last.
//
// Tone: plain and practical, never breezy. No "declutter", no "fresh start".

export const estatesGuides: Guide[] = [
  {
    hub: 'estates',
    slug: 'clearing-a-parents-hdb-flat',
    label: 'Clearing a late parent’s HDB flat',
    metaTitle: 'Clearing a Late Parent’s HDB Flat: What to Do, in Order',
    metaDescription:
      'The order that works when you have to clear a parent’s HDB flat after they die in Singapore: authority, HDB’s rules, what to keep, and when to book the clearing.',
    h1: 'Clearing a late parent’s HDB flat: what to do, and in what order',
    lede: 'There’s no prize for clearing quickly, and a lot to lose by clearing in the wrong order. This is the sequence that protects the estate and the family: secure the flat, find the papers, settle who decides, work out what HDB needs, and only then clear.',
    summary: 'The sequence that protects the estate: secure, search, settle authority, check HDB’s rules, then clear.',
    keyPoints: [
      'Don’t clear anything in the first weeks. Lock the flat and search it for the will, money papers and valuables first.',
      'The contents belong to the estate. The executor named in the will, or an administrator if there’s no will, has authority over them, confirmed by a grant from the Family Justice Courts.',
      'How the flat was owned sets the timeline. A surviving joint owner keeps it. For a sole owner or tenant-in-common, HDB expects transmission within 6 months of the grant, then a transfer or sale within 12 months.',
      'Use the free routes first: town council bulky-item removal and free collection of large appliances.',
      'Book the clearing after the family has taken what it wants to keep, and well before the flat is sold, transferred or returned.',
    ],
    sections: [
      {
        heading: 'First, secure the flat. Don’t clear it',
        body: [
          'In the first days the job is to make the flat safe, not empty. Lock it, keep the keys with one or two named people, and agree as a family that nothing leaves until the home has been searched.',
          'Walk through and photograph every room as it is. The photos cost nothing and settle a lot later, when people remember things differently or someone asks what happened to a particular cabinet.',
          'Keep the electricity and water on. You’ll need both for the search and for the clearing itself, and a fridge that has been switched off for a month makes the job harder for everyone.',
        ],
      },
      {
        heading: 'Find the will and the papers',
        body: [
          'Search for the will and the paper trail before anything else. The will says who is in charge, and the papers show what the estate owns. Both are easy to lose in a clearance and hard to replace afterwards.',
          'Our guide to [what to find before anything is thrown out](/estates/before-you-throw-anything-out) goes room by room, including the places older Singaporeans often kept cash, gold and documents.',
        ],
      },
      {
        heading: 'Settle who has the authority to decide',
        body: [
          'Everything your parent owned forms part of their estate, including the furniture, jewellery and photographs in the flat. Authority over the estate lies with the executor named in the will or, if there’s no valid will, an administrator: a beneficiary who applies to the court. The [Family Justice Courts](https://www.judiciary.gov.sg/family/probate-and-administration) confirm that authority with a Grant of Probate for an executor, or a Grant of Letters of Administration for an administrator.',
          'My Legacy, the government’s end-of-life portal, says an executor must obtain the grant before they have the legal right to [distribute the estate](https://mylegacy.life.gov.sg/when-death-happens/wills-and-inheritance/). No official rule says the family must wait for the grant before touching anything, and securing and searching the flat shouldn’t wait. But giving things away, selling them or clearing them is disposing of the estate’s property. Agree it with the person who will hold the grant, and keep a record of what went where.',
        ],
        note: 'If there’s no will and the estate is small, the [Public Trustee’s Office](https://pto.mlaw.gov.sg/deceased-cpf-estate-monies/information-for-next-of-kin-estate-monies/) may administer some assets without a court grant, for estates worth up to S$50,000. It deals with money, shares and similar assets, not the contents of a home. It also won’t act in many common situations, including where the deceased was the sole owner of an HDB flat and a child is eligible to inherit it.',
      },
      {
        heading: 'How the flat was owned sets the deadline',
        body: [
          'HDB’s rules depend on how the flat was held, and they’re set out on its page on [keeping a flat after life events](https://www.hdb.gov.sg/managing-my-home/home-ownership/change-of-flat-owners-or-occupiers/retain-flat-following-life-events):',
        ],
        bullets: [
          '**Joint tenancy.** Your parent’s share passes to the surviving owner, who lodges a notice of death with the Singapore Land Authority, either themselves, through a lawyer, or through HDB. To keep the flat, the survivor must be a citizen or permanent resident, aged 21 or over, who meets HDB’s eligibility rules. HDB states no deadline for this.',
          '**Sole owner, or tenancy-in-common.** The share passes under the will or, without one, under the Intestate Succession Act. Once the grant is issued, the executor or administrator must apply to HDB for transmission of the flat within 6 months. They then have 12 months to transfer it to beneficiaries who are eligible to own it, or to sell it.',
          '**No beneficiary can or wants to keep it.** The flat is sold, and beneficiaries who aren’t eligible to own it still receive their share of the proceeds. Some flats can’t be sold: studio apartments, short-lease 2-room Flexi flats, Community Care Apartments and flats under the Lease Buyback Scheme. For those, the executor writes to HDB to return the flat instead.',
        ],
        timeline: {
          caption: 'Sole owner or tenancy-in-common: HDB’s timeline',
          milestones: [
            { when: 'After the death', what: 'Secure and search the flat. Nothing needs to leave yet.' },
            { when: 'Grant issued', what: 'Probate, or letters of administration, from the Family Justice Courts.' },
            { when: 'Within 6 months', what: 'The executor or administrator applies to HDB for transmission.' },
            { when: 'Within 12 months after', what: 'The flat is transferred to an eligible beneficiary, or sold. It has to be empty.' },
          ],
        },
        note: 'If the flat hadn’t reached its minimum occupation period by the date of death, selling it on the open market needs HDB’s approval. Ask the HDB branch that manages the flat early, because it changes the timeline.',
        after: [
          'For most families, the second timeline is the one that matters. A sale, a transfer or a return all need an empty flat, and a clearing squeezed into the last weeks of a 12-month window is a clearing done under pressure. Our guide to [vacant possession](/handover/vacant-possession) covers what an HDB buyer expects on completion day.',
        ],
      },
      {
        heading: 'Decide what stays in the family',
        body: [
          'Once the search is done, give everyone who should have a say a fair chance to ask for things before the clearing is booked. The simplest way is a shared album: photograph the furniture and anything of sentimental value, send it round, and set a date by which people have to say what they want.',
          'On the day family members come to collect, mark what is staying with coloured tape or sticky notes, so there’s no confusion when the clearing crew arrives. Anything unmarked is treated as going.',
        ],
        note: 'If the family can’t agree who keeps something valuable, don’t let it go in the clearing while the argument continues. Set it aside and let the executor or administrator decide in line with the will or the law on intestacy.',
      },
      {
        heading: 'Use the free routes first',
        body: [
          'Some of what’s left can go for free. Those routes won’t empty a whole flat, but they cut down what a paid clearing has to take:',
        ],
        bullets: [
          '**Town council bulky-item removal.** HDB town councils collect a few bulky items a month for residents at no charge, typically up to three, booked a few working days ahead and left outside the flat on the day. Most exclude renovation debris, built-in furniture and house-moving loads, so this suits a sofa or a mattress, not a full clear-out. Rules differ between councils, so check yours.',
          '**Large appliances.** Since January 2025, ALBA, the e-waste collector appointed by NEA, has collected large household appliances from any home for free. [NEA’s e-waste page](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/extended-producer-responsibility-%28epr%29-system-for-e-waste-management-system) explains how collection works.',
          '**Phones, computers, batteries and bulbs.** These go in the e-waste collection bins run under NEA’s scheme, once any photos or accounts the family needs are saved. Never put batteries in the general or blue recycling bins. NEA lists [where to recycle e-waste](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste).',
          '**Things someone else can use.** Charities, community groups and resale platforms take furniture and household goods in good condition, but most have limits on what they accept and need time to collect. Check before you plan around them.',
        ],
        note: 'Leaving furniture in the corridor or at the lift lobby for someone to take isn’t a free route. Since June 2026, HDB town councils’ by-laws treat abandoned objects on common property as litter, with fines of up to S$5,000.',
      },
      {
        heading: 'Then book the clearing',
        body: [
          'Book the clearing for after the family has collected what it’s keeping, and at least a week before any sale completion or handover date. That leaves room for a second trip if the job turns out bigger than it looked, which it often does once cupboards are opened.',
          'Before the day, tell the clearance company about anything they may not take. Most won’t remove paint, chemicals, solvents or other hazardous waste, and it’s better to know in advance than to find a pile left behind. Ask what they donate or recycle, and ask for photos of the empty flat if no one from the family will be there at the end.',
        ],
      },
      {
        heading: 'After the clearing',
        body: [
          `An empty flat usually needs a proper clean before it’s sold or handed over, especially if it was lived in for decades. HomeToClean, run by the same team as SwyftClear, arranges [move-out cleaning](${homeToClean.moveOut}) if you need it.`,
          'Take a final set of photos, return every key to whoever needs it next, and close the accounts that are no longer needed: utilities, the internet line, and any subscriptions still being charged.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How soon after a death should the flat be cleared?',
        a: 'There’s no rule, and no need to rush in the first weeks. The real deadline usually comes from what happens to the flat next: a sale, a handover, or a family member moving in. Work backwards from that date, and leave time for the search before anything is removed.',
      },
      {
        q: 'Can we clear the flat before probate is granted?',
        a: 'No official rule says you must wait, and securing and searching the flat shouldn’t. But the contents belong to the estate, and My Legacy notes that an executor needs the grant before they have the legal right to distribute it. Agree any clearing with whoever will hold the grant, keep a record of what went where, and set aside anything of value until they decide.',
      },
      {
        q: 'Who pays for the clearing?',
        a: 'Usually the estate, as part of the cost of administering it. Whoever pays should keep the invoice for the executor’s or administrator’s accounts.',
      },
      {
        q: 'What if my parent lived in an HDB rental flat?',
        a: 'Family members registered as occupiers can apply to HDB to [take over the tenancy](https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/change-of-tenancy) if they meet the eligibility conditions. If the flat is going back to HDB, it has to be returned with the keys, empty of occupants and belongings, restored to its original condition, and with the utility accounts closed. HDB doesn’t publish a timeframe for returning a flat after a tenant dies, so ask the HDB branch that manages it before you plan the clearing.',
      },
    ],
    sources: [
      sources.myLegacyDeath,
      sources.fjcProbate,
      sources.hdbLifeEvents,
      sources.myLegacyProperty,
      sources.pto,
      sources.hdbRentalTermination,
      sources.neaEwasteEpr,
    ],
    related: ['/estates/before-you-throw-anything-out', '/estates/clearing-from-overseas', '/handover/vacant-possession'],
    help: {
      heading: 'When the family would rather not do the clearing',
      body: 'Once the family has taken what it’s keeping, Junk to Clear, a disposal company we refer jobs to, can clear the rest of the flat: furniture, appliances and general household items. It says it donates or recycles what can be reused and sends the rest to NEA-authorised incineration plants. It doesn’t take hazardous waste such as paint, solvents or chemicals.',
      href: junkToClear.residential,
      linkLabel: 'See Junk to Clear’s home clearance',
    },
  },
  {
    hub: 'estates',
    slug: 'before-you-throw-anything-out',
    label: 'What to find before anything is thrown out',
    metaTitle: 'What to Find Before Clearing a Late Parent’s Home',
    metaDescription:
      'Before clearing a relative’s home in Singapore, find the will, the money trail, the property papers and the things only the family can judge. Where to look.',
    h1: 'What to find before anything is thrown out',
    lede: 'Once a home has been cleared, whatever was in it is gone. So before any clearing starts, someone should go through it for four kinds of thing: the will, the paper trail for money and property, valuables, and the things only the family can judge.',
    summary: 'The will, the money trail, valuables and keepsakes, and where people tend to keep them.',
    keyPoints: [
      'Search the whole home before anything is removed, including the household shelter, the tops of wardrobes, and inside books, bags and coat pockets.',
      'Look for the will first, then for anything that leads to money: bank, CPF, insurance, investment and property papers.',
      'Keep every document with an account number on it until the estate is settled, however old it looks.',
      'Photograph valuables where you find them, and list them for the executor before anything is shared out.',
      'Ask the family’s temple, church or mosque how to handle religious items, rather than putting them out with the rubbish.',
    ],
    sections: [
      {
        heading: 'Why the search comes first',
        body: [
          'A clearance is quick, and it can’t be undone. Once the lorry has left, there’s no going back for the envelope at the back of a drawer or the bank book inside a biscuit tin.',
          'The search also protects whoever is handling the estate. The executor or administrator has to account for what the person owned, and “it went out with the furniture” is a hard thing to explain to the rest of the family.',
          'If you can, do it with two people. It goes faster, it’s easier to bear, and nobody is left having to vouch alone for what was or wasn’t found.',
        ],
      },
      {
        heading: 'The will',
        body: [
          'Start with the will, because it names the executor, the person who will have authority over the estate, including what’s in the home. Check desk drawers, filing boxes, safes, and anywhere the person kept important papers. If you know who their lawyer was, ask them: lawyers often keep the original.',
          'If you can’t find one, search the [Wills Registry](https://wills.sal.sg/WillHome/Gettingstarted), which the Singapore Academy of Law runs. It doesn’t hold wills, but if the person registered theirs, it records who drew it up and where it’s kept. Next of kin search online, logging in with Singpass, and need the death certificate and proof of their relationship. Each search costs S$10, and the result comes by email in three to five working days.',
        ],
      },
      {
        heading: 'The paper trail for money and property',
        body: [
          'You don’t need to understand every document yet. You need to keep it. These are the papers that tell the executor what the estate owns and owes:',
        ],
        bullets: [
          'Bank statements, passbooks, cheque books and cards, including for accounts you didn’t know about.',
          'CPF statements. CPF savings aren’t covered by the will: they’re paid to the people named in a CPF nomination, or through the Public Trustee’s Office if there’s none. Property bought with CPF money and CPF investments are treated differently, which is one more reason to keep the papers.',
          'Insurance policies, premium notices and letters from insurers.',
          'Investment statements: shares, unit trusts, bonds and brokerage accounts.',
          'Property papers: HDB letters, the lease or title, loan statements and property tax bills.',
          'Tax letters, and letters from anyone the person owed money to or who owed them money.',
          'Keys you can’t match to a door. They may open a safe deposit box, a locker or a storage unit.',
        ],
        note: 'Keep anything with an account number on it until the estate is settled. An old statement is often the only sign that an account, a policy or a debt exists.',
      },
      {
        heading: 'Valuables, and where people keep them',
        body: [
          'It’s common to find cash, gold and jewellery in unexpected places: red packets tucked into books and cupboards, tins at the back of the kitchen cabinet, the pockets of clothes in the wardrobe, and the household shelter. Check before anything is bagged, and check again before the clearing crew arrives.',
          'Photograph valuables where you find them, then list them. The executor will need the list, and a record made at the time heads off later arguments about who took what.',
        ],
      },
      {
        heading: 'Photos, letters and the things only the family can judge',
        body: [
          'Photographs, letters, diaries, school report books, a recipe notebook with notes in the margin: these are worth nothing to anyone outside the family, and they’re the things people most regret losing. Box them separately and decide later, when there’s more time and less pressure.',
          'If the family is spread out, photograph or scan them and share the album before anything is divided, so that people abroad get the same chance to ask for something as people who can come to the flat.',
        ],
      },
      {
        heading: 'Religious items',
        body: [
          'Altars, deity statues, ancestral tablets, prayer items and holy books usually shouldn’t go out with the rubbish. Ask the family’s temple, church or mosque how they would like them handled. Many have a way of receiving or respectfully disposing of them, and some families prefer to hold a short prayer before they are moved.',
        ],
      },
      {
        heading: 'Phones, computers and accounts',
        body: [
          'Don’t reset or throw away the person’s phone, tablet or computer yet. They may hold photos the family wants, contacts who need to be told, and the only record of online banking, investment or insurance accounts. Keep them charged and set aside with any passwords you find.',
          'Look through recent emails and bank statements for subscriptions and bills that are still being paid, so they can be stopped.',
        ],
      },
      {
        heading: 'Then decide what goes where',
        body: [
          'When the search is done and the family has taken what it wants, what’s left usually falls into three groups: things someone else can use, things that need a particular disposal route, like electronics and large appliances, and everything else. The free routes for the first two, including town council bulky-item removal and free collection of large appliances, are set out in [clearing a late parent’s HDB flat](/estates/clearing-a-parents-hdb-flat#use-the-free-routes-first).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we start clearing before probate?',
        a: 'Searching and securing the home can, and should, start straight away. Giving things away, selling them or clearing them is a decision about the estate’s property, so agree it with the executor or the person applying to be administrator. My Legacy notes that an executor needs the grant before they have the legal right to distribute the estate.',
      },
      {
        q: 'How long should we keep the documents?',
        a: 'Until the estate is fully settled, and longer for anything to do with property or tax. When they’re no longer needed, shred them rather than putting them out for recycling, because they carry NRIC numbers and account details.',
      },
      {
        q: 'What if family members disagree about who keeps what?',
        a: 'Photograph and list everything of value first, and let the executor decide in line with the will. Where there’s no will, the law on intestacy decides who inherits. If it turns into a dispute, get legal advice before anything valuable leaves the home.',
      },
    ],
    sources: [sources.willsRegistry, sources.myLegacyAssets, sources.myLegacyCpf, sources.cpfWill, sources.myLegacyAccounts],
    related: ['/estates/clearing-a-parents-hdb-flat', '/estates/clearing-from-overseas', '/business/disposing-of-records-and-devices'],
    help: {
      heading: 'When the search is done',
      body: 'Once the family has taken what it wants to keep, Junk to Clear, a disposal company we refer jobs to, can clear the rest: furniture, appliances and general household items. It says it donates or recycles what can be reused. It doesn’t take hazardous waste such as paint, solvents or chemicals.',
    },
  },
  {
    hub: 'estates',
    slug: 'clearing-from-overseas',
    label: 'Clearing a family home from overseas',
    metaTitle: 'Clearing a Family Home in Singapore From Overseas',
    metaDescription:
      'Living abroad and responsible for clearing a late relative’s home in Singapore? How to plan one trip, who can act locally, and how to clear without being there.',
    h1: 'Clearing a family home in Singapore when you live overseas',
    lede: 'Being responsible for a home you can’t easily get to is its own kind of hard. The work still has to happen in the right order, but it has to be planned around a flight, a few days of leave, and people on the ground you trust. This is how to make one trip count, and how to handle what can be done remotely.',
    summary: 'Making one trip count, who acts locally, and how to clear without being there.',
    keyPoints: [
      'Decide early who acts for you in Singapore, and give them written instructions and a set of keys.',
      'Do the paperwork search and the family’s choosing on your trip. The clearing itself can happen after you’ve flown home.',
      'Keep the home secure and the essential bills paid while it’s empty.',
      'If you clear remotely, agree the scope in writing and ask for photos or video of every room before and after.',
    ],
    sections: [
      {
        heading: 'Decide who acts in Singapore',
        body: [
          'Someone needs to be able to open the door. That might be a relative, a family friend, a neighbour, or a professional, but it should be one named person with a set of keys and clear written instructions from you, so nobody else is left guessing what they’re allowed to do.',
          'If you’re the executor, or you’re applying to be the administrator, living abroad doesn’t stop you. The grant comes from the [Family Justice Courts](https://www.judiciary.gov.sg/family/probate-and-administration), and a Singapore lawyer can tell you what the application needs from you and how documents can be signed from where you live. Plan your trip around the things that genuinely need you in person.',
        ],
      },
      {
        heading: 'Make one trip count',
        body: ['One trip is often enough if it’s planned around the things that genuinely need someone present:'],
        steps: [
          {
            title: 'Before you fly, book the appointments',
            body: 'The lawyer, the bank and any other institution that needs to see you in person. Ask each one what to bring, so you don’t lose a day to a missing document.',
          },
          {
            title: 'Early in the trip, do the search',
            body: 'Go through the home for the will, papers and valuables before anything else. Our checklist of [what to find before anything is thrown out](/estates/before-you-throw-anything-out) covers where to look.',
          },
          {
            title: 'Mid-trip, let the family choose',
            body: 'Walk through with whoever can come, and share photos with those who can’t. Mark what’s staying with tape or sticky notes, and arrange for it to be collected or shipped.',
          },
          {
            title: 'Before you leave, set up the clearing',
            body: 'Get a quote while you can still show someone round, agree in writing what goes and what stays, and hand the keys to the person acting for you. The clearing doesn’t have to happen while you’re there.',
          },
        ],
      },
      {
        heading: 'Keep the home safe while it’s empty',
        body: [
          'An empty home still needs looking after. Keep the electricity on for the clearing, stop deliveries and newspapers, and arrange for the mail to be collected, because letters about the estate will keep arriving there.',
          'When the home is empty, close or transfer the utilities. SP Group lets next of kin close a deceased person’s account with the death certificate and proof of their relationship, and asks for at least three business days’ notice. My Legacy’s page on [closing accounts](https://mylegacy.life.gov.sg/when-death-happens/close-accounts-and-cancel-subscriptions/) covers the other accounts and subscriptions to stop.',
          'Ask the person acting for you to visit every week or two, run the taps, and check for leaks, pests and anything left in the fridge.',
        ],
      },
      {
        heading: 'Clearing without being there',
        body: [
          'Once the family has taken what it wants, the rest can be cleared without you. Agree the scope in writing: what’s to be removed, what’s to be kept and where it’s going, and anything that mustn’t be touched. Ask for photos or a video of each room before the work starts and again when it’s done, and for the keys to go back to your named person rather than into the letterbox.',
          'If there’s anything the clearance company can’t take, such as paint or chemicals, find out in advance, so it can be dealt with separately rather than left behind.',
        ],
      },
      {
        heading: 'What to take home, and what to let go',
        body: [
          'Much of what matters from a parent’s home fits in a suitcase: photographs, letters, documents, jewellery and a few small keepsakes. Take those with you, or send them by courier. Larger pieces are a harder call, because sending furniture abroad is costly and slow. Before deciding, ask whether a relative in Singapore could keep a piece for the family, and weigh the cost honestly against what it means to you.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I have to be in Singapore for the clearing?',
        a: 'No. What usually needs you in person is the search, the family’s choosing, and any appointments with a lawyer or bank. The clearing can happen afterwards, as long as someone you trust has the keys and the scope is agreed in writing.',
      },
      {
        q: 'How do we stop things we want from being cleared by mistake?',
        a: 'Take them out of the home before the clearing if you can. If not, put them in one room, label it clearly, and tell the clearance company in writing that the room isn’t to be touched.',
      },
      {
        q: 'What if nobody in the family can go to Singapore at all?',
        a: 'Then the search and the choosing have to be done by someone you trust, working from your instructions: a relative, a friend, or the lawyer handling the estate. Ask them to video-call you from the home, photograph documents as they find them, and courier anything of value to you. The clearing can follow once you’ve agreed what the family is keeping.',
      },
      {
        q: 'Can I search the Wills Registry without Singpass?',
        a: 'Yes. The Singapore Academy of Law’s Wills Registry lets people without Singpass log in with an SAL ID instead, so family members abroad can run the search themselves.',
      },
    ],
    sources: [sources.myLegacyDeath, sources.fjcProbate, sources.willsRegistry, sources.myLegacyAccounts],
    related: ['/estates/clearing-a-parents-hdb-flat', '/estates/before-you-throw-anything-out', '/handover/vacant-possession'],
    help: {
      heading: 'When you can’t be there for the clearing',
      body: 'Junk to Clear, a disposal company we refer jobs to, clears homes across Singapore, and the crew calls 15 to 30 minutes before arriving, so the person holding your keys knows when to be there. Ask for the scope to be agreed in writing and for photos of the empty rooms when the job is done. It doesn’t take hazardous waste such as paint, solvents or chemicals.',
      href: junkToClear.residential,
      linkLabel: 'See Junk to Clear’s home clearance',
    },
  },
];
