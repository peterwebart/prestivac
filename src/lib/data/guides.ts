import type { GuideArticle } from "@/components/templates/guide-article";

/**
 * Standalone explainer articles.
 *
 * Integrity rules:
 * - PrestiVac manufactures industrial vacuums, NOT dust collectors. The
 * vacuum-vs-dust-collector article says so plainly rather than implying a
 * product line that does not exist.
 * - No Kst, MIE, MEC or exposure values are stated. Dust behaviour is described
 * qualitatively and referred to testing.
 * - Certification referenced: UL 1203 (explosion proof lines).
 */

export const GUIDE_ARTICLES: GuideArticle[] = [
 {
 slug: "what-is-black-dust",
 name: "What is black dust?",
 title: "Black dust in industrial settings: what it",
 eyebrow: "Identification",
 minutes: 7,
 seo: {
 title: "What Is Black Dust? Industrial Sources",
 description:
 "Black dust in a plant is usually carbon black, coal or coke, graphite, toner, iron oxide or rubber — each with different hazards. How to identify what you have and why the answer changes the cleanup method.",
 },
 heroIntro:
 "Black dust is a description, not a material, and the materials it describes behave very differently. Some smoulder for days. One is electrically conductive. Several are combustible, one is essentially inert, and a couple carry exposure concerns that have nothing to do with fire. Identifying which you have is the first real step.",
 keyPoints: [
 "Black dust is a colour, not a composition — the hazards differ sharply",
 "Carbonaceous dusts smoulder: a glow can persist inside collected material",
 "Graphite is both combustible and electrically conductive",
 "Identification comes before method: the wrong cleanup can make things worse",
 ],
 sections: [
 {
 heading: "Carbon black",
 body: [
 "An engineered fine carbon powder used as pigment and reinforcing filler in rubber, coatings, inks and plastics. It is extraordinarily fine, stains everything it touches, and travels through a building on the smallest air current. It is a combustible carbonaceous dust in Class II Group F, and it smoulders — which matters more than its ignition sensitivity, because a deep-seated glow inside accumulated material can persist unnoticed and reignite later.",
 ],
 },
 {
 heading: "Coal and coke dust",
 body: [
 "Both are carbon fuels and both are combustible dusts in Group F. The coal mine and power plant explosion record is among the most thoroughly documented in industrial safety, and smouldering is again the characteristic behaviour — a stockpile or a collection container can hold a deep-seated fire that surfaces hours later. Chronic coal dust inhalation also causes coal workers' pneumoconiosis, so exposure control sits alongside fire control.",
 ],
 },
 {
 heading: "Graphite",
 body: [
 "Graphite deserves separate mention because it is both combustible and electrically conductive. Accumulation can bridge and short electrical equipment as well as provide fuel, which is why it sits in the conductive-dust conversation. In battery electrode manufacturing — where graphite is handled at scale — that conductivity is the reason housekeeping standards are set as tightly as they are.",
 ],
 },
 {
 heading: "Iron oxide, mill scale and grinding fines",
 body: [
 "Black or dark grey dust in a fabrication shop or foundry is often iron: mill scale flaking from hot-rolled stock, shot-blast dust, or grinding fines. Fine iron and steel dust can ignite and smoulder within collected material, and very fine freshly generated fines can behave pyrophorically. It is also abrasive, which wears recovery equipment not built for it.",
 ],
 },
 {
 heading: "Toner and rubber dust",
 body: [
 "Toner is a fine polymer-and-pigment powder, combustible and easily airborne, and a recurring problem in printing and copier service work. Rubber dust from grinding, buffing and tyre processing is combustible, produces dense toxic smoke when it burns, and holds heat well — so material sitting in a container after grinding deserves the same attention as the process.",
 ],
 },
 {
 heading: "The one that is not combustible",
 body: [
 "Not all dark dust is a fuel. Some mineral dusts and pigments are non-combustible, and cement and concrete dust — grey rather than black, but frequently lumped in — do not burn or deflagrate at all. Their hazard is respirable crystalline silica, a health hazard governed by an exposure limit rather than a fire risk. Assuming everything dark is combustible leads to over-specification; assuming nothing is leads to worse.",
 ],
 },
 {
 heading: "Black dust that is not industrial at all",
 body: [
 "Worth naming, because the question is often asked in a domestic context: black dust around vents or on surfaces at home is commonly soot from candles or heating appliances, or fine debris circulated by an HVAC system. That is a building services question rather than an industrial dust one, and the equipment discussed here is not the answer to it.",
 "If you are dealing with a plant, the useful next step is identification — knowing which of the materials above you have, ideally confirmed by testing, because the recovery method follows the material.",
 ],
 },
 ],
 faqs: [
 {
 question: "What is black dust in a factory?",
 answer:
 "Most often carbon black, coal or coke dust, graphite, iron oxide and mill scale, toner, or rubber dust — depending on the process. Each behaves differently: carbonaceous dusts smoulder, graphite is also electrically conductive, iron fines are abrasive and can be pyrophoric when very fine, and rubber produces dense toxic smoke. Some dark mineral dusts are not combustible at all.",
 },
 {
 question: "Is black dust dangerous?",
 answer:
 "It depends entirely on what it is. Carbonaceous dusts including carbon black, coal, coke and graphite are combustible and prone to smouldering. Coal dust also causes pneumoconiosis with chronic exposure. Graphite conducts electricity and can short equipment. Non-combustible dark mineral dusts may still carry respirable crystalline silica. Identification is what turns this from a guess into a plan.",
 },
 {
 question: "Why does black dust keep reappearing after cleaning?",
 answer:
 "Usually because it was relocated rather than removed. Sweeping lofts fines that settle again elsewhere, and compressed-air blowdown moves accumulation to less accessible surfaces — often overhead, where nobody sees it until it comes down. Very fine dusts such as carbon black also travel on minimal air movement, so an untreated source keeps re-seeding the area.",
 },
 {
 question: "Can I use a shop vacuum on black dust?",
 answer:
 "Not where it is combustible. A shop vacuum has a brushed motor that sparks, a plastic hose that accumulates static as dry dust passes through it, and filtration that returns the finest fraction to the room. With smouldering-prone carbonaceous dusts there is the added problem of what happens to material sitting inside the machine afterwards.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Coal Dust guide", href: "/materials/coal-dust" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Dusts & materials directory", href: "/materials" },
 ],
 },
 {
 slug: "recovered-dust-disposal-and-reclaim",
 name: "Recovered dust: reclaim or dispose?",
 title: "What to do with recovered dust — reclaim, recycle",
 eyebrow: "Operations",
 minutes: 6,
 seo: {
 title: "Recovered Dust Disposal & Reclaim — What Happens",
 description:
 "Collected dust is not finished business. When material can be reclaimed, when it is regulated waste, and why a full container standing in the plant is its own hazard.",
 },
 heroIntro:
 "Most dust programmes stop thinking at the point of capture, which is a mistake — several of the worst outcomes happen after recovery, inside a container nobody has moved. What happens to collected material is part of the design, not an afterthought.",
 keyPoints: [
 "A full container is an accumulation, not a solution",
 "Some materials are worth reclaiming; others are regulated waste",
 "Reactive metal fines and carbonaceous dusts can build heat after collection",
 "Segregation decisions have to be made before the container fills",
 ],
 sections: [
 {
 heading: "The container is part of the hazard",
 body: [
 "Recovered material concentrated in a drum is the same fuel that was spread thinly across the plant, now conveniently gathered in one place. For carbonaceous dusts a deep-seated smoulder can persist inside collected material and reignite hours later. For reactive metal fines, moisture reaching the container is a slow problem developing quietly. For toxic powders, the container change is frequently the highest-exposure moment in the entire cycle — higher than the recovery it followed.",
 "The practical consequences are unglamorous and effective: get recovered material out of the building rather than letting containers stand, plan the change as a procedure rather than improvising at end of shift, and do not park a full drum next to the process that filled it.",
 ],
 },
 {
 heading: "When material can be reclaimed",
 body: [
 "Some recovered dust has genuine value. Powder coating overspray is the clearest case — recovered powder can often be reintroduced where colour changeover discipline and contamination control allow it, which turns housekeeping into a cost recovery. Metal fines and machining swarf have scrap value that improves considerably when metals are kept segregated rather than mixed, and food and pharmaceutical operations sometimes reclaim material within defined sanitation and traceability limits.",
 "Reclaim depends on keeping the recovery stream clean, which is a decision made at the machine rather than at the drum. Once several materials are combined with coolant and floor sweepings, the value is gone and the disposal route gets more complicated rather than less.",
 ],
 },
 {
 heading: "When it is regulated waste",
 body: [
 "Where the material is a regulated substance the disposal route is prescribed rather than chosen. Lead, cadmium, beryllium, arsenic, hexavalent chromium and asbestos-containing material all fall into this territory, each governed by its own standard, and the recovered dust carries the same status as the material it came from. Sealed collection, labelled containers, a defined transport route and documentation are the norm rather than the exception.",
 "This is why dedicated equipment matters in regulated areas: a vacuum that has recovered a regulated substance and then cleans elsewhere has moved a compliance problem into a new part of the building.",
 ],
 },
 {
 heading: "Segregation decisions come first",
 body: [
 "Almost every disposal difficulty traces back to a mixing decision made earlier. Reactive metal fines combined with other swarf, leaded brass mixed with clean copper alloy, coolant introduced into a stream that would otherwise be dry — each of those makes the material harder and more expensive to deal with, and some of them make it more dangerous.",
 "Deciding what streams exist, labelling collection accordingly, and telling the people who empty containers what is in them is the least glamorous part of a dust programme and one of the most consistently useful.",
 ],
 },
 ],
 faqs: [
 {
 question: "Can recovered dust be recycled?",
 answer:
 "Sometimes, and it depends on the material and how cleanly it was collected. Powder coating overspray is often reclaimable where contamination and colour changeover are controlled. Metal fines have scrap value that improves considerably when metals are kept segregated. Regulated substances such as lead, cadmium, beryllium and asbestos-containing material follow prescribed disposal routes instead.",
 },
 {
 question: "Is it safe to leave a full vacuum container in the plant?",
 answer:
 "It is a practice worth designing out. A full container concentrates the same fuel that was spread across the plant into one location. Carbonaceous dusts can smoulder internally and reignite hours later, reactive metal fines are sensitive to moisture reaching them, and toxic powders present their highest exposure risk at the container change. Removing recovered material from the building promptly is the simple control.",
 },
 {
 question: "How should regulated dust be disposed of?",
 answer:
 "Following the standard that governs the substance. Lead, cadmium, beryllium, arsenic, hexavalent chromium and asbestos each have their own regulatory framework, and recovered dust carries the same status as the parent material — sealed containment, labelling, a defined route and records. Your environmental and health-and-safety functions own that determination; we build the recovery equipment that feeds into it.",
 },
 {
 question: "Why does segregation matter so much?",
 answer:
 "Because mixing is irreversible and usually expensive. Combining metals destroys scrap value, introducing coolant into a dry stream complicates handling, and mixing a regulated substance into general waste escalates the whole container's status. The decision is made at the machine when collection is set up, not at the drum when it is full.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Powder coating guide", href: "/applications/powder-coating" },
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "Cadmium Dust guide", href: "/materials/cadmium-dust" },
 { label: "Drum filling guide", href: "/applications/drum-filling" },
 ],
 },
 {
 slug: "toxic-liquid-recovery",
 name: "Toxic liquid recovery",
 title: "Recovering toxic and aggressive liquids safely",
 eyebrow: "Equipment selection",
 minutes: 6,
 seo: {
 title: "Toxic Liquid Recovery — Chemical Spills, Coolant",
 description:
 "Recovering hazardous liquids is a compatibility problem before it is a suction problem. How chemistry, containment and disposal shape the specification for wet recovery.",
 },
 heroIntro:
 "With liquids the usual questions invert. Suction is rarely the constraint; what the liquid does to the machine and to whoever empties it usually is. Specifying wet recovery for aggressive or toxic material starts with chemistry rather than performance.",
 keyPoints: [
 "Compatibility first: recovered liquid attacks seals, hoses and vessel surfaces",
 "Containment matters most at discharge, not at pickup",
 "Some reactive solids are handled wet deliberately to reduce ignition risk",
 "Recovered liquid is heavy and often regulated — plan the route out",
 ],
 sections: [
 {
 heading: "Chemistry before performance",
 body: [
 "The first question about an aggressive liquid is what it is in contact with. Acids, solvents, caustics and process chemicals attack seals, gaskets, hose liners, filters and vessel surfaces at different rates, and a machine that handles one comfortably may degrade quickly on another. Construction is chosen against the chemistry, and mixed streams are harder than single ones because compatibility has to hold for everything in the mix.",
 "Temperature and concentration change the answer too, so describe the liquid as it actually arrives — hot, diluted, contaminated with solids — rather than as the pure substance on the datasheet.",
 ],
 },
 {
 heading: "The discharge step is the exposure step",
 body: [
 "As with toxic powders, the highest-risk moment is usually not recovery but emptying. Recovered liquid is heavy, it splashes, and it concentrates whatever was spread across the floor into a vessel someone has to move. Designing the discharge — height, method, containment, and whether it can be done without decanting — does more for operator safety than any amount of suction.",
 ],
 },
 {
 heading: "Where wet recovery is a safety choice, not a convenience",
 body: [
 "Some materials are handled wet specifically to reduce risk. Reactive metal fines are the clearest example: keeping recovered material wetted rather than accumulating dry in a container removes the failure mode where heat builds inside collected fines. That is a material-specific decision established by assessment rather than a default — and it does not make water an extinguishing medium for those metals, which remain Class D.",
 "Coolant recovery sits at the other end of the spectrum: routine, high volume, and mostly a handling and separation problem, though the coolant itself may carry metal fines, bacteria and additives worth accounting for.",
 ],
 },
 {
 heading: "Disposal is part of the specification",
 body: [
 "Recovered liquid frequently has a regulated destination, and the volume is unforgiving — a modest spill becomes a heavy drum. Establish where it goes before choosing how to collect it, because the disposal route often constrains container size, discharge method and whether solids need separating out at the point of recovery.",
 ],
 },
 ],
 faqs: [
 {
 question: "Can an industrial vacuum recover acids and solvents?",
 answer:
 "It depends on construction and the specific chemistry. Acids, solvents and caustics attack seals, hoses, filters and vessel surfaces at different rates, so compatibility is established against the actual liquid — as it arrives, including temperature, concentration and any entrained solids — rather than against a general category. Describe the stream and the construction follows from it.",
 },
 {
 question: "What is the difference between wet recovery and immersion separation?",
 answer:
 "Wet recovery is about handling liquid: coolant, slurry, spill response. Immersion separation is a specific approach where recovered material is drawn into a liquid medium so that reactive solids stay wetted rather than accumulating dry — used with reactive metal fines to remove the heat-build failure mode. One is about what you are picking up; the other is about how recovered material is stored inside the machine.",
 },
 {
 question: "What is the biggest risk when recovering toxic liquid?",
 answer:
 "Usually the discharge. Recovered liquid is heavy, it splashes, and emptying concentrates the material into a vessel someone has to handle. Planning the discharge method, height and containment — and whether decanting can be avoided entirely — does more for operator safety than additional suction.",
 },
 {
 question: "Does recovered liquid need special disposal?",
 answer:
 "Often yes, and it is worth establishing before choosing collection equipment. Regulated liquids have prescribed destinations, and the disposal route commonly constrains container size, discharge method and whether solids should be separated at the point of recovery. Your environmental function owns that determination.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Wet & dry systems", href: "/products/wet-dry-systems" },
 { label: "Spill cleanup guide", href: "/applications/spill-cleanup" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 ],
 },
 {
 slug: "vacuum-vs-dust-collector",
 name: "Vacuum vs dust collector",
 title: "Industrial vacuum or dust collector? They solve",
 eyebrow: "Equipment comparison",
 minutes: 7,
 seo: {
 title: "Industrial Vacuum vs Dust Collector — Which Do",
 description:
 "Dust collectors capture dust at the source; industrial vacuums remove what has already settled. How high-volume/low-vacuum differs from low-volume/high-vacuum, and why a complete dust programme needs both.",
 },
 heroIntro:
 "These two machines get searched for interchangeably and they are not interchangeable. A dust collector stops dust reaching the room; an industrial vacuum removes the dust that got there anyway. Almost every serious dust programme needs both, and confusing them is how facilities end up with an expensive collection system and a broom.",
 keyPoints: [
 "Dust collector: high air volume, low vacuum — source capture through fixed ducting",
 "Industrial vacuum: low air volume, high vacuum — removes settled material and spills",
 "They are complementary controls, not alternatives",
 "PrestiVac builds industrial vacuums; we do not manufacture dust collectors",
 ],
 sections: [
 {
 heading: "The physics that separates them",
 body: [
 "A dust collector is built around moving a lot of air at relatively low suction. It draws air through hoods and ducting from fixed points on machines, pulls it through a filter housing, and returns or exhausts the cleaned air. Its job is capture velocity across an opening — intercepting particulate at the moment it is generated, before it disperses into the workspace.",
 "An industrial vacuum is the opposite trade: a smaller volume of air at much higher suction. That is what lets it lift settled dust off a beam, pull heavy chips out of a machine bed, or recover a spilled bag of powder. Try to do that with a collector's airflow characteristics and nothing moves; try to ventilate a grinding station with a vacuum and you cannot maintain capture across the opening.",
 "Neither is a better machine. They are answers to different questions, and the questions are sequential: stop what you can at the source, then remove what escaped.",
 ],
 },
 {
 heading: "Why a dust programme needs both",
 body: [
 "The mechanism behind catastrophic dust incidents is a primary event that disturbs accumulated dust, followed by a secondary explosion propagating through the building. The fuel for the secondary event is not the cloud at the machine — it is the layer on the high steel, the duct tops, the cable trays and the equipment housings.",
 "Source capture reduces how much dust ever reaches those surfaces. It does not reach zero, and it does nothing about what accumulated before the collector was installed, what settles during a filter change, or what spills when a bag splits. Removing accumulation is a separate control with separate equipment, and it is the one that NFPA 660 treats as fundamental.",
 "A facility with excellent source capture and no housekeeping programme still has a secondary explosion hazard. A facility with excellent housekeeping and no source capture is fighting a losing battle against generation rate. The pairing is the point.",
 ],
 },
 {
 heading: "What people actually mean when they search for a dust collector",
 body: [
 "Searches for an explosion proof dust collector, an aluminium dust collector or a metal dust collector usually come from one of two situations. The first is a genuine need for a collection system — ducted source capture at machines, sized by an engineer, with explosion protection provisions appropriate to the material. The second, more often than people expect, is a housekeeping problem being described in the vocabulary the searcher happened to learn first.",
 "It is worth working out which you have before buying either. If the problem is dust escaping at a grinder while it runs, that is a capture problem. If the problem is accumulation on surfaces, inside machines and around the plant, that is a recovery problem — and a collection system will not touch it.",
 ],
 },
 {
 heading: "Where the material changes the answer",
 body: [
 "For combustible dust, both halves come with protection requirements, and for conductive metal dust the requirements tighten further. On the recovery side that means a conductive, grounded and bonded path from hose tip to container, anti-static accessories, and a drive suitable for the area classification. Reactive metal fines may also call for immersion separation so recovered material stays wetted rather than accumulating dry.",
 "On the collection side, explosion protection for a ducted system is its own engineering discipline — venting, isolation, suppression and duct design — and it belongs with a specialist in that field.",
 ],
 },
 ],
 comparison: {
 heading: "Side by side",
 columns: ["Dust collector", "Industrial vacuum"],
 rows: [
 {
 aspect: "Air characteristics",
 left: "High volume, low vacuum",
 right: "Lower volume, high vacuum",
 },
 {
 aspect: "Job",
 left: "Capture dust at the source before it disperses",
 right: "Remove dust that has already settled, plus spills and chips",
 },
 {
 aspect: "Typical form",
 left: "Fixed installation with hoods, ducting, fan and filter housing",
 right: "Portable unit or central system with hose and tooling",
 },
 {
 aspect: "Reaches",
 left: "The machine it is ducted to",
 right: "High steel, ledges, machine interiors, floors, anywhere with a hose",
 },
 {
 aspect: "Role in the dust programme",
 left: "Reduces generation reaching the workspace",
 right: "Removes the accumulation that fuels a secondary event",
 },
 {
 aspect: "PrestiVac builds this",
 left: "No — we do not manufacture dust collectors",
 right: "Yes — this is our entire product line",
 },
 ],
 },
 callout: {
 heading: "Being straight about what we make",
 body: [
 "PrestiVac manufactures industrial vacuums — explosion-proof, HEPA, air-operated, wet and dry, central systems and custom-built units. We do not manufacture dust collectors, and we would rather tell you that than sell you the wrong half of a solution.",
 "If your problem is accumulation, spills, machine cleanout or classified-area housekeeping, that is what we build for. If you need ducted source capture with explosion protection, you want a collection-system specialist — and the two purchases coexist perfectly well.",
 ],
 },
 faqs: [
 {
 question: "What is the difference between an industrial vacuum and a dust collector?",
 answer:
 "A dust collector moves a high volume of air at low suction to capture dust at the source through fixed hoods and ducting. An industrial vacuum moves a lower volume of air at high suction to remove dust that has already settled, along with spills and chips. The collector prevents dust reaching the room; the vacuum removes what got there anyway. Most dust programmes need both.",
 },
 {
 question: "Can an industrial vacuum replace a dust collector?",
 answer:
 "No. A vacuum cannot maintain capture velocity across a machine opening the way a ducted collector does, so it will not control dust at the point of generation. Equally, a collector cannot lift settled dust off overhead steel or recover a spilled sack. They are complementary rather than substitutable.",
 },
 {
 question: "Do you sell explosion proof dust collectors?",
 answer:
 "No. We manufacture explosion-proof industrial vacuums, not dust collectors. If you need ducted source capture with explosion protection provisions, that is a collection-system specialist's field. If you need to remove accumulated combustible dust safely — which is the control NFPA 660 treats as fundamental — that is what we build.",
 },
 {
 question: "Which should I buy first?",
 answer:
 "That depends on which problem is worse. If dust is visibly escaping while machines run, source capture addresses the generation rate. If you have accumulation on surfaces, in machines and on overhead steel, that fuel is already in the building and removing it is the more urgent control. A Dust Hazard Analysis is the proper way to answer this rather than guessing.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
 { label: "Combustible dust vacuums", href: "/combustible-dust" },
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 ],
 },
 {
 slug: "sources-of-ignition",
 name: "Sources of ignition",
 title: "Sources of ignition in dust handling: the list",
 eyebrow: "Fundamentals",
 minutes: 8,
 seo: {
 title: "Sources of Ignition for Combustible Dust",
 description:
 "Mechanical sparks, hot surfaces, static discharge, electrical arcs, hot work, self-heating and smouldering — the ignition sources that matter in dust handling, and how each is controlled.",
 },
 heroIntro:
 "A dust cloud is not dangerous on its own. It becomes dangerous when it meets an ignition source, and the list of credible sources in a working plant is longer and more mundane than most people assume — which is exactly why removing the fuel remains the most reliable control.",
 keyPoints: [
 "Ignition sources in dust plants are usually ordinary, not exotic",
 "Static discharge is the one most often designed out and least often noticed",
 "Self-heating and smouldering can ignite material with no external spark",
 "Removing accumulation is more reliable than eliminating every ignition source",
 ],
 sections: [
 {
 heading: "Mechanical: friction, impact and tramp metal",
 body: [
 "Friction from a misaligned belt, a dragging conveyor, a seized roller or a bearing running dry generates sustained heat in exactly the places dust accumulates. Impact sparks arise when tramp metal enters a mill or a conveyor, or when a tool is dropped onto a hard surface in a dusty area.",
 "Bearings deserve particular attention because they combine three conditions: they get hot when they fail, they are often inside or adjacent to material paths, and they fail gradually enough that the heat precedes the noise. Condition monitoring is a dust control as much as a maintenance practice.",
 ],
 },
 {
 heading: "Static electricity",
 body: [
 "Dry particulate moving through hoses, chutes, ducting and pneumatic conveying lines separates charge, and that charge accumulates on anything not bonded to ground — including operators, plastic hoses, unbonded containers and isolated metal parts. A discharge from an accumulated charge is a credible ignition source for many dusts, and it is invisible until it happens.",
 "This is the specific reason recovery equipment for combustible dust is built with a conductive, grounded and bonded path from hose tip to collection container, with anti-static accessories rather than ordinary plastic hose. It is also why a standard shop vacuum is a poor choice in a dust area even setting its motor aside: the hose itself is a charge generator sitting where dust concentration is highest.",
 ],
 },
 {
 heading: "Hot surfaces and electrical sources",
 body: [
 "Motors, drives, lighting, heaters, dryers and process equipment all present surfaces that may exceed the ignition temperature of a dust layer resting on them. A dust layer also insulates, so a surface that runs safely bare can run hotter under accumulation — the accumulation creates the hazard it then feeds.",
 "Electrical arcs and sparks from switches, connections, damaged cabling and non-classified equipment are the reason hazardous-location classification exists in the first place. Conductive metal dust adds a second failure mode by bridging connections directly.",
 ],
 },
 {
 heading: "Hot work, open flame and smoking",
 body: [
 "Welding, cutting, grinding and brazing introduce sparks and hot slag deliberately, and they are frequently performed in areas whose dust accumulation was never assessed for that activity. A hot work permit system that includes dust accumulation in its pre-work checks catches this; one that only considers flammable liquids does not.",
 "The unglamorous items belong on the list too: smoking, portable heaters, and temporary lighting brought in for a shutdown.",
 ],
 },
 {
 heading: "Self-heating and smouldering",
 body: [
 "Some materials generate heat internally through slow oxidation or biological activity, and in sufficient bulk with poor heat dissipation that can progress to self-ignition without any external source. Carbonaceous dusts are known for deep-seated smouldering — a glow inside accumulated material that persists unnoticed and can reignite long after a visible event appeared resolved.",
 "This is why recovered material should not sit in collection containers in the building at the end of a shift, and why a fire that appears extinguished in a bin deserves follow-up rather than relief.",
 ],
 },
 {
 heading: "Why the fuel side is the more reliable control",
 body: [
 "Every item above is controllable, and a good programme controls them. But the list is long, the sources are ordinary, and plants are dynamic places where a new contractor with an angle grinder can appear on any given Tuesday. Assuming complete elimination of ignition sources is optimistic.",
 "Accumulation control does not depend on that assumption. Removing the layer removes the secondary explosion regardless of what ignites the primary one, which is why NFPA 660 treats housekeeping as fundamental rather than supplementary.",
 ],
 },
 ],
 faqs: [
 {
 question: "What are the main sources of ignition for combustible dust?",
 answer:
 "Mechanical friction and impact including tramp metal and failing bearings; static discharge from dry material moving through hoses and conveying; hot surfaces on motors, drives and process equipment; electrical arcs and sparks from unsuitable or damaged equipment; hot work such as welding, cutting and grinding; open flame and smoking; and self-heating or deep-seated smouldering within accumulated material.",
 },
 {
 question: "Is static electricity really enough to ignite dust?",
 answer:
 "For many dusts, yes — and it is the source most often underestimated because it is invisible. Dry particulate moving through hoses and ducting separates charge, which accumulates on anything not bonded to ground. This is why combustible-dust recovery equipment is built conductive, grounded and bonded throughout, with anti-static hose rather than ordinary plastic.",
 },
 {
 question: "Can dust ignite without a spark?",
 answer:
 "Yes. Some materials self-heat through slow oxidation or biological activity, and in bulk with poor heat dissipation that can progress to ignition with no external source. Carbonaceous dusts in particular are known for deep-seated smouldering inside accumulated material, which can persist unnoticed and reignite later.",
 },
 {
 question: "If we control ignition sources, do we still need housekeeping?",
 answer:
 "Yes, and housekeeping is the more reliable of the two controls. Ignition sources are numerous, ordinary and reintroduced constantly by maintenance, contractors and equipment wear. Accumulation control does not depend on eliminating all of them — removing the fuel removes the secondary explosion whatever ignites the primary event.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Dust explosion basics", href: "/guides/dust-explosion-basics" },
 { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
 { label: "ESD & anti-static vacuums", href: "/guides/esd-anti-static-vacuums" },
 { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
 ],
 },
 {
 slug: "dust-explosion-basics",
 name: "Dust explosion basics",
 title: "How dust explosions actually work — and why the",
 eyebrow: "Fundamentals",
 minutes: 7,
 seo: {
 title: "How Dust Explosions Happen — Primary, Secondary &",
 description:
 "The five conditions a dust deflagration needs, why particle size changes everything, and why the secondary explosion — fed by accumulated dust — is what destroys buildings.",
 },
 heroIntro:
 "Dust explosions are not mysterious. They need five specific conditions present together, and industrial processes routinely supply four of them. Understanding which condition you can actually control is what turns dust safety from anxiety into a programme.",
 keyPoints: [
 "Five conditions: combustible dust, oxygen, dispersion, confinement, ignition",
 "Particle size is the variable that turns inert material into fuel",
 "The secondary explosion — fed by accumulated dust — causes the destruction",
 "Accumulation control is the condition most reliably within your grasp",
 ],
 sections: [
 {
 heading: "The five conditions",
 body: [
 "A dust deflagration requires combustible dust as fuel, oxygen as oxidiser, dispersion of that dust into a cloud, some degree of confinement so pressure can build, and an ignition source. Remove any one and there is no event. Fire safety training usually presents this as a pentagon precisely because the count matters — the familiar fire triangle is missing the two conditions that make dust different.",
 "In a working plant, oxygen is a given, confinement is inherent to equipment and buildings, dispersion happens at every transfer, and ignition sources are ordinary and numerous. That leaves the fuel — which is the condition housekeeping addresses.",
 ],
 },
 {
 heading: "Why particle size changes the material",
 body: [
 "A wooden beam does not explode; wood dust does. A block of aluminium does not ignite in a shop; aluminium grinding dust does. Nothing about the chemistry changes between those pairs — the geometry changes. Reducing a given mass to fine particles exposes an enormous surface area to oxygen, so combustion propagates through the entire cloud almost simultaneously rather than creeping across a surface.",
 "Because behaviour depends on particle size, moisture and composition, the properties of your specific dust are established by laboratory testing rather than inferred from a similar material. Two mills grinding the same commodity to different finenesses do not have the same dust.",
 ],
 },
 {
 heading: "Primary and secondary explosions",
 body: [
 "The primary explosion is usually modest and often contained within a piece of equipment — a mill, a dryer, a dust collector, a bucket elevator. On its own it might be a serious incident with local damage.",
 "What turns it into a catastrophe is the pressure wave. It travels out into the building and lifts every layer of settled dust it passes: floors, beams, ledges, cable trays, duct tops, equipment housings. That newly suspended dust meets the flame front from the primary event, and the secondary explosion propagates through the whole structure. This is the mechanism behind essentially every well-known industrial dust disaster, and it is why the dust nobody can see from the floor is the dust that matters most.",
 ],
 },
 {
 heading: "What this implies for cleaning method",
 body: [
 "If the destructive event is fed by accumulation, then the method used to remove accumulation is a safety decision. Sweeping lofts fines into suspension and leaves overhead surfaces untouched. Compressed-air blowdown does something worse: it deliberately creates the dispersed cloud that condition three describes, often in an area with confinement and ignition sources already present.",
 "Vacuum recovery removes material from the building rather than relocating it — provided the equipment itself is not an ignition source, which is what grounding, bonding, conductive accessories and a suitable drive are for, and provided the filtration retains what it captures rather than exhausting fines back into the room.",
 ],
 },
 ],
 faqs: [
 {
 question: "What conditions are needed for a dust explosion?",
 answer:
 "Five together: combustible dust as fuel, oxygen, dispersion of the dust into a cloud, confinement so pressure can build, and an ignition source. Industrial processes routinely supply oxygen, confinement, dispersion and ignition, which leaves the fuel as the condition housekeeping can most reliably control.",
 },
 {
 question: "Why is the secondary explosion worse than the primary?",
 answer:
 "The primary explosion is often modest and contained within equipment. Its pressure wave then lifts accumulated dust from floors, beams, ledges and duct tops throughout the building, and that suspended dust meets the flame front — producing a secondary explosion that propagates through the whole structure. The accumulation is what converts a local incident into a catastrophe.",
 },
 {
 question: "Why does dust explode when the solid material does not burn easily?",
 answer:
 "Surface area. Reducing material to fine particles exposes vastly more of it to oxygen, so combustion propagates through the cloud almost at once instead of creeping across a surface. This is why a wooden beam is not an explosion hazard and wood dust is, and why particle size — not the identity of the material alone — determines the behaviour.",
 },
 {
 question: "How do I know if my dust is explosible?",
 answer:
 "By testing it. Combustibility and explosion severity depend on particle size, moisture content and composition, so the properties of your specific material cannot be reliably inferred from a similar one. Laboratory testing of representative samples is what a Dust Hazard Analysis is built on.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
 { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Dusts & materials directory", href: "/materials" },
 ],
 },
 {
 slug: "dust-hazard-analysis",
 name: "Dust hazard analysis",
 title: "What a Dust Hazard Analysis actually involves",
 eyebrow: "Compliance",
 minutes: 7,
 seo: {
 title: "Dust Hazard Analysis (DHA) — What It Is and What",
 description:
 "The Dust Hazard Analysis is the centrepiece of NFPA's combustible dust requirements. What a DHA covers, who performs it, what it produces, and how housekeeping frequencies come out of it.",
 },
 heroIntro:
 "The Dust Hazard Analysis is where a facility's dust situation becomes a written, defensible programme instead of an accumulation of habits. It is also the document that turns vague intentions about housekeeping into specific intervals for specific surfaces.",
 keyPoints: [
 "Introduced as a requirement by NFPA 652, now carried into NFPA 660",
 "Systematically identifies dust hazards across materials, equipment and areas",
 "Produces specified controls — including housekeeping frequencies",
 "Distinct from electrical area classification; both are needed",
 ],
 sections: [
 {
 heading: "What a DHA is for",
 body: [
 "A Dust Hazard Analysis is a systematic review of a facility's processes to identify where combustible dust hazards exist, evaluate the consequences, and specify the controls that manage them. It was introduced as an explicit requirement by NFPA 652 and is carried forward in NFPA 660, which consolidated the previously separate commodity standards — NFPA 61, 484, 652, 654, 655 and 664.",
 "The reason it exists is that dust hazards are systemic rather than local. A single machine can be assessed in isolation and still miss the interaction that matters: material moving between areas, accumulation in shared spaces, and the propagation paths that turn one event into several.",
 ],
 },
 {
 heading: "What it examines",
 body: [
 "In broad terms: the materials handled and their tested properties; where dust is generated, conveyed and stored; the equipment involved and its internal conditions; credible ignition sources; accumulation on surfaces and inside equipment; the potential for propagation between areas; and the adequacy of existing controls including housekeeping, ignition-source management and any explosion protection.",
 "Testing sits underneath all of it. Because behaviour depends on particle size and moisture, a DHA built on assumed material properties is built on sand — representative samples of the actual dust are what make the analysis meaningful.",
 ],
 },
 {
 heading: "What it produces",
 body: [
 "The output is a documented set of identified hazards with specified controls and a plan for implementing them. For most facilities the housekeeping section is the part that changes daily life: which surfaces accumulate, what interval each is cleaned at, what method is used, and how the pass is recorded.",
 "That specificity is the whole value. A programme that says keep the plant clean cannot be audited, improved or defended. One that says these ledges, this duct run and this mill enclosure at these intervals by this method, logged here, can be all three.",
 ],
 },
 {
 heading: "How it differs from area classification",
 body: [
 "These two exercises are routinely conflated. Electrical area classification determines what equipment may be installed and used in a space, is assigned under the electrical code by an electrical or process engineer, and is accepted by the authority having jurisdiction. A DHA assesses process dust hazards and specifies controls.",
 "They inform each other and neither substitutes for the other. A facility can hold a perfectly correct area classification and still fail on accumulation control, which is a DHA question.",
 ],
 },
 {
 heading: "Who performs one",
 body: [
 "A DHA calls for someone qualified in combustible dust hazards — often a specialist consultant, sometimes in-house engineering where that expertise genuinely exists, and typically in collaboration with the people who operate the plant, because the accumulation nobody documents is usually known to the person who cleans it.",
 "We are not a DHA provider. What we build is the recovery equipment that the housekeeping controls in a DHA end up specifying, and we are happy to work from a DHA you already have rather than asking you to reverse-engineer requirements from a product.",
 ],
 },
 ],
 faqs: [
 {
 question: "What is a Dust Hazard Analysis?",
 answer:
 "A systematic review of a facility's processes to identify combustible dust hazards, evaluate their consequences and specify controls. It was introduced as a requirement by NFPA 652 and is carried into NFPA 660, which consolidated the former commodity-specific standards including NFPA 61, 484, 654, 655 and 664.",
 },
 {
 question: "Is a DHA the same as area classification?",
 answer:
 "No. Area classification determines what equipment may be used in a space under the electrical code and is assigned by an electrical or process engineer. A DHA assesses process dust hazards and specifies controls including housekeeping frequencies and ignition-source management. Both are needed and neither replaces the other.",
 },
 {
 question: "What does a DHA say about housekeeping?",
 answer:
 "It is where housekeeping stops being a general intention and becomes specific: which surfaces accumulate dust, at what interval each is cleaned, by what method, and how the pass is recorded. That specificity is what makes a programme auditable and defensible.",
 },
 {
 question: "Do you perform Dust Hazard Analyses?",
 answer:
 "No — we manufacture industrial vacuums, and a DHA calls for a qualified combustible dust specialist. We are glad to work from a DHA you already hold and match equipment to the housekeeping controls it specifies, which is a better sequence than choosing a machine and hoping it fits the analysis later.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Dust explosion basics", href: "/guides/dust-explosion-basics" },
 { label: "Hazardous location vacuums", href: "/hazardous-location-vacuums" },
 { label: "Vacuum vs dust collector", href: "/guides/vacuum-vs-dust-collector" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 slug: "esd-anti-static-vacuums",
 name: "ESD & anti-static vacuums",
 title: "Anti-static and ESD-safe vacuums: two different",
 eyebrow: "Equipment selection",
 minutes: 6,
 seo: {
 title: "ESD Safe vs Anti-Static Vacuums",
 description:
 "Anti-static construction prevents static discharge igniting dust; ESD-safe protects sensitive electronics from damage. Two different goals, and why knowing which you need changes the specification.",
 },
 heroIntro:
 "Anti-static and ESD-safe get used as synonyms and they answer different questions. One is about not igniting a dust cloud. The other is about not destroying a component worth more than the vacuum. Facilities that need both should say so, because the specification is not identical.",
 keyPoints: [
 "Anti-static in dust handling: prevent a discharge igniting combustible dust",
 "ESD-safe in electronics: protect sensitive components from damage",
 "Both rely on controlled conductivity and a path to ground",
 "Ordinary plastic hose is a charge generator — the opposite of both goals",
 ],
 sections: [
 {
 heading: "The ignition problem",
 body: [
 "Dry particulate moving through a hose separates charge. On a non-conductive plastic hose that charge accumulates with nowhere to go, and the accumulation sits precisely where dust concentration is highest — inside the airflow, at the working end, in the operator's hand. A discharge there is a credible ignition source for many dusts.",
 "The control is a conductive, bonded and grounded path from the hose tip through the wand and the unit to earth, so charge dissipates continuously instead of building. That is what anti-static accessories are for in a combustible dust context, and it is why they are part of the safety case rather than an upgrade. It also explains why a standard shop vacuum is unsuitable in a dust area even before considering its motor.",
 ],
 },
 {
 heading: "The component-damage problem",
 body: [
 "In electronics manufacturing, semiconductor work and cleanroom assembly, the concern reverses. The dust is usually not the hazard — the discharge is, because electrostatic discharge damages sensitive components at voltages a person cannot feel. ESD-safe equipment is specified so that cleaning does not destroy product, and it forms part of a wider static-control programme covering flooring, wrist straps, workstations and packaging.",
 "The physics overlaps with the ignition case — both want controlled conductivity and a defined path to ground — but the acceptance criteria come from different standards and the consequence of failure is different. Confirm which requirement your facility is working to.",
 ],
 },
 {
 heading: "Where both apply at once",
 body: [
 "Plenty of facilities need both. A battery plant handles conductive electrode powders that are a combustible dust hazard while assembling components that are ESD-sensitive. Semiconductor operations handle fine particulate and sensitive devices in the same room. In those environments the requirement is not one or the other, and the specification should name both.",
 "Filtration usually enters the conversation here too, because these are also the environments where exhaust air quality matters — HEPA retention so a cleaning pass does not redistribute fines across a clean space.",
 ],
 },
 {
 heading: "What to specify",
 body: [
 "State the material, the area classification if one applies, and whether the concern is ignition, component protection or both. Ask about the whole accessory chain rather than the unit alone — hose, wand, tools and the bonding between them, since the path to ground is only as good as its weakest link. Ask what the filtration is tested to if exhaust quality matters.",
 "PrestiVac's EX1 HEPA line is UL 1203 Certified under UL 1203 certification for Class I, Group D and Class II, Groups E, F and G at Temperature Code T3C. Coverage varies by line and configuration, so ask us for the documents applicable to the unit you are specifying rather than assuming a family-wide claim.",
 ],
 },
 ],
 faqs: [
 {
 question: "What is the difference between an anti-static vacuum and an ESD-safe vacuum?",
 answer:
 "Anti-static construction in dust handling exists to stop a static discharge igniting combustible dust — the goal is safety of the area. ESD-safe equipment in electronics exists to stop electrostatic discharge damaging sensitive components — the goal is protection of the product. Both rely on controlled conductivity and a path to ground, but they are specified against different requirements.",
 },
 {
 question: "Why is a plastic hose a problem?",
 answer:
 "Dry particulate moving through a non-conductive hose separates charge, and on plastic that charge accumulates with no path to ground, right where dust concentration is highest. Anti-static hose and conductive accessories bonded through to earth let that charge dissipate continuously instead of building toward a discharge.",
 },
 {
 question: "Do I need anti-static accessories if the vacuum is already explosion proof?",
 answer:
 "Yes. The accessory chain is part of the grounded, bonded path, not an optional extra attached to it. A suitable drive addresses the motor; the hose and tooling address the charge the material itself generates. A conductive unit at the end of a plastic hose has a gap in the middle of its safety case.",
 },
 {
 question: "Can one vacuum serve a combustible dust area and an ESD-sensitive area?",
 answer:
 "Often yes, and facilities like battery plants and semiconductor operations genuinely need both. But it should be specified deliberately: name both requirements, confirm the accessory chain, and check the filtration if exhaust air quality matters in the clean space. Coverage always has to be read from the applicable certificate for the exact configuration.",
 },
 ],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
 { label: "Electronics deep dive", href: "/industries/electronics" },
 { label: "Cleanrooms deep dive", href: "/industries/cleanrooms" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 ],
 },
];

export function getGuideArticle(slug: string) {
 return GUIDE_ARTICLES.find((article) => article.slug === slug);
}
