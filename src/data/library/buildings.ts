import type { Guide } from '../model';
import { junkToClear } from '../links';
import { sources } from '../sources';

// A note on the law, because it shapes every page here: neither the Building
// (Strata Management) Act nor the prescribed by-laws gives an MCST an explicit
// power to remove or dispose of items left on common property, and BCA's own
// guidance doesn't list removal as an option. SCDF has that power for fire
// hazards; the MCST, as "owner" of common property under the Fire Safety Act,
// can be liable for tolerating one. So the guides recommend a written
// notice-and-wait process and an additional by-law, and never tell an MCST it
// may simply dispose of things.

// Condos and strata buildings. The reader is a managing agent, a condo
// manager, or a council member: practical, busy, and accountable to owners
// for both the mess and the cost of dealing with it. These guides also double
// as something useful to send a managing agent, which is the point.

export const buildingsGuides: Guide[] = [
  {
    hub: 'buildings',
    slug: 'bulky-waste-in-condos',
    label: 'Bulky waste in condos',
    metaTitle: 'Bulky Waste in Condos: How MCSTs Can Handle It',
    metaDescription:
      'How MCSTs and managing agents in Singapore can handle bulky waste: what the refuse contract covers, a process for residents, renovation debris, and dumped items.',
    h1: 'Bulky waste in condos: how MCSTs and managing agents can handle it',
    lede: 'Many condos end up with the same pile beside the bin centre: an old mattress, a broken cabinet, the boxes from someone’s renovation. It keeps coming back until residents know what to do instead and can see the rule is enforced. Here’s a process that covers both.',
    summary: 'Why the bin centre pile keeps coming back, and the process that stops it.',
    keyPoints: [
      'Check what your refuse collection contract covers. Furniture, mattresses and renovation debris are often outside it.',
      'Give residents a simple process: who to call, how to book the service lift, and the rule that nothing waits in common areas for collection.',
      'Make renovation debris the contractor’s responsibility as a condition of the renovation approval, not the MCST’s problem afterwards.',
      'For items already dumped, use a notice-and-wait process and keep photos. Our notice templates give you the wording.',
    ],
    sections: [
      {
        heading: 'Why the pile keeps coming back',
        body: [
          'Residents often leave bulky items at the bin centre because they assume it’s where rubbish goes, and nobody has told them otherwise. The refuse contractor then takes the bagged household waste and leaves the sofa if bulky items aren’t in its contract. One item left for a week tells everyone else it’s allowed, and the pile grows.',
          'The cost lands on every owner. Someone has to arrange and pay for the removal, and that usually comes out of the management fund.',
        ],
      },
      {
        heading: 'Check what your contracts already cover',
        body: [
          'Before you write any rules, find out what you’re already paying for. Three contracts matter:',
        ],
        bullets: [
          '**Refuse collection.** Whether bulky items, renovation debris or garden waste are included, and at what extra charge if not. Whoever collects has to be a [waste collector licensed by NEA](https://www.nea.gov.sg/our-services/waste-management/waste-collection-systems), because anyone producing waste in Singapore must use one. For bulky items in private estates, NEA’s own advice is to use the estate’s public waste collector, for a separate fee, or any licensed collector.',
          '**Cleaning.** Whether the cleaners are expected to move dumped items, and where to.',
          '**Managing agent.** Whether arranging ad hoc removals is part of the agent’s scope, and how it’s approved and paid for.',
        ],
        after: [
          'If none of them covers bulky items, that gap is why the pile keeps coming back. Close it with a standing arrangement or a clear process for one-off removals, rather than paying for emergency clear-outs a few times a year.',
        ],
        note: 'Since July 2023, bulky items bound for incineration have to be broken down before a licensed collector takes them away if they’re more than 0.6 metres long or wide, which covers most sofas, wardrobes and bed frames. Any removal arrangement has to allow for that work.',
      },
      {
        heading: 'Give residents a process they can follow',
        body: [
          'A rule only works if people know what to do instead. The process residents need is short:',
        ],
        steps: [
          {
            title: 'Arrange the removal',
            body: 'With a disposal contractor of their choice, or through the management office if the MCST offers an arrangement.',
          },
          {
            title: 'Tell the management office first',
            body: 'So the service lift and loading bay can be booked, and the lift protected if the item is large.',
          },
          {
            title: 'Take it away on the day',
            body: 'Nothing waits in the bin centre, corridor or car park for collection. Until the removal, the item stays in the unit.',
          },
        ],
        after: [
          'Put it where people will see it: the lift lobbies, the noticeboard, the welcome pack for new residents, and whatever app or messaging channel the estate uses. Our [notice templates](/buildings/notice-templates) have the wording ready to adapt.',
        ],
      },
      {
        heading: 'Make renovation debris the contractor’s job',
        body: [
          'Renovation waste is the one kind of bulky waste you can control before it exists. Make its removal a condition of the renovation approval: debris goes out with the contractor, on the day, and never into the bin centre. If your development takes a renovation deposit, tying part of its refund to a clean bin centre and loading bay gives the condition some force.',
        ],
      },
      {
        heading: 'When items are already dumped',
        body: [
          'For things left in the bin centre or common areas, follow a notice-and-wait process rather than simply removing them: photograph them, post a dated notice, give the owner time to claim them, and record what you did. It’s fairer, and it’s far easier to defend if an owner complains. Our guide to [items left in corridors and common areas](/buildings/items-left-in-common-areas) sets the process out step by step.',
          'Two points of law are worth knowing first. Neither the Building (Strata Management) Act nor the prescribed by-laws gives an MCST an explicit power to remove or dispose of things left on common property, so there’s no statutory notice period to follow. And recovering the cost from the resident is much easier with a by-law that provides for it. BCA’s [guide to by-laws](https://isomer-user-content.by.gov.sg/338/7d4deffc-98fe-4267-a29c-acc41b8a88b3/smg10-by-laws.pdf) includes a sample additional by-law letting an MCST charge up to S$200 to recover the cost of cleaning up or removing items such as a discarded sofa. It only applies once your council has passed it by special resolution and lodged it.',
        ],
      },
      {
        heading: 'When a one-off clear makes sense',
        body: [
          'Sometimes the backlog is simply too big for a notice process: a storeroom nobody has opened in years, the end of a renovation season, or a bin centre that has been neglected. In that case a single clear-out, followed straight away by the published process, gives the estate a clean start. Ask for a certificate of disposal, so the council can show owners what was removed and what it cost.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can the MCST throw away items left in the corridor?',
        a: 'Not on the strength of the Act alone. Neither the Building (Strata Management) Act nor the prescribed by-laws gives an MCST an explicit power to remove or dispose of items. BCA’s guidance on things like shoe racks and bicycles lists asking the owner, reminder circulars, a court order enforcing the by-laws, and telling SCDF if fire safety is at risk. If you do remove abandoned items, written notice, a fair waiting period and a by-law that covers it make the decision far easier to defend.',
      },
      {
        q: 'Does the town council remove bulky items from condos?',
        a: 'No. Town council bulky-item removal is for HDB residents, and at least one town council says outright that private homeowners aren’t eligible. For private estates, NEA points residents to the estate’s public waste collector, for a separate fee, or any licensed waste collector. Large household appliances are the exception: ALBA collects them from any home for free.',
      },
      {
        q: 'Who should pay for removing dumped items?',
        a: 'The owner, if they can be identified and your by-laws let the MCST recover the cost. BCA’s sample by-law allows a fee of up to S$200. If the owner can’t be found, the cost falls on the management fund, which is why the process for residents matters more than the enforcement.',
      },
    ],
    sources: [
      sources.strataAct,
      sources.strataRegs,
      sources.bcaByLaws,
      sources.bcaDisputes,
      sources.neaCollection,
      sources.neaBulky,
      sources.strataBoards,
    ],
    related: ['/buildings/items-left-in-common-areas', '/buildings/notice-templates', '/business/reinstatement'],
    help: {
      heading: 'When the bin centre needs a one-off clear',
      body: 'Junk to Clear clears bulky waste for condos and commercial buildings: furniture, appliances, renovation debris and general junk. It gives commercial clients a certificate of disposal on request, which helps when the council has to account for the cost. It doesn’t take hazardous waste.',
      href: junkToClear.business,
      linkLabel: 'See Junk to Clear’s commercial disposal',
    },
  },
  {
    hub: 'buildings',
    slug: 'items-left-in-common-areas',
    label: 'Items left in corridors and common areas',
    metaTitle: 'Items Left in Condo Common Areas: A Fair Process for MCSTs',
    metaDescription:
      'What MCSTs and managing agents in Singapore can do about furniture, boxes and bicycles left in corridors and common areas: the by-laws, notices and fire safety.',
    h1: 'Items left in corridors and common areas: a fair process for MCSTs',
    lede: 'A shoe rack in the corridor, a bicycle chained to the staircase railing, a sofa that has been “waiting for the movers” for three weeks. Some of it is a nuisance and some of it is a fire risk, and all of it belongs to someone. A clear, fair process deals with it without turning it into a dispute.',
    summary: 'Nuisance or hazard, finding the owner, notice and wait, and keeping a record.',
    keyPoints: [
      'The prescribed by-laws bar residents from obstructing common property or leaving discarded items on it without the MCST’s written approval. They don’t give the MCST an explicit power to remove things, so a fair, written process matters.',
      'Treat anything blocking a corridor, staircase or exit as a fire-safety issue and act faster than you would for a bin centre dump. Under the Fire Safety Act, the MCST itself can be liable for an obstruction it leaves in place.',
      'Try to find the owner before anything else. Most items have one, and a knock on the door solves more than a notice does.',
      'Give written notice with a clear deadline, keep photos, and record every step. Our notice templates have the wording.',
      'Store anything of obvious value for a while rather than disposing of it straight away.',
    ],
    sections: [
      {
        heading: 'Start with your by-laws',
        body: [
          'For MCSTs constituted on or after 1 April 2005, a set of prescribed by-laws applies automatically, and two of them do most of the work here. One says an owner or occupier must not obstruct anyone’s lawful use of the common property, other than temporarily. The other says they must not leave rubbish or any discarded item on common property without the MCST’s prior written approval. Older developments may still run on the by-laws of the old Land Titles (Strata) Act, plus any they have lodged since, so check which set yours uses.',
          'What the by-laws don’t do is give the MCST an explicit power to remove or dispose of items. Its duty under the Act is to control, manage and administer the common property for the benefit of all owners, and it may do what is reasonably necessary to enforce the by-laws. BCA’s [guide to dispute resolution](https://isomer-user-content.by.gov.sg/338/1cf2d4ed-d06a-428f-93d1-b4fe5c5b8fa4/smg9-dispute-resolutions.pdf) lists the usual responses to things like shoe racks and bicycles in common areas: ask the owner to remove them, send reminder circulars, apply to court for an order enforcing the by-laws, and tell SCDF if fire safety is at risk.',
        ],
        note: 'If items in common areas are a recurring problem, consider an additional by-law that sets out how abandoned items are handled and what the owner pays. Additional by-laws are passed by special resolution and only take effect once lodged with the Commissioner of Buildings. BCA’s [guide to by-laws](https://isomer-user-content.by.gov.sg/338/7d4deffc-98fe-4267-a29c-acc41b8a88b3/smg10-by-laws.pdf) includes a sample that allows an administrative fee of up to S$200.',
      },
      {
        heading: 'Nuisance or hazard?',
        body: [
          'Not everything left in common areas needs the same response. A box beside the bins is a nuisance: it’s unsightly and it attracts more, but it can wait for a notice period. A cabinet in a corridor or a pile of boxes on a staircase is different, because corridors and staircases are escape routes.',
          'Under the [Fire Safety Act](https://sso.agc.gov.sg/Act/FSA1993), obstructing escape routes or common property in a way that could hinder escape is a fire hazard. For a condo, the “owner” of the common property under the Act is the management corporation, and an owner who knows about a hazard and takes no reasonable steps to deal with it commits an offence. SCDF can prosecute obstructed escape routes without issuing a warning notice first, and the maximum penalty is a fine of up to S$10,000, six months’ jail, or both.',
          'SCDF’s [guidelines for residential estates](https://www.scdf.gov.sg/home/community-and-volunteers/fire-emergency-guides/fire-safety-guidelines-for--residential-estate) set the practical line. Shoe racks and foldable clothing racks outside units are allowed only where a clear escape passage of 1.2 metres remains. Potted plants are allowed only where the MCST permits them, and nothing at all may go on staircases or their landings. Decide which you’re dealing with before you decide how long to wait.',
        ],
      },
      {
        heading: 'Find the owner first',
        body: [
          'Items in a corridor usually have an obvious owner: the unit next to them. Items in a bin centre can often be traced through the move-in, move-out or renovation records for the week they appeared. Ask the neighbours, check the records, and knock on the door. A friendly word often solves the problem faster than a formal notice, and costs nobody anything.',
        ],
      },
      {
        heading: 'Notice, wait, record',
        body: ['Where the owner can’t be found, or doesn’t act, use a written process that anyone could follow and that you could explain afterwards:'],
        steps: [
          {
            title: 'Photograph the items where they are',
            body: 'With the date and location, and close enough to show what they are and what condition they’re in.',
          },
          {
            title: 'Post a dated notice',
            body: 'On or beside the items, and on the noticeboard, saying what the items are, where they were found, and the date by which they must be removed or claimed. Our [notice templates](/buildings/notice-templates) have the wording.',
          },
          {
            title: 'Wait out the notice period',
            body: 'Long enough for someone who is away to see it. Shorter where the items are a fire-safety hazard, but even then, record why you acted quickly.',
          },
          {
            title: 'Then act under your by-laws',
            body: 'If nobody claims the items, deal with them as your by-laws and the council’s policy allow. Dispose of what is clearly rubbish. Keep anything with obvious value, such as a bicycle or a working appliance, somewhere secure for a further period, and note it in the log.',
          },
          {
            title: 'Keep the file',
            body: 'The photos, a copy of the notice, where it was posted, the dates, and what was done with each item. If an owner disputes it later, that file is your answer.',
          },
        ],
      },
      {
        heading: 'Charging the cost back',
        body: [
          'Recovering the cost of a removal from the owner is much easier when a by-law provides for it, like the sample in BCA’s guide. Without one, getting the money back depends on the owner agreeing to pay, or on an order from a court or the Strata Titles Board. If your council hasn’t adopted a by-law of this kind, it’s worth putting one to the next general meeting.',
        ],
      },
      {
        heading: 'When it keeps happening',
        body: [
          'Repeated problems usually mean a gap in the estate’s arrangements rather than a few difficult residents. If bicycles keep appearing in corridors, the bicycle bays may be full. If bulky items keep appearing at the bin centre, residents may not know how to arrange a removal. Fix the gap, publish the rule, and then enforce it consistently. Enforcement that depends on who complained loudest is the fastest route to a dispute.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long should the notice period be?',
        a: 'The law doesn’t set one. Choose a period long enough for someone who is away to see the notice, state it on the notice, and apply it the same way every time. Our notice templates default to seven days, which you can change. For obstructions on escape routes, act faster and record why.',
      },
      {
        q: 'Can a resident dispute a removal?',
        a: 'Yes. Disputes between owners and the MCST, including over how it carries out its duties under the Act or the by-laws, can go to the [Strata Titles Boards](https://www.stratatb.gov.sg/general-proceedings/), which start with mediation. An application currently costs S$500 and covers two mediation sessions. Your photos, notices and log are what show the process was fair.',
      },
      {
        q: 'What about shoe racks and potted plants outside units?',
        a: 'SCDF’s guidelines allow shoe racks and foldable clothing racks in corridors where a clear escape passage of at least 1.2 metres remains, and potted plants only where the MCST permits them. Nothing may be placed on staircases or their landings. Your own by-laws can set stricter rules for your development.',
      },
    ],
    sources: [
      sources.strataRegs,
      sources.strataAct,
      sources.bcaDisputes,
      sources.bcaByLaws,
      sources.scdfResidential,
      sources.fireSafetyAct,
      sources.strataBoards,
    ],
    related: ['/buildings/bulky-waste-in-condos', '/buildings/notice-templates', '/handover/tenant-left-belongings'],
    help: {
      heading: 'When the backlog is bigger than a notice can fix',
      body: 'Junk to Clear clears bulky waste from condos and commercial buildings, including bin centres, storerooms and common areas. It gives commercial clients a certificate of disposal on request, which is useful for the council’s records. It doesn’t take hazardous waste.',
      href: junkToClear.business,
      linkLabel: 'See Junk to Clear’s commercial disposal',
    },
  },
];
