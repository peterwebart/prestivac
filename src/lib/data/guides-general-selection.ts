import type { GuideArticle } from "@/components/templates/guide-article";

/**
 * Remaining selection guides. Integrity rules as guides.ts.
 */
export const GENERAL_SELECTION_GUIDES: GuideArticle[] = [
  {
    slug: "vacuum-for-food-processing",
    name: "Selecting for food processing",
    title: "Selecting a vacuum for food processing",
    eyebrow: "Buying guide",
    minutes: 7,
    seo: {
      title: "Vacuum Selection for Food Processing",
      description:
        "Food powders are combustible dusts that are also allergens and a sanitation concern. How one cleaning pass can satisfy the dust programme, allergen control and hygiene records.",
    },
    heroIntro:
      "Food processing is the sector where the hazard is least intuitive. Flour, sugar, starch, milk powder and spice are handled by hand every day, they are edible, and the leap to treating them as an explosion hazard is one many facilities do not make until an assessment forces it. The physics does not care about the intuition.",
    keyPoints: [
      "Food powders are Group G — inside both certified scopes",
      "Allergen cross-contact usually sets a stricter bar than the fire case",
      "Sanitation and dust records can be the same cleaning pass",
      "Overhead accumulation is the fuel a primary event would loft",
    ],
    sections: [
      {
        heading: "The classification is the easy part",
        body: [
          "Food powders are non-conductive organic dusts, which places them in Class II Group G. Group G is inside both PrestiVac certified scopes, so unlike metalworking or battery work, the choice of line is not constrained by the material group. That removes the question that dominates other sectors.",
          "What remains is the ordinary combustible dust discipline: where the fines are generated, where they accumulate, what the ignition sources are, and how often recovery happens. Milling, sifting, blending, pneumatic conveying and bagging are the release points in almost every food plant.",
        ],
      },
      {
        heading: "Allergen control usually sets the bar",
        body: [
          "In practice the specification in a food plant is often driven by allergen segregation rather than by the fire case. Milk, egg, soy, wheat and nut-derived powders are major allergens, and a cleaning method that disperses rather than removes carries them onto adjacent lines — which is a labelling and recall exposure well beyond the housekeeping budget.",
          "That tends to produce a stricter arrangement than the dust assessment alone would: dedicated units or dedicated accessory sets per line, and a documented cleaning pass between products. It is worth letting the segregation policy drive the equipment count rather than retrofitting it afterwards.",
        ],
      },
      {
        heading: "One pass, two records",
        body: [
          "Sanitation cleaning and combustible dust housekeeping are frequently treated as separate programmes with separate schedules. In most food plants they are the same physical activity, and a recovery method that retains what it collects satisfies both — removing the material from the building rather than relocating it.",
          "Making that explicit is worth doing, because it turns the dust programme from an additional cost into a documentation improvement on work that was already happening.",
        ],
      },
      {
        heading: "Where the material actually is",
        body: [
          "The floor gets attention and matters least. Light food powders travel on general air movement and settle on beams, duct tops, equipment housings, light fittings and above suspended ceilings — out of sight, and rarely on the schedule.",
          "That overhead accumulation is the fuel a primary event would loft into a secondary explosion, which is what turns an equipment fire into a building one. Any accumulation survey that only looks at floor level will substantially understate the inventory.",
        ],
      },
      {
        heading: "Materials that behave differently",
        body: [
          "Within the Group G bracket, individual powders vary in ways that affect housekeeping rather than classification. Fat-bearing powders such as milk and yolk leave adherent deposits on warm surfaces and can support self-heating in accumulation. Sugar-rich and hygroscopic powders such as onion and garlic cake hard and resist brushing. Gelatin gels on contact with water, which rules out wet cleanup.",
          "None of these change which line is eligible, but all of them change the cleaning interval and the method — which is why the material page for the specific powder is worth reading alongside this.",
        ],
      },
    ],
    callout: {
      heading: "Testing establishes the behaviour",
      body: [
        "Whether a specific powder is combustible, and how severely, is established by testing it as your process produces it. Facilities are frequently surprised by their own materials, because combustibility rises sharply as particle size falls and the fines a process generates behave nothing like the bulk material.",
        "Where a Dust Hazard Analysis exists, its conclusions govern the equipment decision.",
      ],
    },
    faqs: [
      {
        question: "Is flour really an explosion hazard?",
        answer:
          "Yes. Flour, sugar, starch and other food powders have been involved in serious incidents. Being edible has no bearing on whether the fine fraction will burn when dispersed as a cloud. Severity for your material is established by testing it.",
      },
      {
        question: "Which line do we need for food powders?",
        answer:
          "Food powders are Group G, which is inside both of our certified scopes, so the material group does not constrain the choice as it does with metal dust. The area classification assigned by your engineer determines what is appropriate.",
      },
      {
        question: "Should each line have its own vacuum?",
        answer:
          "Where allergens are involved, commonly yes. Shared equipment is a cross-contact route with labelling and recall consequences, so dedicated units or accessory sets per line with a documented cleaning pass between products is the usual arrangement.",
      },
      {
        question: "Can the same cleaning satisfy sanitation and the dust programme?",
        answer:
          "Usually, and it is worth making explicit. They are generally the same physical activity, and a method that retains what it collects serves both — which turns the dust programme into a documentation improvement rather than an added cost.",
      },
    ],
    related: [
      { label: "Food & Beverage industry", href: "/industries/food-beverage" },
      { label: "Flour dust", href: "/materials/flour-dust" },
      { label: "Sugar dust", href: "/materials/sugar-dust" },
      { label: "Milk powder", href: "/materials/milk-powder" },
      { label: "Bagging & dumping", href: "/applications/bagging-dumping" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "how-to-select-an-industrial-vacuum",
    name: "Selecting an industrial vacuum",
    title: "How to select an industrial vacuum",
    eyebrow: "Buying guide",
    minutes: 7,
    seo: {
      title: "How to Select an Industrial Vacuum",
      description:
        "The general case, where the material is not combustible and the area is not classified. Duty cycle, material, distance and handling decide the specification.",
    },
    heroIntro:
      "Not every industrial vacuum application involves a hazardous location. Where the material is not combustible and the area is not classified, the specification is driven by ordinary engineering questions — what the material is, how far it has to travel, how long the unit runs, and who empties it. This is the general case; the hazardous one has its own guide.",
    keyPoints: [
      "Establish first whether the hazardous-location question applies at all",
      "Duty cycle is a design requirement, not a usage pattern",
      "Wet and dry are different engineering problems",
      "Capacity is limited by handling weight, not container volume",
    ],
    sections: [
      {
        heading: "First, rule the hazard question in or out",
        body: [
          "Before anything else, establish whether the material is combustible and whether the area is classified. If either is true, this is not the right guide — the equipment eligibility question changes completely and the selection follows a different order.",
          "Combustibility is established by testing the material as your process generates it, because it depends heavily on particle size. Area classification is assigned by your own electrical or process engineer. Both are inputs you obtain rather than judgements a supplier can make for you.",
        ],
      },
      {
        heading: "Match the machine to the duty",
        body: [
          "Duty cycle is the parameter most often understated. A unit specified for intermittent housekeeping and then run for a full shift will not deliver its rated performance for long, and it will fail progressively rather than obviously.",
          "The case that catches people out is the vacuum that quietly becomes part of the process — connected to a machine and running whenever the machine runs. That is a continuous-duty application even though nobody specified it as one, and it is worth identifying before purchase rather than after the second motor.",
        ],
      },
      {
        heading: "Wet, dry, or both",
        body: [
          "Liquid and dust are recovered by the same basic principle and almost nothing else in common. Dry filtration relies on a medium particles cannot pass; wetting that medium blinds it and it may never recover. Liquid recovery relies on separation and level control instead.",
          "Combined units exist and work well within their design. What matters is using the correct configuration for the material at hand, and not allowing recovered wet and dry material to combine where that would create a slurry — or, with reactive materials, something worse.",
        ],
      },
      {
        heading: "Airflow, vacuum and distance",
        body: [
          "Airflow carries material along the hose; vacuum pressure lifts and dislodges it. They trade against each other, so specifying for a headline figure in one dimension usually costs the other. Light material over a long run is an airflow problem; dense material from a sump is a vacuum problem.",
          "Distance matters more than most specifications assume. Every metre of hose, every bend and every reduction costs performance, and the loss accumulates faster than a simple proportion. Specify for the assembly you will actually use rather than for the machine alone.",
        ],
      },
      {
        heading: "Capacity, and who empties it",
        body: [
          "Container capacity is set by how much accumulates between emptying events, but the binding constraint is usually handling. Dense material makes weight the limit long before volume is, and a container sized generously on paper is one that gets emptied early because nobody can move it full.",
          "Filter area belongs in the same conversation. Generous filter area keeps face velocity low, which sustains airflow as the filter loads and lengthens the interval between changes — and every change is a handling event.",
        ],
      },
    ],
    callout: {
      heading: "If the answer to either first question is yes",
      body: [
        "If the material is combustible or the area is classified, use the explosion-proof selection guide instead. The eligibility question comes first there, and starting from duty cycle produces a specification that has to be redone.",
        "Where you are unsure, describe the material and the process and we will tell you which conversation you are in.",
      ],
    },
    faqs: [
      {
        question: "How do I know if I need an explosion-proof unit?",
        answer:
          "Two inputs settle it: whether the material is combustible, established by testing it as your process generates it, and whether the area is classified, assigned by your own electrical or process engineer. If either is yes, the hazardous-location selection applies.",
      },
      {
        question: "What counts as continuous duty?",
        answer:
          "Any application where the unit runs for extended periods rather than in short bursts — most commonly one connected to a machine and running whenever that machine runs. It is a design requirement affecting motor, cooling and filter sizing, not a usage pattern.",
      },
      {
        question: "Should I specify for maximum suction?",
        answer:
          "Rarely. Airflow and vacuum trade against each other, so maximising one costs the other. Light material over distance needs airflow; dense material from depth needs vacuum. Most real applications need a workable balance.",
      },
      {
        question: "Does hose length really matter?",
        answer:
          "More than most specifications assume, and the loss accumulates faster than a simple proportion. Bends, fittings and reductions add to it. Size for the whole assembly rather than the machine on its own.",
      },
    ],
    related: [
      { label: "Industrial Vacuums", href: "/products/industrial-vacuums" },
      { label: "Sizing an industrial vacuum", href: "/guides/how-to-size-an-industrial-vacuum" },
      { label: "Choosing an explosion-proof vacuum", href: "/guides/how-to-choose-an-explosion-proof-vacuum" },
      { label: "Wet vs dry recovery", href: "/guides/wet-vs-dry-recovery" },
      { label: "Industrial vs shop vacuums", href: "/guides/industrial-vs-shop-vacuums" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "how-to-select-hepa-filtration",
    name: "Selecting HEPA filtration",
    title: "How to select filtration for an industrial vacuum",
    eyebrow: "Buying guide",
    minutes: 7,
    seo: {
      title: "How to Select HEPA Filtration",
      description:
        "Grade is the part of a filtration specification that matters least. Filter area, sealing, staging and change-out method decide what performance you actually get in service.",
    },
    heroIntro:
      "Filtration specifications tend to collapse into a single word — HEPA — as though that settled the question. It does not. Two units with the same filter grade can perform very differently in service, because what determines real-world retention is the whole system: how much filter area there is, how well it is sealed, what protects it, and how it is changed.",
    keyPoints: [
      "Filter area sustains airflow as the medium loads",
      "A bypassed seal delivers no filtration regardless of grade",
      "Staging keeps the absolute filter inside its design regime",
      "Every change-out is a handling and exposure event",
    ],
    sections: [
      {
        heading: "What the grade actually tells you",
        body: [
          "Absolute filter grades are defined by retention at the most penetrating particle size — the size hardest to capture, which is not the smallest. Particles below that size are actually easier to capture, because they move erratically and collide with fibres rather than following the airflow past them.",
          "That figure is a property of the medium under test conditions. Whether the machine achieves it in service depends on everything around the medium, which is where specifications usually stop asking.",
        ],
      },
      {
        heading: "Filter area is the parameter to ask about",
        body: [
          "Generous filter area keeps face velocity low. Low face velocity sustains airflow as the filter loads, extends service life, and keeps the medium operating in the regime it was rated in. Cramming a high-grade filter into a small housing produces a machine that filters well on day one and poorly by week three.",
          "It also reduces the number of change-outs, which matters more than convenience: in hazardous or toxic applications every filter change is a handling and exposure event, so a longer interval is a safety improvement rather than a maintenance one.",
        ],
      },
      {
        heading: "Sealing decides whether the air goes through",
        body: [
          "An absolute filter that is bypassed by a poor seal delivers the performance of no filter at all on the bypassed fraction, whatever grade is printed on it. Air takes the easiest route, and a gap between the filter and its housing is easier than the medium.",
          "So how the filter seats and seals into the housing is a specification question, not an assembly detail. It is worth asking explicitly, because it is the failure mode least visible from a datasheet.",
        ],
      },
      {
        heading: "Staging protects the absolute stage",
        body: [
          "Where mass loading is high, a single absolute filter takes the full load and blinds quickly. Staged filtration — a cyclonic or cartridge stage taking the bulk before the absolute stage — keeps the final filter inside its design regime so its rating holds in service rather than only on the test bench.",
          "The practical test of a filtration system is whether the exhaust stays clean over a full service interval, not whether the final stage carries an impressive number.",
        ],
      },
      {
        heading: "Change-out is part of the specification",
        body: [
          "How a loaded filter is removed and bagged determines the exposure at the point when the collected material is most concentrated and least contained. In toxic or potent applications this is frequently the highest-exposure moment in the whole cleaning cycle.",
          "That makes change-out method a specification item alongside grade and area. Where the material is combustible as well, the same event needs the ignition-source and static controls to still be intact while the machine is open.",
        ],
      },
      {
        heading: "When to go above HEPA",
        body: [
          "ULPA retains more at the hardest particle size, but the denser medium resists airflow more and loads sooner — which costs suction and shortens the interval between handling events. Specifying it where HEPA would serve produces a machine that filters superbly and cleans poorly.",
          "It earns its place where the consequence of the escape fraction is severe: specific containment applications, some cleanroom and semiconductor environments, certain highly toxic materials. In those settings the decision is usually driven by a containment strategy rather than by a preference for a higher number.",
        ],
      },
    ],
    callout: {
      heading: "Certified units have filter requirements too",
      body: [
        "Where a unit is within a certification listing, static-dissipating filters are part of the certified configuration rather than an option. Substituting a filter outside that specification takes the unit outside the scope of its listing.",
        "Confirm the filter specification against the model documentation rather than against the grade alone.",
      ],
    },
    faqs: [
      {
        question: "Is a higher filter grade always better?",
        answer:
          "No. A denser medium resists airflow more and loads sooner, which costs suction and increases the frequency of change-out handling events. Higher grade is the right answer where the escape fraction genuinely matters and an unnecessary penalty where it does not.",
      },
      {
        question: "What should I ask about instead of grade?",
        answer:
          "Filter area, how the filter seals into its housing, whether the absolute stage is protected by earlier stages, and how a loaded filter is removed and bagged. Those four determine what you actually get in service.",
      },
      {
        question: "Does HEPA filtration make a vacuum safe for combustible dust?",
        answer:
          "No — they are separate questions. Filtration addresses what leaves the machine. Combustible dust suitability is about ignition sources, static control, construction and the classification of the area. A unit may need both.",
      },
      {
        question: "Can I fit a different filter to a certified unit?",
        answer:
          "Not while keeping it in its certified configuration. Where the listing specifies static-dissipating filters, substituting one outside that specification takes the unit outside the scope of the listing.",
      },
    ],
    related: [
      { label: "HEPA Vacuums", href: "/products/hepa-vacuums" },
      { label: "HEPA vs ULPA", href: "/guides/hepa-vs-ulpa-filtration" },
      { label: "Cleanroom Vacuum Cleaners", href: "/products/cleanroom-vacuums" },
      { label: "Recovered dust: reclaim or dispose?", href: "/guides/recovered-dust-disposal-and-reclaim" },
      { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];
