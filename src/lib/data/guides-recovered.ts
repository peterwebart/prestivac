import type { GuideArticle } from "@/components/templates/guide-article";

/**
 * Recovered legacy topics.
 *
 * Three subjects the old site ranked for that had no equivalent on the new
 * one. Everything else in the Search Console 404 report was redirected to an
 * existing stronger page rather than recreated — see src/lib/redirects.ts.
 * These three are rebuilt properly because the intent is real, distinct from
 * anything already published, and commercially useful:
 *
 * /blog/different-types-of-combustible-dust -> types-of-combustible-dust
 * /the-real-cost-of-explosive-dust-incidents -> cost-of-a-dust-explosion
 * /blog/how-to-safely-recover-ethanol -> flammable-liquid-recovery
 *
 * Integrity rules as guides.ts: no Kst, MIE, MEC or numeric threshold values;
 * dust behaviour described qualitatively and referred to testing; no clause
 * numbers; certification referenced only via certification.ts.
 */
export const RECOVERED_GUIDES: GuideArticle[] = [
  {
    slug: "types-of-combustible-dust",
    name: "Types of combustible dust",
    title: "The types of combustible dust, and why the category matters",
    eyebrow: "Combustible dust",
    minutes: 8,
    seo: {
      title: "Types of Combustible Dust Explained",
      description:
        "Metal, organic, carbonaceous, plastic and chemical dusts behave differently and are grouped differently. How the families divide, what changes between them, and why the group on a certificate matters.",
    },
    heroIntro:
      "Combustible dust is not one hazard. The families behave differently enough that the response to a metal dust fire can be actively dangerous applied to an organic one, and the equipment appropriate to a non-conductive dust may be inadequate for a conductive one. Getting the family right is the step that everything downstream depends on.",
    keyPoints: [
      "Particle size matters more than material identity",
      "Metal dusts are conductive and some react with water",
      "Carbonaceous dusts can smoulder deep inside a collected volume",
      "The Class II group on a certificate encodes which family it covers",
    ],
    sections: [
      {
        heading: "Why particle size comes first",
        body: [
          "Before any family distinction, one property dominates: how fine the material is. Combustibility rises sharply as particle size falls, because the surface area available to react grows while the mass stays the same. A material that is entirely inert as chips, pellets or granules can present a genuine hazard as dust.",
          "This is why so many facilities are surprised by their own materials. The bulk material being handled is not what matters — the fine fraction the process generates is, and it frequently behaves nothing like the stock it came from. That is settled by testing the dust as it actually exists in the process, not by reasoning from the material category.",
        ],
      },
      {
        heading: "Metal dusts",
        body: [
          "Aluminium, magnesium, titanium, zirconium and their alloys, plus the fines from grinding, machining, polishing and blasting operations. Two properties set them apart.",
          "They are conductive, which means accumulation can bridge and short electrical equipment — a hazard independent of combustion. And several react with water to produce hydrogen, which means the instinctive response to a fire can introduce a flammable gas into an event that was already serious.",
          "Freshly generated fine metal dust can also ignite spontaneously on exposure to air. Machining and grinding produce exactly that: fine, freshly exposed, chemically active particles. The stock is stable; the swarf may not be.",
        ],
      },
      {
        heading: "Carbonaceous dusts",
        body: [
          "Coal, coke, carbon black, graphite and charcoal. The defining property is that they smoulder rather than simply burn — a deep-seated glow can persist inside a collected volume, invisible from the surface, and surface hours later as an open fire.",
          "That behaviour makes the container as much a concern as the machine. A drum of collected carbonaceous dust standing in a plant is not inert simply because nothing is visible, which is why disposal timing and storage location belong in the specification rather than being left to housekeeping.",
        ],
      },
      {
        heading: "Organic and agricultural dusts",
        body: [
          "Flour, grain, sugar, starch, cocoa, spice, wood, paper and tobacco. These are the dusts responsible for many of the most destructive recorded incidents, largely because the industries handling them move enormous volumes and the material is not intuitively dangerous.",
          "Sugar and flour in particular have an image problem: they are food, they are handled by hand daily, and the leap to treating them as an explosion hazard is one many facilities do not make until an assessment forces it. The physics does not care about the intuition.",
        ],
      },
      {
        heading: "Plastic, polymer and chemical dusts",
        body: [
          "Resins, polymers, plastic fines, additive manufacturing powders, pigments, pharmaceutical powders and a wide range of manufactured chemical solids. Behaviour varies enormously across this family because the chemistry does.",
          "Some are straightforwardly combustible. Some are toxic as well, which changes the containment requirement independently of the fire risk. Some are both, and those need the recovery method to satisfy two separate objectives at once — which is where filtration, containment and change-out procedure start mattering as much as ignition control.",
        ],
      },
      {
        heading: "How the families map onto equipment groups",
        body: [
          "The Class II group system on an equipment certificate encodes this directly. Group E covers conductive metal dusts, Group F the carbonaceous dusts, and Group G the remaining non-conductive dusts — organics, plastics, chemicals and agricultural materials.",
          "That is why the group letters on a certificate are the part worth reading rather than the phrase 'dust rated'. Equipment listed for Groups F and G is not thereby listed for Group E, and the difference is exactly the conductive-metal family. A vacuum entirely appropriate for a flour mill may sit outside its listing in an aluminium grinding cell.",
        ],
      },
    ],
    comparison: {
      heading: "Families at a glance",
      columns: ["Behaviour", "Recovery consideration"],
      rows: [
        { aspect: "Metal (Group E)", left: "Conductive; some react with water; fines can be pyrophoric", right: "Wetting may be unsafe; dedicate per material; Group E listing needed" },
        { aspect: "Carbonaceous (Group F)", left: "Smoulders deep inside collected volume", right: "Container storage and disposal timing matter as much as the machine" },
        { aspect: "Organic / agricultural (Group G)", left: "Readily dispersed; large volumes handled", right: "Accumulation control across the whole building, not just the floor" },
        { aspect: "Plastic / chemical (Group G)", left: "Behaviour varies with chemistry; often toxic as well", right: "Containment and change-out procedure alongside ignition control" },
      ],
    },
    callout: {
      heading: "Testing settles the family",
      body: [
        "Which family a material belongs to, whether it is combustible at all, and whether it can be safely wetted are properties of the specific material as your process generates it. They are established by testing rather than by category.",
        "Where a Dust Hazard Analysis exists, its conclusions govern the equipment decision.",
      ],
    },
    faqs: [
      {
        question: "Is one type of combustible dust more dangerous than another?",
        answer:
          "They are dangerous differently. Metal dusts add conductivity and water reactivity; carbonaceous dusts add deep-seated smouldering; organic dusts are handled in the largest volumes. Severity for any specific material is established by testing it.",
      },
      {
        question: "Can one vacuum handle several types?",
        answer:
          "Sometimes, if the equipment scope covers all the relevant groups and the materials can safely share a container. Metals frequently need dedicated recovery, because different metals collected together can react with each other.",
      },
      {
        question: "What do Groups E, F and G mean?",
        answer:
          "They are the Class II dust groups. E is conductive metal dust, F is carbonaceous, G is the remaining non-conductive dusts including organics, plastics and chemicals. Equipment certificates name which groups they cover.",
      },
      {
        question: "My material is food — is it really combustible?",
        answer:
          "Many food powders are. Flour, sugar, starch and cocoa have all been involved in serious incidents. Being edible has no bearing on whether the fine fraction will burn when dispersed as a cloud.",
      },
    ],
    related: [
      { label: "Material directory", href: "/materials" },
      { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
      { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
      { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
      { label: "NFPA 484", href: "/hazardous-locations/nfpa-484" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "cost-of-a-dust-explosion",
    name: "The cost of a dust explosion",
    title: "What a dust explosion actually costs",
    eyebrow: "Risk",
    minutes: 7,
    seo: {
      title: "The Real Cost of a Dust Explosion",
      description:
        "The equipment loss is rarely the largest number. Business interruption, regulatory consequence, insurance response and the human cost of a combustible dust incident — and how they compare to prevention.",
    },
    heroIntro:
      "Housekeeping equipment competes for budget against things with an obvious return, and it usually loses until something happens. The argument for it is easier to make when the full cost of an incident is on the table rather than just the replacement value of what burned — because the replacement value is almost never the largest number.",
    keyPoints: [
      "Business interruption typically dwarfs physical damage",
      "The secondary explosion is what destroys buildings, not the first event",
      "Regulatory and insurance consequences extend long past the rebuild",
      "Prevention costs are known in advance; incident costs are not",
    ],
    sections: [
      {
        heading: "Why the damage is rarely contained",
        body: [
          "A primary event inside a piece of equipment is often survivable, and sometimes barely disruptive. What causes catastrophic outcomes is what follows: the pressure wave lifts dust that has settled on floors, beams, ledges, cable trays and above suspended ceilings, creating a far larger cloud that then ignites.",
          "That is why incidents so often destroy a building rather than a machine. The fuel for the destructive event was distributed throughout the structure, accumulating quietly, in the places nobody cleans because nobody sees them. The severity of the outcome is largely a function of how much had accumulated — which is a housekeeping variable.",
        ],
      },
      {
        heading: "Business interruption",
        body: [
          "For most manufacturers this is the largest line. Production stops. It stops for the duration of the emergency response, the investigation, the rebuild, the recommissioning and the requalification — and the investigation alone can hold a site while the cause is established.",
          "During that period the fixed costs continue and the revenue does not. Customers with contractual delivery commitments look elsewhere, and in industries with qualified suppliers and long approval cycles — aerospace, pharmaceutical, automotive — a customer lost during an outage may not be recoverable when production resumes. That consequence outlasts the rebuild by years.",
        ],
      },
      {
        heading: "Regulatory and legal consequence",
        body: [
          "A serious incident brings an inspection, and the inspection examines the whole programme rather than the event. Where combustible dust is involved and consensus standards address the hazard, a facility that had not assessed it is in a difficult position — the hazard is hard to argue was unrecognised.",
          "Beyond any citation, the legal exposure follows from what was known and what was done about it. Documentation becomes the whole case: whether a hazard analysis existed, what it concluded, and whether its conclusions were acted on. A facility with an assessment and a housekeeping programme it followed is in a fundamentally different position from one without, regardless of the outcome.",
        ],
      },
      {
        heading: "Insurance",
        body: [
          "Insurers underwrite combustible dust risk actively and increasingly. The consequences run in both directions: an incident affects renewal terms, and a demonstrated programme affects them beforehand. Some facilities find the insurance position is what actually funds the prevention work, because the premium difference is a number the business already understands.",
          "It is worth asking your insurer what they want to see before an incident rather than after. The answer is usually a documented hazard analysis, a housekeeping programme with defined frequency, and equipment appropriate to the classification — which is the same list the standards describe.",
        ],
      },
      {
        heading: "The human cost",
        body: [
          "Dust explosions injure and kill people, and the injuries are severe — burns over large body areas, from an event that gives no warning and offers no time to move. This is the cost that does not appear on any balance sheet and does not resolve when production resumes.",
          "It is also the reason the standards exist in the form they do, and the reason the housekeeping argument should not have to be made purely on financial grounds. But when it does have to be made that way, it is worth noting that the financial case tends to hold up on its own.",
        ],
      },
      {
        heading: "Against the cost of prevention",
        body: [
          "The prevention side is a known, bounded, budgetable number: a hazard analysis, appropriate recovery equipment, a housekeeping schedule, and training. It is spent in advance, it is predictable, and it is small relative to any of the categories above.",
          "The comparison that matters is not equipment cost against zero. It is equipment cost against the probability-weighted cost of an incident at a facility that has identified combustible dust and chosen not to control it — which is a materially different calculation, and the one an insurer and an investigator will both apply after the fact.",
        ],
      },
    ],
    callout: {
      heading: "Start with the assessment, not the equipment",
      body: [
        "A Dust Hazard Analysis establishes whether you have the hazard and how severe it is. Everything else — housekeeping frequency, equipment selection, process changes — follows from what it finds.",
        "It is also the document that matters most afterwards, which is a secondary reason to have one.",
      ],
    },
    faqs: [
      {
        question: "Why is the secondary explosion worse than the first?",
        answer:
          "Because the first event's pressure wave lifts dust that has settled throughout the building, creating a much larger cloud than the original one. The fuel was already distributed; the primary event simply dispersed it.",
      },
      {
        question: "What is usually the biggest cost?",
        answer:
          "For most manufacturers, business interruption — lost production, fixed costs continuing, and customers who move elsewhere during an outage and may not return, particularly in industries with long supplier qualification cycles.",
      },
      {
        question: "Does insurance cover a dust explosion?",
        answer:
          "Coverage and terms depend on the policy and on what the insurer knew about the risk. Insurers underwrite combustible dust actively, so it is worth establishing what they expect to see before an incident rather than discovering it afterwards.",
      },
      {
        question: "How do I make the budget case for housekeeping equipment?",
        answer:
          "Compare it against the full incident cost rather than against zero — business interruption, regulatory consequence and insurance position, not just replacement value. The insurance conversation often produces a number the business already recognises.",
      },
    ],
    related: [
      { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
      { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
      { label: "OSHA & combustible dust", href: "/hazardous-locations/osha-combustible-dust" },
      { label: "Combustible dust solutions", href: "/combustible-dust" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "flammable-liquid-recovery",
    name: "Flammable liquid recovery",
    title: "Recovering flammable liquids: fuels, solvents and alcohols",
    eyebrow: "Application",
    minutes: 7,
    seo: {
      title: "Flammable Liquid & Solvent Recovery",
      description:
        "Recovering ethanol, fuels and solvents differs from toxic liquid recovery. Vapour rather than liquid is the hazard, which changes the classification, the static requirement and the equipment.",
    },
    heroIntro:
      "Recovering a flammable liquid is a different problem from recovering a toxic one, and the difference is not severity — it is which phase carries the hazard. With a flammable liquid the vapour above it is what ignites, and vapour goes where the liquid does not. That single fact reshapes the classification, the equipment and the procedure.",
    keyPoints: [
      "The vapour is the hazard, not the liquid itself",
      "This is a Class I question, not a Class II dust question",
      "Vapour is often heavier than air and collects at low level",
      "Static generated by liquid moving through a hose is a real ignition source",
    ],
    sections: [
      {
        heading: "Vapour is what ignites",
        body: [
          "A pool of solvent does not burn. The vapour above it does, once it reaches a concentration that will support combustion. That means the hazardous volume is not the spill — it is the space around and above it, extending as far as the vapour travels.",
          "Many common solvent vapours are heavier than air, so they flow downwards and collect in pits, sumps, trenches and low-lying areas, sometimes well away from the liquid that produced them. A recovery operation that treats the visible spill as the hazard boundary has drawn it in the wrong place.",
        ],
      },
      {
        heading: "This is a Class I question",
        body: [
          "Flammable liquids and their vapours fall under Class I, which is a different classification from the Class II combustible dust regime that governs most industrial housekeeping. Equipment suited to one is not automatically suited to the other, and the protection concepts differ: containment of an internal ignition for gas and vapour, exclusion and surface temperature control for dust.",
          "Where a facility handles both — and many do, with solvent operations alongside dusty ones — the classification of each area is assessed on its own terms rather than by applying one answer across the site.",
        ],
      },
      {
        heading: "Static, and why liquid makes it worse",
        body: [
          "Liquid moving at speed through a hose generates static charge, exactly as dust does. The difference is what it is generating charge in the presence of: a vapour atmosphere that may already be within its ignitible range.",
          "The requirement is a continuous conductive path, grounded and bonded from the tool through the hose and machine to the container — a complete circuit, not a grounded machine with a non-conductive hose attached to it. This is a routine inspection item, because a break in the path is invisible and the equipment continues working normally without it.",
        ],
      },
      {
        heading: "Ethanol and the water-miscible alcohols",
        body: [
          "Ethanol comes up constantly, because it appears across pharmaceutical, food, beverage, laboratory and sanitiser production. It is flammable, its vapour is readily ignitible, and it is water-miscible — which changes both cleanup and firefighting behaviour compared to hydrocarbon solvents.",
          "It also has a habit of being underestimated, because it is familiar and non-exotic. Familiarity is not a hazard property, and the recovery requirement follows from the flash point and the vapour behaviour rather than from how routine the material feels.",
        ],
      },
      {
        heading: "Equipment and procedure",
        body: [
          "Recovery equipment for flammable liquids has to address the ignition-source question in a Class I context, maintain a continuous grounded and bonded path, and handle liquid rather than dust — which means separation and level control rather than a filter medium, since a dry filter in the liquid path blinds immediately.",
          "The container matters too. Recovered flammable liquid is still flammable liquid, now concentrated and being moved. Where it is emptied, how it is transferred and how it is stored in the interim are part of the procedure rather than afterthoughts, and vapour management applies to the container as much as to the original spill.",
        ],
      },
    ],
    callout: {
      heading: "Classification comes from your engineer",
      body: [
        "Whether an area is Class I, and to what division and group, is assigned by your own electrical or process engineer and accepted by the authority having jurisdiction. Equipment is then matched to it.",
        "Our UL 1203 listing covers Class I Group D on the EX1 line, which includes most common hydrocarbon solvents. It does not extend to Groups A, B or C. Confirm the material and the classification before specifying.",
      ],
    },
    faqs: [
      {
        question: "Can I use a combustible dust vacuum for solvent recovery?",
        answer:
          "Not on that basis alone. Dust equipment is assessed for Class II; flammable vapour is Class I. Some equipment is listed for both, but that is a documented fact for a specific model rather than something to assume from the category.",
      },
      {
        question: "Is ethanol recovery different from other solvents?",
        answer:
          "It is water-miscible, which changes cleanup and firefighting behaviour compared with hydrocarbon solvents. The core requirement is the same: address the vapour, the classification and the static path.",
      },
      {
        question: "Why does the vapour collect away from the spill?",
        answer:
          "Many solvent vapours are heavier than air, so they flow downwards into pits, sumps and trenches. The hazardous volume can extend well beyond the visible liquid.",
      },
      {
        question: "Does grounding the machine cover the static requirement?",
        answer:
          "No. The path has to be continuous from the tool through the hose to the container. A grounded machine with a non-conductive hose leaves the charge generated in the hose with nowhere to go.",
      },
    ],
    related: [
      { label: "Toxic liquid recovery", href: "/guides/toxic-liquid-recovery" },
      { label: "Class I, Division 1", href: "/hazardous-locations/class-i-division-1" },
      { label: "Wet & Dry Systems", href: "/products/wet-dry-systems" },
      { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
      { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];
