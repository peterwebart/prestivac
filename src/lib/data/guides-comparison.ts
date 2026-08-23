import type { GuideArticle } from "@/components/templates/guide-article";

/**
 * Comparison guides — "X vs Y" decision content.
 *
 * Integrity rules (same as GUIDE_ARTICLES in guides.ts):
 * - PrestiVac manufactures industrial vacuums, NOT dust collectors.
 * - No Kst, MIE, MEC or exposure values are stated. Dust behaviour is
 * described qualitatively and referred to testing.
 * - Certification scope is never asserted generically. Where certification is
 * relevant the text says that scope is per model and points at the
 * datasheet/certificate rather than implying a blanket listing.
 * - Nothing here states a specific NFPA/OSHA/ATEX clause or requirement.
 * Standards are referred to by what they govern, not by what they mandate.
 */
export const COMPARISON_GUIDES: GuideArticle[] = [
  {
    slug: "explosion-proof-vs-standard-industrial-vacuum",
    name: "Explosion proof vs standard industrial",
    title: "Explosion proof or standard industrial vacuum?",
    eyebrow: "Equipment selection",
    minutes: 7,
    seo: {
      title: "Explosion Proof vs Standard Industrial",
      description:
        "Both are heavy-duty industrial machines. What separates them is whether the construction addresses ignition sources — and whether your area classification requires that.",
    },
    heroIntro:
      "This is a different question from whether to use a shop vacuum, and it gets confused with it constantly. A standard industrial vacuum is already a serious machine: stainless construction, continuous duty, absolute filtration. What it does not do is address the ignition sources inside it, and whether that matters is decided by your area classification rather than by how demanding the job feels.",
    keyPoints: [
      "Both are industrial-grade; the difference is ignition-source control",
      "Classification decides the requirement, not duty or material volume",
      "A standard unit can carry HEPA and still be wrong for a classified area",
      "Certification covers a specific model and a named scope",
    ],
    sections: [
      {
        heading: "What they have in common",
        body: [
          "A standard industrial vacuum and an explosion-proof one share most of their engineering. Both are built for sustained duty rather than intermittent use, both are commonly stainless steel with smooth internals that do not trap material, both can carry absolute filtration, and both are designed so a full container can be removed and emptied without dispersing what is inside.",
          "This is why the comparison is genuinely difficult from a datasheet. The visible specification overlaps almost entirely. What differs is not performance but whether the construction has been designed and assessed so that the unit cannot ignite the atmosphere it operates in.",
        ],
      },
      {
        heading: "What actually differs",
        body: [
          "A standard industrial vacuum contains ordinary electrical components: a motor, switching, wiring. In an unclassified area that is entirely appropriate, because there is nothing present to ignite. The equipment is not deficient; it is built for a different environment.",
          "An explosion-proof unit either encloses those components so an internal ignition cannot propagate, or removes them entirely in the case of an air-operated machine. Which of those two routes applies changes the maintenance regime and the utility requirement, but both address the same question the standard unit does not.",
        ],
      },
      {
        heading: "Classification decides, not intuition",
        body: [
          "The requirement follows from the area classification assigned by your own electrical or process engineer and accepted by the authority having jurisdiction. It does not follow from how dusty the operation is, how large the volumes are, or how hard the unit will work.",
          "That produces two failure modes in opposite directions. Facilities specify explosion-proof equipment for unclassified areas because the material sounds hazardous, paying for protection the area does not require. And facilities specify standard equipment for classified areas because the housekeeping task felt routine. The second is the dangerous one, and it usually comes from nobody having asked what the classification is.",
        ],
      },
      {
        heading: "HEPA is not the same question",
        body: [
          "Absolute filtration and hazardous-location suitability are independent properties, and conflating them is common. Filtration governs what leaves the machine — an exposure and housekeeping concern. Hazardous-location construction governs whether the machine can ignite the atmosphere around it.",
          "A standard industrial vacuum with HEPA filtration is an excellent tool for fine toxic dust in an unclassified area, and it remains unsuitable for a classified one. A unit may need both properties, and a specification that names only one has answered half the question.",
        ],
      },
      {
        heading: "Reading the certification",
        body: [
          "Where a unit is certified, the certificate names a specific model and a defined scope: the classes, divisions, groups and temperature code. It means nothing outside that scope, and two similar-looking models in the same catalogue can carry different scopes.",
          "So the useful comparison is not 'explosion proof or not'. It is whether the scope on the certificate for the specific model covers the classification of your specific area — which is a documented fact rather than a category.",
        ],
      },
    ],
    comparison: {
      heading: "Side by side",
      columns: ["Standard industrial", "Explosion proof"],
      rows: [
        { aspect: "Build quality", left: "Industrial — stainless, continuous duty", right: "Industrial — stainless, continuous duty" },
        { aspect: "Absolute filtration", left: "Available", right: "Available" },
        { aspect: "Ignition sources", left: "Ordinary motor and switching present", right: "Enclosed, or removed entirely on air-operated units" },
        { aspect: "Suitable area", left: "Unclassified", right: "Per the scope named on the certificate" },
        { aspect: "What decides it", left: "Area classification", right: "Area classification" },
        { aspect: "Maintenance", left: "Filtration, hoses, seals", right: "Adds enclosure integrity and the grounding path" },
      ],
    },
    callout: {
      heading: "Ask the classification question first",
      body: [
        "If the area is classified, a standard industrial vacuum is not eligible regardless of how well it is built. If it is not classified, explosion-proof construction is protection you are paying for and do not need.",
        "The classification is assigned by your own engineer. Bring it, with the material, and the specification takes minutes.",
      ],
    },
    faqs: [
      {
        question: "Our material is combustible — do we automatically need explosion-proof?",
        answer:
          "Not automatically. Combustibility is one input; the area classification is the other, and it is assigned by your own electrical or process engineer. Many facilities handle combustible material in areas that are not classified, and the requirement follows the classification.",
      },
      {
        question: "Is a standard industrial vacuum with HEPA good enough?",
        answer:
          "For fine or toxic dust in an unclassified area, often yes. HEPA governs what leaves the machine; it says nothing about whether the machine can ignite the atmosphere around it. In a classified area the filtration does not address the requirement.",
      },
      {
        question: "Can we upgrade a standard unit to be explosion proof?",
        answer:
          "No. Certification covers a specific model in a specific configuration as assessed. A unit modified in the field is not the equipment that was certified, and there is no upgrade path that produces a listing.",
      },
      {
        question: "How do we tell which models are certified?",
        answer:
          "From the certificate, which names the models and the scope. Two similar-looking models in the same series can carry different scopes, so each model page states its own rather than leaving it to be inferred.",
      },
    ],
    related: [
      { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
      { label: "Industrial Vacuums", href: "/products/industrial-vacuums" },
      { label: "Choosing an explosion-proof vacuum", href: "/guides/how-to-choose-an-explosion-proof-vacuum" },
      { label: "Industrial vs shop vacuums", href: "/guides/industrial-vs-shop-vacuums" },
      { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "electric-vs-pneumatic-vacuums",
    name: "Electric vs pneumatic",
    title: "Electric or pneumatic? The first real decision",
    eyebrow: "Equipment selection",
    minutes: 7,
    seo: {
      title: "Electric vs Pneumatic Industrial Vacuums",
      description:
        "Air-operated and electric industrial vacuums solve the same recovery problem by different routes. How compressed air availability, duty cycle.",
    },
    heroIntro:
      "This is usually the first question worth settling, because it changes everything downstream — where the unit can go, what utility it needs, how it is maintained, and how the ignition-source argument is made. Neither is inherently the safer choice. They remove the electrical risk in different ways, and the right answer depends on what your facility can actually supply.",
    keyPoints: [
      "Pneumatic units have no electric motor on the recovery unit at all",
      "Electric units need no compressed air, but need the right classified supply",
      "Compressed air is an expensive utility — the running-cost gap is real",
      "Duty cycle and air consumption decide feasibility more often than preference",
    ],
    sections: [
      {
        heading: "What actually differs",
        body: [
          "A pneumatic vacuum is driven by a compressed-air venturi rather than a motor. There is no electrical component anywhere on the recovery unit — no motor, no switch, no brushes, no wiring to inspect. The ignition-source argument becomes structural rather than dependent on an enclosure: there is nothing electrical present to protect.",
          "An electric vacuum uses a motor built and enclosed so that it cannot ignite the atmosphere around it. That is an engineered protection, verified by testing and certification, and its validity depends on the equipment being the right listing for the area classification and on being maintained in that condition.",
        ],
      },
      {
        heading: "Where compressed air decides it",
        body: [
          "Pneumatic units consume a substantial and continuous volume of air. The practical question is not whether your plant has compressed air, but whether it has enough at the right pressure, at the point of use, while everything else in the building is also drawing on it. A unit starved of air simply does not perform, and the symptom looks like poor suction rather than an obvious utility problem.",
          "This is why the specification conversation asks for line diameter and available CFM rather than a yes/no on compressed air. Where the supply is marginal, an electric unit is often the more reliable answer even in a location where a pneumatic unit would otherwise be attractive.",
        ],
      },
      {
        heading: "Duty cycle and running cost",
        body: [
          "Compressed air is one of the most expensive utilities in a plant on a per-unit-of-work basis. For intermittent housekeeping — a machine cleaned between runs, a spill handled as it happens — that cost is minor and the simplicity of a pneumatic unit wins easily.",
          "For continuous or near-continuous recovery, the economics shift and keep shifting the longer the unit runs. A shift-long recovery duty on a pneumatic unit is a real operating expense, and it also loads the compressor in a way that can affect other equipment. Long duty cycles are where electric units tend to make more sense, provided the classified supply exists.",
        ],
      },
      {
        heading: "Maintenance and failure behaviour",
        body: [
          "Pneumatic units have no motor to service, no brushes to wear and no electrical inspection regime on the recovery unit. Maintenance concentrates on filtration, hoses, seals and the grounding path. For a plant that wants the least possible electrical inspection burden in a classified area, that is a genuine advantage.",
          "Electric units carry a maintenance obligation that is part of their protection. Enclosure integrity, cable condition, seals and the grounding path are not routine housekeeping — they are what keeps the certification meaningful in service. An explosion-proof unit that has been opened, modified or repaired outside its listed configuration is no longer the equipment that was certified.",
        ],
      },
      {
        heading: "What does not change either way",
        body: [
          "Both routes still require the rest of the specification to be right. Grounding and bonding matter identically — static generated by material moving through a hose does not care what drives the airflow. Filtration selection is independent of the power source. Conductive materials, immersion requirements and containment needs are material questions, not motive-power questions.",
          "It is also worth being explicit that neither choice makes a vacuum suitable for an area by itself. Suitability is a function of the specific model and its documented scope against the classification of the space it will work in — which is why the classification question comes before the electric-or-pneumatic question in any properly ordered specification.",
        ],
      },
    ],
    comparison: {
      heading: "Side by side",
      columns: ["Pneumatic (air-operated)", "Electric"],
      rows: [
        { aspect: "Electrical components on recovery unit", left: "None", right: "Motor, enclosed and certified to its listed scope" },
        { aspect: "Utility required", left: "Compressed air, continuous and substantial", right: "Electrical supply appropriate to the classification" },
        { aspect: "Best duty cycle", left: "Intermittent to moderate", right: "Moderate to continuous" },
        { aspect: "Running cost", left: "Higher — compressed air is expensive per unit of work", right: "Lower for sustained running" },
        { aspect: "Maintenance focus", left: "Filtration, hoses, seals, grounding", right: "Adds enclosure integrity, cabling, seals" },
        { aspect: "Common blocker", left: "Insufficient CFM at the point of use", right: "No suitable classified supply available" },
      ],
    },
    callout: {
      heading: "Certification scope is per model",
      body: [
        "Neither power source is a certification in itself. Where a unit is certified, that certification covers a specific model and configuration, with a defined scope — the classes, groups and temperature code named on the certificate.",
        "Ask for the certificate or datasheet for the exact model under consideration and check its named scope against your area classification. A configuration option added to a unit can sit outside the scope of the listing that covers the base model.",
      ],
    },
    faqs: [
      {
        question: "Is a pneumatic vacuum automatically safe for a hazardous location?",
        answer:
          "No. Removing the electric motor removes one ignition source, which is significant, but suitability for a classified area still depends on the specific model, its construction and its documented scope — plus correct grounding and bonding in service. Check the documentation for the model, not the category.",
      },
      {
        question: "How much compressed air does a pneumatic vacuum need?",
        answer:
          "It varies by model and it is substantial and continuous. This is why specification asks for available line diameter and CFM at the point of use rather than a yes/no answer. Marginal supply shows up as poor suction rather than an obvious air problem.",
      },
      {
        question: "Which is cheaper to run?",
        answer:
          "Electric, for sustained duty. Compressed air is expensive per unit of work, so the gap widens the longer the unit runs. For short intermittent housekeeping the difference is minor and rarely the deciding factor.",
      },
      {
        question: "Can one plant use both?",
        answer:
          "Commonly, yes. Many facilities run pneumatic units where compressed air is already piped and duty is intermittent, and electric units where duty is long or air supply is committed elsewhere. The choice is made per application, not per site.",
      },
    ],
    related: [
      { label: "Pneumatic Vacuums", href: "/products/pneumatic-vacuums" },
      { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
      { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
      { label: "Hazardous location vacuums", href: "/hazardous-location-vacuums" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "explosion-proof-vs-dust-ignition-proof",
    name: "Explosion proof vs dust ignition proof",
    title: "Explosion proof and dust ignition proof are not the same thing",
    eyebrow: "Terminology",
    minutes: 6,
    seo: {
      title: "Explosion Proof vs Dust Ignition Proof",
      description:
        "The two terms describe protection against different hazards — flammable gas and vapour versus combustible dust.",
    },
    heroIntro:
      "These phrases are used interchangeably in purchasing conversations far more often than they should be. They describe two different protection concepts, developed for two different hazards, and equipment carrying one does not automatically carry the other. Getting this wrong is one of the more common ways the right-looking equipment ends up in the wrong room.",
    keyPoints: [
      "Explosion proof addresses flammable gas and vapour atmospheres",
      "Dust ignition proof addresses combustible dust atmospheres",
      "The protection mechanisms are genuinely different, not variations",
      "A nameplate names specific classes and groups — read those, not the phrase",
    ],
    sections: [
      {
        heading: "Two hazards, two mechanisms",
        body: [
          "Explosion-proof construction, in the North American sense, assumes a flammable atmosphere can enter an enclosure and ignite inside it. The enclosure is built to contain that internal event and to cool the escaping gases enough that they cannot ignite the surrounding atmosphere. It is a containment strategy.",
          "Dust ignition protection works from the opposite direction. It is designed to keep dust out — to prevent it entering the enclosure in the first place — and to keep external surface temperatures low enough that settled dust on the equipment cannot be ignited by the equipment itself. It is an exclusion and temperature strategy.",
        ],
      },
      {
        heading: "Why the difference matters in practice",
        body: [
          "Because the mechanisms differ, the design features differ. Containment implies robust enclosures and controlled flame paths. Exclusion implies effective sealing and attention to the temperature of every accessible surface. An enclosure engineered to contain an internal gas event is not, by that fact alone, sealed against fine dust ingress or held to a surface temperature appropriate for a dust layer.",
          "This is why the settled-dust question is asked separately. Dust that accumulates on a warm surface behaves differently from dust dispersed in air — a layer insulates, and an insulated surface runs hotter than the same surface would clean. Equipment intended for dusty locations is assessed with that behaviour in mind.",
        ],
      },
      {
        heading: "What to read instead of the phrase",
        body: [
          "The useful information is not the marketing phrase but the classification named on the nameplate and certificate: the class, the division, the groups and the temperature code. Class I covers flammable gases and vapours; Class II covers combustible dusts. The groups narrow it further to the specific families of material involved.",
          "A unit may be listed for one, the other, or both — but which it is, and to what extent, is a documented fact rather than an inference from a product name. Where a listing covers both, the certificate will say so and will name the classes and groups it covers in each case.",
        ],
      },
      {
        heading: "The purchasing failure this causes",
        body: [
          "The common failure is a facility with a combustible dust problem specifying equipment on the strength of the phrase 'explosion proof' alone, without checking whether the listing extends to Class II and the relevant dust group. The equipment may be entirely legitimate and entirely certified — for a hazard the facility does not have, and not necessarily for the one it does.",
          "The reverse also occurs, less often but with the same root cause. In both directions the fix is the same and it is not difficult: identify the classification of the space, then check the named scope of the specific model against it.",
        ],
      },
    ],
    comparison: {
      heading: "Protection concepts compared",
      columns: ["Explosion proof", "Dust ignition proof"],
      rows: [
        { aspect: "Hazard addressed", left: "Flammable gas, vapour, liquid", right: "Combustible dust" },
        { aspect: "Classification", left: "Class I", right: "Class II" },
        { aspect: "Strategy", left: "Contain an internal ignition; cool escaping gas", right: "Exclude dust; limit surface temperature" },
        { aspect: "Key design concern", left: "Enclosure strength and flame path", right: "Sealing integrity and surface temperature" },
        { aspect: "Settled material", left: "Not the governing concern", right: "Central — a dust layer insulates and raises temperature" },
        { aspect: "What to verify", left: "Class, groups and temperature code on the certificate", right: "Class, groups and temperature code on the certificate" },
      ],
    },
    callout: {
      heading: "Read the certificate, not the category",
      body: [
        "Whether a specific vacuum is suitable for your area is determined by the scope named on its certificate — the classes, divisions, groups and temperature code — matched against the classification of the space.",
        "Request the documentation for the exact model and configuration you intend to buy. Where a configuration option has been added, confirm it falls within the same scope.",
      ],
    },
    faqs: [
      {
        question: "Is dust ignition proof a lower standard than explosion proof?",
        answer:
          "No — it is a different one. They protect against different hazards using different mechanisms. Neither is a subset or a weaker version of the other.",
      },
      {
        question: "Can one vacuum be listed for both Class I and Class II?",
        answer:
          "Equipment can carry listings covering both, but this is a documented fact for a specific model rather than something to assume. The certificate names which classes and groups are covered.",
      },
      {
        question: "Our area is classified for dust. Is an explosion-proof vacuum enough?",
        answer:
          "Not on the strength of that phrase alone. Check whether the listing for that specific model extends to Class II and to the dust group relevant to your material, at a temperature code appropriate for the location.",
      },
    ],
    related: [
      { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
      { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
      { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
      { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "hepa-vs-ulpa-filtration",
    name: "HEPA vs ULPA",
    title: "HEPA or ULPA? Choosing the final filtration stage",
    eyebrow: "Filtration",
    minutes: 6,
    seo: {
      title: "HEPA vs ULPA Filtration for Industrial Vacuums",
      description:
        "Both are absolute filters; they differ in retention at the most penetrating particle size. When ULPA is genuinely warranted, when HEPA is the right answer.",
    },
    heroIntro:
      "Both HEPA and ULPA are absolute filters — they retain a defined proportion of particles at their rated size rather than merely slowing them down. The difference between them is smaller than most specifications assume, and it is frequently not the part of the filtration decision that matters most.",
    keyPoints: [
      "Both are absolute filters; ULPA retains more at the hardest particle size",
      "The step up is real but narrow — and it costs airflow",
      "Filter area and sealing often matter more than the grade on the label",
      "A filter is only as good as the seal and the housing around it",
    ],
    sections: [
      {
        heading: "What the grades describe",
        body: [
          "Filter grades are defined by retention at the most penetrating particle size — the size that is hardest to capture, which is not the smallest. Particles smaller than that are actually easier to capture, because they move erratically and collide with fibres rather than following the airflow past them. This is why filter performance is quoted at a specific particle size rather than as a simple 'everything above X'.",
          "ULPA sits above HEPA on that retention figure. The step is genuine, but in the context of industrial recovery it is a narrowing of an already small escape fraction rather than a transformation in capability.",
        ],
      },
      {
        heading: "What you give up",
        body: [
          "Higher retention comes from a denser medium, and a denser medium resists airflow more. That resistance costs suction at the nozzle, and it means the unit works harder to move the same volume of air. Specifying ULPA where HEPA would serve can produce a machine that filters superbly and cleans poorly.",
          "Filters also load. A denser medium loads sooner, all else being equal, which shortens the interval between filter maintenance events. In a hazardous or toxic application, every filter change is itself an exposure and handling event — so more frequent changes are not a neutral cost.",
        ],
      },
      {
        heading: "When ULPA is genuinely warranted",
        body: [
          "ULPA earns its place where the consequence of the escape fraction is severe: certain pharmaceutical containment applications, some semiconductor and cleanroom environments, and specific highly toxic materials where the exposure argument is made on the last increment of retention.",
          "In those settings the decision is usually driven by a containment strategy or a regulatory position rather than by a general preference for a higher number, and it is made alongside decisions about the discharge arrangement and the change-out procedure rather than in isolation.",
        ],
      },
      {
        heading: "The part that matters more",
        body: [
          "For most industrial recovery the more consequential questions are filter area, sealing and the change-out procedure. Generous filter area keeps face velocity low, which sustains airflow, extends service life and reduces the frequency of handling events. A well-sealed housing ensures the air actually goes through the medium rather than around it.",
          "An absolute filter that is bypassed by a poor seal delivers the performance of no filter at all on the bypassed fraction, regardless of what grade is printed on it. This is why filtration is specified as a system — medium, area, housing, seal and change-out method — rather than as a grade.",
        ],
      },
    ],
    comparison: {
      heading: "Practical comparison",
      columns: ["HEPA", "ULPA"],
      rows: [
        { aspect: "Filter type", left: "Absolute", right: "Absolute" },
        { aspect: "Retention at hardest particle size", left: "High", right: "Higher" },
        { aspect: "Airflow resistance", left: "Lower", right: "Higher — costs suction" },
        { aspect: "Loading rate", left: "Slower", right: "Faster, all else equal" },
        { aspect: "Typical fit", left: "Most industrial and hazardous recovery", right: "Containment, cleanroom, specific toxic materials" },
        { aspect: "Decides performance", left: "Filter area, sealing, change-out method", right: "Filter area, sealing, change-out method" },
      ],
    },
    callout: {
      heading: "Specify the system, not the grade",
      body: [
        "Ask what filter area the unit provides, how the filter is sealed into its housing, and how a loaded filter is removed and bagged. Those answers determine real-world performance and exposure at change-out more than the grade does.",
        "Where the material is toxic as well as combustible, the change-out procedure deserves as much attention as the filter selection itself.",
      ],
    },
    faqs: [
      {
        question: "Is ULPA always better than HEPA?",
        answer:
          "Not for every application. It retains more at the hardest particle size but resists airflow more and loads sooner, which costs suction and increases handling frequency. It is the right answer where the escape fraction genuinely matters, and an unnecessary penalty where it does not.",
      },
      {
        question: "Do I need HEPA for combustible dust?",
        answer:
          "Filtration grade and combustibility are separate questions. HEPA addresses what leaves the machine; the combustible dust question is about ignition sources, grounding, construction and the classification of the area. Many applications need attention to both.",
      },
      {
        question: "How often should an absolute filter be changed?",
        answer:
          "It depends on loading, which depends on the material and the duty. Rather than a fixed interval, watch for falling suction and follow the datasheet for the model. In toxic applications the change-out procedure matters as much as the timing.",
      },
    ],
    related: [
      { label: "HEPA Vacuums", href: "/products/hepa-vacuums" },
      { label: "Cleanroom Vacuum Cleaners", href: "/products/cleanroom-vacuums" },
      { label: "Pharmaceutical Vacuum Cleaners", href: "/products/pharmaceutical-vacuums" },
      { label: "Recovered dust: reclaim or dispose?", href: "/guides/recovered-dust-disposal-and-reclaim" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "industrial-vs-shop-vacuums",
    name: "Industrial vs shop vacuum",
    title: "Why a shop vacuum is not an industrial vacuum",
    eyebrow: "Equipment selection",
    minutes: 6,
    seo: {
      title: "Industrial vs Shop Vacuums — What Changes",
      description:
        "Construction, filtration, duty cycle and ignition sources all differ. Why a general-purpose shop vacuum is the wrong tool for combustible dust.",
    },
    heroIntro:
      "The question comes up constantly, usually phrased as whether the vacuum already in the maintenance cupboard will do. For sweeping up offcuts in a non-classified area it very often will. For fine dust, for combustible material, or for anything approaching continuous duty, the differences stop being about quality and start being about whether the machine is the right kind of thing at all.",
    keyPoints: [
      "A general-purpose vacuum contains ordinary electrical ignition sources",
      "Filtration is the difference between removing dust and redistributing it",
      "Duty cycle assumptions differ by an order of magnitude",
      "Construction determines whether recovered material can be handled safely",
    ],
    sections: [
      {
        heading: "The ignition source problem",
        body: [
          "A general-purpose vacuum contains a universal motor with brushes, an ordinary switch, and no attention paid to whether the interior can accumulate dust. Each of those is a routine ignition source. In an ordinary location that is entirely fine, because there is nothing present to ignite.",
          "Draw a combustible dust into that same machine and the situation is different in kind. The material is dispersed into a cloud inside a confined enclosure, in the immediate vicinity of the ignition sources, which is the arrangement the whole discipline exists to prevent. This is why the answer to 'can we just use the shop vac' for combustible dust is no, and why it is not a matter of degree.",
        ],
      },
      {
        heading: "Filtration and the redistribution problem",
        body: [
          "General-purpose filtration is built to catch debris and protect the motor. Fine dust passes through it, gets exhausted at speed, and is redistributed — often disturbing settled dust elsewhere and creating an airborne fraction that was not there before.",
          "This is the mechanism by which cleaning with the wrong equipment makes a housekeeping situation worse rather than better. It is also why compressed-air blowdown is discouraged for dust: it does not remove anything, it relocates it and disperses it. An industrial vacuum with absolute filtration retains what it collects, which is the entire point of using one.",
        ],
      },
      {
        heading: "Duty cycle and construction",
        body: [
          "Shop vacuums are designed for intermittent use — minutes at a time, with cool-down between. Industrial recovery duty may run for a full shift, day after day. Motors, seals, filters and containers built for the first assumption do not survive the second, and they tend to fail progressively rather than obviously.",
          "Construction differs accordingly. Industrial units are commonly built in stainless steel rather than moulded plastic, with attention to smooth internal surfaces that do not trap material, and with containers designed to be removed and emptied without dispersing what is inside. Where static is a concern, the whole flow path is designed to be conductive and grounded — an ordinary plastic hose is not.",
        ],
      },
      {
        heading: "Where a general-purpose vacuum is fine",
        body: [
          "It is worth saying plainly: for non-combustible, non-toxic, coarse material in an ordinary unclassified location with intermittent use, a general-purpose vacuum is a reasonable tool and there is no reason to overspecify.",
          "The moment any one of those conditions changes — the material is combustible or toxic, the dust is fine, the area is classified, or the duty is sustained — the requirement changes with it. Most plants have both situations in different rooms, and the mistake is usually applying one answer everywhere.",
        ],
      },
    ],
    comparison: {
      heading: "What actually differs",
      columns: ["General-purpose / shop", "Industrial"],
      rows: [
        { aspect: "Ignition sources", left: "Brushed motor, ordinary switch — present by design", right: "Addressed by construction or by removing electrics entirely" },
        { aspect: "Filtration", left: "Debris capture; fine dust passes and is exhausted", right: "Absolute filtration retains fine dust" },
        { aspect: "Duty cycle", left: "Intermittent, minutes at a time", right: "Sustained, up to continuous" },
        { aspect: "Construction", left: "Moulded plastic", right: "Commonly stainless steel, smooth internals" },
        { aspect: "Static control", left: "Not addressed", right: "Conductive flow path, grounded and bonded" },
        { aspect: "Material handling", left: "Tip and empty", right: "Containers designed for contained removal" },
      ],
    },
    callout: {
      heading: "The question that settles it",
      body: [
        "Is the material combustible or toxic, is the dust fine, is the area classified, and is the duty sustained? A yes to any of those takes the application out of general-purpose territory.",
        "If the material has not been characterised, that is the first step rather than the equipment decision — testing determines what you are actually handling.",
      ],
    },
    faqs: [
      {
        question: "Can I use a shop vacuum for wood dust?",
        answer:
          "Wood dust is a combustible dust, so a general-purpose vacuum containing ordinary ignition sources is the wrong tool for it. The fine fraction is the concern rather than the shavings, and general-purpose filtration tends to pass that fraction straight through.",
      },
      {
        question: "What about a HEPA filter fitted to a shop vacuum?",
        answer:
          "Adding a filter addresses what leaves the machine. It does not address the ignition sources inside it, the construction, the static path or the duty cycle. For combustible dust, filtration alone does not make the machine appropriate.",
      },
      {
        question: "Is compressed air a reasonable alternative for cleaning up dust?",
        answer:
          "For combustible dust it is generally discouraged, because blowing does not remove material — it disperses settled dust into a cloud, which is the condition to avoid. Removal and containment is the objective.",
      },
    ],
    related: [
      { label: "Industrial Vacuums", href: "/products/industrial-vacuums" },
      { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
      { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
      { label: "Vacuum vs dust collector", href: "/guides/vacuum-vs-dust-collector" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "portable-vs-central-vacuum-systems",
    name: "Portable vs central",
    title: "Portable units or a central system? Matching the system to the plant",
    eyebrow: "System design",
    minutes: 6,
    seo: {
      title: "Portable vs Central Industrial Vacuum Systems",
      description:
        "Portable units follow the work; central systems put permanent inlets where cleaning happens. How cleaning frequency, plant layout.",
    },
    heroIntro:
      "This is an architecture decision rather than a product decision, and it is usually settled by how often cleaning happens and where. A plant that cleans a handful of machines between runs has a different problem from one where housekeeping is continuous across a large floor, and the equipment that suits each is genuinely different.",
    keyPoints: [
      "Portable units follow the work; central systems bring the work to fixed inlets",
      "Frequency and distance drive the decision more than plant size",
      "Central systems move the collection point out of the work area",
      "Hose length is a real constraint — suction is lost over distance",
    ],
    sections: [
      {
        heading: "What each architecture assumes",
        body: [
          "A portable unit assumes cleaning happens in varied places at unpredictable intervals, and that moving the machine to the work is reasonable. It is flexible, it needs no installation, it can be redeployed as production changes, and it can be taken out of service individually without affecting anything else.",
          "A central system assumes cleaning happens repeatedly in known locations, and that it is worth installing permanent piping with inlets at those points. Operators connect a hose at the nearest inlet rather than fetching a machine. The power unit and the collection container sit elsewhere — often outside the production area entirely.",
        ],
      },
      {
        heading: "Where central systems earn their cost",
        body: [
          "The case strengthens with frequency. Where housekeeping is a shift routine rather than an occasional task, the time spent fetching, positioning and emptying portable units becomes a real labour cost, and it is the kind of cost that quietly encourages skipped cleaning.",
          "It strengthens again where the collection point matters. Moving the container out of the production area means material is emptied away from the process, away from operators, and in a location that can be set up properly for that task. In cleanroom and containment contexts this is often the decisive argument rather than the labour one.",
        ],
      },
      {
        heading: "Where portable units remain the right answer",
        body: [
          "Portability wins where cleaning is intermittent, where the locations vary, or where the plant layout changes with production. It also wins where different materials must not be mixed — separate units keep separate materials genuinely separate, which piping does not do without care.",
          "It is frequently the right answer for classified areas too, precisely because the unit can be specified for that area and kept to it, rather than designing a piped system that crosses between areas of different classification.",
        ],
      },
      {
        heading: "The constraints that catch people out",
        body: [
          "Suction falls over hose and pipe length. A central system has to be designed for the run, not assembled from the same components as a portable unit and extended. Long runs need the system sized for them from the outset, and inlet placement is part of that calculation rather than an afterthought.",
          "Piping that crosses between areas of different classification needs deliberate attention rather than assumption. So does material compatibility across a shared system — a shared line means shared material, and where two materials should not meet, they need separate provision.",
        ],
      },
    ],
    comparison: {
      heading: "Choosing between them",
      columns: ["Portable units", "Central system"],
      rows: [
        { aspect: "Best when cleaning is", left: "Intermittent, in varied locations", right: "Frequent, in known locations" },
        { aspect: "Installation", left: "None", right: "Permanent piping and inlets" },
        { aspect: "Collection point", left: "In the work area", right: "Remote from the work area" },
        { aspect: "Flexibility as layout changes", left: "High — redeploy freely", right: "Low — piping is fixed" },
        { aspect: "Separating materials", left: "Straightforward — dedicate a unit", right: "Needs deliberate design" },
        { aspect: "Main design constraint", left: "Hose length and manoeuvring", right: "Pipe run length and inlet placement" },
      ],
    },
    callout: {
      heading: "Mixed estates are normal",
      body: [
        "Many plants run both — a central system covering routine housekeeping across a production floor, with portable units dedicated to specific machines, specific materials or specific classified areas.",
        "Where a system will cross areas of different classification, or handle materials that must not be combined, that belongs in the design conversation from the start rather than being resolved afterwards.",
      ],
    },
    faqs: [
      {
        question: "At what plant size does a central system make sense?",
        answer:
          "Frequency matters more than size. A small plant cleaning continuously may justify one sooner than a large plant cleaning occasionally. The labour spent moving and emptying portable units is usually the figure that settles it.",
      },
      {
        question: "Can a central system handle combustible dust?",
        answer:
          "Systems are designed for the material and the area classification they serve, which includes the piping, the grounding and bonding of the full path, and the collection arrangement. It is a design question rather than an off-the-shelf selection.",
      },
      {
        question: "Can one central system serve two different materials?",
        answer:
          "Only with deliberate design. A shared line means shared material. Where two materials should not be combined — for reactivity, contamination or reclaim reasons — they generally need separate provision.",
      },
    ],
    related: [
      { label: "Central Vacuum Systems", href: "/products/central-vacuum-systems" },
      { label: "Custom Engineered Systems", href: "/products/custom-engineered-systems" },
      { label: "Industrial Vacuums", href: "/products/industrial-vacuums" },
      { label: "Warehouse housekeeping", href: "/applications/warehouse-housekeeping" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "wet-vs-dry-recovery",
    name: "Wet vs dry recovery",
    title: "Wet and dry recovery: one machine, or two problems?",
    eyebrow: "Equipment selection",
    minutes: 6,
    seo: {
      title: "Wet vs Dry Industrial Vacuum Recovery",
      description:
        "Recovering liquid is a different engineering problem from recovering dust. Where combined wet/dry units fit.",
    },
    heroIntro:
      "Liquid and dust are recovered by the same basic principle and almost nothing else in common. Filtration behaves differently, the container has to deal with weight and sloshing rather than dispersion, and the material itself may react. Combined units exist and are genuinely useful — but the combination has boundaries worth understanding before specifying one.",
    keyPoints: [
      "Filtration for liquid and for dust work on different principles",
      "Liquid is heavy — capacity is limited by weight, not volume",
      "Mixing recovered wet and dry material can create a reaction or a slurry",
      "Immersion separation is a deliberate wetting strategy, not wet recovery",
    ],
    sections: [
      {
        heading: "Why the filtration differs",
        body: [
          "Dry filtration relies on a medium that particles cannot pass through while air can. Wetting that medium changes its behaviour fundamentally — a wetted dry filter blinds, loses airflow and, once dried, may never recover its original performance. This is the most common way a combined unit is damaged: liquid drawn through a filter set up for dust.",
          "Liquid recovery instead relies on separation and level control — the liquid drops out, the air continues, and the system prevents liquid reaching the motive path. Units built to do both switch between these arrangements, and using the wrong configuration for the material at hand is what causes the damage.",
        ],
      },
      {
        heading: "Weight, capacity and handling",
        body: [
          "Liquid capacity is limited by weight long before it is limited by volume. A container that is entirely manageable full of dust may be immovable full of liquid, which changes how the unit is emptied and by whom. Where recovery is routine, drainage arrangements matter more than raw container size.",
          "Liquid also moves. A part-full container shifts its load as the unit is wheeled, which affects stability in a way dry material does not. This is a practical handling consideration rather than a specification detail, but it shapes how a unit is actually used on a floor.",
        ],
      },
      {
        heading: "The mixing problem",
        body: [
          "The most consequential issue is what happens when recovered wet and dry material meet in the same container. At best this produces a slurry that is difficult to handle, awkward to dispose of and impossible to reclaim. At worst the combination is reactive.",
          "Some materials react with water directly, and certain metal dusts are in this category — which is why water is not a universal answer for a metal dust incident and why the material has to be identified before the recovery method is chosen. Where a material's reactivity is uncertain, that question is settled by characterising the material rather than by trying it.",
        ],
      },
      {
        heading: "Immersion separation is a different thing",
        body: [
          "Immersion separation is sometimes confused with wet recovery because both involve liquid. The principle is different: material is drawn into a liquid bath so that it is wetted on capture and never exists as a dry dispersed cloud inside the machine. It is a deliberate control strategy for specific combustible dusts, not a way of picking up spills.",
          "Because it is a control strategy, its suitability depends entirely on the material — including whether that material can be safely wetted at all. It belongs in a conversation about the specific dust rather than in a general wet-or-dry equipment comparison.",
        ],
      },
    ],
    comparison: {
      heading: "Wet and dry compared",
      columns: ["Dry recovery", "Wet recovery"],
      rows: [
        { aspect: "Separation principle", left: "Filter medium retains particles", right: "Liquid separates out; level control protects the airpath" },
        { aspect: "Filter behaviour", left: "Blinds if wetted", right: "Dry filter must be out of the path or protected" },
        { aspect: "Capacity limited by", left: "Volume", right: "Weight" },
        { aspect: "Handling concern", left: "Dispersion when emptying", right: "Weight, sloshing, drainage" },
        { aspect: "Main risk when mixed", left: "Slurry, or reaction with reactive material", right: "Slurry, or reaction with reactive material" },
      ],
    },
    callout: {
      heading: "Identify the material first",
      body: [
        "Whether a material can be safely wetted, and whether wet and dry recovery can share a container, are properties of that material. Both are settled by characterising it rather than by the capability of the machine.",
        "Where reactivity is uncertain — particularly with metal dusts — that question belongs before the equipment decision, not after it.",
      ],
    },
    faqs: [
      {
        question: "Can one vacuum do both wet and dry?",
        answer:
          "Combined units exist and work well within their design. What matters is using the correct configuration for the material at hand and not allowing recovered wet and dry material to combine where that would create a slurry or a reaction.",
      },
      {
        question: "What happens if liquid is drawn through a dry filter?",
        answer:
          "The filter blinds — airflow drops sharply — and it may not recover its original performance once dried. This is the most common cause of damage in combined units and it is a configuration error rather than a fault.",
      },
      {
        question: "Is immersion separation the same as wet recovery?",
        answer:
          "No. Immersion separation draws material into a liquid bath so it is wetted on capture and never forms a dry cloud inside the machine. It is a control strategy for specific combustible dusts, and it depends on the material being safe to wet.",
      },
    ],
    related: [
      { label: "Wet & Dry Systems", href: "/products/wet-dry-systems" },
      { label: "Toxic liquid recovery", href: "/guides/toxic-liquid-recovery" },
      { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
      { label: "Spill cleanup", href: "/applications/spill-cleanup" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];
