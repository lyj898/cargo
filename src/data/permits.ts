// Permit / controlled-goods cluster → /permits/<slug>
//
// These pages answer "is this controlled, and who controls it?" for goods
// people actually ask about. Editorial rules, applied to every entry:
//   - Name the Competent Authority. That is the durable, checkable fact.
//   - Describe the *type* of requirement (licence, notification, permit per
//     consignment), never a specific fee, form number, or processing time.
//   - Never tell a reader their particular product is or isn't controlled —
//     say what determines it and who to ask.
//   - Where something is outright prohibited, say so plainly. Hedging on a
//     prohibition is worse than useless.

import type { Faq, Fact, Section, SpokeBase } from './types';
import { fitTitle } from '../utils/meta';

export type PermitTopic = {
  slug: string;
  /** Goods as people search for them. */
  name: string;
  titleName: string;
  group: 'Food & agriculture' | 'Health & personal' | 'Technology & equipment' | 'Environment & safety' | 'Security & media' | 'Prohibited';
  /** Short verdict shown prominently: the honest one-line answer. */
  verdict: string;
  /** The controlling agency. */
  authority: string;
  authorityUrl: string;
  /** Type of requirement, in general terms. */
  requirementType: string;
  intro: string;
  /** What is typically involved. */
  requirements: string[];
  /** Things that catch people out on this specific category. */
  pitfalls: string[];
  faqs: Faq[];
  relatedPaths?: string[];
};

