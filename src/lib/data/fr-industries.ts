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
    slug: "automobile",
    name: "Automobile",
    group: "Fabrication",
    metaTitle: "Aspirateurs pour l'industrie automobile | Alliages et thermolaquage",
    metaDescription:
      "L'automobile combine alliages légers réactifs, poussière de thermolaquage et parachèvement métallique sur une même chaîne. Récupération par zone.",
    intro:
      "Une usine automobile n'a pas un profil de poussière mais plusieurs, séparés par quelques dizaines de mètres : alliages légers à l'usinage, poudre organique en peinture, fines métalliques au parachèvement.",
    facts: [
      { label: "Zones distinctes", value: "Usinage, parachèvement, peinture, assemblage" },
      { label: "Alliages légers", value: "Aluminium et magnésium — fines réactives de Classe D" },
      { label: "Peinture", value: "Poudre de thermolaquage combustible, récupérable" },
      { label: "Conséquence", value: "Un seul type d'appareil convient rarement à toute l'usine" },
    ],
    overview: [
      "L'allègement des véhicules a rendu l'aluminium et le magnésium courants là où l'acier dominait, ce qui a introduit des fines réactives dans des ateliers qui ne les manipulaient pas auparavant. Ces fines ne doivent pas être mélangées avec d'autres débris ni avec du liquide de coupe.",
      "La peinture pose un problème différent et une occasion : la surpulvérisation de thermolaquage est combustible, mais récupérée proprement elle se réintroduit au procédé. Les deux zones exigent une mise à la terre, pour des raisons différentes.",
    ],
    risksHeading: "Ce qu'une usine automobile doit maîtriser",
    risks: [
    "Fines réactives d'aluminium et de magnésium introduites par l'allègement.",
    "Poudre de thermolaquage combustible et chargée électrostatiquement.",
    "Fines métalliques conductrices au parachèvement.",
    "Liquide de coupe mélangé aux copeaux à l'usinage.",
    "Profils de poussière très différents d'une zone à l'autre.",
    "Contamination croisée détruisant la valeur de la poudre récupérée.",
    ],
    solutions: [
    "Équipement adapté par zone plutôt qu'un appareil unique pour l'usine.",
    "Mise à la terre et construction conductrice partout, pour des raisons différentes selon la zone.",
    "Séparation par immersion pour les fines réactives là où l'évaluation le justifie.",
    "Récupération dédiée par couleur en peinture, pour préserver le réemploi.",
    "Récupération conçue pour les flux mixtes à l'usinage.",
    "Ségrégation par métal, décidée à la machine.",
    ],
    faqs: [
      {
        question: "Pourquoi un seul type d'aspirateur ne suffit-il pas ?",
        answer:
          "Parce qu'une usine automobile a plusieurs profils de poussière séparés par quelques dizaines de mètres. L'usinage produit des fines métalliques réactives dans du liquide de coupe, la peinture produit une poudre organique combustible et récupérable, le parachèvement produit des fines conductrices. Les exigences diffèrent par zone.",
      },
      {
        question: "L'allègement a-t-il changé le risque ?",
        answer:
          "Sensiblement. L'aluminium et le magnésium sont devenus courants là où l'acier dominait, ce qui a introduit des fines métalliques réactives dans des ateliers qui n'en manipulaient pas. Elles ne doivent pas être mélangées avec d'autres débris ni avec du liquide de coupe.",
      },
      {
        question: "La poudre de peinture peut-elle être récupérée ?",
        answer:
          "Oui, et c'est le cas le plus clair de matière récupérée ayant une valeur réelle — à condition que le flux reste propre. Une récupération dédiée par couleur préserve le réemploi ; mélanger les couleurs ou introduire de la poussière de plancher le détruit.",
      },
      {
        question: "Faut-il la mise à la terre dans toutes les zones ?",
        answer:
          "Oui, pour des raisons différentes. À l'usinage, parce que les fines métalliques sont conductrices et parfois réactives. En peinture, parce que le procédé de thermolaquage charge délibérément les particules par électrostatique.",
      },
    ],
    enPath: "/industries/automotive",
    related: [
      { label: "Poussière d'aluminium", href: `${M}/poussiere-d-aluminium` },
      { label: "Poussière de magnésium", href: `${M}/poussiere-de-magnesium` },
      { label: "Poussière de fer et d'acier", href: `${M}/poussiere-de-fer-et-d-acier` },
      { label: "Thermolaquage", href: `${A}/thermolaquage` },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
      { label: "Poussière de meulage", href: `${A}/poussiere-de-meulage` },
    ],
  },
  {
    slug: "pharmaceutique",
    name: "Pharmaceutique",
    group: "Sciences de la vie",
    metaTitle: "Aspirateurs pharmaceutiques | Confinement et salubrité",
    metaDescription:
      "En pharmaceutique, les limites d'exposition professionnelle gouvernent la spécification, et plusieurs poudres actives sont aussi combustibles.",
    intro:
      "En pharmaceutique, la spécification est gouvernée par une chose : la limite d'exposition professionnelle du composé manipulé. Tout le reste — filtration, confinement, procédure de vidange — en découle.",
    facts: [
      { label: "Ce qui gouverne", value: "La limite d'exposition professionnelle du composé" },
      { label: "Second régime", value: "Salubrité, nettoyage validé et traçabilité" },
      { label: "Fait souvent oublié", value: "Plusieurs poudres actives sont aussi combustibles" },
      { label: "Moment critique", value: "Le changement de contenant, non la récupération" },
    ],
    overview: [
      "Les composés à forte activité imposent un confinement bien supérieur à ce qu'une poussière ordinaire exigerait, et c'est la limite d'exposition qui fixe le niveau plutôt qu'une préférence d'équipement.",
      "Un fait régulièrement négligé : de nombreuses poudres pharmaceutiques — lactose, amidon, excipients — sont aussi des poussières organiques combustibles. Le confinement et la protection contre les explosions se spécifient alors ensemble, non l'un à la place de l'autre.",
    ],
    risksHeading: "Ce que la pharmaceutique doit maîtriser",
    risks: [
    "Limites d'exposition professionnelle très basses pour les composés actifs.",
    "Poudres actives et excipients souvent aussi combustibles.",
    "Changement de contenant comme moment d'exposition le plus élevé.",
    "Nettoyage validé et traçabilité exigés en plus de la sécurité.",
    "Contamination croisée entre produits.",
    "Constructions devant supporter le nettoyage et la validation.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % ou ULPA selon la limite d'exposition.",
    "Collecte scellée avec sacs et procédure définie pour le changement de contenant.",
    "Construction en acier inoxydable 316 et 304, lavable et validable.",
    "Équipement dédié par zone et par produit là où la contamination croisée est un enjeu.",
    "Spécification conjointe du confinement et de la protection contre les explosions.",
    "Consignation des nettoyages, servant la sécurité et la traçabilité.",
    ],
    faqs: [
      {
        question: "Qu'est-ce qui détermine l'équipement en pharmaceutique ?",
        answer:
          "La limite d'exposition professionnelle du composé manipulé. Elle fixe le niveau de confinement et de filtration requis, et tout le reste en découle — y compris la procédure de vidange. Ce n'est pas une préférence d'équipement mais une conséquence de l'évaluation d'exposition.",
      },
      {
        question: "Les poudres pharmaceutiques sont-elles combustibles ?",
        answer:
          "Beaucoup le sont — lactose, amidon et de nombreux excipients sont des poussières organiques combustibles. C'est régulièrement négligé parce que l'attention porte sur le confinement. Lorsque la poudre est les deux, le confinement et la protection contre les explosions se spécifient ensemble.",
      },
      {
        question: "Quel est le moment le plus exposant ?",
        answer:
          "Le changement de contenant plutôt que la récupération. C'est le moment où la matière captée est ouverte, manipulée et déplacée. Des sacs scellés et une procédure définie valent davantage qu'une aspiration supplémentaire.",
      },
      {
        question: "Un même appareil peut-il servir plusieurs produits ?",
        answer:
          "Là où la contamination croisée est un enjeu de conformité, non. Un équipement dédié par zone et par produit est la pratique attendue, et le nettoyage entre produits doit être validé et consigné.",
      },
    ],
    enPath: "/industries/pharmaceutical",
    related: [
      { label: "Poussière de lactose", href: `${M}/poussiere-d-amidon` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
      { label: "Ensachage et vidage de sacs", href: `${A}/ensachage-et-vidage-de-sacs` },
      { label: "Remplissage de fûts", href: `${A}/remplissage-de-futs` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
    ],
  },
  {
    slug: "travail-du-bois",
    name: "Travail du bois",
    group: "Transformation",
    metaTitle: "Aspirateurs pour le travail du bois | Poussière fine et cancérogène",
    metaDescription:
      "La poussière de bois est combustible et classée cancérogène par le CIRC. Volume élevé, accumulation en hauteur et récupération sécuritaire.",
    intro:
      "Le travail du bois présente une combinaison rare : un volume de poussière très élevé, une fraction fine véritablement combustible, et une classification cancérogène pour la matière elle-même.",
    facts: [
      { label: "Danger 1", value: "Poussière combustible — NFPA 660, ex-NFPA 664" },
      { label: "Danger 2", value: "Cancérogène pour l'humain selon le CIRC — cancers naso-sinusiens" },
      { label: "Volume", value: "Parmi les plus élevés de tous les secteurs" },
      { label: "Où ça compte", value: "Fraction fine de ponçage, accumulée en hauteur" },
    ],
    overview: [
      "La fraction fine issue du ponçage compte bien davantage que les copeaux et les retailles : c'est elle qui reste en suspension, voyage, se dépose sur l'acier en hauteur, et alimente un événement secondaire.",
      "Le volet sanitaire est souvent sous-estimé dans les ateliers : la poussière de bois est classée cancérogène pour l'humain, avec des cancers naso-sinusiens documentés, et c'est aussi un irritant et un sensibilisant respiratoire. La filtration retenue compte donc autant que le contrôle des accumulations.",
    ],
    risksHeading: "Ce qu'un atelier de bois doit maîtriser",
    risks: [
    "Fraction fine de ponçage, combustible et facilement mise en suspension.",
    "Classification cancérogène de la poussière de bois.",
    "Volume très élevé exigeant une grande capacité de collecte.",
    "Accumulation sur l'acier en hauteur, les conduits et les carters.",
    "Charges statiques dans les conduits et le transport pneumatique.",
    "Sous-estimation du volet sanitaire dans les petits ateliers.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Grande capacité de collecte ou système centralisé pour le volume.",
    "Captation à la source sur les ponceuses et les outils portatifs.",
    "Nettoyage à fréquence définie des surfaces hautes et des conduits.",
    "Élimination du soufflage à l'air comprimé.",
    ],
    faqs: [
      {
        question: "La poussière de bois est-elle combustible ?",
        answer:
          "Oui, et c'est l'une des poussières combustibles classiques. La fraction fine issue du ponçage compte bien davantage que les copeaux, parce que la granulométrie détermine le comportement. La NFPA 660, qui a regroupé l'ancienne NFPA 664, est la norme de référence.",
      },
      {
        question: "Le bois est-il dangereux pour la santé ?",
        answer:
          "La poussière de bois est classée cancérogène pour l'humain par le CIRC, avec des cancers naso-sinusiens parmi les effets documentés, et c'est aussi un irritant et un sensibilisant respiratoire. C'est le volet le plus souvent sous-estimé dans les ateliers.",
      },
      {
        question: "Pourquoi le volume pose-t-il problème ?",
        answer:
          "Parce qu'il colmate rapidement une filtration sous-dimensionnée et remplit les contenants plus vite que le nettoyage n'est planifié. Le travail du bois exige une capacité de collecte proportionnée, souvent un système centralisé plutôt que des appareils mobiles seuls.",
      },
      {
        question: "Par où commencer dans un atelier existant ?",
        answer:
          "Par les surfaces hautes — acier, conduits, dessus de carters — qui portent l'accumulation alimentant un événement secondaire, puis par la captation à la source sur les ponceuses, qui génèrent la fraction fine dans la zone respiratoire.",
      },
    ],
    enPath: "/industries/woodworking",
    related: [
      { label: "Poussière de bois", href: `${M}/poussiere-de-bois` },
      { label: "Poussière de liège", href: `${M}/poussiere-de-liege` },
      { label: "Ponçage", href: `${A}/poncage` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
    ],
  },
  {
    slug: "travail-des-metaux",
    name: "Travail des métaux",
    group: "Fabrication",
    metaTitle: "Aspirateurs pour le travail des métaux | Fines et exposition",
    metaDescription:
      "Le travail des métaux produit des fines conductrices, parfois réactives, et des expositions créées par l'opération plutôt que présentes dans le stock.",
    intro:
      "Le travail des métaux a une caractéristique qui le distingue : plusieurs de ses dangers les plus sérieux sont créés par l'opération plutôt que présents dans la matière première.",
    facts: [
      { label: "Ce qui est créé par l'opération", value: "Chrome hexavalent, fumées de manganèse, oxyde de zinc" },
      { label: "Fines", value: "Conductrices, parfois réactives selon l'alliage" },
      { label: "Point clé", value: "Rien dans la description d'une pièce ne signale ces expositions" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E pour les fines métalliques" },
    ],
    overview: [
      "Souder ou meuler de l'inox génère du chrome hexavalent. Souder de l'acier expose au manganèse, présent dans presque tous les aciers. Travailler de l'acier galvanisé produit des fumées d'oxyde de zinc. Usiner du laiton de décolletage peut libérer du plomb. Aucun de ces dangers n'apparaît dans la description d'une pièce.",
      "S'y ajoute la nature des fines : conductrices, abrasives, et selon l'alliage réactives. Un atelier travaillant des alliages légers manipule des métaux combustibles de Classe D sans nécessairement le savoir.",
    ],
    risksHeading: "Ce qu'un atelier métallurgique doit maîtriser",
    risks: [
    "Chrome hexavalent créé par le soudage et le meulage de l'inox.",
    "Manganèse présent dans presque tous les aciers, causant le manganisme.",
    "Fumées d'oxyde de zinc sur galvanisé, causant la fièvre des fondeurs.",
    "Plomb possible dans les laitons de décolletage.",
    "Fines conductrices et abrasives, parfois réactives.",
    "Expositions invisibles dans la description des pièces.",
    ],
    solutions: [
    "Captation à la source au soudage et au meulage : le contrôle le plus efficace.",
    "Filtration absolue HEPA 99,99 % pour les fumées et fines respirables.",
    "Équipement conducteur, mis à la terre et tolérant à l'abrasion.",
    "Vérification de la composition des alliages avant usinage d'un stock inconnu.",
    "Ségrégation par métal, séparant les fines réactives.",
    "Élimination du soufflage à l'air comprimé aux machines-outils.",
    ],
    faqs: [
      {
        question: "Quels dangers sont créés par l'opération ?",
        answer:
          "Le chrome hexavalent par le soudage et le meulage de l'inox, l'exposition au manganèse par le soudage de l'acier, les fumées d'oxyde de zinc par le travail du galvanisé, et le plomb par l'usinage de certains laitons. Aucun n'apparaît dans la description d'une pièce, ce qui explique pourquoi ces expositions passent inaperçues.",
      },
      {
        question: "Faut-il vérifier la composition des alliages ?",
        answer:
          "Avant d'usiner un stock inconnu, oui. La teneur en plomb d'un laiton, la présence de béryllium dans un alliage de cuivre, ou la nuance d'un inox déterminent des exigences différentes — et rien dans l'apparence de la pièce ne les révèle.",
      },
      {
        question: "Les fines métalliques sont-elles combustibles ?",
        answer:
          "Sous forme fine, elles sont évaluées comme poussières métalliques combustibles, et elles sont conductrices. Les alliages légers — aluminium, magnésium, titane — sont franchement réactifs et relèvent de la Classe D.",
      },
      {
        question: "Quel est le contrôle le plus efficace ?",
        answer:
          "La captation à la source aux postes de soudage et de meulage, où les fumées et les fines sont générées. La récupération des accumulations la complète mais ne la remplace pas.",
      },
    ],
    enPath: "/industries/metalworking",
    related: [
      { label: "Poussière de fer et d'acier", href: `${M}/poussiere-de-fer-et-d-acier` },
      { label: "Poussière de chrome", href: `${M}/poussiere-de-chrome` },
      { label: "Poussière de manganèse", href: `${M}/poussiere-de-manganese` },
      { label: "Poussière de zinc", href: `${M}/poussiere-de-zinc` },
      { label: "Poussière de laiton et de bronze", href: `${M}/poussiere-de-laiton-et-de-bronze` },
      { label: "Nettoyage après soudage", href: `${A}/nettoyage-de-soudage` },
      { label: "Ébavurage", href: `${A}/ebavurage` },
    ],
  },
  {
    slug: "chimie",
    name: "Chimie",
    group: "Procédés",
    metaTitle: "Aspirateurs pour l'industrie chimique | Compatibilité et classification",
    metaDescription:
      "En chimie, la compatibilité des matériaux et la classification de la zone déterminent l'équipement avant toute question de performance.",
    intro:
      "En chimie, deux questions précèdent toute considération de performance : à quelle classification la zone est-elle assignée, et qu'est-ce que le produit récupéré fait aux matériaux de l'appareil.",
    facts: [
      { label: "Question 1", value: "La classification de zone assignée par votre ingénieur" },
      { label: "Question 2", value: "La compatibilité chimique avec les matériaux de l'appareil" },
      { label: "Poudres et liquides", value: "Souvent les deux dans la même installation" },
      { label: "Facteur additionnel", value: "Réactivité entre produits, à ne pas mélanger à la collecte" },
    ],
    overview: [
      "Les acides, les solvants et les caustiques attaquent joints, garnitures, boyaux et surfaces de cuve à des vitesses différentes. La compatibilité s'établit contre le produit tel qu'il arrive — température, concentration, solides entraînés — plutôt que contre une catégorie générale.",
      "La réactivité entre produits ajoute une contrainte de collecte : combiner deux résidus dans un même contenant peut créer une réaction qu'aucun des deux ne présentait seul. La ségrégation à la collecte est donc une mesure de sécurité et non de tri.",
    ],
    risksHeading: "Ce que la chimie doit maîtriser",
    risks: [
    "Classification de zone déterminant la construction acceptable.",
    "Compatibilité chimique variable selon le produit, la concentration et la température.",
    "Réactivité entre produits, dangereuse à la collecte.",
    "Poudres et liquides souvent présents dans la même installation.",
    "Solvants inflammables imposant une mise à la terre et une classification.",
    "Statut réglementaire des résidus contraignant l'élimination.",
    ],
    solutions: [
    "Équipement correspondant à la classification assignée par votre ingénieur.",
    "Compatibilité établie contre le produit réel, tel qu'il arrive.",
    "Récupération conçue pour les flux mixtes solide-liquide là où les deux sont présents.",
    "Ségrégation stricte à la collecte, pour éviter les réactions entre résidus.",
    "Mise à la terre et construction conductrice pour les solvants inflammables.",
    "Destination réglementaire établie avant le choix du mode de collecte.",
    ],
    faqs: [
      {
        question: "Qu'est-ce qui détermine l'équipement en chimie ?",
        answer:
          "Deux choses, avant toute question de performance : la classification assignée à la zone par votre ingénieur, et la compatibilité des matériaux de l'appareil avec le produit récupéré. Un appareil qui gère bien un acide peut se dégrader rapidement sur un solvant.",
      },
      {
        question: "Comment établir la compatibilité ?",
        answer:
          "Contre le produit tel qu'il arrive — avec sa température, sa concentration et les solides entraînés — plutôt que contre une catégorie générale. Décrivez-nous le flux réel et la construction en découle.",
      },
      {
        question: "Peut-on collecter plusieurs résidus ensemble ?",
        answer:
          "C'est précisément ce qu'il faut éviter. Combiner deux résidus dans un même contenant peut créer une réaction qu'aucun ne présentait seul. La ségrégation à la collecte est une mesure de sécurité, non une question de tri.",
      },
      {
        question: "Les solvants inflammables changent-ils l'équipement ?",
        answer:
          "Ils imposent une mise à la terre, une construction conductrice, et un équipement correspondant à la classification de la zone. Un résidu de solvant transforme un travail de nettoyage apparemment simple en travail en zone classifiée.",
      },
    ],
    enPath: "/industries/chemical",
    related: [
      { label: "Poussière de soufre", href: `${M}/poussiere-de-soufre` },
      { label: "Nettoyage de réservoirs", href: `${A}/nettoyage-de-reservoirs` },
      { label: "Nettoyage de déversements", href: `${A}/nettoyage-de-deversements` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
      { label: "Remplissage de fûts", href: `${A}/remplissage-de-futs` },
    ],
  },
  {
    slug: "batterie",
    name: "Fabrication de piles",
    group: "Fabrication avancée",
    metaTitle: "Aspirateurs pour la fabrication de piles | Graphite et lithium",
    metaDescription:
      "La fabrication de piles combine graphite conducteur, lithium réactif à l'humidité et exigences de salle sèche. Récupération adaptée.",
    intro:
      "La fabrication de piles réunit deux dangers qui poussent dans des directions opposées : le graphite, conducteur et combustible, et le lithium, qui réagit avec l'humidité de l'air.",
    facts: [
      { label: "Graphite", value: "Combustible du Groupe F et électriquement conducteur" },
      { label: "Lithium", value: "Réactif à l'eau ET à l'humidité de l'air — Classe D" },
      { label: "Conséquence", value: "Les méthodes humides conviennent à l'un et pas à l'autre" },
      { label: "Environnement", value: "Salles sèches, imposées par la réactivité du lithium" },
    ],
    overview: [
      "Le graphite est manipulé en grande quantité en fabrication d'électrodes, et sa conductivité est la raison pour laquelle les normes d'entretien y sont fixées aussi strictement : une couche de graphite dans une armoire électrique est un chemin conducteur, pas seulement du combustible.",
      "Le lithium impose la contrainte inverse de plusieurs métaux réactifs : là où le zirconium se conserve humide pour réduire le risque d'inflammation, le lithium réagit avec l'eau elle-même. C'est pourquoi la fabrication se déroule en salle sèche, et pourquoi la méthode de séparation doit être établie par évaluation.",
    ],
    risksHeading: "Ce que la fabrication de piles doit maîtriser",
    risks: [
    "Graphite conducteur pouvant ponter et court-circuiter l'équipement.",
    "Graphite combustible du Groupe F, avec tendance à la combustion lente.",
    "Lithium réagissant avec l'eau et avec l'humidité de l'air ambiant.",
    "Méthodes humides appropriées pour certains métaux et non pour le lithium.",
    "Salles sèches imposant des contraintes de manipulation.",
    "Volume élevé de poudre d'électrode.",
    ],
    solutions: [
    "Récupération conductrice et mise à la terre, adaptée au Groupe F pour le graphite.",
    "Filtration absolue HEPA 99,99 % pour les poudres d'électrode fines.",
    "Nettoyage prioritaire des armoires et tableaux, où la conductivité importe.",
    "Méthode de séparation pour le lithium établie par évaluation, non par analogie.",
    "Ségrégation stricte entre matières.",
    "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Quels sont les deux dangers principaux ?",
        answer:
          "Le graphite et le lithium, et ils poussent dans des directions opposées. Le graphite est combustible et électriquement conducteur, de sorte qu'une accumulation dans une armoire électrique est un chemin conducteur. Le lithium réagit avec l'eau et même avec l'humidité de l'air, ce qui exclut les méthodes humides utilisées pour d'autres métaux réactifs.",
      },
      {
        question: "Pourquoi les salles sèches ?",
        answer:
          "Parce que le lithium ne réagit pas seulement avec l'eau liquide mais aussi avec l'humidité de l'air ambiant. Contrôler l'atmosphère fait donc partie du procédé plutôt que d'être une précaution supplémentaire.",
      },
      {
        question: "Pourquoi nettoyer les armoires électriques en priorité ?",
        answer:
          "Parce qu'une couche de graphite sur un tableau est un chemin conducteur susceptible de ponter des bornes, en plus d'être du combustible. C'est un mode de défaillance propre aux poussières conductrices, distinct du risque de déflagration.",
      },
      {
        question: "La méthode humide convient-elle ici ?",
        answer:
          "Pour le lithium, non — elle aggraverait la situation. C'est une distinction importante avec des métaux comme le zirconium, souvent conservés humides pour réduire le risque d'inflammation. La méthode appropriée s'établit par évaluation de la matière et du procédé.",
      },
    ],
    enPath: "/industries/battery",
    related: [
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Poussière de lithium", href: `${M}/poussiere-de-lithium` },
      { label: "Poussière de cobalt", href: `${M}/poussiere-de-cobalt` },
      { label: "Poussière de nickel", href: `${M}/poussiere-de-nickel` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
    ],
  },
  {
    slug: "electronique",
    name: "Électronique",
    group: "Fabrication de précision",
    metaTitle: "Aspirateurs ESD pour l'électronique | Décharges et contamination",
    metaDescription:
      "En électronique, la maîtrise de l'électricité statique protège le produit autant que l'environnement, et la filtration absolue est la fonction de l'appareil.",
    intro:
      "En électronique, l'électricité statique est un problème dans les deux sens : elle peut enflammer une poussière combustible, et elle peut détruire un composant sensible. Ce sont deux exigences distinctes qui se spécifient parfois ensemble.",
    facts: [
      { label: "Exigence 1", value: "Construction dissipatrice pour protéger les composants (ESD)" },
      { label: "Exigence 2", value: "Mise à la terre pour prévenir l'inflammation là où la poussière est combustible" },
      { label: "Filtration", value: "Absolue — l'échappement compte autant que la captation" },
      { label: "Distinction", value: "Antistatique et ESD ne sont pas la même spécification" },
    ],
    overview: [
      "Un équipement antistatique pour la manipulation de poussières combustibles et un équipement ESD pour la protection des composants reposent sur une conductivité maîtrisée et un chemin vers la terre, mais ils sont spécifiés contre des exigences différentes. Les installations qui ont besoin des deux devraient le dire explicitement plutôt que présumer que l'un couvre l'autre.",
      "La filtration absolue est ici la fonction de l'appareil plutôt qu'une option : dans un environnement où la contamination particulaire est un défaut de production, un appareil qui rejette de la poussière fine a aggravé le problème qu'il devait corriger.",
    ],
    risksHeading: "Ce que l'électronique doit maîtriser",
    risks: [
    "Décharge électrostatique endommageant les composants sensibles.",
    "Poussières conductrices — fibre de carbone, graphite — court-circuitant l'équipement.",
    "Contamination particulaire comme défaut de production.",
    "Échappement de l'appareil comptant autant que sa captation.",
    "Confusion fréquente entre antistatique et ESD.",
    "Équipement partagé important de la contamination.",
    ],
    solutions: [
    "Construction dissipatrice ESD là où des composants sensibles sont manipulés.",
    "Mise à la terre et construction conductrice là où la poussière est combustible.",
    "Filtration absolue HEPA 99,99 % ou ULPA selon la classification.",
    "Équipement dédié et étiqueté par zone.",
    "Spécification explicite des deux exigences lorsque les deux s'appliquent.",
    "Nettoyage prioritaire des armoires et chemins de câbles.",
    ],
    faqs: [
      {
        question: "Un aspirateur antistatique est-il la même chose qu'un aspirateur ESD ?",
        answer:
          "Non, bien que la physique se recoupe. La construction antistatique en manutention de poussières existe pour empêcher une décharge d'enflammer une poussière combustible : l'objectif est la sécurité de la zone. L'équipement ESD en électronique existe pour empêcher une décharge d'endommager des composants sensibles : l'objectif est la protection du produit. Les installations qui ont besoin des deux devraient le préciser.",
      },
      {
        question: "Pourquoi la filtration absolue est-elle la fonction de l'appareil ici ?",
        answer:
          "Parce que dans un environnement où la contamination particulaire est un défaut de production, un appareil qui rejette de la poussière fine a aggravé le problème qu'il devait corriger. L'échappement compte autant que la captation.",
      },
      {
        question: "Quelles poussières conductrices trouve-t-on en électronique ?",
        answer:
          "La fibre de carbone des composites, le graphite, et les fines métalliques d'usinage. Une accumulation conductrice peut ponter des bornes et court-circuiter de l'équipement, ce qui explique des pannes apparemment inexplicables.",
      },
      {
        question: "Faut-il un équipement dédié par zone ?",
        answer:
          "Oui. Un appareil qui nettoie aussi une zone générale rapporte de la contamination dans un environnement contrôlé, et en électronique la contamination est un défaut plutôt qu'un désagrément.",
      },
    ],
    enPath: "/industries/electronics",
    related: [
      { label: "Poussière de fibre de carbone", href: `${M}/poussiere-de-fibre-de-carbone` },
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
      { label: "Impression 3D métal", href: `${A}/impression-3d-metal` },
    ],
  },

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
