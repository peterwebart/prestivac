import type { HazardousLocationTopic } from "@/components/templates/hazardous-location";

/**
 * Hazardous-location reference content.
 *
 * Integrity rules for this file:
 * - The classification framework described here is the published North American
 * scheme (NEC Article 500 series / CEC Section 18). It is explanatory only.
 * - Certification asserted: UL 1203 explosion-proof and dust-ignition-proof
 * No. covering the EX1 HEPA line (Class I Gp. D; Class II Gps. E, F, G;
 * Temp. Code T3C; scope "Dry Vacuum Cleaner, Model Ex 1-xx HEPA").
 * - ATEX, UL and intrinsic-safety approvals are NOT claimed. Where those schemes
 * are described, the copy explains the concept and directs the reader to request
 * the documents applicable to their jurisdiction and configuration.
 * - No Kst, MIE, MEC or exposure values are stated. Temperature-code values are
 * the published code table figures and should be confirmed against the current
 * edition before being relied on for design.
 */

const CSA_NOTE =
 "PrestiVac explosion proof vacuum cleaners are UL 1203 certified explosion-proof and dust-ignition-proof electrical vacuum cleaners for use in Hazardous (Classified) Locations: Class I, Divisions 1 & 2, Groups A, B, C & D (gases, vapors or liquids) and Class II, Divisions 1 & 2, Groups E, F & G (combustible dusts). All units are built and tested to NRTL standards.";

const CLASSIFICATION_DISCLAIMER =
 "Classification is assigned by your own electrical or process engineer and accepted by the authority having jurisdiction. Bring that classification to the equipment conversation rather than working backwards from a product.";