export const permitTopics: PermitTopic[] = [
  // --- Prohibited ----------------------------------------------------------
  {
    slug: 'prohibited-goods-singapore',
    name: 'prohibited goods',
    titleName: 'Prohibited Goods',
    group: 'Prohibited',
    verdict: 'Some goods cannot be imported into Singapore at all, at any quantity, with any permit.',
    authority: 'Singapore Customs, with individual agencies for specific categories',
    authorityUrl: 'https://www.customs.gov.sg',
    requirementType: 'Prohibition — no permit route exists',
    intro:
      'Most import questions are about which permit you need. A smaller set of goods has no permit route at all: they are prohibited, and bringing them in is an offence rather than an administrative problem. The list is short but it contains items that are legal and unremarkable in other countries, which is exactly why people fall foul of it.',
    requirements: [
      'Chewing gum, other than dental or medicinal gum supplied through the regulated channel.',
      'E-cigarettes, vaporisers, and their components and refills.',
      'Chewing tobacco and imitation tobacco products.',
      'Firecrackers.',
      'Controlled drugs and psychotropic substances.',
      'Obscene articles, publications, and materials.',
      'Seditious or treasonable material.',
      'Endangered species and their products, other than under a valid CITES permit.',
    ],
    pitfalls: [
      'Legality elsewhere is irrelevant. Products sold openly in your home market may be prohibited here.',
      'Prohibition applies to personal quantities as well as commercial consignments.',
      'Ignorance is not a defence, and penalties for some categories are severe.',
      'Some items sit near a prohibition without crossing it — the detail of the product determines which side it falls on.',
      'Marketplace sellers frequently ship prohibited items into Singapore without checking; the recipient carries the consequence.',
    ],
    faqs: [
      {
        q: 'What happens if prohibited goods arrive in my name?',
        a: 'At minimum the goods are seized. Depending on the category the consequences can be considerably more serious, and penalties for controlled drugs in particular are severe. If you believe prohibited goods are en route to you, get advice immediately rather than waiting to see what happens.',
      },
      {
        q: 'Are vapes really banned in Singapore?',
        a: 'Yes. The import, sale, distribution, possession, and use of e-cigarettes and vaporisers are prohibited. This is one of the most commonly encountered prohibitions among visitors and new residents, and enforcement is active.',
      },
      {
        q: 'Can I bring chewing gum in for personal use?',
        a: 'The import of chewing gum is prohibited, with an exception for dental and medicinal gum supplied through regulated channels such as pharmacies. Bringing ordinary chewing gum in as a commercial import is not permitted.',
      },
      {
        q: 'How do I check whether my goods are prohibited?',
        a: 'Start with Singapore Customs\' listing of prohibited and controlled goods, then check with the agency responsible for that category of goods. If there is any doubt at all, ask before shipping — this is not a category where an optimistic assumption is recoverable.',
      },
    ],
    relatedPaths: ['/permits/e-cigarettes-and-vapes', '/permits/chewing-gum', '/guides/controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'e-cigarettes-and-vapes',
    name: 'e-cigarettes and vaporisers',
    titleName: 'E-Cigarettes & Vaporisers',
    group: 'Prohibited',
    verdict: 'Prohibited. There is no permit, licence, or personal allowance that makes this legal.',
    authority: 'Health Sciences Authority (HSA)',
    authorityUrl: 'https://www.hsa.gov.sg',
    requirementType: 'Prohibition — import, sale, possession and use are all offences',
    intro:
      'E-cigarettes, vaporisers, pods, and their components are prohibited in Singapore. Unlike most regulated goods, there is no application to make and no quantity that is acceptable — the prohibition covers import, distribution, sale, possession, and use. This catches travellers and new residents constantly, because these products are sold openly almost everywhere else.',
    requirements: [
      'There is no import route. No licence or permit is available.',
      'The prohibition extends to components, refills, pods, and accessories.',
      'Possession and use are separately prohibited, not just import and sale.',
      'Ordering online for personal delivery is still importing.',
    ],
    pitfalls: [
      'Overseas retailers ship to Singapore addresses without warning buyers — the consignee carries the consequence.',
      'Carrying a device in hand luggage on arrival is an offence, not a customs formality.',
      'Marketplaces sometimes list these products with Singapore delivery options; the listing is not permission.',
      'Products marketed as "heat-not-burn" or by other names are covered by the same framework.',
    ],
    faqs: [
      {
        q: 'Can I bring my own vape into Singapore for personal use?',
        a: 'No. Possession and use are prohibited alongside import and sale. There is no personal allowance. Leave the device behind rather than arriving with it.',
      },
      {
        q: 'What if I ordered one online before I knew?',
        a: 'The consignment will not be released and there may be consequences for the importer of record — which is you if it is addressed to you. If something is en route, seek advice rather than hoping it goes unnoticed.',
      },
      {
        q: 'Are nicotine pouches and heated tobacco treated the same way?',
        a: 'A range of imitation tobacco and smokeless products fall under prohibitions in Singapore. Product names and marketing categories change faster than assumptions do, so check the current position with HSA for the specific product rather than reasoning by analogy.',
      },
    ],
    relatedPaths: ['/permits/prohibited-goods-singapore', '/permits/tobacco-and-cigarettes'],
  },
  {
    slug: 'chewing-gum',
    name: 'chewing gum',
    titleName: 'Chewing Gum',
    group: 'Prohibited',
    verdict: 'Prohibited, except for dental and medicinal gum supplied through regulated channels.',
    authority: 'Health Sciences Authority (HSA) for therapeutic gum; Singapore Customs for the prohibition',
    authorityUrl: 'https://www.hsa.gov.sg',
    requirementType: 'Prohibition, with a narrow regulated exception',
    intro:
      'Singapore\'s chewing gum rule is the country\'s most internationally famous import restriction and is widely misunderstood. Ordinary chewing gum cannot be imported. Dental and medicinal gum — nicotine replacement gum, for instance — is treated as a health product and can be supplied through regulated channels such as pharmacies, which is a genuinely different thing from a general import allowance.',
    requirements: [
      'Ordinary confectionery chewing gum: no import route.',
      'Dental and medicinal gum: regulated as a health product, supplied through appropriate channels.',
      'The therapeutic exception is about the product\'s regulatory classification, not about intent.',
      'Bringing gum in commercially is not permitted regardless of quantity.',
    ],
    pitfalls: [
      'The exception is often assumed to be broader than it is — "sugar-free" is not "dental".',
      'Confectionery brands marketed with dental claims are not automatically in the exception.',
      'Bulk consignments as part of a mixed confectionery shipment are a recurring cause of held cargo.',
      'Suppliers overseas rarely know this rule and will not flag it.',
    ],
    faqs: [
      {
        q: 'Is chewing gum really illegal in Singapore?',
        a: 'The import and sale of ordinary chewing gum are prohibited. Chewing it is not itself the offence people imagine — the control is on import and sale. Dental and medicinal gum is regulated separately as a health product.',
      },
      {
        q: 'I am importing confectionery. Does gum need to be removed?',
        a: 'Yes. If your consignment includes chewing gum among other confectionery, that portion is a problem for the whole shipment. Check your product list against this before loading.',
      },
      {
        q: 'What counts as dental or medicinal gum?',
        a: 'Gum regulated as a health product — nicotine replacement gum being the clearest example. It is a regulatory classification, not a marketing description, and it is a matter for HSA. A sugar-free mint gum is not in the exception because the packaging mentions teeth.',
      },
    ],
    relatedPaths: ['/permits/prohibited-goods-singapore', '/permits/food-and-beverages'],
  },

  // --- Food & agriculture --------------------------------------------------
  {
    slug: 'food-and-beverages',
    name: 'food and beverage products',
    titleName: 'Food & Beverages',
    group: 'Food & agriculture',
    verdict: 'Yes — the importer generally needs an SFA licence, and product requirements vary sharply by category.',
    authority: 'Singapore Food Agency (SFA)',
    authorityUrl: 'https://www.sfa.gov.sg',
    requirementType: 'Importer licence, plus consignment-level permits and category-specific conditions',
    intro:
      'Food is one of the most heavily regulated import categories in Singapore, and the requirements differ enormously between product types. Shelf-stable packaged goods, fresh produce, meat, seafood, and processed products are all treated differently. What they have in common is that the importer generally needs to be licensed with the Singapore Food Agency before the first shipment, and that licence is not obtained in a day.',
    requirements: [
      'Registration as a food importer with SFA, before any shipment.',
      'A permit per consignment, declared through TradeNet.',
      'For many categories, sourcing only from establishments or countries accredited by SFA.',
      'Labelling that complies with Singapore food labelling requirements.',
      'Product-specific conditions — health certificates, temperature control, testing — depending on category.',
    ],
    pitfalls: [
      'The licence must exist before the goods ship. Arranging it while a container is at sea is the classic and expensive mistake.',
      'Source accreditation matters for meat, seafood, and eggs — the exporting establishment itself may need to be approved.',
      'Labelling that satisfies another market frequently does not satisfy Singapore requirements.',
      'Health and nutrition claims on packaging attract additional scrutiny.',
      'A single non-compliant product line can hold an entire mixed consignment.',
    ],
    faqs: [
      {
        q: 'Do I need a licence to import food into Singapore?',
        a: 'Generally yes. Food importers are required to be registered with SFA, and permits are required per consignment. Start this before you place a purchase order, because the licensing step is not compressible.',
      },
      {
        q: 'Can I import food from any country?',
        a: 'Not for all categories. Meat, seafood, and eggs in particular can only be sourced from establishments and countries accredited by SFA. Confirm your intended supplier is on an approved source before agreeing terms.',
      },
      {
        q: 'What about labelling?',
        a: 'Singapore has its own food labelling requirements, covering matters such as ingredient declaration, net content, and specific mandatory statements. Labelling designed for another market often needs to be adapted, and it is easier to do at origin than after arrival.',
      },
      {
        q: 'I am importing a small quantity to test the market. Does that change anything?',
        a: 'The licensing and permit requirements are about the activity of importing food, not the quantity. A trial consignment is still a food import. Plan it the same way as a commercial one.',
      },
    ],
    relatedPaths: ['/permits/meat-and-seafood', '/cargo/commercial-kitchen-equipment', '/guides/controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'meat-and-seafood',
    name: 'meat and seafood',
    titleName: 'Meat & Seafood',
    group: 'Food & agriculture',
    verdict: 'Yes — and additionally, the overseas producing establishment usually has to be accredited.',
    authority: 'Singapore Food Agency (SFA)',
    authorityUrl: 'https://www.sfa.gov.sg',
    requirementType: 'Importer licence, accredited source, veterinary/health certification, consignment permit',
    intro:
      'Meat and seafood carry the strictest food import requirements in Singapore, and they add a step that surprises new importers: it is not enough for you to be licensed, the overseas establishment producing the goods generally has to be accredited by SFA as well. You cannot simply buy from any reputable supplier abroad and bring it in.',
    requirements: [
      'Importer licensed with SFA.',
      'The producing establishment abroad accredited for export to Singapore.',
      'Veterinary health certification from the exporting country\'s competent authority.',
      'A permit per consignment.',
      'Cold chain maintained and documented throughout, for chilled and frozen product.',
      'Inspection and possible sampling on arrival.',
    ],
    pitfalls: [
      'Source accreditation is the step people miss — a licensed importer buying from an unaccredited plant still cannot import.',
      'Health certificates must be issued by the exporting country\'s competent authority, in the correct form, before shipment.',
      'Cold chain breaks are detected and are not recoverable — the consignment is the loss.',
      'Species and product form matter; approval for one product from a plant does not extend to all its products.',
      'Live and fresh seafood has its own timing and handling requirements on top.',
    ],
    faqs: [
      {
        q: 'Why can I not import from my chosen supplier?',
        a: 'Because for meat and seafood the exporting establishment itself needs to be accredited for export to Singapore, not just your business as an importer. Check the approved source position before negotiating with a supplier — it will save an awkward conversation later.',
      },
      {
        q: 'What certification travels with the shipment?',
        a: 'Typically a veterinary health certificate issued by the exporting country\'s competent authority, in the form Singapore requires, plus the commercial documentation. It must be obtained before shipment and cannot be produced retrospectively.',
      },
      {
        q: 'What happens if the cold chain breaks?',
        a: 'Temperature excursions are detectable and taken seriously, and the consignment may be rejected. This is a category where the shipping method and monitoring genuinely determine whether you have a product to sell.',
      },
    ],
    relatedPaths: ['/permits/food-and-beverages', '/permits/animal-feed-and-pet-food'],
  },
  {
    slug: 'plants-and-seeds',
    name: 'plants, seeds, and plant products',
    titleName: 'Plants & Seeds',
    group: 'Food & agriculture',
    verdict: 'Yes — plant material generally needs an import permit and a phytosanitary certificate from origin.',
    authority: 'National Parks Board (NParks)',
    authorityUrl: 'https://www.nparks.gov.sg',
    requirementType: 'Import permit, phytosanitary certificate, inspection on arrival',
    intro:
      'Live plants, cuttings, seeds, and many plant products require an import permit and a phytosanitary certificate issued by the plant protection authority in the exporting country. The certificate has to be obtained at origin before the goods leave, which makes this one of the requirements that genuinely cannot be fixed after the fact.',
    requirements: [
      'An import permit obtained before arrival.',
      'A phytosanitary certificate from the exporting country\'s plant protection authority.',
      'Inspection on arrival, with possible treatment requirements.',
      'For CITES-listed plants — including many orchids and cacti — a CITES permit as well.',
      'Soil is generally prohibited; plants usually need to arrive bare-rooted or in approved media.',
    ],
    pitfalls: [
      'Soil attached to roots is a common reason for refusal — confirm the growing medium is acceptable.',
      'Many popular ornamental species are CITES-listed and need permits people do not expect.',
      'The phytosanitary certificate must be issued before export; there is no retrospective route.',
      'Seeds bought casually online are still a regulated plant import.',
      'Wooden packaging accompanying plant consignments has its own ISPM 15 requirement.',
    ],
    faqs: [
      {
        q: 'Can I import seeds bought online?',
        a: 'Seeds are regulated plant material and generally require a permit and phytosanitary certification, regardless of how casually they were purchased. Small online seed orders are a routine cause of seized consignments.',
      },
      {
        q: 'Are orchids and cacti restricted?',
        a: 'Many are CITES-listed, which adds a permit requirement on top of the phytosanitary one. Orchids in particular are extensively listed. Check the specific species rather than assuming ornamental plants are unrestricted.',
      },
      {
        q: 'Can plants arrive in soil?',
        a: 'Generally not — soil is a pest risk and is normally prohibited. Plants usually need to be bare-rooted or in an approved inert growing medium. Confirm the requirement before the nursery packs the consignment.',
      },
    ],
    relatedPaths: ['/permits/cites-wildlife-products', '/guides/wood-packaging-ispm-15'],
  },
  {
    slug: 'pets-and-live-animals',
    name: 'pets and live animals',
    titleName: 'Pets & Live Animals',
    group: 'Food & agriculture',
    verdict: 'Yes — a licence, vaccination and testing schedule, and usually quarantine on arrival.',
    authority: 'Animal & Veterinary Service (AVS), under NParks',
    authorityUrl: 'https://www.nparks.gov.sg',
    requirementType: 'Import licence, veterinary certification, quarantine, and species restrictions',
    intro:
      'Bringing a pet into Singapore is a months-long process rather than a shipping decision. Requirements depend heavily on the country of origin, which is grouped by rabies risk, and typically involve microchipping, a vaccination schedule, blood testing with a waiting period, an import licence, and quarantine on arrival. Species restrictions also apply — not every animal that is an ordinary pet elsewhere may be kept here.',
    requirements: [
      'An import licence obtained in advance.',
      'Microchip identification.',
      'Rabies vaccination and, depending on origin, a blood titre test with a mandatory waiting period.',
      'A veterinary health certificate issued close to departure.',
      'Quarantine on arrival, with duration depending on the country of origin.',
      'Compliance with species and breed restrictions.',
    ],
    pitfalls: [
      'The blood test waiting period alone can be several months — this dictates the whole timeline.',
      'Some dog breeds are prohibited or restricted; check before committing to a relocation.',
      'Quarantine space is finite and needs booking, sometimes well ahead.',
      'Requirements differ substantially by country group; guidance for one origin does not transfer.',
      'Exotic pets legal elsewhere are frequently not permitted here.',
    ],
    faqs: [
      {
        q: 'How long does it take to bring a pet to Singapore?',
        a: 'Plan on months, not weeks. Where a rabies blood titre test and waiting period apply, that alone sets a long lead time before the animal can travel. Start as soon as a move is likely rather than when it is confirmed.',
      },
      {
        q: 'Does my pet have to go into quarantine?',
        a: 'Usually, with the duration depending on the country of origin and its rabies risk category. Quarantine facilities need booking, so this is a step to arrange early rather than on arrival.',
      },
      {
        q: 'Are any breeds not allowed?',
        a: 'Some dog breeds are prohibited and others are restricted with additional conditions. Check the current position with AVS before making relocation plans around a particular animal.',
      },
    ],
    relatedPaths: ['/permits/cites-wildlife-products', '/permits/animal-feed-and-pet-food'],
  },
  {
    slug: 'animal-feed-and-pet-food',
    name: 'animal feed and pet food',
    titleName: 'Animal Feed & Pet Food',
    group: 'Food & agriculture',
    verdict: 'Yes — feed and pet food are regulated, with requirements varying by ingredient origin.',
    authority: 'Animal & Veterinary Service (AVS) and Singapore Food Agency (SFA), depending on the product',
    authorityUrl: 'https://www.nparks.gov.sg',
    requirementType: 'Licence or approval, source conditions, and consignment permits',
    intro:
      'Pet food and animal feed sit between the food and animal health regimes, and which applies depends on the animal it is intended for and what is in it. Products containing animal-derived ingredients attract the most attention, because they carry the same disease-transmission concerns as meat imports do.',
    requirements: [
      'Approval or licensing appropriate to the product type and target animal.',
      'Source conditions for animal-derived ingredients, which may require accredited establishments.',
      'Health certification from the exporting country for products of animal origin.',
      'A permit per consignment.',
      'Labelling appropriate to the product category.',
    ],
    pitfalls: [
      'Ingredient composition drives the requirements — a grain-based product and a meat-based one are treated differently.',
      'Raw and freeze-dried pet foods containing animal protein attract closer scrutiny than processed kibble.',
      'Treats and supplements are frequently overlooked but are regulated alongside the main product.',
      'Requirements differ for feed intended for food-producing animals versus companion animals.',
    ],
    faqs: [
      {
        q: 'Is pet food regulated the same way as human food?',
        a: 'Not identically, but it is regulated. Products containing animal-derived ingredients face conditions comparable in spirit to meat imports, because the underlying concern is disease transmission. The specific regime depends on the product and target animal.',
      },
      {
        q: 'Are pet treats included?',
        a: 'Yes — treats, chews, and supplements are part of the same picture and are commonly overlooked when importers list their product range. Include them in the assessment from the start.',
      },
      {
        q: 'Does raw pet food have extra requirements?',
        a: 'Raw and minimally processed products containing animal protein generally attract stricter conditions than heat-treated products. Confirm the position for your specific formulation before committing to stock.',
      },
    ],
    relatedPaths: ['/permits/meat-and-seafood', '/permits/pets-and-live-animals'],
  },
  {
    slug: 'rice',
    name: 'rice',
    titleName: 'Rice',
    group: 'Food & agriculture',
    verdict: 'Yes — rice is a controlled item under a stockpile scheme, with its own licence.',
    authority: 'Enterprise Singapore, with SFA for food safety aspects',
    authorityUrl: 'https://www.enterprisesg.gov.sg',
    requirementType: 'Import licence under the Rice Stockpile Scheme, plus food import requirements',
    intro:
      'Rice is a food security staple in Singapore and is regulated more tightly than most food products as a result. Importers operate under a stockpile scheme requiring a licence and the maintenance of a physical stockpile — an obligation that has nothing to do with food safety and everything to do with supply resilience. It surprises importers who assumed rice was an ordinary food commodity.',
    requirements: [
      'A licence to import rice, issued under the stockpile scheme.',
      'Maintenance of a stockpile proportionate to import volumes.',
      'Compliance with food import requirements as a food product.',
      'A permit per consignment.',
      'Reporting obligations associated with the scheme.',
    ],
    pitfalls: [
      'The stockpile obligation is a real operational and capital commitment, not a formality.',
      'Small importers frequently do not anticipate the scheme applying to them.',
      'Different rice varieties and product forms may fall differently under the scheme.',
      'Rice included within a mixed food consignment still triggers the requirement.',
    ],
    faqs: [
      {
        q: 'Why is rice controlled in Singapore?',
        a: 'Food security. Singapore imports essentially all of its food, and rice is a staple, so the stockpile scheme exists to ensure buffer supply. The control is about resilience rather than safety, which is why it sits with a different agency from ordinary food safety matters.',
      },
      {
        q: 'Does the scheme apply to small quantities?',
        a: 'The licensing framework applies to importing rice as an activity. If you plan to import rice commercially, assume the scheme applies and confirm the specifics with Enterprise Singapore rather than assuming a small volume is outside it.',
      },
      {
        q: 'What if rice is one line in a larger food consignment?',
        a: 'It still triggers the requirement for that portion, and an unaddressed requirement on one line holds the consignment. Review your product list against this before shipping mixed food cargo.',
      },
    ],
    relatedPaths: ['/permits/food-and-beverages'],
  },

  // --- Health & personal ---------------------------------------------------
  {
    slug: 'health-supplements',
    name: 'health supplements',
    titleName: 'Health Supplements',
    group: 'Health & personal',
    verdict: 'Regulated by HSA — requirements depend on ingredients and on what the product claims.',
    authority: 'Health Sciences Authority (HSA)',
    authorityUrl: 'https://www.hsa.gov.sg',
    requirementType: 'Product-dependent: dealer licensing, notification, or full registration',
    intro:
      'Health supplements occupy a spectrum in Singapore. At one end, a straightforward vitamin product may face relatively light requirements; at the other, a product containing a potent ingredient or making a therapeutic claim may be regulated as a medicine entirely. The determining factors are what is in the product and what it says it does — and importers routinely misjudge the second one.',
    requirements: [
      'Assessment of whether the product is a health supplement or falls into a more heavily regulated category.',
      'Compliance with ingredient restrictions and permitted substance lists.',
      'Labelling and claim requirements appropriate to the category.',
      'Dealer licensing where the product falls under a licensed category.',
      'A permit per consignment, declared through TradeNet.',
    ],
    pitfalls: [
      'A therapeutic claim can reclassify a supplement as a medicine, changing the regime completely.',
      'Ingredients permitted in other markets may be prohibited or restricted here.',
      'Products containing undeclared pharmaceutical ingredients are a serious enforcement priority.',
      'Marketing material and website claims are part of the picture, not just the label.',
      'Sports and weight-loss supplements attract particular scrutiny.',
    ],
    faqs: [
      {
        q: 'Do health supplements need registration in Singapore?',
        a: 'It depends on the product. Some supplements face lighter requirements; others fall into categories requiring licensing or registration. The composition and the claims made determine which. Confirm the classification with HSA before importing stock.',
      },
      {
        q: 'What makes a supplement become a medicine?',
        a: 'Broadly, claiming to prevent, treat, or cure a condition, or containing an ingredient that is regulated as a medicine. This reclassification is the single most consequential thing that happens to supplement importers, and it is often triggered by marketing copy rather than the formulation.',
      },
      {
        q: 'Can I sell a supplement here that is legal in the US or Australia?',
        a: 'Not automatically. Permitted ingredient lists differ between markets, and a product compliant elsewhere may contain something restricted here. Review the full ingredient list against Singapore requirements before ordering.',
      },
    ],
    relatedPaths: ['/permits/traditional-and-chinese-medicines', '/cargo/medical-devices'],
  },
  {
    slug: 'traditional-and-chinese-medicines',
    name: 'traditional and Chinese proprietary medicines',
    titleName: 'Traditional & Chinese Medicines',
    group: 'Health & personal',
    verdict: 'Yes — Chinese proprietary medicines require listing with HSA before they can be supplied.',
    authority: 'Health Sciences Authority (HSA)',
    authorityUrl: 'https://www.hsa.gov.sg',
    requirementType: 'Product listing, dealer licensing, and ingredient restrictions',
    intro:
      'Chinese proprietary medicines and traditional remedies are regulated as health products in Singapore, with a listing requirement before supply and restrictions on certain ingredients. The recurring enforcement issue in this category is products adulterated with undeclared pharmaceutical substances, which means genuine importers face more scrutiny than the products themselves might suggest.',
    requirements: [
      'Listing of the product with HSA before supply.',
      'Dealer licensing appropriate to the activity.',
      'Compliance with restrictions on toxic and prohibited ingredients.',
      'Heavy metal and microbial limits.',
      'Labelling in the required form.',
    ],
    pitfalls: [
      'Adulteration with undeclared pharmaceutical ingredients is an active enforcement concern and carries serious consequences.',
      'Some traditional ingredients are restricted or prohibited on toxicity grounds.',
      'Ingredients derived from protected species bring CITES requirements as well.',
      'Products sold freely in the country of origin may not meet Singapore limits.',
      'Testing requirements can add significant lead time before a first shipment.',
    ],
    faqs: [
      {
        q: 'What is a Chinese Proprietary Medicine for these purposes?',
        a: 'It is a defined regulatory category covering finished traditional medicine products, with its own listing requirement. Whether a specific product falls within it is a question of composition and presentation, and HSA is the authority on it.',
      },
      {
        q: 'Why are these products scrutinised heavily?',
        a: 'Because adulteration with undeclared pharmaceutical substances has been a recurring problem internationally. Legitimate importers carry the consequence of that history in the form of testing and documentation expectations.',
      },
      {
        q: 'Do any ingredients bring CITES requirements?',
        a: 'Yes. Traditional preparations sometimes contain material derived from protected species, which requires CITES permits or may be prohibited outright. Review the full ingredient list, including traditional names, before importing.',
      },
    ],
    relatedPaths: ['/permits/health-supplements', '/permits/cites-wildlife-products'],
  },
  {
    slug: 'tobacco-and-cigarettes',
    name: 'tobacco and cigarettes',
    titleName: 'Tobacco & Cigarettes',
    group: 'Health & personal',
    verdict: 'Yes — a licence, substantial duty, and strict packaging rules. Some tobacco products are banned outright.',
    authority: 'Health Sciences Authority (HSA) and Singapore Customs',
    authorityUrl: 'https://www.hsa.gov.sg',
    requirementType: 'Import licence, excise duty, standardised packaging, product restrictions',
    intro:
      'Tobacco is one of the four dutiable categories in Singapore and one of the most tightly regulated products there is. Import requires a licence, duty is charged by weight or per stick rather than on value, packaging must comply with standardised packaging requirements, and several categories of tobacco product — smokeless and imitation products among them — are prohibited entirely.',
    requirements: [
      'A licence to import tobacco products.',
      'Excise duty, charged on quantity rather than value.',
      'Compliance with standardised packaging and health warning requirements.',
      'Product registration or notification requirements administered by HSA.',
      'A permit per consignment.',
    ],
    pitfalls: [
      'Duty on tobacco is very high and dominates the landed cost calculation.',
      'Chewing tobacco, snuff, and imitation tobacco products are prohibited outright.',
      'Packaging compliant in the country of origin will almost certainly not comply here.',
      'Even personal quantities carried by travellers are dutiable — there is no duty-free tobacco allowance.',
      'Enforcement against untaxed tobacco is active and penalties are significant.',
    ],
    faqs: [
      {
        q: 'Is there a duty-free allowance for cigarettes?',
        a: 'No. Singapore does not provide a duty-free concession for tobacco products, including for travellers. All tobacco brought in is dutiable, which frequently catches out arriving passengers.',
      },
      {
        q: 'What tobacco products are banned?',
        a: 'Smokeless products including chewing tobacco and snuff, and imitation tobacco products, are prohibited. E-cigarettes and vaporisers are separately prohibited. The permitted range is narrower than in most countries.',
      },
      {
        q: 'Does packaging need to change for Singapore?',
        a: 'Yes. Standardised packaging and health warning requirements apply, and packaging designed for another market will not comply. This has to be arranged with the manufacturer, not fixed after arrival.',
      },
    ],
    relatedPaths: ['/permits/e-cigarettes-and-vapes', '/guides/customs-duty-in-singapore'],
  },

  // --- Technology & equipment ----------------------------------------------
  {
    slug: 'telecom-and-radio-equipment',
    name: 'telecommunications and radio equipment',
    titleName: 'Telecom & Radio Equipment',
    group: 'Technology & equipment',
    verdict: 'Often yes — equipment that transmits generally falls under IMDA requirements.',
    authority: 'Infocomm Media Development Authority (IMDA)',
    authorityUrl: 'https://www.imda.gov.sg',
    requirementType: 'Equipment registration and, for dealing activity, a dealer licence',
    intro:
      'If a device transmits on radio frequencies, it probably falls under IMDA\'s remit. This covers far more than obvious telecoms equipment: wireless speakers, industrial sensors, remote controls, RFID readers, and anything with Wi-Fi or Bluetooth are all in scope in principle. The frequencies and power levels permitted in Singapore also differ from other markets, so equipment certified elsewhere is not automatically acceptable here.',
    requirements: [
      'Registration of equipment under the applicable IMDA scheme.',
      'A dealer licence where the activity involves selling or supplying equipment.',
      'Compliance with Singapore\'s frequency allocations and power limits.',
      'Technical documentation and test reports supporting compliance.',
      'Labelling or marking where required by the registration scheme.',
    ],
    pitfalls: [
      'Frequency bands permitted in the US, EU, or Japan are not identical to Singapore\'s.',
      'Devices with incidental wireless functionality are still in scope — the primary purpose does not matter.',
      'Foreign certification (FCC, CE) supports a submission but does not substitute for it.',
      'Equipment imported for own use may still need to comply, depending on what it is.',
      'Amateur radio, marine, and aviation equipment have their own considerations.',
    ],
    faqs: [
      {
        q: 'Does a device with Bluetooth need IMDA registration?',
        a: 'Equipment with radio functionality falls under IMDA\'s framework in principle, though the specific requirement depends on the device and how it is being supplied. Send the specification sheet to IMDA or check the applicable scheme rather than assuming a common consumer technology is exempt.',
      },
      {
        q: 'My product is FCC certified. Is that enough?',
        a: 'No. FCC and CE marks support a compliance submission but Singapore applies its own framework and its own frequency allocations. A device operating on a band permitted in the US may not be permitted here.',
      },
      {
        q: 'What if the equipment is for my own use, not for sale?',
        a: 'Requirements can still apply, since the concern is interference with Singapore\'s spectrum rather than commerce. Dealer licensing relates to supply activity, but equipment compliance is a separate question. Check the specific position for your device.',
      },
    ],
    relatedPaths: ['/cargo/servers-and-it-hardware', '/cargo/drones-and-uav', '/guides/controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'e-waste-and-used-electronics',
    name: 'e-waste and used electronics',
    titleName: 'E-Waste & Used Electronics',
    group: 'Environment & safety',
    verdict: 'Yes — waste electronics are controlled, and hazardous waste movement is tightly restricted.',
    authority: 'National Environment Agency (NEA)',
    authorityUrl: 'https://www.nea.gov.sg',
    requirementType: 'Permit for hazardous waste movement; producer responsibility obligations for regulated products',
    intro:
      'The line between "used equipment" and "waste" determines everything in this category. Functional secondhand equipment being imported for use is generally an ordinary import; equipment being imported for disposal, recycling, or recovery is waste, and the transboundary movement of hazardous waste is controlled under the Basel Convention and Singapore\'s own framework. Importers sometimes discover their consignment is legally waste when they had thought of it as stock.',
    requirements: [
      'Assessment of whether the goods are waste or functional equipment.',
      'A permit for the import of controlled hazardous waste, where applicable.',
      'Compliance with Basel Convention procedures for transboundary movement.',
      'Extended producer responsibility obligations for regulated consumer electronics placed on the market.',
      'Documentation supporting functionality where goods are declared as working equipment.',
    ],
    pitfalls: [
      'Declaring waste as used goods to avoid the permit process is a serious matter, not a classification preference.',
      'Mixed consignments of working and non-working equipment are treated by their worst component.',
      'Batteries and CRT displays within a consignment can bring hazardous waste classification.',
      'Producer responsibility obligations apply to businesses placing regulated electronics on the Singapore market.',
      'Evidence of functionality — testing records — is worth having before shipping used equipment.',
    ],
    faqs: [
      {
        q: 'Is used equipment the same as e-waste?',
        a: 'No, and the distinction matters legally. Functional equipment imported for use is an ordinary import. Equipment imported for disposal or material recovery is waste and subject to controls. Have evidence of functionality if you are importing used equipment for use.',
      },
      {
        q: 'What is the Basel Convention?',
        a: 'An international agreement controlling the transboundary movement of hazardous waste. It requires notification and consent procedures between countries before certain waste can move. Singapore applies it, and shipments of hazardous waste without the correct procedure are a serious matter.',
      },
      {
        q: 'Do I have obligations after I sell electronics here?',
        a: 'Businesses placing regulated electrical and electronic products on the Singapore market can have extended producer responsibility obligations relating to collection and recycling. Check the position with NEA if you are importing consumer electronics for sale.',
      },
    ],
    relatedPaths: ['/permits/chemicals-and-hazardous-substances', '/cargo/servers-and-it-hardware'],
  },

  // --- Environment & safety ------------------------------------------------
  {
    slug: 'chemicals-and-hazardous-substances',
    name: 'chemicals and hazardous substances',
    titleName: 'Chemicals & Hazardous Substances',
    group: 'Environment & safety',
    verdict: 'Yes for controlled substances — a licence or permit from NEA, plus transport rules on top.',
    authority: 'National Environment Agency (NEA), with SCDF for petroleum and flammable materials',
    authorityUrl: 'https://www.nea.gov.sg',
    requirementType: 'Hazardous substances licence or permit; separate transport classification',
    intro:
      'Chemicals bring two distinct sets of obligations that people conflate. One is import control: whether the substance is on Singapore\'s hazardous substances list and needs a licence or permit. The other is transport: whether it is classified as dangerous goods for air or sea carriage. A substance can be controlled for import but unremarkable to transport, or vice versa, and both questions need answering separately.',
    requirements: [
      'A hazardous substances licence or permit where the substance is controlled.',
      'A safety data sheet for the specific product.',
      'Correct dangerous goods classification, packing, and documentation for transport.',
      'Storage licensing where quantities exceed thresholds, potentially involving SCDF.',
      'Controls specific to ozone-depleting substances and certain refrigerants.',
    ],
    pitfalls: [
      'Import control and transport classification are separate questions — answering one does not answer the other.',
      'Mixtures may be controlled on the basis of a component present at low concentration.',
      'Refrigerants in equipment can bring controls that the equipment itself does not.',
      'Storage above threshold quantities brings a further licensing layer.',
      'Safety data sheets from suppliers are sometimes outdated — check the revision date.',
    ],
    faqs: [
      {
        q: 'How do I find out if my chemical is controlled?',
        a: 'Start from the safety data sheet, identify the substance and its CAS number, and check against NEA\'s hazardous substances list. Mixtures need checking by component, since a controlled substance at low concentration can still bring the mixture into scope.',
      },
      {
        q: 'Is a dangerous goods classification the same as import control?',
        a: 'No. Dangerous goods classification governs how something may be transported. Import control governs whether it may be brought in and by whom. Both need to be established, and they are administered by different frameworks.',
      },
      {
        q: 'What about refrigerant inside equipment?',
        a: 'Certain refrigerants are controlled, including ozone-depleting substances and some hydrofluorocarbons, and this can apply to gas contained within imported equipment. Get the refrigerant type from the equipment specification before shipping.',
      },
    ],
    relatedPaths: ['/guides/dangerous-goods-into-singapore', '/cargo/commercial-kitchen-equipment', '/permits/petroleum-and-lubricants'],
  },
  {
    slug: 'radioactive-materials',
    name: 'radioactive materials and irradiating apparatus',
    titleName: 'Radioactive Materials & X-Ray Equipment',
    group: 'Environment & safety',
    verdict: 'Yes — a licence is required, including for equipment that merely contains a source.',
    authority: 'National Environment Agency (NEA)',
    authorityUrl: 'https://www.nea.gov.sg',
    requirementType: 'Licence to import, possess, and use; applies to apparatus as well as sources',
    intro:
      'Radioactive materials and irradiating apparatus require licensing to import, possess, and use in Singapore. The category is broader than most people assume: it includes X-ray inspection equipment, certain analytical instruments containing sealed sources, and some industrial gauges. Equipment importers frequently discover this when an instrument they thought was ordinary laboratory apparatus turns out to contain a source.',
    requirements: [
      'A licence covering import, possession, and use, obtained before the goods arrive.',
      'Details of the source — isotope, activity, and form — or the apparatus specification.',
      'A named radiation protection officer or equivalent responsible person, depending on the application.',
      'Appropriate storage and handling arrangements.',
      'Transport in accordance with dangerous goods requirements for Class 7.',
    ],
    pitfalls: [
      'Analytical instruments — gas chromatographs with ECD detectors, certain gauges — can contain sources without it being obvious.',
      'X-ray inspection and security screening equipment is in scope as irradiating apparatus.',
      'The licence is needed before arrival; the equipment cannot wait in a warehouse while it is applied for.',
      'Disposal and end-of-life obligations also fall under the licensing framework.',
      'Suppliers do not always volunteer that an instrument contains a source — ask explicitly.',
    ],
    faqs: [
      {
        q: 'Does an X-ray machine need a licence?',
        a: 'Irradiating apparatus, including X-ray equipment, generally falls under the licensing framework even though there is no radioactive source in the conventional sense. Confirm the requirement with NEA before importing.',
      },
      {
        q: 'How do I know if my instrument contains a source?',
        a: 'Ask the manufacturer directly and in writing. Several common analytical instruments contain small sealed sources that are not obvious from the product description. This is a question worth asking before purchase, not before shipment.',
      },
      {
        q: 'Can the equipment be held while I apply for a licence?',
        a: 'That is the situation to avoid. Licensing takes time and storage of radioactive material is itself regulated, so an unlicensed arrival is a genuinely difficult position. Apply well before the equipment ships.',
      },
    ],
    relatedPaths: ['/cargo/laboratory-equipment', '/guides/dangerous-goods-into-singapore'],
  },
  {
    slug: 'petroleum-and-lubricants',
    name: 'petroleum products and lubricants',
    titleName: 'Petroleum Products & Lubricants',
    group: 'Environment & safety',
    verdict: 'Petroleum products are dutiable and controlled; storage brings further licensing.',
    authority: 'Singapore Customs for duty; SCDF for petroleum and flammable materials',
    authorityUrl: 'https://www.customs.gov.sg',
    requirementType: 'Duty, import controls, and storage licensing above threshold quantities',
    intro:
      'Petroleum products are one of the four dutiable categories in Singapore, and beyond the duty they bring safety licensing when stored in quantity. Lubricants and specialty oils sit in a more varied position depending on their composition and flash point, which is why the safety data sheet rather than the product name determines the treatment.',
    requirements: [
      'Duty on petroleum products and biodiesel blends, charged by volume.',
      'A licence for storage of petroleum and flammable materials above threshold quantities, from SCDF.',
      'Dangerous goods classification for transport, based on flash point and composition.',
      'A permit per consignment.',
      'Safety data sheets for the specific products.',
    ],
    pitfalls: [
      'Flash point determines the transport classification — product category names are not a reliable guide.',
      'Storage licensing is often overlooked until quantities accumulate.',
      'Lubricants and greases vary widely; some are unremarkable and others are regulated.',
      'Residual product in used containers and drums can bring its own classification.',
      'Sample quantities are still regulated quantities for transport purposes.',
    ],
    faqs: [
      {
        q: 'Are lubricating oils dutiable?',
        a: 'The dutiable category covers petroleum products and biodiesel blends as defined, and whether a specific lubricant falls within it depends on its composition and classification. Check the position for your specific product rather than assuming all oils are treated alike.',
      },
      {
        q: 'When do I need a storage licence?',
        a: 'Storage of petroleum and flammable materials above threshold quantities requires licensing from SCDF. If you are importing to hold stock rather than for immediate use, address this before the goods arrive.',
      },
      {
        q: 'How is the transport classification determined?',
        a: 'Primarily by flash point and composition, taken from the safety data sheet. Two products with similar commercial descriptions can classify differently. The SDS is the document that governs.',
      },
    ],
    relatedPaths: ['/permits/chemicals-and-hazardous-substances', '/guides/dangerous-goods-into-singapore'],
  },

  // --- Security & media ----------------------------------------------------
  {
    slug: 'arms-replicas-and-airsoft',
    name: 'arms, replicas, and airsoft items',
    titleName: 'Arms, Replicas & Airsoft',
    group: 'Security & media',
    verdict: 'Heavily controlled — including realistic replicas, airsoft, and items that merely look like weapons.',
    authority: 'Singapore Police Force, Arms and Explosives Branch',
    authorityUrl: 'https://www.police.gov.sg',
    requirementType: 'Licence or permit; many items prohibited to private individuals',
    intro:
      'Singapore\'s arms controls extend well beyond functioning firearms. Replicas, airsoft guns, certain knives, batons, stun devices, and items designed to resemble weapons are all controlled, and many are simply not available to private individuals. This category catches collectors, film production companies, and airsoft enthusiasts who are used to far more permissive regimes elsewhere.',
    requirements: [
      'A licence or permit from the Arms and Explosives Branch, where import is possible at all.',
      'Detailed specification of the item, including whether it is functional, deactivated, or a replica.',
      'For film and theatrical use, specific arrangements made well in advance.',
      'Secure storage and handling arrangements.',
      'Compliance with restrictions that may prohibit private possession entirely.',
    ],
    pitfalls: [
      'Replicas and toys that realistically resemble firearms are controlled — appearance matters, not function.',
      'Airsoft and BB guns are controlled and generally not available to private individuals.',
      'Certain knives, batons, knuckledusters, and self-defence devices are prohibited.',
      'Deactivated firearms are still controlled; deactivation elsewhere does not remove Singapore controls.',
      'Film and theatrical props need arrangements made months ahead, not weeks.',
    ],
    faqs: [
      {
        q: 'Can I import an airsoft gun?',
        a: 'Airsoft and similar items are controlled and are generally not permitted to private individuals. This differs sharply from many other countries where airsoft is a mainstream hobby. Do not assume a hobby item is outside the framework.',
      },
      {
        q: 'What about a deactivated collector\'s piece?',
        a: 'Deactivation carried out under another country\'s standards does not remove the item from Singapore\'s controls. Any import would need to go through the Arms and Explosives Branch, and permission is not assured.',
      },
      {
        q: 'We need prop weapons for a film shoot. What is the process?',
        a: 'Specific arrangements exist for film and theatrical use, but they take considerable lead time and involve secure handling and supervision requirements. Start months before the shoot, and expect the arrangements to shape the production schedule rather than fitting around it.',
      },
    ],
    relatedPaths: ['/permits/prohibited-goods-singapore', '/cargo/broadcast-and-camera-equipment'],
  },
  {
    slug: 'films-and-publications',
    name: 'films, publications, and media',
    titleName: 'Films, Publications & Media',
    group: 'Security & media',
    verdict: 'Films generally require classification; publications and media are subject to content controls.',
    authority: 'Infocomm Media Development Authority (IMDA)',
    authorityUrl: 'https://www.imda.gov.sg',
    requirementType: 'Classification for films; content controls and prohibitions for publications',
    intro:
      'Physical media entering Singapore for distribution is subject to content regulation. Films require classification before distribution or public exhibition, and publications are subject to content controls with certain material prohibited outright. For businesses importing media commercially this is a routine process; for those importing promotional or corporate video material it is an unexpected step.',
    requirements: [
      'Classification of films intended for distribution or exhibition.',
      'Compliance with content standards for publications and other media.',
      'Submission of material for assessment where required.',
      'A permit per consignment for commercial quantities.',
      'Awareness that obscene and seditious material is prohibited outright.',
    ],
    pitfalls: [
      'Promotional and corporate video material distributed commercially can still fall within the framework.',
      'Content acceptable in the country of origin may not meet Singapore standards.',
      'Classification takes time and should be planned into a release schedule.',
      'Publications on certain topics attract particular attention.',
      'Digital distribution is regulated separately from physical media imports.',
    ],
    faqs: [
      {
        q: 'Do films need classification before import?',
        a: 'Films intended for distribution or public exhibition generally require classification. Plan it into the release timeline rather than treating it as a formality at the end.',
      },
      {
        q: 'What about corporate or promotional video content?',
        a: 'Material distributed commercially can fall within the framework depending on how it is used. If you are importing physical media for distribution, check the position rather than assuming business content is outside it.',
      },
      {
        q: 'Are books and magazines controlled?',
        a: 'Publications are subject to content controls, with certain categories of material prohibited. Most ordinary commercial publishing is unproblematic, but content that would be contentious under Singapore standards should be checked before importing quantities.',
      },
    ],
    relatedPaths: ['/permits/prohibited-goods-singapore'],
  },
  {
    slug: 'cites-wildlife-products',
    name: 'CITES-listed wildlife products',
    titleName: 'CITES & Wildlife Products',
    group: 'Security & media',
    verdict: 'Yes — CITES permits are required, and the rules apply to finished goods containing listed material.',
    authority: 'National Parks Board (NParks)',
    authorityUrl: 'https://www.nparks.gov.sg',
    requirementType: 'CITES import permit, matched by an export permit from the origin country',
    intro:
      'CITES controls international trade in endangered species, and its reach into ordinary commerce surprises people constantly. It applies not only to live animals and plants but to finished products containing listed material — a guitar with a rosewood fingerboard, an antique with ivory inlay, a traditional medicine with a derived ingredient, a handbag with exotic leather. The item\'s age, artistic value, or personal significance does not exempt it.',
    requirements: [
      'A CITES import permit from NParks, obtained before arrival.',
      'A matching CITES export permit from the country of origin, obtained before departure.',
      'Accurate identification of the species involved.',
      'Documentation of provenance for antique and pre-Convention items.',
      'For some species, import may not be permitted at all.',
    ],
    pitfalls: [
      'Finished goods are in scope — this is the single most common surprise.',
      'Both an export permit at origin and an import permit here are needed, and they must match.',
      'Antique exemptions exist in limited forms but require documentary proof, not assertion.',
      'Musical instruments, furniture, traditional medicines, and fashion items are frequent unexpected cases.',
      'Permits cannot generally be obtained after the goods have moved.',
    ],
    faqs: [
      {
        q: 'Does CITES apply to my guitar or antique furniture?',
        a: 'It can. Certain rosewoods, ivory, tortoiseshell, and other listed materials appear in instruments and antiques regularly, and the controls apply to the material regardless of the item\'s age or purpose. Identify the materials before shipping.',
      },
      {
        q: 'The item is an antique. Is it exempt?',
        a: 'There are limited provisions for antique and pre-Convention specimens, but they require documentary evidence of age and provenance. An assertion that something is old is not sufficient, and the burden of proof sits with the importer.',
      },
      {
        q: 'Can I get a permit after the item arrives?',
        a: 'Generally no. CITES requires matching permits from both the exporting and importing countries, and the export permit must be issued before the goods leave. Items arriving without correct documentation may be seized.',
      },
    ],
    relatedPaths: ['/cargo/musical-instruments', '/cargo/art-and-sculptures', '/permits/plants-and-seeds'],
  },
  {
    slug: 'toys-and-consumer-products',
    name: 'toys and consumer products',
    titleName: 'Toys & Consumer Products',
    group: 'Technology & equipment',
    verdict: 'Safety requirements apply, and specific electrical and gas products need registration before sale.',
    authority: 'Enterprise Singapore, Consumer Product Safety Office',
    authorityUrl: 'https://www.enterprisesg.gov.sg',
    requirementType: 'General safety obligation; registration required for specified controlled goods',
    intro:
      'Singapore takes a two-tier approach to consumer product safety. A general safety requirement applies to consumer goods broadly, placing an obligation on suppliers to ensure products are safe. Separately, a specified list of higher-risk electrical and gas products must be registered before they can be sold. Toys sit in the first tier; a kettle or a power adaptor sits in the second.',
    requirements: [
      'Compliance with the general safety requirement for consumer goods.',
      'Registration of controlled goods — specified electrical and gas appliances — before supply.',
      'Testing to applicable safety standards, with reports from recognised laboratories.',
      'A registered supplier for controlled goods, based in Singapore.',
      'Safety mark labelling on registered controlled goods.',
    ],
    pitfalls: [
      'The controlled goods list is specific — check whether your product is on it rather than reasoning by category.',
      'Power adaptors, chargers, and plug-in products frequently fall within the registered categories.',
      'Singapore uses the Type G plug and 230V/50Hz supply; products for other markets need appropriate versions.',
      'Toys aimed at young children attract particular attention on small parts and chemical safety.',
      'Registration requires a Singapore-based registered supplier, which overseas sellers cannot be.',
    ],
    faqs: [
      {
        q: 'Do toys need approval before import?',
        a: 'Toys generally fall under the general consumer goods safety requirement rather than the registration scheme, meaning the supplier is responsible for ensuring safety and may be asked to demonstrate it. Specific electrical products are separately registered.',
      },
      {
        q: 'What is a controlled good in this context?',
        a: 'A defined list of higher-risk electrical and gas products that must be registered with a safety mark before sale. Confirm whether your product is on the current list — this is a specific list, not a general category.',
      },
      {
        q: 'Can I sell products with foreign plugs?',
        a: 'Singapore uses the Type G plug and a 230V/50Hz supply. Products supplied with incompatible plugs are a practical and often a compliance problem. Arrange the correct version with your supplier rather than planning to adapt them here.',
      },
    ],
    relatedPaths: ['/permits/telecom-and-radio-equipment', '/cargo/gym-and-fitness-equipment'],
  },
];

export function permitToSpoke(p: PermitTopic): SpokeBase {
  const facts: Fact[] = [
    { label: 'Short answer', value: p.verdict },
    { label: 'Competent Authority', value: p.authority },
    { label: 'Type of requirement', value: p.requirementType },
  ];

  const sections: Section[] = [
    {
      heading: `Importing ${p.name} into Singapore`,
      body: p.intro,
    },
    {
      heading: 'What is typically involved',
      body: `Requirements depend on the specific product, so treat this as the shape of the process rather than a checklist for your particular case. ${p.authority} is the authority on the detail.`,
      bullets: p.requirements,
    },
    {
      heading: 'What catches importers out',
      body: 'These are the recurring surprises in this category — the points where an assumption carried over from another market causes a problem here.',
      bullets: p.pitfalls,
    },
  ];

  return {
    slug: p.slug,
    label: p.titleName,
    metaTitle: fitTitle(
      `Do You Need a Permit to Import ${p.titleName} Into Singapore?`,
      `${p.titleName}: Singapore Import Permits`,
    ),
    metaDescription: `${p.verdict} Which authority regulates ${p.name} in Singapore, what is typically required, and the mistakes that hold shipments up.`,
    h1: `Importing ${p.name} into Singapore: what is required?`,
    lede: p.verdict,
    summary: p.verdict,
    facts,
    sections,
    faqs: p.faqs,
    group: p.group,
    relatedServices: ['customs-support-singapore', 'tradenet-permit-help-singapore'],
    relatedPaths: p.relatedPaths ?? ['/guides/controlled-goods-and-competent-authorities'],
  };
}

export const permitSpokes: SpokeBase[] = permitTopics.map(permitToSpoke);

export const permitGroups = [
  'Prohibited',
  'Food & agriculture',
  'Health & personal',
  'Technology & equipment',
  'Environment & safety',
  'Security & media',
] as const;

export function getPermitTopic(slug: string): PermitTopic | undefined {
  return permitTopics.find((p) => p.slug === slug);
}
