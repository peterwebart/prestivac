import type { GuideArticle } from "@/components/templates/guide-article";

/**
 * Service-side guides: keeping a unit working, and specifying what attaches to
 * it.
 *
 * Integrity rules as guides.ts. Two specific constraints here:
 * - No service intervals are stated in hours or months. They depend on
 *   material, duty and the facility's own assessment, and inventing a number
 *   would be inventing a specification.
 * - The accessory guidance is a certification statement, not a sales one: where
 *   a listing covers the vacuum together with its hoses and tools, substituting
 *   them takes the unit outside that listing. That is from certification.ts.
 */
export const SERVICE_GUIDES: GuideArticle[] = [
  {
    slug: "industrial-vacuum-maintenance",
    name: "Maintenance & troubleshooting",
    title: "Industrial vacuum maintenance and fault diagnosis",
    eyebrow: "Operation",
    minutes: 8,
    seo: {
      title: "Industrial Vacuum Maintenance & Faults",
      description:
        "Loss of suction has a short list of causes and they are diagnosable in order. Plus why maintenance is what keeps a certified unit certified rather than a separate concern.",
    },
    heroIntro:
      "Most industrial vacuum faults are one of a handful of things, and they are diagnosable in a sensible order without tools. The part that gets missed is that on a certified unit, maintenance is not housekeeping around the equipment — it is what keeps the listing meaningful. A unit that has been opened, repaired outside its configuration or fitted with substitute parts is no longer the equipment that was assessed.",
    keyPoints: [
      "Loss of suction has a short, ordered list of causes",
      "Check the far end of the hose before suspecting the machine",
      "On a certified unit, maintenance preserves the listing",
      "The bonding path fails invisibly and needs deliberate checking",
    ],
    sections: [
      {
        heading: "Diagnose from the tool backwards",
        body: [
          "The instinct when suction drops is to suspect the machine, and the machine is usually the last thing at fault. Work from the far end: tool, then hose, then container and filter, then the unit. That order finds most faults in the first two steps and costs nothing.",
          "A blockage at a tool or in a hose bend is the single most common cause and the easiest to miss, because the machine sounds entirely normal — a restricted airflow path often makes the motor note higher rather than lower, which reads as working harder rather than as a fault.",
        ],
      },
      {
        heading: "The filter is the second suspect",
        body: [
          "A loading filter reduces airflow progressively, so the deterioration is gradual enough that operators adjust to it without noticing. By the time it is obvious, performance has usually been poor for a while.",
          "This is the argument for generous filter area rather than for frequent changes: low face velocity sustains airflow deeper into the filter's life. It is also why change-out is worth doing on an assessed schedule rather than on the day someone complains, particularly where every change is an exposure event.",
        ],
      },
      {
        heading: "Leaks look like weak suction",
        body: [
          "Airflow takes the easiest route. A poorly seated container, a perished gasket, a filter not sealing into its housing or a hose cuff that is not fully engaged all admit air that never passes through the tool — so the machine moves plenty of air and picks up very little.",
          "Seals are consumables and they degrade slowly. Checking them is quick, and it is worth doing before concluding that a unit is underpowered for the job.",
        ],
      },
      {
        heading: "The check that has no symptom",
        body: [
          "Everything above announces itself eventually. The bonding and grounding path does not. A broken conductive path produces no change in suction, sound or pickup — the equipment works exactly as it did yesterday while a control has silently failed.",
          "That makes continuity across the whole path, tool to container, a scheduled measurement rather than a visual inspection. The common failure modes are ordinary: a hose replaced from stores, a tool borrowed from another machine, a clamp left unattached after the unit was moved, a conductive element fractured from flexing.",
        ],
      },
      {
        heading: "Maintenance and certification are the same subject",
        body: [
          "On a listed unit, the certification describes a configuration. Enclosure integrity, cable condition, seals, the grounding path and the supplied hoses and tools are all part of what was assessed. Maintenance is what keeps the unit in that state.",
          "This has a practical consequence for spares policy. A hose or tool substituted from general stores takes an expensive certified machine outside the scope of its listing for the cost of a fitting, and nothing about the machine's behaviour indicates it has happened. Where repairs are needed, they belong within the listed configuration rather than as a workshop improvisation.",
        ],
      },
      {
        heading: "Handling what comes out",
        body: [
          "Emptying and filter change are the points where collected material is most concentrated and least contained, which makes them the highest-exposure moments in the cycle rather than incidental tasks.",
          "Where the material is combustible, the ignition-source and static controls need to still be intact while the machine is open. Where it is toxic, the change-out method is the control. Carbonaceous materials add a further consideration: they can hold a deep-seated smoulder inside a collected volume with nothing visible at the surface, so a full container is not inert simply because it looks it.",
        ],
      },
    ],
    comparison: {
      heading: "Loss of suction — diagnose in this order",
      columns: ["Likely cause", "What to check"],
      rows: [
        { aspect: "1. Tool or nozzle", left: "Blockage at the working end", right: "Remove the tool and test airflow at the hose cuff" },
        { aspect: "2. Hose", left: "Blockage, usually at a bend; split or perished wall", right: "Disconnect at both ends and check the bore is clear end to end" },
        { aspect: "3. Filter", left: "Progressive loading", right: "Inspect the medium; check it is seated and sealed in its housing" },
        { aspect: "4. Container", left: "Full, or not seated on its gasket", right: "Empty; check the gasket is intact and the container seats squarely" },
        { aspect: "5. Seals and cuffs", left: "Air admitted outside the flow path", right: "Check hose cuff engagement and all lid and housing seals" },
        { aspect: "6. Supply", left: "Pneumatic: insufficient air. Electric: supply fault", right: "Confirm available pressure and volume at the point of use" },
      ],
    },
    callout: {
      heading: "Repairs stay inside the listed configuration",
      body: [
        "On a certified unit, repairs and replacement parts belong within the configuration that was assessed. A unit modified, repaired outside that configuration or fitted with substitute hoses or tools is no longer the equipment the certificate describes.",
        "No service intervals are published here in hours or months, because they depend on the material, the duty and your own assessment. Set them from the Dust Hazard Analysis rather than from a generic figure.",
      ],
    },
    faqs: [
      {
        question: "Our vacuum has lost suction — where do we start?",
        answer:
          "At the far end. Remove the tool and test airflow at the hose cuff, then check the hose bore end to end, then the filter, container and seals, and only then the unit. Most faults are found in the first two steps, and a restricted airflow path often makes the motor note higher rather than lower.",
      },
      {
        question: "How often should the filter be changed?",
        answer:
          "It depends on the material and the duty, so no generic interval is useful. Watch for gradually falling suction and set the interval from your own assessment. Generous filter area extends it, which matters because every change is a handling and exposure event.",
      },
      {
        question: "Can we fit a replacement hose from our own stores?",
        answer:
          "Not on a certified unit. Where the listing covers the vacuum together with its hoses and tools, substituting them takes the unit outside its scope — and nothing about the machine's behaviour indicates it has happened. Static-dissipating hose is part of the certified configuration, not an upgrade.",
      },
      {
        question: "How would we know the grounding path had failed?",
        answer:
          "You would not, from operation. Suction, sound and pickup are all unchanged. That is why continuity across the whole path, tool to container, should be a scheduled measurement rather than a visual check of the machine end.",
      },
    ],
    related: [
      { label: "Grounding & bonding", href: "/guides/grounding-and-bonding" },
      { label: "Selecting hoses, tools & accessories", href: "/guides/selecting-hoses-and-accessories" },
      { label: "How to select HEPA filtration", href: "/guides/how-to-select-hepa-filtration" },
      { label: "Accessories", href: "/products/accessories" },
      { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
      { label: "Support & manuals", href: "/support" },
    ],
  },

  {
    slug: "selecting-hoses-and-accessories",
    name: "Hoses, tools & accessories",
    title: "Selecting hoses, tools and accessories",
    eyebrow: "Buying guide",
    minutes: 7,
    seo: {
      title: "Choosing Hoses, Tools & Accessories",
      description:
        "Hose diameter changes performance more than most specifications assume — and on a certified unit the accessories are part of the listing rather than a separate purchase.",
    },
    heroIntro:
      "Accessories are treated as an afterthought more often than any other part of a vacuum specification, and they are the part most likely to undo it. Hose diameter determines whether material actually moves; the conductive element determines whether static has a route away; and on a certified unit, the hoses and tools are inside the listing rather than alongside it.",
    keyPoints: [
      "Diameter is a performance decision, not a fitting decision",
      "Every metre and every bend costs more than a proportion",
      "Conductive and anti-static are not interchangeable terms",
      "On a certified unit, accessories are part of the listing",
    ],
    sections: [
      {
        heading: "Diameter decides whether material moves",
        body: [
          "This is the parameter most often chosen by whatever fits. A narrower hose raises air velocity, which helps keep heavy material in suspension, but restricts total volume and blocks more readily with coarse material. A wider hose moves more air but may not sustain the velocity needed to carry dense material along a horizontal run.",
          "So diameter follows the material rather than the machine. Fine light dust over a large area wants volume; dense metal fines from a sump want velocity. Getting this wrong produces a machine that appears underpowered when the specification is simply mismatched.",
        ],
      },
      {
        heading: "Length costs more than you would expect",
        body: [
          "Every metre of hose costs performance, and the loss accumulates faster than a simple proportion. Every bend, fitting and reduction adds to it. A unit that performs well on a short hose can disappoint badly on a long one, with nothing wrong with the machine.",
          "The practical rule is to specify for the assembly you will actually use — the real length, the real tool, the real number of bends — rather than for the machine alone. Where a long run is unavoidable, it belongs in the sizing conversation rather than being discovered afterwards.",
        ],
      },
      {
        heading: "Conductive is not the same as anti-static",
        body: [
          "These terms are used loosely and they do not mean the same thing. What a static control path needs is a continuous conductive element running the length of the hose and bonded at both ends. A hose described generally as anti-static may not provide that, and the difference is invisible in use.",
          "This matters because charge is generated inside the hose, by material moving along its wall. A grounded machine with a hose that has no continuous conductive element leaves that charge with nowhere to go — which is the failure mode the whole static specification exists to prevent.",
        ],
      },
      {
        heading: "Tools follow the surface, not the machine",
        body: [
          "The tool at the working end determines capture efficiency more than anything else in the assembly. Crevice tools for ledges and structural steel, wide floor tools for open areas, brush heads for equipment housings where material adheres, and extension wands for the overhead surfaces where the fine fraction actually settles.",
          "Overhead reach deserves particular attention, because the accumulation that matters most is above head height and the usual reason it is not cleaned is that nobody can reach it. A tool set that stops at floor level quietly guarantees the overhead inventory keeps growing.",
        ],
      },
      {
        heading: "On a certified unit, accessories are inside the listing",
        body: [
          "This is the point that changes the purchasing decision. Where a listing covers the vacuum together with its hoses and tools, those accessories are part of the configuration that was assessed. Substituting them takes the unit outside the scope of its certification.",
          "It usually happens in service rather than at purchase — a hose damaged and replaced from general stores, a tool borrowed from another machine. Nothing about the machine's behaviour changes, so there is no signal that anything has happened. A spares policy that permits generic replacements defeats an expensive certified unit for the cost of a fitting.",
        ],
      },
      {
        heading: "Filters are accessories too",
        body: [
          "Where the certified configuration specifies static-dissipating filters, fitting a filter outside that specification has the same consequence as substituting a hose. It is worth confirming the filter specification against the model documentation rather than against the grade alone.",
          "Beyond certification, the filtration decision is about area, sealing and change-out method rather than grade — covered in the filtration selection guide.",
        ],
      },
    ],
    comparison: {
      heading: "Matching hose to material",
      columns: ["Narrower bore", "Wider bore"],
      rows: [
        { aspect: "Air velocity", left: "Higher", right: "Lower" },
        { aspect: "Total volume moved", left: "Lower", right: "Higher" },
        { aspect: "Suits", left: "Dense material, vertical lifts, sumps", right: "Light fine dust, large areas" },
        { aspect: "Risk", left: "Blocks with coarse material", right: "May not keep heavy material moving" },
        { aspect: "Long runs", left: "Velocity maintained, volume penalty compounds", right: "Volume retained, settling risk over distance" },
      ],
    },
    callout: {
      heading: "Ask for the accessory specification with the unit",
      body: [
        "On a certified model, request the hose and tool specification alongside the datasheet, and treat it as part of the equipment rather than a consumables list. Replacements should come from the same specification.",
        "Where you are unsure whether an existing accessory is within the certified configuration, ask before fitting it rather than after.",
      ],
    },
    faqs: [
      {
        question: "What hose diameter should we use?",
        answer:
          "It follows the material. Narrower bore sustains velocity and suits dense material and vertical lifts but blocks with coarse debris; wider bore moves more air and suits fine dust over large areas but may not keep heavy material moving. Match it to what you are recovering.",
      },
      {
        question: "Is anti-static hose the same as conductive hose?",
        answer:
          "Not necessarily, and the difference is invisible in use. A static control path needs a continuous conductive element bonded at both ends. A hose described loosely as anti-static may not provide one, which leaves the charge generated inside it with nowhere to go.",
      },
      {
        question: "Can we buy replacement hoses and tools elsewhere?",
        answer:
          "Not for a certified unit. Where the listing covers the vacuum together with its hoses and tools, substituting them takes the unit outside its scope. This usually happens in service rather than at purchase, and nothing about the machine's behaviour signals it.",
      },
      {
        question: "Which tools matter most?",
        answer:
          "Whichever reach the accumulation that actually matters — which is overhead. Crevice tools and extension wands for beams, duct tops and ledges do more for the hazard than another floor tool, because that is where the fine fraction settles and where cleaning usually stops.",
      },
    ],
    related: [
      { label: "Accessories", href: "/products/accessories" },
      { label: "Grounding & bonding", href: "/guides/grounding-and-bonding" },
      { label: "Maintenance & troubleshooting", href: "/guides/industrial-vacuum-maintenance" },
      { label: "How to select HEPA filtration", href: "/guides/how-to-select-hepa-filtration" },
      { label: "Sizing an industrial vacuum", href: "/guides/how-to-size-an-industrial-vacuum" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];
