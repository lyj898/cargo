// Cargo-type cluster → /cargo/<slug>
//
// One page per category of goods we're asked about. Regulatory notes name the
// relevant Singapore Competent Authority where one clearly applies, and stop
// short of telling anyone their specific shipment is or isn't controlled —
// that determination depends on the actual product and belongs with the
// authority or a licensed declaring agent.

import type { Faq, Fact, Section, SpokeBase } from './types';
import { fitTitle, fitDescription } from '../utils/meta';

export type CargoType = {
  slug: string;
  /** Used in sentences: "importing <name> into Singapore". */
  name: string;
  /** Title case for headings. */
  titleName: string;
  group: 'Industrial & manufacturing' | 'Technology & instruments' | 'Events & production' | 'Interiors & materials' | 'Regulated goods' | 'Vehicles & transport';
  /** One-line hub card summary. */
  summary: string;
  /** 2–3 sentences on why this category is hard. */
  intro: string;
  /** Physical handling and packing considerations. */
  handling: string[];
  /** Regulatory framing — cautious, names the authority where clear. */
  regulatory: string;
  /** Which Singapore agency, if any, typically has an interest. */
  authority: string;
  /** Typical crated/shipping profile. */
  profile: string;
  /** Documents and details to have ready. */
  prepare: string[];
  faqs: Faq[];
  /** Origin-country slugs commonly paired with this cargo. */
  countryLinks: string[];
  relatedServices: string[];
  /** Optional cross-links into the guides/permits clusters. */
  guideLinks?: string[];
};

