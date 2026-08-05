// Guides cluster → /guides/<slug>
//
// These are the informational pages — the ones people find before they know
// they need a service. Accuracy matters more here than anywhere else on the
// site, so every page: (a) describes the general framework rather than
// asserting an outcome for a specific shipment, (b) names the responsible
// Singapore authority, and (c) links to that authority's own site so a reader
// can verify current requirements. Rates and thresholds change; the pages are
// written to stay correct in structure even when a number moves.

import type { Faq, Fact, Section } from './types';
import type { SpokeBase } from './types';

export type OfficialSource = { label: string; url: string };

export type Guide = {
  slug: string;
  label: string;
  group: 'Getting set up' | 'Permits & declarations' | 'Duty, GST & valuation' | 'Documents & origin' | 'Freight & logistics';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  summary: string;
  /** 3–5 sentence-length takeaways shown in a callout at the top. */
  keyPoints: string[];
  facts?: Fact[];
  sections: Section[];
  faqs: Faq[];
  officialSources: OfficialSource[];
  relatedGuides: string[];
  relatedPaths?: string[];
  relatedServices?: string[];
};

const CUSTOMS = { label: 'Singapore Customs', url: 'https://www.customs.gov.sg' };
const IRAS = { label: 'IRAS — Goods and Services Tax', url: 'https://www.iras.gov.sg' };
const NTP = { label: 'Networked Trade Platform', url: 'https://www.ntp.gov.sg' };

