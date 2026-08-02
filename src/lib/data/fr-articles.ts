/**
 * Québec French guide articles.
 *
 * Same shape and shared renderer as the other three French sections. These are
 * explainers rather than reference pages, so `overview` carries the argument and
 * `risks` / `solutions` carry the structured takeaways.
 */

import type { FrMaterialGuide } from "@/lib/data/fr-materials";

export type FrArticle = FrMaterialGuide;

const M = "/fr/poussieres-et-matieres";
const A = "/fr/applications";

export const FR_ARTICLES: FrArticle[] = [
  {
    slug: "aspirateur-ou-depoussiereur",
    name: "Aspirateur ou dépoussiéreur ?",
    group: "Choix d'équipement",
    metaTitle: "Aspirateur industriel ou dépoussiéreur ? La différence expliquée",
    metaDescription:
      "Un dépoussiéreur capte à la source ce qui est produit ; un aspirateur retire ce qui s'est déjà déposé. Deux machines différentes pour deux problèmes différents.",
    intro:
      "Ce sont deux machines différentes qui résolvent deux problèmes différents, et les confondre mène régulièrement à acheter la mauvaise. PrestiVac fabrique des aspirateurs, pas des dépoussiéreurs — et nous préférons vous orienter correctement plutôt que vous vendre le mauvais appareil.",
    facts: [
      { label: "Dépoussiéreur", value: "Grand débit d'air, faible dépression, conduits fixes" },
      { label: "Aspirateur", value: "Faible débit, forte dépression, boyau mobile" },
      { label: "Le dépoussiéreur capte", value: "Ce qui est produit, au moment où c'est produit" },
      { label: "L'aspirateur retire", value: "Ce qui s'est déjà déposé, là où c'est déposé" },
    ],
    overview: [
      "Un dépoussiéreur déplace un grand volume d'air à faible dépression à travers des conduits fixes raccordés aux points de production. Il capte la poussière au moment où elle est créée, avant qu'elle n'atteigne l'atelier. C'est un équipement de procédé.",
      "Un aspirateur déplace un faible volume d'air à forte dépression à travers un boyau que l'on déplace. Il retire ce qui s'est déjà déposé — sur les poutres, dans les carters, sous les machines. C'est un équipement d'entretien.",
      "La plupart des installations ont besoin des deux, et c'est le point que cette page existe pour faire. Un dépoussiéreur parfaitement dimensionné ne retirera jamais la poussière accumulée sur l'acier en hauteur, et un aspirateur ne captera jamais à la source ce qu'une scie produit en continu.",
    ],
    risksHeading: "Ce qu'aucun des deux ne fait à la place de l'autre",
    risks: [
      "Un dépoussiéreur ne retire pas les accumulations existantes sur les surfaces hautes.",
      "Un aspirateur ne capte pas en continu à la source d'une machine de production.",
      "Un dépoussiéreur mal entretenu devient lui-même une concentration de poussière.",
      "Un aspirateur sous-dimensionné se colmate sur un volume de production.",
      "Acheter l'un en pensant régler le problème de l'autre laisse un danger entier.",
      "Les deux exigent une classification adaptée là où la poussière est combustible.",
    ],
    solutions: [
      "Captation à la source par dépoussiéreur pour ce que le procédé produit en continu.",
      "Récupération par aspirateur pour ce qui s'est déposé, y compris en hauteur.",
      "Nettoyage du dépoussiéreur lui-même, qui concentre la poussière de toute l'installation.",
      "Équipement antidéflagrant adapté à la classification pour les deux fonctions.",
      "Fréquences définies pour les surfaces que le dépoussiéreur n'atteint pas.",
      "Orientation vers un spécialiste des systèmes de captation pour la partie que nous ne fabriquons pas.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre un aspirateur industriel et un dépoussiéreur ?",
        answer:
          "Un dépoussiéreur déplace un grand volume d'air à faible dépression à travers des conduits fixes, et capte la poussière au moment où elle est produite. Un aspirateur déplace un faible volume à forte dépression à travers un boyau mobile, et retire ce qui s'est déjà déposé. Le premier est un équipement de procédé, le second un équipement d'entretien.",
      },
      {
        question: "Ai-je besoin des deux ?",
        answer:
          "La plupart des installations, oui. Un dépoussiéreur parfaitement dimensionné ne retirera jamais la poussière accumulée sur l'acier en hauteur, et un aspirateur ne captera jamais à la source ce qu'une scie produit en continu. Acheter l'un en croyant régler le problème de l'autre laisse un danger entier en place.",
      },
      {
        question: "PrestiVac fabrique-t-il des dépoussiéreurs ?",
        answer:
          "Non. Nous fabriquons des aspirateurs industriels — antidéflagrants, HEPA, pneumatiques, humides et secs, centraux et sur mesure. Pour la captation à la source par conduits, nous préférons vous orienter vers un spécialiste de ces systèmes plutôt que de vous vendre le mauvais équipement.",
      },
      {
        question: "Le dépoussiéreur lui-même doit-il être nettoyé ?",
        answer:
          "Oui, et c'est souvent négligé : un dépoussiéreur concentre en un seul appareil la poussière combustible de toute l'installation. Ses trémies, manches et plénums sont un travail d'entretien planifié, avec consignation préalable et vigilance sur les foyers profonds.",
      },
    ],
    enPath: "/guides/vacuum-vs-dust-collector",
    related: [
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
      { label: "Aspirateurs antidéflagrants", href: "/fr/aspirateurs-antideflagrants" },
    ],
  },
  {
    slug: "explosions-de-poussieres",
    name: "Comment fonctionne une explosion de poussières",
    group: "Notions fondamentales",
    metaTitle: "Explosion de poussières : les cinq conditions et l'événement secondaire",
    metaDescription:
      "Une déflagration exige cinq conditions simultanées. C'est l'événement secondaire — l'accumulation soulevée — qui détruit les bâtiments.",
    intro:
      "Une explosion de poussières exige cinq conditions présentes en même temps. Retirez-en une et il n'y a pas de déflagration — ce qui explique pourquoi l'entretien ménager, qui retire le combustible, est le contrôle le plus accessible.",
    facts: [
      { label: "Condition 1", value: "Poussière combustible" },
      { label: "Condition 2", value: "Oxygène (l'air ambiant suffit)" },
      { label: "Condition 3", value: "Dispersion en nuage dans la plage d'explosibilité" },
      { label: "Condition 4 et 5", value: "Confinement et source d'inflammation" },
    ],
    overview: [
      "Les trois premières conditions — combustible, oxygène, source d'inflammation — sont celles du triangle du feu ordinaire. Ce sont les deux dernières qui transforment un incendie en explosion : la dispersion en nuage, et le confinement qui permet à la pression de monter.",
      "Le mécanisme qui détruit réellement les bâtiments est l'événement secondaire. Un événement primaire modeste — souvent contenu dans un équipement — produit une onde de pression qui soulève la poussière accumulée sur les poutres, les conduits et les surfaces hautes. Ce nuage nouvellement dispersé s'enflamme à son tour et propage l'explosion à travers la structure.",
      "C'est pourquoi l'accumulation qui compte le plus est celle que personne ne voit depuis le plancher. Un atelier au sol impeccable avec dix ans de poussière sur l'acier en hauteur est exactement la configuration dangereuse.",
    ],
    risksHeading: "Ce que le mécanisme implique en pratique",
    risks: [
      "Les cinq conditions doivent être simultanées : en retirer une suffit.",
      "L'accumulation en hauteur est le combustible de l'événement secondaire.",
      "Un plancher propre ne dit rien de l'état des poutres et des conduits.",
      "Le soufflage à l'air comprimé crée délibérément la condition de dispersion.",
      "La granulométrie détermine le comportement plus que l'identité de la matière.",
      "La sévérité s'établit par essai de votre propre poussière, non par analogie.",
    ],
    solutions: [
      "Retirer le combustible : c'est la condition que l'entretien contrôle directement.",
      "Cartographier les surfaces qui accumulent réellement, y compris en hauteur.",
      "Assigner un intervalle à chaque surface et consigner les passages.",
      "Éliminer le soufflage à l'air comprimé, qui fournit la dispersion.",
      "Faire tester sa propre poussière plutôt que raisonner par analogie.",
      "Équipement de récupération incapable de fournir la source d'inflammation.",
    ],
    faqs: [
      {
        question: "Quelles sont les conditions d'une explosion de poussières ?",
        answer:
          "Cinq, simultanées : une poussière combustible, de l'oxygène, une dispersion en nuage dans la plage d'explosibilité, un certain confinement, et une source d'inflammation. Les trois premières forment le triangle du feu ; ce sont la dispersion et le confinement qui transforment un incendie en explosion.",
      },
      {
        question: "Pourquoi parle-t-on d'événement secondaire ?",
        answer:
          "Parce que c'est lui qui détruit les bâtiments. Un événement primaire modeste, souvent contenu dans un équipement, produit une onde de pression qui soulève la poussière accumulée sur les poutres et les conduits. Ce nuage s'enflamme à son tour et propage l'explosion à travers la structure.",
      },
      {
        question: "Un plancher propre suffit-il ?",
        answer:
          "Non, et c'est l'erreur la plus courante. L'accumulation qui alimente un événement secondaire se trouve au-dessus de la hauteur des yeux — poutres, rebords, dessus de conduits, carters. Un atelier au sol impeccable avec dix ans de poussière sur l'acier en hauteur est exactement la configuration dangereuse.",
      },
      {
        question: "Comment connaître la sévérité de ma poussière ?",
        answer:
          "Par essai de votre propre matière. La granulométrie et l'humidité changent le résultat, de sorte qu'une valeur trouvée pour une matière similaire ailleurs ne s'applique pas à la vôtre. C'est ce qui rend l'analyse des dangers liés aux poussières spécifique à votre installation.",
      },
    ],
    enPath: "/guides/dust-explosion-basics",
    related: [
      { label: "Sources d'inflammation", href: "/fr/guides/sources-d-inflammation" },
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Poussière de farine", href: `${M}/poussiere-de-farine` },
    ],
  },
  {
    slug: "sources-d-inflammation",
    name: "Sources d'inflammation",
    group: "Notions fondamentales",
    metaTitle: "Sources d'inflammation en milieu poussiéreux | Les identifier",
    metaDescription:
      "Étincelles mécaniques, surfaces chaudes, décharges statiques, équipement électrique et combustion lente : où les inflammations commencent réellement.",
    intro:
      "Les sources d'inflammation sont la condition la plus difficile à éliminer complètement d'une installation en fonctionnement, ce qui explique pourquoi le contrôle des accumulations porte l'essentiel du poids d'un programme de poussières.",
    facts: [
      { label: "Mécaniques", value: "Étincelles de meulage, frottement, roulements grippés" },
      { label: "Thermiques", value: "Surfaces chaudes, séchoirs, moteurs isolés par la poussière" },
      { label: "Électrostatiques", value: "Décharges dans les boyaux, goulottes et transport pneumatique" },
      { label: "Autres", value: "Équipement électrique non adapté, combustion lente, corps étrangers" },
    ],
    overview: [
      "Les étincelles mécaniques sont les plus visibles : meulage, frottement, roulement grippé, ou simplement un corps étranger métallique entrant dans un broyeur. Elles sont aussi les plus faciles à imaginer, ce qui fait qu'elles reçoivent le plus d'attention.",
      "Les surfaces chaudes reçoivent moins d'attention et en méritent davantage, parce que la poussière crée elle-même le problème : une couche accumulée sur un moteur l'isole, sa température monte, et la couche qui a causé l'échauffement devient le combustible.",
      "Les décharges électrostatiques méritent une mention particulière avec les poudres sèches, parce que le procédé lui-même génère la charge — friction dans un mélangeur, écoulement dans une goulotte, transport pneumatique. Un circuit de récupération conducteur et mis à la terre supprime la source la plus probable.",
    ],
    risksHeading: "Où les inflammations commencent réellement",
    risks: [
      "Étincelles de meulage : l'opération produit combustible et inflammation ensemble.",
      "Surfaces chaudes isolées par la poussière qu'elles finissent par enflammer.",
      "Décharges statiques générées par le procédé lui-même.",
      "Équipement électrique non adapté à la classification de la zone.",
      "Combustion lente persistant dans une accumulation ou un contenant.",
      "Corps étrangers métalliques entrant dans les broyeurs.",
    ],
    solutions: [
      "Nettoyage prioritaire des moteurs, roulements et carters d'entraînement.",
      "Circuit de récupération conducteur, mis à la terre et équipotentiel.",
      "Équipement correspondant à la classification assignée par votre ingénieur.",
      "Élimination du soufflage à l'air comprimé, qui disperse près des sources.",
      "Vigilance sur les foyers : une accumulation tiède mérite un suivi.",
      "Retrait de la matière récupérée du bâtiment plutôt que stockage.",
    ],
    faqs: [
      {
        question: "Quelle est la source d'inflammation la plus fréquente ?",
        answer:
          "Il n'y en a pas une seule, mais les surfaces chaudes méritent plus d'attention qu'elles n'en reçoivent, parce que la poussière crée elle-même le problème : une couche accumulée sur un moteur l'isole, sa température monte, et la couche qui a causé l'échauffement devient le combustible.",
      },
      {
        question: "Peut-on éliminer toutes les sources d'inflammation ?",
        answer:
          "Pas dans une installation en fonctionnement, et c'est précisément pourquoi le contrôle des accumulations porte l'essentiel du poids. Retirer le combustible est la condition qu'un programme d'entretien contrôle directement et de façon fiable.",
      },
      {
        question: "L'électricité statique est-elle une source réelle ?",
        answer:
          "Avec les poudres sèches, oui, et le procédé lui-même la génère : friction dans un mélangeur, écoulement dans une goulotte, transport pneumatique. Un circuit de récupération conducteur, mis à la terre et équipotentiel supprime la source la plus probable pendant le nettoyage.",
      },
      {
        question: "La combustion lente compte-t-elle comme source d'inflammation ?",
        answer:
          "Oui, et c'est une des plus insidieuses : un foyer profond dans une accumulation ou un contenant peut persister sans flamme visible puis se rallumer. C'est pourquoi la matière récupérée sort du bâtiment plutôt que d'être entreposée.",
      },
    ],
    enPath: "/guides/sources-of-ignition",
    related: [
      { label: "Explosions de poussières", href: "/fr/guides/explosions-de-poussieres" },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
    ],
  },
  {
    slug: "analyse-des-dangers-lies-aux-poussieres",
    name: "L'analyse des dangers liés aux poussières",
    group: "Conformité",
    metaTitle: "Analyse des dangers liés aux poussières (DHA) | Ce qu'elle implique",
    metaDescription:
      "La NFPA 660 exige une analyse des dangers liés aux poussières. Ce qu'elle couvre, ce qu'elle produit, et pourquoi elle est propre à votre installation.",
    intro:
      "L'analyse des dangers liés aux poussières est l'exigence structurante de la NFPA 660, et elle est propre à votre installation : elle ne peut pas être copiée d'une usine similaire parce que la granulométrie, l'humidité et la géométrie changent les conclusions.",
    facts: [
      { label: "Exigée par", value: "NFPA 660, qui a regroupé les normes de matières antérieures" },
      { label: "Ce qu'elle identifie", value: "Où la poussière s'accumule, se disperse et peut s'enflammer" },
      { label: "Ce qu'elle produit", value: "Des mesures assignées, avec des responsables et des intervalles" },
      { label: "Pourquoi elle est propre à vous", value: "Granulométrie, humidité et géométrie changent les conclusions" },
    ],
    overview: [
      "Une analyse commence par la matière : quelle poussière est présente, produite où, et comment elle se comporte — établi par essai de votre propre matière plutôt que par analogie avec une usine similaire.",
      "Elle passe ensuite à la géométrie : où la poussière s'accumule, quelles surfaces personne n'inspecte, où le confinement existe, et où se trouvent les sources d'inflammation. C'est là que la marche dans l'usine compte plus que les documents.",
      "Elle produit enfin des mesures assignées — pas une liste de constats mais un ensemble d'actions avec des responsables et des intervalles. Une analyse qui se termine par un rapport que personne n'applique n'a rien changé.",
    ],
    risksHeading: "Ce qui rend une analyse utile plutôt que formelle",
    risks: [
      "Copier l'analyse d'une usine similaire : la matière et la géométrie diffèrent.",
      "Rester au niveau des documents sans marcher l'installation.",
      "Omettre les surfaces au-dessus de la hauteur des yeux.",
      "Produire des constats sans responsables ni intervalles.",
      "Ne pas faire tester sa propre poussière.",
      "Traiter l'analyse comme un exercice ponctuel plutôt que vivant.",
    ],
    solutions: [
      "Faire tester sa propre poussière plutôt que raisonner par analogie.",
      "Marcher l'installation en regardant au-dessus de la hauteur des yeux.",
      "Cartographier les surfaces qui accumulent réellement.",
      "Assigner un intervalle et un responsable à chaque surface.",
      "Consigner les passages, pour que le programme soit vérifiable.",
      "Réviser l'analyse quand le procédé ou la matière change.",
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'une analyse des dangers liés aux poussières ?",
        answer:
          "Une évaluation structurée qui identifie quelle poussière combustible est présente dans votre installation, où elle s'accumule et se disperse, où se trouvent les sources d'inflammation, et quelles mesures s'imposent. Elle est exigée par la NFPA 660, qui a regroupé les normes de matières antérieures.",
      },
      {
        question: "Peut-on reprendre l'analyse d'une usine similaire ?",
        answer:
          "Non. La granulométrie, l'humidité et la géométrie du bâtiment changent les conclusions, de sorte qu'une analyse est propre à l'installation qui l'a produite. C'est aussi pourquoi le comportement de votre poussière s'établit par essai de votre propre matière.",
      },
      {
        question: "Qu'est-ce qui distingue une bonne analyse ?",
        answer:
          "Elle produit des mesures assignées plutôt que des constats : des actions avec des responsables et des intervalles. Une analyse qui se termine par un rapport que personne n'applique n'a rien changé à l'installation.",
      },
      {
        question: "À quelle fréquence la réviser ?",
        answer:
          "Chaque fois que le procédé, la matière ou la disposition change de manière significative — une nouvelle ligne, un nouveau produit, une modification de ventilation. Une analyse est un document vivant plutôt qu'un exercice ponctuel.",
      },
    ],
    enPath: "/guides/dust-hazard-analysis",
    related: [
      { label: "Explosions de poussières", href: "/fr/guides/explosions-de-poussieres" },
      { label: "Sources d'inflammation", href: "/fr/guides/sources-d-inflammation" },
    ],
  },
];
