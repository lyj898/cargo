// Exhibition venue cluster → /exhibitions/<slug>
//
// Venue addresses and transport links are stable facts. Operational details
// (bay counts, dock heights, lift dimensions, delivery windows) are NOT stated
// as fact anywhere on these pages — they change per show and per organiser, and
// the exhibitor manual is always the authority. Every page says so explicitly
// and tells the reader what to go and confirm, which is more useful than a
// number that might be wrong on the day.

import type { Faq, Fact, Section, SpokeBase } from './types';

export type Venue = {
  slug: string;
  name: string;
  /** Short label for cards and breadcrumbs. */
  label: string;
  address: string;
  postalCode: string;
  nearestMrt: string;
  region: 'East' | 'City centre' | 'Marina Bay' | 'Sentosa' | 'West';
  /** Character of the venue — drives the logistics approach. */
  venueType: string;
  /** Events it is known for. Kept illustrative rather than exhaustive. */
  knownFor: string[];
  /** 2–3 sentences on what shipping to this venue is actually like. */
  intro: string;
  /** Venue-specific planning points. */
  planning: string[];
  faqs: Faq[];
  /** Approximate coordinates for LocalBusiness/Place schema. */
  geo?: { lat: number; lng: number };
};

export const venues: Venue[] = [
  {
    slug: 'singapore-expo',
    name: 'Singapore EXPO Convention & Exhibition Centre',
    label: 'Singapore EXPO',
    address: '1 Expo Drive',
    postalCode: 'Singapore 486150',
    nearestMrt: 'Expo (Downtown and East West lines)',
    region: 'East',
    venueType: 'Large ground-level hall complex with direct vehicle access',
    knownFor: ['Large-format trade shows', 'Consumer and technology fairs', 'International conferences and expos'],
    intro:
      'Singapore EXPO is the country\'s largest exhibition venue and, from a logistics point of view, the most straightforward of the major halls — the exhibition space is at ground level with direct vehicle access, so heavy and oversized exhibits do not have to negotiate goods lifts. That advantage is offset by scale: during a large show the volume of vehicles arriving in the same build-up window is enormous, and slot discipline matters more here than anywhere else.',
    planning: [
      'Ground-level halls mean heavy exhibits avoid the lift constraints that dominate city-centre venues.',
      'Build-up traffic is heavy for major shows — a booked slot that you miss is not easily rescheduled.',
      'Its eastern location is close to Changi Airport, which makes air freight a strong option for late or urgent cargo.',
      'Distances inside the complex are substantial; plan for the internal move from the delivery point to your stand.',
      'Confirm your hall, stand number, and the organiser\'s delivery window before crates are labelled.',
      'The appointed on-site handling agent named in the exhibitor manual usually controls movements inside the hall.',
    ],
    faqs: [
      {
        q: 'Can I deliver an oversized exhibit directly to my stand at Singapore EXPO?',
        a: 'The ground-level hall layout makes this far more workable than at multi-level venues, which is one of the main reasons heavy machinery exhibits favour it. You still need the organiser\'s approval and a booked slot, and movements inside the hall usually go through the appointed handling agent.',
      },
      {
        q: 'How close is Singapore EXPO to Changi Airport?',
        a: 'It is in the same eastern part of the island and close by road, which makes air freight genuinely attractive for exhibition cargo running late. If your timeline has slipped, air into Changi and a short road leg is often recoverable where a sea shipment is not.',
      },
      {
        q: 'When should exhibition cargo arrive for a show here?',
        a: 'We plan for cargo to be cleared and available several days before the build-up window opens. Customs clearance and the delivery slot are separate things, and you want the first one comfortably behind you before the second one arrives.',
      },
    ],
    geo: { lat: 1.3344, lng: 103.9615 },
  },
  {
    slug: 'sands-expo-marina-bay-sands',
    name: 'Sands Expo & Convention Centre, Marina Bay Sands',
    label: 'Sands Expo (MBS)',
    address: '10 Bayfront Avenue',
    postalCode: 'Singapore 018956',
    nearestMrt: 'Bayfront (Circle and Downtown lines)',
    region: 'Marina Bay',
    venueType: 'Multi-level convention centre within an integrated resort',
    knownFor: ['International business conferences', 'Travel, finance and technology trade shows', 'Corporate and gala events'],
    intro:
      'Sands Expo sits inside an operating integrated resort, which is the single fact that shapes every logistics decision here. Exhibition space is on multiple levels, cargo moves through service routes shared with a working hotel, casino, and mall, and delivery windows are tight because the building never closes. Heavy or oversized exhibits need their route confirmed in advance rather than assumed.',
    planning: [
      'Multi-level halls mean lift and ramp constraints govern what can physically reach your stand.',
      'Confirm the freight route, lift capacity, and any dimension limits with the organiser before finalising exhibit design.',
      'Service areas are shared with hotel and retail operations, so delivery windows are strictly enforced.',
      'Central Marina Bay location means road access is subject to city traffic conditions during build-up.',
      'Crate storage during the show is usually unavailable — plan empty crate removal and return.',
      'The exhibitor manual is the authority on the current freight route; it changes between shows.',
    ],
    faqs: [
      {
        q: 'What is the largest exhibit I can bring into Sands Expo?',
        a: 'That is set by the freight lift and ramp dimensions on the route to your hall, not by the hall itself. Get the current figures from the organiser or the exhibitor manual before you commit to an exhibit size — this is the constraint that catches out exhibitors designing stands remotely.',
      },
      {
        q: 'Can I store crates during the show?',
        a: 'Generally not on site. Empty crates are usually removed during build-up and returned for teardown, which is a service the appointed handling agent provides. Plan and budget for it rather than discovering it on move-in day.',
      },
      {
        q: 'How tight are the delivery windows here?',
        a: 'Tighter than at a standalone exhibition centre, because the service infrastructure is shared with a hotel, casino, and shopping mall that operate continuously. Missing a slot is materially harder to recover from than at a purpose-built hall complex.',
      },
    ],
    geo: { lat: 1.2847, lng: 103.859 },
  },
  {
    slug: 'suntec-singapore',
    name: 'Suntec Singapore Convention & Exhibition Centre',
    label: 'Suntec Singapore',
    address: '1 Raffles Boulevard',
    postalCode: 'Singapore 039593',
    nearestMrt: 'Promenade and Esplanade (Circle, Downtown and North East lines)',
    region: 'City centre',
    venueType: 'Multi-level city-centre convention centre above a retail mall',
    knownFor: ['Technology and telecoms trade shows', 'Motor and consumer exhibitions', 'International conferences'],
    intro:
      'Suntec is a city-centre venue built above a working shopping mall and office complex, with exhibition halls on upper levels reached by a vehicle ramp and goods lifts. It handles large exhibits regularly — including vehicles — but the route to the hall is the governing constraint, and it needs confirming for anything heavy before an exhibit is designed, let alone shipped.',
    planning: [
      'Halls are on upper levels; vehicle ramp and goods lift access determine what can be brought in.',
      'Confirm weight and dimension limits on the access route for any heavy exhibit.',
      'Central location means build-up traffic interacts with city-centre congestion and restrictions.',
      'The venue sits above active retail, so service route timing is controlled and enforced.',
      'Loading areas are shared across concurrent events — slot booking is essential.',
      'For vehicles or machinery, raise the exhibit specification with the organiser early.',
    ],
    faqs: [
      {
        q: 'Can vehicles or heavy machinery be exhibited at Suntec?',
        a: 'The venue handles vehicle exhibitions, so it is done regularly — but via a specific access route with weight and dimension limits. Confirm those with the organiser at the point of booking the stand, not after the exhibit is built.',
      },
      {
        q: 'How does city-centre traffic affect build-up?',
        a: 'It matters more than people expect. Delivery vehicles are subject to normal city traffic conditions and any restrictions in force, so a slot that looked comfortable can be missed by a traffic delay. Build margin into the road leg.',
      },
      {
        q: 'Is there a single loading area for the whole venue?',
        a: 'Loading facilities are shared across the venue and often across concurrent events, which is exactly why booked slots are taken seriously. Get your slot early and treat it as fixed.',
      },
    ],
    geo: { lat: 1.2934, lng: 103.8589 },
  },
  {
    slug: 'changi-exhibition-centre',
    name: 'Changi Exhibition Centre',
    label: 'Changi Exhibition Centre',
    address: '9 Aviation Park Road',
    postalCode: 'Singapore 498760',
    nearestMrt: 'No direct MRT — road access only, shuttle services during events',
    region: 'East',
    venueType: 'Purpose-built exhibition site with outdoor display areas and airside adjacency',
    knownFor: ['Aerospace and aviation events', 'Defence and security exhibitions', 'Large outdoor equipment displays'],
    intro:
      'Changi Exhibition Centre is the venue for events that need genuinely large outdoor display areas and proximity to the airfield — aerospace and defence shows above all. It is the most operationally demanding venue in Singapore for exhibitors: security requirements are substantial, the site has no MRT connection, and much of what gets exhibited there is heavy, regulated, or both.',
    planning: [
      'Security clearance and accreditation requirements are significant and have long lead times.',
      'Aerospace and defence exhibits frequently involve export-controlled goods — origin-side licensing is often the critical path.',
      'No MRT access; all cargo and most personnel movement is by road.',
      'Large outdoor display areas suit heavy equipment but need ground-bearing and positioning planning.',
      'Aviation components are often dangerous goods; classification must be settled before shipping.',
      'For biennial shows, plan the freight timeline months out rather than weeks.',
    ],
    faqs: [
      {
        q: 'What makes shipping to Changi Exhibition Centre different?',
        a: 'The combination of security requirements, the regulated nature of much of what is exhibited, and the site\'s road-only access. Aerospace and defence cargo often carries export control and dangerous goods considerations that dominate the timeline, so freight planning starts far earlier than for a commercial trade show.',
      },
      {
        q: 'Are aviation parts on display treated differently?',
        a: 'Frequently, yes. Many aviation components are dangerous goods — oxygen generators, accumulators, batteries, pyrotechnic devices — and many are export controlled at origin. Both need resolving before the shipment moves, and both take time.',
      },
      {
        q: 'How far ahead should we plan for a show here?',
        a: 'Months, particularly if export licences or security accreditation are involved. The events held at this venue are the least forgiving of a compressed timeline of any in Singapore.',
      },
    ],
    geo: { lat: 1.3936, lng: 103.9866 },
  },
  {
    slug: 'resorts-world-convention-centre',
    name: 'Resorts World Convention Centre, Sentosa',
    label: 'Resorts World Sentosa',
    address: '8 Sentosa Gateway',
    postalCode: 'Singapore 098269',
    nearestMrt: 'HarbourFront (North East and Circle lines), then Sentosa Express',
    region: 'Sentosa',
    venueType: 'Convention centre within a resort, on an island with controlled vehicle access',
    knownFor: ['Corporate conferences and incentives', 'Medical and scientific congresses', 'Product launches and gala events'],
    intro:
      'The defining logistics fact about Resorts World is that it is on Sentosa, an island with controlled vehicle access via a causeway. Delivery vehicles need the right permissions, the route is longer than the map suggests, and the venue sits inside an operating resort with the same continuous-operation constraints as any integrated resort. It is a fine venue for conferences and launches; it is not somewhere to improvise a heavy delivery.',
    planning: [
      'Sentosa access is controlled — delivery vehicles need appropriate permissions arranged in advance.',
      'The causeway route adds time to every road movement; build it into the schedule.',
      'The venue is inside an operating resort, so service routes and timing are managed.',
      'Better suited to conference and launch cargo than to heavy industrial exhibits.',
      'Confirm the goods lift and service route dimensions for anything large.',
      'Coordinate with the venue\'s events team as well as the organiser — both have requirements.',
    ],
    faqs: [
      {
        q: 'Do delivery vehicles need special permission for Sentosa?',
        a: 'Vehicle access to the island is controlled and delivery vehicles generally need arrangements made in advance. This is not something to discover on the morning of build-up — confirm it with the venue and organiser when the stand or event is booked.',
      },
      {
        q: 'Is this venue suitable for heavy exhibits?',
        a: 'It is better suited to conferences, launches, and lighter display cargo. Heavy industrial exhibits are constrained by the island access and the resort service routes. If you have a heavy exhibit and a choice of venue, this is a factor worth weighing.',
      },
      {
        q: 'How much extra time should we allow for delivery?',
        a: 'More than the distance suggests. The causeway crossing, access control, and resort service routing all add time. We treat Sentosa deliveries as needing a materially wider window than mainland venues.',
      },
    ],
    geo: { lat: 1.2561, lng: 103.8213 },
  },
  {
    slug: 'raffles-city-convention-centre',
    name: 'Raffles City Convention Centre',
    label: 'Raffles City',
    address: '80 Bras Basah Road',
    postalCode: 'Singapore 189560',
    nearestMrt: 'City Hall (East West and North South lines) and Esplanade (Circle line)',
    region: 'City centre',
    venueType: 'Hotel-based convention facility in a mixed-use city-centre complex',
    knownFor: ['Corporate conferences and AGMs', 'Association meetings', 'Product launches and banquets'],
    intro:
      'Raffles City Convention Centre is a hotel-based facility in a dense city-centre complex combining hotel, office, and retail. It is well suited to conferences, launches, and banquets, and poorly suited to anything requiring large or heavy freight — the service infrastructure is designed for hotel operations, not exhibition build-up.',
    planning: [
      'Service lifts and loading areas are hotel-scale; confirm dimensions before shipping anything substantial.',
      'City-centre location with active retail and hotel operations means tightly controlled delivery timing.',
      'Best suited to conference materials, AV, and launch displays rather than heavy exhibits.',
      'Overnight or early-morning delivery windows are common.',
      'Coordinate with the hotel\'s banqueting or events team directly, not only the organiser.',
      'On-site storage is very limited; time deliveries close to the event.',
    ],
    faqs: [
      {
        q: 'Can large display units be brought into Raffles City?',
        a: 'Within the limits of hotel service lifts and loading areas, which are considerably smaller than an exhibition hall\'s. Get the lift dimensions before finalising any display design — this is the constraint that decides what is possible.',
      },
      {
        q: 'When can we deliver?',
        a: 'Typically within controlled windows, often outside peak hotel operating periods. Confirm with the venue\'s events team as early as possible, because these windows are firm.',
      },
      {
        q: 'Is there storage for materials before the event?',
        a: 'Very limited. Plan for delivery close to the event date, and arrange external storage with a scheduled release if your materials arrive in Singapore early.',
      },
    ],
    geo: { lat: 1.2937, lng: 103.8532 },
  },
  {
    slug: 'singapore-sports-hub',
    name: 'Singapore Sports Hub',
    label: 'Singapore Sports Hub',
    address: '1 Stadium Drive',
    postalCode: 'Singapore 397629',
    nearestMrt: 'Stadium (Circle line)',
    region: 'City centre',
    venueType: 'Multi-venue sports and entertainment precinct including the National Stadium and Indoor Stadium',
    knownFor: ['International concerts and tours', 'Sporting events', 'Large-scale consumer events'],
    intro:
      'The Sports Hub is primarily a concert and sporting venue, so the cargo arriving here is touring production equipment on the tightest schedules in the business — in overnight, show, out overnight. The precinct comprises several venues with different access arrangements, and getting the right one identified early matters, because a plan built for the Indoor Stadium does not transfer to the National Stadium.',
    planning: [
      'Identify the specific venue within the precinct — access arrangements differ between them.',
      'Touring schedules are extremely compressed; the get-out is as important to plan as the get-in.',
      'Production equipment usually travels under ATA Carnet — the departure endorsement is critical.',
      'Rigging and load-in capacity are set by the venue\'s technical specification, not by your truck.',
      'Pyrotechnics, hazers, and special effects need separate approvals well in advance.',
      'Wireless equipment frequencies need clearing for use in Singapore.',
    ],
    faqs: [
      {
        q: 'How do touring productions usually bring equipment in?',
        a: 'Typically under an ATA Carnet, which covers the equipment for temporary admission and re-export. The critical detail is getting the re-export counterfoil endorsed on departure — miss it and a claim for duty and taxes follows, which is the most common expensive mistake in touring logistics.',
      },
      {
        q: 'Can pyrotechnics be shipped with the production equipment?',
        a: 'No. Pyrotechnics and compressed gases are controlled goods requiring separate approvals, typically involving SCDF and the Singapore Police Force, and they cannot ride along with general production freight. Plan them as a separate workstream months out.',
      },
      {
        q: 'The get-out is overnight and we fly the next morning. Is that workable?',
        a: 'It happens constantly, but only when the outbound is planned before the equipment arrives. Give us the full itinerary at the start — the return leg is what gets left too late and it is the leg with the Carnet endorsement on it.',
      },
    ],
    geo: { lat: 1.3044, lng: 103.8744 },
  },
  {
    slug: 'marina-bay-street-circuit',
    name: 'Marina Bay Street Circuit and Pit Building',
    label: 'Marina Bay Street Circuit',
    address: '1 Republic Boulevard',
    postalCode: 'Singapore 038975',
    nearestMrt: 'Promenade and Esplanade (Circle and Downtown lines)',
    region: 'Marina Bay',
    venueType: 'Temporary street circuit with a permanent pit building, used for events year-round',
    knownFor: ['Motorsport events', 'Large outdoor concerts and festivals', 'Corporate hospitality at scale'],
    intro:
      'The Pit Building and surrounding circuit area host events on a scale and schedule unlike any fixed venue, because much of the infrastructure is temporary and built around live city roads. Access windows are dictated by road closures and event build programmes, and the freight planning has to work backwards from a schedule that is set by the event organiser and the authorities rather than by the venue.',
    planning: [
      'Access is governed by road closure schedules and the event build programme, not by venue opening hours.',
      'Build-up and teardown windows are narrow and immovable.',
      'Motorsport freight frequently involves vehicles, fuel, and regulated components with their own requirements.',
      'Temporary infrastructure means the delivery point may not be where it was for a previous event.',
      'Accreditation for personnel and vehicles is required and takes time.',
      'Coordinate through the event organiser — arrangements are event-specific rather than venue-standard.',
    ],
    faqs: [
      {
        q: 'How is delivery access arranged here?',
        a: 'Through the event organiser, against the build programme and the road closure schedule. There is no standing venue arrangement to fall back on — everything is event-specific, and accreditation for both people and vehicles has a lead time.',
      },
      {
        q: 'What about race vehicles and fuel?',
        a: 'Vehicles, fuel, oils, and many motorsport components are regulated for transport and sometimes for import. These need to be planned as regulated cargo well ahead, not treated as part of a general freight consignment.',
      },
      {
        q: 'Can equipment be stored on site between events?',
        a: 'Generally not — much of the infrastructure is temporary and the area returns to normal road use. Plan for equipment to arrive within the build window and leave within the teardown window, with external storage if the dates do not line up.',
      },
    ],
    geo: { lat: 1.2914, lng: 103.8639 },
  },
  {
    slug: 'gardens-by-the-bay',
    name: 'Gardens by the Bay',
    label: 'Gardens by the Bay',
    address: '18 Marina Gardens Drive',
    postalCode: 'Singapore 018953',
    nearestMrt: 'Bayfront (Circle and Downtown lines)',
    region: 'Marina Bay',
    venueType: 'Outdoor and conservatory event spaces within a public garden attraction',
    knownFor: ['Outdoor festivals and consumer events', 'Corporate functions and launches', 'Floral and horticultural displays'],
    intro:
      'Gardens by the Bay is a public attraction that hosts events, which means every delivery has to work around visitors, protected planting, and ground surfaces that were not designed for heavy vehicles. It is a beautiful venue and a demanding one logistically — the constraints are horticultural and public-access rather than structural, but they are just as binding.',
    planning: [
      'Ground protection is usually required for vehicle movements over landscaped areas.',
      'The site remains open to the public during most events, constraining delivery routes and times.',
      'Plant material brought in for displays may have phytosanitary requirements.',
      'Outdoor events need weather contingency built into the delivery plan, not added later.',
      'Conservatory spaces have their own access limits and climate considerations.',
      'Coordinate with the venue\'s events team early; requirements are stricter than at a conventional venue.',
    ],
    faqs: [
      {
        q: 'Can delivery vehicles drive onto the site?',
        a: 'Only within defined routes and usually with ground protection in place. Landscaped areas are not built for vehicle loads, and damage to planting is both expensive and slow to remedy. The venue\'s events team sets the routes.',
      },
      {
        q: 'We are importing plants for a display. What applies?',
        a: 'Live plant material generally requires phytosanitary certification and an import permit from the relevant Singapore authority, and the lead time is real. Start this well before the event date — it is one of the least compressible requirements there is.',
      },
      {
        q: 'How do we plan for weather?',
        a: 'Assume rain will affect at least one delivery window and plan a contingency for it. Outdoor build-up in Singapore\'s climate is interrupted regularly, and equipment sitting in the open needs weather protection specified in advance.',
      },
    ],
    geo: { lat: 1.2816, lng: 103.8636 },
  },
  {
    slug: 'the-star-performing-arts-centre',
    name: 'The Star Performing Arts Centre',
    label: 'The Star Vista',
    address: '1 Vista Exchange Green',
    postalCode: 'Singapore 138617',
    nearestMrt: 'Buona Vista (East West and Circle lines)',
    region: 'West',
    venueType: 'Purpose-built theatre and performance venue above a retail mall',
    knownFor: ['Concerts and theatre productions', 'Corporate conventions', 'Award ceremonies and launches'],
    intro:
      'The Star is a purpose-built performance venue sitting above a retail mall in the west of the island, which gives it proper theatre infrastructure alongside the delivery constraints of a mall location. Touring production cargo is the norm here, and the loading arrangements are designed for it — but they are shared with the retail complex, so timing is controlled.',
    planning: [
      'Purpose-built theatre infrastructure means rigging and staging capabilities are documented — get the technical specification.',
      'Loading access is shared with the retail complex; delivery windows are controlled.',
      'Touring productions should plan the get-out at the same time as the get-in.',
      'Production equipment coming in temporarily is usually best handled under an ATA Carnet.',
      'Western location is convenient for road access but distant from Changi if air freight runs late.',
      'Wireless equipment frequencies need clearance for use in Singapore.',
    ],
    faqs: [
      {
        q: 'What technical information should we get before shipping?',
        a: 'The venue\'s technical specification — rigging points and capacities, stage dimensions, power provision, and the loading dock and lift dimensions. Production equipment planning is built from that document, and it should be in hand before freight is booked.',
      },
      {
        q: 'Does the mall location affect deliveries?',
        a: 'Yes. Loading facilities are shared with the retail complex, so delivery windows are controlled and typically outside peak trading. Confirm the window and treat it as fixed.',
      },
      {
        q: 'How should touring equipment be brought in?',
        a: 'Usually under an ATA Carnet for temporary admission, with the re-export endorsement obtained on departure. Wireless microphones and intercom systems should also be checked for frequency clearance in Singapore.',
      },
    ],
    geo: { lat: 1.3069, lng: 103.7886 },
  },
];

