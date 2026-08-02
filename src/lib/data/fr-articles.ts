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
    slug: "qu-est-ce-que-la-poussiere-noire",
    name: "Qu'est-ce que la poussière noire ?",
    group: "Identification",
    metaTitle: "Qu'est-ce que la poussière noire ? Les sources industrielles",
    metaDescription:
      "La poussière noire est une couleur, non une matière. Noir de carbone, charbon, coke, graphite, oxyde de fer, toner ou caoutchouc : chacun se comporte différemment.",
    intro:
      "La poussière noire est une description, pas une matière — et les matières qu'elle décrit se comportent très différemment. Certaines se consument lentement pendant des jours. Une est électriquement conductrice. Plusieurs sont combustibles, une est essentiellement inerte, et deux ou trois posent des questions d'exposition sans aucun rapport avec l'incendie.",
    facts: [
      { label: "Ce que le terme désigne", value: "Une couleur, non une composition" },
      { label: "Matières courantes", value: "Noir de carbone, charbon, coke, graphite, oxyde de fer, toner, caoutchouc" },
      { label: "Comportement partagé", value: "Les poussières carbonées se consument lentement en profondeur" },
      { label: "Première étape", value: "Identifier ce que l'on a — la méthode suit la matière" },
    ],
    overview: [
      "Le noir de carbone est une poudre de carbone manufacturée, extraordinairement fine, utilisée comme pigment et charge renforçante. Le charbon et le coke sont des combustibles carbonés du Groupe F. Le graphite est carboné, combustible et en plus électriquement conducteur, ce qui lui permet de ponter et court-circuiter de l'équipement.",
      "L'oxyde de fer et la calamine expliquent la poussière sombre d'un atelier de fabrication ou d'une fonderie : les fines de fer peuvent s'enflammer et se consumer dans la matière collectée, et sous forme très fine et fraîche se comporter de façon pyrophorique. Le toner et la poussière de caoutchouc sont combustibles, et le caoutchouc produit une fumée dense et toxique.",
      "Toutes les poussières sombres ne sont pas un combustible. Certaines poussières minérales et pigments ne brûlent pas, et la poussière de ciment et de béton — grise plutôt que noire, mais souvent confondue — ne brûle pas et ne déflagre pas du tout. Son danger est la silice cristalline respirable, gouvernée par une limite d'exposition et non par un risque d'incendie.",
    ],
    risksHeading: "Ce que la couleur ne vous dit pas",
    risks: [
    "Les poussières carbonées se consument lentement : un foyer peut persister sans flamme visible.",
    "Le graphite conduit l'électricité et peut court-circuiter des équipements.",
    "Les fines de fer très fines et fraîches peuvent être pyrophoriques.",
    "Le caoutchouc produit une fumée dense et toxique en brûlant.",
    "Le noir de carbone est si fin qu'il voyage au moindre courant d'air.",
    "Certaines poussières sombres ne sont pas combustibles du tout.",
    ],
    solutions: [
    "Identifier la matière avant de choisir une méthode — idéalement par essai.",
    "Récupération conductrice et mise à la terre pour les poussières carbonées et métalliques.",
    "Filtration absolue HEPA 99,99 %, indispensable avec le noir de carbone.",
    "Retrait de la matière récupérée du bâtiment, en raison de la combustion lente.",
    "Élimination du soufflage à l'air comprimé, qui disperse partout.",
    "Nettoyage prioritaire des armoires électriques là où la poussière est conductrice.",
    ],
    faqs: [
      {
        question: "Qu'est-ce que la poussière noire dans une usine ?",
        answer:
          "Le plus souvent du noir de carbone, de la poussière de charbon ou de coke, du graphite, de l'oxyde de fer et de la calamine, du toner ou de la poussière de caoutchouc — selon le procédé. Chacune se comporte différemment : les poussières carbonées se consument lentement, le graphite conduit aussi l'électricité, les fines de fer sont abrasives et peuvent être pyrophoriques quand elles sont très fines, et le caoutchouc produit une fumée toxique.",
      },
      {
        question: "La poussière noire est-elle dangereuse ?",
        answer:
          "Cela dépend entièrement de ce qu'elle est. Les poussières carbonées — noir de carbone, charbon, coke, graphite — sont combustibles et sujettes à la combustion lente. Le charbon cause aussi la pneumoconiose en exposition chronique. Le graphite conduit l'électricité et peut court-circuiter des équipements. Et certaines poussières minérales sombres ne sont pas combustibles mais peuvent contenir de la silice cristalline respirable.",
      },
      {
        question: "Pourquoi la poussière noire revient-elle après le nettoyage ?",
        answer:
          "Généralement parce qu'elle a été déplacée plutôt que retirée. Le balayage soulève les fines qui se redéposent ailleurs, et le soufflage à l'air comprimé déplace l'accumulation vers des surfaces moins accessibles — souvent en hauteur, où personne ne la voit avant qu'elle ne retombe. Les poussières très fines comme le noir de carbone voyagent aussi au moindre mouvement d'air.",
      },
      {
        question: "Et si la poussière noire est chez moi, pas dans une usine ?",
        answer:
          "Cela vaut la peine d'être dit : de la poussière noire autour des bouches d'aération ou sur les surfaces d'un logement est le plus souvent de la suie de chandelles ou d'un appareil de chauffage, ou des fines circulées par un système de ventilation. C'est une question de services du bâtiment plutôt que de poussière industrielle, et l'équipement dont il est question ici n'en est pas la réponse.",
      },
    ],
    enPath: "/guides/what-is-black-dust",
    related: [
      { label: "Poussière de noir de carbone", href: `${M}/poussiere-de-noir-de-carbone` },
      { label: "Poussière de charbon", href: `${M}/poussiere-de-charbon` },
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Poussière de coke", href: `${M}/poussiere-de-coke` },
      { label: "Poussières et matières", href: `${M}` },
    ],
  },
  {
    slug: "elimination-et-valorisation-des-poussieres",
    name: "Poussières récupérées : valoriser ou éliminer ?",
    group: "Exploitation",
    metaTitle: "Poussières récupérées | Valorisation, recyclage ou élimination",
    metaDescription:
      "La poussière collectée n'est pas une affaire classée. Quand la matière peut être valorisée, quand elle est un déchet réglementé, et pourquoi un contenant plein est un danger.",
    intro:
      "La plupart des programmes de poussières s'arrêtent de réfléchir au moment de la captation, ce qui est une erreur : plusieurs des pires conséquences se produisent après la récupération, à l'intérieur d'un contenant que personne n'a déplacé.",
    facts: [
      { label: "Le contenant", value: "Fait partie du danger, non de la solution" },
      { label: "Valorisation possible", value: "Poudre de thermolaquage, fines métalliques ségréguées" },
      { label: "Déchet réglementé", value: "Plomb, cadmium, béryllium, arsenic, chrome hexavalent, amiante" },
      { label: "Décision clé", value: "La ségrégation, prise avant que le contenant se remplisse" },
    ],
    overview: [
      "Un contenant plein concentre en un seul endroit le combustible qui était réparti en couche mince dans l'usine. Pour les poussières carbonées, un foyer profond peut persister et se rallumer des heures plus tard. Pour les fines métalliques réactives, l'humidité atteignant le contenant est un problème qui se développe discrètement. Pour les poudres toxiques, le changement de contenant est souvent le moment de plus forte exposition du cycle.",
      "Certaines matières récupérées ont une valeur réelle. La surpulvérisation de thermolaquage est le cas le plus clair : récupérée proprement, elle se réintroduit au procédé. Les fines métalliques et les copeaux ont une valeur de rebut qui augmente nettement quand les métaux restent ségrégués.",
      "Là où la matière est réglementée, la voie d'élimination est prescrite plutôt que choisie — plomb, cadmium, béryllium, arsenic, chrome hexavalent et matières amiantées relèvent chacun de leur cadre, et la poussière récupérée porte le même statut que la matière d'origine.",
    ],
    risksHeading: "Ce qui se passe après la captation",
    risks: [
    "Un contenant plein est une accumulation concentrée, non un problème résolu.",
    "Combustion lente possible dans les poussières carbonées collectées.",
    "Humidité atteignant les fines métalliques réactives.",
    "Changement de contenant comme moment de plus forte exposition.",
    "Valeur de rebut détruite par le mélange des métaux.",
    "Statut réglementaire hérité de la matière d'origine.",
    ],
    solutions: [
    "Sortir la matière récupérée du bâtiment plutôt que laisser les contenants en place.",
    "Planifier le changement de contenant comme une procédure, non l'improviser.",
    "Ségréguer par métal et par produit, décision prise à la machine.",
    "Collecte propre séparée du nettoyage de plancher, pour préserver le réemploi.",
    "Collecte scellée et voie d'élimination définie pour les matières réglementées.",
    "Ne pas laisser un contenant plein à côté du procédé qui l'a rempli.",
    ],
    faqs: [
      {
        question: "La poussière récupérée peut-elle être recyclée ?",
        answer:
          "Parfois, selon la matière et la propreté de la collecte. La surpulvérisation de thermolaquage est souvent réutilisable si la contamination et les changements de couleur sont maîtrisés. Les fines métalliques ont une valeur de rebut qui augmente nettement quand les métaux restent ségrégués. Les matières réglementées comme le plomb, le cadmium, le béryllium et l'amiante suivent des voies d'élimination prescrites à la place.",
      },
      {
        question: "Est-il sécuritaire de laisser un contenant plein dans l'usine ?",
        answer:
          "C'est une pratique à concevoir hors du procédé. Un contenant plein concentre en un point le combustible qui était réparti dans l'usine. Les poussières carbonées peuvent y entretenir un foyer et se rallumer des heures plus tard, les fines métalliques réactives sont sensibles à l'humidité qui les atteint, et les poudres toxiques présentent leur plus forte exposition au changement de contenant.",
      },
      {
        question: "Comment éliminer une poussière réglementée ?",
        answer:
          "Selon la norme qui gouverne la substance. Le plomb, le cadmium, le béryllium, l'arsenic, le chrome hexavalent et les matières amiantées relèvent chacun de leur cadre, et la poussière récupérée porte le même statut que la matière d'origine — confinement scellé, étiquetage, voie définie et registres. Vos fonctions environnement et santé-sécurité en sont responsables ; nous fabriquons l'équipement de récupération qui alimente ce processus.",
      },
      {
        question: "Pourquoi la ségrégation compte-t-elle autant ?",
        answer:
          "Parce que le mélange est irréversible et généralement coûteux. Combiner des métaux détruit la valeur de rebut, introduire du liquide de coupe dans un flux sec complique la manipulation, et mêler une matière réglementée à un déchet général élève le statut de tout le contenant. La décision se prend à la machine quand la collecte est mise en place, non au bac quand il est plein.",
      },
    ],
    enPath: "/guides/recovered-dust-disposal-and-reclaim",
    related: [
      { label: "Thermolaquage", href: `${A}/thermolaquage` },
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
      { label: "Poussière de cadmium", href: `${M}/poussiere-de-cadmium` },
      { label: "Remplissage de fûts", href: `${A}/remplissage-de-futs` },
    ],
  },
  {
    slug: "recuperation-de-liquides-toxiques",
    name: "Récupération de liquides toxiques",
    group: "Choix d'équipement",
    metaTitle: "Récupération de liquides toxiques | La compatibilité d'abord",
    metaDescription:
      "Récupérer un liquide dangereux est un problème de compatibilité avant d'être un problème d'aspiration. Chimie, confinement et élimination.",
    intro:
      "Avec les liquides, les questions habituelles s'inversent. L'aspiration est rarement la contrainte ; ce que le liquide fait à l'appareil, et à la personne qui le videra, l'est généralement.",
    facts: [
      { label: "Première question", value: "La compatibilité chimique, non la puissance d'aspiration" },
      { label: "Ce qui est attaqué", value: "Joints, garnitures, boyaux, filtres, surfaces de cuve" },
      { label: "Moment le plus risqué", value: "La vidange, non la récupération" },
      { label: "À établir d'avance", value: "La destination réglementaire du liquide récupéré" },
    ],
    overview: [
      "Les acides, solvants, caustiques et produits de procédé attaquent joints, garnitures, revêtements de boyaux, filtres et surfaces de cuve à des vitesses différentes. Un appareil qui gère confortablement l'un peut se dégrader rapidement sur un autre. La construction se choisit contre la chimie, et les flux mixtes sont plus difficiles que les flux purs parce que la compatibilité doit tenir pour tout ce qu'ils contiennent.",
      "La température et la concentration changent aussi la réponse : décrivez le liquide tel qu'il arrive — chaud, dilué, chargé de solides — plutôt que tel qu'il figure sur une fiche technique.",
      "Certaines matières se manipulent humides par choix de sécurité. Les fines métalliques réactives en sont l'exemple le plus clair : garder la matière récupérée mouillée plutôt que de la laisser s'accumuler à sec supprime le mode de défaillance où la chaleur monte dans les fines collectées. C'est une décision propre à la matière, établie par évaluation — et cela ne fait pas de l'eau un moyen d'extinction pour ces métaux, qui demeurent de Classe D.",
    ],
    risksHeading: "Ce qui compte avec un liquide dangereux",
    risks: [
    "Compatibilité chimique variable selon le produit, la température et la concentration.",
    "Vidange comme moment de plus forte exposition.",
    "Poids du liquide récupéré, rendant la manipulation difficile.",
    "Flux mixtes exigeant une compatibilité tenant pour tout le contenu.",
    "Destination réglementaire contraignant la taille des contenants et la méthode.",
    "Solvants inflammables imposant mise à la terre et classification.",
    ],
    solutions: [
    "Établir la compatibilité contre le liquide tel qu'il arrive.",
    "Concevoir la vidange : hauteur, méthode, confinement, décantation évitable.",
    "Établir la destination réglementaire avant de choisir le mode de collecte.",
    "Séparation par immersion pour les fines réactives, quand l'évaluation le justifie.",
    "Équipement conducteur et mis à la terre pour les solvants inflammables.",
    "Formation sur la procédure de vidange comme étape à part entière.",
    ],
    faqs: [
      {
        question: "Un aspirateur industriel peut-il récupérer des acides et des solvants ?",
        answer:
          "Cela dépend de la construction et de la chimie précise. Acides, solvants et caustiques attaquent joints, boyaux, filtres et surfaces de cuve à des vitesses différentes, de sorte que la compatibilité s'établit contre le liquide réel — tel qu'il arrive, avec sa température, sa concentration et les solides entraînés — plutôt que contre une catégorie générale.",
      },
      {
        question: "Quelle différence entre récupération humide et séparation par immersion ?",
        answer:
          "La récupération humide concerne la manipulation de liquide : liquide de coupe, boues, réponse à un déversement. La séparation par immersion est une approche précise où la matière récupérée est entraînée dans un milieu liquide pour que des solides réactifs restent mouillés plutôt que de s'accumuler à sec. L'une concerne ce que vous ramassez, l'autre la façon dont la matière est conservée dans l'appareil.",
      },
      {
        question: "Quel est le principal risque lors de la récupération d'un liquide toxique ?",
        answer:
          "Généralement la vidange. Le liquide récupéré est lourd, il éclabousse, et l'opération concentre la matière dans une cuve que quelqu'un doit manipuler. Concevoir la méthode de vidange — hauteur, confinement, possibilité d'éviter la décantation — fait plus pour la sécurité de l'opérateur qu'une aspiration supplémentaire.",
      },
      {
        question: "Le liquide récupéré exige-t-il une élimination particulière ?",
        answer:
          "Souvent oui, et il vaut la peine de l'établir avant de choisir l'équipement de collecte. Les liquides réglementés ont des destinations prescrites, et la voie d'élimination contraint fréquemment la taille des contenants, la méthode de vidange et la nécessité de séparer les solides à la récupération. Votre fonction environnement en est responsable.",
      },
    ],
    enPath: "/guides/toxic-liquid-recovery",
    related: [
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
      { label: "Nettoyage de déversements", href: `${A}/nettoyage-de-deversements` },
      { label: "Nettoyage de réservoirs", href: `${A}/nettoyage-de-reservoirs` },
      { label: "Chimie", href: `/fr/industries/chimie` },
    ],
  },
  {
    slug: "aspirateurs-antistatiques-et-esd",
    name: "Antistatique ou ESD ?",
    group: "Choix d'équipement",
    metaTitle: "Aspirateurs antistatiques et ESD | Deux exigences distinctes",
    metaDescription:
      "L'antistatique protège la zone contre l'inflammation ; l'ESD protège le produit contre les décharges. Même physique, exigences différentes.",
    intro:
      "Ce ne sont pas la même spécification, même si la physique se recoupe. La construction antistatique en manutention de poussières existe pour empêcher une décharge d'enflammer une poussière combustible : l'objectif est la sécurité de la zone. L'équipement ESD en électronique existe pour empêcher une décharge d'endommager un composant : l'objectif est la protection du produit.",
    facts: [
      { label: "Antistatique", value: "Objectif : empêcher l'inflammation d'une poussière combustible" },
      { label: "ESD", value: "Objectif : protéger des composants sensibles d'une décharge" },
      { label: "Point commun", value: "Conductivité maîtrisée et chemin vers la terre" },
      { label: "Différence", value: "Les deux se spécifient contre des exigences distinctes" },
    ],
    overview: [
      "Les deux reposent sur une conductivité maîtrisée et un chemin vers la terre, mais ils sont évalués contre des référentiels différents. Un appareil qualifié pour l'un ne l'est pas automatiquement pour l'autre.",
      "Les installations de batteries et de semi-conducteurs ont fréquemment besoin des deux, et devraient le dire explicitement plutôt que de présumer que l'un couvre l'autre. C'est le genre de présomption qui se découvre tard, lors d'un audit ou après une défaillance de composant inexpliquée.",
      "En pratique, la conversation utile porte sur ce que l'appareil doit protéger. Si la réponse est « la zone », la spécification est antistatique et suit la classification. Si la réponse est « le produit », elle est ESD et suit la norme applicable aux composants. Si la réponse est « les deux », il faut les nommer tous les deux.",
    ],
    risksHeading: "Ce que la distinction implique",
    risks: [
    "Un appareil antistatique n'est pas automatiquement qualifié ESD.",
    "Un appareil ESD n'est pas automatiquement adapté à une zone classifiée.",
    "Les deux exigences coexistent en batteries et semi-conducteurs.",
    "Présumer que l'un couvre l'autre se découvre tard.",
    "La classification de zone gouverne le volet antistatique.",
    "La norme composants gouverne le volet ESD.",
    ],
    solutions: [
    "Nommer explicitement laquelle des deux exigences s'applique — ou les deux.",
    "Construction dissipatrice pour la protection des composants.",
    "Circuit conducteur, mis à la terre et équipotentiel pour la sécurité de zone.",
    "Équipement correspondant à la classification assignée par votre ingénieur.",
    "Documentation demandée pour la configuration précise retenue.",
    "Nettoyage prioritaire des armoires là où la poussière est conductrice.",
    ],
    faqs: [
      {
        question: "Un aspirateur antistatique est-il la même chose qu'un aspirateur ESD ?",
        answer:
          "Non, même si la physique se recoupe. La construction antistatique en manutention de poussières existe pour empêcher une décharge d'enflammer une poussière combustible : l'objectif est la sécurité de la zone. L'équipement ESD en électronique existe pour empêcher une décharge d'endommager des composants sensibles : l'objectif est la protection du produit. Les deux reposent sur une conductivité maîtrisée et un chemin vers la terre, mais ils sont spécifiés contre des exigences différentes.",
      },
      {
        question: "Ai-je besoin des deux ?",
        answer:
          "Les installations de batteries et de semi-conducteurs en ont fréquemment besoin, et devraient le préciser explicitement plutôt que présumer que l'un couvre l'autre. La question utile est : que doit protéger l'appareil ? Si c'est la zone, la spécification est antistatique. Si c'est le produit, elle est ESD. Si c'est les deux, il faut les nommer tous les deux.",
      },
      {
        question: "Qu'est-ce qui gouverne chaque exigence ?",
        answer:
          "Le volet antistatique suit la classification de zone assignée par votre ingénieur. Le volet ESD suit la norme applicable à la protection des composants. Ce sont deux référentiels distincts, et un appareil qualifié pour l'un ne l'est pas automatiquement pour l'autre.",
      },
      {
        question: "Quelles poussières conductrices posent problème ?",
        answer:
          "La fibre de carbone, le graphite et les fines métalliques. Une accumulation conductrice peut ponter des bornes et court-circuiter de l'équipement, ce qui explique des défaillances apparemment inexplicables — et c'est une raison de nettoyer les armoires et chemins de câbles en priorité.",
      },
    ],
    enPath: "/guides/esd-anti-static-vacuums",
    related: [
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Poussière de fibre de carbone", href: `${M}/poussiere-de-fibre-de-carbone` },
      { label: "Électronique", href: `/fr/industries/electronique` },
      { label: "Fabrication de piles", href: `/fr/industries/batterie` },
    ],
  },

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
