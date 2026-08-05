// Origin-country cluster → /shipping-from/<slug>
//
// Transit ranges are indicative port-to-port figures for planning conversations,
// not quotations — the copy says so on every page. FTA names are the actual
// agreements Singapore is party to that cover goods from each origin; whether a
// specific shipment qualifies for preferential tariff treatment depends on
// origin rules and documentation, which the pages state rather than assume.

import type { Faq, Fact, Section, SpokeBase } from './types';
import { fitTitle, fitDescription } from '../utils/meta';

export type CountryOrigin = {
  slug: string;
  /** Country name as used in a sentence, e.g. "the United States". */
  name: string;
  /** Bare name for titles, e.g. "United States". */
  titleName: string;
  region: 'Southeast Asia' | 'North Asia' | 'South Asia' | 'Oceania' | 'North America' | 'Europe' | 'Middle East';
  /** Trade agreements covering goods of this origin entering Singapore. */
  agreements: string[];
  seaPorts: string[];
  airHubs: string[];
  seaTransit: string;
  airTransit: string;
  /** What we most often see moving on this lane. */
  commonCargo: string[];
  /** 2–3 sentences specific to this lane. */
  intro: string;
  /** Lane-specific things that catch importers out. */
  watchOuts: string[];
  faqs: Faq[];
  /** Cargo-cluster slugs that pair naturally with this origin. */
  cargoLinks: string[];
};

