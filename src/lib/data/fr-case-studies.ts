/**
 * Québec French case studies.
 *
 * INTEGRITY REQUIREMENT — these are REPRESENTATIVE scenarios, not accounts of real
 * projects. The English originals carry that disclaimer and contain no fabricated
 * metrics, customer names or quotes. The French versions must do the same.
 *
 * The disclaimer is enforced structurally rather than left to the writer: DISCLAIMER
 * is prepended to every intro and appears as the first fact on every page, so a
 * future edit cannot quietly drop it and turn an illustration into a claim about a
 * real customer.
 */

import type { FrMaterialGuide } from "@/lib/data/fr-materials";

export type FrCaseStudy = FrMaterialGuide;

const M = "/fr/poussieres-et-matieres";
const A = "/fr/applications";

/** Prepended to every intro. Do not remove. */
const DISCLAIMER =
  "Scénario représentatif. Cette étude de cas illustre une situation type et ne décrit pas un projet client réel : elle ne contient aucun nom de client, aucune donnée chiffrée de résultat et aucune citation. ";

/** First fact on every page. Do not remove. */
const DISCLAIMER_FACT = {
  label: "Nature de ce document",
  value: "Scénario représentatif — non un projet client réel",
};

type Raw = Omit<FrCaseStudy, "intro" | "facts"> & {
  intro: string;
  facts: { label: string; value: string }[];
};

function study(raw: Raw): FrCaseStudy {
  return { ...raw, intro: DISCLAIMER + raw.intro, facts: [DISCLAIMER_FACT, ...raw.facts] };
}

