/**
 * Québec French application guides — process-oriented counterparts to the
 * material guides.
 *
 * Deliberately reuses the FrMaterialGuide shape. The fields map cleanly onto a
 * process (facts describe the operation, risks describe what it generates,
 * solutions describe recovery) and reusing one shape means one template, one
 * route pattern and one set of verified behaviours rather than two.
 *
 * French slugs are keyword-led, same rule as the material guides.
 */

import type { FrMaterialGuide } from "@/lib/data/fr-materials";

export type FrApplicationGuide = FrMaterialGuide;

export const FR_APPLICATIONS: FrApplicationGuide[] = [
  {
    slug: "melange-et-malaxage",
    name: "Mélange et malaxage",
    group: "Manutention de matières",
    metaTitle: "Mélange et malaxage",
    metaDescription:
      "Le mélange génère de la poussière au chargement et au déchargement, et la contamination croisée entre lots est un enjeu distinct du danger d'incendie.",
    intro:
      "Le mélangeur lui-même est rarement le problème : ce sont le chargement et le déchargement qui génèrent la poussière, aux deux moments où la matière est ouverte à l'atmosphère.",
    facts: [
      { label: "Ce que l'opération génère", value: "Nuages au chargement et au déchargement" },
      { label: "Points critiques", value: "Ouverture du mélangeur, versement, transfert vers l'aval" },
      { label: "Enjeu distinct", value: "Contamination croisée entre lots et allergènes" },
      { label: "Facteur additionnel", value: "Charges statiques dans le mélange de poudres sèches" },
    ],
    overview: [
      "Le mélange de poudres sèches génère aussi des charges statiques importantes : la friction entre particules dans un mélangeur en rotation est un mécanisme de charge efficace, et le confinement du mélangeur complète le tableau.",
      "S'ajoute un enjeu qui n'est pas un danger d'incendie mais qui gouverne tout autant les procédures : la contamination croisée entre lots. En alimentaire, la gestion des allergènes impose un nettoyage documenté entre séries ; en pharmaceutique, la contamination croisée est un enjeu de conformité.",
    ],
    risksHeading: "Ce qui compte au mélange",
    risks: [
    "Chargement et déchargement comme points de génération, non le mélange lui-même.",
    "Charges statiques générées par la friction entre particules.",
    "Confinement du mélangeur complétant les conditions d'une déflagration.",
    "Contamination croisée entre lots, distincte du danger d'incendie.",
    "Allergènes en alimentaire, imposant un nettoyage documenté entre séries.",
    "Résidus dans les zones mortes du mélangeur.",
    ],
    solutions: [
    "Captation aux points de chargement et de déchargement.",
    "Équipement conducteur, mis à la terre et équipotentiel pour les poudres sèches.",
    "Filtration absolue HEPA 99,99 % pour les poudres fines ou réglementées.",
    "Récupération dédiée par produit là où la contamination croisée est un enjeu.",
    "Nettoyage documenté entre séries, servant allergènes et conformité.",
    "Élimination du soufflage à l'air comprimé, qui redistribue les résidus.",
    ],
    faqs: [
      {
        question: "Où la poussière est-elle générée au mélange ?",
        answer:
          "Au chargement et au déchargement, non dans le mélangeur lui-même. Ce sont les deux moments où la matière est ouverte à l'atmosphère, et la captation doit donc être placée là plutôt qu'autour de la cuve.",
      },
      {
        question: "Le mélange génère-t-il de l'électricité statique ?",
        answer:
          "Oui, et efficacement : la friction entre particules dans un mélangeur en rotation est un mécanisme de charge, et le confinement de la cuve complète les conditions. Un circuit de récupération conducteur et mis à la terre est approprié pour les poudres sèches.",
      },
      {
        question: "Comment gérer la contamination croisée entre lots ?",
        answer:
          "Par une récupération dédiée par produit là où l'enjeu existe, et un nettoyage documenté entre séries. Ce n'est pas un danger d'incendie, mais en alimentaire la gestion des allergènes et en pharmaceutique la conformité l'imposent tout autant.",
      },
      {
        question: "Peut-on souffler un mélangeur à l'air comprimé ?",
        answer:
          "Non. Le soufflage redistribue les résidus dans le local et dans les zones mortes plutôt que de les retirer, ce qui aggrave à la fois le risque de contamination croisée et l'accumulation combustible.",
      },
    ],
    enPath: "/applications/mixing-blending",
  },
  {
    slug: "nettoyage-de-reservoirs",
    name: "Nettoyage de réservoirs",
    group: "Entretien d'installations",
    metaTitle: "Nettoyage de réservoirs",
    metaDescription:
      "Le nettoyage de réservoirs combine entrée en espace clos et résidus dont la chimie détermine l'équipement. Atmosphère, compatibilité et permis.",
    intro:
      "Le nettoyage de réservoirs pose deux questions avant toute question d'équipement : l'atmosphère à l'intérieur, et la chimie de ce qui reste au fond.",
    facts: [
      { label: "Ce que l'opération implique", value: "Retrait de résidus, boues et dépôts intérieurs" },
      { label: "Enjeu 1", value: "Entrée en espace clos, avec processus de permis complet" },
      { label: "Enjeu 2", value: "Chimie des résidus déterminant la compatibilité de l'équipement" },
      { label: "Atmosphère", value: "Potentiellement appauvrie en oxygène ou chargée en vapeurs" },
    ],
    overview: [
      "L'entrée en espace clos s'applique intégralement : contrôle de l'atmosphère, surveillance, permis, moyens de secours. Réduire la fréquence des entrées par un nettoyage depuis les ouvertures est un gain réel, mais lorsque l'entrée est nécessaire le processus complet s'applique exactement comme avant.",
      "La chimie des résidus détermine ensuite l'équipement : les acides, solvants et produits de procédé attaquent joints, boyaux et surfaces de cuve à des vitesses différentes, et un résidu de solvant inflammable ajoute une exigence de classification à ce qui semblait un simple travail de nettoyage.",
    ],
    risksHeading: "Ce qui compte au nettoyage de réservoirs",
    risks: [
    "Entrée en espace clos avec processus de permis intégral.",
    "Atmosphère potentiellement appauvrie en oxygène ou chargée en vapeurs.",
    "Chimie des résidus déterminant la compatibilité de l'équipement.",
    "Résidus de solvants inflammables imposant une exigence de classification.",
    "Boues et dépôts mixtes solide-liquide compliquant la récupération.",
    "Vidange du matériel récupéré comme moment d'exposition.",
    ],
    solutions: [
    "Application intégrale du processus de permis d'espace clos lorsque l'entrée est nécessaire.",
    "Nettoyage depuis les ouvertures là où la géométrie le permet, pour réduire la fréquence des entrées.",
    "Compatibilité établie contre le résidu réel, avec sa concentration et sa température.",
    "Récupération conçue pour les flux mixtes solide-liquide.",
    "Équipement conducteur et mis à la terre là où des solvants inflammables sont présents.",
    "Destination réglementaire du résidu établie avant le choix de la collecte.",
    ],
    faqs: [
      {
        question: "Le nettoyage de réservoirs est-il un travail en espace clos ?",
        answer:
          "Lorsque l'entrée est nécessaire, oui, et le processus de permis s'applique intégralement : contrôle de l'atmosphère, surveillance, permis et moyens de secours. Nettoyer depuis les ouvertures là où la géométrie le permet réduit la fréquence des entrées, ce qui est un gain réel — mais cela ne dispense jamais du processus lorsque l'entrée a lieu.",
      },
      {
        question: "La chimie des résidus change-t-elle l'équipement ?",
        answer:
          "Entièrement. Les acides, solvants et produits de procédé attaquent joints, boyaux et surfaces de cuve à des vitesses différentes, et la compatibilité s'établit contre le résidu réel — avec sa concentration et sa température — plutôt que contre une catégorie générale.",
      },
      {
        question: "Un résidu de solvant change-t-il la classification ?",
        answer:
          "Il peut l'imposer. Un résidu de solvant inflammable dans un réservoir ajoute une exigence de classification à ce qui semblait un simple travail de nettoyage, et l'équipement doit correspondre à la classification assignée par l'ingénieur de l'installation.",
      },
      {
        question: "Comment gérer les boues et dépôts ?",
        answer:
          "Par une récupération conçue pour les flux mixtes solide-liquide, ce qui est la situation normale plutôt que l'exception dans un fond de réservoir. La destination réglementaire du résidu s'établit avant de choisir le mode de collecte.",
      },
    ],
    enPath: "/applications/tank-cleaning",
  },
  {
    slug: "projection-thermique",
    name: "Projection thermique",
    group: "Fabrication avancée",
    metaTitle: "Projection thermique",
    metaDescription:
      "La projection thermique produit une surpulvérisation métallique extrêmement fine, souvent réactive, ainsi que des fumées. Récupération en cabine.",
    intro:
      "La projection thermique produit une surpulvérisation métallique dont la finesse est le problème : les particules qui n'atteignent pas la pièce sont plus fines que la poudre d'alimentation, et elles se déposent partout dans la cabine.",
    facts: [
      { label: "Ce que l'opération génère", value: "Surpulvérisation métallique très fine et fumées" },
      { label: "Particularité", value: "Les particules non déposées sont plus fines que la poudre d'alimentation" },
      { label: "Réactivité", value: "Selon l'alliage : aluminium, zinc et autres métaux réactifs" },
      { label: "Classe d'incendie", value: "Classe D pour les poudres métalliques réactives" },
    ],
    overview: [
      "La composition suit le consommable : les projections d'aluminium et de zinc produisent des fines réactives, et le zinc ajoute la question des fumées d'oxyde de zinc. Les carbures produisent de la poussière contenant du cobalt.",
      "La cabine concentre tout cela. Une accumulation de surpulvérisation métallique fine dans une cabine de projection réunit un combustible réactif, un confinement, et un procédé qui fonctionne à très haute température quelques mètres plus loin.",
    ],
    risksHeading: "Ce qui compte en projection thermique",
    risks: [
    "Surpulvérisation plus fine que la poudre d'alimentation, donc plus réactive.",
    "Fines d'aluminium et de zinc réactives, de Classe D.",
    "Fumées d'oxyde de zinc lors des projections de zinc.",
    "Poussière contenant du cobalt lors des projections de carbures.",
    "Accumulation concentrée dans la cabine, près d'un procédé à haute température.",
    "Conductivité des poussières métalliques.",
    ],
    solutions: [
    "Équipement de récupération conducteur, mis à la terre et exempt de sources d'inflammation.",
    "Séparation par immersion pour les fines réactives, gardées humides.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Nettoyage de cabine à fréquence définie, sans laisser l'accumulation s'installer.",
    "Ségrégation par consommable, sans mélange des fines réactives.",
    "Dispositions de Classe D et personnel formé.",
    ],
    faqs: [
      {
        question: "La surpulvérisation de projection thermique est-elle dangereuse ?",
        answer:
          "Sa finesse est le problème : les particules qui n'atteignent pas la pièce sont plus fines que la poudre d'alimentation, donc plus réactives. Selon le consommable, ce sont des fines d'aluminium ou de zinc, qui sont des métaux combustibles de Classe D où l'eau est inappropriée.",
      },
      {
        question: "La projection de zinc pose-t-elle un danger particulier ?",
        answer:
          "Elle ajoute les fumées d'oxyde de zinc, cause classique de la fièvre des fondeurs, à la question des fines réactives. C'est un problème d'exposition distinct de la combustibilité, et la captation à la source y répond.",
      },
      {
        question: "Pourquoi la cabine est-elle le point critique ?",
        answer:
          "Parce qu'elle concentre tout : une accumulation de surpulvérisation métallique fine dans un espace confiné, à quelques mètres d'un procédé fonctionnant à très haute température. Le contrôle des accumulations en cabine est donc la mesure principale.",
      },
      {
        question: "Comment récupérer la surpulvérisation ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation, et lorsque l'évaluation le justifie, une séparation par immersion qui garde les fines réactives humides plutôt que de les laisser s'accumuler à sec.",
      },
    ],
    enPath: "/applications/thermal-spray",
  },
  {
    slug: "entretien-d-entrepot",
    name: "Entretien d'entrepôt",
    group: "Entretien d'installations",
    metaTitle: "Entretien d'entrepôt",
    metaDescription:
      "Dans un entrepôt, la poussière s'accumule en hauteur sur les racks et la circulation des chariots la remet continuellement en suspension.",
    intro:
      "Un entrepôt pose un problème que les zones de procédé n'ont pas : la poussière n'y est presque jamais générée, elle y est apportée et redistribuée — et elle s'accumule là où personne ne regarde, en haut des racks.",
    facts: [
      { label: "Ce qui s'accumule", value: "Poussière apportée depuis les zones de procédé et l'extérieur" },
      { label: "Où", value: "En hauteur sur les racks, les poutres et les luminaires" },
      { label: "Ce qui la remet en suspension", value: "La circulation des chariots élévateurs" },
      { label: "Pourquoi c'est négligé", value: "La poussière n'est pas générée sur place" },
    ],
    overview: [
      "La circulation des chariots élévateurs est le moteur : chaque passage remet en suspension la poussière déposée au sol et la redistribue en hauteur. C'est un cycle qui alimente continuellement les surfaces élevées.",
      "Si l'entrepôt jouxte une zone de procédé produisant une poussière combustible, cette poussière migre et s'accumule sur les racks — où elle constitue exactement l'inventaire qu'un événement primaire disperserait, dans un bâtiment généralement dépourvu de protection contre les explosions.",
    ],
    risksHeading: "Ce qui compte dans un entrepôt",
    risks: [
    "Accumulation en hauteur sur racks, poutres et luminaires, hors de vue.",
    "Remise en suspension continue par la circulation des chariots.",
    "Migration de poussière combustible depuis les zones de procédé adjacentes.",
    "Bâtiment généralement dépourvu de protection contre les explosions.",
    "Accès en hauteur difficile, nécessitant de la portée ou des nacelles.",
    "Négligence due à l'absence de génération sur place.",
    ],
    solutions: [
    "Récupération avec rallonges pour atteindre le haut des racks et les poutres.",
    "Aspirateur conducteur et mis à la terre là où la poussière migrante est combustible.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
    "Nettoyage des allées de circulation, pour couper le cycle de remise en suspension.",
    "Fréquences définies incluant explicitement les surfaces hautes.",
    "Élimination du soufflage à l'air comprimé, qui alimente directement le cycle.",
    ],
    faqs: [
      {
        question: "Pourquoi un entrepôt accumule-t-il de la poussière ?",
        answer:
          "Parce qu'elle y est apportée plutôt que générée : elle migre depuis les zones de procédé adjacentes et de l'extérieur, puis la circulation des chariots élévateurs la remet continuellement en suspension et la redistribue en hauteur. C'est un cycle qui alimente les surfaces élevées sans qu'aucune opération poussiéreuse n'ait lieu sur place.",
      },
      {
        question: "La poussière d'entrepôt est-elle un danger réel ?",
        answer:
          "Si elle migre depuis une zone produisant une poussière combustible, oui : elle s'accumule sur les racks et les poutres, ce qui constitue exactement l'inventaire qu'un événement primaire disperserait — dans un bâtiment généralement dépourvu de protection contre les explosions.",
      },
      {
        question: "Par où commencer ?",
        answer:
          "Par le haut des racks, les poutres et les luminaires, qui portent l'accumulation qui compte, puis par les allées de circulation, pour couper le cycle de remise en suspension à sa source.",
      },
      {
        question: "Le soufflage à l'air comprimé est-il utile en entrepôt ?",
        answer:
          "Il est particulièrement contre-productif : il alimente directement le cycle en projetant la poussière du sol vers les surfaces hautes, c'est-à-dire précisément là où elle pose le plus de problème.",
      },
    ],
    enPath: "/applications/warehouse-housekeeping",
  },

  {
    slug: "ensachage-et-vidage-de-sacs",
    name: "Ensachage et vidage de sacs",
    group: "Manutention de matières",
    metaTitle: "Ensachage et vidage de sacs",
    metaDescription:
      "Le vidage manuel de sacs est souvent le point de génération de poussière le plus important d'une usine. Captation à la source et récupération.",
    intro:
      "Le vidage manuel de sacs est fréquemment le point unique de génération de poussière le plus important d'une installation, et il est presque toujours situé à hauteur de respiration de l'opérateur.",
    facts: [
      { label: "Ce que l'opération génère", value: "Nuage de poudre à chaque sac vidé" },
      { label: "Position", value: "À hauteur de respiration de l'opérateur" },
      { label: "Pourquoi c'est sous-estimé", value: "L'opération paraît banale et manuelle" },
      { label: "Contrôle attendu", value: "Captation à la source à la station de vidage" },
    ],
    overview: [
      "Le geste lui-même crée le nuage : le sac est secoué pour le vider, ce qui met en suspension exactement la fraction fine que le procédé cherchait à contenir. Les sacs vides retiennent aussi de la matière résiduelle et deviennent une seconde source lorsqu'ils sont manipulés ou compactés.",
      "Pour une poudre combustible, la station de vidage réunit donc un nuage, un opérateur, et souvent une trémie qui fournit le confinement. Pour une poudre toxique, c'est simplement le point d'exposition le plus élevé de la journée.",
    ],
    risksHeading: "Ce qui compte au vidage de sacs",
    risks: [
    "Nuage créé par le geste de vidage, à hauteur de respiration.",
    "Sacs vides retenant de la matière et constituant une seconde source.",
    "Confinement fourni par la trémie sous la station.",
    "Charges statiques importantes dans le versement de poudres sèches.",
    "Accumulation rapide autour de la station et sur les surfaces adjacentes.",
    "Opération sous-estimée parce qu'elle paraît banale.",
    ],
    solutions: [
    "Captation à la source intégrée à la station de vidage.",
    "Récupération par aspirateur conducteur, mis à la terre et équipotentiel pour les accumulations.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
    "Gestion des sacs vides comme source distincte, non comme déchet ordinaire.",
    "Élimination du soufflage à l'air comprimé autour des stations.",
    "Nettoyage à fréquence définie de la station et des surfaces adjacentes.",
    ],
    faqs: [
      {
        question: "Pourquoi le vidage de sacs est-il si important ?",
        answer:
          "Parce qu'il est fréquemment le point unique de génération de poussière le plus important d'une installation, et qu'il se situe presque toujours à hauteur de respiration de l'opérateur. Le geste de vidage crée le nuage : secouer le sac met en suspension exactement la fraction fine que le procédé cherchait à contenir.",
      },
      {
        question: "Les sacs vides posent-ils problème ?",
        answer:
          "Oui, et ils sont souvent négligés. Un sac vide retient de la matière résiduelle et redevient une source lorsqu'il est manipulé, plié ou compacté. Les traiter comme une source distincte plutôt que comme un déchet ordinaire ferme cette voie.",
      },
      {
        question: "La captation à la source suffit-elle ?",
        answer:
          "Elle traite le nuage au moment où il est créé, ce qui en fait le contrôle principal, mais elle ne retire pas ce qui s'est déjà déposé autour de la station. Les deux sont nécessaires.",
      },
      {
        question: "Pourquoi la mise à la terre importe-t-elle au versement ?",
        answer:
          "Parce que le versement de poudres sèches génère des charges statiques importantes, et qu'une station de vidage réunit un nuage de poudre, un confinement dans la trémie, et un opérateur. Un circuit conducteur et mis à la terre supprime la source d'inflammation la plus probable.",
      },
    ],
    enPath: "/applications/bagging-dumping",
  },
  {
    slug: "nettoyage-de-salle-blanche",
    name: "Nettoyage de salle blanche",
    group: "Environnements contrôlés",
    metaTitle: "Nettoyage de salle blanche",
    metaDescription:
      "En salle blanche, l'appareil est jugé sur ce qui sort de son échappement autant que sur ce qu'il ramasse. Filtration absolue et équipement dédié.",
    intro:
      "En salle blanche, un aspirateur est jugé sur ce qui sort de son échappement autant que sur ce qu'il ramasse. Un appareil qui retire des particules du plancher et en rejette de plus fines dans l'air a aggravé la situation.",
    facts: [
      { label: "Ce qui définit l'exigence", value: "La classification de la salle" },
      { label: "Critère décisif", value: "Ce que rejette l'échappement, non seulement ce qui est ramassé" },
      { label: "Filtration", value: "HEPA ou ULPA selon la classification" },
      { label: "Règle d'usage", value: "Équipement dédié, jamais partagé avec les zones générales" },
    ],
    overview: [
      "La classification de la salle détermine l'exigence de filtration : HEPA pour la plupart des environnements contrôlés, ULPA là où la salle l'impose. La bonne question à poser à un fournisseur est à quoi le filtre est testé, non comment il est nommé.",
      "L'appareil est aussi une surface : une construction lisse en acier inoxydable essuyable lui permet de passer un protocole de nettoyage et d'habillage plutôt que de le contrarier. Et un aspirateur qui nettoie aussi le quai de chargement n'a rien à faire en salle blanche.",
    ],
    risksHeading: "Ce qui compte en environnement contrôlé",
    risks: [
    "L'échappement compte autant que la captation.",
    "Classification de la salle déterminant l'exigence de filtration.",
    "Équipement partagé introduisant de la contamination depuis l'extérieur.",
    "Surfaces de l'appareil devant supporter l'essuyage et l'habillage.",
    "Collecte devant rester contenue lors de la vidange.",
    "Poudres pharmaceutiques parfois aussi combustibles.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % ou ULPA selon la classification de la salle.",
    "Équipement dédié et étiqueté, ne quittant jamais la zone contrôlée.",
    "Construction lisse en acier inoxydable 316 et 304, essuyable.",
    "Collecte scellée pour une vidange contenue.",
    "Vérification de ce à quoi le filtre est testé, non de son appellation.",
    "Prise en compte de la combustibilité là où la poudre est aussi combustible.",
    ],
    faqs: [
      {
        question: "Quelle filtration faut-il en salle blanche ?",
        answer:
          "Celle qu'impose la classification de la salle. HEPA convient à la plupart des environnements contrôlés ; ULPA s'impose là où la salle l'exige. La bonne question à poser est à quoi le filtre est testé plutôt que comment il est nommé.",
      },
      {
        question: "Pourquoi l'échappement est-il le critère décisif ?",
        answer:
          "Parce qu'un appareil qui retire des particules du plancher et en rejette de plus fines dans l'air de la salle a aggravé la situation qu'il devait corriger. En environnement contrôlé, la performance se mesure à ce qui sort autant qu'à ce qui entre.",
      },
      {
        question: "Un aspirateur de salle blanche peut-il servir ailleurs ?",
        answer:
          "Non. Un appareil qui nettoie aussi le quai de chargement rapporte de la contamination dans la salle. L'équipement dédié et étiqueté, qui ne quitte jamais la zone contrôlée, est la pratique attendue.",
      },
      {
        question: "La construction de l'appareil importe-t-elle ?",
        answer:
          "Oui : l'appareil est lui-même une surface dans la salle. Une construction lisse en acier inoxydable essuyable lui permet de passer un protocole de nettoyage et d'habillage, alors qu'une surface texturée ou poreuse le contrarie.",
      },
    ],
    enPath: "/applications/cleanroom-vacuuming",
  },
  {
    slug: "entretien-des-convoyeurs",
    name: "Entretien des convoyeurs",
    group: "Entretien d'installations",
    metaTitle: "Entretien des convoyeurs",
    metaDescription:
      "Les galeries de convoyeurs accumulent de la poussière sur toute leur longueur, avec des entraînements répartis partout. Nettoyage sécuritaire, équipement à l'arrêt.",
    intro:
      "Une galerie de convoyeurs est une longue enceinte contenant des accumulations sur chaque surface horizontale et des moteurs, roulements et entraînements répartis sur toute sa longueur. C'est la géométrie qui a causé les événements secondaires les mieux documentés de l'industrie.",
    facts: [
      { label: "Ce que l'opération implique", value: "Retrait des accumulations le long des galeries et aux transferts" },
      { label: "Géométrie", value: "Enceinte longue, confinée, avec entraînements répartis" },
      { label: "Points critiques", value: "Transferts, chutes, têtes et pieds, périmètre des entraînements" },
      { label: "Règle absolue", value: "Nettoyer à l'arrêt et consigné, jamais en marche" },
    ],
    overview: [
      "Les points de transfert produisent la fraction la plus fine et la confinent. Les entraînements et roulements fournissent la chaleur. Les surfaces horizontales sur toute la longueur fournissent l'inventaire de combustible.",
      "Une règle prime sur toutes les autres : le nettoyage se fait équipement arrêté et consigné. Nettoyer autour d'un convoyeur en marche expose l'opérateur à des pièces mobiles pour retirer une poussière qui sera toujours là au prochain arrêt.",
    ],
    risksHeading: "Ce qui compte dans une galerie",
    risks: [
    "Accumulations sur toute la longueur, constituant l'inventaire de combustible.",
    "Entraînements et roulements répartis, fournissant la chaleur.",
    "Points de transfert produisant la fraction fine et la confinant.",
    "Confinement de la galerie favorisant la propagation d'un événement.",
    "Accès difficile en hauteur et sur les passerelles.",
    "Pièces mobiles : le nettoyage en marche est un risque distinct.",
    ],
    solutions: [
    "Nettoyage équipement arrêté et consigné, sans exception.",
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Appareils pneumatiques adaptés au travail continu en galerie là où l'air est disponible.",
    "Rallonges pour les surfaces hautes et les passerelles.",
    "Fréquences définies par surface : transferts, têtes et pieds, périmètre des entraînements.",
    "Élimination du soufflage à l'air comprimé, qui déplace la poussière le long de la galerie.",
    ],
    faqs: [
      {
        question: "Peut-on nettoyer un convoyeur en marche ?",
        answer:
          "Non. Le nettoyage se fait équipement arrêté et consigné. Nettoyer autour d'un convoyeur en marche expose l'opérateur à des pièces mobiles pour retirer une poussière qui sera toujours là au prochain arrêt planifié — le gain ne justifie jamais le risque.",
      },
      {
        question: "Où se concentre le danger dans une galerie ?",
        answer:
          "Aux points de transfert, qui produisent la fraction la plus fine et la confinent, et autour des entraînements et roulements, qui fournissent la chaleur. Les surfaces horizontales sur toute la longueur fournissent l'inventaire de combustible qu'un événement primaire disperserait.",
      },
      {
        question: "Pourquoi le soufflage est-il particulièrement inadapté ici ?",
        answer:
          "Parce qu'il déplace la poussière le long de la galerie plutôt que de la retirer, généralement vers des surfaces hautes moins accessibles. Dans une enceinte confinée avec des sources d'inflammation réparties, il crée aussi exactement le nuage qu'un programme de poussières cherche à éviter.",
      },
      {
        question: "À quelle fréquence nettoyer ?",
        answer:
          "La fréquence sort de l'analyse des dangers liés aux poussières plutôt que d'une règle générale. Ce qui compte est qu'un intervalle soit assigné par surface — transferts, têtes et pieds, périmètre des entraînements, passerelles — et que le passage soit consigné.",
      },
    ],
    enPath: "/applications/conveyor-housekeeping",
  },
  {
    slug: "remplissage-de-futs",
    name: "Remplissage de fûts",
    group: "Manutention de matières",
    metaTitle: "Remplissage de fûts",
    metaDescription:
      "Remplir un fût déplace un volume d'air chargé de poudre. Captation au point de remplissage et vidange contenue.",
    intro:
      "Remplir un fût déplace un volume d'air égal à celui de la matière introduite, et cet air sort chargé de poudre. C'est un problème de déplacement, non de déversement, ce qui explique pourquoi un remplissage soigné produit tout de même un nuage.",
    facts: [
      { label: "Ce que l'opération génère", value: "Air déplacé chargé de poudre, à chaque fût rempli" },
      { label: "Mécanisme", value: "Déplacement d'air, non déversement" },
      { label: "Position", value: "À hauteur de respiration lors du remplissage manuel" },
      { label: "Facteur additionnel", value: "Charges statiques dans le versement de poudres sèches" },
    ],
    overview: [
      "Le déplacement d'air explique aussi pourquoi le débit importe : remplir vite déplace l'air vite, et un remplissage rapide produit un nuage plus dense qu'un remplissage progressif.",
      "Pour les poudres réglementées, le remplissage et le changement de fût constituent souvent le moment d'exposition le plus élevé du cycle — davantage que la manipulation en amont.",
    ],
    risksHeading: "Ce qui compte au remplissage",
    risks: [
    "Air déplacé chargé de poudre à chaque fût, indépendamment du soin apporté.",
    "Débit de remplissage influant directement sur la densité du nuage.",
    "Position à hauteur de respiration lors du remplissage manuel.",
    "Charges statiques dans le versement de poudres sèches.",
    "Changement de fût comme moment d'exposition élevé.",
    "Poids et manutention du fût plein.",
    ],
    solutions: [
    "Captation au point de remplissage, dimensionnée pour l'air déplacé.",
    "Équipement conducteur, mis à la terre et équipotentiel pour les poudres sèches.",
    "Filtration absolue HEPA 99,99 % pour les poudres réglementées ou fines.",
    "Remplissage progressif plutôt que rapide, là où le procédé le permet.",
    "Collecte scellée et procédure définie pour le changement de fût.",
    "Nettoyage à fréquence définie de la station de remplissage.",
    ],
    faqs: [
      {
        question: "Pourquoi un remplissage soigné produit-il quand même de la poussière ?",
        answer:
          "Parce que le mécanisme est le déplacement d'air, non le déversement. Introduire de la matière dans un fût déplace un volume d'air égal, et cet air sort chargé de poudre. C'est pourquoi la captation doit être dimensionnée pour l'air déplacé plutôt que pour un déversement accidentel.",
      },
      {
        question: "Le débit de remplissage change-t-il quelque chose ?",
        answer:
          "Oui, directement : remplir vite déplace l'air vite et produit un nuage plus dense. Là où le procédé le permet, un remplissage progressif réduit la génération à la source sans équipement supplémentaire.",
      },
      {
        question: "Quel est le moment le plus risqué ?",
        answer:
          "Pour les poudres réglementées, le changement de fût plutôt que le remplissage lui-même. C'est le moment où le contenu est ouvert, manipulé et déplacé, souvent en fin de série lorsque l'attention baisse.",
      },
      {
        question: "Faut-il mettre l'équipement à la terre ?",
        answer:
          "Pour les poudres sèches, oui. Le versement génère des charges statiques et le fût constitue un confinement partiel. Un circuit conducteur et mis à la terre supprime la source d'inflammation la plus probable.",
      },
    ],
    enPath: "/applications/drum-filling",
  },
  {
    slug: "nettoyage-de-depoussiereur",
    name: "Nettoyage de dépoussiéreur",
    group: "Entretien d'installations",
    metaTitle: "Nettoyage de dépoussiéreur",
    metaDescription:
      "Un dépoussiéreur contient concentrée la poussière que toute l'installation produit. Entretien des trémies, manches et plénums en sécurité.",
    intro:
      "Entretenir un dépoussiéreur revient à travailler à l'intérieur d'un appareil dont la fonction est de concentrer en un seul endroit la poussière combustible de toute l'installation.",
    facts: [
      { label: "Ce que l'opération implique", value: "Entretien des trémies, manches, cartouches et plénums" },
      { label: "Particularité", value: "L'appareil concentre la poussière de toute l'installation" },
      { label: "Danger ajouté", value: "Combustion lente possible dans une trémie chargée" },
      { label: "Considération", value: "Espace clos selon la géométrie de l'appareil" },
    ],
    overview: [
      "Une trémie chargée peut abriter un foyer profond, particulièrement avec des poussières carbonées, et le changement de manches remet en suspension exactement ce que l'appareil avait capté. C'est un travail d'entretien planifié plutôt qu'une intervention improvisée.",
      "Selon la géométrie, l'accès à l'intérieur d'un dépoussiéreur peut constituer une entrée en espace clos, avec le processus de permis correspondant. La consignation de l'appareil précède toute intervention.",
    ],
    risksHeading: "Ce qui compte à l'entretien d'un dépoussiéreur",
    risks: [
    "Concentration de la poussière de toute l'installation en un seul appareil.",
    "Combustion lente possible dans une trémie chargée, surtout avec des poussières carbonées.",
    "Changement de manches remettant en suspension la matière captée.",
    "Accès intérieur pouvant constituer une entrée en espace clos.",
    "Consignation nécessaire avant toute intervention.",
    "Trémies pleines laissées en place entre les entretiens.",
    ],
    solutions: [
    "Consignation de l'appareil avant toute intervention, sans exception.",
    "Vidange régulière des trémies plutôt qu'accumulation entre entretiens.",
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour la manipulation des manches et cartouches.",
    "Application du processus de permis d'espace clos lorsque l'accès l'exige.",
    "Vigilance sur les foyers profonds : une trémie tiède mérite un suivi.",
    ],
    faqs: [
      {
        question: "Pourquoi l'entretien d'un dépoussiéreur est-il particulier ?",
        answer:
          "Parce qu'on travaille à l'intérieur d'un appareil dont la fonction est de concentrer en un seul endroit la poussière combustible de toute l'installation. Ce qui était réparti en couche mince dans l'usine se trouve rassemblé dans la trémie et sur les manches.",
      },
      {
        question: "Une trémie peut-elle abriter un incendie ?",
        answer:
          "Oui, particulièrement avec des poussières carbonées, qui se consument lentement en profondeur. Un foyer peut persister sans flamme visible et se rallumer. Une trémie tiède mérite un suivi plutôt qu'un soulagement, et la vidange régulière vaut mieux que l'accumulation entre entretiens.",
      },
      {
        question: "L'accès à un dépoussiéreur est-il un espace clos ?",
        answer:
          "Selon la géométrie, oui, avec le processus de permis correspondant. La consignation de l'appareil précède dans tous les cas toute intervention, y compris pour un changement de manches effectué depuis l'extérieur.",
      },
      {
        question: "Le changement de manches libère-t-il de la poussière ?",
        answer:
          "Il remet en suspension exactement ce que l'appareil avait capté, ce qui en fait l'étape la plus exposante de l'entretien. Une récupération à filtration retenue et une manipulation planifiée plutôt qu'improvisée sont les contrôles attendus.",
      },
    ],
    enPath: "/applications/dust-collector-cleaning",
  },
  {
    slug: "impression-3d-metal",
    name: "Impression 3D métal",
    group: "Fabrication avancée",
    metaTitle: "Récupération des poudres d'impression 3D métal",
    metaDescription:
      "Les poudres métalliques d'impression 3D sont fines, réactives et réutilisables. Récupération, tamisage et manipulation des poudres de titane et d'aluminium.",
    intro:
      "Les poudres d'impression 3D métal réunissent trois caractéristiques qui, ensemble, exigent une manipulation particulière : elles sont extrêmement fines, souvent réactives, et elles ont une valeur suffisante pour être récupérées et réutilisées.",
    facts: [
      { label: "Poudres courantes", value: "Titane, aluminium, inox, superalliages" },
      { label: "Réactivité", value: "Titane et aluminium : métaux combustibles de Classe D" },
      { label: "Finesse", value: "Granulométrie contrôlée, dans la fraction la plus réactive" },
      { label: "Contrainte additionnelle", value: "La poudre a une valeur — la contamination la détruit" },
    ],
    overview: [
      "Le titane et l'aluminium sont des métaux combustibles : leurs poudres s'enflament facilement, brûlent à haute température, et l'eau est inappropriée sur un feu déclaré. La granulométrie contrôlée qui rend ces poudres imprimables les place précisément dans la fraction la plus réactive.",
      "S'y ajoute une contrainte économique qui influence la sécurité : la poudre non fusionnée est récupérée, tamisée et réutilisée, de sorte que la contamination croisée entre alliages détruit sa valeur. La ségrégation stricte sert donc à la fois la sécurité et le coût.",
    ],
    risksHeading: "Ce qui compte en fabrication additive métal",
    risks: [
    "Poudres de titane et d'aluminium combustibles, de Classe D.",
    "Granulométrie contrôlée située dans la fraction la plus réactive.",
    "Eau inappropriée sur un feu de poudre métallique déclaré.",
    "Contamination croisée entre alliages détruisant la valeur de la poudre.",
    "Accumulation à sec dans les contenants de récupération.",
    "Conductivité des poudres métalliques, pertinente pour l'équipement.",
    ],
    solutions: [
    "Équipement de récupération conducteur, mis à la terre et exempt de sources d'inflammation.",
    "Séparation par immersion pour les poudres réactives, gardées humides plutôt qu'à sec.",
    "Ségrégation stricte par alliage, servant la sécurité et la valeur de la poudre.",
    "Appareils dédiés par matière pour éviter la contamination croisée.",
    "Dispositions de Classe D et personnel formé.",
    "Retrait rapide de la matière récupérée, sans contenants pleins laissés en place.",
    ],
    faqs: [
      {
        question: "Les poudres d'impression 3D métal sont-elles dangereuses ?",
        answer:
          "Le titane et l'aluminium sont des métaux combustibles : leurs poudres s'enflamment facilement, brûlent à haute température, et l'eau est inappropriée sur un feu déclaré, ce qui en fait des feux de Classe D. La granulométrie contrôlée qui rend ces poudres imprimables les situe précisément dans la fraction la plus réactive.",
      },
      {
        question: "Peut-on utiliser le même aspirateur pour plusieurs alliages ?",
        answer:
          "Non, pour deux raisons qui pointent dans la même direction. La contamination croisée détruit la valeur de la poudre récupérée, et mélanger des poudres réactives crée des conditions qui n'ont pas été évaluées. Des appareils dédiés par matière servent à la fois la sécurité et le coût.",
      },
      {
        question: "Comment récupérer une poudre réactive ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation, et lorsque l'évaluation le justifie, une séparation par immersion qui garde la poudre récupérée humide plutôt que de la laisser s'accumuler à sec dans un contenant.",
      },
      {
        question: "Que faire de la poudre non fusionnée ?",
        answer:
          "Elle est normalement récupérée, tamisée et réutilisée, ce qui explique l'importance de la ségrégation. La manipulation propre a donc une valeur directe, en plus de son rôle de sécurité.",
      },
    ],
    enPath: "/applications/metal-3d-printing",
  },

  {
    slug: "usinage-cnc",
    name: "Usinage CNC",
    group: "Travail des métaux",
    metaTitle: "Copeaux et brouillard d'huile en usinage CNC",
    metaDescription:
      "L'usinage CNC produit des copeaux, des fines métalliques et du liquide de coupe mélangés. Récupération de flux mixtes et ségrégation par métal.",
    intro:
      "L'usinage CNC produit rarement une seule chose. Les copeaux arrivent avec du liquide de coupe, les fines se mélangent aux copeaux, et selon la matière travaillée le flux peut contenir des particules réactives qu'il vaut mieux ne pas combiner.",
    facts: [
      { label: "Ce que l'opération génère", value: "Copeaux, fines métalliques, liquide de coupe, brouillard d'huile" },
      { label: "Difficulté principale", value: "Flux mixtes solide-liquide" },
      { label: "Décision clé", value: "Ségréger par métal, ou perdre la valeur de rebut" },
      { label: "Danger selon la matière", value: "Fines réactives sur alliages légers ; Cr(VI) sur inox" },
    ],
    overview: [
      "La décision qui détermine tout est la ségrégation, et elle se prend à la machine plutôt qu'au bac. Combiner plusieurs métaux avec du liquide de coupe détruit la valeur de rebut et complique l'élimination ; séparer les fines réactives d'aluminium ou de magnésium des autres débris est une question de sécurité et non de tri.",
      "Le brouillard d'huile est un second volet : il se dépose sur les surfaces, rend les planchers glissants, et constitue une exposition respiratoire distincte de la poussière solide.",
    ],
    risksHeading: "Ce qu'un atelier CNC doit gérer",
    risks: [
    "Flux mixtes solide-liquide exigeant une récupération conçue pour les deux.",
    "Fines réactives d'aluminium ou de magnésium à ne pas mélanger.",
    "Chrome hexavalent généré par l'usinage et le meulage de l'inox.",
    "Valeur de rebut détruite par le mélange des métaux.",
    "Brouillard d'huile se déposant sur les surfaces et les planchers.",
    "Abrasivité des copeaux, usant l'équipement non conçu pour cela.",
    ],
    solutions: [
    "Récupération conçue pour les flux mixtes solide-liquide.",
    "Ségrégation par métal décidée à la machine, non au bac.",
    "Équipement conducteur et mis à la terre pour les fines métalliques.",
    "Filtration absolue HEPA 99,99 % là où des particules respirables sont générées.",
    "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
    "Élimination du soufflage à l'air comprimé aux machines-outils.",
    ],
    faqs: [
      {
        question: "Peut-on aspirer des copeaux avec du liquide de coupe ?",
        answer:
          "Oui, avec une récupération conçue pour les flux mixtes solide-liquide. C'est la situation normale en usinage CNC plutôt que l'exception, et un appareil conçu pour le sec seul se colmate ou laisse échapper le liquide.",
      },
      {
        question: "Pourquoi la ségrégation par métal importe-t-elle autant ?",
        answer:
          "Pour deux raisons. La valeur de rebut chute fortement quand les métaux sont mélangés, et surtout, les fines réactives d'aluminium ou de magnésium ne devraient pas être combinées avec d'autres débris ou du liquide de coupe — c'est une question de sécurité. La décision se prend à la machine, pas au bac.",
      },
      {
        question: "L'usinage de l'inox pose-t-il un danger particulier ?",
        answer:
          "Le meulage et certains usinages de l'inox génèrent du chrome hexavalent, un cancérogène reconnu régi par sa propre norme. Le danger est créé par l'opération plutôt que présent dans le stock, et rien dans la description d'une pièce ne le signale.",
      },
      {
        question: "Le brouillard d'huile fait-il partie du problème ?",
        answer:
          "Oui, et il est souvent traité séparément à tort. Il se dépose sur les surfaces, rend les planchers glissants, et constitue une exposition respiratoire distincte de la poussière solide.",
      },
    ],
    enPath: "/applications/cnc-machining",
  },
  {
    slug: "thermolaquage",
    name: "Thermolaquage",
    group: "Finition de surface",
    metaTitle: "Récupération de la poudre de thermolaquage",
    metaDescription:
      "La poudre de thermolaquage est une poussière organique combustible, et la surpulvérisation récupérée proprement peut souvent être réintroduite. Récupération et changements de couleur.",
    intro:
      "La poudre de thermolaquage est une poussière organique combustible, et la surpulvérisation est le cas le plus clair de matière récupérée ayant une valeur réelle : récupérée proprement, elle peut souvent être réintroduite au procédé.",
    facts: [
      { label: "Ce que l'opération génère", value: "Surpulvérisation de poudre polymère fine" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière non conductrice)" },
      { label: "Occasion", value: "La surpulvérisation propre est souvent réutilisable" },
      { label: "Contrainte", value: "Contamination croisée aux changements de couleur" },
    ],
    overview: [
      "Cela transforme l'entretien ménager en récupération de coût, ce qui est rare. Mais le réemploi dépend entièrement de la propreté du flux : une fois plusieurs couleurs mélangées ou de la poussière de plancher introduite, la valeur disparaît.",
      "La poudre elle-même est combustible et se charge en électricité statique — le procédé repose précisément sur la charge électrostatique. Un circuit de récupération conducteur, mis à la terre et équipotentiel n'est donc pas un raffinement dans une cabine de thermolaquage.",
    ],
    risksHeading: "Ce qui compte en thermolaquage",
    risks: [
    "Poudre polymère combustible, relevant du Groupe G.",
    "Charge électrostatique inhérente au procédé lui-même.",
    "Réemploi possible mais conditionnel à la propreté du flux.",
    "Contamination croisée aux changements de couleur détruisant la valeur.",
    "Accumulation dans la cabine, les conduits et sur les surfaces adjacentes.",
    "Poussière fine facilement mise en suspension par les mouvements d'air.",
    ],
    solutions: [
    "Récupération dédiée par couleur là où le réemploi est visé.",
    "Équipement conducteur, mis à la terre et équipotentiel, le procédé étant électrostatique.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
    "Nettoyage de cabine à fréquence définie, incluant conduits et surfaces adjacentes.",
    "Élimination du soufflage à l'air comprimé, qui disperse la poudre partout.",
    "Collecte propre séparée du nettoyage de plancher, pour préserver la valeur de réemploi.",
    ],
    faqs: [
      {
        question: "La poudre de thermolaquage est-elle combustible ?",
        answer:
          "Oui. C'est une poudre polymère fine, donc une poussière organique combustible relevant de la Classe II, Groupe G. Elle se charge par ailleurs en électricité statique, puisque le procédé de thermolaquage repose précisément sur la charge électrostatique — ce qui rend un circuit de récupération conducteur et mis à la terre nécessaire plutôt qu'optionnel.",
      },
      {
        question: "La surpulvérisation peut-elle être réutilisée ?",
        answer:
          "Souvent oui, et c'est le cas le plus clair de matière récupérée ayant une valeur réelle. Le réemploi dépend entièrement de la propreté du flux : une fois plusieurs couleurs mélangées ou de la poussière de plancher introduite, la valeur disparaît. Une collecte propre séparée du nettoyage de plancher est ce qui la préserve.",
      },
      {
        question: "Comment gérer les changements de couleur ?",
        answer:
          "En dédiant la récupération par couleur là où le réemploi est visé, et en nettoyant la cabine, les conduits et les surfaces adjacentes entre les séries. C'est la contamination croisée, plus que la quantité, qui détermine si la poudre reste utilisable.",
      },
      {
        question: "Peut-on souffler une cabine à l'air comprimé ?",
        answer:
          "Non. Le soufflage disperse une poudre combustible fine dans tout le bâtiment, détruit toute possibilité de réemploi, et met un nuage en suspension dans un espace conçu pour charger électrostatiquement des particules.",
      },
    ],
    enPath: "/applications/powder-coating",
  },
  {
    slug: "decapage-abrasif",
    name: "Décapage abrasif",
    group: "Finition de surface",
    metaTitle: "Récupération après décapage abrasif",
    metaDescription:
      "Le décapage abrasif produit un mélange de média usé et de substrat retiré, en grand volume. La silice est le danger dominant lorsque le média en contient.",
    intro:
      "Le décapage abrasif produit deux choses mélangées et en grand volume : le média usé et le revêtement ou le substrat qui vient d'être retiré. Le danger dominant vient généralement du second.",
    facts: [
      { label: "Ce que l'opération génère", value: "Média usé mélangé au substrat et au revêtement retirés" },
      { label: "Danger dominant", value: "Ce qui a été retiré, plus que le média lui-même" },
      { label: "Silice", value: "Danger majeur si le média en contient — silicose" },
      { label: "Volume", value: "Très élevé, exigeant une grande capacité de collecte" },
    ],
    overview: [
      "Si le média contient de la silice, la silice cristalline respirable devient le danger principal, avec une limite d'exposition OSHA de 50 microgrammes par mètre cube. Si le revêtement retiré contient du plomb, la norme sur le plomb s'applique au flux récupéré.",
      "Autrement dit, le flux récupéré hérite du statut réglementaire de ce qui a été décapé. Un décapage de peinture ancienne produit un déchet réglementé, pas du sable usé.",
    ],
    risksHeading: "Ce qui compte au décapage",
    risks: [
    "Silice cristalline respirable si le média en contient — silicose irréversible.",
    "Plomb dans les revêtements anciens, transférant son statut réglementaire au flux.",
    "Volume très élevé de matière récupérée.",
    "Abrasivité extrême, usant rapidement l'équipement.",
    "Mélange média-substrat compliquant l'élimination.",
    "Poussière fine en suspension bien après l'arrêt du décapage.",
    ],
    solutions: [
    "Récupération à filtration absolue HEPA 99,99 %, la silice et le plomb gouvernant la spécification.",
    "Grande capacité de collecte adaptée au volume produit.",
    "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
    "Vérification de la composition du média et du revêtement avant le travail.",
    "Collecte scellée et élimination selon le statut réglementaire du flux.",
    "Élimination du balayage à sec, qui remet la silice en suspension.",
    ],
    faqs: [
      {
        question: "Le décapage abrasif est-il dangereux ?",
        answer:
          "Le danger dominant vient généralement de ce qui a été retiré plutôt que du média. Si le média contient de la silice, la silice cristalline respirable devient le danger principal, avec une limite d'exposition OSHA de 50 µg/m³ et un risque de silicose irréversible. Si le revêtement retiré contient du plomb, la norme sur le plomb s'applique au flux récupéré.",
      },
      {
        question: "Le flux récupéré est-il un déchet réglementé ?",
        answer:
          "Il hérite du statut réglementaire de ce qui a été décapé. Un décapage de peinture ancienne au plomb produit un déchet réglementé, pas du média usé ordinaire — et l'élimination suit ce statut plutôt que la nature du média.",
      },
      {
        question: "Pourquoi l'équipement s'use-t-il si rapidement ?",
        answer:
          "Parce que le média abrasif est conçu pour éroder des surfaces, et il érode aussi les boyaux, les tubes et les surfaces de séparation d'un appareil de récupération. Une construction tolérante à l'abrasion avec des pièces d'usure remplaçables est plus économique à l'usage.",
      },
      {
        question: "Faut-il vérifier le média avant le travail ?",
        answer:
          "Oui, et le revêtement aussi. La teneur en silice du média détermine une part du danger, et la composition du revêtement détermine le statut réglementaire du flux récupéré. Les deux se vérifient avant plutôt qu'après.",
      },
    ],
    enPath: "/applications/abrasive-blasting",
  },
  {
    slug: "ebavurage",
    name: "Ébavurage",
    group: "Travail des métaux",
    metaTitle: "Récupération de la poussière d'ébavurage",
    metaDescription:
      "L'ébavurage produit des fines métalliques directement dans la zone respiratoire de l'opérateur. Captation à la source et récupération sécuritaire.",
    intro:
      "L'ébavurage est une opération manuelle, ce qui définit son danger : les fines métalliques sont produites à quelques centimètres du visage de l'opérateur, dans sa zone respiratoire.",
    facts: [
      { label: "Ce que l'opération génère", value: "Fines métalliques et poussière d'abrasif" },
      { label: "Particularité", value: "Production directement dans la zone respiratoire de l'opérateur" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E pour les fines métalliques conductrices" },
      { label: "Contrôle attendu", value: "Captation à la source sur l'outil ou au poste" },
    ],
    overview: [
      "C'est pourquoi la captation à la source — sur l'outil ou au poste de travail — est plus efficace que toute ventilation générale : elle retire les particules avant qu'elles n'atteignent les voies respiratoires.",
      "La composition suit le métal travaillé : ébavurer de l'inox génère du chrome hexavalent, ébavurer des alliages légers produit des fines réactives, ébavurer du laiton peut libérer du plomb selon l'alliage.",
    ],
    risksHeading: "Ce qui compte à l'ébavurage",
    risks: [
    "Production dans la zone respiratoire, à quelques centimètres du visage.",
    "Chrome hexavalent sur inox, fines réactives sur alliages légers.",
    "Plomb possible selon l'alliage de laiton travaillé.",
    "Fines conductrices pouvant affecter l'équipement électrique.",
    "Accumulation aux postes de travail et sur les établis.",
    "Étincelles selon l'outil et le métal.",
    ],
    solutions: [
    "Captation à la source sur l'outil ou au poste : le contrôle le plus efficace.",
    "Récupération par aspirateur conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Vérification de la composition de l'alliage avant de travailler un stock inconnu.",
    "Ségrégation par métal pour les fines réactives.",
    "Élimination du soufflage à l'air comprimé aux postes d'ébavurage.",
    ],
    faqs: [
      {
        question: "Pourquoi l'ébavurage exige-t-il une captation à la source ?",
        answer:
          "Parce que c'est une opération manuelle : les fines métalliques sont produites à quelques centimètres du visage de l'opérateur, dans sa zone respiratoire. Capter à la source retire les particules avant qu'elles n'atteignent les voies respiratoires, ce qu'aucune ventilation générale ne peut égaler.",
      },
      {
        question: "Le danger dépend-il du métal ?",
        answer:
          "Entièrement. Ébavurer de l'inox génère du chrome hexavalent, un cancérogène reconnu. Les alliages légers produisent des fines réactives d'aluminium ou de magnésium. Certains laitons contiennent du plomb, régi par sa propre norme.",
      },
      {
        question: "Les fines d'ébavurage sont-elles combustibles ?",
        answer:
          "Sous forme fine, les fines métalliques se comportent comme une poussière métallique combustible, et elles sont conductrices. Un équipement conducteur et mis à la terre est donc approprié même pour une opération qui paraît modeste.",
      },
      {
        question: "Peut-on nettoyer un poste d'ébavurage à l'air comprimé ?",
        answer:
          "Non. Le soufflage met des fines métalliques en suspension dans la zone respiratoire de l'opérateur et projette de la poussière conductrice vers les équipements électriques.",
      },
    ],
    enPath: "/applications/deburring",
  },
  {
    slug: "nettoyage-de-silo",
    name: "Nettoyage de silo",
    group: "Entretien d'installations",
    metaTitle: "Nettoyage de silo",
    metaDescription:
      "Le nettoyage par accès extérieur depuis les trous d'homme rend les entrées en espace clos rares plutôt qu'inutiles. Ce qu'une récupération sous vide peut et ne peut pas faire.",
    intro:
      "Le nettoyage de silo pose une question de sécurité avant une question d'équipement : l'entrée en espace clos est la tâche la plus risquée d'une installation de manutention, et l'objectif est d'en réduire la fréquence.",
    facts: [
      { label: "Ce que l'opération implique", value: "Retrait des accumulations intérieures et des résidus" },
      { label: "Enjeu de sécurité", value: "L'entrée en espace clos est la tâche la plus risquée" },
      { label: "Ce que l'accès extérieur change", value: "Il rend les entrées rares — il ne les élimine pas" },
      { label: "Limite honnête", value: "Le colmatage et les cheminées relèvent du délogeage mécanique" },
    ],
    overview: [
      "Le nettoyage par accès extérieur, depuis les trous d'homme et les ouvertures, transforme la plupart des nettoyages intérieurs de routine en travail effectué de l'extérieur. Lorsque la géométrie exige réellement une entrée, le processus complet de permis s'applique exactement comme avant. Le gain est la fréquence : la tâche de routine la plus risquée cesse d'être routinière.",
      "Une limite qu'il faut énoncer clairement : le colmatage en masse et les cheminées relèvent du délogeage mécanique par des méthodes spécialisées de nettoyage de silo. La récupération sous vide s'occupe de ce qui se détache — elle ne remplace pas le délogeage.",
    ],
    risksHeading: "Ce qui compte au nettoyage de silo",
    risks: [
    "L'entrée en espace clos demeure la tâche la plus risquée ; l'objectif est d'en réduire la fréquence.",
    "Le processus complet de permis s'applique lorsque l'entrée est réellement nécessaire.",
    "Colmatage et cheminées relevant du délogeage mécanique, non de l'aspiration.",
    "Accumulations combustibles sur toute la hauteur intérieure.",
    "Atmosphère potentiellement appauvrie en oxygène ou chargée en poussière.",
    "Confinement important, favorisant une déflagration si une inflammation survient.",
    ],
    solutions: [
    "Nettoyage par accès extérieur depuis les trous d'homme, pour réduire la fréquence des entrées.",
    "Rallonges et outils longue portée adaptés à la géométrie intérieure.",
    "Aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
    "Méthodes spécialisées de délogeage pour le colmatage — l'aspiration prend le relais ensuite.",
    "Maintien intégral du processus de permis lorsqu'une entrée est nécessaire.",
    ],
    faqs: [
      {
        question: "Le nettoyage par accès extérieur élimine-t-il les permis d'espace clos ?",
        answer:
          "Non — il les rend rares. La plupart des nettoyages intérieurs de routine deviennent un travail effectué de l'extérieur, depuis les trous d'homme et les ouvertures. Lorsque la géométrie exige réellement une entrée, le processus complet de permis s'applique exactement comme avant. Le gain est la fréquence : la tâche de routine la plus risquée cesse d'être routinière.",
      },
      {
        question: "La matière est colmatée ou forme une cheminée — un aspirateur peut-il la dégager ?",
        answer:
          "Le colmatage en masse et les cheminées relèvent du délogeage mécanique par des méthodes spécialisées de nettoyage de silo. La récupération sous vide s'occupe de ce qui se détache. Les deux sont complémentaires, et présenter l'aspiration comme un substitut au délogeage serait inexact.",
      },
      {
        question: "Pourquoi l'intérieur d'un silo est-il particulièrement à risque ?",
        answer:
          "Parce qu'il réunit des accumulations combustibles sur toute la hauteur, un confinement important, et parfois une atmosphère appauvrie en oxygène ou chargée en poussière. C'est la géométrie même d'une déflagration si une inflammation survient.",
      },
      {
        question: "Quel équipement convient pour un intérieur de silo ?",
        answer:
          "Un aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel, adapté à la classification assignée par l'ingénieur de l'installation, avec des rallonges permettant d'atteindre la géométrie intérieure depuis l'extérieur.",
      },
    ],
    enPath: "/applications/silo-cleaning",
  },
  {
    slug: "nettoyage-de-deversements",
    name: "Nettoyage de déversements",
    group: "Entretien d'installations",
    metaTitle: "Nettoyage de déversements",
    metaDescription:
      "Récupérer un déversement est un problème de compatibilité avant d'être un problème d'aspiration. Ce que le liquide fait à l'équipement et à l'opérateur.",
    intro:
      "Un déversement se traite dans l'ordre inverse de l'intuition : la première question n'est pas la puissance d'aspiration mais la compatibilité — ce que le liquide fait aux joints, aux boyaux, aux filtres et à la personne qui videra l'appareil.",
    facts: [
      { label: "Ce que l'opération implique", value: "Récupération de liquides répandus, parfois avec des solides" },
      { label: "Première question", value: "La compatibilité chimique, non la puissance d'aspiration" },
      { label: "Moment le plus risqué", value: "La vidange, plus que la récupération" },
      { label: "Facteur additionnel", value: "Poids du liquide récupéré et statut réglementaire" },
    ],
    overview: [
      "Les acides, les solvants, les caustiques et les produits de procédé attaquent les joints, les garnitures, les revêtements de boyaux et les surfaces de cuve à des vitesses différentes. Un appareil qui gère bien l'un peut se dégrader rapidement sur un autre.",
      "Comme pour les poudres toxiques, le moment le plus risqué est généralement la vidange plutôt que la récupération : le liquide récupéré est lourd, il éclabousse, et il concentre en une cuve ce qui était répandu au sol.",
    ],
    risksHeading: "Ce qui compte au nettoyage de déversements",
    risks: [
    "Compatibilité chimique déterminant la construction appropriée.",
    "Vidange comme moment de plus forte exposition.",
    "Poids du liquide récupéré, rendant la manipulation difficile.",
    "Statut réglementaire du liquide contraignant l'élimination.",
    "Flux mixtes liquide-solide compliquant la récupération.",
    "Température et concentration modifiant la compatibilité.",
    ],
    solutions: [
    "Établir la compatibilité avec le liquide tel qu'il arrive — température, concentration, solides entraînés.",
    "Récupération conçue pour les flux liquides ou mixtes selon le cas.",
    "Conception de la vidange : hauteur, méthode, confinement, décantation évitable.",
    "Établir la destination réglementaire avant de choisir le mode de collecte.",
    "Équipement conducteur et mis à la terre pour les solvants inflammables.",
    "Formation sur la procédure de vidange comme étape à part entière.",
    ],
    faqs: [
      {
        question: "Un aspirateur industriel peut-il récupérer des acides et des solvants ?",
        answer:
          "Cela dépend de la construction et de la chimie précise. Les acides, solvants et caustiques attaquent joints, boyaux, filtres et surfaces de cuve à des vitesses différentes, de sorte que la compatibilité s'établit contre le liquide réel — tel qu'il arrive, avec sa température, sa concentration et les solides entraînés — plutôt que contre une catégorie générale.",
      },
      {
        question: "Quel est le principal risque lors d'un nettoyage de déversement ?",
        answer:
          "Généralement la vidange. Le liquide récupéré est lourd, il éclabousse, et l'opération concentre en une cuve ce qui était répandu au sol. Concevoir la méthode de vidange — hauteur, confinement, possibilité d'éviter la décantation — fait plus pour la sécurité de l'opérateur que davantage d'aspiration.",
      },
      {
        question: "Le liquide récupéré exige-t-il une élimination particulière ?",
        answer:
          "Souvent, et il vaut la peine de l'établir avant de choisir le mode de collecte : la destination réglementaire contraint fréquemment la taille des contenants, la méthode de vidange et la nécessité de séparer les solides à la source.",
      },
      {
        question: "Faut-il un équipement antidéflagrant pour les solvants ?",
        answer:
          "Pour les liquides inflammables, un équipement conducteur et mis à la terre adapté à la classification de la zone est approprié. La classification est assignée par l'ingénieur de l'installation ; nous adaptons l'équipement à cette assignation.",
      },
    ],
    enPath: "/applications/spill-cleanup",
  },

  {
    slug: "nettoyage-de-soudage",
    name: "Nettoyage après soudage",
    group: "Travail des métaux",
    metaTitle: "Nettoyage des fumées et scories de soudage",
    metaDescription:
      "Le soudage génère des fumées métalliques respirables, des scories et des particules de meulage. Captation à la source et récupération sécuritaire en atelier de soudage.",
    intro:
      "Le soudage produit trois choses distinctes qu'il faut maîtriser séparément : des fumées métalliques respirables, des scories et projections solides, et la poussière de meulage issue de la préparation et de la finition des cordons.",
    facts: [
      { label: "Ce que l'opération génère", value: "Fumées métalliques, scories, projections, poussière de meulage" },
      { label: "Danger dominant", value: "Exposition aux fumées métalliques" },
      { label: "Métaux préoccupants", value: "Manganèse dans presque tous les aciers ; chrome hexavalent sur l'inox" },
      { label: "Contrôle attendu", value: "Captation à la source, complétée par la récupération des accumulations" },
    ],
    overview: [
      "Les fumées sont le danger dominant, et leur composition dépend du métal de base et du consommable. Le manganèse est présent dans presque tous les aciers ; le soudage de l'inox génère du chrome hexavalent ; l'acier galvanisé produit des fumées d'oxyde de zinc. Rien dans la description d'un travail ne signale ces expositions.",
      "Les particules de meulage constituent le second volet : elles sont abrasives, conductrices, et sous forme fine elles se comportent comme une poussière métallique combustible. Un atelier de soudage a donc besoin de captation à la source pour les fumées et de récupération sous vide pour les accumulations.",
    ],
    risksHeading: "Ce qu'un atelier de soudage doit maîtriser",
    risks: [
      "Fumées de manganèse, présentes dans presque tous les aciers.",
      "Chrome hexavalent généré par le soudage et le meulage de l'inox.",
      "Fumées d'oxyde de zinc sur acier galvanisé, cause de la fièvre des fondeurs.",
      "Poussière de meulage abrasive, conductrice et combustible sous forme fine.",
      "Accumulation autour des postes et sous les tables de soudage.",
      "Étincelles de meulage fournissant le combustible et l'inflammation ensemble.",
    ],
    solutions: [
      "Captation à la source aux postes de soudage : le contrôle le plus efficace pour les fumées.",
      "Récupération par aspirateur conducteur, mis à la terre et équipotentiel pour les accumulations.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
      "Construction tolérante à l'abrasion pour les particules de meulage.",
      "Élimination du soufflage à l'air comprimé, qui projette scories et poussière conductrice.",
      "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Quel est le principal danger du soudage ?",
        answer:
          "Les fumées métalliques. Leur composition dépend du métal de base et du consommable : le manganèse est présent dans presque tous les aciers et cause le manganisme en surexposition chronique, le soudage de l'inox génère du chrome hexavalent qui est un cancérogène reconnu, et l'acier galvanisé produit des fumées d'oxyde de zinc responsables de la fièvre des fondeurs. Rien dans la description d'un travail ne signale ces expositions.",
      },
      {
        question: "La poussière de meulage de soudage est-elle combustible ?",
        answer:
          "Sous forme fine, oui : elle se comporte comme une poussière métallique combustible, et elle est également abrasive et conductrice. Le meulage est particulièrement à risque parce que l'opération fournit à la fois le combustible et, par les étincelles, une source d'inflammation.",
      },
      {
        question: "La captation à la source suffit-elle ?",
        answer:
          "Elle traite les fumées au moment où elles sont produites, ce qui en fait le contrôle le plus efficace, mais elle ne retire pas ce qui s'est déjà déposé. Un atelier a besoin des deux : captation pour les fumées, récupération sous vide pour les accumulations sur les surfaces, sous les tables et autour des postes.",
      },
      {
        question: "Peut-on souffler un poste de soudage à l'air comprimé ?",
        answer:
          "Non. Le soufflage projette des scories et de la poussière métallique conductrice, met la fraction respirable en suspension, et envoie des particules dans les équipements électriques. La récupération sous vide retire la matière au lieu de la déplacer.",
      },
    ],
    enPath: "/applications/welding-cleanup",
  },
  {
    slug: "poussiere-de-meulage",
    name: "Poussière de meulage",
    group: "Travail des métaux",
    metaTitle: "Récupération de la poussière de meulage",
    metaDescription:
      "Le meulage produit simultanément des particules fines et des étincelles — le combustible et l'inflammation dans la même opération. Récupération sécuritaire.",
    intro:
      "Le meulage a une particularité qui le distingue des autres opérations productrices de poussière : il fournit le combustible et la source d'inflammation dans le même geste. Il réduit le métal en particules fines et projette simultanément des particules incandescentes.",
    facts: [
      { label: "Ce que l'opération génère", value: "Particules métalliques fines, poussière d'abrasif, étincelles" },
      { label: "Particularité", value: "Combustible et inflammation produits par la même opération" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E pour les fines métalliques conductrices" },
      { label: "Facteur additionnel", value: "Abrasivité élevée, usant l'équipement de récupération" },
    ],
    overview: [
      "Les particules de meulage combinent le métal travaillé et l'abrasif de la meule. Elles sont fines, abrasives, souvent conductrices, et sous forme très fine elles peuvent se consumer lentement à l'intérieur de la matière collectée.",
      "La composition dépend du métal : le meulage de l'inox génère du chrome hexavalent, celui des alliages légers produit des fines réactives d'aluminium ou de magnésium, et celui des carbures produit de la poussière cobalt-carbure associée à la maladie pulmonaire des métaux durs.",
    ],
    risksHeading: "Ce qui rend le meulage exigeant",
    risks: [
      "Combustible et inflammation produits simultanément par l'opération.",
      "Fines conductrices pouvant court-circuiter de l'équipement électrique.",
      "Abrasivité usant boyaux, tubes et surfaces de séparation.",
      "Combustion lente possible dans la matière collectée.",
      "Composition variable selon le métal : Cr(VI) sur inox, fines réactives sur alliages légers.",
      "Poussière cobalt-carbure au meulage des carbures.",
    ],
    solutions: [
      "Récupération par aspirateur conducteur, mis à la terre et équipotentiel, exempt de sources d'inflammation.",
      "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
      "Captation à la source aux cabines et postes de meulage.",
      "Ségrégation par métal, sans mélange des fines réactives avec d'autres débris.",
      "Retrait rapide de la matière récupérée du bâtiment, sans laisser de contenants pleins.",
    ],
    faqs: [
      {
        question: "Pourquoi le meulage est-il particulièrement à risque ?",
        answer:
          "Parce que l'opération fournit à la fois le combustible et la source d'inflammation : elle réduit le métal en particules fines et projette simultanément des particules incandescentes. C'est pourquoi le contrôle des accumulations importe autant dans les cabines de meulage, et pourquoi le soufflage à l'air comprimé y est la pire option disponible.",
      },
      {
        question: "La poussière de meulage est-elle conductrice ?",
        answer:
          "Les fines métalliques le sont, et cela compte autant que la combustibilité : une accumulation peut ponter des bornes et court-circuiter de l'équipement. C'est la raison du traitement sévère réservé au Groupe E dans la classification des emplacements dangereux.",
      },
      {
        question: "La composition change-t-elle selon le métal meulé ?",
        answer:
          "Considérablement. Le meulage de l'inox génère du chrome hexavalent, un cancérogène reconnu. Les alliages légers produisent des fines réactives d'aluminium ou de magnésium. Le meulage des carbures produit de la poussière cobalt-carbure, associée à la maladie pulmonaire des métaux durs. Le métal détermine le danger dominant.",
      },
      {
        question: "Pourquoi l'équipement s'use-t-il si vite ?",
        answer:
          "Parce que les particules de meulage sont très abrasives : elles combinent le métal travaillé et l'abrasif de la meule. Une construction tolérante à l'abrasion avec des pièces d'usure remplaçables est plus économique à l'usage qu'un appareil non conçu pour cette tâche.",
      },
    ],
    enPath: "/applications/grinding-dust",
  },
  {
    slug: "poncage",
    name: "Ponçage",
    group: "Finition de surface",
    metaTitle: "Récupération de la poussière de ponçage",
    metaDescription:
      "Le ponçage produit la fraction fine qui compte pour le risque de déflagration et pour l'exposition. Captation à la source et récupération sécuritaire.",
    intro:
      "Le ponçage produit précisément la fraction que les autres opérations ne produisent pas : de la poussière fine, en grande quantité, à hauteur d'homme. C'est l'opération qui transforme une matière manipulable en une poussière qui compte.",
    facts: [
      { label: "Ce que l'opération génère", value: "Poussière fine du substrat et de l'abrasif" },
      { label: "Pourquoi elle compte", value: "La granulométrie fine détermine le comportement de déflagration" },
      { label: "Substrats courants", value: "Bois, métal, composites, apprêts et revêtements" },
      { label: "Contrôle attendu", value: "Captation à la source sur l'outil, plus récupération des accumulations" },
    ],
    overview: [
      "Le danger dépend entièrement du substrat. Le ponçage du bois produit une poussière combustible classée cancérogène par le CIRC. Le ponçage du métal produit des fines conductrices et parfois réactives. Le ponçage d'apprêts et de peintures anciennes peut libérer du plomb, régi par sa propre norme.",
      "Ce que le ponçage a de constant, c'est la position : la poussière est générée dans la zone respiratoire de l'opérateur. La captation directement sur l'outil est donc plus efficace que toute ventilation générale.",
    ],
    risksHeading: "Ce qui compte au ponçage",
    risks: [
      "Fraction fine générée en quantité, dans la zone respiratoire de l'opérateur.",
      "Danger déterminé par le substrat : bois cancérogène, métal conducteur, plomb dans les peintures anciennes.",
      "Accumulation rapide sur les surfaces environnantes et en hauteur.",
      "Charges statiques dans le ponçage à sec.",
      "Peintures et apprêts anciens pouvant contenir du plomb.",
      "Colmatage des filtres par une poussière fine en grand volume.",
    ],
    solutions: [
      "Captation directement sur l'outil de ponçage : le contrôle le plus efficace.",
      "Récupération par aspirateur conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 %, indispensable pour une poussière aussi fine.",
      "Vérification de la présence de plomb avant de poncer des revêtements anciens.",
      "Grande capacité de collecte pour le volume produit.",
      "Élimination du soufflage à l'air comprimé sur les surfaces poncées.",
    ],
    faqs: [
      {
        question: "Pourquoi la poussière de ponçage est-elle plus dangereuse que les copeaux ?",
        answer:
          "Parce que la granulométrie détermine le comportement. Le ponçage produit la fraction fine — celle qui reste en suspension, voyage, se dépose en hauteur et peut déflagrer dans un nuage. Les copeaux et les retailles de la même matière ne font aucune de ces choses.",
      },
      {
        question: "Le danger dépend-il du substrat ?",
        answer:
          "Entièrement. Le ponçage du bois produit une poussière combustible classée cancérogène pour l'humain par le CIRC. Le ponçage du métal produit des fines conductrices, parfois réactives. Le ponçage de peintures anciennes peut libérer du plomb, régi par sa propre norme avec une limite d'exposition basse.",
      },
      {
        question: "Faut-il vérifier la présence de plomb avant de poncer ?",
        answer:
          "Sur des revêtements anciens, oui. La peinture au plomb a été largement utilisée, et le ponçage est la manière la plus efficace de la transformer en poussière respirable. La vérification précède le travail plutôt que de le suivre.",
      },
      {
        question: "Pourquoi la captation sur l'outil plutôt qu'une ventilation générale ?",
        answer:
          "Parce que le ponçage génère la poussière dans la zone respiratoire de l'opérateur. Capter à quelques centimètres de la source retire la poussière avant qu'elle n'atteigne les voies respiratoires, ce qu'aucune ventilation générale ne peut égaler.",
      },
    ],
    enPath: "/applications/sanding",
  },
];