export const countries: CountryOrigin[] = [
  // --- Southeast Asia ------------------------------------------------------
  {
    slug: 'malaysia-to-singapore',
    name: 'Malaysia',
    titleName: 'Malaysia',
    region: 'Southeast Asia',
    agreements: ['ATIGA (ASEAN Trade in Goods Agreement)', 'RCEP'],
    seaPorts: ['Port Klang', 'Tanjung Pelepas (PTP)', 'Penang', 'Pasir Gudang'],
    airHubs: ['Kuala Lumpur (KUL)', 'Penang (PEN)'],
    seaTransit: '1–3 days port to port',
    airTransit: 'Same day to 1 day',
    commonCargo: ['Machinery and parts', 'Furniture and fit-out materials', 'Electronics', 'Steel and fabricated metal'],
    intro:
      'Malaysia is the one origin where road freight usually beats both sea and air. Most consignments cross at the Woodlands Causeway or the Tuas Second Link on a truck, which means the shipment can be at a Singapore address the same day it leaves Johor — but it also means the paperwork has to be right before the vehicle joins the queue, because there is no port free time to fix it in.',
    watchOuts: [
      'Cross-border trucking gives you almost no buffer: a permit or invoice problem stops the vehicle at the checkpoint, not in a yard where it can be sorted out quietly.',
      'Short transit tempts people to skip the ASEAN Form D / ATIGA origin documentation. If the goods are dutiable or you want preferential treatment, that paperwork has to travel with the shipment.',
      'Goods trucked from Peninsular Malaysia still need a Singapore import permit — proximity does not make it an informal movement.',
      'Oversized or over-height loads need route and escort planning on both sides of the border, and the constraints are not symmetrical.',
    ],
    faqs: [
      {
        q: 'Is it faster to truck goods from Malaysia than to ship them?',
        a: 'Almost always, yes. A truck from Johor or Klang can deliver to a Singapore address within a day, where a sea movement adds port handling at both ends. The trade-off is that road freight leaves no slack for documentation problems — everything must be in order before the vehicle reaches the checkpoint.',
      },
      {
        q: 'Do I still need an import permit for goods coming by road from Malaysia?',
        a: 'Yes. Goods entering Singapore by land are subject to the same import declaration requirements as goods arriving by sea or air. The permit is obtained through TradeNet before the goods arrive, regardless of the mode.',
      },
      {
        q: 'Can I move oversized machinery from Malaysia by road?',
        a: 'Often, but it needs planning. Over-height, over-width, or over-weight loads have route restrictions and may need permits and escorts on both sides of the border. Send us the dimensions and weight early — this is the kind of job where a week of lead time changes the whole approach.',
      },
    ],
    cargoLinks: ['industrial-machinery', 'furniture-and-fit-out', 'commercial-kitchen-equipment'],
  },
  {
    slug: 'indonesia-to-singapore',
    name: 'Indonesia',
    titleName: 'Indonesia',
    region: 'Southeast Asia',
    agreements: ['ATIGA (ASEAN Trade in Goods Agreement)', 'RCEP'],
    seaPorts: ['Tanjung Priok (Jakarta)', 'Tanjung Perak (Surabaya)', 'Batam', 'Belawan (Medan)'],
    airHubs: ['Jakarta (CGK)', 'Surabaya (SUB)'],
    seaTransit: '2–5 days port to port',
    airTransit: '1–2 days',
    commonCargo: ['Furniture and timber products', 'Handicraft and decorative goods', 'Machinery parts', 'Textiles'],
    intro:
      'Indonesia is a short, high-frequency lane with a wide range of shipper sophistication at the other end. Batam and Bintan movements in particular can be very quick, but the documentation quality varies far more than the transit time does, and that is usually what determines whether a shipment clears smoothly.',
    watchOuts: [
      'Timber, rattan, and other plant-based products may need phytosanitary documentation and ISPM 15-compliant packing — a common cause of held consignments on this lane.',
      'Invoice descriptions from smaller suppliers are often too generic for a Singapore declaration. "Handicraft" is not a usable goods description.',
      'Batam and Bintan shipments can arrive faster than the paperwork is prepared. Confirm the permit is in hand before the vessel sails.',
      'Preferential treatment under ATIGA needs a valid Form D or e-Form D; retrofitting it after arrival is not straightforward.',
    ],
    faqs: [
      {
        q: 'Why do Indonesian shipments get held more often than the transit time suggests?',
        a: 'In our experience it is rarely the transport and almost always the description of goods or the supporting documents. Suppliers who mainly serve the domestic market may not produce invoices at the level of detail a Singapore declaration needs. Reviewing the commercial invoice before shipment prevents most of it.',
      },
      {
        q: 'Do I need special documents for furniture or timber from Indonesia?',
        a: 'Plant and timber products can attract phytosanitary requirements, and wooden packing material generally needs to meet ISPM 15 treatment and marking standards. Tell us the material composition in the enquiry so we can flag what applies before the goods are packed.',
      },
      {
        q: 'How fast can cargo move from Batam to Singapore?',
        a: 'The physical movement can be under a day. The realistic constraint is documentation and permit timing rather than sailing schedules, so we plan backwards from when the declaration can be ready.',
      },
    ],
    cargoLinks: ['furniture-and-fit-out', 'art-and-sculptures', 'marble-and-stone'],
  },
  {
    slug: 'thailand-to-singapore',
    name: 'Thailand',
    titleName: 'Thailand',
    region: 'Southeast Asia',
    agreements: ['ATIGA (ASEAN Trade in Goods Agreement)', 'RCEP'],
    seaPorts: ['Laem Chabang', 'Bangkok (Klong Toey)'],
    airHubs: ['Bangkok (BKK)', 'Bangkok (DMK)'],
    seaTransit: '3–6 days port to port',
    airTransit: '1–2 days',
    commonCargo: ['Food and beverage products', 'Auto parts', 'Rubber and plastic goods', 'Commercial kitchen equipment'],
    intro:
      'Thailand is a strong lane for food, F&B equipment, and automotive components, and each of those brings its own agency involvement in Singapore. The freight side is straightforward and well served; the part that needs attention is whether your goods fall under a Competent Authority requirement before the permit can be applied for.',
    watchOuts: [
      'Food and beverage products generally require the importer to be licensed with the Singapore Food Agency, and that licence has to exist before the shipment moves — not after it lands.',
      'Auto parts and vehicle-related goods can attract LTA or road-vehicle requirements depending on what they are.',
      'Rubber and agricultural products can carry phytosanitary conditions.',
      'Laem Chabang is well connected; Bangkok port sailings are fewer and can add days that are easy to miss when planning to a deadline.',
    ],
    faqs: [
      {
        q: 'I want to import Thai food products for retail. What comes first?',
        a: 'The importer licence and any product-level requirements come first, before you commit to a shipment. Food imports into Singapore are regulated by the Singapore Food Agency, and the requirements differ by product category. Start the enquiry with the specific products listed and we will map out the sequence.',
      },
      {
        q: 'Is air freight worth it from Bangkok?',
        a: 'For low-volume, high-value, or time-critical goods, often yes — the air lane is short and frequent. For anything bulky the economics usually favour sea, since the transit saving is only a few days.',
      },
      {
        q: 'Do Thai goods qualify for reduced duty in Singapore?',
        a: 'Singapore applies customs duty to only four categories of goods, so for most products the question is academic. Where duty does apply, ATIGA preferential treatment requires valid origin documentation obtained in Thailand before shipment.',
      },
    ],
    cargoLinks: ['commercial-kitchen-equipment', 'industrial-machinery', 'vehicles-and-parts'],
  },
  {
    slug: 'vietnam-to-singapore',
    name: 'Vietnam',
    titleName: 'Vietnam',
    region: 'Southeast Asia',
    agreements: ['ATIGA (ASEAN Trade in Goods Agreement)', 'RCEP', 'CPTPP'],
    seaPorts: ['Cat Lai (Ho Chi Minh City)', 'Cai Mep', 'Hai Phong', 'Da Nang'],
    airHubs: ['Ho Chi Minh City (SGN)', 'Hanoi (HAN)'],
    seaTransit: '3–7 days port to port',
    airTransit: '1–2 days',
    commonCargo: ['Electronics and components', 'Furniture', 'Textiles and garments', 'Machinery'],
    intro:
      'Vietnam has become one of the busiest short-haul lanes into Singapore as manufacturing shifted south, and the volume growth has outpaced the documentation habits of some newer exporters. Northern (Hai Phong) and southern (Ho Chi Minh City) origins behave quite differently on schedule reliability, so which end your supplier sits at matters more than the headline transit range.',
    watchOuts: [
      'Hai Phong sailings are less frequent than Cat Lai; a northern origin can add several days that do not show up in a generic transit estimate.',
      'Electronics with wireless functionality may fall under IMDA equipment requirements in Singapore regardless of how routine they seem.',
      'Lithium batteries built into products change the air freight picture entirely and must be declared honestly at booking.',
      'Factory-direct suppliers often issue invoices without HS codes or with the wrong Incoterm stated. Both create avoidable delay.',
    ],
    faqs: [
      {
        q: 'Why is my Hai Phong shipment slower than quoted?',
        a: 'Northern Vietnam has fewer direct services to Singapore than Ho Chi Minh City, so cargo often transships. If your supplier is in the north and your date is fixed, plan on the upper end of the transit range or consider air for the critical portion.',
      },
      {
        q: 'Do electronics from Vietnam need approval before import?',
        a: 'It depends on the device. Equipment with radio or telecommunication functionality can fall under IMDA requirements. Send us the product specification sheet in the enquiry and we will tell you what to check before the goods ship.',
      },
      {
        q: 'Can I air freight products that contain batteries?',
        a: 'Often yes, but lithium batteries are regulated as dangerous goods and the packing, labelling, and documentation requirements are strict. The battery type, watt-hour rating, and whether it is installed or shipped loose all change what is possible. Flag it at enquiry stage, not at the airport.',
      },
    ],
    cargoLinks: ['servers-and-it-hardware', 'furniture-and-fit-out', 'lithium-batteries'],
  },
  {
    slug: 'philippines-to-singapore',
    name: 'the Philippines',
    titleName: 'Philippines',
    region: 'Southeast Asia',
    agreements: ['ATIGA (ASEAN Trade in Goods Agreement)', 'RCEP'],
    seaPorts: ['Manila (North and South Harbour)', 'Subic Bay', 'Cebu'],
    airHubs: ['Manila (MNL)', 'Cebu (CEB)'],
    seaTransit: '4–8 days port to port',
    airTransit: '1–2 days',
    commonCargo: ['Electronics and semiconductor parts', 'Food products', 'Furniture and handicraft', 'Machinery'],
    intro:
      'The Philippines lane is short in distance but variable in practice, mainly because origin-side congestion and weather disruption affect Manila more than most regional ports. For anything schedule-critical, we plan around a wider window than the nominal transit suggests and look at whether Cebu or Subic is a cleaner origin.',
    watchOuts: [
      'Manila port congestion and typhoon season disruption are real scheduling factors between roughly June and November.',
      'Semiconductor and electronics components often move air freight; confirm whether ESD-safe packing is being used at origin rather than assuming.',
      'Handicraft and shell or coral-derived decorative goods can attract wildlife or CITES considerations in Singapore.',
      'Consolidated LCL from Manila can sit waiting for a full container; ask what the consolidation cut-off actually is.',
    ],
    faqs: [
      {
        q: 'How much should I allow for weather disruption on this lane?',
        a: 'During typhoon season, a week of buffer on a sea shipment is prudent, and more if the cargo is time-bound to an event or install date. We would rather tell you that upfront than explain it after the fact.',
      },
      {
        q: 'Are decorative goods made from shell or coral a problem?',
        a: 'They can be. Some marine and wildlife-derived materials are controlled under CITES and require permits from the relevant Singapore authority. Describe the material precisely in the enquiry — this is one where a generic description causes real trouble at the border.',
      },
      {
        q: 'Is LCL a good option from the Philippines?',
        a: 'It works, but ask the consolidator for the actual cut-off and sailing rather than a nominal transit time. Waiting for a box to fill is a common and invisible source of delay on lower-volume lanes.',
      },
    ],
    cargoLinks: ['servers-and-it-hardware', 'art-and-sculptures', 'furniture-and-fit-out'],
  },

  // --- North Asia ----------------------------------------------------------
  {
    slug: 'china-to-singapore',
    name: 'China',
    titleName: 'China',
    region: 'North Asia',
    agreements: ['China–Singapore FTA (CSFTA)', 'ASEAN–China FTA', 'RCEP'],
    seaPorts: ['Shanghai', 'Ningbo-Zhoushan', 'Shenzhen (Yantian, Shekou)', 'Guangzhou (Nansha)', 'Qingdao', 'Xiamen'],
    airHubs: ['Shanghai (PVG)', 'Guangzhou (CAN)', 'Shenzhen (SZX)', 'Beijing (PEK)'],
    seaTransit: '5–12 days port to port, south to north',
    airTransit: '2–3 days',
    commonCargo: ['Machinery and industrial equipment', 'Electronics and IT hardware', 'Furniture and fit-out', 'Display and exhibition materials'],
    intro:
      'China is the highest-volume origin into Singapore and the one where the gap between a good shipment and a problem shipment is widest. Freight capacity is rarely the issue; what causes trouble is supplier-prepared documentation, goods descriptions written for a domestic audience, and equipment that turns out to have wireless or battery components nobody mentioned. South China (Shenzhen, Guangzhou) runs roughly half the transit of North China (Qingdao, Tianjin), so "from China" is not one lane.',
    watchOuts: [
      'Treat the supplier\'s commercial invoice as a draft. Descriptions like "machine parts" or "gift items" are the single most common cause of avoidable delay on this lane.',
      'Chinese New Year shuts factories and compresses schedules for weeks either side. Anything landing in Q1 needs to be planned around it.',
      'Machinery and electronics frequently include lithium batteries, refrigerant, or wireless modules that change the compliance and air-freight picture.',
      'CSFTA or RCEP preferential treatment requires a valid certificate of origin issued at origin. It cannot be produced retrospectively as a matter of convenience.',
      'Secondhand and refurbished machinery has different scrutiny from new equipment — say which it is upfront.',
    ],
    faqs: [
      {
        q: 'How long does shipping from China to Singapore actually take?',
        a: 'Port to port, roughly 5–8 days from South China and 8–12 days from North China, plus origin handling and Singapore-side clearance and delivery. Air freight is typically 2–3 days door to door. Treat these as planning figures — the origin port, sailing frequency, and whether the cargo transships all move them.',
      },
      {
        q: 'My supplier says they will handle everything. Is that enough?',
        a: 'A supplier can arrange transport, but the import declaration is made in Singapore on the importer\'s behalf and its accuracy is your exposure, not theirs. We routinely find that supplier-prepared invoices need reworking before they can support a clean declaration.',
      },
      {
        q: 'Does the China–Singapore FTA reduce what I pay?',
        a: 'Singapore levies customs duty on only four categories of goods, so for most imports there is no duty to reduce and GST applies regardless. Where duty does apply, preferential treatment depends on the goods meeting origin rules and on a valid certificate of origin.',
      },
      {
        q: 'How do I plan around Chinese New Year?',
        a: 'Assume factory output stops for one to two weeks and that capacity is tight for two to three weeks either side, with rates rising into the shutdown. If you have a fixed date in Q1, work backwards from it and book earlier than feels necessary.',
      },
    ],
    cargoLinks: ['industrial-machinery', 'servers-and-it-hardware', 'exhibition-booth-materials', 'lithium-batteries'],
  },
  {
    slug: 'hong-kong-to-singapore',
    name: 'Hong Kong',
    titleName: 'Hong Kong',
    region: 'North Asia',
    agreements: ['ASEAN–Hong Kong, China FTA (AHKFTA)'],
    seaPorts: ['Hong Kong (Kwai Tsing)'],
    airHubs: ['Hong Kong (HKG)'],
    seaTransit: '3–6 days port to port',
    airTransit: '1–2 days',
    commonCargo: ['Electronics', 'Art and collectibles', 'Watches and high-value goods', 'Trade samples'],
    intro:
      'Hong Kong is a short, dense, extremely well-connected lane, and it is disproportionately used for high-value goods — art, watches, collectibles, and electronics samples. That value profile, rather than the distance, is what shapes how these shipments should be handled: insurance, chain of custody, and accurate declared value matter far more here than transit optimisation.',
    watchOuts: [
      'High declared values attract scrutiny. Undervaluing an invoice to reduce GST is a false declaration, not a saving.',
      'Art and collectibles benefit from proper condition reporting and crating before they move, not after a problem appears.',
      'Goods that merely transit Hong Kong from mainland China have Chinese origin for FTA purposes, not Hong Kong origin.',
      'Air freight is so frequent that people under-plan the Singapore-side delivery, which is often the actual constraint for high-security items.',
    ],
    faqs: [
      {
        q: 'My goods were made in China but shipped from Hong Kong. Which origin applies?',
        a: 'Origin follows where the goods were produced, not where they were last loaded. Goods manufactured in mainland China keep Chinese origin even when routed through Hong Kong, which affects which agreement and which certificate of origin is relevant.',
      },
      {
        q: 'How should high-value items be handled on this lane?',
        a: 'Value drives the plan. That usually means proper crating, condition reporting before departure, appropriate insurance cover arranged in advance, and a delivery method suited to the item rather than a standard courier handover.',
      },
      {
        q: 'Is GST payable on artwork imported into Singapore?',
        a: 'Import GST generally applies to goods imported into Singapore, including artwork, calculated on the CIF value plus applicable duties and charges. There are specific schemes and arrangements that can apply in particular circumstances — tell us the context and we will help you identify what to check.',
      },
    ],
    cargoLinks: ['art-and-sculptures', 'servers-and-it-hardware', 'prototypes-and-samples'],
  },
  {
    slug: 'japan-to-singapore',
    name: 'Japan',
    titleName: 'Japan',
    region: 'North Asia',
    agreements: ['Japan–Singapore Economic Partnership Agreement (JSEPA)', 'CPTPP', 'RCEP'],
    seaPorts: ['Yokohama', 'Tokyo', 'Kobe', 'Osaka', 'Nagoya'],
    airHubs: ['Tokyo (NRT, HND)', 'Osaka (KIX)'],
    seaTransit: '8–14 days port to port',
    airTransit: '2–3 days',
    commonCargo: ['Precision machinery and machine tools', 'Laboratory and medical equipment', 'Food products', 'Automotive parts'],
    intro:
      'Japan is the origin where documentation and packing quality are usually excellent and the complications sit on the Singapore side instead — precision machinery, lab instruments, and medical devices are common, and those carry agency requirements here that have nothing to do with how well the shipment was prepared in Japan. It is also a lane where suppliers often specify handling conditions that need to be honoured through the whole chain, not just at origin.',
    watchOuts: [
      'Manufacturer handling specifications for precision equipment — shock limits, orientation, humidity — need to be carried through to the Singapore delivery leg, which is where they are usually dropped.',
      'Medical devices and health products fall under HSA requirements in Singapore regardless of Japanese approvals.',
      'Golden Week (late April to early May) and the New Year period compress schedules significantly.',
      'JSEPA and CPTPP both cover this lane; which is advantageous depends on the goods and the origin rules, and it is worth checking rather than defaulting.',
    ],
    faqs: [
      {
        q: 'How do I make sure handling requirements are respected end to end?',
        a: 'Give us the manufacturer\'s handling specification at enquiry stage, not on the day of delivery. Shock indicators, tilt indicators, orientation markings, and a delivery method matched to the equipment all need to be decided before the shipment moves.',
      },
      {
        q: 'Does Japanese regulatory approval help in Singapore?',
        a: 'Not directly. Singapore\'s Health Sciences Authority applies its own requirements to health products and medical devices. Japanese approval is useful supporting evidence in a submission but does not substitute for it.',
      },
      {
        q: 'Which agreement should I use for Japanese goods?',
        a: 'JSEPA, CPTPP, and RCEP all cover Japan–Singapore trade. Since Singapore applies duty to only four categories of goods, the practical impact is limited for most imports. Where it matters, the choice depends on the origin rules each agreement applies to your product.',
      },
    ],
    cargoLinks: ['laboratory-equipment', 'medical-devices', 'cnc-and-machine-tools'],
  },
  {
    slug: 'south-korea-to-singapore',
    name: 'South Korea',
    titleName: 'South Korea',
    region: 'North Asia',
    agreements: ['Korea–Singapore FTA (KSFTA)', 'RCEP'],
    seaPorts: ['Busan', 'Incheon', 'Gwangyang'],
    airHubs: ['Seoul (ICN)', 'Busan (PUS)'],
    seaTransit: '6–11 days port to port',
    airTransit: '2–3 days',
    commonCargo: ['Semiconductor and display equipment', 'Cosmetics and personal care', 'Machinery', 'Electronics'],
    intro:
      'Korea splits neatly into two very different kinds of shipment: heavy semiconductor and display manufacturing equipment, which is a rigging and cleanliness problem, and cosmetics and consumer goods, which is a regulatory problem. Busan is one of the best-connected ports in Asia, so freight availability is rarely the constraint on either.',
    watchOuts: [
      'Cosmetics imported into Singapore are subject to HSA requirements including product notification before supply — this catches first-time importers regularly.',
      'Semiconductor and cleanroom equipment often needs controlled unpacking and cannot simply be delivered to a loading bay.',
      'Equipment crates from Korean manufacturers are frequently heavier and larger than the specification sheet suggests. Confirm actual crated dimensions.',
      'Air cargo out of ICN is excellent, which makes it tempting to defer decisions — but oversized air cargo still needs advance booking.',
    ],
    faqs: [
      {
        q: 'What do I need to import Korean cosmetics into Singapore?',
        a: 'Cosmetic products are regulated by the Health Sciences Authority and generally require notification before they are supplied in Singapore, with the responsible party based here. The freight is the easy part; start with the regulatory sequence and we will help you map it.',
      },
      {
        q: 'Can you handle cleanroom or semiconductor equipment?',
        a: 'Coordination for equipment needing controlled handling and staged unpacking is squarely what we do. Tell us the cleanliness requirement and the receiving facility\'s constraints in the enquiry — those two facts determine most of the plan.',
      },
      {
        q: 'Is Busan or Incheon better for my shipment?',
        a: 'Busan has far more direct services to Singapore and is usually the better sea option. Incheon matters mostly for air freight and for shippers located near Seoul where inland trucking cost outweighs the sailing advantage.',
      },
    ],
    cargoLinks: ['semiconductor-equipment', 'cosmetics-and-personal-care', 'industrial-machinery'],
  },
  {
    slug: 'taiwan-to-singapore',
    name: 'Taiwan',
    titleName: 'Taiwan',
    region: 'North Asia',
    agreements: ['Singapore–Taiwan Economic Partnership Agreement (ASTEP)'],
    seaPorts: ['Kaohsiung', 'Keelung', 'Taichung'],
    airHubs: ['Taipei (TPE)'],
    seaTransit: '4–8 days port to port',
    airTransit: '1–2 days',
    commonCargo: ['Machine tools and CNC equipment', 'Semiconductor equipment', 'Bicycles and components', 'Electronics'],
    intro:
      'Taiwan is the machine-tool lane. A large share of what we see is CNC equipment, injection moulding machines, and precision manufacturing gear — heavy, high-value, and needing a receiving site that can actually take it. The freight is short and reliable; the planning effort belongs at the Singapore delivery end, particularly for workshops and industrial units without dock access.',
    watchOuts: [
      'Machine tools are dense rather than bulky: a compact crate can exceed the floor loading or lifting capacity available at the destination.',
      'Confirm whether the machine ships with coolant, oil, or hydraulic fluid in it. Residual fluids change handling and sometimes classification.',
      'Secondhand machine tools need to be described as such — condition affects both valuation and scrutiny.',
      'Kaohsiung has the best sailing frequency; Taichung and Keelung can add transshipment time.',
    ],
    faqs: [
      {
        q: 'How do I get a CNC machine into a workshop without a loading dock?',
        a: 'That is a planning question that should be answered before the machine ships. It usually comes down to crane or forklift access, floor loading capacity, door and ceiling clearances, and whether the machine can be delivered on skates. Send us photos of the access route in the enquiry.',
      },
      {
        q: 'Does the machine need to be drained before shipping?',
        a: 'Ask the supplier explicitly. Machines shipped with oils or coolant in place can raise handling and, in some cases, dangerous-goods considerations for air freight. It is a simple question that avoids a complicated problem.',
      },
      {
        q: 'Is secondhand machinery harder to import?',
        a: 'Not inherently, but it needs accurate description and realistic valuation, and some categories of used equipment attract additional requirements. Declare its condition honestly from the start — trying to present used equipment as new creates far larger problems than it solves.',
      },
    ],
    cargoLinks: ['cnc-and-machine-tools', 'semiconductor-equipment', 'industrial-machinery'],
  },

  // --- South Asia ----------------------------------------------------------
  {
    slug: 'india-to-singapore',
    name: 'India',
    titleName: 'India',
    region: 'South Asia',
    agreements: ['India–Singapore CECA', 'ASEAN–India Trade in Goods Agreement'],
    seaPorts: ['Nhava Sheva (JNPT)', 'Mundra', 'Chennai', 'Kolkata', 'Cochin'],
    airHubs: ['Mumbai (BOM)', 'Delhi (DEL)', 'Chennai (MAA)'],
    seaTransit: '5–12 days port to port, east to west coast',
    airTransit: '2–3 days',
    commonCargo: ['Machinery and engineering goods', 'Textiles and garments', 'Marble, granite and stone', 'Handicraft and decorative items'],
    intro:
      'India is a lane where the origin port makes a large difference — Chennai and the east coast are several days closer to Singapore than Nhava Sheva or Mundra on the west. It is also a documentation-heavy origin, with export-side formalities that can hold cargo before it ever reaches a vessel, so the realistic timeline starts well before the sailing date.',
    watchOuts: [
      'East coast (Chennai, Kolkata) versus west coast (Nhava Sheva, Mundra) can differ by five days or more. Confirm which port your supplier actually uses.',
      'Origin-side export clearance in India can add time that is invisible in a port-to-port transit quote.',
      'Stone and marble consignments are heavy enough that container weight limits, not volume, become the binding constraint.',
      'Handicraft and religious or decorative items often need far more specific descriptions than suppliers provide.',
      'Preferential treatment under CECA or AIFTA needs the correct certificate of origin, and the two agreements have different rules.',
    ],
    faqs: [
      {
        q: 'Why is my Mumbai shipment so much slower than a Chennai one?',
        a: 'Geography. Chennai and the east coast sit on the natural routing to Singapore, while Nhava Sheva and Mundra are on the other side of the subcontinent. If your supplier can ship from an east coast port, it is often several days faster for no extra cost.',
      },
      {
        q: 'How should marble or granite be shipped?',
        a: 'Weight is the constraint. Stone consignments routinely hit container payload limits well before they fill the space, and the crating and bracing quality determines whether slabs arrive intact. Give us the slab dimensions, thickness, and total tonnage and we will plan around the weight rather than the volume.',
      },
      {
        q: 'Do I need a certificate of origin from India?',
        a: 'Only if you are claiming preferential tariff treatment and the goods are dutiable in Singapore — which applies to a narrow set of categories. Where it is relevant, the certificate must be obtained in India before shipment under the correct agreement.',
      },
    ],
    cargoLinks: ['marble-and-stone', 'industrial-machinery', 'art-and-sculptures'],
  },

  // --- Oceania -------------------------------------------------------------
  {
    slug: 'australia-to-singapore',
    name: 'Australia',
    titleName: 'Australia',
    region: 'Oceania',
    agreements: ['Singapore–Australia FTA (SAFTA)', 'CPTPP', 'RCEP'],
    seaPorts: ['Melbourne', 'Sydney (Port Botany)', 'Brisbane', 'Fremantle'],
    airHubs: ['Sydney (SYD)', 'Melbourne (MEL)', 'Perth (PER)'],
    seaTransit: '12–21 days port to port',
    airTransit: '2–3 days',
    commonCargo: ['Mining and industrial equipment', 'Wine and beverages', 'Food products', 'Scientific and laboratory equipment'],
    intro:
      'Australia is a long sea lane with excellent air connectivity, which means the mode decision is usually made on value density rather than convenience. Two categories dominate what we see: heavy industrial and mining-adjacent equipment, and wine — and wine is one of the few goods that actually attracts customs duty in Singapore, so it needs a different conversation entirely.',
    watchOuts: [
      'Wine, spirits, and beer are dutiable in Singapore and require a licence to import. This is not a normal import; treat it as its own project.',
      'Sea transit of two to three weeks makes Australia a poor lane for late decisions. Air is viable but expensive for anything dense.',
      'Used mining and industrial equipment often carries soil or organic residue that creates cleaning and inspection requirements.',
      'Fremantle sailings can route very differently from east coast ports; confirm the actual service rather than assuming a national average.',
    ],
    faqs: [
      {
        q: 'Can I import Australian wine into Singapore?',
        a: 'Yes, but alcoholic beverages are one of the four dutiable categories in Singapore, require a licence to import, and are subject to both excise duty and GST. The commercial maths is quite different from an ordinary import, so work it out before committing to a consignment.',
      },
      {
        q: 'How clean does used equipment need to be?',
        a: 'Cleaner than most people expect. Equipment that has been in the field carries soil, seeds, and organic residue, which can trigger inspection and cleaning requirements. Pressure-washing before crating is cheap; a held container is not.',
      },
      {
        q: 'Is air freight from Australia realistic?',
        a: 'For instruments, samples, spares, and anything urgent, yes — the air lane is short and well served. For heavy industrial items the cost usually rules it out, and the honest answer is to plan the sea shipment earlier.',
      },
    ],
    cargoLinks: ['wine-and-spirits', 'industrial-machinery', 'laboratory-equipment'],
  },
  {
    slug: 'new-zealand-to-singapore',
    name: 'New Zealand',
    titleName: 'New Zealand',
    region: 'Oceania',
    agreements: ['ANZSCEP', 'CPTPP', 'RCEP'],
    seaPorts: ['Auckland', 'Tauranga', 'Lyttelton'],
    airHubs: ['Auckland (AKL)', 'Christchurch (CHC)'],
    seaTransit: '16–26 days port to port, often via transshipment',
    airTransit: '2–4 days',
    commonCargo: ['Food and beverage products', 'Specialised machinery', 'Wine', 'Scientific equipment'],
    intro:
      'New Zealand is the longest regular lane we handle in this region and almost always involves transshipment, which is where the schedule variability comes from. Volumes are low enough that direct services are rare, so the practical planning question is which hub the cargo routes through and how much slack that adds.',
    watchOuts: [
      'Transshipment is the norm, not the exception. A single missed connection can add a week.',
      'Low volume means LCL consolidations wait longer to fill; ask for the actual cut-off.',
      'Wine and beverages are dutiable and licensable in Singapore, same as from Australia.',
      'Food products need the Singapore importer licensed with the Singapore Food Agency before shipment.',
    ],
    faqs: [
      {
        q: 'Why does a New Zealand shipment take so long?',
        a: 'Because it almost always transships, usually through an Australian or Southeast Asian hub. The sailing time is only part of it; the connection wait is the variable. Plan on the upper end of the range for anything with a fixed date.',
      },
      {
        q: 'Is air freight a sensible fallback?',
        a: 'For high-value or urgent goods, yes. Given how long the sea lane runs, air is worth pricing more often on this route than on shorter ones — the relative time saving is far larger.',
      },
      {
        q: 'What do I need to import New Zealand food products?',
        a: 'The Singapore importer generally needs to be licensed with the Singapore Food Agency, with product-level requirements varying by category — meat and dairy are treated differently from shelf-stable goods. Start with the product list and we will map the requirements.',
      },
    ],
    cargoLinks: ['wine-and-spirits', 'laboratory-equipment', 'commercial-kitchen-equipment'],
  },

  // --- North America -------------------------------------------------------
  {
    slug: 'usa-to-singapore',
    name: 'the United States',
    titleName: 'USA',
    region: 'North America',
    agreements: ['US–Singapore FTA (USSFTA)'],
    seaPorts: ['Los Angeles / Long Beach', 'Oakland', 'Seattle–Tacoma', 'New York / New Jersey', 'Savannah', 'Houston'],
    airHubs: ['Los Angeles (LAX)', 'San Francisco (SFO)', 'Chicago (ORD)', 'New York (JFK)'],
    seaTransit: '18–28 days from the West Coast, 30–40 from the East Coast',
    airTransit: '3–5 days',
    commonCargo: ['Scientific and laboratory equipment', 'Semiconductor and precision equipment', 'Aerospace and aviation parts', 'Medical devices'],
    intro:
      'The United States is a high-value, documentation-sensitive lane. The two things that shape it are export controls on the American side — which apply to far more equipment than most importers expect — and the coast the goods leave from, since an East Coast sailing can take twice as long as a West Coast one. Air freight is common here precisely because the cargo is often expensive enough to justify it.',
    watchOuts: [
      'US export control rules (EAR and, for defence-related items, ITAR) can apply to scientific, semiconductor, encryption, and aerospace equipment. This is an origin-side requirement your supplier must resolve before shipping.',
      'West Coast versus East Coast can differ by two weeks. Confirm the actual load port, not the supplier\'s address.',
      'Medical devices and health products face HSA requirements in Singapore irrespective of FDA status.',
      'Aerospace parts usually need airworthiness documentation travelling with the shipment.',
      'High-value air shipments need security screening arrangements agreed in advance for anything unusual.',
    ],
    faqs: [
      {
        q: 'What are export controls and do they affect my shipment?',
        a: 'US regulations restrict the export of certain technologies, including some scientific instruments, semiconductor equipment, encryption products, and anything defence-related. Clearance is the exporter\'s responsibility, but it holds your shipment, so ask your supplier early whether a licence is required.',
      },
      {
        q: 'Does FDA clearance mean I can import a medical device into Singapore?',
        a: 'No. The Health Sciences Authority applies its own registration and dealer licensing requirements. FDA clearance is useful supporting material for a submission but is not a substitute for Singapore registration.',
      },
      {
        q: 'How much faster is air freight from the US?',
        a: 'Substantially — roughly 3–5 days versus 18–40 days by sea. For instruments, prototypes, and spares the cost difference is often justified. Send us the dimensions and weight and we will give you an honest comparison.',
      },
    ],
    cargoLinks: ['laboratory-equipment', 'medical-devices', 'aviation-parts', 'semiconductor-equipment'],
  },
  {
    slug: 'canada-to-singapore',
    name: 'Canada',
    titleName: 'Canada',
    region: 'North America',
    agreements: ['CPTPP'],
    seaPorts: ['Vancouver', 'Prince Rupert', 'Montreal'],
    airHubs: ['Toronto (YYZ)', 'Vancouver (YVR)'],
    seaTransit: '18–28 days from the West Coast',
    airTransit: '3–5 days',
    commonCargo: ['Scientific and laboratory equipment', 'Industrial machinery', 'Aerospace components', 'Timber and wood products'],
    intro:
      'Canada behaves much like the US West Coast lane, with the practical difference that direct sailings are fewer and inland origins add meaningful trucking time before the cargo even reaches a port. For eastern Canadian shippers, routing via a US port is sometimes faster than a Canadian one, and it is worth checking rather than assuming.',
    watchOuts: [
      'Inland origins (Toronto, Calgary) add multi-day domestic trucking before the sailing clock starts.',
      'Fewer direct services than the US West Coast means more transshipment exposure.',
      'Wood and timber products need ISPM 15-compliant packing and may attract phytosanitary requirements.',
      'Aerospace components need their airworthiness and traceability documentation with the shipment.',
    ],
    faqs: [
      {
        q: 'Should I ship from a Canadian or a US port?',
        a: 'It depends on where the goods start. For British Columbia origins, Vancouver is usually best. For Ontario and Quebec, a US East Coast or West Coast routing sometimes wins on total time. Give us the pickup postcode and we will compare properly.',
      },
      {
        q: 'Do wooden crates from Canada need treatment?',
        a: 'Wood packaging material generally needs to meet ISPM 15 treatment and marking standards. Ask your supplier to confirm the crates are stamped — untreated wood packaging is a genuine cause of held shipments.',
      },
      {
        q: 'Does CPTPP help with Canadian goods?',
        a: 'CPTPP covers the lane, but since Singapore applies customs duty to only four categories of goods, most imports have no duty to reduce. Import GST applies either way.',
      },
    ],
    cargoLinks: ['laboratory-equipment', 'industrial-machinery', 'aviation-parts'],
  },

  // --- Europe --------------------------------------------------------------
  {
    slug: 'united-kingdom-to-singapore',
    name: 'the United Kingdom',
    titleName: 'United Kingdom',
    region: 'Europe',
    agreements: ['UK–Singapore FTA (UKSFTA)', 'CPTPP'],
    seaPorts: ['Felixstowe', 'Southampton', 'London Gateway'],
    airHubs: ['London (LHR)', 'Manchester (MAN)'],
    seaTransit: '24–35 days port to port',
    airTransit: '2–4 days',
    commonCargo: ['Scientific and laboratory equipment', 'Art and antiques', 'Specialist machinery', 'Wine and spirits'],
    intro:
      'The UK is a long sea lane with a very strong air option, and the cargo mix skews toward things where that matters — instruments, art, antiques, and specialist equipment. It is also one of the lanes where personal-effects and relocation-adjacent shipments show up most often, and those have their own rules that differ from commercial imports in ways people do not expect.',
    watchOuts: [
      'A month at sea is a long time to discover a documentation problem. Review paperwork before the container is loaded, not while it is en route.',
      'Antiques and artwork need provenance documentation, and items over certain ages or containing restricted materials (ivory, certain woods) have specific rules.',
      'Personal effects and household goods are treated differently from commercial imports — do not mix them in one consignment.',
      'Whisky and spirits are dutiable and licensable in Singapore; the duty is significant and needs to be in the commercial calculation from the start.',
    ],
    faqs: [
      {
        q: 'Can I ship personal items in the same container as commercial goods?',
        a: 'It is a bad idea. Personal effects and commercial imports have different declaration treatments, and mixing them turns one straightforward consignment into two complicated ones. Ship them separately.',
      },
      {
        q: 'What do I need for antiques or artwork?',
        a: 'Provenance documentation, an accurate description including materials, and a realistic valuation. Items containing ivory, tortoiseshell, certain hardwoods, or other restricted materials can be subject to CITES controls regardless of age. Describe materials precisely in the enquiry.',
      },
      {
        q: 'Is air freight from the UK worth the cost?',
        a: 'Given a 24–35 day sea transit, often yes for anything valuable, urgent, or fragile. The relative time saving is larger than on regional lanes, which changes the calculation.',
      },
    ],
    cargoLinks: ['art-and-sculptures', 'laboratory-equipment', 'wine-and-spirits'],
  },
  {
    slug: 'germany-to-singapore',
    name: 'Germany',
    titleName: 'Germany',
    region: 'Europe',
    agreements: ['EU–Singapore FTA (EUSFTA)'],
    seaPorts: ['Hamburg', 'Bremerhaven'],
    airHubs: ['Frankfurt (FRA)', 'Munich (MUC)', 'Leipzig (LEJ)'],
    seaTransit: '25–35 days port to port',
    airTransit: '2–4 days',
    commonCargo: ['Industrial and precision machinery', 'Laboratory and analytical instruments', 'Medical devices', 'Automotive equipment'],
    intro:
      'Germany is the heavy-machinery lane into Singapore. Machine tools, analytical instruments, production lines, and medical equipment dominate, and the shipments are typically well documented, well crated, and considerably heavier than the receiving site expects. The recurring failure point is not the freight — it is that nobody checked whether the Singapore delivery address could physically take the crate.',
    watchOuts: [
      'German machinery crates are built to survive anything, which makes them heavier and larger than the machine specification implies. Get crated dimensions and gross weight, not net.',
      'Production-line equipment often ships in multiple crates that must be delivered and unpacked in a specific sequence.',
      'Analytical instruments frequently have calibration and handling requirements that must survive the last mile.',
      'August and the Christmas period slow origin-side handling more than people expect.',
      'EUSFTA covers the lane, but preferential treatment requires the correct origin statement on the invoice.',
    ],
    faqs: [
      {
        q: 'What do I need to check before a machine arrives?',
        a: 'Crated dimensions and gross weight, the delivery site\'s door and ceiling clearances, floor loading capacity, lifting access, and whether the route from kerb to final position is clear. We ask for photos of the access route because they answer more questions than a written description does.',
      },
      {
        q: 'The machine ships in six crates. Does that complicate things?',
        a: 'It makes sequencing important. Multi-crate equipment usually needs to arrive together and be unpacked in the manufacturer\'s order. Tell us it is a multi-part consignment at enquiry stage so the delivery is planned as one operation rather than six deliveries.',
      },
      {
        q: 'How do I claim EUSFTA preference?',
        a: 'Preferential origin under EUSFTA is generally evidenced by a statement on origin made by a registered exporter on the commercial document. Your German supplier needs to provide it at the time of shipment. It matters only where the goods are dutiable in Singapore, which is a narrow set of categories.',
      },
    ],
    cargoLinks: ['industrial-machinery', 'cnc-and-machine-tools', 'laboratory-equipment', 'medical-devices'],
  },
  {
    slug: 'netherlands-to-singapore',
    name: 'the Netherlands',
    titleName: 'Netherlands',
    region: 'Europe',
    agreements: ['EU–Singapore FTA (EUSFTA)'],
    seaPorts: ['Rotterdam', 'Amsterdam'],
    airHubs: ['Amsterdam (AMS)'],
    seaTransit: '25–35 days port to port',
    airTransit: '2–4 days',
    commonCargo: ['Horticultural and agricultural equipment', 'Food processing machinery', 'Electronics', 'Flowers and perishables'],
    intro:
      'Rotterdam is Europe\'s main gateway, so the Netherlands often appears as the load port for goods manufactured elsewhere in Europe — which matters, because the country of origin for FTA and declaration purposes is where the goods were made, not where they were containerised. The genuinely Dutch cargo we see skews toward horticultural equipment, food processing machinery, and perishables.',
    watchOuts: [
      'Load port is not origin. Goods consolidated at Rotterdam from other EU countries keep their manufacturing origin on the declaration.',
      'Perishables and flowers need cold-chain planning and are effectively air-only into Singapore.',
      'Plant material and horticultural goods attract phytosanitary requirements from NParks.',
      'Food processing equipment that has been used may need cleaning certification.',
    ],
    faqs: [
      {
        q: 'My goods ship from Rotterdam but were made in Poland. What is the origin?',
        a: 'Poland. Origin follows manufacture, not the port of loading. This matters for the declaration and for any preferential treatment claim — make sure the invoice states the correct country of manufacture.',
      },
      {
        q: 'Can I import flowers or plants into Singapore?',
        a: 'Plant material is regulated and generally requires phytosanitary certification and an import permit from the relevant Singapore authority. It is also effectively an air-freight-only proposition given the transit time by sea.',
      },
      {
        q: 'Does used food processing equipment need anything special?',
        a: 'Used equipment that has been in food contact often needs to be cleaned and, in some cases, certified as such. Confirm the condition and cleaning status with the seller before shipment.',
      },
    ],
    cargoLinks: ['commercial-kitchen-equipment', 'industrial-machinery', 'laboratory-equipment'],
  },
  {
    slug: 'italy-to-singapore',
    name: 'Italy',
    titleName: 'Italy',
    region: 'Europe',
    agreements: ['EU–Singapore FTA (EUSFTA)'],
    seaPorts: ['Genoa', 'La Spezia', 'Trieste', 'Livorno'],
    airHubs: ['Milan (MXP)', 'Rome (FCO)'],
    seaTransit: '18–28 days port to port',
    airTransit: '2–4 days',
    commonCargo: ['Machinery and packaging equipment', 'Marble and stone', 'Furniture and design pieces', 'Fashion and luxury goods'],
    intro:
      'Italy is meaningfully closer to Singapore by sea than Northern Europe, since Mediterranean ports skip the run around the continent. The cargo mix is distinctive: packaging and food machinery, marble, and high-end furniture and design pieces — the last of which are usually the hardest to move well, because they are simultaneously fragile, valuable, and awkwardly shaped.',
    watchOuts: [
      'Mediterranean ports save roughly a week versus Hamburg or Rotterdam. If your supplier offers a choice, take Genoa or La Spezia.',
      'Designer furniture and lighting need bespoke crating; factory packing is often display packaging, not transport packaging.',
      'Marble and stone hit container weight limits before volume limits.',
      'August is a near-total shutdown in Italian manufacturing. Plan around it explicitly.',
      'High-value fashion and luxury goods attract valuation scrutiny — the invoice must reflect the real transaction value.',
    ],
    faqs: [
      {
        q: 'Why is Italy faster than Germany by sea?',
        a: 'Mediterranean ports are on the Suez routing to Asia, so cargo does not need to travel around Western Europe first. It is typically about a week\'s difference from the same factory.',
      },
      {
        q: 'How should designer furniture be packed?',
        a: 'Properly crated, not just boxed. Manufacturers frequently ship in packaging designed for showroom delivery rather than international freight. We would rather arrange or specify appropriate crating before departure than assess damage on arrival.',
      },
      {
        q: 'What is the August problem?',
        a: 'Much of Italian manufacturing closes for several weeks in August. If your delivery date is in September or October, that shutdown is already inside your timeline whether you planned for it or not.',
      },
    ],
    cargoLinks: ['furniture-and-fit-out', 'marble-and-stone', 'industrial-machinery'],
  },
  {
    slug: 'france-to-singapore',
    name: 'France',
    titleName: 'France',
    region: 'Europe',
    agreements: ['EU–Singapore FTA (EUSFTA)'],
    seaPorts: ['Le Havre', 'Fos-sur-Mer / Marseille'],
    airHubs: ['Paris (CDG)', 'Lyon (LYS)'],
    seaTransit: '22–32 days port to port',
    airTransit: '2–4 days',
    commonCargo: ['Aerospace components', 'Wine and spirits', 'Luxury and cosmetics', 'Industrial equipment'],
    intro:
      'France splits between two very different profiles: aerospace and industrial equipment, which needs traceability documentation, and wine, spirits, and luxury goods, which need licences and attract real duty. Marseille sailings are noticeably faster than Le Havre for the same reason Italian ports are — the Mediterranean routing.',
    watchOuts: [
      'Wine and spirits are dutiable and require an import licence in Singapore. Model the excise duty before you commit to a purchase.',
      'Aerospace parts need airworthiness release documentation (such as EASA Form 1) travelling with the goods.',
      'Cosmetics require HSA notification in Singapore before supply.',
      'Fos-sur-Mer / Marseille typically saves several days over Le Havre for the same destination.',
    ],
    faqs: [
      {
        q: 'What does it take to import French wine commercially?',
        a: 'A licence to import liquor, and a clear understanding of the excise duty, which is charged per litre of alcohol rather than on value. Alcohol is one of only four dutiable categories in Singapore, and the duty is material — build it into your pricing before ordering.',
      },
      {
        q: 'What documentation do aerospace parts need?',
        a: 'Airworthiness release documentation and traceability records should travel with the shipment. Missing paperwork on an aviation part can make it commercially worthless even though it arrives physically intact.',
      },
      {
        q: 'Le Havre or Marseille?',
        a: 'Marseille is generally faster to Singapore. If your supplier has the option and your goods are not already committed to a Le Havre routing, it is worth asking.',
      },
    ],
    cargoLinks: ['wine-and-spirits', 'aviation-parts', 'cosmetics-and-personal-care'],
  },
  {
    slug: 'spain-to-singapore',
    name: 'Spain',
    titleName: 'Spain',
    region: 'Europe',
    agreements: ['EU–Singapore FTA (EUSFTA)'],
    seaPorts: ['Valencia', 'Barcelona', 'Algeciras'],
    airHubs: ['Madrid (MAD)', 'Barcelona (BCN)'],
    seaTransit: '18–28 days port to port',
    airTransit: '3–5 days',
    commonCargo: ['Food products and olive oil', 'Ceramics and tiles', 'Machinery', 'Wine'],
    intro:
      'Spain benefits from the same Mediterranean routing advantage as Italy, and Valencia in particular is very well connected to Asia. The cargo is often food, ceramics, and tiles — all of which are dense, breakage-prone, or regulated, and none of which forgive casual packing over a three-week sea passage.',
    watchOuts: [
      'Ceramic tiles and sanitaryware are heavy and brittle. Palletisation quality determines the breakage rate more than anything else.',
      'Food products require the Singapore importer to hold the appropriate SFA licence before shipment.',
      'Olive oil and similar liquids need packaging suited to a long, warm sea transit.',
      'Valencia has better Asia connectivity than Barcelona for most services.',
    ],
    faqs: [
      {
        q: 'How do I reduce breakage on tile shipments?',
        a: 'Insist on proper palletisation with edge protection and shrink-wrapping, and specify it in the purchase order rather than hoping. On a three-week sea transit with container movement at both ends, packing quality is the whole game.',
      },
      {
        q: 'What is needed to import Spanish food products?',
        a: 'The importer generally needs the appropriate Singapore Food Agency licence, with requirements varying by product type. Start with a specific product list rather than a category — the answer differs between olive oil, cured meat, and cheese.',
      },
      {
        q: 'Valencia or Barcelona?',
        a: 'Valencia usually has stronger direct Asia services. Barcelona works but can add transshipment. Confirm the actual service rather than the port name.',
      },
    ],
    cargoLinks: ['marble-and-stone', 'commercial-kitchen-equipment', 'wine-and-spirits'],
  },
  {
    slug: 'switzerland-to-singapore',
    name: 'Switzerland',
    titleName: 'Switzerland',
    region: 'Europe',
    agreements: ['EFTA–Singapore FTA (ESFTA)'],
    seaPorts: ['Via Rotterdam, Antwerp, Hamburg or Genoa'],
    airHubs: ['Zurich (ZRH)', 'Geneva (GVA)'],
    seaTransit: '26–36 days including inland transport to a seaport',
    airTransit: '2–4 days',
    commonCargo: ['Precision instruments', 'Watches and high-value goods', 'Pharmaceutical and laboratory equipment', 'Machine tools'],
    intro:
      'Switzerland is landlocked, so every sea shipment starts with a road or rail leg to a North Sea or Mediterranean port, and that leg is where the schedule variability lives. In practice most Swiss cargo into Singapore goes by air anyway — precision instruments, watches, and pharmaceutical equipment have the value density to justify it.',
    watchOuts: [
      'Inland transport to the port adds days that a port-to-port transit quote does not show.',
      'Switzerland is outside the EU, so EUSFTA does not apply — the EFTA agreement does, with its own origin rules.',
      'High-value watch and instrument shipments need security handling arranged, not assumed.',
      'Pharmaceutical and temperature-sensitive equipment needs the cold chain specified end to end, including the Singapore delivery leg.',
    ],
    faqs: [
      {
        q: 'Does the EU–Singapore FTA cover Swiss goods?',
        a: 'No. Switzerland is not an EU member. The relevant agreement is the EFTA–Singapore FTA, which has its own origin rules and documentation requirements.',
      },
      {
        q: 'Should Swiss cargo go by air or sea?',
        a: 'Usually air, given the value density of typical Swiss exports and the inland leg that sea adds. For heavy machine tools, sea still makes sense — but budget the road transport to the port as part of the timeline.',
      },
      {
        q: 'How are high-value items secured in transit?',
        a: 'Through a combination of appropriate insurance, discreet documentation and labelling, secure handling at both ends, and a delivery method matched to the value. This is planned before shipment, not improvised on arrival.',
      },
    ],
    cargoLinks: ['laboratory-equipment', 'medical-devices', 'cnc-and-machine-tools'],
  },

  // --- Middle East ---------------------------------------------------------
  {
    slug: 'uae-to-singapore',
    name: 'the United Arab Emirates',
    titleName: 'UAE',
    region: 'Middle East',
    agreements: ['GCC–Singapore FTA (GSFTA)'],
    seaPorts: ['Jebel Ali (Dubai)', 'Khalifa Port (Abu Dhabi)'],
    airHubs: ['Dubai (DXB)', 'Abu Dhabi (AUH)'],
    seaTransit: '7–12 days port to port',
    airTransit: '1–3 days',
    commonCargo: ['Oil and gas equipment', 'Re-exported goods', 'Machinery', 'Exhibition and event materials'],
    intro:
      'The UAE is primarily a re-export hub, which makes it an unusual origin: a large share of what leaves Jebel Ali was manufactured somewhere else. That single fact drives most of the documentation care needed on this lane, because the declaration has to reflect where the goods were made, not where they were last stored.',
    watchOuts: [
      'Goods re-exported from a UAE free zone retain their original manufacturing origin for declaration and FTA purposes.',
      'Free zone paperwork is not the same as an export invoice; make sure you have a commercial invoice showing the actual transaction.',
      'Oil and gas equipment often has residual hydrocarbon or pressure-vessel considerations affecting handling.',
      'Exhibition materials moving between regional shows are good candidates for temporary import arrangements rather than permanent import.',
    ],
    faqs: [
      {
        q: 'My goods shipped from Dubai but were made in Germany. What do I declare?',
        a: 'German origin. Re-export through a UAE free zone does not change where the goods were manufactured. Getting this wrong on the declaration is a substantive error, not a formality.',
      },
      {
        q: 'Can exhibition equipment be temporarily imported?',
        a: 'Temporary import arrangements, including ATA Carnet, exist for goods entering Singapore for exhibitions and then leaving again. Whether they suit your case depends on the goods and the timeline. Ask us before the goods ship — it is difficult to convert after the fact.',
      },
      {
        q: 'How reliable is the transit time from Jebel Ali?',
        a: 'Generally good; Jebel Ali is one of the best-connected ports to Singapore with frequent direct services. Seven to twelve days port to port is a reasonable planning range.',
      },
    ],
    cargoLinks: ['industrial-machinery', 'exhibition-booth-materials', 'generators-and-power-equipment'],
  },
  {
    slug: 'turkey-to-singapore',
    name: 'Türkiye',
    titleName: 'Türkiye',
    region: 'Europe',
    agreements: ['Türkiye–Singapore FTA (TRSFTA)'],
    seaPorts: ['Istanbul (Ambarlı)', 'Mersin', 'Izmir (Aliağa)'],
    airHubs: ['Istanbul (IST)'],
    seaTransit: '18–28 days port to port',
    airTransit: '2–4 days',
    commonCargo: ['Marble and natural stone', 'Textiles and home furnishings', 'Machinery', 'Food products'],
    intro:
      'Türkiye is a strong lane for marble, stone, and textiles, and both categories bring their own physical problems — stone hits weight limits, textiles need moisture protection over a long sea passage. Istanbul Airport has made the air option genuinely competitive, which is worth remembering for smaller high-value consignments.',
    watchOuts: [
      'Marble and travertine consignments are limited by container payload, not by volume. Plan tonnage first.',
      'Textiles absorb moisture; a three-week sea passage in a steel box needs desiccant and proper wrapping.',
      'Stone slabs need A-frame or bundle crating with adequate bracing — inadequate bracing is the main cause of breakage.',
      'Food products require the Singapore importer to be appropriately licensed before shipment.',
    ],
    faqs: [
      {
        q: 'How much marble fits in a container?',
        a: 'Far less than the volume suggests — weight is the constraint. A 20-foot container typically reaches its payload limit well before it is full. Give us slab dimensions, thickness, and total tonnage and we will work out the container count properly.',
      },
      {
        q: 'How do I stop textiles arriving damp or mouldy?',
        a: 'Desiccant, moisture-barrier wrapping, and avoiding loading in wet conditions. Container rain — condensation inside the box over a long, hot passage — is real and ruins consignments that were packed dry.',
      },
      {
        q: 'Is air freight from Istanbul viable?',
        a: 'Yes, and more so than most people assume. Istanbul has strong connectivity to Singapore, which makes air a reasonable option for samples, urgent orders, and high-value goods.',
      },
    ],
    cargoLinks: ['marble-and-stone', 'furniture-and-fit-out', 'industrial-machinery'],
  },
];