export const HAZARDOUS_LOCATION_TOPICS: HazardousLocationTopic[] = [
 {
 slug: "class-i-division-1",
 name: "Class I, Division 1",
 title: "Class I, Division 1: flammable gas and vapour, present in normal operation",
 eyebrow: "Classification reference",
 seo: {
 title: "Class I Division 1 Explained — Definition, Groups & Equipment",
 description:
 "What Class I, Division 1 means: flammable gases or vapours present in ignitible concentrations under normal operating conditions. Groups A–D, temperature codes, and how it drives vacuum equipment selection.",
 },
 heroIntro:
 "Class I covers flammable gases, flammable liquid-produced vapours and combustible liquid-produced vapours. Division 1 is the more severe of the two divisions: the hazardous atmosphere is expected to be present during normal operation, not just when something fails.",
 keyPoints: [
 "Class I = flammable gases and vapours (not dust — dust is Class II)",
 "Division 1 = ignitible concentration expected under normal operating conditions",
 "Groups A, B, C and D rank gases by ignition severity",
 "Equipment must be suitable for the Class, Division, Group and temperature code together",
 ],
 sections: [
 {
 heading: "What the classification actually says",
 body: [
 "Under the North American scheme, a Class I location is one where flammable gases or vapours may be present in the air in quantities sufficient to produce an ignitible mixture. Division 1 applies where that mixture can exist under normal operating conditions, where it may exist frequently because of repair or maintenance work or leakage, or where equipment failure could simultaneously release the hazard and create an ignition source.",
 "The practical difference between Division 1 and Division 2 is expectation, not possibility. Division 2 locations are those where the flammable material is confined in normal operation and only escapes if containment fails. If an operator would expect to smell solvent during a routine shift, that is a Division 1 conversation.",
 ],
 },
 {
 heading: "Groups A, B, C and D",
 body: [
 "Class I locations are further divided by the gas or vapour present, because ignition energy and flame-transmission behaviour differ sharply between them. Group A covers acetylene, Group B hydrogen and gases of comparable hazard, Group C ethylene and similar, and Group D the large family that includes propane, methane, most common hydrocarbons and many industrial solvents.",
 "Group D is the group most frequently encountered in general manufacturing, and it is among the Class I groups PrestiVac's explosion proof vacuums are certified for. Equipment certified for a less severe group is not acceptable in a more severe one — a Group D listing does not carry into a Group B hydrogen area.",
 ],
 },
 {
 heading: "Temperature codes",
 body: [
 "Classification is not complete without a temperature code. The code caps the maximum surface temperature the equipment may reach, and it must stay below the ignition temperature of the material in the surrounding atmosphere. The principal codes run T1 (450 °C) through T6 (85 °C), with the North American scheme subdividing several of them — T3C, which appears on the EX1 certificate, sits within the T3 band.",
 "Confirm the specific temperature-code figures against the current code edition and the equipment certificate before relying on them for a design decision. The number on the certificate governs, not a general table.",
 ],
 },
 {
 heading: "Where dust and gas overlap",
 body: [
 "Plenty of real facilities are not purely one or the other. An ethanol plant handles grain dust and flammable vapour; a coatings plant handles powder and solvent. Where both are present, each is assessed on its own terms and the equipment has to satisfy whichever requirement is more demanding in that space.",
 CLASSIFICATION_DISCLAIMER,
 ],
 },
 ],
 equipmentNote: [
 "In a Class I, Division 1 area every piece of equipment brought into the space — including cleaning equipment — has to be suitable for the classification. That is why a shop vacuum is not a marginal choice but a prohibited one: its motor brushes spark by design.",
 "Two approaches are common for recovery equipment. The first is certified explosion-protected electrical construction appropriate to the Class, Division and Group. The second removes the electrical question entirely: an air-operated vacuum driven by compressed air has no motor, no switch and no cord in the unit at all.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is Class I, Division 1?",
 answer:
 "A location where flammable gases or vapours are present in the air in ignitible concentrations under normal operating conditions — or may be present frequently through maintenance, repair or leakage. It is the more severe of the two Class I divisions, and equipment used there must be suitable for the specific Class, Division, gas Group and temperature code.",
 },
 {
 question: "Is Class I about dust?",
 answer:
 "No. Class I is gases and vapours. Combustible dust is Class II, and ignitible fibres and flyings are Class III. Facilities often have both, but they are classified and assessed separately.",
 },
 {
 question: "Can one vacuum cover Class I and Class II areas?",
 answer:
 "Only if its certification covers both, and the specific Groups involved. PrestiVac's EX1 HEPA line, for example, is certified for Class I, Group D and Class II, Groups E, F and G under UL 1203 certification. Certification documentation is available for the configuration you are specifying.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class I Div 1 vs Div 2", href: "/hazardous-locations/class-i-division-1-vs-division-2" },
 { label: "Class I, Division 2", href: "/hazardous-locations/class-i-division-2" },
 { label: "Hazardous location vacuums", href: "/hazardous-location-vacuums" },
 { label: "Air-operated vacuums", href: "/products/pneumatic-vacuums" },
 ],
 },
 {
 slug: "class-i-division-2",
 name: "Class I, Division 2",
 title: "Class I, Division 2: flammable vapour contained in normal operation",
 eyebrow: "Classification reference",
 seo: {
 title: "Class I Division 2 Definition — What It Means & Equipment Rules",
 description:
 "Class I, Division 2 explained: flammable gases or vapours handled in closed systems and present only under abnormal conditions. Definition, how it differs from Division 1, and what it means for vacuum equipment.",
 },
 heroIntro:
 "Class I, Division 2 covers locations where flammable gas or vapour is handled, processed or stored, but is confined in closed containers or systems during normal operation — so an ignitible atmosphere appears only if that containment fails.",
 keyPoints: [
 "Flammable material is present but contained under normal operation",
 "The hazard arises from abnormal conditions: leaks, ruptures, ventilation failure",
 "Less severe than Division 1, but still a classified location with equipment rules",
 "Also applies to areas adjacent to Division 1 spaces where vapour could migrate",
 ],
 sections: [
 {
 heading: "The definition, in plain terms",
 body: [
 "A Class I, Division 2 location is one where volatile flammable liquids or gases are handled but are confined within closed systems from which they can escape only through accidental rupture or abnormal operation; where an ignitible concentration is normally prevented by positive mechanical ventilation and could become hazardous if that ventilation fails; or where the location is adjacent to a Division 1 area and vapour could be communicated into it.",
 "The distinguishing idea is that under normal, correct operation the atmosphere is safe. Division 2 asks what happens when something goes wrong — and requires that a failure of the process should not be accompanied by an ignition source waiting in the room.",
 ],
 },
 {
 heading: "Why Division 2 still constrains equipment",
 body: [
 "It is tempting to treat Division 2 as effectively unclassified, and that is a common and expensive mistake. The classification exists precisely because the credible failure case puts flammable vapour into the room, and the code accordingly restricts what equipment may be installed or used there.",
 "For portable equipment such as vacuums, the practical question is what the unit does during the abnormal condition it was never meant to encounter. A motor that arcs, a switch that sparks or a plastic hose accumulating static charge is exactly the ignition source that turns a containment failure into an event.",
 ],
 },
 {
 heading: "Division 2 and housekeeping",
 body: [
 "Housekeeping is often the activity that puts people and equipment into classified space most frequently — more often than maintenance, and with less planning. Cleaning schedules routinely bring cords, hoses and motors into rooms where the electrical installation was carefully specified years earlier.",
 "That mismatch is worth auditing directly: the fixed installation may be fully compliant while the cleaning equipment rolled in every evening is not.",
 CLASSIFICATION_DISCLAIMER,
 ],
 },
 ],
 equipmentNote: [
 "Equipment for a Class I, Division 2 area must be suitable for that classification and for the gas Group and temperature code assigned to the space. Suitability is established by the equipment's certification and markings, not by its general description.",
 "Air-operated vacuums are frequently specified for classified areas for a structural reason rather than a marketing one: with a compressed-air drive there is no electrical component in the recovery unit to assess.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What does Class I, Division 2 mean?",
 answer:
 "It means flammable gases or vapours are present in the area but are contained in closed systems during normal operation, so an ignitible atmosphere would only arise from abnormal conditions — a leak, a rupture, or failure of the ventilation that normally keeps concentrations safe. It also covers areas adjacent to Division 1 spaces where vapour could migrate.",
 },
 {
 question: "What is the difference between Class 1 Div 1 and Div 2?",
 answer:
 "Expectation. In Division 1 the ignitible atmosphere is expected during normal operation. In Division 2 the material is contained in normal operation and only becomes a hazard if containment or ventilation fails. Division 1 is therefore the more demanding classification for equipment.",
 },
 {
 question: "Do I need explosion-proof equipment in Division 2?",
 answer:
 "You need equipment suitable for the classification as assigned, which is a question for your electrical engineer and the authority having jurisdiction rather than a product catalogue. What is clear is that ordinary commercial or shop-grade cleaning equipment is not suitable for classified areas of either division.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class I Div 1 vs Div 2", href: "/hazardous-locations/class-i-division-1-vs-division-2" },
 { label: "Class I, Division 1", href: "/hazardous-locations/class-i-division-1" },
 { label: "Intrinsically safe vacuums", href: "/hazardous-locations/intrinsically-safe-vacuums" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 slug: "class-ii-division-1",
 name: "Class II, Division 1",
 title: "Class II, Division 1: combustible dust airborne in normal operation",
 eyebrow: "Classification reference",
 seo: {
 title: "Class II Division 1 Explained — Combustible Dust Locations",
 description:
 "Class II, Division 1 covers locations where combustible dust is in the air under normal operating conditions in ignitible quantities. Definition, Groups E, F and G, and what it means for dust-ignitionproof vacuum equipment.",
 },
 heroIntro:
 "Class II is the combustible-dust classification, and Division 1 is where the dust is airborne in ignitible quantities under normal operation — or where equipment failure could both produce that cloud and supply the ignition source. This is the classification most dust-handling plants are arguing about.",
 keyPoints: [
 "Class II = combustible dust (Class I is gas and vapour)",
 "Division 1 = ignitible dust cloud expected in normal operation",
 "Groups E, F and G divide dusts by conductivity and origin",
 "For Class II the correct construction term is dust-ignitionproof, not explosionproof",
 ],
 sections: [
 {
 heading: "What puts an area in Division 1",
 body: [
 "A Class II, Division 1 location is one where combustible dust is in the air under normal operating conditions in quantities sufficient to produce ignitible mixtures; where mechanical failure or abnormal operation of machinery might produce such a mixture and also provide an ignition source through simultaneous equipment failure; or where combustible electrically conductive dust may be present in hazardous quantities.",
 "That third limb matters more than it first appears. Conductive dust — the metal dusts of Group E — is treated with particular severity, because it can bridge terminals and short equipment as well as burn. Where Group E dust is present in hazardous quantities, expect the Division 1 conversation rather than a Division 2 one.",
 ],
 },
 {
 heading: "Groups E, F and G",
 body: [
 "Group E covers combustible metal dusts, including aluminium, magnesium and their commercial alloys, and other dusts whose particle size, abrasiveness and electrical conductivity present comparable hazards. Group F covers carbonaceous dusts — carbon black, charcoal, coal and coke. Group G covers the remaining combustible dusts that are not electrically conductive: flour, grain, wood, plastics, many chemicals and most food powders.",
 "Those groups are why a single generic claim of dust suitability is not useful. Equipment has to be suitable for the Group actually present, and the certificate names the Groups explicitly. PrestiVac's EX1 HEPA line carries Class II, Groups E, F and G on UL 1203 certification.",
 ],
 },
 {
 heading: "Dust-ignitionproof is not the same as explosionproof",
 body: [
 "In everyday speech both are called explosion proof, and this page uses that phrase too because it is what people search for. Technically they are different protection concepts. Explosionproof construction, associated with Class I, contains an internal explosion and prevents flame propagation to the surrounding atmosphere. Dust-ignitionproof construction, associated with Class II, excludes dust from entering the enclosure and limits external surface temperature so that dust outside cannot ignite.",
 "The distinction is worth knowing when reading certificates, because a listing for one is not automatically a listing for the other. Read the Class, Division, Group and temperature code as a set.",
 ],
 },
 {
 heading: "Accumulation is part of the assessment",
 body: [
 "Dust classification is not only about clouds. Layer accumulation matters, because a layer insulates hot surfaces, provides fuel for a secondary event, and can be lofted by a primary explosion. This is the mechanism behind almost every catastrophic dust incident: a modest primary event disturbs accumulated dust and the secondary explosion destroys the building.",
 "That is why housekeeping sits inside the safety case rather than beside it, and why NFPA 660 — which consolidated the former NFPA 61, 484, 652, 654, 655 and 664 — treats accumulation control as a core requirement.",
 CLASSIFICATION_DISCLAIMER,
 ],
 },
 ],
 equipmentNote: [
 "In Class II, Division 1 the recovery equipment itself must not become the ignition source. In practice that means a conductive, grounded and bonded path from hose tip to collection container, anti-static accessories rather than ordinary plastic hose, filtration that keeps fines away from the drive, and a power unit suitable for the classification and Group.",
 "Where the dust is a Group E metal dust, additional decisions follow — including whether an immersion-separation approach is appropriate so that recovered reactive fines are kept wetted rather than accumulating dry in a container.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is Class II, Division 1?",
 answer:
 "A location where combustible dust is airborne in ignitible quantities during normal operation, where an equipment failure could both create that cloud and provide ignition, or where combustible electrically conductive dust may be present in hazardous quantities. It is the more severe of the two Class II divisions.",
 },
 {
 question: "What is the difference between Class II Groups E, F and G?",
 answer:
 "Group E is combustible metal dust such as aluminium and magnesium — electrically conductive and treated most severely. Group F is carbonaceous dust including coal, coke and carbon black. Group G is the remaining non-conductive combustible dusts: flour, grain, wood, plastics and most chemical and food powders.",
 },
 {
 question: "Is a Class II vacuum cleaner the same as an explosion proof vacuum?",
 answer:
 "Colloquially the terms are used interchangeably. Technically, Class II construction is dust-ignitionproof — it excludes dust from the enclosure and limits surface temperature — while explosionproof construction belongs to the Class I gas-and-vapour world. What matters when specifying is the certificate: which Class, which Division, which Groups, and which temperature code.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Div 1 vs Div 2", href: "/hazardous-locations/class-ii-division-1-vs-division-2" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 slug: "class-ii-division-2",
 name: "Class II, Division 2",
 title: "Class II, Division 2: combustible dust present, but not normally airborne",
 eyebrow: "Classification reference",
 seo: {
 title: "Class II Division 2 Explained — Definition & Dust Equipment Rules",
 description:
 "Class II, Division 2 covers locations where combustible dust is not normally in suspension but accumulations are present. Definition, how it differs from Division 1, Group G considerations and equipment implications.",
 },
 heroIntro:
 "Class II, Division 2 applies where combustible dust is present but is not normally suspended in ignitible concentrations — dust accumulations exist, and abnormal operation could put enough of it into the air to matter.",
 keyPoints: [
 "Dust is present as accumulation rather than as a normal airborne cloud",
 "Abnormal operation or equipment malfunction is the credible route to a cloud",
 "Accumulations on surfaces and in equipment are part of the hazard picture",
 "Conductive Group E metal dust generally drives the more severe Division 1 treatment",
 ],
 sections: [
 {
 heading: "The definition",
 body: [
 "A Class II, Division 2 location is one where combustible dust due to abnormal operations may be present in the air in quantities sufficient to produce ignitible mixtures, or where dust accumulations are present but are normally insufficient to interfere with the normal operation of electrical equipment — yet could be put into suspension by an abnormal condition such as a process malfunction or a failure of handling equipment.",
 "As with Class I, the division turns on expectation. Division 1 anticipates the ignitible cloud in normal operation; Division 2 anticipates accumulation in normal operation and the cloud only when something goes wrong.",
 ],
 },
 {
 heading: "Why accumulation alone is a hazard",
 body: [
 "A Division 2 area can look clean at a glance and still hold a serious inventory of fuel, because dust settles where nobody looks: high steel, cable trays, the tops of ducts and enclosures, inside equipment housings. A layer thin enough to read a label through is enough to sustain a propagating secondary event when lofted.",
 "Layer accumulation also degrades equipment on its own terms — insulating hot surfaces, fouling cooling, and in the case of conductive dust, bridging electrical connections. That is part of why the classification exists even where clouds are not routine.",
 ],
 },
 {
 heading: "The housekeeping consequence",
 body: [
 "The control that most directly reduces Division 2 risk is not equipment selection but accumulation control — removing the fuel before a primary event can disperse it. Vacuum recovery does that; sweeping and compressed-air blowdown relocate the dust and, in the case of blowdown, deliberately create the suspended cloud the classification is concerned with.",
 "A Dust Hazard Analysis is how those cleaning frequencies stop being informal habit and become a defensible programme with defined intervals for defined surfaces.",
 CLASSIFICATION_DISCLAIMER,
 ],
 },
 ],
 equipmentNote: [
 "Equipment used in a Class II, Division 2 area must be suitable for that classification and for the dust Group present. The routine presence of portable cleaning equipment in these spaces makes it a common gap between a compliant fixed installation and actual daily practice.",
 "Because the primary control is removing accumulation, filtration performance matters as much as the drive: a unit that captures fines and then discharges them through the exhaust has moved the dust rather than removed it. HEPA-retained filtration is what closes that loop.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is Class II, Division 2?",
 answer:
 "A location where combustible dust is not normally airborne in ignitible quantities, but accumulations are present and abnormal operation could put enough dust into suspension to create an ignitible mixture. It is the less severe of the two Class II divisions, but it is still a classified location.",
 },
 {
 question: "What is the difference between Class 2 Div 1 and Div 2?",
 answer:
 "In Division 1 an ignitible dust cloud is expected under normal operating conditions, or conductive metal dust is present in hazardous quantities. In Division 2 the dust is present mainly as accumulation and a cloud arises only from abnormal conditions. Division 1 imposes the more demanding equipment requirements.",
 },
 {
 question: "Does Class II, Division 2 include Group G dusts like flour and wood?",
 answer:
 "Group G — non-conductive combustible dusts such as flour, grain, wood and plastics — is commonly encountered in both divisions, and the division is determined by whether an ignitible cloud is expected in normal operation. Conductive Group E metal dusts are the ones treated with additional severity, and where they are present in hazardous quantities the Division 1 requirements generally apply.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Div 1 vs Div 2", href: "/hazardous-locations/class-ii-division-1-vs-division-2" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 ],
 },
 {
 slug: "class-i-division-1-vs-division-2",
 name: "Class I Div 1 vs Div 2",
 title: "Class I, Division 1 vs Division 2: what actually changes",
 eyebrow: "Comparison",
 seo: {
 title: "Class 1 Div 1 vs Div 2 — Differences Explained Side by Side",
 description:
 "Class I Division 1 vs Division 2 compared: when the flammable atmosphere is expected, what each classification assumes about failure, and how the difference changes equipment selection.",
 },
 heroIntro:
 "Both divisions describe areas where flammable gas or vapour is a factor. The difference is whether an ignitible atmosphere is expected during normal operation, or only when containment fails — and that single distinction drives everything downstream.",
 keyPoints: [
 "Division 1: ignitible atmosphere expected in normal operation",
 "Division 2: material contained in normal operation; hazard arises from failure",
 "Both are classified locations — Division 2 is not unclassified",
 "The Group and temperature code apply in both cases",
 ],
 sections: [
 {
 heading: "The core distinction",
 body: [
 "Division 1 assumes the hazard is part of normal life in that space: vapour is present in ignitible concentration during routine operation, or appears often through maintenance and leakage, or a single equipment failure could release it while simultaneously providing ignition. Division 2 assumes the opposite baseline — the flammable material is inside closed systems, and only an abnormal event puts it into the room.",
 "Because the baseline differs, so does the design philosophy. Division 1 equipment must be safe while immersed in a hazardous atmosphere. Division 2 equipment must not become an ignition source during the credible failure case.",
 ],
 },
 {
 heading: "Where people get it wrong",
 body: [
 "The most common error is reading Division 2 as a soft classification and applying general-purpose equipment there. The second most common is assuming a Division 1 listing is required everywhere in a plant that has any Division 1 area, which over-specifies cost without improving safety.",
 "The third — and the one most relevant to cleaning — is classifying the fixed installation carefully while portable equipment wanders across boundaries. A vacuum used in both a Division 1 and a Division 2 room has to satisfy the more demanding of the two.",
 ],
 },
 ],
 comparison: {
 heading: "Side by side",
 columns: ["Class I, Division 1", "Class I, Division 2"],
 rows: [
 {
 aspect: "Baseline assumption",
 left: "Ignitible gas or vapour concentration expected during normal operation",
 right: "Flammable material confined in closed systems during normal operation",
 },
 {
 aspect: "How the hazard arises",
 left: "Routine operation, frequent maintenance or repair, or leakage",
 right: "Abnormal conditions: rupture, leak, or failure of positive ventilation",
 },
 {
 aspect: "Also includes",
 left: "Failure that releases the hazard and provides ignition simultaneously",
 right: "Areas adjacent to Division 1 where vapour could be communicated",
 },
 {
 aspect: "Design intent for equipment",
 left: "Remain safe while the hazardous atmosphere is present",
 right: "Not become an ignition source during the credible failure case",
 },
 {
 aspect: "Still requires Group and T-code",
 left: "Yes — Group A, B, C or D plus temperature code",
 right: "Yes — the same Group and temperature code framework applies",
 },
 {
 aspect: "Cleaning equipment implication",
 left: "Shop and commercial vacuums are unsuitable; certified or air-operated units",
 right: "Also unsuitable — classification applies to portable equipment too",
 },
 ],
 },
 equipmentNote: [
 "For recovery equipment the practical question in both divisions is the same: what in this machine could ignite an atmosphere, and is that eliminated or contained? Electric motors, switches and static-accumulating hoses are the usual answers.",
 "An air-operated unit sidesteps the electrical question entirely because there is no motor or switch in the recovery unit. Where compressed air is available, that is often the cleanest route through a mixed-classification plant.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is the difference between Class 1 Div 1 and Class 1 Div 2?",
 answer:
 "Division 1 means an ignitible concentration of flammable gas or vapour is expected under normal operating conditions. Division 2 means the flammable material is contained during normal operation and an ignitible atmosphere would only result from abnormal conditions such as a leak, rupture or ventilation failure. Division 1 is more severe and imposes stricter equipment requirements.",
 },
 {
 question: "Is Division 2 equipment cheaper than Division 1?",
 answer:
 "Generally the requirements are less demanding, which can reduce cost — but that is an outcome, not a reason to prefer a classification. The classification is assigned by engineering assessment of the process, and equipment follows it.",
 },
 {
 question: "Can Division 1 equipment be used in a Division 2 area?",
 answer:
 "Equipment suitable for the more severe classification is generally acceptable in the less severe one, provided the Group and temperature code also match. The reverse is not true. Always verify against the equipment's certification and the applicable code rather than reasoning by analogy.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class I, Division 1", href: "/hazardous-locations/class-i-division-1" },
 { label: "Class I, Division 2", href: "/hazardous-locations/class-i-division-2" },
 { label: "Class II Div 1 vs Div 2", href: "/hazardous-locations/class-ii-division-1-vs-division-2" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 slug: "class-ii-division-1-vs-division-2",
 name: "Class II Div 1 vs Div 2",
 title: "Class II, Division 1 vs Division 2: dust in the air, or dust on the beams",
 eyebrow: "Comparison",
 seo: {
 title: "Class 2 Div 1 vs Div 2 — Combustible Dust Divisions Compared",
 description:
 "Class II Division 1 vs Division 2 compared for combustible dust: airborne in normal operation versus accumulation with abnormal-condition clouds, plus Group E conductive dust and equipment implications.",
 },
 heroIntro:
 "For combustible dust the division turns on whether an ignitible cloud is part of normal operation or only appears when something malfunctions. Accumulation matters in both — and with conductive metal dust the calculus shifts sharply toward Division 1.",
 keyPoints: [
 "Division 1: ignitible dust cloud expected in normal operation",
 "Division 2: accumulation normal, ignitible cloud from abnormal conditions",
 "Conductive Group E metal dust drives the more severe treatment",
 "Accumulation control is the primary risk reduction in both divisions",
 ],
 sections: [
 {
 heading: "The distinction for dust",
 body: [
 "Division 1 covers locations where combustible dust is airborne in ignitible quantities under normal operation, where a machinery failure could produce that cloud and an ignition source together, or where combustible electrically conductive dust is present in hazardous quantities. Division 2 covers locations where dust is present as accumulation and abnormal operation could put enough of it into suspension to matter.",
 "Conductive dust is the asymmetry between the two. Metal dusts in Group E both burn and conduct, which means they can short and bridge electrical equipment as well as fuel a deflagration — so where they are present in hazardous quantities, expect Division 1 treatment.",
 ],
 },
 {
 heading: "Why both divisions need housekeeping",
 body: [
 "Whatever the division, the mechanism that destroys buildings is the same: a primary event disturbs accumulated dust and the resulting secondary explosion propagates through the plant. The fuel for that secondary event is the layer on the high steel, not the cloud at the process.",
 "This is why accumulation control is the highest-leverage control in both divisions, and why NFPA 660 treats it as fundamental rather than as good practice. Removing the layer removes the secondary event.",
 ],
 },
 ],
 comparison: {
 heading: "Side by side",
 columns: ["Class II, Division 1", "Class II, Division 2"],
 rows: [
 {
 aspect: "Baseline assumption",
 left: "Combustible dust airborne in ignitible quantities in normal operation",
 right: "Dust present as accumulation; not normally suspended in ignitible quantity",
 },
 {
 aspect: "How the hazard arises",
 left: "Normal operation, or simultaneous machinery failure and ignition",
 right: "Abnormal operation or equipment malfunction lofting accumulation",
 },
 {
 aspect: "Conductive metal dust",
 left: "Group E in hazardous quantities generally falls here",
 right: "Conductive dust is not treated as a Division 2 problem",
 },
 {
 aspect: "Construction concept",
 left: "Dust-ignitionproof: exclude dust, limit surface temperature",
 right: "Suitable for the classification; surface temperature still matters",
 },
 {
 aspect: "Primary risk control",
 left: "Accumulation control plus classified equipment",
 right: "Accumulation control — removing the fuel before it can be dispersed",
 },
 {
 aspect: "Cleaning method",
 left: "Grounded, bonded vacuum recovery; no blowdown, no sweeping",
 right: "Same — blowdown deliberately creates the cloud the class concerns",
 },
 ],
 },
 equipmentNote: [
 "In both divisions the recovery equipment has to be part of the solution rather than a new ignition source: conductive and bonded throughout, anti-static accessories, filtration that keeps fines out of the drive and out of the exhaust.",
 "Group E metal dust adds further decisions — including whether recovered fines should be kept wetted through immersion separation rather than accumulating dry in a collection container.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is the difference between Class 2 Div 1 and Div 2?",
 answer:
 "Division 1 means combustible dust is airborne in ignitible quantities during normal operation, or conductive metal dust is present in hazardous quantities. Division 2 means dust is present mainly as accumulation and only abnormal conditions would create an ignitible cloud. Division 1 carries the stricter equipment requirements.",
 },
 {
 question: "Which division does aluminium or magnesium dust fall into?",
 answer:
 "Aluminium and magnesium dusts are Group E conductive metal dusts. Where they are present in hazardous quantities the more severe Division 1 requirements generally apply, because conductive dust can short electrical equipment in addition to fuelling a deflagration. Your classification is assigned by your own engineering assessment.",
 },
 {
 question: "If my area is Division 2, can I use a normal industrial vacuum?",
 answer:
 "No. Division 2 is a classified location, and equipment brought into it — including portable cleaning equipment — must be suitable for the classification. A standard industrial or shop vacuum is not, regardless of division.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 { label: "Class II, Division 2", href: "/hazardous-locations/class-ii-division-2" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Combustible metal dust", href: "/materials/aluminum-dust" },
 ],
 },
 {
 slug: "class-ii-groups-e-f-g",
 name: "Class II Groups E, F & G",
 title: "Class II Groups E, F and G: how dusts are grouped, and why it matters",
 eyebrow: "Classification reference",
 seo: {
 title: "Class II Group E, F & G Dusts — Vacuum Cleaner Requirements",
 description:
 "Class II dust Groups explained: Group E combustible metal dust, Group F carbonaceous dust, Group G non-conductive dusts like flour and wood. What each group means for vacuum cleaner selection and certification.",
 },
 heroIntro:
 "Class II locations are subdivided by the dust itself, because conductivity and combustion behaviour differ enormously between aluminium powder, coal dust and flour. Equipment is certified to specific Groups — which is why a general claim of dust suitability tells you very little.",
 keyPoints: [
 "Group E: combustible metal dusts — conductive and treated most severely",
 "Group F: carbonaceous dusts including coal, coke and carbon black",
 "Group G: non-conductive combustible dusts — flour, grain, wood, plastics, chemicals",
 "Certificates name the Groups explicitly; read them rather than inferring",
 ],
 sections: [
 {
 heading: "Group E — combustible metal dust",
 body: [
 "Group E covers combustible metal dusts including aluminium, magnesium and their commercial alloys, together with other dusts whose particle size, abrasiveness and electrical conductivity present comparable hazards. Two properties make this group the most demanding: the dusts burn ferociously once ignited, and because they conduct they can bridge terminals and short electrical equipment.",
 "Reactive metal fines bring further complications that classification alone does not capture — several react with water to liberate hydrogen, which rules out the instinctive response to a fire and shapes how recovered material is stored and disposed of.",
 ],
 },
 {
 heading: "Group F — carbonaceous dust",
 body: [
 "Group F covers carbonaceous dusts: carbon black, charcoal, coal and coke. The characteristic behaviour here is smouldering. A deep-seated glow can persist inside accumulated material long after the visible event, then reignite — which is why recovered coke and coal dust is not left sitting in a collection container at the end of a shift.",
 ],
 },
 {
 heading: "Group G — non-conductive combustible dust",
 body: [
 "Group G is the broadest group: combustible dusts that are not electrically conductive. Flour, starch, grain, sugar, wood, paper, many plastics, pharmaceutical powders and a wide range of chemical dusts sit here. Most food and wood processing plants are Group G facilities.",
 "Non-conductive does not mean lower consequence. The flour and grain explosion record is the reason dust hazards became a regulated engineering subject in the first place.",
 ],
 },
 {
 heading: "Reading a certificate properly",
 body: [
 "A certificate that names Class II, Groups E, F and G covers all three families; one that names only Group G does not extend to metal dust. Along with the Groups, check the Class, the Division, the temperature code and the described scope of the equipment — the scope line is what ties the marking to a specific product family.",
 CSA_NOTE,
 ],
 },
 ],
 equipmentNote: [
 "Match the certificate to the dust you actually have, not to the dust the plant is named after. Mixed facilities are common: a metalworking shop with a wood shop attached spans Groups E and G, and the equipment used across both has to cover both.",
 "Group E work in particular tends to drive additional configuration decisions — immersion separation for reactive fines, conductive accessories throughout, and disposal practices that keep recovered material from accumulating dry.",
 ],
 faqs: [
 {
 question: "What are Class II Group F and Group G dusts?",
 answer:
 "Group F is carbonaceous dust — coal, coke, charcoal and carbon black, characterised by a tendency to smoulder. Group G is the non-conductive combustible dusts: flour, grain, sugar, wood, paper, plastics, pharmaceutical and many chemical powders. Group E, by contrast, is conductive combustible metal dust.",
 },
 {
 question: "What is a Class II vacuum cleaner?",
 answer:
 "Informally, a vacuum suitable for use in a Class II combustible-dust location. What makes it suitable is its certification for the specific Class, Division, dust Group and temperature code of your area — plus the practical construction that goes with it: conductive, grounded and bonded throughout, anti-static accessories, and filtration that keeps fines out of the drive and the exhaust.",
 },
 {
 question: "Does a Group G listing cover aluminium dust?",
 answer:
 "No. Aluminium is a Group E conductive metal dust. Equipment certified only for Group G does not extend to Group E, and metal dust also raises reactivity questions that Group G materials do not. Confirm the Groups named on the certificate against the dust present in your process.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Flour Dust guide", href: "/materials/flour-dust" },
 ],
 },
 {
 slug: "intrinsically-safe-vacuums",
 name: "Intrinsic safety",
 title: "Intrinsically safe vacuums: what the term means, and what to ask for",
 eyebrow: "Protection concepts",
 seo: {
 title: "Intrinsically Safe Vacuum Cleaners — What the Term Really Means",
 description:
 "Intrinsic safety is an energy-limiting protection concept for electrical circuits. What it means for industrial vacuums, why air-operated units answer the question differently, and which documents to request.",
 },
 heroIntro:
 "Intrinsic safety is a specific, defined protection concept — not a general synonym for safe in a hazardous area. Understanding what it actually covers explains why air-operated vacuums are so often the answer when someone searches for an intrinsically safe one.",
 keyPoints: [
 "Intrinsic safety limits electrical energy below what can cause ignition",
 "It is a concept designed around low-power circuits, typically instrumentation",
 "A vacuum's drive motor is not a low-energy circuit",
 "An air-operated vacuum has no electrical circuit in the unit at all",
 ],
 sections: [
 {
 heading: "What intrinsic safety actually is",
 body: [
 "Intrinsic safety is a protection concept that works by limiting the electrical and thermal energy available in a circuit to a level below what could ignite the surrounding hazardous atmosphere — considering both normal operation and specified fault conditions. It is implemented in the circuit design, with barriers and energy limits, and it is marked with recognised protection codes.",
 "The concept was developed for, and is overwhelmingly applied to, low-power electrical circuits: sensors, transmitters, instrumentation and control loops. Its whole premise is that there is very little energy in the circuit to begin with.",
 ],
 },
 {
 heading: "Why that matters for a vacuum",
 body: [
 "A vacuum needs to move a lot of air, which needs real power. A motor drawing that power is not a low-energy circuit, so intrinsic safety is generally not the applicable protection concept for the drive of an industrial vacuum. Equipment for hazardous locations in this class is addressed with other concepts — explosionproof or dust-ignitionproof construction for the enclosure, or removing electricity from the equation.",
 "This is why searches for an intrinsically safe vacuum are usually best answered by a different question: what is the classification of your area, and do you want a certified electrical unit or an air-operated one?",
 ],
 },
 {
 heading: "The air-operated alternative",
 body: [
 "An air-operated vacuum is driven by compressed air through a venturi rather than by a motor. There is no electric motor, no switch and no power cord in the recovery unit — so the question of what the electrical system does in a hazardous atmosphere does not arise for the drive at all.",
 "That is a structural answer rather than a certification argument, and it is often why air-operated units are specified for classified areas and for continuous duty. The dust still has to be handled properly: the conductive, grounded and bonded recovery path matters just as much, because static on the material side is an ignition risk independent of the drive.",
 ],
 },
 {
 heading: "What to ask a supplier",
 body: [
 "Ask which certificate applies to the exact configuration you are quoting, what Class, Division, Group and temperature code it names, what scope of equipment it covers, and which certification body issued it. Ask separately about your jurisdiction, because North American and European schemes are not interchangeable.",
 "Be sceptical of any answer that offers a general assurance of safety without naming a document. The certificate and its scope line are the substance.",
 CSA_NOTE,
 ],
 },
 ],
 equipmentNote: [
 "PrestiVac does not represent its vacuums as holding intrinsic-safety approvals. What we can point to precisely is UL 1203 certification on our explosion proof lines, and the structural fact that our air-operated units contain no electrical components in the recovery unit.",
 "Some model designations in the lineup include configuration suffixes. Those codes are defined in the factory datasheet, and we will not interpret a suffix as a certification claim — ask us for the datasheet and the applicable certificate together.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is an intrinsically safe vacuum cleaner?",
 answer:
 "Strictly, intrinsic safety is an energy-limiting protection concept applied to electrical circuits so that available energy stays below the level that could ignite the surrounding atmosphere. It was designed for low-power circuits such as instrumentation, so it is generally not the protection concept used for the motor of an industrial vacuum. In practice, people searching this term need either a certified explosion-protected unit or an air-operated one.",
 },
 {
 question: "Are air-operated vacuums intrinsically safe?",
 answer:
 "They are not described that way, because intrinsic safety is a concept about electrical circuits and an air-operated unit has none in the recovery unit. That absence is the point: with a compressed-air drive there is no motor, switch or cord to assess. Grounding, bonding and anti-static accessories still matter, because the dust itself can carry static.",
 },
 {
 question: "Do you have ATEX certification?",
 answer:
 "ATEX is the European scheme, and our certification is North American: UL 1203 certification covers our explosion proof vacuum cleaners for Class I, Group D and Class II, Groups E, F and G at Temperature Code T3C. If you are specifying for a European site, tell us the jurisdiction and requirements and we will tell you exactly what documentation applies rather than implying equivalence.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "ATEX vs North American", href: "/hazardous-locations/atex-vs-north-american" },
 { label: "Air-operated vacuums", href: "/products/pneumatic-vacuums" },
 { label: "Class I, Division 2", href: "/hazardous-locations/class-i-division-2" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 slug: "atex-vs-north-american",
 name: "ATEX vs North American",
 title: "ATEX and the North American scheme: two systems, not two names",
 eyebrow: "Jurisdictions",
 seo: {
 title: "ATEX vs Class/Division — Hazardous Area Schemes Compared",
 description:
 "ATEX Zones 20–22 versus North American Class II Divisions: how the two hazardous-area frameworks differ, why certifications are not interchangeable, and what documentation to request for your jurisdiction.",
 },
 heroIntro:
 "Europe and North America classify hazardous areas differently, and equipment approved under one scheme is not automatically acceptable under the other. Knowing which framework governs your site is the first step, well before choosing a machine.",
 keyPoints: [
 "North America: Class and Division (with a Zone system also recognised)",
 "Europe/IEC: Zones — 20, 21 and 22 for combustible dust",
 "Certifications are issued under specific schemes and are not interchangeable",
 "PrestiVac's certification is North American (UL 1203); ATEX is not claimed",
 ],
 sections: [
 {
 heading: "The two frameworks",
 body: [
 "The traditional North American approach classifies by Class — I for gases and vapours, II for combustible dust, III for fibres and flyings — and then by Division 1 or 2 according to whether the hazard is expected in normal operation. Groups subdivide by material, and a temperature code caps surface temperature.",
 "The European and wider IEC approach classifies by Zone according to how long the hazardous atmosphere is present. For combustible dust, Zone 20 is where a dust cloud is present continuously or for long periods, Zone 21 where it is likely in normal operation, and Zone 22 where it is not likely and only for short periods. A Zone system is also recognised in North America as an alternative to Divisions.",
 ],
 },
 {
 heading: "Why they are not interchangeable",
 body: [
 "There are broad conceptual parallels — a Zone 20 or 21 dust area is in the territory a Division 1 assessment would occupy, and Zone 22 sits closer to Division 2 — but these are not translations. The schemes have different equipment protection requirements, different marking systems and different certification bodies, and equipment-protection levels do not map one-to-one onto Divisions.",
 "For that reason a responsible supplier will not tell you that a certificate under one scheme satisfies the other. They will tell you what certificate exists, what it names, and who issued it.",
 ],
 },
 {
 heading: "What PrestiVac can state",
 body: [
 "Our certification is North American. The EX1 HEPA line is UL 1203 Certified under UL 1203 certification, naming Class I, Group D; Class II, Groups E, F and G; Temperature Code T3C, with the scope described as \u201cDry Vacuum Cleaner, Model Ex 1-xx HEPA.\u201d",
 "We do not claim ATEX certification. If you are specifying for a European site or any jurisdiction outside our certificate's coverage, tell us the requirement and we will tell you precisely what documentation applies to the configuration rather than implying an equivalence that does not exist.",
 ],
 },
 ],
 equipmentNote: [
 "Start from the jurisdiction and the classification assigned by your own engineering assessment, then ask what documentation exists for the exact configuration. Equipment selection is the last step, not the first.",
 "Where compressed air is available, air-operated units are often attractive across jurisdictions for a structural reason: with no electrical components in the recovery unit there is less to reconcile between schemes. That does not make them universally approved, and the classification still governs.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "Is an ATEX vacuum the same as a Class II vacuum?",
 answer:
 "No. ATEX is the European framework using Zones, and Class II Division is the North American framework for combustible dust. They address the same physical problem with different requirements, markings and certification bodies, and a certificate under one is not a certificate under the other.",
 },
 {
 question: "What is the ATEX equivalent of Class II, Division 1?",
 answer:
 "There is no exact equivalent. Conceptually, dust Zones 20 and 21 occupy the territory that a Division 1 assessment would cover, and Zone 22 sits closer to Division 2 — but the schemes are not translations of one another and equipment requirements differ. Determine which framework governs your site and specify against that framework.",
 },
 {
 question: "Does PrestiVac have ATEX certification?",
 answer:
 "We do not claim ATEX certification. Our certification is UL 1203 certification on the EX1 HEPA line, covering Class I, Group D and Class II, Groups E, F and G at Temperature Code T3C. Tell us your jurisdiction and we will confirm exactly what documentation applies to the configuration you need.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Intrinsically safe vacuums", href: "/hazardous-locations/intrinsically-safe-vacuums" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 slug: "combustible-dust-classification",
 name: "Combustible dust classification",
 title: "Combustible dust classification: what OSHA and NFPA actually require",
 eyebrow: "Standards",
 seo: {
 title: "Combustible Dust Classification — OSHA & NFPA 660 Requirements",
 description:
 "How combustible dust is classified and regulated: why there is no single OSHA combustible dust standard, how the National Emphasis Program and General Duty Clause apply, and what NFPA 660 consolidated.",
 },
 heroIntro:
 "One of the most common questions about dust safety has a surprising answer: there is no single comprehensive OSHA combustible dust standard. Understanding what does apply — and where NFPA sits in relation to it — is what makes a programme defensible.",
 keyPoints: [
 "OSHA has no comprehensive combustible dust standard for general industry",
 "Enforcement runs through the Combustible Dust National Emphasis Program",
 "The General Duty Clause and specific standards carry much of the weight",
 "NFPA 660 consolidated the former NFPA 61, 484, 652, 654, 655 and 664",
 ],
 sections: [
 {
 heading: "Why there is no single OSHA dust standard",
 body: [
 "People search for the OSHA combustible dust standard expecting a single regulation, and it does not exist for general industry. Rulemaking has been attempted and has not produced a comprehensive standard. What exists instead is a combination: the Combustible Dust National Emphasis Program, which directs inspection activity at facilities that handle combustible dust; the General Duty Clause, which requires employers to keep the workplace free of recognised hazards; and a set of specific standards that bear on housekeeping, storage and electrical installations in hazardous locations.",
 "One sector is different. Grain handling facilities have a dedicated standard with explicit housekeeping provisions, which is why grain elevators operate against codified numbers where many other dust facilities work from consensus standards instead.",
 ],
 },
 {
 heading: "Where NFPA fits",
 body: [
 "NFPA consensus standards carry the engineering substance. Historically the landscape was fragmented across commodity-specific documents: NFPA 61 for agricultural and food processing, 484 for combustible metals, 654 for particulate solids generally, 655 for sulfur, 664 for wood, and 652 setting the fundamentals including the Dust Hazard Analysis requirement.",
 "Those have been consolidated into NFPA 660. The consolidation reorganises rather than relaxes: the Dust Hazard Analysis remains the centrepiece, and it is the document that turns your dust situation into a written, defensible programme with identified hazards and specified controls.",
 ],
 },
 {
 heading: "Classification versus a DHA",
 body: [
 "Two different exercises get conflated. Electrical area classification determines what equipment may be installed and used in a space, and is assigned by an electrical or process engineer under the applicable code. A Dust Hazard Analysis assesses your process for dust hazards and specifies the controls — including housekeeping frequencies, ignition-source control and equipment requirements.",
 "They inform each other, and neither substitutes for the other. A facility can have a correct area classification and still fail a DHA on accumulation control.",
 ],
 },
 {
 heading: "What a defensible programme looks like",
 body: [
 "In practice: know your dust through testing rather than assumption; know your classification; identify the surfaces that actually accumulate, including the high steel and duct tops nobody inspects; assign frequencies to those surfaces; use recovery methods that remove dust rather than relocating or suspending it; and record the passes so the programme exists on paper as well as in habit.",
 CLASSIFICATION_DISCLAIMER,
 ],
 },
 ],
 equipmentNote: [
 "The equipment consequence of all of this is narrow and consistent: cleaning must remove accumulation without creating an ignition source and without discharging fines back into the room. That points to grounded, bonded, conductive recovery with retained filtration, and away from compressed-air blowdown and shop-grade vacuums.",
 "Where the dust is a conductive metal dust, or where exhaust air quality is regulated, the specification tightens further — Group E considerations on one side, HEPA retention on the other.",
 CSA_NOTE,
 ],
 faqs: [
 {
 question: "What is the OSHA combustible dust standard?",
 answer:
 "There is no single comprehensive OSHA combustible dust standard for general industry. OSHA addresses combustible dust through its Combustible Dust National Emphasis Program, the General Duty Clause, and specific standards bearing on housekeeping, storage and hazardous-location electrical installations. Grain handling facilities are the notable exception, having a dedicated standard with explicit housekeeping provisions.",
 },
 {
 question: "What replaced NFPA 652, 654 and 484?",
 answer:
 "They have been consolidated into NFPA 660, which brings the previously separate commodity-specific documents — including NFPA 61, 484, 652, 654, 655 and 664 — into a single standard. The Dust Hazard Analysis requirement introduced by NFPA 652 remains central.",
 },
 {
 question: "Is a Dust Hazard Analysis the same as area classification?",
 answer:
 "No. Area classification determines what equipment may be used in a given space under the electrical code and is assigned by your electrical or process engineer. A Dust Hazard Analysis assesses your process for dust hazards and specifies controls including housekeeping frequencies and ignition-source control. Both are needed and neither replaces the other.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "The NFPA landscape", href: "/resources/nfpa-guide" },
 { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
 { label: "Dusts & materials directory", href: "/materials" },
 ],
 },
];

export function getHazardousLocationTopic(slug: string) {
 return HAZARDOUS_LOCATION_TOPICS.find((topic) => topic.slug === slug);
}
