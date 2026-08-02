/**
 * Québec French industry guides — sector framing.
 *
 * These deliberately do NOT restate the material and application guides. Each
 * sector page describes its own dust profile, its regulatory context, and then
 * routes into the 47 translated material guides and 19 application guides via
 * `related`. That keeps 38 sector pages from competing with the guides they draw
 * on, which is the same reasoning behind making /resources an index rather than
 * reprinting every guide.
 */

import type { FrMaterialGuide } from "@/lib/data/fr-materials";

export type FrIndustryGuide = FrMaterialGuide;

const M = "/fr/poussieres-et-matieres";
const A = "/fr/applications";

export const FR_INDUSTRIES: FrIndustryGuide[] = [
  {
    slug: "fonderie",
    name: "Fonderie",
    group: "Métaux primaires",
    metaTitle: "Aspirateurs pour fonderie | Sable de moulage et silice",
    metaDescription:
      "Les fonderies combinent silice cristalline respirable, poussières métalliques et chaleur soutenue. Récupération sécuritaire du sable de moulage et des fines.",
    intro:
      "Une fonderie réunit trois dangers que peu d'installations présentent ensemble : de la silice cristalline respirable en grande quantité, des poussières métalliques, et une chaleur de procédé soutenue à proximité de tout cela.",
    facts: [
      { label: "Danger dominant", value: "Silice cristalline respirable du sable de moulage" },
      { label: "Second danger", value: "Poussières métalliques du parachèvement et du meulage" },
      { label: "Limite d'exposition", value: "Silice : 50 µg/m³ (MPT 8 h) selon la norme OSHA" },
      { label: "Facteur aggravant", value: "Chaleur de procédé soutenue près des accumulations" },
    ],
    overview: [
      "Le sable de moulage est la source principale : sa manipulation, son secouage et sa régénération libèrent de la silice cristalline respirable, qui cause la silicose. La norme OSHA fixe une limite d'exposition de 50 microgrammes par mètre cube, suffisamment basse pour qu'une poussière visible la dépasse largement.",
      "Le parachèvement ajoute la seconde couche : ébarbage, meulage et sablage produisent des fines métalliques conductrices, et selon les alliages coulés certaines de ces fines sont réactives. Le nettoyage doit donc satisfaire une exigence d'exposition et une exigence de poussière combustible en même temps.",
    ],
    risksHeading: "Ce qu'une fonderie doit maîtriser",
    risks: [
      "Silice cristalline respirable du sable de moulage — silicose irréversible.",
      "Fines métalliques conductrices issues du parachèvement et du meulage.",
      "Fines réactives selon les alliages coulés.",
      "Chaleur de procédé soutenue à proximité des accumulations.",
      "Volume élevé de sable et de fines à récupérer.",
      "Abrasivité importante, usant l'équipement non conçu pour cela.",
    ],
    solutions: [
      "Récupération à filtration absolue HEPA 99,99 %, la silice gouvernant la spécification.",
      "Élimination du balayage à sec et du soufflage à l'air comprimé partout où il y a de la silice.",
      "Équipement conducteur et mis à la terre pour les fines métalliques.",
      "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
      "Ségrégation des fines réactives, sans mélange avec le sable ou d'autres débris.",
      "Fréquences définies incluant les surfaces hautes et le pourtour des fours.",
    ],
    faqs: [
      {
        question: "Quel est le principal danger en fonderie ?",
        answer:
          "La silice cristalline respirable issue du sable de moulage. Sa manipulation, son secouage et sa régénération la libèrent, et elle cause la silicose, une maladie pulmonaire irréversible. La norme OSHA fixe une limite d'exposition de 50 microgrammes par mètre cube en moyenne pondérée sur huit heures — assez bas pour qu'une poussière visible la dépasse largement.",
      },
      {
        question: "Le sable de moulage est-il combustible ?",
        answer:
          "Non. Le sable est minéral et ne brûle pas. Son danger est entièrement sanitaire, ce qui explique pourquoi le balayage à sec et le soufflage à l'air comprimé sont les mauvaises méthodes : ils remettent en suspension une poussière dont la limite d'exposition est parmi les plus basses.",
      },
      {
        question: "Le parachèvement change-t-il l'équation ?",
        answer:
          "Il ajoute une seconde couche. Ébarbage, meulage et sablage produisent des fines métalliques conductrices, et selon les alliages coulés certaines sont réactives. Une fonderie doit donc satisfaire une exigence d'exposition à la silice et une exigence de poussière métallique combustible simultanément.",
      },
      {
        question: "Un seul type d'appareil suffit-il ?",
        answer:
          "Rarement, et cela dépend des zones. Une filtration absolue est nécessaire partout où il y a de la silice ; une construction conductrice et mise à la terre l'est là où des fines métalliques sont produites ; et une tolérance à l'abrasion est nécessaire dans les deux cas. Décrivez-nous vos zones et nous vous indiquerons ce qui convient à chacune.",
      },
    ],
    enPath: "/industries/foundry",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Poussière de fer et d'acier", href: `${M}/poussiere-de-fer-et-d-acier` },
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
      { label: "Poussière de meulage", href: `${A}/poussiere-de-meulage` },
    ],
  },
  {
    slug: "aerospatiale",
    name: "Aérospatiale",
    group: "Fabrication de précision",
    metaTitle: "Aspirateurs pour l'aérospatiale | Composites et alliages légers",
    metaDescription:
      "L'aérospatiale combine composites conducteurs, alliages légers réactifs et exigences de propreté FOD. Récupération adaptée à chaque atelier.",
    intro:
      "L'aérospatiale pose un problème inhabituel : les matières qui rendent un aéronef léger — alliages d'aluminium, de titane et de magnésium — sont précisément celles qui forment les poussières métalliques les plus réactives.",
    facts: [
      { label: "Alliages légers", value: "Aluminium, titane, magnésium — métaux combustibles de Classe D" },
      { label: "Composites", value: "Fibre de carbone : conductrice et abrasive" },
      { label: "Exigence propre au secteur", value: "Contrôle des corps étrangers (FOD)" },
      { label: "Matières régulées", value: "Béryllium dans certains alliages, chrome sur revêtements" },
    ],
    overview: [
      "Les alliages légers sont des métaux combustibles : leurs fines s'enflamment facilement, brûlent à haute température, et l'eau est inappropriée sur un feu déclaré. L'usinage de titane et de magnésium exige une récupération contrôlée plutôt qu'un simple ramassage.",
      "Les composites ajoutent un problème différent : la poussière de fibre de carbone est électriquement conductrice et très abrasive. Et le secteur impose une exigence que d'autres n'ont pas — le contrôle des corps étrangers, où une particule laissée dans un assemblage est un défaut en soi.",
    ],
    risksHeading: "Ce que l'aérospatiale doit maîtriser",
    risks: [
      "Fines réactives d'aluminium, de titane et de magnésium — Classe D.",
      "Poussière de fibre de carbone conductrice et abrasive.",
      "Béryllium présent dans certains alliages sans mention explicite.",
      "Chrome hexavalent généré par le travail de revêtements et d'inox.",
      "Exigence de contrôle des corps étrangers propre au secteur.",
      "Mélange de matières incompatibles dans un même atelier.",
    ],
    solutions: [
      "Équipement conducteur, mis à la terre et exempt de sources d'inflammation pour les fines réactives.",
      "Séparation par immersion pour le titane et le magnésium là où l'évaluation le justifie.",
      "Filtration absolue HEPA 99,99 % pour les fibres et les matières régulées.",
      "Appareils dédiés par matière, servant la sécurité et le contrôle FOD.",
      "Construction tolérante à l'abrasion pour les composites.",
      "Vérification de la composition des alliages avant usinage d'un stock inconnu.",
    ],
    faqs: [
      {
        question: "Pourquoi les alliages aérospatiaux sont-ils particulièrement à risque ?",
        answer:
          "Parce que les matières qui rendent un aéronef léger — aluminium, titane, magnésium — sont précisément celles qui forment les poussières métalliques les plus réactives. Leurs fines s'enflamment facilement, brûlent à haute température, et l'eau est inappropriée sur un feu déclaré, ce qui en fait des feux de Classe D.",
      },
      {
        question: "Les composites posent-ils un danger différent ?",
        answer:
          "Oui. La poussière de fibre de carbone est électriquement conductrice, ce qui lui permet de ponter et de court-circuiter de l'équipement, et elle est très abrasive. C'est un mode de défaillance distinct de la combustibilité des poudres métalliques.",
      },
      {
        question: "Qu'est-ce que le contrôle FOD et pourquoi importe-t-il ici ?",
        answer:
          "Le contrôle des corps étrangers : une particule laissée dans un assemblage est un défaut en soi, indépendamment de tout danger d'incendie ou d'exposition. C'est une exigence propre au secteur qui rend la récupération complète, et non seulement l'apparence de propreté, une question de qualité.",
      },
      {
        question: "Faut-il des appareils dédiés par matière ?",
        answer:
          "Dans un atelier aérospatial, oui, et pour deux raisons convergentes : mélanger des fines réactives crée des conditions non évaluées, et la contamination croisée entre matières compromet le contrôle FOD. La ségrégation sert la sécurité et la qualité ensemble.",
      },
    ],
    enPath: "/industries/aerospace",
    related: [
      { label: "Poussière de titane", href: `${M}/poussiere-de-titane` },
      { label: "Poussière de magnésium", href: `${M}/poussiere-de-magnesium` },
      { label: "Poussière d'aluminium", href: `${M}/poussiere-d-aluminium` },
      { label: "Poussière de fibre de carbone", href: `${M}/poussiere-de-fibre-de-carbone` },
      { label: "Poussière de béryllium", href: `${M}/poussiere-de-beryllium` },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
    ],
  },
  {
    slug: "agroalimentaire",
    name: "Agroalimentaire",
    group: "Transformation alimentaire",
    metaTitle: "Aspirateurs pour l'agroalimentaire | Poussières et salubrité",
    metaDescription:
      "En agroalimentaire, un même passage de nettoyage doit servir le programme de poussières combustibles et les registres de salubrité. Farine, sucre, amidon et allergènes.",
    intro:
      "L'agroalimentaire est le secteur où le nettoyage doit satisfaire deux régimes en même temps : la prévention des explosions de poussières et les registres de salubrité alimentaire. Bien conçu, un seul passage documenté sert les deux.",
    facts: [
      { label: "Poussières courantes", value: "Farine, amidon, sucre, cacao, malt, grain, thé, café" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
      { label: "Second régime", value: "Salubrité alimentaire et gestion des allergènes" },
      { label: "Occasion", value: "Un seul passage documenté peut servir les deux régimes" },
    ],
    overview: [
      "Presque toutes les poudres alimentaires sèches sont combustibles, et plusieurs sont remarquablement fines : l'amidon de maïs sert de matière de référence dans les essais d'explosibilité. Les points de transfert, le vidage de sacs et la mouture produisent la fraction qui compte.",
      "La gestion des allergènes ajoute une contrainte qui n'a rien à voir avec l'incendie mais gouverne autant les procédures : la contamination croisée entre séries impose un nettoyage documenté, ce qui rejoint exactement ce qu'exige une analyse des dangers liés aux poussières.",
    ],
    risksHeading: "Ce que l'agroalimentaire doit maîtriser",
    risks: [
      "Poudres alimentaires sèches combustibles, plusieurs remarquablement fines.",
      "Vidage de sacs comme point de génération le plus important.",
      "Accumulation en hauteur sur l'acier, les conduits et les carters.",
      "Contamination croisée entre séries et gestion des allergènes.",
      "Chaleur des séchoirs et des torréfacteurs près de matière fine.",
      "Exigences de lavabilité limitant les constructions acceptables.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
      "Construction en acier inoxydable 316 et 304, lavable et conforme aux exigences de salubrité.",
      "Captation à la source aux stations de vidage de sacs.",
      "Récupération dédiée par produit là où les allergènes sont un enjeu.",
      "Un seul passage documenté servant le programme de poussières et les registres de salubrité.",
    ],
    faqs: [
      {
        question: "Les poussières alimentaires sont-elles vraiment explosives ?",
        answer:
          "Presque toutes les poudres alimentaires sèches sont combustibles, et plusieurs sont remarquablement fines — l'amidon de maïs sert de matière de référence dans les essais d'explosibilité en laboratoire. La NFPA 660, qui a regroupé l'ancienne NFPA 61, est la norme de référence.",
      },
      {
        question: "Un même nettoyage peut-il servir la sécurité et la salubrité ?",
        answer:
          "Oui, et c'est l'approche efficace. Un passage documenté avec un appareil à filtration retenue et à construction lavable sert à la fois le programme de poussières combustibles et les registres de salubrité alimentaire, y compris la gestion des allergènes entre séries.",
      },
      {
        question: "Où se génère le plus de poussière ?",
        answer:
          "Au vidage manuel de sacs, qui est fréquemment le point unique de génération le plus important d'une installation, et à hauteur de respiration de l'opérateur. La mouture et les points de transfert suivent.",
      },
      {
        question: "Quelle construction convient en zone alimentaire ?",
        answer:
          "L'acier inoxydable 316 et 304, lavable et sans surfaces retenant les résidus, ce qui permet à l'appareil de passer un protocole de nettoyage plutôt que de le contrarier.",
      },
    ],
    enPath: "/industries/food-beverage",
    related: [
      { label: "Poussière de farine", href: `${M}/poussiere-de-farine` },
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Poussière de sucre", href: `${M}/poussiere-de-sucre` },
      { label: "Poussière de cacao", href: `${M}/poussiere-de-cacao` },
      { label: "Ensachage et vidage de sacs", href: `${A}/ensachage-et-vidage-de-sacs` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
    ],
  },
];