// --- derived helpers --------------------------------------------------------

export const countryRegions = [
  'Southeast Asia',
  'North Asia',
  'South Asia',
  'Oceania',
  'North America',
  'Europe',
  'Middle East',
] as const;

/** Builds the page record consumed by the cluster layout. */
export function countryToSpoke(c: CountryOrigin): SpokeBase {
  const facts: Fact[] = [
    { label: 'Main origin seaports', value: c.seaPorts.join(', ') },
    { label: 'Main origin air hubs', value: c.airHubs.join(', ') },
    { label: 'Indicative sea transit', value: c.seaTransit },
    { label: 'Indicative air transit', value: c.airTransit },
    { label: 'Trade agreements in force', value: c.agreements.join('; ') },
    { label: 'Cargo we see most on this lane', value: c.commonCargo.join(', ') },
  ];

  const sections: Section[] = [
    {
      heading: `What shipping from ${c.name} to Singapore actually involves`,
      body: c.intro,
    },
    {
      heading: `What catches importers out on the ${c.titleName} lane`,
      body: `These are the recurring problems we see on shipments from ${c.name} — none of them are exotic, and all of them are cheaper to prevent than to fix once the cargo has sailed.`,
      bullets: c.watchOuts,
    },
    {
      heading: 'How we work a shipment on this lane',
      body: `We start from what the goods actually are rather than from a freight rate. That means confirming the description and value that will appear on the Singapore declaration, checking whether any Competent Authority requirement applies before the goods leave ${c.name}, working out whether the receiving address can physically take the consignment, and only then deciding the mode and routing. For one-off and unusual shipments, that sequence prevents most of the problems a rate-first approach creates.`,
    },
  ];

  return {
    slug: c.slug,
    label: `From ${c.titleName}`,
    metaTitle: fitTitle(
      `Shipping from ${c.titleName} to Singapore | Transit & Permits`,
      `Shipping from ${c.titleName} to Singapore`,
    ),
    metaDescription: fitDescription(
      `Importing from ${c.titleName} to Singapore: ${c.seaTransit.toLowerCase()}, main ports, and permit requirements.`,
      'Plus the problems that recur on this lane.',
    ),
    h1: `Shipping from ${c.titleName} to Singapore`,
    lede: `Transit expectations, documentation requirements, and the practical problems that come up on the ${c.titleName}–Singapore lane — written for one-off, unusual, and awkward shipments rather than routine container traffic.`,
    summary: `${c.seaTransit} by sea, ${c.airTransit.toLowerCase()} by air. ${c.agreements[0]}.`,
    facts,
    sections,
    faqs: c.faqs,
    group: c.region,
    relatedServices: ['special-cargo-singapore', 'customs-support-singapore'],
    relatedPaths: c.cargoLinks.map((s) => `/cargo/${s}`),
  };
}

export const countrySpokes: SpokeBase[] = countries.map(countryToSpoke);