export const guides: Guide[] = [
  // --- Getting set up ------------------------------------------------------
  {
    slug: 'what-is-tradenet',
    label: 'What is TradeNet',
    group: 'Getting set up',
    metaTitle: 'What Is TradeNet? Singapore Import Declarations Explained',
    metaDescription: 'TradeNet is Singapore\'s single window for trade declarations. What it does, who submits through it, and what you need before a permit can be filed.',
    h1: 'What is TradeNet, and how do Singapore import declarations work?',
    lede: 'TradeNet is the electronic system through which every import, export, and transhipment declaration in Singapore is submitted. If you are importing anything commercially, your shipment passes through it — usually via a Declaring Agent rather than directly.',
    summary: 'Singapore\'s single-window system for trade declarations, and the front door to every import permit.',
    keyPoints: [
      'TradeNet is a single window: one submission reaches Singapore Customs and all relevant controlling agencies at once.',
      'Almost all commercial importers submit through a Declaring Agent rather than filing themselves.',
      'You generally need a UEN and an activated Customs Account before anything can be submitted on your behalf.',
      'The permit must normally be obtained before the goods arrive, not after.',
    ],
    facts: [
      { label: 'Operated by', value: 'Singapore Customs, accessed through the Networked Trade Platform (NTP)' },
      { label: 'Covers', value: 'Import, export, and transhipment declarations' },
      { label: 'Who submits', value: 'Registered Declaring Agents, on behalf of importers and exporters' },
      { label: 'Prerequisite for importers', value: 'UEN and activated Customs Account' },
    ],
    sections: [
      {
        heading: 'What TradeNet actually is',
        body: 'TradeNet is Singapore\'s national single window for trade declarations. Rather than filing separately with Singapore Customs and each controlling agency that has an interest in your goods, a single electronic declaration is submitted and routed to everyone who needs to see it. Approval comes back through the same channel. It is accessed through the Networked Trade Platform, and it is the mechanism behind the permit that authorises your shipment to enter Singapore.',
      },
      {
        heading: 'Who submits the declaration',
        body: 'In practice, the overwhelming majority of importers do not file their own declarations. They appoint a Declaring Agent — a party registered with Singapore Customs to make declarations on behalf of others. The agent submits through TradeNet using their own access, and the declaration is made on your behalf as the importer. That distinction matters: the agent operates the system, but the accuracy of what is declared remains your responsibility as the party on whose behalf it is made.',
      },
      {
        heading: 'What you need before anything can be submitted',
        body: 'Before a declaration can be made for your business, a few things generally need to exist:',
        bullets: [
          'A Unique Entity Number (UEN) — the identifier issued when a business is registered in Singapore.',
          'An activated Customs Account with Singapore Customs, linked to that UEN.',
          'An arrangement for paying duties and GST, which for most importers means going through a Declaring Agent or having an Inter-Bank GIRO arrangement in place.',
          'A Declaring Agent appointed to act for you, unless you intend to register and file directly.',
        ],
      },
      {
        heading: 'Timing: the permit comes before the goods',
        body: 'The most common practical mistake first-time importers make is treating the permit as something to sort out once the shipment lands. Import permits are generally required before the goods arrive, and cargo without a valid permit does not simply wait patiently — it accrues storage charges and, for time-critical shipments, misses its window entirely. If you are working backwards from an event date or an install slot, the permit application needs to be inside your timeline, not after it.',
      },
      {
        heading: 'Where things go wrong',
        body: 'The system itself is reliable. What causes delay is almost always the quality of the information fed into it — a goods description too vague to classify, an HS code that does not match the actual product, a value that does not reconcile with the invoice, or a controlled good declared as though it were ordinary cargo. A declaration is a legal statement, and correcting one after submission is considerably more work than getting it right the first time.',
      },
    ],
    faqs: [
      {
        q: 'Can I submit a TradeNet declaration myself?',
        a: 'It is possible to register as a Declaring Agent and file directly, but it involves registration with Singapore Customs, appropriate software or NTP access, and trained declarants. For businesses that import occasionally, appointing a Declaring Agent is almost always the practical route.',
      },
      {
        q: 'How long does a permit take to come through?',
        a: 'Straightforward declarations for uncontrolled goods are often processed quickly. Where a controlling agency has to review the declaration, it takes longer, and how much longer depends on the agency and the goods. Build in time rather than assuming same-day approval.',
      },
      {
        q: 'What happens if goods arrive without a permit?',
        a: 'The cargo cannot be released. It sits, accruing storage, until the declaration is sorted out — and if a controlling agency requirement was missed, sorting it out may involve an approval process that takes days or weeks. This is the scenario worth planning to avoid.',
      },
      {
        q: 'Is TradeNet the same as the Networked Trade Platform?',
        a: 'They are related but not identical. The Networked Trade Platform is the wider digital trade platform; TradeNet is the declaration system accessed through it. For most importers the distinction is academic — what matters is that declarations are submitted electronically and routed to all relevant agencies.',
      },
    ],
    officialSources: [CUSTOMS, NTP],
    relatedGuides: ['uen-and-customs-account', 'what-is-a-declaring-agent', 'import-permit-types-singapore'],
    relatedServices: ['tradenet-permit-help-singapore', 'customs-support-singapore'],
  },
  {
    slug: 'uen-and-customs-account',
    label: 'UEN & Customs Account',
    group: 'Getting set up',
    metaTitle: 'UEN & Customs Account: Before Your First Singapore Import',
    metaDescription: 'The registration sequence before your first Singapore import — getting a UEN, activating a Customs Account, and arranging payment for duties and GST.',
    h1: 'UEN and Customs Account: what you need before your first import',
    lede: 'Before any import permit can be applied for on your behalf, your business generally needs to exist as a registered Singapore entity with an activated Customs Account. This is the step people discover late, and it cannot be compressed once cargo is already moving.',
    summary: 'The registration groundwork that has to exist before a single permit can be filed.',
    keyPoints: [
      'A UEN is the identifier issued when an entity is registered in Singapore — it is not something you apply for separately.',
      'The Customs Account is activated with Singapore Customs and linked to the UEN.',
      'A payment arrangement for duties and GST is needed, commonly via a Declaring Agent or an Inter-Bank GIRO.',
      'None of this is fast if left until the goods are on the water.',
    ],
    facts: [
      { label: 'UEN issued by', value: 'ACRA and other Singapore registration agencies, on entity registration' },
      { label: 'Customs Account activated with', value: 'Singapore Customs' },
      { label: 'Typical payment arrangement', value: 'Through a Declaring Agent, or an Inter-Bank GIRO with Singapore Customs' },
      { label: 'Realistic lead time', value: 'Plan weeks, not days, if starting from scratch' },
    ],
    sections: [
      {
        heading: 'What a UEN is and where it comes from',
        body: 'The Unique Entity Number is the single identification number a registered entity in Singapore uses across government. You do not apply for a UEN as a standalone thing — it is issued when the entity is registered, most commonly with ACRA for a company or business. If you are an overseas business importing into Singapore, this is the point at which the question "do we need a Singapore entity?" becomes real, and the answer depends on your model.',
      },
      {
        heading: 'Activating a Customs Account',
        body: 'Having a UEN is not the same as being able to import. The entity also needs an activated Customs Account with Singapore Customs, which links the UEN to trade activity and is what makes the entity a recognisable party on a declaration. Activation involves nominating who within the business can act, and confirming the arrangement for paying duty and GST.',
      },
      {
        heading: 'Arranging payment for duties and GST',
        body: 'Duties and GST have to be paid when the permit is taken up. There are two common routes:',
        bullets: [
          'Through your Declaring Agent, who pays on your behalf and bills you. This is the usual arrangement for businesses importing occasionally.',
          'Via an Inter-Bank GIRO arrangement with Singapore Customs, deducting directly from your account. More common for businesses importing regularly.',
          'Certain GST schemes — for example those available to qualifying businesses — change when GST is accounted for rather than whether it applies. Whether you qualify is a question for IRAS or your tax adviser.',
        ],
      },
      {
        heading: 'The sequence, and why order matters',
        body: 'The order is: register the entity and obtain a UEN, activate the Customs Account, arrange payment, appoint a Declaring Agent, then apply for permits per shipment. Each step depends on the one before, and none of them can be done retrospectively for a shipment that has already arrived. If you are importing for the first time and the goods have a fixed arrival date, start this sequence before you place the purchase order — not after.',
      },
      {
        heading: 'If you are an overseas business',
        body: 'Overseas businesses selling into Singapore have choices about who acts as the importer of record. It can be your Singapore entity if you have one, your customer, or in some arrangements a third party. Each has different consequences for who bears the GST, who carries the declaration responsibility, and what happens if something is queried. It is worth deciding deliberately rather than defaulting to whatever the freight forwarder assumes.',
      },
    ],
    faqs: [
      {
        q: 'Do I need a Singapore company to import into Singapore?',
        a: 'The importer of record generally needs to be an entity with a UEN and an activated Customs Account. That does not always have to be you — in some arrangements the buyer or a third party acts as importer. But someone with Singapore standing has to be on the declaration.',
      },
      {
        q: 'How long does this take to set up?',
        a: 'Entity registration itself can be quick. Activating the Customs Account and arranging payment adds time, and appointing an agent adds more. Treat the whole sequence as weeks rather than days, particularly if anything about your business structure is unusual.',
      },
      {
        q: 'Can my Declaring Agent handle all of this for me?',
        a: 'An agent can file declarations and often pay duties and GST on your behalf, but they cannot register your entity or activate your Customs Account for you. Those are things the business itself must do.',
      },
    ],
    officialSources: [CUSTOMS, { label: 'ACRA — business registration', url: 'https://www.acra.gov.sg' }],
    relatedGuides: ['what-is-tradenet', 'what-is-a-declaring-agent', 'gst-on-imports-singapore'],
    relatedServices: ['tradenet-permit-help-singapore', 'customs-support-singapore'],
  },
  {
    slug: 'what-is-a-declaring-agent',
    label: 'Declaring Agents',
    group: 'Getting set up',
    metaTitle: 'What Is a Declaring Agent in Singapore, and Do You Need One?',
    metaDescription: 'What a Declaring Agent does, how they differ from a freight forwarder, where responsibility sits when they file on your behalf, and how to choose one.',
    h1: 'What is a Declaring Agent, and do you need one?',
    lede: 'A Declaring Agent is a party registered with Singapore Customs to submit declarations on behalf of importers and exporters. Most businesses use one. Understanding what they are responsible for — and what remains yours — prevents most of the misunderstandings that arise when something is queried.',
    summary: 'Who files your declaration, what they are responsible for, and what stays with you.',
    keyPoints: [
      'A Declaring Agent submits TradeNet declarations on your behalf; they are registered with Singapore Customs to do so.',
      'A freight forwarder moves cargo. The two roles often sit in one company, but they are distinct functions.',
      'The accuracy of the declared information remains the importer\'s responsibility, whoever types it in.',
      'Choose on the basis of whether they understand your goods, not only on price per declaration.',
    ],
    sections: [
      {
        heading: 'The difference between a forwarder and a Declaring Agent',
        body: 'A freight forwarder arranges the movement of goods — booking space, handling documentation between carriers, arranging trucking. A Declaring Agent makes the customs declaration. Many companies do both, which is convenient and also why the distinction gets blurred. It matters when something goes wrong, because the two functions carry different obligations and the party who booked your container is not necessarily the party who declared your goods.',
      },
      {
        heading: 'What responsibility actually sits where',
        body: 'A Declaring Agent submits what you tell them. If the goods description is wrong, the value understated, or a controlled good not flagged, the consequences generally land on the importer on whose behalf the declaration was made — not on the agent who entered it. This is not a technicality. It is the reason we insist on reviewing the commercial invoice and product details before a declaration is prepared, rather than passing supplier paperwork through unexamined.',
      },
      {
        heading: 'What a good agent does that a cheap one does not',
        body: 'The difference shows up on unusual shipments, not routine ones:',
        bullets: [
          'They question a goods description that will not classify cleanly, rather than filing it and hoping.',
          'They recognise when a product likely falls under a controlling agency and raise it before submission.',
          'They tell you when the HS code your supplier provided does not match what is actually in the box.',
          'They know what documentation a particular category of goods usually attracts.',
          'They flag valuation issues rather than declaring whatever number appears on the invoice.',
        ],
      },
      {
        heading: 'When you might file directly',
        body: 'Businesses importing at high volume sometimes register as their own Declaring Agent, which gives control and removes a per-declaration cost. It requires registration with Singapore Customs, appropriate system access, and people trained to make declarations accurately. For most businesses importing occasionally or handling unusual one-off shipments, the overhead is not justified — and the expertise gap is precisely where the risk sits.',
      },
      {
        heading: 'Where we fit',
        body: 'We help you prepare and understand what a declaration will need, get the goods description and supporting documents into a state that supports a clean submission, identify where a controlling agency requirement is likely to apply, and connect you with appropriate declaring support. We are explicit about this because the distinction matters: helping you get a shipment right is not the same as being the party that files it, and you should know which is which.',
      },
    ],
    faqs: [
      {
        q: 'Is my freight forwarder also my Declaring Agent?',
        a: 'Often, but not always, and it is worth asking explicitly. Some forwarders subcontract the declaration. Knowing who actually submitted the declaration matters if a query arises later.',
      },
      {
        q: 'If the agent makes a mistake, who is liable?',
        a: 'Broadly, the importer remains responsible for the accuracy of what is declared on their behalf. An agent has their own obligations, but you cannot outsource responsibility for the truth of the declaration by handing over an invoice and looking away.',
      },
      {
        q: 'How much does a Declaring Agent cost?',
        a: 'Declaration fees are typically modest per shipment. The meaningful cost difference between agents is not the fee — it is whether they catch a problem before submission or after. On an unusual shipment, that difference is worth far more than the fee.',
      },
      {
        q: 'Can SwyftClear act as my Declaring Agent?',
        a: 'We help you prepare and understand what your shipment needs and can connect you with appropriate declaring support. We do not present ourselves as a licensed Declaring Agent unless that is stated for a specific engagement.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['what-is-tradenet', 'uen-and-customs-account', 'import-documentation-checklist'],
    relatedServices: ['tradenet-permit-help-singapore', 'customs-support-singapore'],
  },

  // --- Permits & declarations ---------------------------------------------
  {
    slug: 'import-permit-types-singapore',
    label: 'Import permit types',
    group: 'Permits & declarations',
    metaTitle: 'Singapore Import Permit Types: IN-PAYMENT vs IN-NONPAY',
    metaDescription: 'The permit types used for Singapore imports, what the message types mean, when GST is paid at import versus suspended, and which applies to your shipment.',
    h1: 'Singapore import permit types, explained',
    lede: 'Permit types in Singapore look cryptic from the outside, but the logic is simple: the type reflects what the goods are doing and whether duty and GST are being paid now, later, or not at all.',
    summary: 'What the permit message types mean and which situation each one covers.',
    keyPoints: [
      'The permit type reflects the purpose of the movement and the duty/GST treatment.',
      'IN-PAYMENT permits cover goods entering with duty and/or GST paid at import.',
      'IN-NONPAY permits cover situations where payment is not made at import — relief, suspension, or temporary entry.',
      'Choosing the wrong type is not a formality; it changes your tax position and may need correction.',
    ],
    facts: [
      { label: 'Permit obtained via', value: 'TradeNet, before the goods arrive' },
      { label: 'Duty-paid import', value: 'IN-PAYMENT permit types' },
      { label: 'Relief, suspension, or temporary', value: 'IN-NONPAY permit types' },
      { label: 'Who selects the type', value: 'Your Declaring Agent, based on what you tell them' },
    ],
    sections: [
      {
        heading: 'How permit types are structured',
        body: 'Singapore permit types describe two things at once: the direction and nature of the movement (import, export, transhipment) and the payment treatment. An import where GST is paid at the point of entry uses a different permit type from an import into a licensed warehouse where duty is suspended, or from goods entering temporarily for an exhibition. The declaration has to reflect what is actually happening.',
      },
      {
        heading: 'Paying at import',
        body: 'The standard case: goods enter Singapore for local consumption, GST is calculated on the CIF value plus applicable duties and charges, and it is paid when the permit is taken up. For the four dutiable categories — intoxicating liquors, tobacco products, motor vehicles, and petroleum products — customs or excise duty is paid at the same point. This is what most ordinary commercial imports look like.',
      },
      {
        heading: 'Not paying at import',
        body: 'There are several distinct reasons why duty and GST might not be paid at the moment of import, and they use different permit treatments:',
        bullets: [
          'Goods entering a licensed warehouse or Free Trade Zone, where duty is suspended until the goods enter the local market.',
          'Goods entering temporarily — for an exhibition, demonstration, repair, or testing — and leaving again.',
          'Goods qualifying for GST relief in specific circumstances.',
          'Businesses on approved GST schemes where import GST is accounted for differently rather than paid at entry.',
        ],
      },
      {
        heading: 'Why the wrong type causes real problems',
        body: 'If goods are imported on a permanent-import permit and then need to leave again, you have already paid GST on goods that were only visiting, and recovering it is not straightforward. If temporary import treatment is used and the goods do not leave within the permitted period, the position has to be regularised. The type has to be decided before the goods arrive, based on what you actually intend to do with them — which is why we ask.',
      },
    ],
    faqs: [
      {
        q: 'Which permit type do I need?',
        a: 'It depends on what the goods are and what happens to them. Ordinary commercial import for local sale or use is the common case. Goods that are only visiting — for a show, a demo, or a repair — should be looked at under temporary import arrangements before they ship. Tell us the intended use in the enquiry and we will point you at the right treatment.',
      },
      {
        q: 'Can a permit type be changed after the goods arrive?',
        a: 'Corrections are possible but are administratively involved and not always available. It is materially easier to determine the correct treatment before the goods are declared than to unwind it afterwards.',
      },
      {
        q: 'Does every import need a permit?',
        a: 'Commercial imports into Singapore generally require a permit obtained through TradeNet before arrival, regardless of value or transport mode. There are specific arrangements for certain low-value and postal consignments, but do not assume yours falls into one.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['what-is-tradenet', 'gst-on-imports-singapore', 'temporary-import-into-singapore', 'free-trade-zones-singapore'],
    relatedServices: ['tradenet-permit-help-singapore', 'customs-support-singapore'],
  },
  {
    slug: 'controlled-goods-and-competent-authorities',
    label: 'Controlled goods',
    group: 'Permits & declarations',
    metaTitle: 'Controlled Goods in Singapore | Competent Authorities',
    metaDescription: 'Which Singapore agency controls what, how to check whether your goods are controlled, and why the approval has to come before the shipment rather than after.',
    h1: 'Controlled goods and Competent Authorities in Singapore',
    lede: 'Singapore controls the import of a wide range of goods through agencies other than Customs. If your product falls under one of them, their approval is a precondition of the import permit — and the surprise usually arrives at the worst possible moment.',
    summary: 'Which agency regulates what, and how to find out whether your goods are affected.',
    keyPoints: [
      'Singapore Customs administers the declaration; other agencies control specific categories of goods.',
      'Approval from the relevant Competent Authority is generally needed before the import permit can be granted.',
      'Whether goods are controlled depends on the actual product, not on the category name in general terms.',
      'Checking takes minutes; discovering it after arrival can cost weeks.',
    ],
    facts: [
      { label: 'Health products, medicines, cosmetics, medical devices', value: 'Health Sciences Authority (HSA)' },
      { label: 'Food, meat, seafood, and food products', value: 'Singapore Food Agency (SFA)' },
      { label: 'Telecommunications and radio equipment', value: 'Infocomm Media Development Authority (IMDA)' },
      { label: 'Hazardous substances, ozone-depleting substances', value: 'National Environment Agency (NEA)' },
      { label: 'Plants, animals, and CITES species', value: 'National Parks Board (NParks) and Animal & Veterinary Service' },
      { label: 'Arms, explosives, and replicas', value: 'Singapore Police Force' },
      { label: 'Unmanned aircraft', value: 'Civil Aviation Authority of Singapore (CAAS)' },
      { label: 'Motor vehicles', value: 'Land Transport Authority (LTA)' },
    ],
    sections: [
      {
        heading: 'How the system fits together',
        body: 'Singapore Customs administers the declaration and collects duty and GST. It does not, by itself, decide whether your particular product may be imported. That decision belongs to whichever agency has responsibility for the category of goods — the Competent Authority. Because declarations go through a single window, the agency sees the declaration and its approval is reflected in whether the permit is granted. From the importer\'s side, this means one submission, but potentially several sets of requirements sitting behind it.',
      },
      {
        heading: 'Why "is my product controlled?" is harder than it sounds',
        body: 'Control attaches to the actual product and its characteristics, not to a loose category. Two items that look similar on a shelf can have different regulatory status because of an ingredient, a frequency band, a claim on the packaging, or a component. A skincare product is a cosmetic until it claims to treat a condition. A speaker is ordinary electronics until it has a wireless module. This is why generic answers are unreliable and why the specification sheet matters more than the product name.',
      },
      {
        heading: 'How to check properly',
        body: 'The reliable sequence:',
        bullets: [
          'Get the product specification sheet, ingredient list, or technical datasheet — not the marketing description.',
          'Identify the correct HS code for what the product actually is.',
          'Check the goods against Singapore Customs\' listing of controlled goods and the relevant agency\'s requirements.',
          'Where there is any ambiguity, ask the Competent Authority directly rather than guessing.',
          'Do this before placing the order, not before the shipment — some approvals take weeks.',
        ],
      },
      {
        heading: 'What happens when it is missed',
        body: 'Cargo arrives, the permit cannot be granted, and the goods sit. Storage accrues. If the approval process takes weeks, that is weeks of storage on goods you cannot use. In some cases goods cannot be imported at all and must be re-exported or disposed of at your cost. None of this is unusual, and almost all of it is preventable by asking the question before the purchase order.',
      },
    ],
    faqs: [
      {
        q: 'How do I find out if my goods are controlled?',
        a: 'Start from the specific product and its correct HS code, then check against Singapore Customs\' controlled goods listing and the relevant agency\'s guidance. If you are unsure, ask the agency — they answer these questions. Send us the specification sheet with your enquiry and we will help you work out which authority is relevant.',
      },
      {
        q: 'My supplier says it is not controlled in their country. Does that help?',
        a: 'No. Control status is determined by Singapore\'s rules, not the exporting country\'s. Products that move freely elsewhere are regularly controlled here, and vice versa.',
      },
      {
        q: 'How long does a Competent Authority approval take?',
        a: 'It varies enormously — from routine to several weeks or longer, depending on the agency and whether product registration is involved. Assume it is the longest step in your timeline until you have evidence otherwise.',
      },
      {
        q: 'Can I import a small quantity for testing without approval?',
        a: 'Sometimes there are specific provisions for samples, evaluation, or research quantities, but they are provisions with conditions rather than blanket exemptions. Do not assume a small quantity is exempt — check the specific arrangement.',
      },
    ],
    officialSources: [
      CUSTOMS,
      { label: 'HSA — Health Sciences Authority', url: 'https://www.hsa.gov.sg' },
      { label: 'SFA — Singapore Food Agency', url: 'https://www.sfa.gov.sg' },
      { label: 'IMDA', url: 'https://www.imda.gov.sg' },
      { label: 'NEA — National Environment Agency', url: 'https://www.nea.gov.sg' },
    ],
    relatedGuides: ['what-is-tradenet', 'hs-codes-singapore', 'import-permit-types-singapore'],
    relatedPaths: ['/cargo/medical-devices', '/cargo/cosmetics-and-personal-care', '/cargo/lithium-batteries'],
    relatedServices: ['customs-support-singapore', 'tradenet-permit-help-singapore'],
  },
  {
    slug: 'temporary-import-into-singapore',
    label: 'Temporary import',
    group: 'Permits & declarations',
    metaTitle: 'Temporary Import Into Singapore | Exhibitions, Demos & Repairs',
    metaDescription: 'How goods enter Singapore temporarily without paying GST permanently — exhibitions, demos, testing and repair, and what happens if they do not leave.',
    h1: 'Temporary import into Singapore',
    lede: 'When goods are only visiting — for a trade show, a demonstration, testing, or repair — paying import GST as though they were staying is an avoidable cost. Temporary import arrangements exist for exactly this, but they have to be set up before the goods arrive.',
    summary: 'Bringing goods in for a fixed purpose and taking them out again, without paying as though they stayed.',
    keyPoints: [
      'Temporary import treatment covers goods entering for a defined purpose and leaving again.',
      'It must be arranged before arrival — you cannot convert a completed permanent import retrospectively as a matter of course.',
      'A security or deposit may be required, and it is released when the goods are properly re-exported.',
      'The goods must leave within the permitted period, and the re-export must be documented.',
    ],
    facts: [
      { label: 'Typical uses', value: 'Exhibitions, demonstrations, testing, repair, professional equipment' },
      { label: 'Common alternative', value: 'ATA Carnet, where the origin country participates' },
      { label: 'Security', value: 'A deposit or banker\'s guarantee may be required' },
      { label: 'Critical requirement', value: 'Documented re-export within the permitted period' },
    ],
    sections: [
      {
        heading: 'What temporary import is for',
        body: 'The logic is straightforward: import GST is a tax on goods consumed in Singapore. Goods that arrive, do a job, and leave are not being consumed here, so there are arrangements that let them enter without the permanent tax consequence. The trade-off is conditionality — the treatment depends on the goods genuinely leaving, in the same state, within the permitted period, with documentation to prove it.',
      },
      {
        heading: 'What typically qualifies',
        body: 'Common situations include:',
        bullets: [
          'Exhibition and trade show stands, displays, and demonstration equipment.',
          'Professional equipment brought in for a production, survey, or project.',
          'Goods entering for testing, evaluation, or approval.',
          'Equipment coming in for repair or servicing and returning to its owner.',
          'Commercial samples being shown but not sold.',
        ],
      },
      {
        heading: 'What generally does not',
        body: 'The distinction that catches people is between goods that are being shown and goods that are being disposed of. Giveaways, brochures, promotional consumables, and anything sold at the show are staying in Singapore — they are a permanent import and need to be declared as one. Mixing them into a temporary import consignment creates a problem at re-export, when the quantities do not reconcile.',
      },
      {
        heading: 'ATA Carnet as an alternative',
        body: 'For many of these situations an ATA Carnet is the cleaner mechanism, particularly for goods touring several countries. It is an internationally recognised document that acts as both the customs declaration and the security, and it is issued in the country of origin before departure. If your goods are moving between multiple markets, it is usually worth the effort.',
      },
      {
        heading: 'What happens if the goods do not leave',
        body: 'If temporarily imported goods stay beyond the permitted period, or are sold, or cannot be accounted for at re-export, the position has to be regularised — typically by paying the GST and duty that would have applied to a permanent import, and any security may be forfeited. Extensions are sometimes possible if requested before expiry. The one approach that does not work is letting the deadline pass quietly.',
      },
    ],
    faqs: [
      {
        q: 'Can I convert a permanent import to a temporary one after arrival?',
        a: 'Not as a matter of course. The treatment is determined at import. If you know the goods are leaving again, say so before they arrive — that is the whole window in which this decision is cheap.',
      },
      {
        q: 'How long can goods stay under temporary import?',
        a: 'There is a permitted period, and extensions may be possible if applied for before it expires. The exact period depends on the arrangement used, so confirm it at the outset and diarise the deadline rather than assuming there is plenty of time.',
      },
      {
        q: 'Do I need a deposit?',
        a: 'A security may be required to cover the duty and GST that would apply if the goods did not leave. It is released on proper re-export. Under an ATA Carnet the Carnet itself provides the security, which is one of its main attractions.',
      },
      {
        q: 'What about the giveaways on our exhibition stand?',
        a: 'Those are staying in Singapore, so they are a permanent import and should be declared separately from the stand itself. It is a small thing that causes disproportionate trouble at re-export if handled casually.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['ata-carnet-singapore', 'import-permit-types-singapore', 'gst-on-imports-singapore'],
    relatedPaths: ['/cargo/exhibition-booth-materials', '/cargo/stage-and-lighting-equipment', '/exhibitions'],
    relatedServices: ['exhibition-logistics-singapore', 'customs-support-singapore'],
  },
  {
    slug: 'ata-carnet-singapore',
    label: 'ATA Carnet',
    group: 'Permits & declarations',
    metaTitle: 'ATA Carnet Singapore | Temporary Admission Explained',
    metaDescription: 'How ATA Carnets work for goods entering Singapore temporarily, what they cover, where they are issued, and the mistakes that cause claims against them.',
    h1: 'Using an ATA Carnet in Singapore',
    lede: 'An ATA Carnet is an international customs document that lets goods enter a participating country temporarily without paying duty or GST, and without posting a separate security in each country. For exhibitions, professional equipment, and commercial samples, it is often the cleanest route.',
    summary: 'The international passport for goods that are only visiting — how it works and how it goes wrong.',
    keyPoints: [
      'A Carnet is issued in the country of departure before the goods leave — never at the Singapore end.',
      'It covers professional equipment, exhibition goods, and commercial samples, not goods for sale or consumption.',
      'The goods must leave in the same state and be endorsed correctly at each border crossing.',
      'Missing endorsements are the leading cause of claims — the paperwork ritual is the whole mechanism.',
    ],
    facts: [
      { label: 'Issued by', value: 'The authorised guaranteeing body in the country of departure' },
      { label: 'In Singapore, administered through', value: 'Singapore Customs, with the local guaranteeing chamber' },
      { label: 'Typical validity', value: 'Up to one year from issue' },
      { label: 'Covers', value: 'Professional equipment, exhibition goods, commercial samples' },
      { label: 'Does not cover', value: 'Goods for sale, consumables, giveaways, perishables' },
    ],
    sections: [
      {
        heading: 'What a Carnet actually does',
        body: 'A Carnet replaces the separate temporary import declaration and security you would otherwise need in each country. It is backed by a guarantee chain, so customs authorities in participating countries accept it in place of a deposit. Practically, it means a touring production or a company doing a circuit of trade shows can move the same equipment through several markets on one document instead of arranging temporary import treatment in each.',
      },
      {
        heading: 'Getting one',
        body: 'A Carnet is issued in the country the goods are leaving from, by that country\'s authorised guaranteeing body — typically a chamber of commerce. It cannot be obtained in Singapore for goods arriving here; by then it is too late. The application requires a detailed general list of every item, with descriptions, quantities, weights, and values. That list is the Carnet\'s substance, and getting it right matters because you cannot add items later.',
      },
      {
        heading: 'The endorsement ritual',
        body: 'A Carnet works through counterfoils that customs officers endorse at each crossing:',
        bullets: [
          'Exportation from the home country — endorsed on departure.',
          'Importation into Singapore — endorsed on arrival.',
          'Re-exportation from Singapore — endorsed on departure. This is the critical one.',
          'Re-importation into the home country — endorsed on return.',
        ],
      },
      {
        heading: 'Where Carnets go wrong',
        body: 'Almost every failed Carnet fails the same way: someone leaves without getting the re-exportation counterfoil endorsed. Without that endorsement there is no evidence the goods left, and the guaranteeing body faces a claim for the duty and taxes — which it passes to the holder. The other common failures are items in the shipment that are not on the general list, and items on the list that are not in the shipment. Both cause problems at endorsement, and neither is fixable at the airport at 2am.',
      },
      {
        heading: 'When a Carnet is not the answer',
        body: 'Carnets do not cover goods being sold, consumed, or given away, and they do not cover perishables. If your consignment mixes equipment that is returning with brochures and giveaways that are not, split it — the Carnet covers the equipment and the rest is a separate ordinary import. Carnets also only work between participating countries, so check that both ends are covered before relying on one.',
      },
    ],
    faqs: [
      {
        q: 'Can I get an ATA Carnet after my goods arrive in Singapore?',
        a: 'No. It must be issued in the country of departure before the goods leave. If your goods are already here without one, we would look at other temporary import arrangements instead — but it is a worse position than starting correctly.',
      },
      {
        q: 'What happens if we forget to get the Carnet endorsed on departure?',
        a: 'This is the single most common and most expensive Carnet mistake. Without the re-exportation endorsement, there is no proof the goods left, and a claim for duty and taxes follows. Build the endorsement into the departure plan as a task with a name attached to it.',
      },
      {
        q: 'Can I add items to a Carnet?',
        a: 'The general list is fixed when the Carnet is issued. Items not on it are not covered and have to be handled as an ordinary import. Be thorough at the application stage, including cables, spares, and small accessories that are easy to forget.',
      },
      {
        q: 'Are ATA Carnets worth it for a single show?',
        a: 'Sometimes, sometimes not. For one visit with straightforward equipment, a Singapore temporary import arrangement may be simpler. For multi-country tours or repeat shows with the same kit, Carnets usually win. Tell us the itinerary and we will give you a straight answer.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['temporary-import-into-singapore', 'import-permit-types-singapore'],
    relatedPaths: ['/cargo/exhibition-booth-materials', '/cargo/broadcast-and-camera-equipment', '/exhibitions'],
    relatedServices: ['exhibition-logistics-singapore', 'customs-support-singapore'],
  },
  {
    slug: 'dangerous-goods-into-singapore',
    label: 'Dangerous goods',
    group: 'Permits & declarations',
    metaTitle: 'Dangerous Goods Into Singapore | Classes, Rules & Papers',
    metaDescription: 'What counts as dangerous goods, the nine classes, how air and sea rules differ, and the everyday products that are regulated without anyone realising.',
    h1: 'Dangerous goods and hazardous cargo into Singapore',
    lede: 'A surprising number of ordinary products are regulated as dangerous goods — batteries, aerosols, paints, magnets, perfumes, machinery with residual fuel. The rules are prescriptive, and the consequence of an undeclared dangerous good is not a fine at the end but a shipment refused at the start.',
    summary: 'The classes, the paperwork, and the everyday items people do not realise are regulated.',
    keyPoints: [
      'Air transport follows the IATA Dangerous Goods Regulations; sea follows the IMDG Code. The rules differ.',
      'Classification comes from the safety data sheet, not from how hazardous something feels.',
      'Undeclared dangerous goods are a serious matter, not an administrative slip.',
      'Many everyday products qualify — batteries, aerosols, alcohol-based liquids, magnets, fuel residue.',
    ],
    facts: [
      { label: 'Air', value: 'IATA Dangerous Goods Regulations' },
      { label: 'Sea', value: 'IMDG Code' },
      { label: 'Key document', value: 'Safety data sheet (SDS), which drives classification' },
      { label: 'Required paperwork', value: 'Dangerous goods declaration, correct packing, marking and labelling' },
      { label: 'Singapore-side agencies', value: 'NEA, SCDF and others depending on substance' },
    ],
    sections: [
      {
        heading: 'The nine classes',
        body: 'Dangerous goods are grouped into nine classes: explosives; gases; flammable liquids; flammable solids; oxidising substances and organic peroxides; toxic and infectious substances; radioactive material; corrosives; and miscellaneous dangerous goods, which is where lithium batteries and magnetised material sit. Each class has its own packing, labelling, and documentation requirements, and quantity limits differ between air and sea.',
      },
      {
        heading: 'Products people do not expect to be regulated',
        body: 'The category is much broader than most shippers assume:',
        bullets: [
          'Lithium batteries, whether loose, packed with equipment, or installed in it.',
          'Aerosols of any kind, including cosmetic sprays and cleaning products.',
          'Perfumes and alcohol-based liquids above certain concentrations.',
          'Paints, adhesives, solvents, and many resins.',
          'Machinery containing residual fuel, oil, or gas — even a drained tank may not be enough for air.',
          'Strong magnets, which are regulated for air transport because of their effect on aircraft instruments.',
          'Airbags and seatbelt pretensioners, which are pyrotechnic devices.',
        ],
      },
      {
        heading: 'Air versus sea',
        body: 'Air transport is significantly more restrictive. Quantity limits are lower, some substances are forbidden entirely, and packing standards are stricter. It is common for a consignment to be straightforward by sea and impossible by air. If a shipment is time-critical and contains anything regulated, establish what is permitted by air before building a schedule around it.',
      },
      {
        heading: 'The paperwork',
        body: 'You will generally need the safety data sheet, a dangerous goods declaration prepared by a trained shipper, packaging meeting the applicable UN specification, and correct marking and labelling. For lithium batteries, the UN 38.3 test summary is normally required. None of this can be improvised at the point of shipment — it has to be prepared, and the shipper signing the declaration has to be trained and certified.',
      },
      {
        heading: 'Why undeclared dangerous goods are treated seriously',
        body: 'This is one area where the consequences are not just commercial. Undeclared dangerous goods have caused aircraft losses, and carriers and authorities treat non-declaration as a serious offence rather than a paperwork error. If you are unsure whether something qualifies, the correct response is to ask, not to omit it and hope. We would far rather have an awkward conversation at enquiry stage than a serious one later.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if my product is dangerous goods?',
        a: 'Start with the safety data sheet from the manufacturer — it states the UN number, class, and packing group if the product is regulated. If there is no SDS, that is itself worth resolving. Send it to us with your enquiry and we will tell you what it means for your shipment.',
      },
      {
        q: 'The machine is drained. Is it still dangerous goods?',
        a: 'Possibly. Residual fuel vapour in a drained tank can still be regulated for air transport, and purging may be required. Get written confirmation of what was actually done, not an assurance that it is fine.',
      },
      {
        q: 'Can I just not mention the batteries?',
        a: 'No. Undeclared dangerous goods are a serious offence with real consequences for you and for the carrier, and modern screening frequently detects them. Declaring them properly is almost always workable; hiding them is not.',
      },
      {
        q: 'Does dangerous goods classification affect the import permit?',
        a: 'It can. Some hazardous substances are controlled goods requiring NEA or other agency approval before import, separate from the transport rules. The transport classification and the import control are two different questions and both need answering.',
      },
    ],
    officialSources: [CUSTOMS, { label: 'NEA — hazardous substances', url: 'https://www.nea.gov.sg' }],
    relatedGuides: ['controlled-goods-and-competent-authorities', 'import-documentation-checklist'],
    relatedPaths: ['/cargo/lithium-batteries', '/cargo/generators-and-power-equipment', '/cargo/aviation-parts'],
    relatedServices: ['special-cargo-singapore', 'customs-support-singapore'],
  },

  // --- Duty, GST & valuation ----------------------------------------------
  {
    slug: 'gst-on-imports-singapore',
    label: 'GST on imports',
    group: 'Duty, GST & valuation',
    metaTitle: 'GST on Imports Into Singapore | How It Is Calculated',
    metaDescription: 'How import GST works in Singapore — what it is charged on, how CIF value feeds the calculation, when it is payable, and the schemes that change the timing.',
    h1: 'GST on imports into Singapore',
    lede: 'Import GST applies to goods brought into Singapore and is calculated on the value of the goods including freight and insurance, plus any duty. It is the cost most first-time importers underestimate, because it is charged on the landed value rather than the price they paid for the goods.',
    summary: 'What import GST is charged on, how it is calculated, and what changes the timing.',
    keyPoints: [
      'Import GST is charged on the CIF value plus any customs or excise duty and other applicable charges.',
      'It applies to most goods entering Singapore, regardless of whether duty applies.',
      'GST-registered businesses can generally claim import GST as input tax, subject to the usual rules.',
      'Approved schemes can change when import GST is accounted for, but not whether it applies.',
    ],
    facts: [
      { label: 'Charged on', value: 'CIF value + customs/excise duty + other chargeable costs' },
      { label: 'Paid when', value: 'The import permit is taken up, unless a scheme applies' },
      { label: 'Recoverable?', value: 'Generally claimable as input tax by GST-registered businesses, subject to conditions' },
      { label: 'Administered by', value: 'IRAS, collected by Singapore Customs at import' },
    ],
    sections: [
      {
        heading: 'What GST is charged on',
        body: 'Import GST is not charged on the invoice price alone. It is charged on the CIF value — the cost of the goods plus insurance and freight to Singapore — with any customs or excise duty added on top, plus other chargeable costs where applicable. This means the freight cost is inside the tax base, which surprises importers who budgeted GST on the purchase price. For a low-value, high-volume shipment where freight is a large share of the landed cost, the difference is material.',
      },
      {
        heading: 'A worked example of the structure',
        body: 'The mechanics are simple even though the rate changes over time. Take goods with an invoice value, add the freight cost to Singapore, add the insurance premium — that is your CIF value. If the goods fall into one of the four dutiable categories, add the duty. GST is then applied to that total. For non-dutiable goods, which is most things, the base is simply CIF. Check the current GST rate with IRAS rather than relying on a figure quoted in an article, since it has changed more than once in recent years.',
      },
      {
        heading: 'Recovering import GST',
        body: 'A GST-registered business in Singapore can generally claim import GST as input tax in its GST return, subject to the normal input tax rules and provided it is the party that imported the goods and holds the supporting documentation. This is why the identity of the importer of record matters commercially, not just administratively — if your goods are imported in someone else\'s name, the claim is theirs to make, not yours.',
      },
      {
        heading: 'Schemes that change the timing',
        body: 'There are approved schemes that alter when import GST is accounted for rather than whether it applies — for example arrangements available to businesses that export a large share of what they import, or that defer accounting for import GST to the GST return rather than paying at the border. Eligibility conditions apply and they are administered by IRAS. If you import regularly and the cash-flow impact is significant, it is worth asking your tax adviser whether you qualify.',
      },
      {
        heading: 'Low-value goods and imported services',
        body: 'The treatment of low-value goods bought online and imported has changed in recent years, with GST now applying in circumstances where it previously did not, often collected by the overseas vendor or marketplace rather than at the border. If you are importing low-value consignments as part of a business model rather than as one-off shipments, confirm the current position with IRAS — this is an area that has moved and may move again.',
      },
    ],
    faqs: [
      {
        q: 'Is GST charged on the freight cost?',
        a: 'Yes. The tax base is the CIF value, which includes freight and insurance to Singapore. Budgeting GST on the goods value alone understates the landed cost, sometimes significantly on low-value bulky shipments.',
      },
      {
        q: 'Can I claim import GST back?',
        a: 'A GST-registered business can generally claim it as input tax subject to the usual rules, provided it imported the goods and has the documentation. If you are not GST-registered, import GST is a real cost. Confirm your position with IRAS or your tax adviser.',
      },
      {
        q: 'What is the current GST rate?',
        a: 'The rate has changed in recent years, so check the current figure with IRAS rather than relying on a number in an article. The structure of the calculation — CIF plus duty, then GST — is what stays constant.',
      },
      {
        q: 'Do I pay GST on goods that are only visiting for an exhibition?',
        a: 'Not necessarily. Temporary import arrangements exist for goods entering for a defined purpose and leaving again. They have to be set up before arrival, which is the part that gets missed.',
      },
    ],
    officialSources: [IRAS, CUSTOMS],
    relatedGuides: ['cif-value-explained', 'customs-duty-in-singapore', 'temporary-import-into-singapore', 'import-permit-types-singapore'],
    relatedServices: ['customs-support-singapore'],
  },
  {
    slug: 'customs-duty-in-singapore',
    label: 'Customs duty',
    group: 'Duty, GST & valuation',
    metaTitle: 'Customs Duty in Singapore | The Four Dutiable Categories',
    metaDescription: 'Singapore is a free port: customs duty applies to only four categories of goods. What they are, how duty is calculated, and why GST still applies.',
    h1: 'Customs duty in Singapore: only four categories',
    lede: 'Singapore is a free port, and the practical consequence is that customs duty applies to a very short list: intoxicating liquors, tobacco products, motor vehicles, and petroleum products. Everything else enters duty-free — though import GST still applies.',
    summary: 'Why most imports are duty-free, and what happens with the four categories that are not.',
    keyPoints: [
      'Only four categories of goods attract customs or excise duty in Singapore.',
      'Duty-free does not mean tax-free — import GST applies to goods generally.',
      'Duty on alcohol and tobacco is specific (per unit or per litre of alcohol), not a percentage of value.',
      'Motor vehicles carry duty plus a substantial separate registration cost structure.',
    ],
    facts: [
      { label: 'Dutiable category 1', value: 'Intoxicating liquors' },
      { label: 'Dutiable category 2', value: 'Tobacco products' },
      { label: 'Dutiable category 3', value: 'Motor vehicles' },
      { label: 'Dutiable category 4', value: 'Petroleum products and biodiesel blends' },
      { label: 'Everything else', value: 'Duty-free at import; GST still applies' },
    ],
    sections: [
      {
        heading: 'What "free port" actually means',
        body: 'Singapore built its economy on being an easy place to move goods through, and the tariff structure reflects that. For the overwhelming majority of products — machinery, electronics, furniture, instruments, clothing, food — there is no customs duty on import. This is genuinely unusual and it is why FTA preferential tariff provisions matter far less here than in most markets: there is usually no duty to reduce.',
      },
      {
        heading: 'The four categories, and how they are charged',
        body: 'The dutiable categories are charged differently from a typical ad valorem tariff:',
        bullets: [
          'Intoxicating liquors — excise duty based on the litres of alcohol, so strength and volume drive the amount, not the price of the bottle.',
          'Tobacco products — duty based on weight or per stick, again independent of value.',
          'Motor vehicles — duty on value, on top of which sit registration fees, the Additional Registration Fee, and the Certificate of Entitlement, which together usually dwarf the duty.',
          'Petroleum products and biodiesel blends — duty by volume.',
        ],
      },
      {
        heading: 'Why the specific-duty structure matters commercially',
        body: 'Because duty on alcohol and tobacco is charged on quantity rather than value, the effective rate as a percentage of price is wildly different at different price points. A case of inexpensive spirits can carry duty exceeding its purchase cost, while an expensive wine carries the same duty per litre of alcohol as a cheap one. Anyone building an import business in these categories needs to model this before ordering, because the intuition from ad valorem tariffs elsewhere is misleading.',
      },
      {
        heading: 'GST still applies',
        body: 'Duty-free is not tax-free. Import GST applies to goods entering Singapore whether or not duty is payable, and it is calculated on the CIF value plus any duty. Importers who correctly establish that their goods are duty-free sometimes conclude there is nothing to pay at the border. There usually is.',
      },
      {
        heading: 'What this means for FTA claims',
        body: 'Singapore has an extensive network of free trade agreements, and importers regularly ask how to claim preferential treatment. The honest answer for most goods is that there is nothing to claim, because there is no duty in the first place. FTAs matter for Singapore exporters seeking preferential access to other markets far more than for importers coming in. Where the goods are in one of the four dutiable categories, preferential origin can matter — and then the certificate of origin requirements become real.',
      },
    ],
    faqs: [
      {
        q: 'Is there import duty on machinery or electronics in Singapore?',
        a: 'No. Machinery, electronics, and the vast majority of manufactured goods enter Singapore duty-free. Import GST still applies on the CIF value.',
      },
      {
        q: 'Then why does my supplier keep asking about a certificate of origin?',
        a: 'Because in most countries it matters. In Singapore, for most goods, there is no duty for a preferential rate to apply to. It becomes relevant only for the four dutiable categories — or if the goods are moving onward to a market where it does matter.',
      },
      {
        q: 'How much duty is there on a bottle of whisky?',
        a: 'It is calculated on the litres of alcohol rather than the price, so the amount depends on bottle size and ABV rather than what you paid. Check the current rate with Singapore Customs and calculate it per consignment — for spirits it is a substantial number.',
      },
      {
        q: 'Are there other charges besides duty and GST?',
        a: 'There can be — handling, storage, documentation, and agent fees on the commercial side, and for some goods, Competent Authority fees. Duty and GST are the tax elements; they are not the whole landed cost.',
      },
    ],
    officialSources: [CUSTOMS, IRAS],
    relatedGuides: ['gst-on-imports-singapore', 'cif-value-explained', 'singapore-free-trade-agreements'],
    relatedPaths: ['/cargo/wine-and-spirits', '/cargo/vehicles-and-parts'],
    relatedServices: ['customs-support-singapore'],
  },
  {
    slug: 'cif-value-explained',
    label: 'CIF value',
    group: 'Duty, GST & valuation',
    metaTitle: 'CIF Value for Singapore Imports | Customs Value Explained',
    metaDescription: 'What CIF value means, what goes into it, how it differs from your invoice price, and why declaring it correctly matters more than the amount it adds.',
    h1: 'CIF value: how Singapore customs value is calculated',
    lede: 'CIF stands for cost, insurance, and freight, and it is the basis on which import GST is calculated in Singapore. It is not the same as what you paid the supplier, and the difference catches out importers who budget from the invoice alone.',
    summary: 'The value your tax is calculated on, and what belongs in it.',
    keyPoints: [
      'CIF = the value of the goods + insurance + freight to Singapore.',
      'It is the base for import GST, and for duty where duty applies.',
      'It is not the same as the invoice value unless you bought on CIF terms.',
      'Understating it is a false declaration, not a saving.',
    ],
    facts: [
      { label: 'C — Cost', value: 'The transaction value of the goods' },
      { label: 'I — Insurance', value: 'The cost of insuring the goods to Singapore' },
      { label: 'F — Freight', value: 'The cost of transport to Singapore' },
      { label: 'Used for', value: 'Calculating import GST and, where applicable, duty' },
    ],
    sections: [
      {
        heading: 'Why the invoice value is not the answer',
        body: 'If you bought goods ex-works or FOB, the invoice covers the goods but not the freight or insurance to Singapore — yet those are inside the customs value. You have to add them. Conversely, if you bought on CIF or DDP terms, some or all of those costs are already in the invoice. This is why the Incoterm on your purchase order feeds directly into the declaration, and why an incorrect Incoterm creates a valuation problem rather than just a commercial ambiguity.',
      },
      {
        heading: 'What goes in and what stays out',
        body: 'Broadly, costs incurred in getting the goods to Singapore go in; costs incurred after arrival stay out.',
        bullets: [
          'In: the price paid for the goods, international freight, insurance to Singapore, export packing, and certain charges paid as a condition of sale.',
          'Out: Singapore-side delivery, local handling after arrival, installation, and post-import services — provided these are separately identifiable.',
          'Ambiguous: royalties, licence fees, tooling costs, and assists supplied to the seller free of charge. These can be dutiable additions depending on the arrangement.',
        ],
      },
      {
        heading: 'Related-party transactions',
        body: 'Where the buyer and seller are related — a subsidiary importing from its parent, for instance — the transaction value may not be accepted at face value if the relationship influenced the price. Transfer pricing arrangements that are perfectly sound for income tax purposes are not automatically accepted as customs value. If you import from a related entity, it is worth having documentation supporting the basis of the price.',
      },
      {
        heading: 'Why understating is a bad idea',
        body: 'Declaring a lower value than the true transaction value to reduce GST is a false declaration. It carries penalties, and in the event of loss or damage it also undermines any insurance claim — because you have created a paper trail asserting the goods were worth less than they were. The GST saved is small; the exposure is not. On the other side, over-declaring wastes money. The correct answer is the actual value, properly supported.',
      },
    ],
    faqs: [
      {
        q: 'I bought FOB. What do I add to get CIF?',
        a: 'The international freight cost and the insurance premium to Singapore. Keep the invoices for both — they support the declared value if it is queried.',
      },
      {
        q: 'Does Singapore-side delivery go into CIF?',
        a: 'Generally no, provided it is separately identifiable and genuinely relates to transport after arrival. Costs bundled into a single door-to-door charge are harder to separate, so ask for them to be itemised.',
      },
      {
        q: 'What if the goods were free — samples or a warranty replacement?',
        a: 'A value still has to be declared. Free-of-charge goods have a customs value based on what they would be worth, not zero. Cost of production or a comparable market value is the usual basis.',
      },
      {
        q: 'Do tooling costs I paid the supplier separately count?',
        a: 'Potentially. Assists — tooling, moulds, designs, or materials supplied to the seller — can be dutiable additions to the customs value depending on the arrangement. If you have paid the supplier separately for tooling, flag it rather than assuming it sits outside.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['gst-on-imports-singapore', 'incoterms-for-singapore-importers', 'commercial-invoice-requirements'],
    relatedServices: ['customs-support-singapore'],
  },

  // --- Documents & origin --------------------------------------------------
  {
    slug: 'hs-codes-singapore',
    label: 'HS codes',
    group: 'Documents & origin',
    metaTitle: 'HS Codes for Singapore Imports | Classification and the AHTN',
    metaDescription: 'How HS classification works in Singapore, why the code drives control status and duty, and who is responsible for getting it right.',
    h1: 'HS codes and classification for Singapore imports',
    lede: 'The HS code assigned to your goods determines more than a statistic. It drives whether the goods are controlled, whether duty applies, and which agency has an interest. Getting it wrong is the root cause of a large share of held shipments.',
    summary: 'How goods get classified, why it matters more than it looks, and who is responsible.',
    keyPoints: [
      'Singapore uses the ASEAN Harmonised Tariff Nomenclature, an eight-digit extension of the international HS.',
      'The code determines control status and duty treatment, not just statistics.',
      'Classification follows what the product actually is, not what it is called commercially.',
      'The importer is responsible for correct classification, even when a supplier or agent suggests the code.',
    ],
    facts: [
      { label: 'System used', value: 'ASEAN Harmonised Tariff Nomenclature (AHTN), based on the international HS' },
      { label: 'Digits', value: 'Eight, in Singapore' },
      { label: 'First six digits', value: 'Internationally standardised' },
      { label: 'Determines', value: 'Control status, duty treatment, agency involvement, and statistics' },
    ],
    sections: [
      {
        heading: 'How the structure works',
        body: 'The Harmonised System is an international classification with six digits that are the same worldwide. ASEAN members extend it to eight digits for regional consistency, and that eight-digit AHTN code is what appears on a Singapore declaration. The first six digits mean the same thing in Rotterdam as in Singapore; the last two are regional. This is why a supplier\'s six-digit code is a useful starting point but not a complete answer.',
      },
      {
        heading: 'Why it matters more than people expect',
        body: 'Classification is the hinge that the whole declaration turns on. The code determines whether the goods are in a controlled category and therefore need Competent Authority approval, whether they are in one of the four dutiable categories, whether preferential origin treatment could apply, and what documentation is expected. A wrong code does not simply produce a wrong statistic — it can mean an approval was never sought that should have been.',
      },
      {
        heading: 'How classification is actually determined',
        body: 'Classification follows structured rules rather than intuition:',
        bullets: [
          'What the product objectively is — its material, function, and state — governs, not its brand or marketing description.',
          'Where a product could fit two headings, the General Interpretative Rules resolve it, generally favouring the more specific description.',
          'Composite goods and sets have specific rules based on the component giving the article its essential character.',
          'Parts are often classified differently from the machines they belong to, and "parts of general use" have their own treatment.',
        ],
      },
      {
        heading: 'When you are not sure',
        body: 'Guessing is the wrong response, and so is accepting a supplier\'s code without examining it — suppliers classify for export from their own country and sometimes for convenience. Singapore Customs operates a classification ruling process for importers who need certainty in advance, which is worth using for a product you will import repeatedly. For a one-off, working through it carefully with someone who has seen similar goods is usually sufficient.',
      },
      {
        heading: 'Who carries the responsibility',
        body: 'The importer does. A Declaring Agent enters the code, and may advise on it, but the declaration is made on the importer\'s behalf and the responsibility for its accuracy sits there. This is one of several reasons it is worth understanding your own product classification rather than treating it as someone else\'s administrative detail.',
      },
    ],
    faqs: [
      {
        q: 'Can I just use the HS code my supplier gave me?',
        a: 'Use it as a starting point and check it. Suppliers classify for their own export requirements, sometimes casually, and the last two digits of a Singapore code are regional in any case. A code that is wrong in a way that misses a control requirement is an expensive inheritance.',
      },
      {
        q: 'What happens if the code is wrong?',
        a: 'It depends what the error causes. A classification error that changes the control status can mean goods held pending an approval that should have been obtained earlier. Errors affecting duty in the dutiable categories mean an underpayment to be corrected. Neither is a small administrative matter.',
      },
      {
        q: 'Can I get an official ruling on classification?',
        a: 'Singapore Customs provides a classification ruling process, which gives advance certainty. For a product you will import repeatedly, or where the classification is genuinely ambiguous and consequential, it is worth the effort.',
      },
      {
        q: 'Are parts classified with the machine?',
        a: 'Not automatically. Parts often have their own classification, and certain categories — fasteners, springs, general-use components — are classified by what they are rather than by what they go into. This trips up machinery importers regularly.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['controlled-goods-and-competent-authorities', 'commercial-invoice-requirements', 'customs-duty-in-singapore'],
    relatedServices: ['customs-support-singapore', 'tradenet-permit-help-singapore'],
  },
  {
    slug: 'commercial-invoice-requirements',
    label: 'Commercial invoice',
    group: 'Documents & origin',
    metaTitle: 'Commercial Invoice Requirements for Singapore Imports',
    metaDescription: 'What a commercial invoice must show for a Singapore import declaration, the goods descriptions that cause delay, and how to fix a supplier invoice.',
    h1: 'Commercial invoice requirements for Singapore imports',
    lede: 'The commercial invoice is the document the declaration is built from. Most delays we see trace back to an invoice that was adequate for the supplier\'s accounting and inadequate for a customs declaration.',
    summary: 'What the invoice has to show, and the descriptions that get shipments held.',
    keyPoints: [
      'The goods description must say what the item actually is, specifically enough to classify.',
      'Value, currency, and Incoterm must be stated and must be consistent with the transaction.',
      'Country of origin means where the goods were manufactured, not where they shipped from.',
      'Review the supplier\'s invoice before shipment — that is the cheap moment to fix it.',
    ],
    sections: [
      {
        heading: 'What the invoice must contain',
        body: 'At minimum a commercial invoice supporting a Singapore import declaration should show: the seller and buyer with full addresses, the invoice number and date, a specific description of each item, quantity and unit of measure, unit price and total, the currency, the Incoterm and named place, the country of origin of the goods, and the gross and net weights. Where the goods have an HS code, including it helps — provided it is correct.',
      },
      {
        heading: 'Descriptions that cause trouble',
        body: 'The single biggest source of avoidable delay is a description too vague to classify. These are the ones we see repeatedly:',
        bullets: [
          '"Machine parts" — parts of what, made of what, doing what?',
          '"Gift items" or "promotional goods" — describes the purpose, not the product.',
          '"Samples" — a sample of what?',
          '"Equipment" or "spare parts" without further detail.',
          '"Electronics" — covers everything from a cable to a controlled radio transmitter.',
          'Model numbers alone, with no plain-language description of what the item is.',
        ],
      },
      {
        heading: 'What a good description looks like',
        body: 'A usable description states the article, its material, and its function: "stainless steel centrifugal pump, 5.5 kW, for industrial water transfer" rather than "pump". "Aluminium exhibition booth frame components, unassembled" rather than "display materials". It takes an extra sentence and removes most of the ambiguity that causes queries. If the description would let someone who has never seen the item classify it correctly, it is good enough.',
      },
      {
        heading: 'Origin, and where it is not',
        body: 'The country of origin is where the goods were manufactured or substantially transformed. It is not the country the container left from, the seller\'s country of incorporation, or the location of the warehouse. Goods made in Germany and shipped from a Dubai free zone have German origin. Goods made in China and consolidated in Hong Kong have Chinese origin. Suppliers get this wrong routinely, particularly trading companies who state their own country by habit.',
      },
      {
        heading: 'Fixing the invoice before it matters',
        body: 'Every problem on this page is trivially fixable while the goods are still at the supplier and expensive to fix once the shipment has arrived. Ask for the draft invoice before shipment, read it as though you were the person who has to classify the goods from it alone, and send it back if it does not pass. Suppliers reissue invoices without complaint before shipping; after arrival it becomes an amendment on a live declaration.',
      },
    ],
    faqs: [
      {
        q: 'My supplier refuses to change the invoice. What now?',
        a: 'That is worth pushing on, because you are the party carrying the consequence of a poor declaration. If the description is genuinely inadequate, a supplementary document describing the goods properly can help, but the invoice itself is the primary record and it is better to get it right.',
      },
      {
        q: 'Does the invoice need to show the HS code?',
        a: 'It is not always mandatory but it is helpful — provided it is right. An incorrect code on an invoice is worse than no code, because it can be carried through without being questioned.',
      },
      {
        q: 'What if the goods are free of charge?',
        a: 'Issue an invoice showing the goods, marked as free of charge, with a stated value for customs purposes and the basis for it. "No commercial value" is not a usable declaration — every consignment has a customs value.',
      },
      {
        q: 'Do I need a packing list as well?',
        a: 'Yes, for anything beyond a single carton. It should reconcile with the invoice and show what is in each package with dimensions and weights. Multi-crate consignments in particular need it, both for the declaration and so the receiving end knows what should have arrived.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['import-documentation-checklist', 'hs-codes-singapore', 'cif-value-explained', 'certificate-of-origin-singapore'],
    relatedServices: ['customs-support-singapore'],
  },
  {
    slug: 'import-documentation-checklist',
    label: 'Documentation checklist',
    group: 'Documents & origin',
    metaTitle: 'Singapore Import Documentation Checklist | What You Need',
    metaDescription: 'A practical checklist of the documents a Singapore import needs, which are always required, which depend on the goods, and when each one has to exist.',
    h1: 'Singapore import documentation checklist',
    lede: 'Most import problems are documentation problems, and most documentation problems are timing problems — the document existed, just not early enough. This is what to have, and when.',
    summary: 'Every document a Singapore import may need, and the point at which each has to exist.',
    keyPoints: [
      'Four documents are needed on almost every commercial import.',
      'A further set applies depending on what the goods are.',
      'Several documents can only be obtained at origin, before shipment — those are the critical ones.',
      'Build the document list at purchase-order stage, not at booking stage.',
    ],
    sections: [
      {
        heading: 'Always needed',
        body: 'These four apply to essentially every commercial import into Singapore:',
        bullets: [
          'Commercial invoice — specific goods description, value, currency, Incoterm, country of origin.',
          'Packing list — package-by-package contents with dimensions and weights.',
          'Transport document — bill of lading for sea, air waybill for air.',
          'Import permit — obtained through TradeNet before arrival.',
        ],
      },
      {
        heading: 'Needed depending on the goods',
        body: 'These apply where the goods or the arrangement calls for them:',
        bullets: [
          'Certificate of origin — where preferential treatment is claimed, or a buyer or authority requires it.',
          'Competent Authority licence or approval — for controlled goods, before the permit.',
          'Safety data sheet and dangerous goods declaration — for regulated substances.',
          'Phytosanitary certificate — for plant material and certain wood products.',
          'CITES permit — for protected species material, including in finished goods.',
          'ISPM 15 marking on wood packaging — a marking rather than a document, but checked.',
          'UN 38.3 test summary — for lithium batteries.',
          'Insurance certificate — where insurance value feeds the customs value.',
          'ATA Carnet — for temporary admission of professional or exhibition goods.',
        ],
      },
      {
        heading: 'The ones that must exist before shipment',
        body: 'This is the part that matters most. Several documents can only be issued at origin, by the exporter or an origin-country authority, before the goods leave — a certificate of origin, a phytosanitary certificate, a CITES export permit, ISPM 15 treatment of packing. If the goods sail without them, they cannot be produced retrospectively in any straightforward way. Everything else can, at a cost, be fixed later. These cannot.',
      },
      {
        heading: 'When to build the list',
        body: 'At purchase-order stage. By the time you are booking freight, the supplier has often already packed, and asking for treated packing or an origin certificate at that point means unpacking or delay. Write the document requirements into the order: what the invoice must state, what certificates are required, what packing standard applies. Suppliers comply with clear requirements far more readily than with late requests.',
      },
    ],
    faqs: [
      {
        q: 'Which document causes the most problems?',
        a: 'The commercial invoice, by a wide margin — specifically the goods description. It is also the easiest to fix, provided you read it before the goods ship rather than after.',
      },
      {
        q: 'Can documents be sent electronically?',
        a: 'Trade documentation is largely electronic now, and Singapore\'s systems are built around that. Some certificates still have originals-in-transit conventions attached to them, so confirm per document type rather than assuming.',
      },
      {
        q: 'What if a document is missing on arrival?',
        a: 'It depends which one. A missing invoice detail can often be corrected. A missing phytosanitary certificate or CITES permit generally cannot be obtained after the goods have left origin, and the outcome can be re-export or disposal. This is why the pre-shipment documents deserve the attention.',
      },
      {
        q: 'Do I need original paper documents?',
        a: 'Increasingly not, but it varies by document and by the parties involved. Where an original bill of lading is issued, its handling has commercial consequences beyond customs. Ask early which documents in your chain are originals.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['commercial-invoice-requirements', 'certificate-of-origin-singapore', 'wood-packaging-ispm-15', 'controlled-goods-and-competent-authorities'],
    relatedServices: ['customs-support-singapore', 'special-cargo-singapore'],
  },
  {
    slug: 'certificate-of-origin-singapore',
    label: 'Certificates of origin',
    group: 'Documents & origin',
    metaTitle: 'Certificate of Origin Singapore | Preferential vs Ordinary',
    metaDescription: 'The difference between preferential and ordinary certificates of origin, when a Singapore importer actually needs one, and who issues them.',
    h1: 'Certificates of origin for Singapore trade',
    lede: 'A certificate of origin states where goods were made. There are two kinds, they do different jobs, and for most Singapore importers neither is necessary — which is worth knowing before you spend effort obtaining one.',
    summary: 'What certificates of origin do, the two types, and when you actually need one.',
    keyPoints: [
      'Preferential certificates support a claim for reduced duty under a free trade agreement.',
      'Ordinary certificates simply attest origin, often for a buyer, bank, or destination country requirement.',
      'Because Singapore has almost no import duty, importers rarely need a preferential certificate.',
      'They matter far more for Singapore exporters, and for goods moving onward to other markets.',
    ],
    facts: [
      { label: 'Preferential CO', value: 'Supports reduced or zero duty under an FTA' },
      { label: 'Ordinary CO', value: 'Attests origin without a tariff claim' },
      { label: 'Issued by', value: 'Singapore Customs and authorised organisations, for Singapore-origin goods' },
      { label: 'Obtained at', value: 'Origin, generally before or around the time of shipment' },
    ],
    sections: [
      {
        heading: 'The two types and what they do',
        body: 'A preferential certificate of origin is evidence that goods meet the origin rules of a specific free trade agreement, and it supports a claim for the preferential tariff rate in the importing country. An ordinary certificate of origin simply states where goods were made, without any tariff claim attached. Banks sometimes require one under a letter of credit, buyers sometimes require one contractually, and some destination countries require one regardless of tariff treatment.',
      },
      {
        heading: 'Why Singapore importers usually do not need one',
        body: 'Preferential certificates exist to reduce duty. Singapore levies customs duty on only four categories of goods, so for almost everything being imported there is no duty for a preference to apply to. If your supplier is offering to arrange a certificate of origin for machinery or electronics coming into Singapore, it is worth asking what you would do with it. The answer is usually nothing.',
      },
      {
        heading: 'When it does matter',
        body: 'There are real cases:',
        bullets: [
          'The goods fall into one of Singapore\'s four dutiable categories.',
          'The goods are moving onward from Singapore to a market where duty applies and origin needs to be documented through the chain.',
          'A letter of credit or contract requires a certificate as a condition of payment.',
          'You are exporting from Singapore and your customer needs preferential treatment in their market.',
        ],
      },
      {
        heading: 'How origin is actually determined',
        body: 'Origin is not simply where the goods were shipped from, or where the seller is based. Goods wholly obtained in a country have that origin. Goods made from imported materials have origin where the last substantial transformation occurred, and each FTA defines that differently — by change of tariff heading, by regional value content, or by specific processing rules. This is why the same product can qualify under one agreement and not another, and why origin claims need to be based on the actual rule rather than an assumption.',
      },
      {
        heading: 'Self-certification',
        body: 'Several modern agreements have moved away from certificates issued by an authority toward self-certification — a statement on origin made by an approved or registered exporter directly on the commercial invoice. The EU–Singapore agreement works this way. It is simpler, but the substantiation obligation still sits with the exporter, and the statement has to be in the prescribed form.',
      },
    ],
    faqs: [
      {
        q: 'Do I need a certificate of origin to import into Singapore?',
        a: 'Usually not. Because Singapore applies duty to only four categories of goods, there is generally no preferential claim to support. Check whether your goods are dutiable before spending effort on it.',
      },
      {
        q: 'My bank is asking for one. Is that different?',
        a: 'Yes — that is a commercial requirement under your letter of credit rather than a customs one. An ordinary certificate of origin satisfies it. It has nothing to do with tariff treatment.',
      },
      {
        q: 'Can I get a certificate of origin after the goods have shipped?',
        a: 'Retrospective issuance is sometimes possible but is not straightforward and depends on the agreement and issuing body. If you need one, arrange it at origin before shipment.',
      },
      {
        q: 'Who issues certificates for Singapore-origin goods?',
        a: 'Singapore Customs and a number of authorised organisations, including business chambers and the manufacturers\' federation. Which is appropriate depends on the agreement and the destination.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['singapore-free-trade-agreements', 'customs-duty-in-singapore', 'commercial-invoice-requirements'],
    relatedServices: ['customs-support-singapore'],
  },
  {
    slug: 'singapore-free-trade-agreements',
    label: 'Free trade agreements',
    group: 'Documents & origin',
    metaTitle: 'Singapore Free Trade Agreements | What They Mean for Importers',
    metaDescription: 'Singapore\'s FTA network, what preferential treatment actually delivers for an importer in a near-zero-tariff market, and when the agreements genuinely matter.',
    h1: 'Singapore\'s free trade agreements: what they mean for importers',
    lede: 'Singapore has one of the world\'s widest FTA networks. For importers, though, the practical benefit is smaller than the headline suggests — because there was almost no import duty to remove in the first place.',
    summary: 'The agreement network, and an honest account of what it does and does not do for importers.',
    keyPoints: [
      'Singapore has FTAs covering most of its major trading partners.',
      'For importers the tariff benefit is limited, because Singapore\'s applied duty is already near zero.',
      'The agreements matter far more for Singapore exporters seeking access to other markets.',
      'Where they do matter for imports, origin rules and documentation are the whole game.',
    ],
    facts: [
      { label: 'Regional', value: 'ATIGA (ASEAN), RCEP, CPTPP' },
      { label: 'Bilateral in Asia', value: 'China (CSFTA), Japan (JSEPA), Korea (KSFTA), India (CECA), Taiwan (ASTEP)' },
      { label: 'Bilateral elsewhere', value: 'United States, Australia, New Zealand, EU, United Kingdom, EFTA, Türkiye, GCC and others' },
      { label: 'Practical effect on imports', value: 'Limited — Singapore applies duty to only four categories of goods' },
    ],
    sections: [
      {
        heading: 'The honest version',
        body: 'Singapore\'s FTA network is genuinely extensive and it is economically important. But an importer arriving at the question "how do I use the FTA to reduce my costs?" usually finds there is nothing to reduce. Machinery, electronics, instruments, furniture, clothing — all already enter duty-free. The agreements did not make them duty-free; Singapore\'s free-port policy did. Understanding this saves a lot of wasted effort chasing certificates that would achieve nothing.',
      },
      {
        heading: 'Where the agreements do bite',
        body: 'There are real applications:',
        bullets: [
          'Singapore exporters seeking preferential access in partner markets — this is the main event.',
          'Goods in the four dutiable categories, where preferential rates can apply.',
          'Services, investment, and procurement provisions, which are substantial parts of modern agreements and have nothing to do with tariffs.',
          'Cumulation rules that let materials from one partner count toward origin in another — relevant for regional manufacturing.',
        ],
      },
      {
        heading: 'Regional agreements worth understanding',
        body: 'ATIGA governs trade within ASEAN and is the workhorse for regional movements. RCEP brings together ASEAN with China, Japan, Korea, Australia and New Zealand, and its main practical contribution is a single set of origin rules across a large bloc rather than dramatic tariff cuts. CPTPP covers a different group with generally deeper commitments. For manufacturers with regional supply chains, the cumulation provisions across these agreements can matter more than the tariff rates.',
      },
      {
        heading: 'Origin rules are where the work is',
        body: 'Every agreement defines origin differently. A product may qualify under RCEP but not under a bilateral agreement, or vice versa, depending on whether the rule is a change of tariff classification, a regional value content threshold, or a specific process. If you are claiming preference, the claim has to be based on the specific rule for your product under the specific agreement — and you need to be able to substantiate it if asked.',
      },
    ],
    faqs: [
      {
        q: 'Will an FTA reduce what I pay to import into Singapore?',
        a: 'For most goods, no — because there is no duty to reduce. Import GST applies regardless of any FTA. The exceptions are the four dutiable categories.',
      },
      {
        q: 'Then why do FTAs matter to Singapore?',
        a: 'Because they secure access for Singapore exporters into markets that do have tariffs, and because modern agreements cover services, investment, standards, and procurement well beyond goods tariffs. The importer\'s view of an FTA is the narrowest one.',
      },
      {
        q: 'Which agreement applies if several cover the same country?',
        a: 'You choose which to claim under, and the answer depends on which origin rule your product satisfies and which gives the better outcome. For Singapore imports this is rarely a live question given the tariff position.',
      },
      {
        q: 'Does RCEP change anything for my imports?',
        a: 'Mostly it simplifies origin rules across a large region rather than reducing what you pay to bring goods into Singapore. If you manufacture regionally and export from Singapore, it is more interesting.',
      },
    ],
    officialSources: [CUSTOMS, { label: 'Enterprise Singapore — FTAs', url: 'https://www.enterprisesg.gov.sg' }],
    relatedGuides: ['certificate-of-origin-singapore', 'customs-duty-in-singapore'],
    relatedServices: ['customs-support-singapore'],
  },
  {
    slug: 'wood-packaging-ispm-15',
    label: 'Wood packaging (ISPM 15)',
    group: 'Documents & origin',
    metaTitle: 'ISPM 15 Wood Packaging Rules for Singapore Imports',
    metaDescription: 'Why wooden crates and pallets need heat treatment and marking, what the stamp means, what happens to non-compliant packaging, and how to avoid the problem.',
    h1: 'ISPM 15: wood packaging rules for Singapore imports',
    lede: 'Wooden crates, pallets, and dunnage have to be treated and marked to an international standard before they cross borders. It is a small requirement that causes a disproportionate number of held shipments, almost always because nobody checked the stamp.',
    summary: 'The treatment standard for wooden packing, and why it holds so many shipments.',
    keyPoints: [
      'ISPM 15 covers wood packaging material — crates, pallets, dunnage, bracing — not the goods themselves.',
      'Compliant packaging carries a specific mark showing the country, producer, and treatment method.',
      'Non-compliant wood packaging can result in treatment, repackaging, or re-export at the importer\'s cost.',
      'Processed wood products such as plywood and OSB are generally outside the scope.',
    ],
    facts: [
      { label: 'Applies to', value: 'Solid wood packaging: crates, pallets, dunnage, blocking and bracing' },
      { label: 'Does not apply to', value: 'Manufactured wood such as plywood, particleboard, OSB, and veneer' },
      { label: 'Treatment methods', value: 'Heat treatment (HT) or approved fumigation' },
      { label: 'Evidence', value: 'The IPPC mark stamped on the packaging itself, not a separate certificate' },
    ],
    sections: [
      {
        heading: 'What the standard is for',
        body: 'Untreated solid wood carries insects and pathogens that damage forests when moved between countries. ISPM 15 is the international phytosanitary measure that addresses this, requiring wood packaging to be heat treated or fumigated and marked accordingly. It applies to the packaging, not the cargo — a shipment of electronics on an untreated pallet has an ISPM 15 problem even though the goods themselves are unrelated to timber.',
      },
      {
        heading: 'Reading the mark',
        body: 'Compliant packaging is stamped with the IPPC symbol alongside a country code, a producer or treatment provider code, and a treatment code — HT for heat treatment, MB for methyl bromide fumigation. The mark is on the wood itself, usually on at least two opposite sides. There is no accompanying certificate to check; the stamp is the evidence, which is why a photograph of the crate before it ships is a genuinely useful thing to ask a supplier for.',
      },
      {
        heading: 'What is out of scope',
        body: 'Manufactured wood products are generally excluded because the manufacturing process already destroys pests. Plywood, particleboard, oriented strand board, veneer, and similar engineered materials do not need ISPM 15 marking. Neither does packaging made entirely of non-wood material. Some suppliers deliberately use plywood crates to sidestep the issue, which is a legitimate approach.',
      },
      {
        heading: 'What happens when packaging is non-compliant',
        body: 'The options are all bad and all at the importer\'s cost: treatment on arrival where facilities permit, repackaging with compliant material, or re-export of the packaging. The cargo is held while this happens. For a time-critical shipment — an exhibition stand, an install date — this is precisely the kind of delay that cannot be absorbed.',
      },
      {
        heading: 'Preventing it',
        body: 'Write the requirement into the purchase order and ask for a photograph of the stamped packaging before shipment. It takes one email. The suppliers who get this wrong are usually smaller manufacturers who mainly serve their domestic market and have never been asked. Once asked, most comply without difficulty — but they will not volunteer it.',
      },
    ],
    faqs: [
      {
        q: 'Does ISPM 15 apply to the goods or the packaging?',
        a: 'The packaging. Crates, pallets, dunnage, and bracing made of solid wood need treatment and marking regardless of what they contain.',
      },
      {
        q: 'What does the HT stamp mean?',
        a: 'Heat treated — the wood was heated to a specified core temperature for a specified time. MB indicates methyl bromide fumigation, which is being phased out in many jurisdictions. Either satisfies the standard where accepted.',
      },
      {
        q: 'Do plywood crates need the mark?',
        a: 'Generally no. Manufactured wood products such as plywood and particleboard are outside the scope. Using plywood crating is a practical way to avoid the issue entirely.',
      },
      {
        q: 'My supplier says their pallets are fine. How do I check?',
        a: 'Ask for a photograph showing the IPPC mark on the packaging. It is stamped directly on the wood. An assurance is not evidence, and this is one of the cheapest checks in the entire shipping process.',
      },
    ],
    officialSources: [{ label: 'NParks — plant health', url: 'https://www.nparks.gov.sg' }, CUSTOMS],
    relatedGuides: ['import-documentation-checklist', 'controlled-goods-and-competent-authorities'],
    relatedPaths: ['/cargo/furniture-and-fit-out', '/cargo/marble-and-stone', '/cargo/industrial-machinery'],
    relatedServices: ['special-cargo-singapore'],
  },

  // --- Freight & logistics -------------------------------------------------
  {
    slug: 'incoterms-for-singapore-importers',
    label: 'Incoterms',
    group: 'Freight & logistics',
    metaTitle: 'Incoterms for Singapore Importers | EXW, FOB, CIF, DDP',
    metaDescription: 'What each Incoterm actually means for a Singapore importer — who pays, where risk transfers, and which terms cause the most trouble in practice.',
    h1: 'Incoterms explained for Singapore importers',
    lede: 'Incoterms define where cost and risk pass from seller to buyer. They are three letters on a purchase order that determine who pays for what, who is exposed if the goods are damaged, and — importantly for Singapore — how your customs value is calculated.',
    summary: 'What each term means for cost, risk, and your customs value.',
    keyPoints: [
      'The Incoterm determines where risk transfers, which is not always where cost transfers.',
      'It feeds directly into your CIF customs value, so it is a declaration matter, not just a commercial one.',
      'EXW gives the buyer the most control and the most work; DDP gives the least of both.',
      'Always state the term with a named place — "FOB" alone is incomplete.',
    ],
    facts: [
      { label: 'EXW — Ex Works', value: 'Buyer takes over at the seller\'s premises. Maximum buyer responsibility.' },
      { label: 'FCA — Free Carrier', value: 'Seller delivers to a carrier at a named place. Common for air freight.' },
      { label: 'FOB — Free On Board', value: 'Seller loads on the vessel; risk passes there. Sea freight only.' },
      { label: 'CIF — Cost, Insurance and Freight', value: 'Seller pays freight and insurance to the destination port; risk passes at origin.' },
      { label: 'DAP — Delivered At Place', value: 'Seller delivers to the named destination, import clearance excluded.' },
      { label: 'DDP — Delivered Duty Paid', value: 'Seller handles everything including import clearance and taxes.' },
    ],
    sections: [
      {
        heading: 'The one thing people misunderstand about CIF',
        body: 'Under CIF the seller pays for freight and insurance to the destination port — but risk passes to the buyer at origin, when the goods are loaded. Buyers routinely assume that because the seller arranged and paid for the transport, the seller carries the risk during it. They do not. If the goods are damaged at sea on CIF terms, that is the buyer\'s problem, mitigated only by the insurance the seller was required to arrange, which is often minimum cover.',
      },
      {
        heading: 'Why the Incoterm affects your declaration',
        body: 'Singapore calculates import GST on the CIF value. If you bought EXW or FOB, the freight and insurance are not in your invoice and must be added to arrive at the customs value. If you bought CIF, they are already there. If you bought DDP, the seller has taken on the import clearance and the arrangement needs examining, because someone still has to be the importer of record with a Singapore Customs Account. The term is not a commercial detail that sits outside the declaration — it determines how the declaration is built.',
      },
      {
        heading: 'The trouble with DDP',
        body: 'DDP looks attractive because it appears to make everything the seller\'s problem. In practice it frequently causes difficulty for Singapore imports: an overseas seller usually cannot be the importer of record here, so the arrangement often means someone acts as importer on their behalf, which can complicate GST recovery and leaves the declaration in hands you cannot see. If your business is GST-registered and would otherwise recover import GST, DDP can cost you more than it saves.',
      },
      {
        heading: 'What we usually recommend',
        body: 'For most one-off and unusual shipments, FCA or FOB gives a good balance: the seller handles export formalities and gets the goods to the carrier, and you control the international leg, the insurance, and the Singapore clearance. That control matters most precisely on the shipments where things can go wrong — which are the ones we handle. EXW is worth considering if you want full control from the factory door, but it means arranging export clearance in a country you may not know.',
      },
      {
        heading: 'Name the place',
        body: 'An Incoterm without a named place is incomplete and creates ambiguity. "FOB Shanghai" and "FOB Ningbo" are different contracts. "DAP Singapore" and "DAP 15 Tuas Avenue" are very different obligations. Write the full term with the specific place into the purchase order.',
      },
    ],
    faqs: [
      {
        q: 'Which Incoterm is best for importing into Singapore?',
        a: 'For most unusual or one-off shipments, FCA or FOB — you keep control of the international leg, the insurance, and the clearance while the seller handles export formalities. The right answer depends on your experience, your leverage with the supplier, and how much control you want.',
      },
      {
        q: 'Under CIF, who is responsible if goods are damaged at sea?',
        a: 'The buyer bears the risk, even though the seller paid for the transport. The seller must arrange insurance, but it is often minimum cover. If the goods matter, arrange your own cover at a level you are comfortable with.',
      },
      {
        q: 'Is DDP simpler for me?',
        a: 'It looks simpler and often is not. An overseas seller generally cannot act as importer of record in Singapore, so the arrangement gets worked around in ways that can affect your GST recovery and leave you without visibility of your own declaration. Examine it before agreeing to it.',
      },
      {
        q: 'Does the Incoterm change how much GST I pay?',
        a: 'Not the amount, if everything is declared correctly — the CIF value should be the same however you got there. What it changes is where those costs appear and whether you have to add them yourself. Errors here are a common source of undervaluation.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['cif-value-explained', 'gst-on-imports-singapore', 'commercial-invoice-requirements'],
    relatedServices: ['customs-support-singapore', 'special-cargo-singapore'],
  },
  {
    slug: 'air-freight-vs-sea-freight-singapore',
    label: 'Air vs sea freight',
    group: 'Freight & logistics',
    metaTitle: 'Air Freight vs Sea Freight Into Singapore | How to Choose',
    metaDescription: 'When air freight is worth the cost for Singapore imports, how chargeable weight works, and the hidden factors that change the comparison.',
    h1: 'Air freight or sea freight into Singapore?',
    lede: 'The obvious comparison is speed against cost. The more useful comparison includes chargeable weight, the cost of capital tied up in transit, packing requirements, and what happens to your business if the shipment is late.',
    summary: 'How to make the mode decision properly, including the factors that are usually left out.',
    keyPoints: [
      'Air pricing uses chargeable weight — volumetric weight often exceeds actual weight.',
      'Sea freight has a longer and more variable total timeline than the sailing time suggests.',
      'Dangerous goods rules are much stricter by air; some cargo is effectively sea-only.',
      'For high-value goods the cost of capital in transit can offset a meaningful part of the air premium.',
    ],
    facts: [
      { label: 'Air transit, regional Asia', value: 'Typically 1–2 days' },
      { label: 'Air transit, Europe or North America', value: 'Typically 3–5 days' },
      { label: 'Sea transit, regional Asia', value: 'Typically 3–12 days port to port' },
      { label: 'Sea transit, Europe or North America', value: 'Typically 18–40 days port to port' },
      { label: 'Air chargeable weight', value: 'The greater of actual weight and volumetric weight' },
    ],
    sections: [
      {
        heading: 'Chargeable weight is the thing to understand first',
        body: 'Air freight is priced on chargeable weight, which is the greater of the actual weight and the volumetric weight. Volumetric weight is calculated from the dimensions using a standard divisor, and for anything light and bulky it dominates. A pallet of foam packaging weighing 40 kg can have a chargeable weight several times that. Before assuming air is unaffordable, calculate the chargeable weight — and before assuming it is affordable, do the same.',
      },
      {
        heading: 'The sea timeline is longer than the sailing time',
        body: 'A quoted port-to-port transit of 25 days is not 25 days door to door. Add origin pickup and export handling, the wait for the vessel, potential transshipment delay, arrival handling, clearance, and delivery. A realistic door-to-door figure is often a week or more beyond the sailing. If you are planning to a fixed date, use the full timeline and add buffer, because the variability is on the downside.',
      },
      {
        heading: 'When air is genuinely the right answer',
        body: 'Several situations where air wins even on cost:',
        bullets: [
          'High-value goods where capital tied up in a month of transit is a real number.',
          'Anything with a fixed date where the cost of being late exceeds the freight premium.',
          'Small, dense items where volumetric weight is low relative to value.',
          'Spares and AOG situations where downtime cost dominates everything.',
          'Goods that would need expensive corrosion or moisture protection for a long sea passage.',
        ],
      },
      {
        heading: 'When sea is the only realistic option',
        body: 'Beyond simple cost, some cargo is effectively sea-only: oversized items that exceed aircraft door dimensions, large lithium battery systems restricted by air, machinery that cannot be adequately drained and purged, and anything where the chargeable weight makes air freight absurd. It is worth establishing early whether air is even available for your cargo before building a schedule that depends on it.',
      },
      {
        heading: 'The split option people forget',
        body: 'For a consignment with a mix of urgency, splitting the shipment is often the best answer — air freight the critical components and the items needed for early installation, sea freight the bulk. On machinery installs and fit-out projects this is frequently cheaper than air-freighting everything and faster than waiting for one sea shipment. It requires knowing what is actually needed first, which is a conversation worth having before booking.',
      },
    ],
    faqs: [
      {
        q: 'How is air freight actually priced?',
        a: 'On chargeable weight — the greater of actual and volumetric weight — plus fuel and security surcharges and handling. For bulky light cargo the volumetric figure governs, sometimes dramatically. Get the dimensions and weight and the comparison becomes concrete rather than theoretical.',
      },
      {
        q: 'Is sea freight always cheaper?',
        a: 'Per kilogram, almost always. Per shipment, not always, once you account for the cost of capital in transit, additional packing for a long passage, and the commercial cost of a later arrival. For high-value or urgent goods the gap narrows considerably.',
      },
      {
        q: 'Can I air freight anything I can ship by sea?',
        a: 'No. Air has stricter dangerous goods rules, aircraft door and hold dimension limits, and weight constraints. Large battery systems, oversized machinery, and equipment with fuel residue are common examples of cargo that is straightforward by sea and impossible or heavily restricted by air.',
      },
      {
        q: 'What about sea-air combinations?',
        a: 'They exist and can make sense on long lanes — sea to a hub, air for the final leg. They are more complex to coordinate and worth considering when neither pure mode fits the budget and timeline. Tell us the constraint and we will say whether it is worth exploring.',
      },
    ],
    officialSources: [],
    relatedGuides: ['lcl-vs-fcl-explained', 'incoterms-for-singapore-importers', 'dangerous-goods-into-singapore'],
    relatedServices: ['special-cargo-singapore', 'exhibition-logistics-singapore'],
  },
  {
    slug: 'lcl-vs-fcl-explained',
    label: 'LCL vs FCL',
    group: 'Freight & logistics',
    metaTitle: 'LCL vs FCL for Singapore Imports | Which to Choose and When',
    metaDescription: 'The difference between LCL and FCL shipping, the hidden destination costs of LCL, and the volume at which a full container becomes cheaper.',
    h1: 'LCL vs FCL: choosing how to ship into Singapore',
    lede: 'LCL means your goods share a container with other shippers. FCL means the container is yours. The choice looks like a simple volume calculation and usually is not, because LCL carries costs and risks that do not appear in the rate.',
    summary: 'When sharing a container makes sense, and the costs that do not show up in the LCL rate.',
    keyPoints: [
      'LCL is priced by volume or weight, whichever is greater, plus destination charges that are often substantial.',
      'FCL becomes competitive at lower volumes than most people assume — often around 12–15 cubic metres.',
      'LCL adds consolidation and deconsolidation time at both ends, and more handling means more damage risk.',
      'For fragile or high-value cargo, the handling exposure in LCL is a real consideration.',
    ],
    facts: [
      { label: '20ft container', value: 'Roughly 28–33 cbm usable, payload typically around 21–25 tonnes' },
      { label: '40ft container', value: 'Roughly 58–67 cbm usable' },
      { label: 'LCL priced on', value: 'Volume or weight, whichever is greater' },
      { label: 'Typical crossover point', value: 'Often around 12–15 cbm, depending on lane and rates' },
    ],
    sections: [
      {
        heading: 'How LCL actually works',
        body: 'Your cargo is delivered to a consolidation warehouse at origin, loaded into a container with other shippers\' goods, shipped, and then deconsolidated at a warehouse in Singapore before you collect or it is delivered. Two extra handling operations, two extra warehouse stops, and a schedule that depends on the container filling. That last point is the invisible one: a consolidator waiting for enough cargo to justify a sailing can add days that no transit quote reflects.',
      },
      {
        heading: 'The destination charges problem',
        body: 'LCL rates quoted at origin frequently look attractive and then meet a set of destination charges that were not in the quote — deconsolidation, terminal handling, documentation, and warehouse fees. These can be a large share of the total on a small consignment. When comparing LCL and FCL, insist on an all-in landed comparison rather than comparing an origin rate against a full-container rate.',
      },
      {
        heading: 'When FCL wins earlier than expected',
        body: 'The crossover is usually lower than people assume. Somewhere around 12 to 15 cubic metres, a 20-foot container often becomes competitive with LCL once destination charges are included — and it comes with advantages LCL cannot match:',
        bullets: [
          'Your goods are not handled with anyone else\'s.',
          'No waiting for a consolidation to fill.',
          'The container can often be delivered directly rather than via a warehouse.',
          'Damage risk drops substantially with fewer handling operations.',
          'You control how the container is loaded and secured.',
        ],
      },
      {
        heading: 'The damage question',
        body: 'This is where LCL genuinely costs more than the rate suggests. Goods in an LCL consolidation are loaded alongside whatever else is going, moved multiple times, and stacked according to a warehouse\'s logic rather than yours. For robust palletised cargo that is fine. For fragile equipment, furniture, or anything with delicate finishes, the additional handling is a real exposure — and one that people do not weigh until after a claim.',
      },
      {
        heading: 'A note on the awkward middle',
        body: 'The most difficult consignments are around 8 to 12 cubic metres of fragile or high-value cargo — too much for economical LCL, not enough to fill a container comfortably. Options include upgrading to a 20-foot container anyway for the protection, splitting between air and sea, or waiting to consolidate with a subsequent order. Which is right depends on the value and fragility, and it is worth actually calculating rather than defaulting to LCL because the volume is small.',
      },
    ],
    faqs: [
      {
        q: 'At what volume should I switch to a full container?',
        a: 'Often around 12–15 cubic metres once destination charges are counted, though it varies by lane and by current rates. Get an all-in comparison for your actual consignment rather than relying on a rule of thumb.',
      },
      {
        q: 'Why did my LCL shipment cost so much more than quoted?',
        a: 'Almost always destination charges — deconsolidation, terminal handling, documentation, and warehouse fees that were not in the origin quote. Ask for the landed cost including all destination charges before booking.',
      },
      {
        q: 'Is LCL riskier for fragile goods?',
        a: 'Yes. More handling operations, loading alongside unknown cargo, and warehouse stacking all add exposure. For fragile or high-value goods, a full container or proper crating within an LCL consignment is worth the extra cost.',
      },
      {
        q: 'Can I use a 20ft container for a small consignment?',
        a: 'Yes, and sometimes you should. Paying for space you do not use can still be cheaper and safer than LCL once destination charges and damage risk are counted, particularly for anything delicate.',
      },
    ],
    officialSources: [],
    relatedGuides: ['air-freight-vs-sea-freight-singapore', 'incoterms-for-singapore-importers'],
    relatedServices: ['special-cargo-singapore', 'fragile-equipment-shipping-singapore'],
  },
  {
    slug: 'free-trade-zones-singapore',
    label: 'Free Trade Zones',
    group: 'Freight & logistics',
    metaTitle: 'Free Trade Zones in Singapore | When They Actually Help',
    metaDescription: 'Singapore\'s Free Trade Zones, how duty and GST suspension works, the difference from a licensed warehouse, and when an FTZ is actually useful to an importer.',
    h1: 'Free Trade Zones in Singapore',
    lede: 'Singapore\'s Free Trade Zones are designated areas where goods can be held, handled, and re-exported without duty and GST becoming payable. They are central to Singapore\'s role as a transhipment hub, and mostly irrelevant to a business importing goods for use here.',
    summary: 'Where duty and GST are suspended, and whether that helps you.',
    keyPoints: [
      'FTZs are designated areas at the seaports and airport where goods can sit outside the tax net.',
      'Duty and GST become payable when goods leave the FTZ for the local market.',
      'They are designed for transhipment and re-export, not for ordinary importers.',
      'Licensed warehouses serve a related but different purpose for dutiable goods.',
    ],
    facts: [
      { label: 'Located at', value: 'Singapore\'s main seaport terminals and the airport cargo area' },
      { label: 'Primary purpose', value: 'Transhipment, storage, and re-export without tax becoming payable' },
      { label: 'Tax point', value: 'When goods leave the FTZ for local consumption' },
      { label: 'Related facility', value: 'Licensed warehouses, used for storing dutiable goods under suspension' },
    ],
    sections: [
      {
        heading: 'What an FTZ is for',
        body: 'A Free Trade Zone is a designated area, physically located at the port and airport cargo facilities, where imported goods can be landed, stored, repacked, and re-exported without duty or GST becoming payable. The logic is that goods merely passing through Singapore should not be taxed as though they were consumed here. This is a large part of why Singapore functions as a regional distribution hub — cargo can be brought in, held, split, and sent onward efficiently.',
      },
      {
        heading: 'What happens when goods leave',
        body: 'The tax point is the moment goods leave the FTZ for the local market. At that point a declaration is made and duty and GST become payable as on any import. Goods leaving the FTZ for re-export do not attract the tax. The zone does not remove the obligation; it defers it and makes it conditional on where the goods end up.',
      },
      {
        heading: 'Why it is usually not relevant to an ordinary importer',
        body: 'If you are importing goods to use, install, or sell in Singapore, the goods are going to leave the FTZ into the local market and the tax will apply. Routing through an FTZ achieves nothing except added handling. FTZs are useful to businesses doing regional distribution, transhipment, or holding stock destined for other markets — not to a company bringing in a machine for its own workshop.',
      },
      {
        heading: 'Licensed warehouses, which are different',
        body: 'A licensed warehouse is a separate arrangement, used for storing dutiable goods — principally liquor and tobacco — with duty suspended until they are released for local consumption. For an importer of wine or spirits holding stock over time, this can be genuinely useful for cash flow, because duty is paid as the stock is released rather than all at once on arrival. It requires a licence and a suitable facility, so in practice it is accessed through a service provider.',
      },
      {
        heading: 'Where the confusion comes from',
        body: 'The term "free trade zone" appears in many countries with different meanings, sometimes including manufacturing incentives and tax holidays. Singapore\'s FTZs are narrower than that — they are customs facilities concerned with the movement and storage of goods, not investment incentive areas. Advice written about free zones elsewhere often does not transfer.',
      },
    ],
    faqs: [
      {
        q: 'Can I use an FTZ to avoid paying GST on my imports?',
        a: 'Only if the goods are leaving Singapore again. GST is deferred while goods are in the zone and becomes payable when they enter the local market. If your goods are staying here, the FTZ adds handling without removing tax.',
      },
      {
        q: 'How long can goods stay in an FTZ?',
        a: 'Goods can generally be held while awaiting onward movement, subject to the operator\'s arrangements and commercial terms. It is a customs status question in principle and a warehousing cost question in practice.',
      },
      {
        q: 'Is a licensed warehouse useful for me?',
        a: 'Only if you deal in dutiable goods — principally liquor and tobacco — and hold stock over time. For a wine importer, duty suspension can be a meaningful cash flow advantage. For everyone else it does not apply.',
      },
      {
        q: 'Do I need to do anything special if my goods transit an FTZ?',
        a: 'Goods arriving at a Singapore port pass through the FTZ as a matter of course before clearance. That is normal and requires nothing special from you. It is deliberately holding goods in the zone that is a distinct arrangement.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['import-permit-types-singapore', 'gst-on-imports-singapore', 'customs-duty-in-singapore'],
    relatedServices: ['customs-support-singapore'],
  },
  {
    slug: 'customs-clearance-timeline-singapore',
    label: 'Clearance timeline',
    group: 'Freight & logistics',
    metaTitle: 'Singapore Customs Clearance Timeline | After Arrival',
    metaDescription: 'What actually happens between a vessel or aircraft arriving and your goods being delivered, how long each stage takes, and where delays come from.',
    h1: 'What happens after your shipment arrives in Singapore',
    lede: 'Arrival is not delivery. Between the vessel berthing and the goods reaching your door sits a sequence of steps, most of them fast if the paperwork is right and none of them fast if it is not.',
    summary: 'The stages between arrival and delivery, and where time is actually lost.',
    keyPoints: [
      'The import permit should already exist before arrival — it is not an arrival-day task.',
      'Air shipments typically move from arrival to delivery faster than sea, but the paperwork requirements are identical.',
      'Free storage time is short. Charges start sooner than most importers expect.',
      'Delay almost always originates in documentation, not in port or airport processing.',
    ],
    facts: [
      { label: 'Before arrival', value: 'Permit obtained, documents in order, any Competent Authority approval secured' },
      { label: 'On arrival', value: 'Cargo discharged, manifested, and available for release against the permit' },
      { label: 'Typical air release', value: 'Often same or next working day when documentation is clean' },
      { label: 'Typical sea release', value: 'Usually a few working days from berthing, subject to terminal and haulage' },
      { label: 'Main delay cause', value: 'Incomplete or inaccurate documentation' },
    ],
    sections: [
      {
        heading: 'The sequence',
        body: 'The steps are broadly the same for sea and air. The carrier files the manifest. Cargo is discharged and moved to the terminal or airport cargo facility. The import permit — which should already exist — is matched against the cargo. Where a controlling agency has an interest, its approval is reflected in the permit. Charges and taxes are settled. The cargo is released, then collected and delivered. Where the cargo is selected for inspection, an additional step is inserted and the timeline extends.',
      },
      {
        heading: 'Where the time actually goes',
        body: 'It is rarely the customs processing itself. In our experience the delays cluster in a few places:',
        bullets: [
          'The permit was applied for after arrival rather than before.',
          'The goods description on the invoice would not support a clean declaration and had to be revised.',
          'A Competent Authority requirement surfaced that nobody had checked for.',
          'The original bill of lading had not been released by the bank or the shipper.',
          'Nobody arranged the haulage, so cleared cargo sat at the terminal.',
        ],
      },
      {
        heading: 'Storage charges start quickly',
        body: 'Free storage periods at terminals and cargo facilities are short, and charges escalate. This is the mechanism by which a documentation problem turns into a financial one — a shipment held for a week over a missing approval can accrue meaningful storage and, for containers, demurrage and detention on top. When we push to get documentation reviewed before shipment, this is what we are trying to avoid.',
      },
      {
        heading: 'If your cargo is selected for inspection',
        body: 'Selection for inspection is a normal part of the system and is not by itself an accusation of anything. The cargo is examined against the declaration. If everything matches, it is released with a modest delay. Problems arise when it does not match — quantities differ, goods are not what was described, or undeclared items are present. The best protection is a declaration that accurately describes what is in the box, which is entirely within your control at the point of shipping.',
      },
      {
        heading: 'Planning to a deadline',
        body: 'If you have a fixed date — an event, an install, a production start — work backwards and put the buffer before the deadline, not after the estimated arrival. For anything genuinely critical we plan for the cargo to be cleared and available several days before it is needed. That is not conservatism; it is the difference between a problem you can solve and one you cannot.',
      },
    ],
    faqs: [
      {
        q: 'How long does customs clearance take in Singapore?',
        a: 'With clean documentation and a permit already in place, release is often quick — frequently same or next working day for air, and a few working days for sea once terminal processes are accounted for. Nearly all the variance comes from documentation quality, not from processing speed.',
      },
      {
        q: 'How much free storage do I get?',
        a: 'Less than you would like, and it varies by terminal and facility. Assume it is short and that charges escalate. Plan collection rather than assuming the cargo can wait while you organise things.',
      },
      {
        q: 'What is demurrage and detention?',
        a: 'Demurrage is charged for a container sitting at the terminal beyond free time; detention is charged for keeping the container outside the terminal beyond the allowed period. Both accrue daily and both are avoidable with planning.',
      },
      {
        q: 'Can I speed up clearance if I am in a hurry?',
        a: 'The genuine levers are all before arrival: permit in place, documentation accurate, approvals secured, haulage arranged. Once cargo has landed with a problem, the options narrow considerably. Urgency is best spent at the front of the process.',
      },
    ],
    officialSources: [CUSTOMS],
    relatedGuides: ['import-documentation-checklist', 'what-is-tradenet', 'controlled-goods-and-competent-authorities'],
    relatedServices: ['customs-support-singapore', 'special-cargo-singapore'],
  },
];

export function guideToSpoke(g: Guide): SpokeBase {
  return {
    slug: g.slug,
    label: g.label,
    metaTitle: g.metaTitle,
    metaDescription: g.metaDescription,
    h1: g.h1,
    lede: g.lede,
    summary: g.summary,
    facts: g.facts ?? [],
    sections: g.sections,
    faqs: g.faqs,
    group: g.group,
    relatedServices: g.relatedServices,
    relatedPaths: [
      ...g.relatedGuides.map((s) => `/guides/${s}`),
      ...(g.relatedPaths ?? []),
    ],
  };
}

export const guideSpokes: SpokeBase[] = guides.map(guideToSpoke);

export const guideGroups = [
  'Getting set up',
  'Permits & declarations',
  'Duty, GST & valuation',
  'Documents & origin',
  'Freight & logistics',
] as const;

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