export const cargoTypes: CargoType[] = [
  // --- Industrial & manufacturing -----------------------------------------
  {
    slug: 'industrial-machinery',
    name: 'industrial machinery',
    titleName: 'Industrial Machinery',
    group: 'Industrial & manufacturing',
    summary: 'Production equipment, plant, and heavy machines that need dimension-aware planning and a receiving site that can take them.',
    intro:
      'Industrial machinery is rarely a transport problem and almost always a site problem. The machine gets to Singapore reliably; what goes wrong is that the crate is heavier than the delivery address can lift, taller than the roller shutter, or arriving on a day when nobody with a forklift licence is on site. We plan these shipments backwards from the final resting position of the machine.',
    handling: [
      'Get crated dimensions and gross weight from the supplier, not the machine specification. The difference is routinely 20–40%.',
      'Confirm the delivery site\'s floor loading capacity, door and ceiling clearances, and turning radius on the approach.',
      'Establish whether the machine can be lifted (lifting points, centre of gravity) or must be moved on skates or air castors.',
      'Ask whether the machine ships with oils, coolant, or hydraulic fluid in place — this affects handling and sometimes air-freight eligibility.',
      'Multi-crate machines usually need to be delivered together and unpacked in the manufacturer\'s sequence.',
      'Photograph the access route from kerb to final position before anything ships.',
    ],
    regulatory:
      'Most general industrial machinery is not a controlled good in Singapore, so the main requirements are an accurate declaration and, where applicable, an import permit through TradeNet. Machines incorporating pressure vessels, refrigerants, radioactive sources, or lasers can bring additional requirements, and used or refurbished equipment attracts closer attention to description and valuation than new equipment does.',
    authority: 'Singapore Customs (declaration); additional authorities may apply depending on components',
    profile: 'Typically 1–15 tonnes, wooden or steel crated, often multi-piece',
    prepare: [
      'Machine make, model, and serial number',
      'Crated dimensions (L × W × H) and gross weight per crate',
      'New or used, and year of manufacture if used',
      'Commercial invoice with a specific goods description, not "machine"',
      'Packing list showing crate-by-crate contents',
      'Photos of the delivery site access route',
      'Whether the machine contains fluids, refrigerant, or batteries',
    ],
    faqs: [
      {
        q: 'What is the most common reason a machinery delivery fails?',
        a: 'Site access. In our experience it is almost never the freight — it is that the crate cannot get from the truck to where the machine needs to sit. Doorway width, ceiling height, floor loading, and lifting equipment availability are the four things to confirm before shipment.',
      },
      {
        q: 'Can you deliver machinery to a unit without a loading dock?',
        a: 'Usually yes, but the method changes: tail-lift, crane, forklift, or skates depending on weight and access. Tell us the constraints in the enquiry and we will plan the equipment rather than discovering the problem on delivery day.',
      },
      {
        q: 'Is importing used machinery different from new?',
        a: 'The process is the same but the scrutiny is higher. Used equipment needs an accurate description of its condition, a realistic valuation, and in some cases cleaning before shipment. Describing used equipment as new causes far more trouble than declaring it correctly.',
      },
    ],
    countryLinks: ['china-to-singapore', 'germany-to-singapore', 'taiwan-to-singapore', 'italy-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'special-cargo-singapore'],
    guideLinks: ['import-documentation-checklist', 'what-is-tradenet'],
  },
  {
    slug: 'cnc-and-machine-tools',
    name: 'CNC machines and machine tools',
    titleName: 'CNC Machines & Machine Tools',
    group: 'Industrial & manufacturing',
    summary: 'Lathes, mills, machining centres, and press equipment — dense, precise, and unforgiving of poor handling.',
    intro:
      'Machine tools are dense rather than large, which is what makes them deceptive: a crate the size of a wardrobe can weigh six tonnes and exceed the floor loading of a typical light-industrial unit. They are also precision equipment, so shock and vibration during transit have consequences that only show up during commissioning, long after the freight was signed for as delivered.',
    handling: [
      'Density is the trap. Confirm gross weight before assuming any handling method.',
      'Fit shock and tilt indicators for high-precision machines — they turn a dispute into a fact.',
      'Machines are usually bolted to a skid or pallet at origin; confirm the fixings are rated for the weight.',
      'Ways, spindles, and moving assemblies should be locked or supported for transit by the manufacturer.',
      'Rust prevention matters on a long sea passage: VCI wrapping and desiccant inside the crate.',
      'Plan the rigging into position, not just the delivery to the door.',
    ],
    regulatory:
      'Machine tools are generally not controlled goods in Singapore, but certain high-precision or multi-axis machining equipment can fall under export control regimes in the country of origin — particularly from the United States, Japan, and the EU. That is an origin-side clearance your supplier must resolve, and it holds shipments regularly.',
    authority: 'Singapore Customs (declaration); origin-country export control may apply',
    profile: 'Typically 2–20 tonnes, skid-mounted, high density',
    prepare: [
      'Machine make, model, and number of axes',
      'Gross crated weight and dimensions',
      'Whether the machine has been drained of coolant and oils',
      'Origin-country export licence status, if applicable',
      'Floor loading capacity at the destination',
      'Whether rigging and positioning are needed on arrival',
      'Commercial invoice and packing list',
    ],
    faqs: [
      {
        q: 'Do I need an export licence for a CNC machine?',
        a: 'Sometimes. Multi-axis and high-precision machining centres can fall under export control lists in the US, EU, and Japan. Your supplier is responsible for obtaining any licence, but the delay lands on your timeline — so ask about it before you place the order, not after.',
      },
      {
        q: 'How do I know if the machine was damaged in transit?',
        a: 'Fit shock and tilt indicators before shipment and photograph them on arrival before unpacking. Without them, a precision fault discovered at commissioning is very difficult to attribute. They cost almost nothing relative to the machine.',
      },
      {
        q: 'My workshop floor is a standard industrial slab. Is that enough?',
        a: 'Often, but check. A six-tonne machine on a small footprint produces high point loading. Get the machine\'s footprint and weight distribution from the manufacturer and confirm against your building\'s specification before delivery is scheduled.',
      },
    ],
    countryLinks: ['taiwan-to-singapore', 'germany-to-singapore', 'japan-to-singapore', 'china-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'fragile-equipment-shipping-singapore'],
    guideLinks: ['import-documentation-checklist'],
  },
  {
    slug: 'generators-and-power-equipment',
    name: 'generators and power equipment',
    titleName: 'Generators & Power Equipment',
    group: 'Industrial & manufacturing',
    summary: 'Gensets, transformers, UPS systems, and switchgear — heavy, often fuel-contaminated, and sometimes battery-laden.',
    intro:
      'Power equipment combines three awkward properties: it is heavy, it often contains residual fuel or oil, and increasingly it contains batteries. Any one of those changes how a shipment is handled; together they mean a genset or large UPS needs to be assessed properly rather than booked as general cargo.',
    handling: [
      'Fuel tanks must be drained and, for air freight, purged. Residual fuel is a dangerous-goods issue, not a housekeeping detail.',
      'Transformers may contain oil — confirm the type and whether it is drained for transit.',
      'UPS systems with sealed lead-acid or lithium batteries have specific packing and labelling requirements.',
      'Weight is concentrated: skid-mounted gensets need rated lifting points and a plan for positioning.',
      'Weatherproof enclosures are not shipping crates. Confirm what actual transit protection exists.',
      'Check whether the equipment is rated for Singapore\'s 230V/50Hz supply before importing it.',
    ],
    regulatory:
      'Generators and power equipment are usually not controlled goods, but batteries within them are regulated for transport, and equipment containing certain refrigerants or oils may bring NEA considerations. Electrical equipment intended for sale to consumers in Singapore can also fall under safety registration requirements — check before importing for resale rather than own use.',
    authority: 'Singapore Customs; NEA for certain substances; safety registration may apply for consumer goods',
    profile: 'Typically 500 kg – 20 tonnes, skid or container-mounted',
    prepare: [
      'Equipment type, kVA/kW rating, and voltage/frequency',
      'Whether fuel and oil have been drained',
      'Battery type, chemistry, and watt-hour rating if fitted',
      'Gross weight and dimensions including any enclosure',
      'Intended use: own use, resale, or hire',
      'Commercial invoice and packing list',
    ],
    faqs: [
      {
        q: 'Does the generator need to be drained before shipping?',
        a: 'Yes, and for air freight it typically needs to be purged as well. Residual fuel makes the equipment a dangerous-goods shipment. Get written confirmation from the supplier rather than assuming it was done.',
      },
      {
        q: 'Will equipment bought overseas work in Singapore?',
        a: 'Singapore runs 230V at 50Hz. Equipment rated for 110V/60Hz will not simply work here, and adapting industrial equipment after import is expensive. Confirm the electrical rating before you buy.',
      },
      {
        q: 'What about the batteries in a UPS?',
        a: 'Battery chemistry determines everything. Sealed lead-acid and lithium batteries have different transport rules, and lithium in particular has strict packing, labelling, and documentation requirements. Give us the battery type and watt-hour rating at enquiry stage.',
      },
    ],
    countryLinks: ['china-to-singapore', 'uae-to-singapore', 'germany-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'special-cargo-singapore'],
    guideLinks: ['dangerous-goods-into-singapore'],
  },
  {
    slug: 'solar-and-renewable-equipment',
    name: 'solar and renewable energy equipment',
    titleName: 'Solar & Renewable Energy Equipment',
    group: 'Industrial & manufacturing',
    summary: 'Panels, inverters, and battery storage — high volume, fragile edges, and battery regulations in the middle of it.',
    intro:
      'Solar equipment is an odd freight profile: panels are light for their size but extremely vulnerable to point loading and flexing, inverters are dense electronics, and battery storage systems are regulated dangerous goods. A single project shipment can contain all three, and treating it as one homogeneous consignment is how panels arrive with micro-cracks nobody can see until commissioning.',
    handling: [
      'Panels must ship on edge in purpose-built pallets, never stacked flat under load.',
      'Micro-cracking is invisible on arrival and only shows in performance testing — insist on manufacturer packing standards.',
      'Battery energy storage systems are regulated dangerous goods with strict transport rules.',
      'Inverters are sensitive to moisture; a long sea passage needs desiccant and sealed packaging.',
      'Project shipments should be split by commodity type rather than consolidated for convenience.',
      'Confirm the site delivery can take full pallets — solar pallets are long and awkward to manoeuvre.',
    ],
    regulatory:
      'Panels and inverters are generally not controlled goods, but battery storage falls under dangerous-goods transport rules and may attract additional requirements. Equipment being connected to the grid in Singapore is subject to the relevant energy and building approvals, which sit outside the import process but are worth sequencing alongside it.',
    authority: 'Singapore Customs; dangerous-goods rules for battery storage',
    profile: 'High volume, moderate weight; batteries are the constraint',
    prepare: [
      'Panel count, dimensions, and pallet configuration',
      'Inverter models and quantities',
      'Battery chemistry, capacity, and UN number if applicable',
      'Total shipment volume and weight',
      'Site delivery access and storage availability',
      'Commercial invoice and packing list',
    ],
    faqs: [
      {
        q: 'How do solar panels get damaged in shipping?',
        a: 'Micro-cracking from flexing or point loading, usually caused by stacking flat, poor pallet design, or rough handling. The damage is invisible to the eye and shows up as reduced output. Manufacturer-standard edge-on pallets and careful handling are the only reliable prevention.',
      },
      {
        q: 'Can battery storage systems be air freighted?',
        a: 'Large lithium battery systems are heavily restricted by air and in many cases effectively sea-only. The chemistry, capacity, and state of charge all matter. Give us the specification early — this determines the whole shipping plan.',
      },
      {
        q: 'Should I ship the whole project in one consignment?',
        a: 'Usually not. Panels, inverters, and batteries have different handling and regulatory profiles, and combining them means the strictest requirement governs everything. Splitting by commodity is normally cheaper and faster.',
      },
    ],
    countryLinks: ['china-to-singapore', 'vietnam-to-singapore', 'germany-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'special-cargo-singapore'],
    guideLinks: ['dangerous-goods-into-singapore'],
  },

  // --- Technology & instruments -------------------------------------------
  {
    slug: 'laboratory-equipment',
    name: 'laboratory equipment',
    titleName: 'Laboratory Equipment',
    group: 'Technology & instruments',
    summary: 'Analysers, microscopes, centrifuges, and instruments where calibration survives or does not survive the journey.',
    intro:
      'Laboratory instruments are the clearest case of cargo where arriving intact is not the same as arriving usable. An analytical instrument can be undamaged and still out of calibration after a rough transit, and the cost of recalibration or a manufacturer service visit often exceeds the freight. The handling specification from the manufacturer is the actual brief for these shipments.',
    handling: [
      'Obtain and follow the manufacturer\'s transport specification — orientation, shock limits, temperature range.',
      'Fit shock and tilt indicators; for sensitive instruments they are standard practice, not overkill.',
      'Instruments with internal optics or fluidics often need transit locks fitted before movement.',
      'Temperature-sensitive items need cold chain specified through the last mile, not just the main leg.',
      'Original manufacturer crating is worth requesting even at extra cost; replacements rarely match it.',
      'Plan delivery to the actual laboratory, including lift dimensions and door widths in the building.',
    ],
    regulatory:
      'Most general laboratory equipment is not controlled, but instruments containing radioactive sources, lasers above certain classes, or that are classified as medical devices bring specific requirements. Some analytical and semiconductor-adjacent instruments are subject to export controls in the country of origin. If the instrument will be used for clinical or diagnostic purposes, HSA requirements may apply.',
    authority: 'Singapore Customs; NEA for radioactive sources; HSA if used as a medical device',
    profile: 'Typically 50 kg – 2 tonnes, high value, shock sensitive',
    prepare: [
      'Instrument make, model, and manufacturer handling specification',
      'Whether transit locks are fitted',
      'Any radioactive source, laser class, or hazardous component',
      'Temperature and humidity limits',
      'Destination laboratory access: lift size, corridor widths, door clearances',
      'Commercial invoice with itemised values',
      'Intended use (research, industrial, clinical)',
    ],
    faqs: [
      {
        q: 'Do I need recalibration after shipping?',
        a: 'Assume yes for anything analytical, and budget for it. Even a well-handled instrument benefits from verification after an international move. What good handling buys you is a calibration check rather than a repair.',
      },
      {
        q: 'What if the instrument contains a radioactive source?',
        a: 'That changes the shipment substantially — it becomes regulated cargo with NEA involvement and specific transport requirements. Flag it at the very start of the enquiry; it is not something to discover at the airport.',
      },
      {
        q: 'Can you deliver into a laboratory rather than the loading bay?',
        a: 'Yes, and for instruments it is usually the right approach. We need the building\'s lift dimensions, corridor widths, and any access restrictions, ideally with photos. Laboratory buildings are frequently the tightest delivery environments we work in.',
      },
    ],
    countryLinks: ['germany-to-singapore', 'usa-to-singapore', 'japan-to-singapore', 'switzerland-to-singapore'],
    relatedServices: ['fragile-equipment-shipping-singapore', 'special-cargo-singapore'],
    guideLinks: ['import-documentation-checklist'],
  },
  {
    slug: 'medical-devices',
    name: 'medical devices',
    titleName: 'Medical Devices',
    group: 'Regulated goods',
    summary: 'Devices regulated by HSA, where the registration question comes before the shipping question.',
    intro:
      'With medical devices, the freight is the easy part and the regulatory sequence is the whole job. Singapore\'s Health Sciences Authority operates a risk-based classification system, and both the device and the party importing or supplying it can require registration or licensing. Approval elsewhere — FDA, CE, or otherwise — is supporting evidence, not a substitute. The expensive mistake is shipping first and discovering the requirement second.',
    handling: [
      'Sort out the regulatory position before booking freight, not alongside it.',
      'Many devices are shock- and temperature-sensitive; treat them like laboratory instruments physically.',
      'Sterile-packaged items must not have their packaging integrity compromised in transit.',
      'Devices with lithium batteries carry the usual battery transport requirements on top.',
      'Software-controlled and imaging equipment often needs manufacturer installation, which should be scheduled with delivery.',
      'Delivery into hospitals and clinics has its own access rules — plan for goods lifts and receiving hours.',
    ],
    regulatory:
      'Medical devices in Singapore are regulated by the Health Sciences Authority under the Health Products Act. Depending on the device\'s risk classification and how it will be supplied, registration of the product and licensing of the importer, wholesaler, or manufacturer may be required. There are specific provisions for devices imported for particular purposes such as evaluation, research, or re-export. Because the answer depends entirely on the specific device, treat this page as orientation and confirm the position with HSA or a regulatory consultant before committing to a shipment.',
    authority: 'Health Sciences Authority (HSA)',
    profile: 'Wide range; regulatory status is the binding constraint',
    prepare: [
      'Device name, model, manufacturer, and intended use',
      'Risk classification if known',
      'Whether the device is already registered in Singapore',
      'Whether you hold the relevant HSA dealer licence',
      'Purpose of import: sale, evaluation, research, demonstration, re-export',
      'Existing approvals (FDA, CE, TGA) as supporting documentation',
      'Commercial invoice and packing list',
    ],
    faqs: [
      {
        q: 'My device is FDA cleared. Can I import it into Singapore?',
        a: 'Not automatically. HSA applies its own registration and licensing framework. FDA clearance is useful supporting material in a submission but does not itself permit import or supply in Singapore.',
      },
      {
        q: 'I only want to bring one unit in for a demonstration. Does that change things?',
        a: 'Possibly — there are specific provisions for devices imported for purposes such as evaluation or exhibition. The requirements differ from those for commercial supply. Tell us the exact purpose and duration in the enquiry so we can point you at the right route.',
      },
      {
        q: 'Can you handle the HSA registration for me?',
        a: 'We are not a regulatory consultancy and would not claim otherwise. What we do is help you understand the sequence, prepare the shipping and documentation side properly, and connect you with appropriate regulatory and declaring support where you need it.',
      },
    ],
    countryLinks: ['usa-to-singapore', 'germany-to-singapore', 'japan-to-singapore', 'south-korea-to-singapore'],
    relatedServices: ['customs-support-singapore', 'fragile-equipment-shipping-singapore'],
    guideLinks: ['controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'semiconductor-equipment',
    name: 'semiconductor and cleanroom equipment',
    titleName: 'Semiconductor & Cleanroom Equipment',
    group: 'Technology & instruments',
    summary: 'Fab tools and cleanroom systems where particulate control and export licensing both apply.',
    intro:
      'Semiconductor equipment is the most demanding category we handle, for two unrelated reasons. Physically, it needs particulate control, vibration limits, and often staged unpacking through an airlock rather than a loading bay. Legally, a large share of it sits on export control lists in the United States, Japan, the Netherlands, and elsewhere, which means the origin-side licence can dominate the timeline entirely.',
    handling: [
      'Cleanroom-destined equipment usually needs double or triple bagging and staged unpacking at the facility boundary.',
      'Vibration and shock limits are tight; specialist air-ride transport is often specified by the manufacturer.',
      'Nitrogen-purged or sealed tools must maintain their purge through the whole journey.',
      'Facility access is the real constraint — clean corridors, airlocks, and lift capacity.',
      'Delivery windows are often dictated by the fab\'s own schedule, not by freight availability.',
      'Install teams and equipment often need to be coordinated to arrive with the tool.',
    ],
    regulatory:
      'Semiconductor manufacturing and metrology equipment is frequently subject to export control in the country of origin, and licence processing can take months. That is a supplier obligation but a buyer\'s timeline risk. On the Singapore side, the import itself is usually a standard declaration unless the tool contains a radioactive source, laser, or other controlled component.',
    authority: 'Origin-country export control; Singapore Customs for declaration; NEA for radioactive components',
    profile: 'Typically 1–20 tonnes, very high value, tight environmental limits',
    prepare: [
      'Tool make, model, and configuration',
      'Origin-country export licence status and expected timing',
      'Manufacturer transport specification (shock, vibration, orientation)',
      'Cleanliness requirement and unpacking protocol',
      'Destination facility access route and airlock dimensions',
      'Whether nitrogen purge must be maintained',
      'Install team scheduling requirements',
    ],
    faqs: [
      {
        q: 'How long does an export licence take?',
        a: 'It varies widely by jurisdiction and equipment type, and months is not unusual for controlled semiconductor tooling. Ask your supplier for the licence status before you plan anything else — it is the longest pole in the tent far more often than the freight is.',
      },
      {
        q: 'Can the tool be delivered straight into the cleanroom?',
        a: 'Normally it is delivered to the facility boundary and unpacked in stages, with outer layers removed progressively as the tool moves inward. That protocol needs to be agreed with the facility before delivery day and factored into how long the delivery takes.',
      },
      {
        q: 'What transport does this kind of equipment need?',
        a: 'Air-ride suspension and shock monitoring are common manufacturer requirements, along with restrictions on tilt and handling. We work from the manufacturer\'s specification rather than a general standard — send it to us with the enquiry.',
      },
    ],
    countryLinks: ['usa-to-singapore', 'japan-to-singapore', 'south-korea-to-singapore', 'taiwan-to-singapore'],
    relatedServices: ['fragile-equipment-shipping-singapore', 'oversized-cargo-singapore'],
    guideLinks: ['import-documentation-checklist'],
  },
  {
    slug: 'servers-and-it-hardware',
    name: 'servers and IT hardware',
    titleName: 'Servers & IT Hardware',
    group: 'Technology & instruments',
    summary: 'Racks, servers, network gear, and data-centre hardware — encryption rules, batteries, and tight delivery windows.',
    intro:
      'IT hardware looks like the simplest cargo on this list and regularly is not. Encryption functionality can bring export control obligations, wireless capability can bring IMDA considerations in Singapore, embedded batteries change the air freight picture, and data-centre delivery windows are narrower than almost any other destination type. None of that is difficult if it is known in advance.',
    handling: [
      'Populated racks are top-heavy and must be shipped upright with proper bracing.',
      'Consider whether it is better to ship servers separately and rack them on site.',
      'Static-sensitive components need ESD-safe packaging maintained throughout.',
      'Data-centre deliveries have booked windows, security clearance, and often no on-site storage.',
      'Embedded batteries (BBUs, RAID cache batteries, UPS modules) are regulated for transport.',
      'Confirm whether packaging removal and waste disposal are permitted on site — many facilities prohibit cardboard past a certain point.',
    ],
    regulatory:
      'Hardware with strong encryption can be subject to export control in the country of origin. Equipment with radio or telecommunications functionality may fall under IMDA requirements in Singapore. Neither is usually a barrier, but both need to be identified before shipment. The import declaration itself is normally straightforward.',
    authority: 'IMDA for radio/telecom equipment; origin-country export control for encryption',
    profile: 'Racks 200–800 kg; loose hardware light but high value',
    prepare: [
      'Equipment list with models and quantities',
      'Whether racks ship populated or empty',
      'Battery types and quantities',
      'Wireless or radio functionality, with specification sheets',
      'Data-centre delivery window and access requirements',
      'Whether on-site racking and packaging disposal are needed',
      'Commercial invoice with itemised values',
    ],
    faqs: [
      {
        q: 'Should I ship racks populated or empty?',
        a: 'It depends on the destination. Populated racks arrive faster to a working state but are heavy, top-heavy, and harder to manoeuvre through data-centre corridors. If access is tight, shipping empty and racking on site is usually the better call.',
      },
      {
        q: 'Does networking equipment need IMDA approval?',
        a: 'Equipment with radio or telecommunications functionality can fall under IMDA requirements. Wired-only equipment generally does not. Send us the specification sheets and we will tell you what to check.',
      },
      {
        q: 'What makes data-centre deliveries different?',
        a: 'Booked delivery windows, security clearance for personnel, restricted access routes, no storage tolerance, and often rules about packaging materials. They need to be planned as an operation with a scheduled slot, not treated as an ordinary delivery.',
      },
    ],
    countryLinks: ['china-to-singapore', 'usa-to-singapore', 'taiwan-to-singapore', 'vietnam-to-singapore'],
    relatedServices: ['special-cargo-singapore', 'fragile-equipment-shipping-singapore'],
    guideLinks: ['controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'lithium-batteries',
    name: 'lithium batteries and battery-powered goods',
    titleName: 'Lithium Batteries & Battery-Powered Goods',
    group: 'Regulated goods',
    summary: 'Regulated dangerous goods where chemistry, watt-hours, and packing configuration decide what is even possible.',
    intro:
      'Lithium batteries are the most commonly mis-shipped category in modern freight, usually because nobody realised the product contained one. They are classified as dangerous goods, and the rules differ sharply between batteries shipped loose, batteries packed with equipment, and batteries installed in equipment. Getting this wrong is not a paperwork problem — airlines refuse the shipment, and undeclared batteries carry real liability.',
    handling: [
      'Establish chemistry (lithium-ion versus lithium metal), watt-hour rating, and cell count first.',
      'The three configurations — loose, packed with, installed in — have materially different rules.',
      'State of charge is restricted for air transport of standalone lithium-ion batteries.',
      'Packaging, marking, and labelling requirements are prescriptive and must be met exactly.',
      'A dangerous goods declaration and, in many cases, trained-shipper certification are required.',
      'Damaged, defective, or recalled batteries are subject to far stricter rules and are often prohibited by air.',
    ],
    regulatory:
      'Lithium batteries are regulated internationally under the IATA Dangerous Goods Regulations for air and the IMDG Code for sea, with requirements varying by chemistry, energy rating, and packing configuration. Singapore applies these regimes; separately, waste and used batteries can bring NEA considerations. This is a category where the shipping decision has to be made by someone who has seen the actual specification.',
    authority: 'IATA DGR / IMDG Code; NEA for waste batteries',
    profile: 'Any size; the specification, not the weight, governs',
    prepare: [
      'Battery chemistry and whether rechargeable',
      'Watt-hour rating per cell and per battery',
      'Number of cells and batteries per package',
      'Configuration: loose, packed with equipment, or installed in equipment',
      'UN number and the manufacturer\'s UN 38.3 test summary',
      'Safety data sheet',
      'Whether any units are used, damaged, or being returned',
    ],
    faqs: [
      {
        q: 'My product just has a battery inside. Is that still dangerous goods?',
        a: 'Yes, though the requirements for batteries installed in equipment are less onerous than for loose batteries. It still needs to be declared correctly, packed to the applicable standard, and marked. Not mentioning it is the one option that reliably causes problems.',
      },
      {
        q: 'What is a UN 38.3 test summary and do I need one?',
        a: 'It is the manufacturer\'s documentation confirming the battery has passed the required transport safety tests. Shippers are generally required to make it available. Ask your supplier for it early — chasing it later stalls shipments.',
      },
      {
        q: 'Can I ship used or faulty batteries back to the supplier?',
        a: 'Damaged, defective, or recalled lithium batteries are subject to much stricter rules and are frequently forbidden for air transport altogether. Tell us the actual condition — this is not a case where an optimistic description helps.',
      },
    ],
    countryLinks: ['china-to-singapore', 'vietnam-to-singapore', 'south-korea-to-singapore'],
    relatedServices: ['special-cargo-singapore', 'customs-support-singapore'],
    guideLinks: ['dangerous-goods-into-singapore'],
  },
  {
    slug: 'drones-and-uav',
    name: 'drones and unmanned aircraft',
    titleName: 'Drones & UAV Equipment',
    group: 'Regulated goods',
    summary: 'Batteries, radio transmitters, and aviation regulation stacked into one small box.',
    intro:
      'A drone manages to trigger three separate regulatory concerns at once: it contains lithium batteries, it transmits on radio frequencies, and it is an unmanned aircraft. Depending on weight and intended use, importing or operating one in Singapore can involve CAAS requirements alongside the ordinary import process — and the operating rules here are stricter than in many other countries.',
    handling: [
      'Batteries usually need to be removed and packed according to lithium battery rules.',
      'Radio transmitters and video links may fall under IMDA equipment requirements.',
      'Gimbals and camera assemblies need transit locks or foam support.',
      'Carbon fibre arms and propellers are brittle; original manufacturer cases are worth keeping.',
      'Ground stations and controllers usually contain their own batteries.',
      'Commercial operation in Singapore has its own permit regime, separate from import.',
    ],
    regulatory:
      'Unmanned aircraft in Singapore are regulated by the Civil Aviation Authority of Singapore, with requirements that can include registration, operator permits, and activity permits depending on the aircraft\'s weight and how it is used. Import of the equipment, radio-frequency compliance, and permission to fly are three separate questions. Confirm all three before purchasing, particularly for commercial use.',
    authority: 'CAAS for unmanned aircraft; IMDA for radio equipment; battery transport rules',
    profile: 'Small and light; regulation is the constraint',
    prepare: [
      'Drone make, model, and total take-off weight',
      'Battery chemistry, watt-hour rating, and quantity',
      'Radio and video transmission frequencies and power',
      'Intended use: recreational, commercial, or survey',
      'Whether the aircraft will be registered in Singapore',
      'Commercial invoice and specification sheet',
    ],
    faqs: [
      {
        q: 'Can I just buy a drone overseas and bring it in?',
        a: 'Import and operation are separate questions. Even where import is straightforward, flying it in Singapore may require registration and permits depending on weight and use. Check the operating rules before you buy, because they are stricter here than in many countries.',
      },
      {
        q: 'How should the batteries be shipped?',
        a: 'Usually removed from the aircraft and packed under lithium battery rules, with quantity limits per package. The batteries frequently constrain the shipment more than the drone itself does.',
      },
      {
        q: 'Does the video transmitter matter?',
        a: 'It can. Radio-frequency equipment may fall under IMDA requirements, and frequencies permitted elsewhere are not automatically permitted in Singapore. Send the specification sheet with your enquiry.',
      },
    ],
    countryLinks: ['china-to-singapore', 'usa-to-singapore'],
    relatedServices: ['customs-support-singapore', 'special-cargo-singapore'],
    guideLinks: ['controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'prototypes-and-samples',
    name: 'prototypes and product samples',
    titleName: 'Prototypes & Product Samples',
    group: 'Technology & instruments',
    summary: 'One-of-a-kind items with no replacement, no catalogue price, and usually a deadline.',
    intro:
      'Prototypes are the hardest thing to value and the easiest thing to lose. There is one of them, it has no market price, it usually needs to be somewhere by a specific date, and the person shipping it has often never made an international shipment before. The two questions that matter are how to declare its value honestly and whether it is going out and coming back.',
    handling: [
      'A prototype is irreplaceable — specify crating and handling as if it cannot be remade, because it cannot.',
      'Photograph and document condition before packing.',
      'Decide early whether this is a permanent import or a temporary movement that returns.',
      'Value must be declared honestly even without a sale price — cost of production is a defensible basis.',
      'Prototypes containing batteries, wireless modules, or chemicals bring those rules along with them.',
      'Consider hand-carry with proper documentation for very small, very critical items.',
    ],
    regulatory:
      'Samples and prototypes are declared like any other goods, and the absence of a commercial sale does not remove the need to declare a value. Where goods are entering Singapore temporarily — for testing, demonstration, or an exhibition — temporary import arrangements including ATA Carnet may be available and are usually better than importing and re-exporting permanently. That decision has to be made before the goods arrive.',
    authority: 'Singapore Customs; component-specific authorities may apply',
    profile: 'Small to medium; value and irreplaceability drive the plan',
    prepare: [
      'Description of what the item is and what it does',
      'Basis for the declared value (cost of production is acceptable)',
      'Whether the item is staying in Singapore or returning',
      'Any batteries, wireless modules, or chemicals included',
      'Required arrival date and what happens if it slips',
      'Photographs and condition record before packing',
    ],
    faqs: [
      {
        q: 'What value do I declare for a prototype with no sale price?',
        a: 'A defensible basis such as cost of production or a documented replacement cost. Declaring a nominal or zero value on a valuable item is a false declaration and creates far more risk than the GST it appears to avoid.',
      },
      {
        q: 'The prototype is going to a demo and coming back. What is the best route?',
        a: 'Look at temporary import arrangements, including ATA Carnet, before shipping. Importing permanently and then re-exporting is possible but usually more expensive and more complicated than doing it properly from the start.',
      },
      {
        q: 'Should I hand-carry it instead?',
        a: 'Sometimes that is genuinely the right answer for small, critical items — but hand-carried goods still need to be declared, and commercial goods in luggage are a common cause of trouble at the airport. Talk to us first and we will tell you honestly which route fits.',
      },
    ],
    countryLinks: ['china-to-singapore', 'usa-to-singapore', 'hong-kong-to-singapore'],
    relatedServices: ['fragile-equipment-shipping-singapore', 'customs-support-singapore'],
    guideLinks: ['temporary-import-into-singapore', 'ata-carnet-singapore'],
  },

  // --- Events & production -------------------------------------------------
  {
    slug: 'exhibition-booth-materials',
    name: 'exhibition booth and display materials',
    titleName: 'Exhibition Booth & Display Materials',
    group: 'Events & production',
    summary: 'Stands, panels, and display units moving to a fixed event date with no possibility of arriving late.',
    intro:
      'Exhibition cargo is defined by a date that cannot move. The booth either is on site for build-up or the stand does not happen, and no amount of goodwill afterwards fixes it. That single constraint changes every decision: routing is chosen for reliability rather than cost, buffer is built in deliberately, and the venue\'s own logistics rules — which are strict and non-negotiable — govern the last mile.',
    handling: [
      'Work backwards from the venue\'s build-up window, not forwards from the ship date.',
      'Venues have appointed handling agents, booked delivery slots, and specific marking requirements.',
      'Crates must be labelled with the show name, hall, stand number, and exhibitor.',
      'Decide early whether the stand is being imported permanently or moving on to another show.',
      'Reusable stand systems are strong candidates for temporary import arrangements.',
      'Plan the return or disposal of crates before the show, because storage during it is rarely available.',
    ],
    regulatory:
      'Goods imported for an exhibition and re-exported afterwards may be eligible for temporary import treatment, including under an ATA Carnet, which avoids paying import GST on goods that are only visiting. Consumables, giveaways, and items being sold at the show are treated differently from the stand itself and generally cannot ride on the same arrangement.',
    authority: 'Singapore Customs; venue and organiser logistics rules',
    profile: 'Bulky, moderate weight, absolutely date-critical',
    prepare: [
      'Show name, venue, hall, and stand number',
      'Build-up start date and the organiser\'s delivery window',
      'Crate list with dimensions and weights',
      'Whether the stand returns after the show',
      'Separate list of consumables, giveaways, and goods for sale',
      'Appointed venue handling agent details if the organiser has named one',
    ],
    faqs: [
      {
        q: 'How early should exhibition cargo arrive in Singapore?',
        a: 'Earlier than feels necessary. We plan for the cargo to clear customs and be available several days before the build-up window opens, because the one thing you cannot recover from is arriving after the hall closes to deliveries.',
      },
      {
        q: 'Do I have to use the organiser\'s appointed freight agent?',
        a: 'Many shows appoint an official on-site handling agent for movements inside the hall, and their role is usually mandatory for the final leg. That does not always mean they must handle the international freight. Check the exhibitor manual and tell us what it says.',
      },
      {
        q: 'Can I avoid paying GST on a stand that is leaving again?',
        a: 'Possibly, via temporary import arrangements or an ATA Carnet. It must be set up before the goods arrive. Give-aways and goods being sold at the show generally cannot be included and need separate treatment.',
      },
    ],
    countryLinks: ['china-to-singapore', 'uae-to-singapore', 'germany-to-singapore'],
    relatedServices: ['exhibition-logistics-singapore', 'special-cargo-singapore'],
    guideLinks: ['ata-carnet-singapore', 'temporary-import-into-singapore'],
  },
  {
    slug: 'stage-and-lighting-equipment',
    name: 'stage, lighting, and production equipment',
    titleName: 'Stage, Lighting & Production Equipment',
    group: 'Events & production',
    summary: 'Touring production gear on a schedule, usually arriving and leaving within days.',
    intro:
      'Touring production equipment moves on the tightest schedules in freight. The gear arrives, works for a night or a week, and leaves — often to the next city on a fixed date. The plan has to cover the outbound as carefully as the inbound, and the temporary import treatment matters more here than almost anywhere else because the equipment genuinely is only visiting.',
    handling: [
      'Flight cases are designed for touring but still need proper securing in the container or ULD.',
      'Weight and dimension lists must be accurate — venues plan rigging capacity from them.',
      'Moving lights, LED walls, and control systems are shock-sensitive despite the road cases.',
      'Hazers, pyrotechnics, and gas systems have their own rules and often cannot travel with the rest.',
      'Batteries in wireless systems, intercoms, and follow-spot equipment need declaring.',
      'Plan the outbound movement before arrival — the get-out window is usually hours, not days.',
    ],
    regulatory:
      'Professional equipment entering Singapore temporarily for a production is a classic ATA Carnet use case, and Carnets are widely used in touring. Pyrotechnics, compressed gases, and certain effects are controlled goods with separate approval requirements that cannot be handled under the same arrangement. Wireless microphones and intercom systems may need frequency clearance.',
    authority: 'Singapore Customs; SCDF and SPF for pyrotechnics; IMDA for wireless systems',
    profile: 'High volume in flight cases; date-critical in both directions',
    prepare: [
      'Full equipment manifest with case-by-case weights and dimensions',
      'Venue, dates, and get-in/get-out windows',
      'Whether an ATA Carnet is already in place',
      'Any pyrotechnics, gases, or hazardous effects (listed separately)',
      'Wireless equipment frequencies',
      'Onward destination after Singapore',
    ],
    faqs: [
      {
        q: 'Do we need an ATA Carnet for touring equipment?',
        a: 'For professional equipment coming in and leaving again it is usually the cleanest route, and most touring operations already work this way. It has to be issued before departure in the country of origin. If you do not have one, tell us early and we will look at the alternatives.',
      },
      {
        q: 'Can pyrotechnics travel with the rest of the production gear?',
        a: 'No. Pyrotechnics and compressed gases are controlled and need their own approvals and handling, typically involving SCDF and the Singapore Police Force. They must be planned as a separate workstream well in advance.',
      },
      {
        q: 'Our get-out is at 2am and we fly the next day. Is that workable?',
        a: 'It happens regularly, but only if the outbound is planned before the equipment arrives. Give us the full schedule at enquiry stage — the return leg is the part that gets left too late.',
      },
    ],
    countryLinks: ['australia-to-singapore', 'united-kingdom-to-singapore', 'china-to-singapore'],
    relatedServices: ['exhibition-logistics-singapore', 'fragile-equipment-shipping-singapore'],
    guideLinks: ['ata-carnet-singapore', 'temporary-import-into-singapore'],
  },
  {
    slug: 'broadcast-and-camera-equipment',
    name: 'broadcast and camera equipment',
    titleName: 'Broadcast & Camera Equipment',
    group: 'Events & production',
    summary: 'Cameras, lenses, and broadcast kit — high value, battery-heavy, and usually on a shoot date.',
    intro:
      'Camera and broadcast equipment is high-value, densely packed, and full of batteries, which makes it one of the more scrutinised categories at both ends of a journey. Crews often travel with it, which introduces a different problem: professional equipment carried as accompanied baggage still needs to be declared, and a Carnet is usually the difference between a smooth arrival and a long conversation.',
    handling: [
      'Lenses and sensors are shock-sensitive; original foam inserts matter.',
      'Batteries are the most common complication — count them and get the watt-hour ratings.',
      'Humidity is a real risk in Singapore: condensation on optics needs managing on arrival.',
      'An itemised manifest with serial numbers is essential for temporary import and for insurance.',
      'Drones and gimbals within a camera package bring their own requirements.',
      'Plan for the return movement at the same time as the inbound.',
    ],
    regulatory:
      'Professional equipment brought into Singapore temporarily for a production is well suited to an ATA Carnet, which also covers accompanied baggage. Wireless video links, radio microphones, and drones within the package may bring IMDA or CAAS requirements. Equipment being brought in to sell rather than use is a normal commercial import and cannot use temporary arrangements.',
    authority: 'Singapore Customs; IMDA for wireless; CAAS for drones',
    profile: 'Moderate volume, very high value per case',
    prepare: [
      'Itemised equipment list with serial numbers and values',
      'Battery count, chemistry, and watt-hour ratings',
      'Whether equipment is accompanied or shipped separately',
      'ATA Carnet status',
      'Shoot dates and departure date',
      'Any drones, wireless video, or radio microphones listed separately',
    ],
    faqs: [
      {
        q: 'Can the crew just carry the equipment as baggage?',
        a: 'They can travel with it, but professional equipment is still goods and still needs declaring. An ATA Carnet covers accompanied professional equipment and makes the arrival straightforward. Without one, expect questions and possibly a deposit.',
      },
      {
        q: 'How many camera batteries can we bring?',
        a: 'There are limits per passenger and per package depending on watt-hour rating, and spare batteries have stricter rules than installed ones. Give us the actual count and ratings and we will tell you what is workable.',
      },
      {
        q: 'What about condensation when equipment arrives in Singapore?',
        a: 'It is a genuine issue. Equipment moved from an air-conditioned aircraft hold into Singapore\'s humidity will condense. Let cases acclimatise before opening them, and plan a little time for it in the schedule rather than opening on the loading bay.',
      },
    ],
    countryLinks: ['united-kingdom-to-singapore', 'usa-to-singapore', 'japan-to-singapore'],
    relatedServices: ['fragile-equipment-shipping-singapore', 'exhibition-logistics-singapore'],
    guideLinks: ['ata-carnet-singapore'],
  },
  {
    slug: 'musical-instruments',
    name: 'musical instruments',
    titleName: 'Musical Instruments',
    group: 'Events & production',
    summary: 'Instruments where climate, handling, and sometimes CITES-listed materials all apply at once.',
    intro:
      'Instruments are simultaneously fragile, valuable, climate-sensitive, and occasionally made of materials that are internationally controlled. Rosewood, ebony, ivory, and tortoiseshell appear in older instruments and are subject to CITES rules that apply regardless of the instrument\'s age or the owner\'s intent. Singapore\'s humidity then does its own work on anything wooden that arrives unacclimatised.',
    handling: [
      'Wooden instruments need slow acclimatisation to Singapore humidity — do not unpack immediately.',
      'Strings should be slackened on stringed instruments before shipping.',
      'Pianos and large instruments need specialist handling and climate consideration at both ends.',
      'Flight cases designed for touring are not always adequate for freight handling.',
      'Check for CITES-listed materials: certain rosewoods, ebony, ivory, and shell.',
      'Insure at replacement value, which for older instruments can far exceed purchase price.',
    ],
    regulatory:
      'Instruments containing CITES-listed species — including some rosewoods, ivory, and tortoiseshell — require permits to move internationally, and this catches vintage instruments in particular. In Singapore, CITES matters are handled by the National Parks Board. Instruments touring and returning are good candidates for ATA Carnet treatment.',
    authority: 'NParks for CITES materials; Singapore Customs for declaration',
    profile: 'Small to very large; climate and materials drive the plan',
    prepare: [
      'Instrument type, maker, age, and materials',
      'Whether any CITES-listed materials are present',
      'Replacement value for insurance',
      'Whether the instrument is staying or touring onward',
      'Case and packing details',
      'Any existing CITES documentation',
    ],
    faqs: [
      {
        q: 'Does my vintage guitar need a CITES permit?',
        a: 'It might, if it contains rosewood, ivory, or tortoiseshell — and many older instruments do. The rules apply to the material, not the instrument\'s age or your intentions. Check before shipping; instruments have been detained over exactly this.',
      },
      {
        q: 'How do I stop a wooden instrument cracking in Singapore?',
        a: 'Let it acclimatise slowly in its case before opening, and consider humidity control at the destination. The shock of moving from a dry climate into Singapore\'s humidity does more damage than the journey itself.',
      },
      {
        q: 'Can a piano be shipped?',
        a: 'Yes, but it needs specialist handling, appropriate crating, and a plan for both the transit and the acclimatisation and tuning afterwards. It is a coordination job, not a freight booking.',
      },
    ],
    countryLinks: ['japan-to-singapore', 'germany-to-singapore', 'united-kingdom-to-singapore'],
    relatedServices: ['fragile-equipment-shipping-singapore', 'special-cargo-singapore'],
    guideLinks: ['controlled-goods-and-competent-authorities'],
  },

  // --- Interiors & materials -----------------------------------------------
  {
    slug: 'art-and-sculptures',
    name: 'art and sculptures',
    titleName: 'Art & Sculptures',
    group: 'Interiors & materials',
    summary: 'Works where condition, provenance, and value documentation matter as much as the transport.',
    intro:
      'Art shipping is a documentation discipline that happens to involve moving something. Condition reporting, provenance, accurate valuation, and — for older works or those containing organic materials — CITES compliance all sit alongside the physical problem of getting a fragile, irreplaceable object across the world intact. Singapore\'s climate adds a further consideration for works on paper and canvas.',
    handling: [
      'Condition report and photograph every work before packing, and again on arrival.',
      'Purpose-built crates with appropriate internal support, not general-purpose boxes.',
      'Works on paper and canvas need humidity protection in Singapore\'s climate.',
      'Sculptures need mounts that support the actual load path, not just the outline.',
      'Insurance should be arranged on agreed value, confirmed before departure.',
      'Consider whether the work is entering permanently or for an exhibition and returning.',
    ],
    regulatory:
      'Artwork is subject to normal import declaration and GST on the CIF value. Works containing ivory, tortoiseshell, certain woods, or other protected species can require CITES permits. Antiquities and cultural property may attract additional provenance scrutiny. Art entering for an exhibition and leaving again may be suited to temporary import arrangements.',
    authority: 'Singapore Customs; NParks for CITES materials',
    profile: 'Highly variable; value and fragility drive the plan',
    prepare: [
      'Artist, title, medium, dimensions, and year',
      'Provenance documentation',
      'Insurance/agreed value and basis for it',
      'Any protected materials in the work or frame',
      'Whether the work is a permanent import or on loan/exhibition',
      'Existing condition report and photographs',
    ],
    faqs: [
      {
        q: 'Is GST payable on imported artwork?',
        a: 'Import GST generally applies to goods imported into Singapore, calculated on the CIF value plus applicable duties. Specific schemes and arrangements exist in particular circumstances, including for works entering temporarily. Tell us the context and we will help you identify what applies.',
      },
      {
        q: 'What documentation should travel with a work?',
        a: 'A condition report with photographs, provenance documentation, a clear description of medium and materials, and the valuation basis. This protects you in a damage claim and supports the declaration at the same time.',
      },
      {
        q: 'Are there restrictions on materials in artwork?',
        a: 'Yes. Ivory, tortoiseshell, certain hardwoods, and some animal products are CITES-controlled and need permits regardless of the work\'s age or artistic significance. Describe materials precisely rather than generically.',
      },
    ],
    countryLinks: ['hong-kong-to-singapore', 'united-kingdom-to-singapore', 'indonesia-to-singapore', 'india-to-singapore'],
    relatedServices: ['fragile-equipment-shipping-singapore', 'special-cargo-singapore'],
    guideLinks: ['temporary-import-into-singapore', 'controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'furniture-and-fit-out',
    name: 'furniture and fit-out materials',
    titleName: 'Furniture & Fit-Out Materials',
    group: 'Interiors & materials',
    summary: 'Project furniture and interior materials where the delivery date is tied to a site programme.',
    intro:
      'Furniture shipments are usually part of a fit-out programme, which means the delivery date is fixed by a construction schedule that has already slipped twice. The freight is straightforward; what needs managing is packing quality over a long sea passage, timber and wood-packaging compliance, and the fact that a fit-out site is a terrible place to receive goods without a plan.',
    handling: [
      'Manufacturer packaging is often designed for showroom delivery, not for containers. Specify transport packaging.',
      'Timber products may need phytosanitary documentation; wood packaging generally needs ISPM 15 treatment and marking.',
      'Upholstery and fabric need moisture protection — container condensation ruins soft furnishings.',
      'Site deliveries need a receiving plan: who signs, where it goes, whether there is a lift.',
      'Sequence delivery against the fit-out programme rather than delivering everything at once.',
      'Confirm whether the site can store goods or whether interim warehousing is needed.',
    ],
    regulatory:
      'Furniture is generally not a controlled good, but timber and plant-based materials can attract phytosanitary requirements from NParks, and wood packaging material needs to meet ISPM 15 standards. Upholstered goods intended for commercial premises may need to meet fire safety requirements applicable to the building rather than to the import.',
    authority: 'Singapore Customs; NParks for plant/timber material',
    profile: 'High volume, moderate weight, packing quality critical',
    prepare: [
      'Item list with dimensions, weights, and packing type',
      'Material composition, especially any solid timber or rattan',
      'ISPM 15 status of wooden packing and pallets',
      'Site delivery date, access, and receiving arrangements',
      'Whether interim storage is needed',
      'Commercial invoice and packing list',
    ],
    faqs: [
      {
        q: 'Why does furniture arrive damaged so often?',
        a: 'Because manufacturers frequently pack for local delivery, not for a month at sea with multiple container handlings. Specify transport-grade packing in the purchase order and, for high-value pieces, have it crated properly. It is far cheaper than replacing an item on a live fit-out.',
      },
      {
        q: 'What is ISPM 15 and does it apply to me?',
        a: 'It is the international standard for treating wood packaging material to prevent pest transfer. Crates and pallets generally need to be treated and marked. Untreated wood packaging is a real and avoidable cause of held shipments — ask your supplier to confirm before loading.',
      },
      {
        q: 'Can you deliver directly to a construction site?',
        a: 'Yes, but it needs planning: access, lift availability, a named receiver, and a delivery window that fits the site programme. We would also usually recommend a storage option, because fit-out dates move and goods on a wet site are goods at risk.',
      },
    ],
    countryLinks: ['china-to-singapore', 'italy-to-singapore', 'indonesia-to-singapore', 'malaysia-to-singapore'],
    relatedServices: ['special-cargo-singapore', 'oversized-cargo-singapore'],
    guideLinks: ['wood-packaging-ispm-15'],
  },
  {
    slug: 'marble-and-stone',
    name: 'marble and natural stone',
    titleName: 'Marble & Natural Stone',
    group: 'Interiors & materials',
    summary: 'Slabs and blocks where container payload, not volume, decides how much you can ship.',
    intro:
      'Stone is the one category where the container fills up by weight long before it fills up by space, and that single fact governs the whole shipment. A 20-foot container reaches its payload limit with a fraction of its volume used. The second governing fact is that slabs break when bracing is inadequate, and a broken slab from a specific block cannot be replaced with a matching one.',
    handling: [
      'Plan by tonnage first. Volume is almost never the binding constraint.',
      'A-frames or bundles with proper strapping and edge protection are essential.',
      'Slabs from the same block should be kept together and sequenced — matching veins cannot be replaced.',
      'Confirm the destination can unload heavy bundles; this usually needs a forklift with adequate capacity.',
      'Timber A-frames need to meet ISPM 15 wood packaging requirements.',
      'Photograph loading at origin — it is the only evidence if bracing was inadequate.',
    ],
    regulatory:
      'Natural stone is generally not a controlled good in Singapore. The main compliance points are accurate declaration, wood packaging compliance for the frames, and — for very heavy consignments — road transport weight limits on the Singapore leg. Confirm axle and gross vehicle weight limits before assuming a single delivery is possible.',
    authority: 'Singapore Customs; road transport weight limits apply on delivery',
    profile: 'Very heavy; 20 ft containers typically weight-limited',
    prepare: [
      'Slab dimensions, thickness, and count',
      'Total tonnage',
      'Block sequencing requirements if vein-matching matters',
      'Bracing and A-frame specification',
      'Destination unloading capability (forklift capacity)',
      'ISPM 15 status of timber frames',
    ],
    faqs: [
      {
        q: 'How many slabs fit in a container?',
        a: 'Fewer than the volume suggests — the payload limit binds first. Give us slab dimensions, thickness, and total tonnage and we will calculate the container requirement on weight, which is the number that actually matters.',
      },
      {
        q: 'How do I stop slabs cracking in transit?',
        a: 'Adequate A-frame bracing, edge protection, and strapping, plus photographs of the loaded container before the doors close. Most breakage traces back to loading, not to the sea passage.',
      },
      {
        q: 'Does vein matching survive shipping?',
        a: 'Only if the slabs are kept in block sequence and labelled. Tell your supplier explicitly that sequencing matters and have it recorded on the packing list — reconstructing the order afterwards from unlabelled slabs is close to impossible.',
      },
    ],
    countryLinks: ['italy-to-singapore', 'turkey-to-singapore', 'india-to-singapore', 'spain-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'special-cargo-singapore'],
    guideLinks: ['wood-packaging-ispm-15'],
  },
  {
    slug: 'retail-fixtures-and-shopfitting',
    name: 'retail fixtures and shopfitting',
    titleName: 'Retail Fixtures & Shopfitting',
    group: 'Interiors & materials',
    summary: 'Store fit-out materials tied to an opening date and a mall\'s delivery rules.',
    intro:
      'Retail fit-out shipments combine a fixed opening date with the most restrictive delivery environments in Singapore. Shopping malls have night-only delivery windows, service lift bookings, loading bay slots, and contractor access rules, and none of them flex because a container was late. The freight plan and the mall\'s logistics rules have to be designed together.',
    handling: [
      'Get the mall\'s delivery rules early: hours, lift dimensions, bay booking, contractor passes.',
      'Most mall fit-out deliveries happen overnight, which changes labour and vehicle planning.',
      'Service lift dimensions are frequently the binding constraint on fixture size.',
      'Glass, mirror, and display cases need crating designed for handling, not just transport.',
      'Sequence deliveries to the fit-out programme — malls rarely permit on-site storage.',
      'Plan packaging removal; disposal on site is often prohibited or charged.',
    ],
    regulatory:
      'Fixtures and fittings are generally not controlled goods. Wood packaging must meet ISPM 15 requirements. Electrical fittings and lighting intended for installation should be confirmed as suitable for Singapore\'s 230V/50Hz supply and, where relevant, meet applicable safety requirements.',
    authority: 'Singapore Customs; mall and building management rules govern delivery',
    profile: 'Bulky and fragile mix; access-constrained delivery',
    prepare: [
      'Store opening date and fit-out programme',
      'Mall delivery rules, lift dimensions, and bay booking process',
      'Fixture list with crated dimensions and weights',
      'Electrical specification for lighting and powered fixtures',
      'Whether overnight delivery is required',
      'Packaging disposal arrangements',
    ],
    faqs: [
      {
        q: 'Why do mall deliveries have to happen at night?',
        a: 'Most Singapore malls restrict contractor and goods deliveries to overnight windows to keep trading areas clear. It is not negotiable, and it means labour, vehicle, and lift bookings all have to be arranged around it.',
      },
      {
        q: 'What is the most common problem in retail fit-out shipping?',
        a: 'A fixture that does not fit the service lift. It is worth measuring the lift before finalising fixture dimensions with your fabricator — reworking a display case in Singapore costs more than designing it to fit in the first place.',
      },
      {
        q: 'Can you store goods until the fit-out is ready?',
        a: 'Yes, and for retail projects we usually recommend it. Opening dates move, and goods sitting in a mall corridor are a problem for everyone. Interim storage with a scheduled release is normally the cheaper path.',
      },
    ],
    countryLinks: ['china-to-singapore', 'malaysia-to-singapore', 'italy-to-singapore'],
    relatedServices: ['special-cargo-singapore', 'exhibition-logistics-singapore'],
    guideLinks: ['wood-packaging-ispm-15'],
  },
  {
    slug: 'commercial-kitchen-equipment',
    name: 'commercial kitchen equipment',
    titleName: 'Commercial Kitchen Equipment',
    group: 'Interiors & materials',
    summary: 'F&B equipment where gas, electrical, and refrigerant specifications matter before the freight does.',
    intro:
      'Commercial kitchen equipment fails on specification far more often than on transport. Gas type, electrical supply, and refrigerant all differ between markets, and equipment that works perfectly in Europe or the United States may be unusable in Singapore without modification. That check belongs before the purchase order, not after the container arrives.',
    handling: [
      'Confirm electrical rating against Singapore\'s 230V/50Hz supply before buying.',
      'Gas equipment must be compatible with the gas type available at the premises.',
      'Refrigeration units contain refrigerant gases, which affects handling and may bring NEA requirements.',
      'Stainless steel finishes scratch easily; protective film should stay on until installation.',
      'Heavy items like combi ovens and cold rooms need lift and access planning.',
      'Used equipment that has been in food contact may need cleaning certification.',
    ],
    regulatory:
      'Kitchen equipment itself is generally not controlled, but refrigerants fall under NEA controls on ozone-depleting substances and certain hydrofluorocarbons, and gas appliances must meet installation requirements in Singapore. Equipment used for food preparation in a licensed premises has to satisfy SFA requirements for the premises, which is separate from the import.',
    authority: 'Singapore Customs; NEA for refrigerants; SFA requirements apply to the premises',
    profile: 'Heavy and bulky; specification compatibility is the risk',
    prepare: [
      'Equipment list with models and electrical/gas specifications',
      'Refrigerant type for any refrigeration equipment',
      'Premises gas type and electrical supply',
      'Crated dimensions and weights',
      'Kitchen access route: lift, door widths, stairs',
      'New or used, and cleaning status if used',
    ],
    faqs: [
      {
        q: 'Will American kitchen equipment work in Singapore?',
        a: 'Often not without modification. US equipment is typically 110V/60Hz and Singapore runs 230V/50Hz. Gas specifications differ too. Check the rating plate before you buy — this is the single most common and most expensive mistake in this category.',
      },
      {
        q: 'Does refrigerant type matter for import?',
        a: 'It can. Certain refrigerants are controlled under NEA rules, and some older refrigerants are restricted. Get the refrigerant type from the specification sheet before shipping.',
      },
      {
        q: 'Can I import used restaurant equipment?',
        a: 'Yes, but expect closer scrutiny on description and valuation, and be aware that used food-contact equipment may need cleaning and, in some cases, certification. Confirm condition and cleaning status with the seller.',
      },
    ],
    countryLinks: ['thailand-to-singapore', 'italy-to-singapore', 'china-to-singapore', 'malaysia-to-singapore'],
    relatedServices: ['special-cargo-singapore', 'oversized-cargo-singapore'],
    guideLinks: ['controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'gym-and-fitness-equipment',
    name: 'gym and fitness equipment',
    titleName: 'Gym & Fitness Equipment',
    group: 'Interiors & materials',
    summary: 'Heavy, bulky equipment going into buildings with lifts that were not designed for it.',
    intro:
      'Gym equipment is a delivery problem disguised as a freight problem. Multi-station rigs, plate-loaded machines, and treadmills are heavy and bulky, and the destination is usually an upper floor of a commercial building or condominium with a service lift, a weight limit, and a management office with opinions. The freight into Singapore is routine; getting the equipment into the room is the job.',
    handling: [
      'Confirm service lift dimensions and weight limit before ordering large rigs.',
      'Multi-station rigs ship in many pieces and need assembly planning on site.',
      'Rubber flooring rolls are extremely heavy for their size and awkward to manoeuvre.',
      'Treadmills and powered equipment contain electronics and often batteries.',
      'Floor loading matters in upper-floor gyms — confirm against the building specification.',
      'Building management usually requires protection of lifts and corridors during delivery.',
    ],
    regulatory:
      'Fitness equipment is generally not controlled. Powered equipment should be checked against Singapore\'s 230V/50Hz supply, and consumer goods intended for sale may fall under safety registration requirements. Rubber flooring and mats are ordinary imports but heavy enough to affect container planning.',
    authority: 'Singapore Customs; safety registration may apply to consumer goods',
    profile: 'Heavy and bulky; building access is the constraint',
    prepare: [
      'Equipment list with crated dimensions and weights',
      'Destination floor level and service lift dimensions/capacity',
      'Whether assembly on site is required',
      'Electrical specification for powered equipment',
      'Building management delivery rules and protection requirements',
      'Delivery date and any facility opening deadline',
    ],
    faqs: [
      {
        q: 'Will a rig fit in a standard service lift?',
        a: 'Often the components will, but the longest pieces are the problem — uprights and beams can exceed lift diagonal. Measure the lift, including its diagonal, before finalising the equipment order.',
      },
      {
        q: 'How heavy is rubber gym flooring?',
        a: 'Much heavier than people expect — a roll can exceed 60 kg, and a full floor is a container in its own right. Plan the flooring as its own shipment and confirm the lift and floor loading can take it.',
      },
      {
        q: 'Can you deliver and assemble?',
        a: 'We coordinate delivery to the room and can arrange installation support. Tell us whether assembly is included in your equipment purchase — the split of responsibility between supplier and logistics is where these projects usually go wrong.',
      },
    ],
    countryLinks: ['china-to-singapore', 'usa-to-singapore', 'italy-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'special-cargo-singapore'],
  },

  // --- Vehicles & transport ------------------------------------------------
  {
    slug: 'vehicles-and-parts',
    name: 'vehicles and vehicle parts',
    titleName: 'Vehicles & Vehicle Parts',
    group: 'Vehicles & transport',
    summary: 'One of only four dutiable categories in Singapore, and the most heavily regulated import there is.',
    intro:
      'Importing a motor vehicle into Singapore is unlike importing anything else. Motor vehicles are one of the four categories that attract customs duty, they are subject to registration requirements, emissions and technical standards, and the Certificate of Entitlement system — and the cost of the vehicle is frequently the smallest number in the calculation. Parts are far simpler, but even they can attract requirements depending on what they are.',
    handling: [
      'Vehicles must be drained of fuel to a minimum level and batteries usually disconnected for shipping.',
      'Roll-on/roll-off and container shipping have different cost, protection, and timing profiles.',
      'Condition photographs at loading are essential; vehicle damage claims are otherwise unwinnable.',
      'Parts containing airbags, pyrotechnic pretensioners, or fluids are dangerous goods.',
      'Batteries, including EV traction batteries, are heavily regulated for transport.',
      'Confirm the registration and technical pathway in Singapore before shipping the vehicle.',
    ],
    regulatory:
      'Motor vehicles are dutiable in Singapore and additionally subject to LTA registration requirements, technical and emissions standards, and the vehicle quota system. Whether a particular vehicle can be registered here at all depends on its age, type, and compliance, and the answer needs to come before the shipment. Vehicle parts are generally ordinary imports, though airbags, pretensioners, and batteries have dangerous-goods implications.',
    authority: 'LTA for registration; Singapore Customs for duty and GST',
    profile: 'Duty and registration costs typically dominate the freight cost',
    prepare: [
      'Vehicle make, model, year, VIN, and engine capacity',
      'Whether the vehicle can be registered in Singapore (confirm with LTA first)',
      'Intended use: registration, racing, display, or parts',
      'Shipping method preference (RoRo or container)',
      'Condition photographs and existing damage record',
      'For parts: whether any contain airbags, pretensioners, fluids, or batteries',
    ],
    faqs: [
      {
        q: 'Can I import any car into Singapore?',
        a: 'No. Vehicles must meet Singapore\'s technical and emissions standards and be eligible for registration, and there are age restrictions on used vehicles. Confirm eligibility with LTA before you buy a vehicle overseas — this is not a question to resolve after it has shipped.',
      },
      {
        q: 'What does it actually cost to import a car?',
        a: 'Freight is typically a small part of it. Customs duty, GST, registration fees, the Additional Registration Fee, and a Certificate of Entitlement can together far exceed the vehicle\'s purchase price. Build a full landed cost before committing.',
      },
      {
        q: 'Are car parts easier to import than cars?',
        a: 'Considerably, in most cases. Ordinary parts are normal imports. The exceptions are airbags and seatbelt pretensioners, which are pyrotechnic devices and classified as dangerous goods, and batteries. Declare those accurately.',
      },
    ],
    countryLinks: ['japan-to-singapore', 'thailand-to-singapore', 'germany-to-singapore', 'united-kingdom-to-singapore'],
    relatedServices: ['customs-support-singapore', 'oversized-cargo-singapore'],
    guideLinks: ['customs-duty-in-singapore', 'controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'marine-and-boat-equipment',
    name: 'boats and marine equipment',
    titleName: 'Boats & Marine Equipment',
    group: 'Vehicles & transport',
    summary: 'Hulls, engines, and marine systems — oversized by default, with fuel and battery complications.',
    intro:
      'Boats are oversized cargo with an engine in them, which means they combine dimensional planning with fuel, battery, and sometimes gas-system considerations. A hull over about 2.4 metres wide will not fit a standard container, so the choice becomes flat rack, breakbulk, or shipping on its own cradle — and each of those requires the cradle and lifting arrangements to be sorted out well before the vessel is moved.',
    handling: [
      'Anything over roughly 2.4 m beam needs flat rack, breakbulk, or specialist handling.',
      'A properly engineered cradle is essential and must be built before shipping, not improvised.',
      'Fuel tanks drained, batteries disconnected, and gas systems isolated.',
      'Masts and rigging removed and packaged separately for sailing vessels.',
      'Shrink-wrapping protects gelcoat and fittings over a long sea passage.',
      'Confirm the lifting points and crane capacity available at both ends.',
    ],
    regulatory:
      'Vessels imported into Singapore are subject to normal import declaration and GST, with registration requirements handled by the Maritime and Port Authority where the vessel is to be registered here. Onboard fuel, gas systems, and batteries have transport implications. Marine engines and electronics are ordinary imports in most cases.',
    authority: 'Singapore Customs; MPA for vessel registration',
    profile: 'Oversized by default; cradle and lifting are the critical path',
    prepare: [
      'Vessel length, beam, height on cradle, and displacement',
      'Whether a shipping cradle exists or needs building',
      'Lifting points and crane requirements at both ends',
      'Fuel, battery, and gas system status',
      'Intended Singapore registration, if any',
      'Marina or yard destination and its access constraints',
    ],
    faqs: [
      {
        q: 'What is the largest boat that fits in a container?',
        a: 'Roughly 2.3 metres of beam and under about 5.9 metres of length for a 20-foot box, and less in practice once the cradle is accounted for. Beyond that you are looking at flat rack or breakbulk, which changes the cost structure entirely.',
      },
      {
        q: 'Who builds the cradle?',
        a: 'Usually a specialist at the origin, and it needs to be engineered for the hull rather than adapted from something else. A poor cradle causes hull damage that may not be visible until the boat is in the water. Budget for it properly.',
      },
      {
        q: 'Does the boat need to be empty?',
        a: 'Fuel drained to a minimum, batteries disconnected, gas bottles removed, and loose gear secured or removed. Personal effects left aboard complicate the declaration and are best shipped separately.',
      },
    ],
    countryLinks: ['australia-to-singapore', 'italy-to-singapore', 'united-kingdom-to-singapore'],
    relatedServices: ['oversized-cargo-singapore', 'special-cargo-singapore'],
  },
  {
    slug: 'aviation-parts',
    name: 'aircraft and aviation parts',
    titleName: 'Aircraft & Aviation Parts',
    group: 'Vehicles & transport',
    summary: 'Parts where the paperwork is the value — traceability documentation must travel with the goods.',
    intro:
      'In aviation, a part without its documentation is scrap. Airworthiness release certificates and traceability records are what make a component installable, and they have to travel with the shipment and match it exactly. Add to that the fact that many aviation components are dangerous goods — oxygen generators, hydraulic accumulators, batteries, pyrotechnic devices — and the category needs handling by people who know which is which.',
    handling: [
      'Airworthiness release documentation (such as FAA 8130-3 or EASA Form 1) must accompany the part.',
      'Part numbers and serial numbers on the documents must match the goods exactly.',
      'ESD-sensitive avionics need appropriate packaging maintained throughout.',
      'Oxygen generators, hydraulic accumulators, and pyrotechnic devices are dangerous goods.',
      'Aircraft on Ground shipments need a routing chosen for speed and reliability over cost.',
      'Large components such as engines and landing gear need purpose-built stands.',
    ],
    regulatory:
      'Aviation parts are subject to normal import declaration, and many are also subject to export control in the country of origin, particularly anything with a defence application. Dangerous-goods classification applies to a significant share of aviation components. Traceability documentation is a commercial and airworthiness requirement rather than a customs one, but it determines whether the part has any value on arrival.',
    authority: 'Singapore Customs; CAAS for airworthiness matters; origin-country export control',
    profile: 'Small to very large; documentation is the critical element',
    prepare: [
      'Part number, serial number, and description',
      'Airworthiness release documentation',
      'Whether the part is new, overhauled, repaired, or as-removed',
      'Dangerous goods classification if applicable',
      'Whether this is an AOG (aircraft on ground) shipment',
      'Origin-country export control status',
    ],
    faqs: [
      {
        q: 'What happens if the documentation does not match the part?',
        a: 'The part cannot be installed. A serial number mismatch between the release certificate and the component makes it unusable regardless of its physical condition. Verify the match before the part ships, not on receipt.',
      },
      {
        q: 'Which aviation parts are dangerous goods?',
        a: 'More than people expect — chemical oxygen generators, hydraulic accumulators, fire extinguishers, batteries, escape slides, and pyrotechnic devices among them. If a part contains stored energy or a chemical charge, assume it needs classification and check.',
      },
      {
        q: 'Can you handle AOG shipments?',
        a: 'AOG work is about routing for reliability and having the documentation ready to move with the part. Tell us it is AOG in the first message and give us the part details — the coordination is different from a routine shipment from the outset.',
      },
    ],
    countryLinks: ['usa-to-singapore', 'france-to-singapore', 'canada-to-singapore', 'united-kingdom-to-singapore'],
    relatedServices: ['special-cargo-singapore', 'customs-support-singapore'],
    guideLinks: ['dangerous-goods-into-singapore'],
  },

  // --- Regulated goods -----------------------------------------------------
  {
    slug: 'cosmetics-and-personal-care',
    name: 'cosmetics and personal care products',
    titleName: 'Cosmetics & Personal Care Products',
    group: 'Regulated goods',
    summary: 'HSA notification comes before the first shipment, not after it.',
    intro:
      'Cosmetics are the category where new importers most often discover the requirement after the stock has arrived. Cosmetic products supplied in Singapore are regulated by the Health Sciences Authority under a notification framework, and the responsible party has to be established in Singapore. The freight is trivial; the sequence is what matters, and getting it backwards means paying storage on goods you cannot sell.',
    handling: [
      'Sort out product notification and the responsible-party arrangement before the first shipment.',
      'Ingredient lists must be complete and accurate — prohibited and restricted substances are specified.',
      'Labelling requirements apply to products supplied in Singapore.',
      'Aerosols, alcohol-based products, and nail products may be dangerous goods for transport.',
      'Heat exposure degrades formulations; Singapore-bound sea freight can run hot.',
      'Shelf life and batch coding matter for both compliance and commercial viability.',
    ],
    regulatory:
      'Cosmetic products in Singapore fall under the Health Sciences Authority\'s regulatory framework, which generally requires product notification before supply, with a company established in Singapore taking responsibility. Ingredient restrictions follow the ASEAN Cosmetic Directive. Products making therapeutic claims may be regulated as health products rather than cosmetics, which is a materially different regime.',
    authority: 'Health Sciences Authority (HSA)',
    profile: 'Light freight; regulatory sequence is the constraint',
    prepare: [
      'Complete product list with full ingredient declarations',
      'Whether HSA notification has been completed',
      'The Singapore-based responsible party',
      'Product claims made on packaging and marketing',
      'Whether any products are aerosols or alcohol-based',
      'Batch numbers and shelf life',
    ],
    faqs: [
      {
        q: 'Do I need approval before importing cosmetics?',
        a: 'Cosmetic products supplied in Singapore generally require notification to HSA, with a locally established responsible party. Do this before you ship. Importing first and notifying afterwards leaves you paying storage on stock you cannot legally supply.',
      },
      {
        q: 'What if my product claims to treat a skin condition?',
        a: 'Therapeutic claims can move a product out of the cosmetic framework and into health product regulation, which is much more demanding. Review your packaging and marketing claims carefully before importing, because the claim determines the regime.',
      },
      {
        q: 'Are cosmetics dangerous goods?',
        a: 'Some are. Aerosols, high-alcohol-content products, and certain nail preparations can be classified as dangerous goods for transport, especially by air. Provide safety data sheets with your enquiry.',
      },
    ],
    countryLinks: ['south-korea-to-singapore', 'france-to-singapore', 'japan-to-singapore'],
    relatedServices: ['customs-support-singapore', 'special-cargo-singapore'],
    guideLinks: ['controlled-goods-and-competent-authorities'],
  },
  {
    slug: 'wine-and-spirits',
    name: 'wine and spirits',
    titleName: 'Wine & Spirits',
    group: 'Regulated goods',
    summary: 'One of the four dutiable categories — excise duty per litre of alcohol changes the whole commercial case.',
    intro:
      'Alcohol is one of only four categories of goods that attract customs duty in Singapore, and the duty is charged per litre of alcohol rather than as a percentage of value. That means a modestly priced spirit can carry duty exceeding its purchase price, while an expensive wine may carry proportionally less. Anyone importing commercially needs a licence, and anyone importing at all needs to model the duty before ordering.',
    handling: [
      'A licence is required to import liquor commercially into Singapore.',
      'Excise duty is calculated per litre of alcohol, so ABV and volume drive the cost, not price.',
      'Temperature control matters: a hot container ruins wine that was fine at loading.',
      'Reefer containers or insulated liners are standard for quality wine on this route.',
      'Bottle breakage in transit is a declaration issue as well as a commercial loss.',
      'Duty-suspended storage in a licensed warehouse can help cash flow for stock held over time.',
    ],
    regulatory:
      'Liquor is dutiable in Singapore, with excise duty levied on the alcohol content, plus GST on the total. Commercial importers require a licence, and there are separate arrangements for duty-suspended storage in licensed warehouses. The permit type used for the import differs depending on whether duty is being paid at import or suspended.',
    authority: 'Singapore Customs (licensing and duty)',
    profile: 'Duty frequently exceeds freight cost by a wide margin',
    prepare: [
      'Product list with ABV and bottle volumes',
      'Total litres of alcohol (the duty basis)',
      'Whether you hold the relevant import licence',
      'Whether duty will be paid at import or the goods stored duty-suspended',
      'Temperature control requirements',
      'Commercial invoice and packing list',
    ],
    faqs: [
      {
        q: 'How is alcohol duty calculated in Singapore?',
        a: 'On the litres of alcohol, not on the value — so ABV and volume are what matter. A case of high-strength spirits carries substantially more duty than a case of wine of the same value. GST is then charged on top. Work the numbers before you order.',
      },
      {
        q: 'Do I need a licence to import wine?',
        a: 'For commercial import, yes. Bringing alcohol into Singapore commercially requires the appropriate licence from Singapore Customs. Personal allowances for travellers are a separate and much more limited matter.',
      },
      {
        q: 'Should wine ship in a reefer?',
        a: 'For anything you care about, yes. A standard container crossing the tropics reaches temperatures that damage wine irreversibly. Temperature-controlled shipping costs more but is cheaper than a ruined consignment.',
      },
    ],
    countryLinks: ['france-to-singapore', 'australia-to-singapore', 'italy-to-singapore', 'spain-to-singapore'],
    relatedServices: ['customs-support-singapore', 'special-cargo-singapore'],
    guideLinks: ['customs-duty-in-singapore', 'gst-on-imports-singapore'],
  },
];

export function cargoToSpoke(c: CargoType): SpokeBase {
  const facts: Fact[] = [
    { label: 'Typical shipping profile', value: c.profile },
    { label: 'Singapore authority most often involved', value: c.authority },
    { label: 'Common origins', value: c.countryLinks.map((s) => s.replace('-to-singapore', '').replace(/-/g, ' ')).join(', ') },
  ];

  const sections: Section[] = [
    {
      heading: `What makes ${c.name} different`,
      body: c.intro,
    },
    {
      heading: 'Handling and packing considerations',
      body: `These are the points that decide whether ${c.name} arrives in a usable condition rather than merely arriving.`,
      bullets: c.handling,
    },
    {
      heading: 'Permits, controls, and the regulatory position',
      body: c.regulatory,
    },
    {
      heading: 'What to have ready before you enquire',
      body: 'The more of this you can give us up front, the more useful our first response will be. If you do not have all of it, send what you have — working out the rest is part of what we do.',
      bullets: c.prepare,
    },
  ];

  return {
    slug: c.slug,
    label: c.titleName,
    metaTitle: fitTitle(
      `Importing ${c.titleName} into Singapore | Permits & Handling`,
      `Importing ${c.titleName} into Singapore`,
    ),
    metaDescription: fitDescription(c.summary, 'Handling, permits, and what to prepare before you ship.'),
    h1: `Importing ${c.titleName.toLowerCase()} into Singapore`,
    lede: c.summary,
    summary: c.summary,
    facts,
    sections,
    faqs: c.faqs,
    group: c.group,
    relatedServices: c.relatedServices,
    relatedPaths: [
      ...c.countryLinks.slice(0, 3).map((s) => `/shipping-from/${s}`),
      ...(c.guideLinks ?? []).map((s) => `/guides/${s}`),
    ],
  };
}

export const cargoSpokes: SpokeBase[] = cargoTypes.map(cargoToSpoke);

export const cargoGroups = [
  'Industrial & manufacturing',
  'Technology & instruments',
  'Events & production',
  'Interiors & materials',
  'Regulated goods',
  'Vehicles & transport',
] as const;