export const FR_CASE_STUDIES: FrCaseStudy[] = [
  study({
    slug: "sable-de-silice-fonderie",
    name: "Sable de silice en fonderie",
    group: "Métaux primaires",
    metaTitle: "Étude de cas : sable de silice en fonderie | Scénario type",
    metaDescription:
      "Scénario représentatif : maîtriser la silice cristalline respirable du sable de moulage et les fines métalliques du parachèvement dans une fonderie.",
    intro:
      "Une fonderie type combine deux problèmes que peu d'installations présentent ensemble : la silice cristalline respirable du sable de moulage, et les fines métalliques du parachèvement.",
    facts: [
      { label: "Type d'installation", value: "Fonderie de moulage au sable" },
      { label: "Danger principal", value: "Silice cristalline respirable — silicose" },
      { label: "Danger secondaire", value: "Fines métalliques conductrices du parachèvement" },
      { label: "Approche", value: "Filtration absolue, méthodes sèches abandonnées" },
    ],
    overview: [
      "Le secouage, la régénération et la manipulation du sable libèrent de la silice cristalline respirable. La norme OSHA fixe une limite d'exposition de 50 microgrammes par mètre cube — assez basse pour qu'une poussière visible la dépasse largement, ce qui rend la perception de l'opérateur inutilisable comme contrôle.",
      "Le parachèvement ajoute une seconde couche : ébarbage, meulage et sablage produisent des fines métalliques conductrices, et selon les alliages coulés certaines sont réactives. Le programme doit donc satisfaire une exigence d'exposition et une exigence de poussière combustible simultanément.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Silice invisible aux concentrations qui comptent.",
      "Balayage à sec et soufflage encore courants et inappropriés.",
      "Fines métalliques conductrices au parachèvement.",
      "Chaleur de procédé soutenue à proximité des accumulations.",
      "Abrasivité usant l'équipement non conçu pour cela.",
      "Deux régimes à satisfaire avec un seul programme.",
    ],
    solutions: [
      "Récupération à filtration absolue HEPA 99,99 % dans toutes les zones sable.",
      "Abandon du balayage à sec et du soufflage à l'air comprimé.",
      "Équipement conducteur et mis à la terre au parachèvement.",
      "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
      "Ségrégation des fines réactives, sans mélange avec le sable.",
      "Fréquences définies incluant surfaces hautes et pourtour des fours.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type rencontrée en fonderie, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi la silice domine-t-elle en fonderie ?",
        answer:
          "Parce que le sable de moulage en est la source principale, et que son secouage, sa régénération et sa manipulation la libèrent sous forme respirable. La silice cause la silicose, irréversible, et sa limite d'exposition est de 50 microgrammes par mètre cube.",
      },
      {
        question: "Le sable de moulage est-il combustible ?",
        answer:
          "Non. Le sable est minéral et ne brûle pas. Le danger est entièrement sanitaire, ce qui explique pourquoi le balayage à sec est la mauvaise méthode — non pour un risque d'incendie mais parce qu'il remet en suspension une poussière à limite très basse.",
      },
      {
        question: "Faut-il des appareils différents selon les zones ?",
        answer:
          "Souvent, oui. La filtration absolue est requise partout où il y a de la silice, une construction conductrice et mise à la terre là où des fines métalliques sont produites, et une tolérance à l'abrasion dans les deux cas.",
      },
    ],
    enPath: "/case-studies/silica-sand-foundry",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Fonderie", href: "/fr/industries/fonderie" },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
    ],
  }),
  study({
    slug: "poussiere-de-farine-boulangerie",
    name: "Poussière de farine en boulangerie industrielle",
    group: "Transformation alimentaire",
    metaTitle: "Étude de cas : poussière de farine en boulangerie | Scénario type",
    metaDescription:
      "Scénario représentatif : maîtriser la poussière de farine combustible dans une boulangerie industrielle tout en satisfaisant les registres de salubrité.",
    intro:
      "Une boulangerie industrielle type doit satisfaire deux régimes avec le même passage de nettoyage : la prévention des explosions de poussières et les registres de salubrité alimentaire.",
    facts: [
      { label: "Type d'installation", value: "Boulangerie industrielle" },
      { label: "Matière", value: "Farine et poussière riche en amidon" },
      { label: "Deux régimes", value: "Poussières combustibles et salubrité alimentaire" },
      { label: "Point de génération principal", value: "Vidage de sacs et transferts" },
    ],
    overview: [
      "Le vidage manuel de sacs est fréquemment le point unique de génération le plus important, et il se situe à hauteur de respiration de l'opérateur. Les transferts et le tamisage produisent le reste.",
      "L'accumulation qui compte pour le risque de déflagration se trouve au-dessus de la hauteur des yeux — acier, rebords, dessus de conduits, carters. Un plancher impeccable ne dit rien de leur état, et c'est précisément la configuration qui surprend.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Vidage de sacs comme point de génération dominant.",
      "Accumulation en hauteur, hors de vue depuis le plancher.",
      "Sacs vides retenant de la matière et constituant une seconde source.",
      "Chaleur des fours à proximité de matière fine.",
      "Gestion des allergènes exigeant un nettoyage documenté entre séries.",
      "Exigences de lavabilité limitant les constructions acceptables.",
    ],
    solutions: [
      "Captation à la source aux stations de vidage de sacs.",
      "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
      "Construction en acier inoxydable lavable, conforme aux exigences de salubrité.",
      "Fréquences définies pour l'acier en hauteur et les conduits.",
      "Un seul passage documenté servant les deux régimes.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif d'une boulangerie industrielle type, sans nom de client, sans donnée chiffrée de résultat et sans citation.",
      },
      {
        question: "La farine est-elle vraiment un risque d'explosion ?",
        answer:
          "La farine est une poudre organique fine et combustible. Dans un sac elle se comporte comme tout solide organique sec, mais dispersée en nuage dans une enceinte elle peut s'enflammer et déflagrer. La NFPA 660 la traite comme une poussière combustible.",
      },
      {
        question: "Un même nettoyage peut-il servir la salubrité et la sécurité ?",
        answer:
          "Oui, et c'est l'approche efficace : un passage documenté avec un appareil à filtration retenue et à construction lavable sert le programme de poussières combustibles et les registres de salubrité, y compris la gestion des allergènes.",
      },
      {
        question: "Où commencer dans une boulangerie existante ?",
        answer:
          "Aux stations de vidage de sacs, qui génèrent le plus, puis sur les surfaces au-dessus de la hauteur des yeux, qui portent l'accumulation alimentant un événement secondaire.",
      },
    ],
    enPath: "/case-studies/flour-dust-commercial-bakery",
    related: [
      { label: "Poussière de farine", href: `${M}/poussiere-de-farine` },
      { label: "Agroalimentaire", href: "/fr/industries/agroalimentaire" },
      { label: "Ensachage et vidage de sacs", href: `${A}/ensachage-et-vidage-de-sacs` },
    ],
  }),
  study({
    slug: "poussiere-d-aluminium-usinage-automobile",
    name: "Fines d'aluminium en usinage automobile",
    group: "Fabrication",
    metaTitle: "Étude de cas : fines d'aluminium en usinage automobile",
    metaDescription:
      "Scénario représentatif : récupérer des fines d'aluminium réactives mêlées à du liquide de coupe dans un atelier d'usinage automobile.",
    intro:
      "Un atelier d'usinage automobile type rencontre les fines d'aluminium non pas comme une matière exotique mais comme une conséquence de l'allègement des véhicules — dans des ateliers qui usinaient de l'acier il y a quinze ans.",
    facts: [
      { label: "Type d'installation", value: "Atelier d'usinage de composants automobiles" },
      { label: "Matière", value: "Fines d'aluminium mêlées à du liquide de coupe" },
      { label: "Danger", value: "Métal combustible réactif — Classe D" },
      { label: "Difficulté pratique", value: "Flux mixte solide-liquide, ségrégation à la machine" },
    ],
    overview: [
      "L'aluminium massif ne présente pas de risque d'incendie en atelier ; ses fines de meulage et d'usinage sont une matière différente, qui s'enflamme plus facilement et réagit avec l'eau à chaud en libérant de l'hydrogène. L'eau n'est donc pas une réponse d'extinction.",
      "La difficulté quotidienne est le flux : les copeaux arrivent avec du liquide de coupe, les fines se mélangent aux copeaux, et la décision de ségréguer se prend à la machine plutôt qu'au bac. Une fois plusieurs métaux combinés avec du liquide, la valeur de rebut disparaît et l'évaluation de sécurité ne tient plus.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Fines réactives introduites par l'allègement dans des ateliers habitués à l'acier.",
      "Eau inappropriée sur un feu de fines d'aluminium déclaré.",
      "Flux mixte solide-liquide exigeant une récupération conçue pour les deux.",
      "Accumulation à sec dans les contenants de récupération.",
      "Mélange des métaux détruisant la valeur de rebut et l'évaluation.",
      "Conductivité des fines, pertinente pour l'équipement électrique.",
    ],
    solutions: [
      "Équipement conducteur, mis à la terre et exempt de sources d'inflammation.",
      "Séparation par immersion là où l'évaluation le justifie.",
      "Récupération conçue pour les flux mixtes solide-liquide.",
      "Ségrégation par métal décidée à la machine.",
      "Retrait rapide de la matière récupérée du bâtiment.",
      "Dispositions de Classe D et personnel formé.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif d'un atelier d'usinage automobile type, sans nom de client, sans donnée chiffrée de résultat et sans citation.",
      },
      {
        question: "Pourquoi l'aluminium est-il devenu un enjeu dans ces ateliers ?",
        answer:
          "Parce que l'allègement des véhicules a rendu l'aluminium et le magnésium courants là où l'acier dominait. Des ateliers qui n'avaient jamais manipulé de fines métalliques réactives en produisent aujourd'hui quotidiennement.",
      },
      {
        question: "Peut-on utiliser de l'eau sur un feu de fines d'aluminium ?",
        answer:
          "Non. L'aluminium réagit avec l'eau à température élevée en libérant de l'hydrogène, ce qui ajoute un second combustible. Les feux de métaux sont de Classe D, où l'eau et le CO₂ sont généralement inappropriés.",
      },
      {
        question: "Pourquoi la ségrégation se décide-t-elle à la machine ?",
        answer:
          "Parce que le mélange est irréversible. Une fois plusieurs métaux combinés avec du liquide de coupe, la valeur de rebut disparaît et l'évaluation de sécurité faite pour un métal donné ne s'applique plus au mélange.",
      },
    ],
    enPath: "/case-studies/aluminum-dust-automotive-machining",
    related: [
      { label: "Poussière d'aluminium", href: `${M}/poussiere-d-aluminium` },
      { label: "Automobile", href: "/fr/industries/automobile" },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
    ],
  }),
];