export function venueToSpoke(v: Venue): SpokeBase {
  const facts: Fact[] = [
    { label: 'Address', value: `${v.address}, ${v.postalCode}` },
    { label: 'Nearest MRT', value: v.nearestMrt },
    { label: 'Venue type', value: v.venueType },
    { label: 'Commonly hosts', value: v.knownFor.join(', ') },
  ];

  const sections: Section[] = [
    {
      heading: `Shipping to ${v.name}`,
      body: v.intro,
    },
    {
      heading: 'Planning points specific to this venue',
      body: `Operational details — loading bay arrangements, lift dimensions, delivery windows, and the appointed on-site handling agent — are set per event by the organiser and published in the exhibitor or event manual. That manual is always the authority. These are the points worth confirming in it.`,
      bullets: v.planning,
    },
    {
      heading: 'How we work an event shipment',
      body: `We plan backwards from the build-up window rather than forwards from the ship date. That means establishing the organiser's delivery slot and marking requirements first, working out whether the goods are entering Singapore permanently or temporarily, confirming the cargo will be cleared and available several days before it is needed, and planning the outbound movement at the same time as the inbound. For anything tied to a fixed event date, the buffer goes in before the deadline — not after the estimated arrival.`,
    },
  ];

  return {
    slug: v.slug,
    label: v.label,
    // Several venue labels already contain "Singapore"; appending it again
    // reads badly and wastes title budget.
    metaTitle: v.label.includes('Singapore')
      ? `Exhibition Logistics & Freight: ${v.label}`
      : `Exhibition Logistics: ${v.label}, Singapore`,
    metaDescription: `Shipping exhibition and event cargo to ${v.name}. Access constraints, build-up planning, temporary import options, and what to confirm in the exhibitor manual.`,
    h1: `Exhibition and event logistics at ${v.name}`,
    lede: `What to plan for when shipping stands, exhibits, and production equipment to ${v.label} — access constraints, timing, and the customs treatment that suits goods which are only visiting.`,
    summary: `${v.venueType}. ${v.nearestMrt.split('(')[0].trim()}.`,
    facts,
    sections,
    faqs: v.faqs,
    group: v.region,
    relatedServices: ['exhibition-logistics-singapore', 'special-cargo-singapore'],
    relatedPaths: [
      '/cargo/exhibition-booth-materials',
      '/cargo/stage-and-lighting-equipment',
      '/guides/ata-carnet-singapore',
      '/guides/temporary-import-into-singapore',
    ],
  };
}

export const venueSpokes: SpokeBase[] = venues.map(venueToSpoke);

export function getVenue(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}
