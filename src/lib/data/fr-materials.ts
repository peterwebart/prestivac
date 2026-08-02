/**
 * Québec French material guides.
 *
 * Sequenced by search volume rather than alphabetically: amidon (starch) carries
 * the largest impression volume in the keyword set, farine (flour) the largest
 * question-intent cluster, aluminium the metal-dust cluster.
 *
 * FAQ questions are phrased the way people actually search in French —
 * "la farine est-elle inflammable ?" — so they can earn featured snippets and be
 * lifted by generative engines, the same tactic used on the English guides.
 *
 * Hazard and regulatory language is translated literally, never paraphrased.
 */

export type FrMaterialGuide = {
  slug: string;
  name: string;
  group: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  facts: { label: string; value: string }[];
  overview: string[];
  risksHeading: string;
  risks: string[];
  solutions: string[];
  faqs: { question: string; answer: string }[];
  /** English counterpart, for hreflang and the language switch. */
  enPath: string;
  /**
   * Optional cross-links. Industry guides use this to route into the translated
   * material and application guides instead of restating their content, which
   * keeps sector pages from competing with the guides they draw on.
   */
  related?: { label: string; href: string }[];
};

export const FR_MATERIALS: FrMaterialGuide[] = [
  {
    slug: "poussiere-de-calcium",
    name: "Poussière de calcium",
    group: "Poussières métalliques",
    metaTitle: "Le calcium est-il inflammable ? Métal, carbonate",
    metaDescription:
      "Le calcium métallique est réactif et s'enflamme comme fines en réagissant avec l'eau. Le carbonate de calcium ne brûle pas du tout. Savoir lequel on manipule est la première question.",
    intro:
      "Cela dépend entièrement duquel il s'agit, et la distinction est la plus importante de cette page. Le calcium métallique est un métal alcalino-terreux réactif qui s'enflamme facilement sous forme de fines, brûle à haute température et réagit avec l'eau en libérant de l'hydrogène.",
    facts: [
      { label: "Calcium métallique", value: "Réactif — s'enflamme comme fines, réagit avec l'eau en libérant de l'hydrogène" },
      { label: "Carbonate de calcium", value: "Minéral non combustible — calcaire, craie, marbre broyé : ne brûle pas" },
      { label: "Chaux vive et chaux hydratée", value: "Caustiques, réaction exothermique avec l'eau, mais non combustibles" },
      { label: "Première question à poser", value: "Duquel s'agit-il ? La réponse change tout" },
    ],
    overview: [
      "Le carbonate de calcium — ce que la plupart des gens rencontrent sous forme de calcaire, de craie ou de marbre broyé — est un minéral non combustible qui ne brûle pas du tout. L'oxyde et l'hydroxyde de calcium, soit la chaux vive et la chaux hydratée, sont caustiques et réagissent de façon exothermique avec l'eau, mais ne sont pas des combustibles.",
      "Autrement dit, trois matières portant le même nom se comportent de trois manières différentes. Identifier laquelle circule dans votre procédé précède toute décision d'équipement.",
    ],
    risksHeading: "Trois matières, trois comportements",
    risks: [
    "Calcium métallique : fines inflammables, réaction avec l'eau libérant de l'hydrogène.",
    "Carbonate de calcium : non combustible, aucun danger de déflagration.",
    "Chaux vive et hydratée : caustiques, exothermiques à l'eau, non combustibles.",
    "Confusion fréquente entre les trois, menant à un équipement inadapté.",
    "Caustiques : les chaux causent des brûlures et des lésions oculaires.",
    "Poussière minérale respirable pour les formes non combustibles.",
    ],
    solutions: [
    "Identifier la forme exacte avant de choisir un équipement — c'est la décision déterminante.",
    "Pour le calcium métallique : équipement conducteur, mis à la terre, dispositions de Classe D.",
    "Pour le carbonate : récupération à filtration retenue, danger sanitaire et non incendie.",
    "Pour les chaux : protection contre les brûlures et prudence avec toute méthode humide.",
    "Élimination du soufflage à l'air comprimé dans tous les cas.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Le calcium est-il inflammable ?",
        answer:
          "Le calcium métallique l'est : c'est un métal alcalino-terreux réactif qui s'enflamme facilement sous forme de fines, brûle à haute température et réagit avec l'eau en libérant de l'hydrogène. Le carbonate de calcium, que la plupart des gens rencontrent sous forme de calcaire, de craie ou de marbre broyé, est un minéral non combustible qui ne brûle pas du tout. L'oxyde et l'hydroxyde de calcium — chaux vive et chaux hydratée — sont caustiques et réagissent de façon exothermique avec l'eau, mais ne sont pas des combustibles. Savoir duquel il s'agit précède toute décision.",
      },
      {
        question: "Le carbonate de calcium est-il combustible ?",
        answer:
          "Non. C'est un minéral et il ne brûle pas. Son danger est sanitaire — poussière minérale respirable — et non un danger de déflagration, quelle que soit sa finesse.",
      },
      {
        question: "La chaux est-elle dangereuse ?",
        answer:
          "La chaux vive et la chaux hydratée sont caustiques : elles causent des brûlures cutanées et des lésions oculaires, et la chaux vive réagit de façon exothermique avec l'eau. Elles ne sont pas des combustibles, mais elles exigent une protection et de la prudence avec toute méthode humide.",
      },
      {
        question: "Comment savoir quelle forme circule dans mon procédé ?",
        answer:
          "En demandant la fiche de données de sécurité et la composition au fournisseur. Les trois formes portent le mot calcium et se comportent de trois manières différentes ; deviner mène à un équipement inadapté.",
      },
    ],
    enPath: "/materials/calcium-dust",
  },
  {
    slug: "poussiere-d-arsenic",
    name: "Poussière d'arsenic",
    group: "Poussières métalliques",
    metaTitle: "L'arsenic est-il toxique ? Norme OSHA et",
    metaDescription:
      "L'arsenic inorganique et ses composés sont classés cancérogènes pour l'humain par le CIRC et régis par la norme OSHA 29 CFR 1910.1018.",
    intro:
      "Oui. L'arsenic inorganique et ses composés sont classés cancérogènes pour l'humain par le CIRC, avec des cancers du poumon et de la peau parmi les effets documentés, en plus d'effets systémiques liés à l'exposition chronique.",
    facts: [
      { label: "Type de matière", value: "Métalloïde toxique — poussière et composés" },
      { label: "Classification", value: "Cancérogène pour l'humain (CIRC)" },
      { label: "Norme applicable", value: "OSHA arsenic inorganique, 29 CFR 1910.1018" },
      { label: "Danger dominant", value: "Toxicité, non la combustibilité" },
    ],
    overview: [
      "OSHA régit l'arsenic inorganique par une norme substance dédiée, le 29 CFR 1910.1018, qui impose la surveillance de l'exposition, des zones réglementées et des exigences d'hygiène.",
      "L'arsenic n'est ni recherché ni redouté comme combustible : c'est la toxicité qui détermine entièrement la manière de le manipuler et de nettoyer. Là où une norme substance s'applique, le balayage à sec n'est pas une méthode acceptable.",
    ],
    risksHeading: "Pourquoi l'arsenic exige des méthodes contenues",
    risks: [
    "Cancérogène pour l'humain, avec cancers du poumon et de la peau documentés.",
    "Effets systémiques liés à l'exposition chronique.",
    "Norme substance dédiée imposant surveillance, zones réglementées et hygiène.",
    "Sources industrielles : métallurgie, semi-conducteurs, pigments, traitement du bois ancien.",
    "Balayage à sec exclu là où la norme s'applique.",
    "Contamination croisée par les vêtements et les outils.",
    ],
    solutions: [
    "Récupération par aspirateur à filtration absolue HEPA 99,99 %.",
    "Élimination du balayage à sec et du soufflage à l'air comprimé.",
    "Collecte et élimination scellées, traitées comme un déchet réglementé.",
    "Équipement dédié maintenu dans la zone réglementée et étiqueté.",
    "Exigences d'hygiène soutenues : lavage, vêtements de travail, pas de repas en zone.",
    "Consignation des fréquences de nettoyage dans le dossier de conformité.",
    ],
    faqs: [
      {
        question: "L'arsenic est-il toxique ?",
        answer:
          "Oui. L'arsenic inorganique et ses composés sont classés cancérogènes pour l'humain par le CIRC, avec des cancers du poumon et de la peau parmi les effets documentés, en plus d'effets systémiques liés à l'exposition chronique. OSHA le régit par une norme substance dédiée, le 29 CFR 1910.1018, qui impose la surveillance de l'exposition, des zones réglementées et des exigences d'hygiène.",
      },
      {
        question: "L'arsenic est-il inflammable ?",
        answer:
          "L'arsenic n'est ni recherché ni redouté comme combustible. C'est la toxicité qui détermine entièrement la manière de le manipuler, et présenter l'arsenic d'abord comme un danger d'incendie passerait à côté de l'essentiel.",
      },
      {
        question: "Où l'arsenic apparaît-il en industrie ?",
        answer:
          "En métallurgie et en affinage, dans la fabrication de semi-conducteurs, dans certains pigments et verres, et dans le bois traité ancien. Le travail sur bois traité au CCA est une source d'exposition souvent négligée.",
      },
      {
        question: "Peut-on balayer la poussière d'arsenic ?",
        answer:
          "Non. Là où une norme substance s'applique, le balayage à sec remet un cancérogène réglementé en suspension et n'est pas une méthode acceptable. La récupération à filtration HEPA avec élimination scellée est le contrôle attendu.",
      },
    ],
    enPath: "/materials/arsenic-dust",
  },
  {
    slug: "poussiere-de-laiton-et-de-bronze",
    name: "Poussière de laiton et de bronze",
    group: "Poussières métalliques",
    metaTitle: "Le laiton est-il toxique ? Plomb, zinc et fièvre",
    metaDescription:
      "Le laiton et le bronze sont des alliages de cuivre : les dangers viennent de ce à quoi le cuivre est allié — zinc, et souvent plomb dans les laitons de décolletage.",
    intro:
      "La question mérite d'être reformulée : le laiton et le bronze sont des alliages de cuivre, et les dangers viennent de ce à quoi le cuivre est allié plutôt que du cuivre lui-même.",
    facts: [
      { label: "Type de matière", value: "Alliages de cuivre — poussière métallique conductrice" },
      { label: "Danger 1", value: "Zinc : fumées d'oxyde de zinc au travail à chaud, fièvre des fondeurs" },
      { label: "Danger 2", value: "Plomb : fréquent dans les laitons de décolletage, régi par 1910.1025" },
      { label: "Démarche", value: "Demander la composition de l'alliage avant d'usiner un stock inconnu" },
    ],
    overview: [
      "Le zinc du laiton produit des fumées d'oxyde de zinc lorsqu'il est travaillé à chaud, cause classique de la fièvre des fondeurs. Et plusieurs laitons de décolletage contiennent du plomb, ajouté pour l'usinabilité, régi par sa propre norme OSHA avec une limite d'exposition basse.",
      "C'est pourquoi la démarche pratique est de demander la composition de l'alliage au fournisseur avant d'usiner un stock inconnu : rien dans l'apparence d'une pièce en laiton n'indique si elle contient du plomb.",
    ],
    risksHeading: "Ce que contient réellement votre laiton",
    risks: [
    "Zinc : fumées d'oxyde de zinc au travail à chaud, causant la fièvre des fondeurs.",
    "Plomb fréquent dans les laitons de décolletage, avec une limite d'exposition basse.",
    "Rien dans l'apparence d'une pièce n'indique sa teneur en plomb.",
    "Conductivité de la poussière métallique, pertinente pour l'équipement électrique.",
    "Copeaux et particules abrasifs pour l'équipement de récupération.",
    "Valeur de rebut perdue par mélange des alliages.",
    ],
    solutions: [
    "Vérification de la composition de l'alliage auprès du fournisseur avant usinage.",
    "Filtration absolue HEPA 99,99 % là où du plomb peut être présent.",
    "Captation à la source au travail à chaud, pour les fumées d'oxyde de zinc.",
    "Équipement dédié et collecte scellée là où la norme sur le plomb s'applique.",
    "Ségrégation par alliage pour préserver la valeur de rebut.",
    "Élimination du soufflage à l'air comprimé aux machines-outils.",
    ],
    faqs: [
      {
        question: "Le laiton est-il toxique ?",
        answer:
          "La question mérite d'être reformulée : le laiton et le bronze sont des alliages de cuivre, et les dangers viennent de ce à quoi le cuivre est allié. Le zinc produit des fumées d'oxyde de zinc au travail à chaud, cause classique de la fièvre des fondeurs, et plusieurs laitons de décolletage contiennent du plomb, régi par sa propre norme OSHA avec une limite d'exposition basse. Demandez la composition de l'alliage avant d'usiner un stock inconnu.",
      },
      {
        question: "Comment savoir si un laiton contient du plomb ?",
        answer:
          "En demandant la composition au fournisseur. Rien dans l'apparence d'une pièce en laiton ne l'indique, et le plomb est ajouté précisément parce qu'il améliore l'usinabilité — donc il est courant dans les laitons de décolletage.",
      },
      {
        question: "Qu'est-ce que la fièvre des fondeurs ?",
        answer:
          "Une réaction aiguë de type grippal causée par l'inhalation de fumées métalliques, le plus souvent des fumées d'oxyde de zinc issues du travail à chaud du laiton ou du soudage d'acier galvanisé. Elle se résorbe, mais elle signale une surexposition et devrait entraîner une révision des contrôles.",
      },
      {
        question: "Comment récupérer la poussière de laiton ?",
        answer:
          "Avec une filtration absolue là où du plomb peut être présent, une captation à la source au travail à chaud, un équipement conducteur et mis à la terre, et une ségrégation par alliage. Là où la norme sur le plomb s'applique, l'équipement doit être dédié et la collecte scellée.",
      },
    ],
    enPath: "/materials/brass-bronze-dust",
  },
  {
    slug: "poussiere-de-the",
    name: "Poussière de thé",
    group: "Poussières alimentaires",
    metaTitle: "La poussière de thé est-elle combustible ?",
    metaDescription:
      "La poussière et les fines de thé produites par le broyage, le tamisage et l'ensachage sont une poussière organique combustible.",
    intro:
      "Oui. Le thé est une matière végétale séchée, et la poussière et les fines produites par le broyage, le tamisage, le mélange et l'ensachage constituent une poussière organique combustible.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (matière végétale séchée)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G" },
      { label: "Où elle est produite", value: "Broyage, tamisage, mélange, ensachage" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
    ],
    overview: [
      "Le thé est extrêmement léger, et ses fines se mettent en suspension et voyagent facilement dans les conduits d'aspiration et sur les surfaces en hauteur. Les lignes d'ensachage à grande vitesse produisent la fraction la plus fine.",
      "Comme pour les autres poussières alimentaires, le nettoyage doit satisfaire les registres de salubrité autant que la prévention des incendies, ce qu'un seul passage documenté peut accomplir.",
    ],
    risksHeading: "Ce qui compte avec le thé",
    risks: [
    "Poussière organique combustible produite au broyage et à l'ensachage.",
    "Légèreté extrême : les fines voyagent dans les conduits et se déposent en hauteur.",
    "Lignes d'ensachage à grande vitesse produisant la fraction la plus fine.",
    "Accumulation hors de vue dans les conduits d'aspiration.",
    "Charges statiques dans le travail de matière sèche.",
    "Chevauchement avec les exigences de salubrité alimentaire.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé, qui met la poussière en suspension.",
    "Nettoyage à fréquence définie des surfaces en hauteur et des carters de machines.",
    "Retrait de la matière récupérée du bâtiment plutôt que de la laisser sur place.",
    ],
    faqs: [
      {
        question: "La poussière de thé est-elle combustible ?",
        answer:
          "Oui. Le thé est une matière végétale séchée, et la poussière et les fines produites par le broyage, le tamisage, le mélange et l'ensachage constituent une poussière organique combustible. La NFPA 660 s'applique.",
      },
      {
        question: "Où s'accumule la poussière de thé ?",
        answer:
          "Dans les conduits d'aspiration et sur les surfaces en hauteur, parce que les fines de thé sont extrêmement légères et voyagent facilement. Les lignes d'ensachage à grande vitesse en produisent le plus.",
      },
      {
        question: "Peut-on souffler les lignes d'ensachage ?",
        answer:
          "Non. Le soufflage met une poussière combustible légère en suspension et la déplace vers des conduits et des surfaces en hauteur difficiles d'accès. La récupération sous vide la retire du bâtiment.",
      },
      {
        question: "Un seul nettoyage peut-il servir aux deux exigences ?",
        answer:
          "Oui, et c'est l'approche efficace : un passage documenté avec un appareil à filtration retenue sert à la fois le programme de poussières combustibles et les registres de salubrité alimentaire.",
      },
    ],
    enPath: "/materials/tea-dust",
  },
  {
    slug: "poussiere-de-malt",
    name: "Poussière de malt",
    group: "Poussières agricoles",
    metaTitle: "La poussière de malt est-elle combustible ?",
    metaDescription:
      "La poussière de malt issue du concassage, du transport et du brassage est une poussière organique combustible riche en amidon.",
    intro:
      "Oui. Le malt est de l'orge germée et séchée, et sa poussière — produite au concassage, au transport et au dépoussiérage — est une poussière organique combustible riche en amidon.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible riche en amidon" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G" },
      { label: "Où elle est produite", value: "Réception, transport, concassage, dépoussiérage" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
    ],
    overview: [
      "Le concassage est l'opération qui compte : il produit la fraction fine dans une enceinte contenant des rouleaux, des entraînements et des roulements — la géométrie classique d'une déflagration.",
      "Les brasseries et distilleries de toutes tailles manipulent du malt, et la salle de concassage est souvent l'espace le moins bien ventilé du bâtiment. Le contrôle des accumulations y est la priorité.",
    ],
    risksHeading: "Ce qui compte en brasserie et distillerie",
    risks: [
    "Poussière combustible riche en amidon produite au concassage.",
    "Enceinte de concassage combinant matière fine, confinement et entraînements.",
    "Salle de concassage souvent la moins bien ventilée du bâtiment.",
    "Accumulation en hauteur et dans les conduits de transport.",
    "Charges statiques dans le transport pneumatique du malt.",
    "Chevauchement avec les exigences de salubrité et de qualité.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé, qui met la poussière en suspension.",
    "Nettoyage à fréquence définie des surfaces en hauteur et des carters de machines.",
    "Retrait de la matière récupérée du bâtiment plutôt que de la laisser sur place.",
    ],
    faqs: [
      {
        question: "La poussière de malt est-elle combustible ?",
        answer:
          "Oui. Le malt est de l'orge germée et séchée, et sa poussière — produite au concassage, au transport et au dépoussiérage — est une poussière organique combustible riche en amidon. La NFPA 660 s'applique.",
      },
      {
        question: "Où le danger se concentre-t-il ?",
        answer:
          "À la salle de concassage. Le concassage produit la fraction fine dans une enceinte contenant des rouleaux, des entraînements et des roulements, et c'est souvent l'espace le moins bien ventilé du bâtiment.",
      },
      {
        question: "Les petites brasseries sont-elles concernées ?",
        answer:
          "Le mécanisme ne dépend pas de l'échelle : une salle de concassage confinée avec de la poussière de malt accumulée et des entraînements mécaniques réunit les mêmes conditions dans un local plus petit. Le contrôle des accumulations reste la mesure principale.",
      },
      {
        question: "Peut-on balayer la poussière de malt ?",
        answer:
          "Le balayage soulève les fines et laisse les accumulations en hauteur et dans les conduits. La récupération sous vide avec un appareil mis à la terre et à filtration retenue les retire du bâtiment.",
      },
    ],
    enPath: "/materials/malt-dust",
  },

  {
    slug: "poussiere-de-mais",
    name: "Poussière de maïs",
    group: "Poussières agricoles",
    metaTitle: "La poussière de maïs est-elle combustible ?",
    metaDescription:
      "La poussière de maïs est une poussière organique combustible riche en amidon. Dangers en meunerie sèche et humide et récupération sécuritaire.",
    intro:
      "Oui. Le maïs est une céréale et sa poussière est une poussière organique combustible, riche en amidon — l'amidon de maïs étant précisément la matière servant de référence dans les essais d'explosibilité en laboratoire.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible riche en amidon" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G" },
      { label: "Où elle est produite", value: "Réception, séchage, mouture, tamisage, ensachage" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
    ],
    overview: [
      "La transformation du maïs combine les dangers du grain et de l'amidon : la manutention produit de la poussière de céréale aux points de transfert, et la mouture produit une fraction fine d'amidon qui se met en suspension avec une facilité remarquable.",
      "Les séchoirs ajoutent une chaleur soutenue à proximité de matière fine accumulée, ce qui fait du contrôle des accumulations autour de ces zones la priorité.",
    ],
    risksHeading: "Ce qui compte avec le maïs",
    risks: [
    "Poussière de céréale combustible produite à chaque transfert.",
    "Fraction fine d'amidon issue de la mouture, très facilement mise en suspension.",
    "Chaleur soutenue des séchoirs près de matière accumulée.",
    "Accumulation en hauteur alimentant un événement secondaire.",
    "Combustion lente possible dans la matière accumulée.",
    "Chevauchement avec les exigences de salubrité alimentaire.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé, qui met la poussière en suspension.",
    "Nettoyage à fréquence définie des surfaces en hauteur et des carters de machines.",
    "Retrait de la matière récupérée du bâtiment plutôt que de la laisser sur place.",
    ],
    faqs: [
      {
        question: "La poussière de maïs est-elle combustible ?",
        answer:
          "Oui. Le maïs est une céréale et sa poussière est une poussière organique combustible riche en amidon. L'amidon de maïs est d'ailleurs la matière servant de référence dans les essais d'explosibilité en laboratoire, ce qui donne une idée du comportement de la fraction fine. La NFPA 660 s'applique.",
      },
      {
        question: "Où le danger se concentre-t-il en amidonnerie ?",
        answer:
          "Au broyage et à la mouture, qui produisent la fraction la plus fine, et autour des séchoirs, qui ajoutent une chaleur soutenue près de matière accumulée. Les points de transfert produisent la poussière de céréale plus grossière.",
      },
      {
        question: "Peut-on balayer la poussière de maïs ?",
        answer:
          "Le balayage soulève les fines et n'atteint pas les accumulations en hauteur qui alimentent réellement un événement secondaire. La récupération sous vide avec filtration retenue les retire du bâtiment.",
      },
      {
        question: "Faut-il une filtration absolue ?",
        answer:
          "Elle sert deux fins : retenir la fraction respirable pendant le nettoyage, et éviter de renvoyer la poussière fine dans un local alimentaire que l'on vient de nettoyer.",
      },
    ],
    enPath: "/materials/corn-dust",
  },
  {
    slug: "poussiere-d-etain",
    name: "Poussière d'étain",
    group: "Poussières métalliques",
    metaTitle: "L'étain est-il inflammable ? Poussière et fumées",
    metaDescription:
      "L'étain massif ne s'enflamme pas facilement ; la poudre fine est évaluée comme une poussière métallique combustible. Fumées de brasage et récupération.",
    intro:
      "L'étain massif ne s'enflamme pas facilement. La poudre d'étain finement divisée est évaluée comme une poussière métallique combustible et doit être caractérisée par essai plutôt que présumée inerte, comme pour les autres métaux moins réactifs.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique conductrice, réactivité plus faible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E" },
      { label: "Sources courantes", value: "Brasage, alliages, revêtements d'étamage" },
      { label: "Danger courant", value: "Fumées de brasage et particules respirables" },
    ],
    overview: [
      "L'étain se situe à l'extrémité moins réactive des poussières métalliques, mais la poussière reste conductrice — une accumulation peut ponter des connexions électriques.",
      "En pratique, la préoccupation dominante est le brasage : les fumées de brasage contiennent des particules métalliques et, selon le flux utilisé, des produits de décomposition irritants. Les alliages de brasage anciens peuvent contenir du plomb, régi par sa propre norme.",
    ],
    risksHeading: "Ce qui compte avec l'étain",
    risks: [
    "Conductivité de la poussière métallique, pertinente pour l'équipement électrique.",
    "Combustibilité de la poudre fine à caractériser par essai.",
    "Fumées de brasage contenant particules métalliques et produits de flux.",
    "Alliages de brasage anciens pouvant contenir du plomb.",
    "Particules respirables générées par l'usinage et le polissage.",
    "Valeur de rebut perdue par mélange des métaux.",
    ],
    solutions: [
    "Équipement de récupération conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % là où des particules respirables sont générées.",
    "Captation à la source au meulage, au soudage et à l'usinage.",
    "Ségrégation par métal pour préserver la valeur de rebut et simplifier l'élimination.",
    "Élimination du soufflage à l'air comprimé aux machines-outils.",
    "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "L'étain est-il inflammable ?",
        answer:
          "L'étain massif ne s'enflamme pas facilement. La poudre d'étain finement divisée est évaluée comme une poussière métallique combustible et doit être caractérisée par essai plutôt que présumée inerte. La poussière demeure par ailleurs conductrice, ce qui compte pour l'équipement électrique.",
      },
      {
        question: "Le brasage à l'étain est-il dangereux ?",
        answer:
          "Les fumées de brasage contiennent des particules métalliques et, selon le flux, des produits de décomposition irritants. La captation à la source au poste de brasage est le contrôle attendu.",
      },
      {
        question: "Les alliages de brasage contiennent-ils du plomb ?",
        answer:
          "Les alliages anciens en contiennent fréquemment, et le plomb est régi par sa propre norme OSHA avec une limite d'exposition basse. Vérifier la composition avant de travailler un stock inconnu est la démarche prudente.",
      },
      {
        question: "Comment récupérer la poussière d'étain ?",
        answer:
          "Par aspiration avec un circuit conducteur et mis à la terre, et une filtration retenue là où des particules respirables sont produites. Le soufflage à l'air comprimé est à exclure aux machines-outils.",
      },
    ],
    enPath: "/materials/tin-dust",
  },
  {
    slug: "poussiere-de-cobalt",
    name: "Poussière de cobalt",
    group: "Poussières métalliques",
    metaTitle: "La poussière de cobalt est-elle combustible ?",
    metaDescription:
      "La poudre fine de cobalt est une poussière métallique combustible, mais le cobalt est surtout contrôlé pour sa toxicité — la maladie pulmonaire des métaux durs et une classification cancérogène.",
    intro:
      "La poudre fine de cobalt est évaluée comme une poussière métallique combustible. Mais comme pour le nickel, la raison dominante du contrôle strict de la poussière de cobalt est la toxicité plutôt que l'incendie.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique conductrice, également toxique" },
      { label: "Danger dominant", value: "Toxicité respiratoire — maladie pulmonaire des métaux durs" },
      { label: "Classification", value: "Les composés du cobalt font l'objet d'une classification cancérogène" },
      { label: "Secteurs", value: "Métaux durs et carbures, batteries, superalliages, pigments" },
    ],
    overview: [
      "Le cobalt est un sensibilisant respiratoire et cutané, et l'exposition à la poussière de métaux durs — cobalt combiné au carbure de tungstène — est associée à la maladie pulmonaire des métaux durs, une fibrose interstitielle documentée dans les ateliers d'affûtage et de fabrication de carbures.",
      "C'est le meulage et l'affûtage des outils en carbure qui produisent l'exposition la plus courante, souvent dans de petits ateliers où la captation à la source n'est pas systématique.",
    ],
    risksHeading: "Ce qui compte avec le cobalt",
    risks: [
    "Maladie pulmonaire des métaux durs associée à la poussière cobalt-carbure.",
    "Sensibilisation respiratoire et cutanée documentée.",
    "Classification cancérogène des composés du cobalt.",
    "Exposition concentrée à l'affûtage et au meulage des carbures.",
    "Conductivité de la poussière métallique.",
    "Combustibilité de la poudre fine à caractériser par essai.",
    ],
    solutions: [
    "Équipement de récupération conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % là où des particules respirables sont générées.",
    "Captation à la source au meulage, au soudage et à l'usinage.",
    "Ségrégation par métal pour préserver la valeur de rebut et simplifier l'élimination.",
    "Élimination du soufflage à l'air comprimé aux machines-outils.",
    "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "La poussière de cobalt est-elle combustible ?",
        answer:
          "La poudre fine de cobalt est évaluée comme une poussière métallique combustible et devrait être testée plutôt que présumée. Mais la raison dominante du contrôle strict de la poussière de cobalt est la toxicité : le cobalt est un sensibilisant respiratoire et cutané, ses composés font l'objet d'une classification cancérogène, et la poussière de métaux durs est associée à la maladie pulmonaire des métaux durs.",
      },
      {
        question: "Qu'est-ce que la maladie pulmonaire des métaux durs ?",
        answer:
          "Une fibrose interstitielle associée à l'exposition à la poussière de métaux durs — cobalt combiné au carbure de tungstène. Elle est documentée dans les ateliers d'affûtage et de fabrication de carbures, où le meulage produit une poussière fine mixte.",
      },
      {
        question: "Où l'exposition se produit-elle ?",
        answer:
          "Principalement à l'affûtage et au meulage des outils en carbure, souvent dans de petits ateliers où la captation à la source n'est pas systématique. La fabrication de batteries et de superalliages constitue l'autre voie.",
      },
      {
        question: "Faut-il une filtration absolue pour le cobalt ?",
        answer:
          "C'est la toxicité qui gouverne la spécification. Pour une poussière associée à une fibrose pulmonaire et portant une classification cancérogène, une filtration retenue est la fonction même de l'appareil.",
      },
    ],
    enPath: "/materials/cobalt-dust",
  },
  {
    slug: "poussiere-de-manganese",
    name: "Poussière de manganèse",
    group: "Poussières métalliques",
    metaTitle: "Pourquoi le manganèse est-il préoccupant ?",
    metaDescription:
      "Le manganèse est une neurotoxine : la surexposition chronique cause le manganisme, une atteinte neurologique. Il est présent dans presque tous les aciers et consommables de soudage.",
    intro:
      "Le manganèse est une neurotoxine, et la surexposition chronique cause le manganisme — une atteinte neurologique sérieuse dont le tableau ressemble à celui de la maladie de Parkinson.",
    facts: [
      { label: "Type de matière", value: "Poussière et fumées métalliques neurotoxiques" },
      { label: "Maladie associée", value: "Manganisme — atteinte neurologique évoquant la maladie de Parkinson" },
      { label: "Voie d'exposition principale", value: "Fumées de soudage" },
      { label: "Particularité", value: "Présent dans presque tous les aciers et consommables de soudage" },
    ],
    overview: [
      "Ce qui rend le manganèse particulièrement important à gérer est sa banalité : il est présent dans presque tous les aciers et dans les consommables de soudage, de sorte que l'exposition est courante dans le travail des métaux ordinaire plutôt que confinée à un procédé exotique.",
      "L'exposition survient principalement par les fumées de soudage. Un atelier qui soude de l'acier au quotidien génère des fumées contenant du manganèse, que rien dans la description du travail ne signale.",
    ],
    risksHeading: "Pourquoi le manganèse mérite attention",
    risks: [
    "Neurotoxine : la surexposition chronique cause le manganisme.",
    "Tableau clinique évoquant la maladie de Parkinson, avec atteinte durable.",
    "Présent dans presque tous les aciers et consommables de soudage.",
    "Exposition courante dans le travail des métaux ordinaire, non exotique.",
    "Fumées de soudage comme voie dominante.",
    "Rien dans la description du travail ne signale la présence de manganèse.",
    ],
    solutions: [
    "Captation à la source au soudage : le contrôle le plus efficace pour les fumées.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Récupération sous vide des accumulations plutôt que balayage.",
    "Ventilation adéquate des postes de soudage, en complément de la captation.",
    "Élimination du soufflage à l'air comprimé dans les ateliers de soudage.",
    "Consignation des fréquences de nettoyage dans le programme d'hygiène industrielle.",
    ],
    faqs: [
      {
        question: "Pourquoi le manganèse est-il préoccupant ?",
        answer:
          "Le manganèse est une neurotoxine, et la surexposition chronique cause le manganisme — une atteinte neurologique sérieuse dont le tableau ressemble à celui de la maladie de Parkinson. Ce qui le rend particulièrement important à gérer est sa banalité : il est présent dans presque tous les aciers et consommables de soudage, de sorte que l'exposition est courante dans le travail des métaux ordinaire plutôt que confinée à un procédé exotique.",
      },
      {
        question: "Comment l'exposition se produit-elle ?",
        answer:
          "Principalement par les fumées de soudage. Un atelier qui soude de l'acier au quotidien génère des fumées contenant du manganèse, et rien dans la description du travail ne le signale. Le meulage et l'usinage produisent également des particules.",
      },
      {
        question: "Le manganèse est-il combustible ?",
        answer:
          "La poudre fine de manganèse est évaluée comme une poussière métallique combustible et devrait être testée. Mais la raison du contrôle est neurologique : c'est l'exposition, non l'incendie, qui détermine les mesures.",
      },
      {
        question: "Quel est le contrôle le plus efficace ?",
        answer:
          "La captation à la source au poste de soudage, complétée par une ventilation adéquate. Pour les accumulations, la récupération sous vide avec filtration retenue plutôt que le balayage, qui remet la fraction respirable en suspension.",
      },
    ],
    enPath: "/materials/manganese-dust",
  },
  {
    slug: "poussiere-de-plastique",
    name: "Poussière de plastique",
    group: "Poussières de plastiques et caoutchouc",
    metaTitle: "La poussière de plastique est-elle combustible ?",
    metaDescription:
      "La plupart des poussières de polymères sont combustibles et relèvent du Groupe G. Les plastiques en combustion produisent une fumée dense et toxique.",
    intro:
      "Oui. La plupart des poussières de polymères sont des poussières organiques combustibles, produites par le meulage, la coupe, le perçage et la granulation, et elles relèvent de la Classe II, Groupe G comme poussières non conductrices.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (polymères)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière non conductrice)" },
      { label: "Où elle est produite", value: "Meulage, coupe, perçage, granulation, recyclage" },
      { label: "Danger additionnel", value: "Fumée dense et toxique en cas de combustion" },
    ],
    overview: [
      "Les plastiques en combustion produisent également une fumée dense et toxique, de sorte qu'un incendie de poussière de plastique crée un problème d'atmosphère en plus du feu lui-même.",
      "La variété des polymères impose de caractériser sa propre matière : la granulométrie, les charges et les additifs ignifuges changent le comportement, et une résine ne se comporte pas comme une autre.",
    ],
    risksHeading: "Ce qui compte avec la poussière de plastique",
    risks: [
    "Poussière organique combustible produite à chaque opération mécanique.",
    "Fumée dense et toxique en cas de combustion, créant un problème d'atmosphère.",
    "Comportement variable selon le polymère, les charges et les additifs.",
    "Accumulation en hauteur de la fraction fine.",
    "Charges statiques importantes dans les polymères secs.",
    "Volume élevé dans les opérations de granulation et de recyclage.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé, qui met la poussière en suspension.",
    "Nettoyage à fréquence définie des surfaces en hauteur et des carters de machines.",
    "Retrait de la matière récupérée du bâtiment plutôt que de la laisser sur place.",
    ],
    faqs: [
      {
        question: "La poussière de plastique est-elle combustible ?",
        answer:
          "Oui. La plupart des poussières de polymères sont des poussières organiques combustibles, produites par le meulage, la coupe, le perçage et la granulation, et elles relèvent de la Classe II, Groupe G comme poussières non conductrices. Les plastiques en combustion produisent aussi une fumée dense et toxique, de sorte qu'un incendie crée un problème d'atmosphère en plus du feu.",
      },
      {
        question: "Tous les plastiques se comportent-ils pareillement ?",
        answer:
          "Non, et c'est pourquoi il faut caractériser sa propre matière. La granulométrie, les charges minérales et les additifs ignifuges changent le comportement, de sorte qu'une résine ne se comporte pas comme une autre. L'essai porte sur la poussière réellement produite par votre procédé.",
      },
      {
        question: "L'électricité statique est-elle un problème ?",
        answer:
          "Oui, particulièrement : les polymères secs accumulent des charges facilement dans les boyaux et le transport pneumatique. Un circuit de récupération conducteur, mis à la terre et équipotentiel n'est pas un raffinement dans ce contexte.",
      },
      {
        question: "Comment récupérer la poussière de plastique ?",
        answer:
          "Par aspiration avec un circuit conducteur et mis à la terre, une filtration retenue, et un nettoyage à fréquence définie des surfaces en hauteur. Le soufflage à l'air comprimé met une poussière combustible chargée en suspension.",
      },
    ],
    enPath: "/materials/plastic-dust",
  },

  {
    slug: "amiante",
    name: "Amiante",
    group: "Poussières minérales",
    metaTitle: "L'amiante est-il encore un risque ? Retrait par",
    metaDescription:
      "L'amiante est un cancérogène du Groupe 1 régi par ses propres normes OSHA. Le retrait relève d'entreprises agréées sous confinement — un aspirateur HEPA est un équipement nommé dans ce cadre, jamais un substitut.",
    intro:
      "Oui. L'amiante demeure en place dans d'énormes quantités de bâtiments et d'équipements existants, et le risque survient lorsque cette matière est perturbée — lors de rénovations, de démolitions, d'entretien ou de dommages.",
    facts: [
      { label: "Type de matière", value: "Fibre minérale — cancérogène du Groupe 1 (CIRC)" },
      { label: "Maladies associées", value: "Amiantose, cancer du poumon, mésothéliome, avec des décennies de latence" },
      { label: "Normes applicables", value: "OSHA 29 CFR 1910.1001 et 1926.1101" },
      { label: "Point de bascule réglementaire", value: "La friabilité — la matière qui s'effrite libère des fibres" },
    ],
    overview: [
      "Le travail sur amiante friable relève d'entreprises agréées et de travailleurs accrédités, à l'intérieur d'un confinement conçu à cet effet, sous obligations de notification et d'élimination. Un aspirateur à filtration HEPA est un équipement nommé à l'intérieur de ce cadre — il n'en est jamais un substitut.",
      "La friabilité est la charnière réglementaire : une matière qui s'effrite sous la pression de la main libère des fibres facilement et déclenche les exigences les plus strictes, alors qu'une matière liée et intacte se gère autrement. Toute matière ancienne suspecte doit être traitée comme de l'amiante jusqu'à ce qu'une analyse démontre le contraire.",
    ],
    risksHeading: "Ce qu'il faut comprendre avant tout",
    risks: [
    "Cancérogène du Groupe 1, avec amiantose, cancer du poumon et mésothéliome documentés.",
    "Latence de plusieurs décennies : l'absence de symptôme ne signifie rien.",
    "Le retrait est un travail agréé, non une tâche d'entretien.",
    "La friabilité déclenche les exigences les plus strictes.",
    "Le balayage à sec est exclu, en toutes circonstances.",
    "Toute matière ancienne suspecte est présumée amiantée jusqu'à analyse.",
    ],
    solutions: [
    "Faire analyser avant de perturber : l'identification précède toute intervention.",
    "Confier le travail sur matière friable à une entreprise agréée sous confinement.",
    "Aspirateur à filtration HEPA testée, comme équipement nommé à l'intérieur du cadre réglementaire.",
    "Circuits de boyaux scellés, intègres d'un bout à l'autre à l'intérieur des barrières.",
    "Suppression à la source pendant le travail, pratique courante et non facultative.",
    "Élimination scellée selon les obligations applicables — jamais de balayage à sec.",
    ],
    faqs: [
      {
        question: "L'amiante est-il encore un risque aujourd'hui ?",
        answer:
          "Oui. L'amiante demeure en place dans d'énormes quantités de bâtiments et d'équipements existants, et le risque survient lorsque cette matière est perturbée — lors de rénovations, de démolitions, d'entretien ou de dommages. L'amiante cause l'amiantose, le cancer du poumon et le mésothéliome, avec des décennies de latence. OSHA le régit par les normes 1910.1001 et 1926.1101, et le retrait est un travail d'entreprise agréée plutôt qu'une tâche d'entretien.",
      },
      {
        question: "Un aspirateur HEPA suffit-il pour l'amiante ?",
        answer:
          "Non, et c'est le point le plus important de cette page. Un aspirateur à filtration HEPA testée est un équipement nommé à l'intérieur du cadre réglementaire de l'amiante — il n'en est pas un substitut. Le travail sur matière friable exige une entreprise agréée, des travailleurs accrédités, un confinement conçu, et des obligations de notification et d'élimination.",
      },
      {
        question: "Qu'est-ce que la friabilité et pourquoi importe-t-elle ?",
        answer:
          "C'est la charnière réglementaire. Une matière friable s'effrite sous la pression de la main et libère des fibres facilement, ce qui déclenche les exigences les plus strictes. Une matière non friable est liée dans une matrice intacte et se gère autrement — mais la couper, la percer ou la casser peut la rendre friable.",
      },
      {
        question: "Que faire devant une matière ancienne suspecte ?",
        answer:
          "La traiter comme de l'amiante jusqu'à ce qu'une analyse démontre le contraire, et ne pas la perturber entre-temps. L'identification par analyse précède toute intervention ; deviner à l'œil n'est pas une méthode.",
      },
    ],
    enPath: "/materials/asbestos",
  },
  {
    slug: "poussiere-de-vermiculite",
    name: "Poussière de vermiculite",
    group: "Poussières minérales",
    metaTitle: "La vermiculite est-elle dangereuse ?",
    metaDescription:
      "La vermiculite elle-même n'est pas de l'amiante, mais une partie de la vermiculite historique est contaminée par de l'amiante. Ne pas perturber, faire analyser, et confier le retrait à une entreprise agréée.",
    intro:
      "La vermiculite elle-même est un minéral qui n'est pas de l'amiante. Le problème est la contamination : une part importante de la vermiculite d'isolation posée historiquement provient d'un gisement contaminé par de l'amiante, et c'est cette contamination qui détermine la conduite à tenir.",
    facts: [
      { label: "Type de matière", value: "Minéral exfolié — non amiante en soi" },
      { label: "Risque réel", value: "Contamination possible par de l'amiante selon la provenance" },
      { label: "Conduite à tenir", value: "Ne pas perturber ; faire analyser avant toute intervention" },
      { label: "Si contaminée", value: "Retrait par entreprise agréée sous confinement, comme pour l'amiante" },
    ],
    overview: [
      "La conduite à tenir est simple à énoncer et importante à respecter : ne pas perturber la matière, faire analyser avant toute intervention, et si la contamination est confirmée, traiter le retrait comme un travail d'amiante — entreprise agréée, confinement, élimination réglementée.",
      "Rien sur cette page ne doit être lu comme un encouragement à retirer soi-même de la vermiculite d'un grenier. L'équipement de récupération à filtration HEPA a sa place à l'intérieur d'un cadre d'abatement mené par des professionnels, non comme moyen de contourner ce cadre.",
    ],
    risksHeading: "Pourquoi la prudence s'impose",
    risks: [
    "La vermiculite n'est pas de l'amiante, mais une part de la vermiculite historique est contaminée.",
    "La provenance détermine le risque, et elle est rarement documentée dans un bâtiment ancien.",
    "Perturber la matière est précisément ce qui libère des fibres.",
    "L'analyse précède l'intervention : deviner à l'œil n'est pas une méthode.",
    "Si contaminée, le retrait relève du cadre réglementaire de l'amiante.",
    "Le retrait par soi-même n'est pas une option acceptable.",
    ],
    solutions: [
    "Ne pas perturber la matière en attendant les résultats d'analyse.",
    "Faire analyser par un laboratoire compétent avant toute intervention.",
    "Si contaminée, confier le retrait à une entreprise agréée sous confinement.",
    "Aspirateur à filtration HEPA testée, comme équipement à l'intérieur du cadre d'abatement.",
    "Élimination scellée selon les obligations applicables.",
    "Aucun balayage à sec, aucune perturbation exploratoire.",
    ],
    faqs: [
      {
        question: "La vermiculite est-elle dangereuse ?",
        answer:
          "La vermiculite elle-même est un minéral qui n'est pas de l'amiante. Le risque vient de la contamination : une part importante de la vermiculite d'isolation posée historiquement provient d'un gisement contaminé par de l'amiante. La conduite à tenir est donc de ne pas perturber la matière, de faire analyser avant toute intervention, et si la contamination est confirmée, de traiter le retrait comme un travail d'amiante.",
      },
      {
        question: "Peut-on retirer soi-même de la vermiculite ?",
        answer:
          "Non. Si la contamination par l'amiante est possible — et elle l'est pour la vermiculite d'isolation ancienne dont la provenance est inconnue — le retrait relève d'une entreprise agréée sous confinement. Un aspirateur HEPA est un équipement à l'intérieur de ce cadre, non un moyen de s'en dispenser.",
      },
      {
        question: "Comment savoir si la vermiculite est contaminée ?",
        answer:
          "Par analyse en laboratoire, pas à l'œil. La provenance du gisement détermine le risque et elle est rarement documentée dans un bâtiment ancien, ce qui explique pourquoi la présomption de prudence s'applique jusqu'aux résultats.",
      },
      {
        question: "Que faire en attendant l'analyse ?",
        answer:
          "Ne rien perturber. La matière intacte et non dérangée ne libère pas de fibres ; c'est la perturbation qui crée l'exposition. Éviter les greniers concernés, ne pas y entreposer d'objets, et ne pas y faire circuler d'air.",
      },
    ],
    enPath: "/materials/vermiculite-dust",
  },
  {
    slug: "poussiere-de-beryllium",
    name: "Poussière de béryllium",
    group: "Poussières métalliques",
    metaTitle: "La poussière de béryllium est-elle dangereuse ?",
    metaDescription:
      "Le béryllium provoque une sensibilisation immunitaire pouvant évoluer vers la bérylliose chronique, une maladie pulmonaire irréversible. Régi par la norme OSHA 29 CFR 1910.1024.",
    intro:
      "Oui, et de façon inhabituelle. Le béryllium provoque une réponse immunitaire chez les personnes susceptibles — la sensibilisation — qui peut évoluer vers la bérylliose chronique, une maladie pulmonaire granulomateuse irréversible.",
    facts: [
      { label: "Type de matière", value: "Métal toxique — poussière, fumées et composés" },
      { label: "Mécanisme", value: "Sensibilisation à médiation immunitaire, variable selon la susceptibilité" },
      { label: "Norme applicable", value: "OSHA béryllium, 29 CFR 1910.1024" },
      { label: "Source la plus fréquente", value: "Alliages cuivre-béryllium, souvent non identifiés comme tels" },
    ],
    overview: [
      "Le béryllium et ses composés sont également classés cancérogènes pour l'humain par le CIRC. OSHA le régit par une norme substance distincte imposant l'évaluation de l'exposition, des zones réglementées, une surveillance médicale de la sensibilisation, et des dispositions d'entretien qui excluent les méthodes sèches.",
      "La source la plus fréquente est aussi la plus discrète : le cuivre-béryllium ne représente souvent que quelques pour cent d'un alliage, présent dans des ressorts, des connecteurs, des outils antiétincelles et des moules. Rien dans la description d'une pièce ne l'indiquera, de sorte que l'exposition survient pendant un travail que personne n'avait signalé comme du travail sur béryllium.",
    ],
    risksHeading: "Pourquoi le béryllium se manipule autrement",
    risks: [
    "Sensibilisation à médiation immunitaire : la susceptibilité varie et les faibles expositions comptent.",
    "Bérylliose chronique irréversible et potentiellement invalidante.",
    "Classé cancérogène pour l'humain par le CIRC.",
    "Alliages cuivre-béryllium rarement identifiés dans la description d'une pièce.",
    "Contamination persistante des surfaces, des outils et des vêtements.",
    "Le changement de contenant est souvent le moment de plus forte exposition.",
    ],
    solutions: [
    "Aspirateurs à filtration absolue HEPA 99,99 % dédiés à la zone réglementée et étiquetés.",
    "Élimination complète du balayage à sec et du soufflage à l'air comprimé.",
    "Captation à la source au meulage, à l'ébavurage et au sciage.",
    "Changements de filtre et de contenant traités comme des procédures contrôlées, avec sacs scellés.",
    "Vérification de la composition des alliages auprès du fournisseur avant usinage.",
    "Consignation de chaque passage de nettoyage dans le dossier de conformité.",
    ],
    faqs: [
      {
        question: "La poussière de béryllium est-elle dangereuse à faible concentration ?",
        answer:
          "Oui, et c'est ce qui la rend inhabituelle. Le béryllium provoque une réponse immunitaire appelée sensibilisation chez les personnes susceptibles, laquelle peut évoluer vers la bérylliose chronique — irréversible et potentiellement invalidante. OSHA le régit par une norme distincte, le 29 CFR 1910.1024, avec des limites d'exposition très inférieures à celles des poussières ordinaires.",
      },
      {
        question: "Comment un atelier saurait-il que du béryllium est présent ?",
        answer:
          "Souvent il ne le saurait pas, sans demander. Les alliages cuivre-béryllium ne contiennent souvent que quelques pour cent de béryllium et apparaissent dans des ressorts, des connecteurs, des outils antiétincelles, des moules et des pièces aérospatiales. Vérifier la composition auprès du fournisseur avant d'usiner un stock inconnu est le contrôle pratique.",
      },
      {
        question: "Le même aspirateur peut-il servir ailleurs dans l'usine ?",
        answer:
          "Non. Un appareil qui récupère une matière réglementée puis nettoie ailleurs déplace un problème de conformité vers une autre partie du bâtiment. Des appareils dédiés et étiquetés demeurant dans la zone réglementée sont la pratique attendue, et c'est habituellement la première chose qu'un vérificateur examine.",
      },
      {
        question: "Le béryllium est-il aussi un danger d'incendie ?",
        answer:
          "Le béryllium finement divisé est évalué comme une poussière métallique combustible et devrait être testé plutôt que présumé. Mais la raison de son contrôle aussi strict est toxicologique : ce sont les limites d'exposition, non le risque d'incendie, qui déterminent comment l'accumulation doit être retirée.",
      },
    ],
    enPath: "/materials/beryllium-dust",
  },
  {
    slug: "poussiere-de-fibre-de-carbone",
    name: "Poussière de fibre de carbone",
    group: "Poussières carbonées",
    metaTitle: "La poussière de fibre de carbone est-elle",
    metaDescription:
      "La poussière de fibre de carbone est électriquement conductrice et abrasive, et les fibres respirables issues de l'usinage de composites posent un problème d'exposition distinct.",
    intro:
      "La poussière de fibre de carbone présente deux problèmes que l'on n'associe pas d'emblée à un composite : elle est électriquement conductrice, ce qui lui permet de ponter et de court-circuiter de l'équipement, et elle est très abrasive.",
    facts: [
      { label: "Type de matière", value: "Poussière carbonée conductrice et abrasive" },
      { label: "Danger distinctif", value: "Conductivité électrique — ponte et court-circuite l'équipement" },
      { label: "Où elle est produite", value: "Coupe, perçage, ponçage et détourage de composites" },
      { label: "Facteur additionnel", value: "Fibres respirables et résine partiellement polymérisée" },
    ],
    overview: [
      "La conductivité est le problème le plus souvent négligé : une accumulation de poussière de fibre de carbone dans une armoire électrique ou sur un tableau est un chemin conducteur, ce qui explique les pannes d'équipement apparemment inexplicables dans les ateliers de composites.",
      "S'y ajoute l'abrasivité, qui use rapidement boyaux, tubes et surfaces de séparation d'un équipement non conçu pour cette tâche, et la question de l'exposition : l'usinage de composites libère des fibres respirables et, selon l'état de polymérisation, des résidus de résine.",
    ],
    risksHeading: "Ce que fait la poussière de fibre de carbone",
    risks: [
    "Conductivité électrique : ponte et court-circuite l'équipement et les tableaux.",
    "Abrasivité élevée : usure rapide des boyaux, tubes et séparateurs.",
    "Fibres respirables libérées par la coupe, le perçage et le ponçage.",
    "Résine partiellement polymérisée selon l'état de la pièce usinée.",
    "Accumulation fine et pénétrante, difficile à confiner.",
    "Pannes d'équipement apparemment inexplicables, causées par la conductivité.",
    ],
    solutions: [
    "Récupération par aspirateur conducteur, mis à la terre et équipotentiel, adapté aux poussières conductrices.",
    "Filtration absolue HEPA 99,99 % pour retenir les fibres respirables.",
    "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
    "Captation à la source au détourage, au perçage et au ponçage.",
    "Nettoyage prioritaire des armoires, tableaux et chemins de câbles.",
    "Élimination du soufflage à l'air comprimé, qui disperse fibres et poussière conductrice.",
    ],
    faqs: [
      {
        question: "La poussière de fibre de carbone est-elle conductrice ?",
        answer:
          "Oui, et c'est le problème le plus souvent négligé. Une accumulation dans une armoire électrique ou sur un tableau constitue un chemin conducteur susceptible de ponter des bornes, ce qui explique des pannes d'équipement apparemment inexplicables dans les ateliers de composites. C'est une raison de nettoyer les zones électriques en priorité.",
      },
      {
        question: "La fibre de carbone est-elle dangereuse à respirer ?",
        answer:
          "L'usinage de composites libère des fibres respirables et, selon l'état de polymérisation de la pièce, des résidus de résine. Une filtration retenue pendant le nettoyage fait donc partie du contrôle d'exposition et non seulement de la propreté.",
      },
      {
        question: "Pourquoi l'équipement s'use-t-il si vite ?",
        answer:
          "Parce que la poussière de fibre de carbone est très abrasive. Elle érode boyaux, tubes et surfaces de séparation d'un appareil qui n'a pas été construit pour cette tâche, ce qui rend une construction tolérante à l'abrasion et des pièces d'usure remplaçables plus économiques à l'usage.",
      },
      {
        question: "Comment récupérer la poussière de composite ?",
        answer:
          "Par captation à la source au détourage, au perçage et au ponçage, avec un appareil conducteur et mis à la terre, une filtration absolue, et une construction résistant à l'abrasion. Le soufflage à l'air comprimé est particulièrement inapproprié : il projette de la poussière conductrice dans les équipements électriques.",
      },
    ],
    enPath: "/materials/carbon-fiber-dust",
  },

  {
    slug: "poussiere-de-papier",
    name: "Poussière de papier",
    group: "Poussières de papier et emballage",
    metaTitle: "La poussière de papier est-elle combustible ?",
    metaDescription:
      "La poussière de papier et les fibres de cellulose issues de la coupe, du refendage et de la conversion sont combustibles. Dangers en usine et récupération sécuritaire.",
    intro:
      "Oui. Le papier est de la cellulose, et la poussière fine produite par la coupe, le refendage, le rainage et l'empilage est une poussière organique combustible. Elle est légère, elle voyage, et elle se dépose sur l'acier en hauteur loin de l'endroit où elle a été créée.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (cellulose)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Coupe, refendage, rainage, pliage, empilage" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 664)" },
    ],
    overview: [
      "Parce que la poussière de papier paraît anodine, elle est souvent balayée ou soufflée. Les deux méthodes déplacent le combustible au lieu de le retirer, et le soufflage met un nuage combustible dans un local qui contient déjà des moteurs d'entraînement, des éléments chauffants et de l'électricité statique.",
      "Dans les usines de conversion, l'amidon des adhésifs ajoute une seconde fraction combustible, plus fine que la fibre elle-même.",
    ],
    risksHeading: "Ce qui compte avec la poussière de papier",
    risks: [
    "Fibre de cellulose combustible, produite à chaque opération mécanique.",
    "Accumulation sur l'acier en hauteur, les rebords et le dessus des conduits.",
    "Tassement dans les carters de machines et les enceintes d'entraînement.",
    "Amidon des adhésifs ajoutant une fraction plus fine en conversion.",
    "Électricité statique dans le travail de matière sèche.",
    "Volume important dans les lignes à grande vitesse.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé dans les zones de conversion.",
    "Nettoyage à fréquence définie de l'acier en hauteur, des conduits et des carters.",
    "Rallonges pour atteindre les poutres et le dessus des conduits.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "La poussière de papier est-elle combustible ?",
        answer:
          "Oui. Le papier est de la cellulose, et la poussière fine produite par la coupe, le refendage, le rainage et l'empilage est une poussière organique combustible. La NFPA 660 s'applique, ayant regroupé les dispositions auparavant contenues dans la NFPA 664 pour la cellulose.",
      },
      {
        question: "Pourquoi la poussière fine compte-t-elle plus que les retailles ?",
        answer:
          "Parce que la granulométrie détermine le comportement. Les retailles et les chutes ne se mettent pas en suspension ; la poussière fine de coupe et de refendage le fait, et c'est le nuage en suspension qui peut déflagrer.",
      },
      {
        question: "Où s'accumule-t-elle ?",
        answer:
          "Sur l'acier en hauteur, les rebords, le dessus des conduits et à l'intérieur des carters de machines. Ce sont les surfaces que personne n'inspecte depuis le plancher, et ce sont celles qui alimentent un événement secondaire.",
      },
      {
        question: "L'amidon des adhésifs change-t-il le danger ?",
        answer:
          "Il ajoute une seconde fraction combustible plus fine que la fibre. Une usine de conversion utilisant des adhésifs à base d'amidon devrait faire évaluer les deux fractions plutôt que la fibre seule.",
      },
    ],
    enPath: "/materials/paper-dust",
  },
  {
    slug: "poussiere-de-cuir",
    name: "Poussière de cuir",
    group: "Poussières textiles",
    metaTitle: "La poussière de cuir est-elle combustible ?",
    metaDescription:
      "La poussière de cuir issue du ponçage, du parage et de la finition est une poussière organique combustible, et les résidus de tannage peuvent ajouter des préoccupations chimiques.",
    intro:
      "Oui. Le cuir est une matière organique et sa poussière — produite par le ponçage, le parage, le refendage et la finition — est combustible. Les résidus du tannage peuvent ajouter des préoccupations chimiques à ce qui semblerait être une simple poussière de fibres.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Ponçage, parage, refendage, finition" },
      { label: "Facteur additionnel", value: "Résidus de tannage et de finition" },
    ],
    overview: [
      "La poussière de cuir est fine et légère, et elle se dépose largement dans les ateliers de maroquinerie et de chaussure. Le ponçage produit la fraction qui compte.",
      "Les procédés de tannage laissent des résidus chimiques dans la matière — le chrome trivalent est courant en tannage au chrome. Ce n'est pas la même chose que le chrome hexavalent, mais cela justifie de connaître la composition de son stock plutôt que de la présumer.",
    ],
    risksHeading: "Ce qui compte avec la poussière de cuir",
    risks: [
    "Poussière organique combustible produite au ponçage et au parage.",
    "Résidus de tannage et de finition présents dans la matière.",
    "Accumulation en hauteur de la fraction fine.",
    "Charges statiques dans le travail de matière sèche.",
    "Exposition respiratoire à une poussière fine mixte.",
    "Composition variable selon le procédé de tannage.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Captation à la source aux postes de ponçage et de parage.",
    "Élimination du soufflage à l'air comprimé.",
    "Vérification de la composition du stock auprès du fournisseur.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "La poussière de cuir est-elle combustible ?",
        answer:
          "Oui. Le cuir est une matière organique et sa poussière, produite par le ponçage, le parage, le refendage et la finition, est une poussière organique combustible qui s'accumule sur les surfaces en hauteur comme les autres poussières de fibres.",
      },
      {
        question: "Les résidus de tannage sont-ils un problème ?",
        answer:
          "Ils justifient de connaître la composition de son stock. Le tannage au chrome laisse du chrome trivalent, bien moins dangereux que le chrome hexavalent, mais les agents de finition varient et la seule façon de savoir est de demander au fournisseur.",
      },
      {
        question: "Où la poussière de cuir s'accumule-t-elle ?",
        answer:
          "Autour des postes de ponçage et de parage, puis sur les surfaces en hauteur et dans les carters de machines. Le ponçage produit la fraction la plus fine et la plus facilement mise en suspension.",
      },
      {
        question: "Comment la récupérer ?",
        answer:
          "Par captation à la source aux postes de travail et récupération sous vide avec filtration retenue. Le soufflage à l'air comprimé est à exclure : il disperse une poussière fine de composition mixte dans la zone respiratoire.",
      },
    ],
    enPath: "/materials/leather-dust",
  },
  {
    slug: "poussiere-de-cacao",
    name: "Poussière de cacao",
    group: "Poussières alimentaires",
    metaTitle: "La poussière de cacao est-elle combustible ?",
    metaDescription:
      "La poudre de cacao est une poussière organique combustible, fine et facilement mise en suspension. Dangers en chocolaterie et récupération sécuritaire.",
    intro:
      "Oui. La poudre de cacao est une poussière organique fine et combustible, et elle se met en suspension avec une facilité notable — au versement, au tamisage, au mélange et à l'ensachage.",
    facts: [
      { label: "Type de matière", value: "Poudre organique combustible fine" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Broyage, pressage, tamisage, mélange, ensachage" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
    ],
    overview: [
      "Le cacao contient de la matière grasse, ce qui le rend collant en présence d'humidité et de chaleur. La poudre peut donc s'agglomérer sur les surfaces et dans les conduits, ce qui complique le retrait et masque l'ampleur d'une accumulation.",
      "Comme pour les autres poussières alimentaires, l'accumulation en hauteur constitue le combustible d'un événement secondaire, et le nettoyage doit satisfaire les registres de salubrité autant que la prévention des incendies.",
    ],
    risksHeading: "Ce qui compte avec le cacao",
    risks: [
    "Poudre fine et combustible se mettant facilement en suspension.",
    "Teneur en matière grasse rendant la poudre collante et difficile à retirer.",
    "Agglomération dans les conduits, masquant l'ampleur des accumulations.",
    "Accumulation en hauteur de la fraction fine.",
    "Chaleur des opérations de broyage et de pressage.",
    "Chevauchement avec les exigences de salubrité alimentaire.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
    "Récupération humide là où la poudre s'est agglomérée.",
    "Élimination du soufflage à l'air comprimé.",
    "Nettoyage à fréquence définie des conduits et des surfaces en hauteur.",
    "Un seul passage documenté servant au programme de poussières et à la salubrité.",
    ],
    faqs: [
      {
        question: "La poussière de cacao est-elle combustible ?",
        answer:
          "Oui. La poudre de cacao est une poussière organique fine et combustible qui se met en suspension avec une facilité notable au versement, au tamisage, au mélange et à l'ensachage. La NFPA 660 s'applique.",
      },
      {
        question: "La matière grasse du cacao change-t-elle le nettoyage ?",
        answer:
          "Oui. La teneur en matière grasse rend la poudre collante en présence d'humidité et de chaleur, de sorte qu'elle s'agglomère sur les surfaces et dans les conduits. Cela complique le retrait et peut masquer l'ampleur réelle d'une accumulation ; une récupération humide est parfois appropriée pour la matière agglomérée.",
      },
      {
        question: "Où le danger se concentre-t-il en chocolaterie ?",
        answer:
          "Au broyage et au pressage, qui produisent la fraction la plus fine et ajoutent de la chaleur, puis dans les conduits et sur les surfaces en hauteur où la poudre se dépose hors de vue.",
      },
      {
        question: "Peut-on souffler les conduits ?",
        answer:
          "Non. Le soufflage met une poudre combustible fine en suspension et la déplace vers des surfaces moins accessibles. La récupération sous vide la retire du bâtiment.",
      },
    ],
    enPath: "/materials/cocoa-dust",
  },

  {
    slug: "poussiere-de-zirconium",
    name: "Poussière de zirconium",
    group: "Poussières métalliques",
    metaTitle: "Le zirconium est-il inflammable ? Particules",
    metaDescription:
      "Le zirconium fin compte parmi les métaux les plus sensibles à l'inflammation — il peut s'enflammer spontanément à l'air. Les fines sont souvent conservées humides, et pourtant un feu de zirconium reste de Classe D.",
    intro:
      "Les particules et la poudre de zirconium comptent parmi les poussières métalliques les plus sensibles à l'inflammation. Le zirconium fin peut s'enflammer spontanément à l'air et possède une énergie d'inflammation extrêmement faible.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique combustible extrêmement sensible" },
      { label: "Manipulation courante", value: "Les fines sont souvent conservées humides pour réduire le risque d'inflammation" },
      { label: "Classe d'incendie", value: "Classe D — un feu de zirconium déclaré reste dangereux à l'eau" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 484)" },
    ],
    overview: [
      "Cette sensibilité extrême explique pourquoi le zirconium fin est souvent conservé humide pendant la manipulation, afin de réduire le risque, et pourquoi l'accumulation à sec est précisément ce qu'il faut éviter.",
      "Il faut toutefois distinguer deux choses qui semblent contradictoires et ne le sont pas. Conserver les fines humides est une mesure de prévention destinée à empêcher l'inflammation. Une fois un feu de zirconium déclaré, il demeure de Classe D, où l'eau est dangereuse. L'humidification réduit le risque d'amorçage ; elle n'est pas un moyen d'extinction.",
    ],
    risksHeading: "Ce qui rend le zirconium exceptionnel",
    risks: [
      "Énergie d'inflammation extrêmement faible : parmi les poussières métalliques les plus sensibles.",
      "Inflammation spontanée possible à l'air pour les particules très fines.",
      "Accumulation à sec : la condition à éviter en priorité.",
      "Feu de Classe D une fois déclaré : l'eau demeure dangereuse malgré la manipulation humide.",
      "Conductivité de la poussière métallique, pertinente pour l'équipement électrique.",
      "Confusion possible entre prévention par humidification et extinction.",
    ],
    solutions: [
      "Séparation par immersion, pour que les fines récupérées demeurent humides plutôt que de s'accumuler à sec.",
      "Équipement de récupération conducteur, mis à la terre et équipotentiel, exempt de sources d'inflammation.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification le favorise.",
      "Ségrégation stricte du zirconium, sans mélange avec d'autres métaux.",
      "Élimination du soufflage à l'air comprimé partout où des fines de zirconium sont produites.",
      "Dispositions de Classe D et personnel formé : l'humidification prévient, elle n'éteint pas.",
    ],
    faqs: [
      {
        question: "Le zirconium est-il inflammable ?",
        answer:
          "Les particules et la poudre de zirconium comptent parmi les poussières métalliques les plus sensibles à l'inflammation : le zirconium fin peut s'enflammer spontanément à l'air et possède une énergie d'inflammation extrêmement faible. C'est l'une des matières fréquemment manipulées et entreposées humides précisément pour réduire ce risque — et pourtant elle demeure un métal combustible de Classe D, de sorte que l'eau n'est pas une réponse d'extinction une fois la matière en combustion.",
      },
      {
        question: "Pourquoi conserver le zirconium humide si l'eau est dangereuse sur un feu ?",
        answer:
          "Ce sont deux choses distinctes. Conserver les fines humides pendant la manipulation est une mesure de prévention : elle réduit le risque d'amorçage d'un métal exceptionnellement sensible. Une fois un feu déclaré, il demeure de Classe D, où l'eau est dangereuse. L'humidification empêche le départ de feu ; elle n'est pas un moyen de l'éteindre.",
      },
      {
        question: "Comment récupérer les fines de zirconium ?",
        answer:
          "Par séparation par immersion lorsque l'évaluation le justifie, afin que la matière récupérée demeure humide plutôt que de s'accumuler à sec dans un contenant, avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation. L'accumulation à sec est le mode de défaillance à concevoir hors du procédé.",
      },
      {
        question: "Le zirconium se manipule-t-il comme le titane ?",
        answer:
          "Ils partagent la classification de métal combustible et les dispositions de Classe D, mais le zirconium est nettement plus sensible à l'inflammation, au point de pouvoir s'enflammer spontanément à l'air sous forme très fine. C'est ce qui explique la pratique de conservation humide, plus systématique qu'avec le titane.",
      },
    ],
    enPath: "/materials/zirconium-dust",
  },
  {
    slug: "poussiere-de-lithium",
    name: "Poussière de lithium",
    group: "Poussières métalliques",
    metaTitle: "Le lithium est-il inflammable ? Réactivité à",
    metaDescription:
      "Le lithium métallique réagit violemment avec l'eau et même avec l'humidité de l'air, en libérant de l'hydrogène et de la chaleur. Manipulation de Classe D et récupération en fabrication de piles.",
    intro:
      "Le métal combustible réactif à l'eau au cœur de l'essor des batteries. Le lithium métallique réagit violemment avec l'eau — et même avec l'humidité de l'air ambiant — en libérant de l'hydrogène et de la chaleur, brûle intensément, et exige une manipulation de Classe D où l'eau est le mauvais outil.",
    facts: [
      { label: "Type de matière", value: "Métal combustible hautement réactif à l'eau" },
      { label: "Réactivité", value: "Réagit violemment avec l'eau et avec l'humidité de l'air" },
      { label: "Classe d'incendie", value: "Classe D — l'eau est le mauvais outil" },
      { label: "Secteurs", value: "Fabrication de piles, chimie fine, alliages légers" },
    ],
    overview: [
      "La réactivité à l'humidité ambiante distingue le lithium des autres métaux combustibles : il ne suffit pas d'éviter l'eau liquide, il faut contrôler l'atmosphère de manipulation. C'est pourquoi la fabrication de piles au lithium se déroule en salle sèche.",
      "La récupération doit donc éviter d'introduire de l'humidité autant que des sources d'inflammation, ce qui exclut les méthodes humides utilisées pour d'autres métaux réactifs comme le zirconium. La séparation appropriée dépend de l'évaluation de la matière et du procédé.",
    ],
    risksHeading: "Ce qui rend le lithium particulier",
    risks: [
      "Réaction violente avec l'eau, libérant de l'hydrogène et de la chaleur.",
      "Réaction avec l'humidité de l'air ambiant, et non seulement avec l'eau liquide.",
      "Combustion intense une fois amorcée, exigeant des dispositions de Classe D.",
      "Méthodes humides inappropriées, contrairement à d'autres métaux réactifs.",
      "Contrôle de l'atmosphère nécessaire : d'où les salles sèches en fabrication de piles.",
      "Accumulation dans les contenants, où chaleur et humidité peuvent se rencontrer.",
    ],
    solutions: [
      "Équipement de récupération conducteur, mis à la terre et exempt de sources d'inflammation.",
      "Méthodes de séparation adaptées à une matière réactive à l'humidité, établies par évaluation.",
      "Contrôle de l'atmosphère de manipulation là où le procédé l'exige.",
      "Ségrégation stricte du lithium, sans mélange avec d'autres matières.",
      "Élimination du soufflage à l'air comprimé, qui disperse et introduit de l'humidité.",
      "Dispositions de Classe D et personnel formé : l'eau est le mauvais outil.",
    ],
    faqs: [
      {
        question: "Le lithium est-il inflammable ?",
        answer:
          "Le lithium métallique est un métal combustible hautement réactif : il réagit violemment avec l'eau — et même avec l'humidité de l'air ambiant — en libérant de l'hydrogène et de la chaleur, et il brûle intensément. Il exige une manipulation de Classe D, où l'eau est le mauvais outil.",
      },
      {
        question: "Pourquoi la fabrication de piles se fait-elle en salle sèche ?",
        answer:
          "Parce que le lithium ne réagit pas seulement avec l'eau liquide mais aussi avec l'humidité de l'air ambiant. Contrôler l'atmosphère de manipulation fait donc partie du procédé, et non d'une précaution supplémentaire.",
      },
      {
        question: "Peut-on utiliser une méthode humide comme pour le zirconium ?",
        answer:
          "Non, et c'est une distinction importante entre deux métaux réactifs. Le zirconium fin est souvent conservé humide pour réduire le risque d'inflammation ; le lithium réagit avec l'eau elle-même, de sorte que l'humidification aggraverait la situation. La méthode de séparation appropriée pour le lithium s'établit par évaluation de la matière et du procédé.",
      },
      {
        question: "Comment récupérer les particules de lithium ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation, une méthode de séparation adaptée à une matière réactive à l'humidité, et une ségrégation stricte. Les dispositions de Classe D doivent être en place et connues du personnel avant d'en avoir besoin.",
      },
    ],
    enPath: "/materials/lithium-dust",
  },
  {
    slug: "poussiere-de-liege",
    name: "Poussière de liège",
    group: "Poussières de bois",
    metaTitle: "La poussière de liège est-elle dangereuse ?",
    metaDescription:
      "Le liège est une poussière naturelle combustible, et la poussière de liège moisie est associée à la subérose — le poumon des travailleurs du liège. Deux dangers distincts et comment les maîtriser.",
    intro:
      "Le liège surprend deux fois. C'est une poussière naturelle véritablement combustible, et la poussière de liège moisie est associée à la subérose, une pneumopathie d'hypersensibilité longtemps appelée poumon des travailleurs du liège.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (écorce)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Second danger", value: "Subérose — pneumopathie d'hypersensibilité liée au liège MOISI" },
      { label: "Source du danger sanitaire", value: "Les moisissures présentes sur le liège, non le liège lui-même" },
    ],
    overview: [
      "La distinction sanitaire mérite d'être précise : la subérose est associée à la poussière de liège moisie, c'est-à-dire à l'exposition aux moisissures qui se développent sur le liège entreposé ou humide, et non au liège lui-même. Un stock sec et sain ne présente pas le même risque qu'un stock ayant moisi.",
      "Cela change la manière de gérer le danger. Contrôler l'humidité et la durée d'entreposage agit sur la cause de la subérose, tandis que le contrôle des accumulations agit sur le danger de déflagration. Les deux sont nécessaires et ne se substituent pas l'un à l'autre.",
    ],
    risksHeading: "Les deux dangers du liège",
    risks: [
      "Poussière naturelle combustible produite au ponçage, à la coupe et au broyage.",
      "Subérose associée à la poussière de liège MOISIE, non au liège sain.",
      "Développement de moisissures favorisé par l'humidité et un entreposage prolongé.",
      "Accumulation en hauteur de la fraction fine, comme pour les autres poussières de bois.",
      "Charges statiques dans le travail de matière sèche.",
      "Confusion fréquente entre les deux dangers, qui appellent des contrôles différents.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable, moisissures comprises.",
      "Contrôle de l'humidité et de la durée d'entreposage, qui agit sur la cause de la subérose.",
      "Nettoyage à fréquence définie des surfaces en hauteur et des carters de machines.",
      "Élimination du soufflage à l'air comprimé, qui disperse spores et fines ensemble.",
      "Retrait de la matière récupérée du bâtiment plutôt que de la laisser s'humidifier sur place.",
    ],
    faqs: [
      {
        question: "La poussière de liège est-elle dangereuse ?",
        answer:
          "Le liège surprend deux fois. C'est une poussière naturelle véritablement combustible, et la poussière de liège moisie est associée à la subérose, une pneumopathie d'hypersensibilité longtemps appelée poumon des travailleurs du liège. Les deux dangers sont distincts et appellent des contrôles différents.",
      },
      {
        question: "Qu'est-ce que la subérose ?",
        answer:
          "Une pneumopathie d'hypersensibilité associée à l'exposition à la poussière de liège moisie. La distinction importe : le danger provient des moisissures qui se développent sur le liège entreposé ou humide, et non du liège lui-même. Contrôler l'humidité et la durée d'entreposage agit donc directement sur la cause.",
      },
      {
        question: "La poussière de liège est-elle combustible ?",
        answer:
          "Oui. Le liège est une écorce, et sa poussière — produite au ponçage, à la coupe et au broyage — est une poussière organique combustible qui s'accumule sur les surfaces en hauteur comme les autres poussières de bois.",
      },
      {
        question: "Comment maîtriser les deux dangers à la fois ?",
        answer:
          "Le contrôle des accumulations traite le danger de déflagration ; le contrôle de l'humidité et de la durée d'entreposage traite la cause de la subérose. Une filtration retenue pendant le nettoyage sert les deux, en gardant captées les fines et les spores plutôt qu'en les redistribuant.",
      },
    ],
    enPath: "/materials/cork-dust",
  },

  {
    slug: "poussiere-de-chrome",
    name: "Poussière de chrome",
    group: "Poussières métalliques",
    metaTitle: "La poussière de chrome est-elle dangereuse ?",
    metaDescription:
      "Le danger du chrome dépend de son état d'oxydation. Le chrome hexavalent est un cancérogène reconnu régi par la norme OSHA 29 CFR 1910.1026, souvent créé par le soudage et le meulage de l'inox.",
    intro:
      "La réponse dépend de l'état d'oxydation, et c'est toute l'histoire du chrome. Le chrome métallique et le chrome trivalent sont bien moins dangereux que le chrome hexavalent, qui est un cancérogène reconnu régi par OSHA sous le 29 CFR 1910.1026.",
    facts: [
      { label: "Ce qui détermine le danger", value: "L'état d'oxydation — le chrome hexavalent est le cancérogène" },
      { label: "Norme applicable", value: "OSHA chrome hexavalent, 29 CFR 1910.1026" },
      { label: "Sources principales", value: "Soudage et meulage de l'inox, revêtements de chromate" },
      { label: "Particularité", value: "Le danger est souvent créé par l'opération, non présent dans la matière brute" },
    ],
    overview: [
      "Le chrome hexavalent est produit par des procédés tels que le soudage et le meulage de l'acier inoxydable, et par les revêtements de chromate. Le danger est donc souvent créé par l'opération plutôt que présent dans la matière première — un atelier qui usine de l'inox sans le savoir peut générer du chrome hexavalent sans que rien dans la description de la pièce ne l'indique.",
      "Cette distinction change la manière d'aborder le nettoyage. Ce n'est pas la poussière de chrome en général qui impose une filtration retenue et une élimination contenue, mais la fraction hexavalente créée par le procédé.",
    ],
    risksHeading: "Ce qui compte avec le chrome",
    risks: [
      "Chrome hexavalent : cancérogène reconnu, régi par sa propre norme OSHA.",
      "Créé par le procédé : soudage et meulage de l'inox, revêtements de chromate.",
      "Souvent non anticipé : rien dans la description d'une pièce n'indique la génération de Cr(VI).",
      "États d'oxydation confondus : le chrome métallique et trivalent sont bien moins dangereux.",
      "Fumées de soudage : la voie d'exposition dominante en fabrication.",
      "Poussière métallique fine à caractériser par essai pour la combustibilité.",
    ],
    solutions: [
      "Captation à la source au soudage et au meulage de l'inox, où le Cr(VI) est généré.",
      "Récupération par aspirateur à filtration absolue HEPA 99,99 %.",
      "Élimination du balayage à sec et du soufflage à l'air comprimé dans les zones concernées.",
      "Collecte et élimination scellées, traitées selon le statut réglementaire de la matière.",
      "Équipement dédié là où une norme substance s'applique.",
      "Documentation des fréquences de nettoyage dans le programme d'hygiène industrielle.",
    ],
    faqs: [
      {
        question: "La poussière de chrome est-elle dangereuse ?",
        answer:
          "La réponse dépend de l'état d'oxydation, et c'est toute l'histoire du chrome. Le chrome métallique et le chrome trivalent sont bien moins dangereux que le chrome hexavalent, qui est un cancérogène reconnu régi par OSHA sous le 29 CFR 1910.1026. Le chrome hexavalent est produit par des procédés comme le soudage et le meulage de l'acier inoxydable et par les revêtements de chromate — le danger est donc souvent créé par l'opération plutôt que présent dans la matière brute.",
      },
      {
        question: "Le soudage de l'inox produit-il du chrome hexavalent ?",
        answer:
          "Oui, c'est l'une des sources professionnelles les plus documentées, et les fumées de soudage sont la voie d'exposition dominante en fabrication. Le meulage de l'inox et les revêtements de chromate en produisent également. La captation à la source est le contrôle attendu.",
      },
      {
        question: "Comment savoir si un atelier est concerné ?",
        answer:
          "En regardant les procédés plutôt que les matières : si l'on soude ou meule de l'acier inoxydable, ou si l'on travaille des surfaces chromatées, le chrome hexavalent est probablement généré. Rien dans la description d'une pièce ne l'indiquera, ce qui explique pourquoi cette exposition passe souvent inaperçue.",
      },
      {
        question: "Comment nettoyer la poussière contenant du chrome hexavalent ?",
        answer:
          "Par récupération à filtration absolue HEPA avec collecte scellée, sans balayage à sec ni soufflage à l'air comprimé, et avec un équipement dédié là où la norme substance s'applique. La méthode de nettoyage fait partie de la conformité, non de l'entretien courant.",
      },
    ],
    enPath: "/materials/chromium-dust",
  },
  {
    slug: "poussiere-de-nickel",
    name: "Poussière de nickel",
    group: "Poussières métalliques",
    metaTitle: "Le nickel est-il inflammable ? Poussière de",
    metaDescription:
      "Le nickel massif ne s'enflamme pas facilement ; la poudre fine est une poussière métallique combustible. Mais le nickel est surtout contrôlé pour sa toxicité — les composés du nickel sont classés cancérogènes par le CIRC.",
    intro:
      "Le nickel massif ne s'enflamme pas facilement ; la poudre fine de nickel est une poussière métallique combustible et se manipule comme telle. La raison dominante du contrôle strict de la poussière de nickel est toutefois la toxicité plutôt que l'incendie.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique conductrice, également toxique" },
      { label: "Danger dominant", value: "Toxicité — les composés du nickel sont classés cancérogènes par le CIRC" },
      { label: "Effet additionnel", value: "Sensibilisant respiratoire et cutané documenté" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E — poussière métallique conductrice" },
    ],
    overview: [
      "Les composés du nickel sont classés cancérogènes pour l'humain par le CIRC, et le nickel est un sensibilisant respiratoire et cutané bien documenté. C'est cette combinaison, plutôt que la combustibilité de la poudre, qui détermine la méthode de nettoyage.",
      "Le nickel apparaît dans les alliages inoxydables et les superalliages, la galvanoplastie, les batteries et l'aérospatiale. Comme pour le chrome, une part importante de l'exposition est créée par le procédé — soudage, meulage et usinage d'alliages contenant du nickel.",
    ],
    risksHeading: "Ce qui compte avec le nickel",
    risks: [
      "Cancérogénicité : les composés du nickel sont classés cancérogènes pour l'humain par le CIRC.",
      "Sensibilisation respiratoire et cutanée documentée.",
      "Exposition créée par le procédé : soudage, meulage et usinage d'alliages.",
      "Conductivité de la poussière métallique, pertinente pour l'équipement électrique.",
      "Combustibilité de la poudre fine, à caractériser par essai.",
      "Présence fréquente dans les inox et superalliages sans mention explicite.",
    ],
    solutions: [
      "Récupération par aspirateur à filtration absolue HEPA 99,99 %, la toxicité gouvernant la spécification.",
      "Captation à la source au soudage, au meulage et à l'usinage d'alliages au nickel.",
      "Élimination du balayage à sec et du soufflage à l'air comprimé.",
      "Collecte et élimination scellées.",
      "Équipement conducteur et mis à la terre, la poussière restant combustible et conductrice.",
      "Documentation des fréquences de nettoyage dans le programme d'hygiène industrielle.",
    ],
    faqs: [
      {
        question: "Le nickel est-il inflammable ?",
        answer:
          "Le nickel massif ne s'enflamme pas facilement ; la poudre fine de nickel est une poussière métallique combustible et se manipule comme telle. La raison dominante du contrôle strict de la poussière de nickel est toutefois la toxicité plutôt que l'incendie : les composés du nickel sont classés cancérogènes pour l'humain par le CIRC, et le nickel est un sensibilisant respiratoire et cutané bien documenté.",
      },
      {
        question: "Où l'exposition au nickel se produit-elle ?",
        answer:
          "Principalement par le procédé : soudage, meulage et usinage d'alliages contenant du nickel — inox et superalliages notamment — ainsi qu'en galvanoplastie et en fabrication de batteries. Le nickel est souvent présent dans un alliage sans mention explicite dans la description de la pièce.",
      },
      {
        question: "La poussière de nickel exige-t-elle une filtration absolue ?",
        answer:
          "C'est la toxicité qui gouverne la spécification, et pour une poussière classée cancérogène une filtration retenue est la fonction même de l'appareil : elle garde la fraction respirable captée plutôt que de la renvoyer dans la zone respiratoire.",
      },
      {
        question: "Le nickel se manipule-t-il comme le chrome ?",
        answer:
          "Les deux partagent un point important : une part importante de l'exposition est créée par l'opération plutôt que présente dans la matière brute, et les deux imposent une filtration retenue et une collecte contenue. Ils relèvent toutefois de cadres réglementaires distincts, et le chrome hexavalent possède sa propre norme OSHA.",
      },
    ],
    enPath: "/materials/nickel-dust",
  },
  {
    slug: "poussiere-de-coton",
    name: "Poussière de coton",
    group: "Poussières textiles",
    metaTitle: "La poussière de coton est-elle combustible ?",
    metaDescription:
      "La poussière de coton et la charpie sont combustibles, et le coton possède sa propre norme OSHA en raison de la byssinose. Dangers en filature et récupération sécuritaire.",
    intro:
      "Oui. La poussière de coton et la charpie sont des matières organiques combustibles, et l'accumulation de charpie sur les surfaces en hauteur et dans les machines est une préoccupation d'incendie et de déflagration bien documentée dans les usines textiles.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (charpie et fines)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Norme sanitaire distincte", value: "OSHA poussière de coton, 29 CFR 1910.1043" },
      { label: "Maladie associée", value: "Byssinose — historiquement appelée poumon brun" },
    ],
    overview: [
      "La charpie bloque et isole aussi les équipements, ce qui introduit le problème des surfaces chaudes en plus du problème de combustible. Une couche de charpie sur un moteur ou un carter d'entraînement crée la condition qu'elle alimente ensuite.",
      "Le coton est inhabituel parmi les poussières organiques en ce qu'il possède sa propre norme OSHA. Le 29 CFR 1910.1043 existe en raison de la byssinose — la maladie respiratoire historiquement appelée poumon brun, causée par l'inhalation de poussière de coton au fil du temps. Le coton porte donc un danger d'incendie et un danger sanitaire réglementé simultanément.",
    ],
    risksHeading: "Pourquoi le coton porte deux dangers",
    risks: [
      "Charpie combustible accumulée sur les surfaces en hauteur et dans les machines.",
      "Isolation des surfaces chaudes : la charpie crée la condition qu'elle alimente.",
      "Byssinose : maladie respiratoire régie par une norme OSHA distincte.",
      "Blocage des équipements et des systèmes de refroidissement.",
      "Charges statiques dans le travail de matière sèche.",
      "Volume important en filature et en cardage.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable pendant le nettoyage.",
      "Nettoyage prioritaire des moteurs, carters d'entraînement et surfaces en hauteur.",
      "Élimination du soufflage à l'air comprimé, qui redistribue la charpie.",
      "Fréquences définies pour les machines de cardage et de filature.",
      "Retrait de la matière récupérée du bâtiment plutôt que de la laisser sur place.",
    ],
    faqs: [
      {
        question: "La poussière de coton est-elle combustible ?",
        answer:
          "Oui. La poussière de coton et la charpie sont des matières organiques combustibles, et l'accumulation de charpie sur les surfaces en hauteur et dans les machines est une préoccupation d'incendie et de déflagration bien documentée dans les usines textiles. La charpie bloque et isole aussi les équipements, ce qui introduit le problème des surfaces chaudes en plus du problème de combustible.",
      },
      {
        question: "Pourquoi le coton possède-t-il sa propre norme OSHA ?",
        answer:
          "En raison de la byssinose — la maladie respiratoire historiquement appelée poumon brun, causée par l'inhalation de poussière de coton au fil du temps. OSHA la régit par une norme distincte, le 29 CFR 1910.1043, ce qui est inhabituel pour une poussière organique et témoigne de la solidité de la documentation sur cet effet sanitaire.",
      },
      {
        question: "Où la charpie s'accumule-t-elle ?",
        answer:
          "Sur les surfaces en hauteur, dans les machines de cardage et de filature, et sur les moteurs et carters d'entraînement — où elle isole des surfaces chaudes. C'est cette dernière position qui compte le plus, parce qu'elle crée la source d'inflammation qu'elle alimente ensuite.",
      },
      {
        question: "Peut-on souffler la charpie à l'air comprimé ?",
        answer:
          "Non. Le soufflage redistribue la charpie sur d'autres surfaces, souvent en hauteur et hors de vue, et met la fraction respirable en suspension dans un local où la byssinose est le danger sanitaire documenté. La récupération sous vide retire la matière au lieu de la déplacer.",
      },
    ],
    enPath: "/materials/cotton-wool-dust",
  },

  {
    slug: "poussiere-de-cafe",
    name: "Poussière de café",
    group: "Poussières alimentaires",
    metaTitle: "Le café est-il inflammable ? Poussière de café et",
    metaDescription:
      "Le café torréfié est une matière organique combustible, et la pellicule et les fines de torréfaction sont une poussière combustible. Dangers en torréfaction et récupération sécuritaire.",
    intro:
      "Le café torréfié est une matière organique et il brûle. Dans une usine de torréfaction, la poussière combustible est la pellicule et les fines — une matière légère facilement mise en suspension qui s'accumule dans les conduits et autour des torréfacteurs, exactement là où se trouvent aussi les sources d'inflammation.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Torréfaction, refroidissement, dépelliculage, mouture, ensachage" },
      { label: "Facteur aggravant", value: "Chaleur soutenue des torréfacteurs à proximité de matière fine" },
    ],
    overview: [
      "La torréfaction combine le combustible et une chaleur soutenue, ce qui fait du contrôle des accumulations la défense principale. La pellicule est particulièrement légère et voyage dans les conduits de refroidissement et d'aspiration, où elle s'accumule hors de vue.",
      "Les incendies de torréfacteur et de conduit figurent parmi les événements les plus courants du secteur, et ils commencent généralement dans de la matière accumulée plutôt que dans le grain lui-même. La mouture ajoute une fraction plus fine à l'aval de la chaîne.",
    ],
    risksHeading: "Ce qui compte dans une usine de torréfaction",
    risks: [
      "Pellicule légère qui voyage dans les conduits de refroidissement et d'aspiration.",
      "Chaleur soutenue des torréfacteurs à proximité de matière fine accumulée.",
      "Accumulation hors de vue dans les conduits, où les incendies débutent souvent.",
      "Fraction plus fine produite à la mouture, en aval de la chaîne.",
      "Combustion lente possible dans la matière accumulée.",
      "Chevauchement salubrité : le nettoyage doit satisfaire les registres alimentaires.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine pendant le nettoyage.",
      "Nettoyage à fréquence définie des conduits, du pourtour des torréfacteurs et des refroidisseurs.",
      "Élimination du soufflage à l'air comprimé dans les zones de torréfaction.",
      "Retrait de la matière récupérée du bâtiment plutôt que de la laisser refroidir sur place.",
      "Un seul passage documenté servant au programme de poussières et à la salubrité.",
    ],
    faqs: [
      {
        question: "Le café est-il inflammable ?",
        answer:
          "Le café torréfié est une matière organique et il brûle. Dans une usine de torréfaction, la poussière combustible est la pellicule et les fines — une matière légère facilement mise en suspension qui s'accumule dans les conduits et autour des torréfacteurs, là où se trouvent aussi les sources d'inflammation. La torréfaction combine combustible et chaleur soutenue, ce qui fait du contrôle des accumulations la défense principale.",
      },
      {
        question: "Où débutent les incendies dans une torréfaction ?",
        answer:
          "Généralement dans de la matière accumulée plutôt que dans le grain lui-même : conduits de refroidissement et d'aspiration, pourtour des torréfacteurs, et refroidisseurs. La pellicule est assez légère pour voyager et s'accumuler hors de vue, ce qui explique pourquoi ces incendies surprennent.",
      },
      {
        question: "La poussière de café est-elle explosive ?",
        answer:
          "C'est une poussière organique combustible, et un nuage en suspension sous confinement peut déflagrer. En pratique, le danger dominant en torréfaction est l'incendie dans la matière accumulée, avec la possibilité d'une combustion lente. La sévérité s'établit par essai de votre propre matière.",
      },
      {
        question: "Peut-on souffler les conduits à l'air comprimé ?",
        answer:
          "Non. Le soufflage met la pellicule et les fines en suspension dans un local qui contient de la chaleur soutenue. La récupération sous vide retire la matière au lieu de la déplacer, et atteint l'intérieur des conduits où l'accumulation compte le plus.",
      },
    ],
    enPath: "/materials/coffee-dust",
  },
  {
    slug: "poussiere-de-graphite",
    name: "Poussière de graphite",
    group: "Poussières carbonées",
    metaTitle: "La poussière de graphite est-elle combustible et",
    metaDescription:
      "Le graphite est à la fois une poussière carbonée combustible du Groupe F et un conducteur électrique. Pourquoi cette combinaison impose des normes d'entretien strictes en fabrication d'électrodes et de piles.",
    intro:
      "Les deux, et c'est la combinaison qui mérite attention. Le graphite est une poussière carbonée combustible du Groupe F avec une tendance à la combustion lente, et il est électriquement conducteur — de sorte qu'une accumulation peut ponter et court-circuiter de l'équipement en plus de constituer un combustible.",
    facts: [
      { label: "Type de matière", value: "Poussière carbonée combustible et conductrice" },
      { label: "Groupe de poussière", value: "Classe II, Groupe F — poussières carbonées" },
      { label: "Double propriété", value: "Combustible et électriquement conducteur" },
      { label: "Secteurs", value: "Électrodes, fabrication de piles, lubrifiants, réfractaires" },
    ],
    overview: [
      "Dans la fabrication d'électrodes et de piles, où le graphite est manipulé en grande quantité, cette conductivité est la raison pour laquelle les normes d'entretien sont fixées aussi strictement. Une couche de graphite sur un tableau électrique n'est pas seulement du combustible : c'est un chemin conducteur.",
      "S'y ajoute la combustion lente commune aux poussières carbonées : un foyer profond peut persister dans la matière accumulée et se rallumer, ce qui rend le retrait de la matière récupérée du bâtiment une pratique nécessaire plutôt qu'une précaution.",
    ],
    risksHeading: "Pourquoi le graphite est doublement exigeant",
    risks: [
      "Conductivité électrique : une accumulation peut ponter et court-circuiter de l'équipement.",
      "Combustible carboné du Groupe F, avec tendance à la combustion lente.",
      "Finesse : le graphite se libère facilement et se dépose largement.",
      "Contamination des surfaces et des équipements loin du point de manipulation.",
      "Volume important en fabrication d'électrodes et de piles.",
      "Rallumage possible dans la matière récupérée laissée sur place.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant adapté au Groupe F, conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
      "Nettoyage prioritaire des tableaux, armoires et chemins de câbles, où la conductivité importe.",
      "Élimination du soufflage à l'air comprimé, qui disperse le graphite dans tout le bâtiment.",
      "Retrait de la matière récupérée du bâtiment à la fin de chaque passage.",
      "Fréquences définies pour les conduits et les surfaces en hauteur.",
    ],
    faqs: [
      {
        question: "La poussière de graphite est-elle combustible et conductrice ?",
        answer:
          "Les deux, et c'est la combinaison qui mérite attention. C'est une poussière carbonée combustible du Groupe F avec une tendance à la combustion lente, et elle est électriquement conductrice — de sorte qu'une accumulation peut ponter et court-circuiter de l'équipement en plus de constituer un combustible. Dans la fabrication d'électrodes et de piles, cette conductivité explique la sévérité des normes d'entretien.",
      },
      {
        question: "Pourquoi nettoyer les armoires électriques en priorité ?",
        answer:
          "Parce qu'une couche de graphite sur un tableau ou dans une armoire n'est pas seulement du combustible : c'est un chemin conducteur susceptible de ponter des bornes. C'est un mode de défaillance propre aux poussières conductrices, distinct du risque de déflagration.",
      },
      {
        question: "Le graphite se comporte-t-il comme le noir de carbone ?",
        answer:
          "Ils partagent la classification du Groupe F et la tendance à la combustion lente. Le graphite ajoute la conductivité électrique comme préoccupation dominante dans les contextes de piles et d'électrodes, où il est manipulé en grande quantité.",
      },
      {
        question: "Comment récupérer la poussière de graphite ?",
        answer:
          "Par aspiration avec un équipement adapté au Groupe F, conducteur et mis à la terre, avec une filtration absolue, et en sortant la matière récupérée du bâtiment à la fin de chaque passage. Le soufflage à l'air comprimé est à exclure : il disperse le graphite partout, y compris dans les équipements électriques.",
      },
    ],
    enPath: "/materials/graphite-dust",
  },
  {
    slug: "poussiere-de-tabac",
    name: "Poussière de tabac",
    group: "Poussières agricoles",
    metaTitle: "Qu'est-ce que le tabac combustible ?",
    metaDescription:
      "La poussière et les fines de tabac produites par la coupe, le conditionnement et le mélange sont une poussière combustible. Dangers en usine et récupération sécuritaire.",
    intro:
      "L'expression s'emploie de deux façons. En réglementation des produits du tabac, elle distingue les produits brûlés des alternatives non combustibles. Dans une usine de transformation, elle signifie quelque chose de plus immédiat : la poussière et les fines de tabac issues de la coupe, du conditionnement, du mélange et de l'ensachage constituent une poussière organique combustible.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible issue du tabac transformé" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Coupe, conditionnement, mélange, séchage, ensachage" },
      { label: "Facteur aggravant", value: "Chaleur soutenue des opérations de conditionnement et de séchage" },
    ],
    overview: [
      "La poussière de tabac s'accumule dans les conduits, sur l'acier en hauteur et à l'intérieur des équipements, là où se trouvent aussi les sources d'inflammation. Les opérations de conditionnement et de séchage ajoutent une chaleur soutenue au tableau.",
      "Si vous êtes arrivé ici pour une question de sécurité en usine, c'est la deuxième lecture qui compte : le contrôle des accumulations autour de ces zones est la priorité, plutôt que l'apparence du plancher.",
    ],
    risksHeading: "Ce qui compte en usine de tabac",
    risks: [
      "Poussière organique combustible produite à chaque étape mécanique.",
      "Accumulation dans les conduits et sur l'acier en hauteur, hors de vue.",
      "Chaleur soutenue au conditionnement et au séchage, à proximité de matière fine.",
      "Combustion lente possible dans la matière accumulée.",
      "Charges statiques dans le transport de matière sèche.",
      "Chevauchement avec les exigences de propreté du procédé.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
      "Nettoyage à fréquence définie des conduits, de l'acier en hauteur et du pourtour des séchoirs.",
      "Élimination du soufflage à l'air comprimé dans les zones de transformation.",
      "Retrait de la matière récupérée du bâtiment plutôt que de la laisser sur place.",
      "Un seul passage documenté servant au programme de poussières et à la propreté du procédé.",
    ],
    faqs: [
      {
        question: "Qu'est-ce que le tabac combustible ?",
        answer:
          "L'expression s'emploie de deux façons. En réglementation des produits du tabac, elle distingue les produits brûlés des alternatives non combustibles. Dans une usine de transformation, elle signifie quelque chose de plus immédiat : la poussière et les fines de tabac issues de la coupe, du conditionnement, du mélange et de l'ensachage constituent une poussière organique combustible, et elles s'accumulent dans les conduits et sur l'acier en hauteur où se trouvent aussi les sources d'inflammation.",
      },
      {
        question: "La poussière de tabac est-elle combustible ?",
        answer:
          "Oui. Le tabac est une matière organique sèche et sa poussière se comporte comme une poussière combustible, se mettant en suspension aux points de transfert. La NFPA 660 s'applique. Les opérations de conditionnement et de séchage ajoutent une chaleur soutenue, ce qui fait du contrôle des accumulations autour de ces zones la priorité.",
      },
      {
        question: "Où s'accumule la poussière de tabac ?",
        answer:
          "Dans les conduits, sur l'acier en hauteur, sur les rebords et à l'intérieur des carters d'équipement. C'est la fraction qui se dépose au-dessus de la hauteur des yeux qui alimente un événement secondaire, et c'est celle qui est inspectée le moins souvent.",
      },
      {
        question: "Peut-on balayer la poussière de tabac ?",
        answer:
          "Le balayage soulève les fines et n'atteint pas les accumulations en hauteur qui comptent réellement. La récupération sous vide avec un appareil mis à la terre et à filtration retenue retire la matière du bâtiment et atteint les surfaces qu'un balai n'atteindra jamais.",
      },
    ],
    enPath: "/materials/tobacco-dust",
  },

  {
    slug: "poussiere-de-caoutchouc",
    name: "Poussière de caoutchouc",
    group: "Poussières de plastiques et caoutchouc",
    metaTitle: "Le caoutchouc est-il inflammable ? Poussière de",
    metaDescription:
      "Le caoutchouc brûle facilement en produisant une fumée dense et toxique, et la poussière de meulage et de rectification de pneus est une poussière combustible. Dangers et récupération sécuritaire.",
    intro:
      "Oui. Le caoutchouc brûle facilement en produisant une fumée dense et toxique, et la poussière de caoutchouc issue du meulage, du polissage et de la transformation des pneus est une poussière combustible. Les particules récupérées retiennent aussi bien la chaleur.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (élastomères)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Produit de combustion", value: "Fumée dense et toxique" },
      { label: "Comportement notable", value: "Rétention de chaleur dans la matière récupérée" },
    ],
    overview: [
      "La transformation du caoutchouc — meulage, rectification de pneus, ébavurage, broyage de recyclage — produit une poussière fine qui se met en suspension et se dépose sur les surfaces en hauteur. La fumée produite en cas d'incendie est le danger secondaire qui rend l'atmosphère dangereuse au-delà du feu lui-même.",
      "La rétention de chaleur mérite attention : de la matière laissée dans un contenant après une opération de meulage conserve la chaleur du procédé. Un bac de poussière de caoutchouc laissé dans l'atelier en fin de quart mérite donc la même attention que le procédé qui l'a rempli.",
    ],
    risksHeading: "Ce qui compte avec la poussière de caoutchouc",
    risks: [
      "Combustion facile et fumée dense et toxique, qui rend l'atmosphère dangereuse au-delà du feu.",
      "Rétention de chaleur dans la matière récupérée après meulage.",
      "Accumulation en hauteur de la fraction fine issue du meulage et de la rectification.",
      "Charges statiques dans le transport de matière sèche.",
      "Mélange avec des particules métalliques provenant des tringles et des ceintures d'acier des pneus.",
      "Volume important dans les opérations de recyclage et de rechapage.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable pendant le nettoyage.",
      "Élimination du soufflage à l'air comprimé aux postes de meulage et de rectification.",
      "Retrait de la matière récupérée du bâtiment en fin de quart plutôt que de la laisser refroidir sur place.",
      "Grande capacité de collecte pour le volume des opérations de recyclage.",
      "Ségrégation lorsque des particules métalliques d'acier accompagnent le caoutchouc.",
    ],
    faqs: [
      {
        question: "Le caoutchouc est-il inflammable ?",
        answer:
          "Oui. Le caoutchouc brûle facilement en produisant une fumée dense et toxique, et la poussière de caoutchouc issue du meulage, du polissage et de la transformation des pneus est une poussière combustible. Les particules récupérées retiennent aussi la chaleur, de sorte que la matière laissée dans un contenant après une opération de meulage mérite la même attention que le procédé.",
      },
      {
        question: "La poussière de caoutchouc est-elle explosive ?",
        answer:
          "C'est une poussière organique combustible, et un nuage en suspension sous confinement peut déflagrer en présence d'une source d'inflammation. La sévérité s'établit par essai de votre propre matière, mais le danger le plus courant en pratique est l'incendie dans la matière accumulée, avec la fumée toxique qui l'accompagne.",
      },
      {
        question: "Pourquoi ne pas laisser la poussière de caoutchouc dans le bac ?",
        answer:
          "Parce que la matière récupérée après meulage conserve la chaleur du procédé, et qu'un contenant plein concentre en un seul endroit le combustible qui était réparti dans l'atelier. Le retrait en fin de quart est un contrôle simple et efficace.",
      },
      {
        question: "Les particules d'acier des pneus changent-elles la récupération ?",
        answer:
          "Elles ajoutent une fraction métallique abrasive et conductrice à un flux organique, ce qui use l'équipement plus vite et complique l'élimination. La ségrégation à la collecte, quand le procédé le permet, simplifie les deux.",
      },
    ],
    enPath: "/materials/rubber-dust",
  },
  {
    slug: "poussiere-de-coke",
    name: "Poussière de coke",
    group: "Poussières carbonées",
    metaTitle: "Le coke est-il inflammable ? Poussière de coke et",
    metaDescription:
      "Le coke est un combustible carboné et sa poussière est combustible, avec une tendance marquée à la combustion lente en profondeur. Dangers et récupération sécuritaire.",
    intro:
      "Oui. Le coke est un combustible carboné, et la poussière de coke est une poussière combustible. Sa caractéristique particulière est une tendance à la combustion lente — un foyer profond à l'intérieur de la matière accumulée, qui peut persister sans être remarqué et se rallumer plus tard.",
    facts: [
      { label: "Type de matière", value: "Poussière carbonée combustible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe F — poussières carbonées" },
      { label: "Comportement distinctif", value: "Combustion lente en profondeur, avec rallumage possible" },
      { label: "Norme applicable", value: "NFPA 660" },
    ],
    overview: [
      "C'est la raison pour laquelle la poussière de coke récupérée n'est pas laissée dans les contenants de collecte. Un incendie qui paraît éteint peut brûler à l'intérieur de la matière accumulée, et le contenant plein concentre le combustible en un seul endroit.",
      "Le coke apparaît en sidérurgie, en fonderie, dans la production d'électrodes et dans les procédés de calcination. Les points de transfert et de criblage produisent la fraction la plus fine, généralement dans des structures confinées.",
    ],
    risksHeading: "Ce qui rend le coke particulier",
    risks: [
      "Combustion lente en profondeur : un foyer peut persister dans la matière accumulée et se rallumer.",
      "Contenants pleins laissés à l'intérieur : le danger le plus simple à éliminer.",
      "Confinement aux points de transfert et de criblage.",
      "Conductivité de la poussière carbonée, qui peut affecter l'équipement électrique.",
      "Accumulation sur les surfaces en hauteur dans les structures de manutention.",
      "Exposition respiratoire aux poussières carbonées.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant adapté au Groupe F, conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
      "Retrait de la matière récupérée du bâtiment à la fin de chaque passage.",
      "Élimination du soufflage à l'air comprimé dans la manutention du coke.",
      "Fréquences définies pour les points de transfert, les cribles et les surfaces en hauteur.",
      "Surveillance des bacs de collecte : un incendie apparemment éteint mérite un suivi.",
    ],
    faqs: [
      {
        question: "Le coke est-il inflammable ?",
        answer:
          "Oui. Le coke est un combustible carboné et la poussière de coke est une poussière combustible. Sa caractéristique particulière est une tendance à la combustion lente — un foyer profond à l'intérieur de la matière accumulée, qui peut persister sans être remarqué et se rallumer plus tard. C'est pourquoi la poussière de coke récupérée n'est pas laissée dans les contenants de collecte.",
      },
      {
        question: "Qu'est-ce que la combustion lente en profondeur ?",
        answer:
          "Une combustion qui se poursuit à l'intérieur d'une masse de matière accumulée, sans flamme visible en surface. Elle peut persister des heures ou des jours et se rallumer après qu'un événement visible paraît résolu — c'est pourquoi un incendie apparemment éteint dans un bac de poussière carbonée mérite un suivi plutôt qu'un soulagement.",
      },
      {
        question: "Le coke se manipule-t-il comme le charbon ?",
        answer:
          "Les deux sont des poussières carbonées du Groupe F et partagent la tendance à la combustion lente. Les procédés diffèrent — le coke apparaît en sidérurgie, en fonderie et en production d'électrodes — mais les contrôles de récupération et la discipline sur les contenants sont les mêmes.",
      },
      {
        question: "Comment récupérer la poussière de coke ?",
        answer:
          "Par aspiration avec un équipement adapté au Groupe F, conducteur et mis à la terre, avec une filtration retenue, et en sortant la matière récupérée du bâtiment à la fin de chaque passage plutôt qu'en laissant les contenants sur place.",
      },
    ],
    enPath: "/materials/coke-dust",
  },
  {
    slug: "poussiere-de-noir-de-carbone",
    name: "Poussière de noir de carbone",
    group: "Poussières carbonées",
    metaTitle: "La poussière de carbone est-elle combustible ?",
    metaDescription:
      "Le noir de carbone est une poussière carbonée combustible de Classe II Groupe F, extrêmement fine et difficile à confiner, avec une tendance à la combustion lente.",
    intro:
      "Oui. Le noir de carbone, et les poussières carbonées en général, sont combustibles et relèvent de la Classe II, Groupe F pour la classification des emplacements dangereux. Leur caractéristique déterminante est la combustion lente.",
    facts: [
      { label: "Type de matière", value: "Poudre de carbone fine manufacturée" },
      { label: "Groupe de poussière", value: "Classe II, Groupe F — poussières carbonées" },
      { label: "Usages", value: "Pigment et charge renforçante dans le caoutchouc, les revêtements, les encres et les plastiques" },
      { label: "Comportement distinctif", value: "Extrême finesse ; combustion lente en profondeur" },
    ],
    overview: [
      "Le noir de carbone est une poudre de carbone fine et manufacturée, utilisée comme pigment et charge renforçante. Il est extraordinairement fin et extrêmement difficile à confiner une fois libéré — il tache tout et voyage à travers un bâtiment au moindre courant d'air.",
      "Bien le manipuler relève autant de la discipline d'entretien que de la sécurité incendie. La combustion lente reste la caractéristique déterminante : un foyer profond peut persister dans la matière accumulée et se rallumer bien après qu'un événement visible paraît résolu.",
    ],
    risksHeading: "Ce qui rend le noir de carbone exigeant",
    risks: [
      "Extrême finesse : se libère et voyage au moindre courant d'air.",
      "Combustion lente en profondeur, avec rallumage possible longtemps après.",
      "Contamination généralisée : il tache les surfaces et les équipements loin du point de manipulation.",
      "Conductivité de la poussière carbonée, qui peut affecter l'équipement électrique.",
      "Difficulté de confinement lors des changements de filtres et de contenants.",
      "Accumulation dans les conduits et sur les surfaces en hauteur.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant adapté au Groupe F, conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % — indispensable avec une poudre aussi fine.",
      "Collecte scellée et procédure contrôlée pour le changement de filtres et de contenants.",
      "Élimination du soufflage à l'air comprimé, qui disperse le noir de carbone dans tout le bâtiment.",
      "Retrait de la matière récupérée du bâtiment à la fin de chaque passage.",
      "Fréquences définies pour les conduits et les surfaces en hauteur.",
    ],
    faqs: [
      {
        question: "La poussière de carbone est-elle combustible ?",
        answer:
          "Oui. Le noir de carbone et les poussières carbonées en général sont combustibles et relèvent du Groupe F pour la classification des emplacements dangereux. Leur caractéristique déterminante est la combustion lente : un foyer profond peut persister dans la matière accumulée sans être remarqué et se rallumer longtemps après qu'un événement visible paraît résolu.",
      },
      {
        question: "Qu'est-ce que le noir de carbone ?",
        answer:
          "Une poudre de carbone fine et manufacturée, utilisée comme pigment et charge renforçante dans le caoutchouc, les revêtements, les encres et les plastiques. Elle est extraordinairement fine et extrêmement difficile à confiner une fois libérée — elle tache tout et voyage à travers un bâtiment au moindre courant d'air.",
      },
      {
        question: "Pourquoi la filtration absolue est-elle indispensable ?",
        answer:
          "Parce que la finesse du noir de carbone est précisément le problème. Un appareil dont la filtration ne retient pas la fraction la plus fine la renvoie dans le local que l'on vient de nettoyer, et le noir de carbone rend cet échec immédiatement visible sur toutes les surfaces.",
      },
      {
        question: "Comment nettoyer le noir de carbone ?",
        answer:
          "Par récupération sous vide avec filtration absolue et collecte scellée, jamais par soufflage à l'air comprimé — qui disperserait la poudre dans tout le bâtiment. Le changement de filtres et de contenants mérite une procédure écrite, parce que c'est le moment où le confinement est le plus fragile.",
      },
    ],
    enPath: "/materials/carbon-black",
  },

  {
    slug: "poussiere-de-grain",
    name: "Poussière de grain",
    group: "Poussières agricoles",
    metaTitle: "La poussière de grain est-elle combustible ?",
    metaDescription:
      "La poussière de grain est combustible — le registre des explosions d'élévateurs a fait de la maîtrise des poussières un sujet réglementé. Dangers, normes et récupération sécuritaire.",
    intro:
      "Oui. La poussière de grain est une poussière organique combustible, et le registre des explosions d'élévateurs à grains est la raison pour laquelle la maîtrise des poussières est devenue un sujet réglementé en agriculture.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible d'origine céréalière" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Réception, convoyage, élévateurs, nettoyage, séchage, chargement" },
      { label: "Normes applicables", value: "NFPA 660 (regroupant l'ancienne NFPA 61) ; dispositions OSHA sur la manutention des grains" },
    ],
    overview: [
      "La NFPA 660 regroupe désormais les dispositions agricoles auparavant contenues dans la NFPA 61, et la norme OSHA sur les installations de manutention des grains s'applique aux opérations visées. C'est l'un des rares secteurs où des fréquences de nettoyage figurent dans une réglementation plutôt que dans une norme consensuelle seulement.",
      "Le danger se concentre là où le grain change de direction : fosses de réception, têtes et pieds d'élévateurs, tours de transfert, nettoyeurs et séchoirs. Ces points combinent la fraction la plus fine, du confinement et des sources d'inflammation mécaniques — roulements, entraînements et, dans les séchoirs, de la chaleur soutenue.",
    ],
    risksHeading: "Ce qui rend les installations de grain particulières",
    risks: [
      "Registre d'explosions documenté : les élévateurs à grains sont l'exemple historique de référence.",
      "Confinement dans les élévateurs et les tours de transfert, avec des accumulations sur toute la hauteur.",
      "Séchoirs : chaleur soutenue à proximité de matière fine accumulée.",
      "Combustion lente possible dans le grain accumulé et dans les résidus de nettoyage.",
      "Exposition respiratoire : la poussière de grain est associée à des symptômes respiratoires professionnels.",
      "Accumulation en hauteur difficile d'accès, souvent nettoyée seulement lors d'arrêts.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification le favorise.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable pendant le nettoyage.",
      "Élimination du soufflage à l'air comprimé dans toute l'installation.",
      "Fréquences définies pour les fosses, les têtes et pieds d'élévateurs, les tours et le périmètre des séchoirs.",
      "Retrait de la matière récupérée du bâtiment plutôt que de laisser des contenants pleins sur place.",
    ],
    faqs: [
      {
        question: "La poussière de grain est-elle combustible ?",
        answer:
          "Oui. La poussière de grain est une poussière organique combustible, et le registre des explosions d'élévateurs à grains est la raison pour laquelle la maîtrise des poussières est devenue un sujet réglementé en agriculture. La NFPA 660 regroupe désormais les dispositions agricoles auparavant dans la NFPA 61, et la norme OSHA sur la manutention des grains s'applique aux opérations visées.",
      },
      {
        question: "La poussière de blé est-elle combustible ?",
        answer:
          "Oui, comme la poussière de grain en général. Le comportement de votre matière précise s'établit par essai, puisque la granulométrie et l'humidité changent le résultat, mais le blé se traite comme une poussière combustible.",
      },
      {
        question: "Où se concentre le danger dans un élévateur ?",
        answer:
          "Là où le grain change de direction : fosses de réception, têtes et pieds d'élévateurs, tours de transfert, nettoyeurs et séchoirs. Ces points combinent la fraction la plus fine, du confinement et des sources d'inflammation mécaniques — et les séchoirs y ajoutent une chaleur soutenue.",
      },
      {
        question: "Peut-on souffler la poussière de grain à l'air comprimé ?",
        answer:
          "Non. Le soufflage transforme une accumulation déposée en nuage en suspension, dans des structures qui offrent déjà un confinement important. Il déplace aussi la matière vers des surfaces en hauteur difficiles d'accès au lieu de la retirer.",
      },
    ],
    enPath: "/materials/grain-dust",
  },
  {
    slug: "poussiere-de-beton-et-de-ciment",
    name: "Poussière de béton et de ciment",
    group: "Poussières minérales",
    metaTitle: "Le ciment est-il inflammable ? Non — le vrai",
    metaDescription:
      "Le ciment et le béton ne sont pas combustibles et ne déflagrent pas. Le véritable danger est la silice cristalline respirable, régie par une limite OSHA de 50 µg/m³.",
    intro:
      "Non. Le ciment Portland, le béton et leurs poussières sont minéraux et non combustibles — ils ne brûlent pas et ne produisent pas de déflagration. C'est une exception réelle et importante parmi les poussières industrielles, et il vaut la peine de le dire clairement parce que le véritable danger est souvent négligé quand on ne pense qu'au feu.",
    facts: [
      { label: "Type de matière", value: "Poussière minérale non combustible" },
      { label: "Combustibilité", value: "Aucune — ne brûle pas, ne déflagre pas" },
      { label: "Danger réel", value: "Silice cristalline respirable — silicose, cancer du poumon" },
      { label: "Limite d'exposition", value: "Norme OSHA sur la silice cristalline respirable — 50 µg/m³ (MPT 8 h)" },
    ],
    overview: [
      "La coupe, le meulage et la démolition du béton libèrent de la silice cristalline respirable, qui cause une maladie pulmonaire irréversible. La norme OSHA fixe une limite d'exposition admissible de 50 microgrammes par mètre cube en moyenne pondérée sur huit heures, et c'est ce chiffre — non un risque d'incendie — qui impose une captation filtrée HEPA sur les travaux de béton.",
      "Si votre analyse des dangers couvre une installation mixte, le ciment et le béton sont correctement classés comme poussières non combustibles nuisibles et sanitaires, tandis que toute poussière organique ou métallique présente dans le même bâtiment est évaluée séparément pour le risque de déflagration.",
    ],
    risksHeading: "Ce qui compte réellement avec le béton",
    risks: [
      "Silice cristalline respirable : cause la silicose, une maladie pulmonaire irréversible.",
      "Limite d'exposition basse : 50 µg/m³ en MPT 8 h, bien en dessous d'une poussière visible.",
      "Association au cancer du poumon en plus de la silicose.",
      "Génération par des opérations ordinaires : coupe, meulage, ponçage, démolition.",
      "Absence de danger de déflagration, ce qui conduit à sous-estimer la matière.",
      "Volume important sur les chantiers de démolition et de rénovation.",
    ],
    solutions: [
      "Récupération par aspirateur à filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
      "Élimination du balayage à sec et du soufflage à l'air comprimé sur les travaux de béton.",
      "Captation à la source sur les scies, les meuleuses et les ponceuses.",
      "Méthodes humides là où le procédé et l'évaluation d'exposition le permettent.",
      "Collecte et élimination scellées pour éviter une seconde mise en suspension.",
      "Fréquences de nettoyage documentées dans le programme d'hygiène industrielle.",
    ],
    faqs: [
      {
        question: "Le ciment est-il inflammable ?",
        answer:
          "Non. Le ciment Portland, le béton et leurs poussières sont minéraux et non combustibles — ils ne brûlent pas et ne produisent pas de déflagration. C'est une exception réelle parmi les poussières industrielles, et il vaut la peine de le dire clairement parce que le véritable danger est manqué quand on ne s'interroge que sur le feu.",
      },
      {
        question: "La poussière de ciment est-elle explosive ?",
        answer:
          "Non. Il n'y a aucun danger de déflagration lié à la poussière de ciment ou de béton. Le danger est sanitaire : la coupe, le meulage et la démolition libèrent de la silice cristalline respirable, qui cause une maladie pulmonaire irréversible. La norme OSHA fixe une limite d'exposition de 50 microgrammes par mètre cube en MPT 8 h, et c'est ce chiffre qui impose une captation filtrée HEPA.",
      },
      {
        question: "La poussière de ciment est-elle combustible ?",
        answer:
          "Elle ne l'est pas. Dans une analyse des dangers couvrant une installation mixte, le ciment et le béton sont classés comme poussières non combustibles nuisibles et sanitaires, tandis que toute poussière organique ou métallique du même bâtiment est évaluée séparément pour le risque de déflagration.",
      },
      {
        question: "Comment maîtriser la poussière de béton ?",
        answer:
          "Par captation à la source sur les scies, meuleuses et ponceuses, récupération par aspirateur à filtration absolue HEPA, et méthodes humides là où le procédé le permet. Le balayage à sec et le soufflage à l'air comprimé sont les mauvaises méthodes — non pour un risque d'incendie, mais parce qu'ils remettent en suspension une poussière dont la limite d'exposition est parmi les plus basses.",
      },
    ],
    enPath: "/materials/concrete-cement-dust",
  },
  {
    slug: "poussiere-de-zinc",
    name: "Poussière de zinc",
    group: "Poussières métalliques",
    metaTitle: "Le zinc est-il inflammable ? Poussière de zinc et",
    metaDescription:
      "Le zinc massif ne s'enflamme pas facilement ; la poussière et la poudre de zinc sont des poussières métalliques combustibles réactives. Réaction avec l'eau, fièvre des fondeurs et récupération.",
    intro:
      "Le zinc massif ne s'enflamme pas facilement ; la poussière et la poudre de zinc sont des poussières métalliques combustibles réactives. Le zinc réagit aussi avec l'eau et les acides en libérant de l'hydrogène, de sorte qu'un nettoyage humide n'est pas un choix neutre.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique combustible réactive" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E — poussière métallique conductrice" },
      { label: "Réactivité", value: "Libère de l'hydrogène au contact de l'eau et des acides" },
      { label: "Danger sanitaire distinct", value: "Les fumées d'oxyde de zinc causent la fièvre des fondeurs" },
    ],
    overview: [
      "Séparément du danger d'incendie, les fumées d'oxyde de zinc issues du travail à chaud sont la cause classique de la fièvre des fondeurs — un problème d'exposition plutôt que de combustion. C'est la raison la plus fréquente pour laquelle un opérateur travaillant sur de l'acier galvanisé ou du laiton se sent grippé en fin de quart.",
      "Le zinc apparaît en galvanisation, en fonderie, dans les alliages de laiton, dans les pigments et dans la fabrication de piles. La poudre de zinc utilisée comme réducteur chimique constitue le cas le plus réactif.",
    ],
    risksHeading: "Ce que fait la poussière de zinc",
    risks: [
      "Combustible sous forme de poudre : la poussière et la poudre de zinc sont des poussières métalliques réactives.",
      "Réaction avec l'eau et les acides, libérant de l'hydrogène — le nettoyage humide n'est pas neutre.",
      "Conductivité : les poussières du Groupe E peuvent court-circuiter de l'équipement électrique.",
      "Fumées d'oxyde de zinc : cause classique de la fièvre des fondeurs au travail à chaud.",
      "Acier galvanisé : le revêtement de zinc génère des fumées lors du soudage et de la découpe.",
      "Accumulation de chaleur dans les contenants de particules récupérées.",
    ],
    solutions: [
      "Récupération par aspirateur conducteur, mis à la terre et équipotentiel, avec accessoires antistatiques.",
      "Filtration absolue HEPA 99,99 % là où des particules respirables sont générées.",
      "Captation à la source au soudage et à la découpe d'acier galvanisé.",
      "Prudence avec les méthodes humides, en raison de la réaction du zinc avec l'eau et les acides.",
      "Ségrégation du zinc, sans mélange avec d'autres métaux à la collecte.",
      "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Le zinc est-il inflammable ?",
        answer:
          "Le zinc massif ne s'enflamme pas facilement ; la poussière et la poudre de zinc sont des poussières métalliques combustibles réactives. Le zinc réagit aussi avec l'eau et les acides en libérant de l'hydrogène, de sorte qu'un nettoyage humide n'est pas un choix neutre. Séparément, les fumées d'oxyde de zinc issues du travail à chaud sont la cause classique de la fièvre des fondeurs.",
      },
      {
        question: "Qu'est-ce que la fièvre des fondeurs ?",
        answer:
          "Une réaction aiguë de type grippal causée par l'inhalation de fumées métalliques, le plus souvent des fumées d'oxyde de zinc issues du soudage ou de la découpe d'acier galvanisé ou du travail à chaud du laiton. Elle se résorbe, mais elle signale une surexposition significative et devrait entraîner une révision des contrôles plutôt qu'être acceptée comme normale.",
      },
      {
        question: "Peut-on nettoyer la poussière de zinc à l'eau ?",
        answer:
          "Avec prudence. Le zinc réagit avec l'eau et les acides en libérant de l'hydrogène, ce qui rend le nettoyage humide moins neutre qu'il n'y paraît. La récupération sous vide avec un circuit conducteur et mis à la terre est le point de départ, et toute méthode humide devrait suivre une évaluation propre à votre matière.",
      },
      {
        question: "Le soudage d'acier galvanisé produit-il de la poussière de zinc ?",
        answer:
          "Il produit des fumées d'oxyde de zinc, ce qui est le danger dominant dans ce contexte : le revêtement de zinc se volatilise à la chaleur de l'arc. La captation à la source est le contrôle attendu, et c'est un problème d'exposition distinct de la combustibilité de la poudre de zinc.",
      },
    ],
    enPath: "/materials/zinc-dust",
  },

  {
    slug: "poussiere-de-magnesium",
    name: "Poussière de magnésium",
    group: "Poussières métalliques",
    metaTitle: "Le magnésium est-il inflammable ? Particules de",
    metaDescription:
      "Le magnésium est parmi les métaux structuraux les plus facilement inflammables. Ses particules brûlent à température extrême et l'eau est dangereuse. Récupération sécuritaire et dispositions de Classe D.",
    intro:
      "Oui, et de façon notable. Le magnésium figure parmi les métaux structuraux les plus facilement inflammables, et ses particules brûlent à température extrême une fois amorcées. L'eau est activement dangereuse sur du magnésium en combustion parce qu'elle libère de l'hydrogène.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique combustible hautement réactive" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E — poussière métallique conductrice" },
      { label: "Classe d'incendie", value: "Classe D — l'eau est activement dangereuse" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 484)" },
    ],
    overview: [
      "La prévention constitue toute la stratégie : aucune accumulation, aucune source d'inflammation, méthodes de Classe D, et un équipement de récupération incapable de produire une étincelle.",
      "Le magnésium apparaît dans les alliages légers pour l'automobile et l'aérospatiale, dans les pièces moulées et dans l'usinage de composants allégés. L'opération d'usinage ou de meulage produit simultanément le combustible et, par les étincelles, une source d'inflammation possible — ce qui explique la sévérité des exigences.",
    ],
    risksHeading: "Ce que fait la poussière de magnésium",
    risks: [
      "Inflammation très facile : parmi les métaux structuraux les plus sensibles.",
      "Température de combustion extrême, difficile à maîtriser une fois amorcée.",
      "Eau activement dangereuse : elle libère de l'hydrogène au contact du métal chaud.",
      "Conductivité : les poussières du Groupe E peuvent court-circuiter de l'équipement électrique.",
      "Accumulation de chaleur dans les contenants de particules récupérées.",
      "Étincelles d'usinage et de meulage produites par l'opération même qui génère les particules.",
    ],
    solutions: [
      "Équipement de récupération conducteur, mis à la terre et équipotentiel, exempt de sources d'inflammation.",
      "Séparation par immersion pour garder les particules récupérées mouillées plutôt qu'à sec.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification le favorise.",
      "Ségrégation stricte du magnésium, sans mélange avec d'autres métaux ni avec du liquide de coupe.",
      "Élimination du soufflage à l'air comprimé partout où des particules de magnésium sont produites.",
      "Dispositions de Classe D et personnel formé : l'eau n'est pas le bon outil, et il faut le savoir avant d'en avoir besoin.",
    ],
    faqs: [
      {
        question: "Le magnésium est-il inflammable ?",
        answer:
          "Oui, et de façon notable. Le magnésium figure parmi les métaux structuraux les plus facilement inflammables, et ses particules et sa poudre brûlent à température extrême une fois amorcées. L'eau est activement dangereuse sur du magnésium en combustion parce qu'elle libère de l'hydrogène. La prévention constitue toute la stratégie : aucune accumulation, aucune source d'inflammation, méthodes de Classe D et un équipement de récupération qui ne peut pas produire d'étincelle.",
      },
      {
        question: "Peut-on utiliser de l'eau sur un feu de magnésium ?",
        answer:
          "Non — c'est l'un des cas où la réaction instinctive est la plus dommageable. Le magnésium réagit avec l'eau en libérant de l'hydrogène, ce qui ajoute un second combustible à un incendie déjà difficile. Les feux de magnésium sont de Classe D, et le personnel doit le savoir avant d'être devant la situation.",
      },
      {
        question: "Comment récupérer les particules de magnésium ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et équipotentiel de bout en bout, exempt de sources d'inflammation, et en gardant les particules séparées des autres métaux et du liquide de coupe. Lorsque l'évaluation le justifie, la séparation par immersion évite l'accumulation à sec dans un contenant, qui est le mode de défaillance principal.",
      },
      {
        question: "Où le magnésium apparaît-il ?",
        answer:
          "Dans les alliages légers pour l'automobile et l'aérospatiale, les pièces moulées et l'usinage de composants allégés. L'usinage et le meulage produisent le combustible et, par les étincelles, une source d'inflammation possible — dans la même opération.",
      },
    ],
    enPath: "/materials/magnesium-dust",
  },
  {
    slug: "poussiere-de-plomb",
    name: "Poussière de plomb",
    group: "Poussières métalliques",
    metaTitle: "La poussière de plomb est-elle dangereuse ?",
    metaDescription:
      "Le plomb est une toxine systémique cumulative régie par la norme OSHA 29 CFR 1910.1025, avec une limite d'exposition de 50 µg/m³. Pourquoi le balayage à sec est interdit et comment la récupération HEPA maîtrise l'exposition.",
    intro:
      "Oui, et de façon cumulative. Le plomb est une toxine systémique qui atteint le système nerveux, les reins et le sang, les enfants étant particulièrement vulnérables à la matière rapportée à la maison sur les vêtements.",
    facts: [
      { label: "Type de matière", value: "Métal lourd toxique — poussière et fumées" },
      { label: "Danger principal", value: "Toxicité systémique cumulative, non la déflagration" },
      { label: "Limite d'exposition", value: "Norme OSHA sur le plomb, 29 CFR 1910.1025 — 50 µg/m³" },
      { label: "Combustibilité", value: "Le plomb n'est pas un danger d'incendie" },
    ],
    overview: [
      "OSHA régit le plomb par le 29 CFR 1910.1025 avec une limite d'exposition admissible de 50 microgrammes par mètre cube. La poussière de plomb n'est pas un danger d'incendie : la raison pour laquelle votre méthode de nettoyage est réglementée est l'exposition, et là où la norme s'applique, le balayage à sec n'est pas une méthode acceptable.",
      "Le plomb apparaît dans le décapage de peinture ancienne, la démolition, les champs de tir, la fabrication et le recyclage de batteries, le brasage et les laitons de décolletage. La voie qui échappe le plus souvent à l'attention est le transport domestique : la poussière sur les vêtements et les outils quitte le lieu de travail avec l'opérateur.",
    ],
    risksHeading: "Pourquoi le plomb exige des méthodes contenues",
    risks: [
      "Toxine systémique cumulative : le plomb s'accumule et atteint le système nerveux, les reins et le sang.",
      "Vulnérabilité des enfants à la poussière rapportée à la maison sur les vêtements et les outils.",
      "Limite d'exposition basse : 50 µg/m³ sous la norme OSHA sur le plomb.",
      "Sources multiples : peinture ancienne, démolition, champs de tir, batteries, brasage, laitons plombés.",
      "Ingestion comme voie réelle : la poussière sur les mains atteint les personnes par l'alimentation.",
      "Absence de danger d'incendie, ce qui conduit à sous-estimer la matière.",
    ],
    solutions: [
      "Récupération par aspirateur à filtration absolue HEPA 99,99 %, afin que le plomb capté soit retenu.",
      "Élimination du balayage à sec et du soufflage à l'air comprimé partout où du plomb peut être présent.",
      "Collecte et élimination scellées, traitées comme un déchet réglementé.",
      "Équipement dédié maintenu dans la zone réglementée et étiqueté.",
      "Méthodes humides là où le procédé et l'évaluation d'exposition le permettent.",
      "Hygiène soutenue : lavage des mains, pas de repas en zone réglementée, gestion des vêtements de travail.",
    ],
    faqs: [
      {
        question: "La poussière de plomb est-elle dangereuse ?",
        answer:
          "Oui, et de façon cumulative. Le plomb est une toxine systémique qui atteint le système nerveux, les reins et le sang, les enfants étant particulièrement vulnérables à la matière rapportée à la maison sur les vêtements. OSHA le régit par le 29 CFR 1910.1025 avec une limite d'exposition admissible de 50 microgrammes par mètre cube. La poussière de plomb n'est pas un danger d'incendie : la raison pour laquelle la méthode de nettoyage est réglementée est l'exposition.",
      },
      {
        question: "Peut-on balayer la poussière de plomb ?",
        answer:
          "Non. Le balayage à sec remet une toxine réglementée en suspension, et là où la norme OSHA sur le plomb s'applique, ce n'est pas une méthode acceptable. La récupération par aspirateur à filtration HEPA avec élimination scellée est le contrôle attendu, avec des méthodes humides là où le procédé le permet.",
      },
      {
        question: "Où la poussière de plomb apparaît-elle ?",
        answer:
          "Décapage et démolition de peinture ancienne, champs de tir intérieurs, fabrication et recyclage de batteries, brasage, et usinage de laitons de décolletage contenant du plomb. Cette dernière source surprend souvent, parce que rien dans la description d'une pièce n'indique la présence de plomb.",
      },
      {
        question: "Pourquoi l'équipement doit-il être dédié ?",
        answer:
          "Parce qu'un aspirateur qui récupère une matière réglementée puis nettoie ailleurs déplace un problème de conformité vers une nouvelle partie du bâtiment. Des appareils dédiés et étiquetés qui demeurent dans la zone réglementée sont la pratique attendue, et c'est habituellement la première chose qu'un vérificateur examine.",
      },
    ],
    enPath: "/materials/lead-dust",
  },
  {
    slug: "poussiere-de-sucre",
    name: "Poussière de sucre",
    group: "Poussières alimentaires",
    metaTitle: "La poussière de sucre est-elle explosive ?",
    metaDescription:
      "Le sucre est une poussière organique combustible et le registre des raffineries en témoigne. Comportement, accumulation et récupération sécuritaire par aspirateur antidéflagrant avec filtration HEPA.",
    intro:
      "La poussière de sucre est une poussière organique combustible, et un nuage en suspension dans sa plage d'explosibilité sous confinement peut déflagrer en présence d'une source d'inflammation. Le registre des raffineries et des confiseries explique pourquoi la manipulation du sucre est prise au sérieux.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible (saccharose)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Où elle est produite", value: "Raffinage, broyage, tamisage, transfert, ensachage, confiserie" },
      { label: "Normes applicables", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
    ],
    overview: [
      "Le sucre broyé et le sucre glace produisent la fraction fine qui compte. Comme pour les autres poussières alimentaires, l'accumulation en hauteur — poutres, rebords, dessus de conduits, extérieur des carters — constitue le combustible d'un événement secondaire.",
      "Le sucre présente une particularité : il est hygroscopique et peut se prendre en masse en présence d'humidité, ce qui complique le nettoyage et peut masquer l'ampleur d'une accumulation. La sévérité exacte s'établit par essai de votre propre matière, puisque la granulométrie et l'humidité changent le résultat.",
    ],
    risksHeading: "Ce qui compte avec la poussière de sucre",
    risks: [
      "Poussière organique combustible : le registre des raffineries en témoigne directement.",
      "Accumulation en hauteur : la fraction fine se dépose au-dessus de la hauteur des yeux.",
      "Concentration au broyage : le sucre glace et le sucre broyé produisent la matière la plus fine.",
      "Caractère hygroscopique : le sucre peut se prendre en masse et masquer l'ampleur d'une accumulation.",
      "Électricité statique dans le transport pneumatique de matière sèche.",
      "Chevauchement salubrité : le nettoyage doit satisfaire les registres de salubrité autant que la prévention des incendies.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine pendant le nettoyage.",
      "Élimination du soufflage à l'air comprimé dans les zones de sucre.",
      "Nettoyage à fréquence définie de l'acier en hauteur, du dessus des conduits et des carters de broyeurs.",
      "Récupération humide là où le sucre pris en masse exige une autre approche.",
      "Un seul passage documenté servant au programme de poussières et aux registres de salubrité.",
    ],
    faqs: [
      {
        question: "La poussière de sucre est-elle explosive ?",
        answer:
          "La poussière de sucre est une poussière organique combustible, et un nuage en suspension dans sa plage d'explosibilité sous confinement peut déflagrer en présence d'une source d'inflammation. Le registre des raffineries et des confiseries explique pourquoi la manipulation du sucre est prise au sérieux. La sévérité est propre à la matière et à la granulométrie, et s'établit par essai de votre propre produit.",
      },
      {
        question: "Le sucre glace est-il plus dangereux que le sucre granulé ?",
        answer:
          "La fraction fine est celle qui compte, donc oui : le broyage et le sucre glace produisent la matière la plus facilement mise en suspension et la plus rapide à s'enflammer. C'est la même logique que pour la farine et l'amidon — la granulométrie détermine le comportement.",
      },
      {
        question: "Où s'accumule la poussière de sucre ?",
        answer:
          "Partout où le sucre est broyé, tamisé, transféré ou ensaché. La poussière qui compte le plus pour le risque de déflagration est celle qui se dépose au-dessus de la hauteur des yeux — poutres, rebords, dessus de conduits et extérieur des carters de broyeurs.",
      },
      {
        question: "Le caractère hygroscopique du sucre change-t-il le nettoyage ?",
        answer:
          "Oui. Le sucre absorbe l'humidité et peut se prendre en masse, ce qui complique le retrait et peut masquer l'ampleur réelle d'une accumulation. Une récupération humide est parfois appropriée pour la matière agglomérée, tandis que la fraction fine sèche demeure le danger de déflagration.",
      },
    ],
    enPath: "/materials/sugar-dust",
  },

  {
    slug: "poussiere-de-cuivre",
    name: "Poussière de cuivre",
    group: "Poussières métalliques",
    metaTitle: "Le cuivre est-il inflammable ? Poussière de",
    metaDescription:
      "Le cuivre massif n'est pas inflammable ; la poudre fine de cuivre est traitée comme une poussière métallique potentiellement combustible à caractériser par essai. Dangers respiratoires et récupération sécuritaire.",
    intro:
      "Le cuivre massif n'est pas inflammable et s'enflamme difficilement. La poudre de cuivre finement divisée est traitée comme une poussière métallique potentiellement combustible et doit être évaluée par essai plutôt que par présomption — la granulométrie détermine la réponse.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique conductrice, réactivité plus faible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E — poussière métallique conductrice" },
      { label: "Danger courant", value: "Irritation respiratoire par la poussière et les fumées" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 484)" },
    ],
    overview: [
      "Le cuivre se situe à l'extrémité moins réactive des poussières métalliques, mais « moins réactif » n'est pas « inerte ». La poudre fine devrait être caractérisée par essai, et la poussière reste conductrice — ce qui signifie qu'une accumulation peut ponter des connexions électriques en plus de constituer un combustible potentiel.",
      "Dans la pratique quotidienne, la préoccupation dominante avec la poussière et les fumées de cuivre est l'irritation respiratoire. L'usinage, le meulage et le polissage du cuivre et de ses alliages produisent des particules respirables, et le travail à chaud génère des fumées métalliques.",
    ],
    risksHeading: "Ce qui compte avec la poussière de cuivre",
    risks: [
      "Conductivité : la poussière de cuivre peut ponter et court-circuiter de l'équipement électrique.",
      "Combustibilité à caractériser : la poudre fine doit être évaluée par essai plutôt que présumée inerte.",
      "Irritation respiratoire par la poussière et les fumées de cuivre.",
      "Alliages : le laiton et le bronze introduisent le zinc et parfois le plomb, avec leurs propres exigences.",
      "Abrasivité modérée des copeaux et des particules d'usinage.",
      "Valeur de rebut perdue lorsque les métaux sont mélangés à la collecte.",
    ],
    solutions: [
      "Récupération par aspirateur conducteur, mis à la terre et équipotentiel, avec accessoires antistatiques.",
      "Filtration absolue HEPA 99,99 % là où des particules respirables sont générées.",
      "Captation à la source au meulage et au polissage.",
      "Récupération humide là où les copeaux arrivent avec du liquide de coupe.",
      "Ségrégation par métal pour préserver la valeur de rebut et simplifier l'élimination.",
      "Élimination du soufflage à l'air comprimé aux machines-outils.",
    ],
    faqs: [
      {
        question: "Le cuivre est-il inflammable ?",
        answer:
          "Le cuivre massif n'est pas inflammable et s'enflamme difficilement. La poudre de cuivre finement divisée est traitée comme une poussière métallique potentiellement combustible et doit être évaluée par essai plutôt que par présomption — la granulométrie détermine la réponse. La préoccupation la plus courante au quotidien avec la poussière et les fumées de cuivre est l'irritation respiratoire.",
      },
      {
        question: "La poussière de cuivre est-elle conductrice ?",
        answer:
          "Oui, et cela compte autant que la combustibilité. Une accumulation de poussière métallique conductrice peut ponter des bornes et court-circuiter de l'équipement électrique, ce qui explique le traitement sévère réservé au Groupe E dans la classification des emplacements dangereux.",
      },
      {
        question: "Le laiton et le bronze se manipulent-ils comme le cuivre ?",
        answer:
          "Pas tout à fait. Ce sont des alliages de cuivre, et les dangers viennent de ce à quoi le cuivre est allié : le zinc produit des fumées d'oxyde de zinc au travail à chaud, et plusieurs laitons de décolletage contiennent du plomb, régi par sa propre norme. Demandez la composition de l'alliage avant d'usiner un stock inconnu.",
      },
      {
        question: "Comment récupérer la poussière de cuivre ?",
        answer:
          "Par aspiration avec un circuit conducteur, mis à la terre et équipotentiel, et une filtration retenue là où des particules respirables sont produites. Le soufflage à l'air comprimé aux machines-outils est à exclure : c'est le moyen le plus rapide de mettre des particules fines dans la zone respiratoire.",
      },
    ],
    enPath: "/materials/copper-dust",
  },
  {
    slug: "poussiere-de-charbon",
    name: "Poussière de charbon",
    group: "Poussières carbonées",
    metaTitle: "La poussière de charbon est-elle explosive ?",
    metaDescription:
      "La poussière de charbon est une poussière carbonée combustible de Classe II Groupe F, reconnue pour se consumer lentement en profondeur. Dangers, pneumoconiose et récupération sécuritaire.",
    intro:
      "La poussière de charbon est une poussière carbonée combustible, et le registre des explosions en mine et en centrale figure parmi les plus documentés de la sécurité industrielle. Sa caractéristique distinctive est la combustion lente : un foyer profond peut persister dans la matière accumulée et se rallumer.",
    facts: [
      { label: "Type de matière", value: "Poussière carbonée combustible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe F — poussières carbonées" },
      { label: "Comportement distinctif", value: "Combustion lente en profondeur, avec rallumage possible" },
      { label: "Volet sanitaire", value: "L'inhalation chronique cause la pneumoconiose des mineurs de charbon" },
    ],
    overview: [
      "La manipulation du combustible génère de la poussière à chaque transfert — déchargement, convoyage, concassage, broyage et mise en silo. Les galeries de convoyeurs et les tours de transfert reproduisent en miniature les conditions d'une déflagration : poussière fine, confinement et sources d'inflammation abondantes.",
      "La combustion lente mérite un traitement distinct de la déflagration. Un incendie qui paraît éteint dans de la poussière de charbon accumulée peut brûler à l'intérieur, ce qui explique pourquoi la matière récupérée est retirée du bâtiment plutôt qu'entreposée. Un contenant plein laissé dans une galerie est une accumulation, non une solution.",
    ],
    risksHeading: "Ce qui rend la poussière de charbon particulière",
    risks: [
      "Combustion lente en profondeur : un foyer peut persister dans la matière accumulée et se rallumer plus tard.",
      "Accumulation dans les galeries de convoyeurs, avec moteurs et roulements répartis sur toute la longueur.",
      "Tours de transfert : les goulottes produisent la fraction la plus fine et la confinent.",
      "Concentration au broyage : la matière la plus fine de l'installation, près de sources de chaleur.",
      "Contenants pleins laissés à l'intérieur : le danger le plus facile à éliminer et le plus souvent négligé.",
      "Pneumoconiose : l'inhalation chronique cause une maladie pulmonaire irréversible.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel, adapté au Groupe F.",
      "Appareils pneumatiques là où l'air comprimé est disponible, bien adaptés au travail continu en galerie.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable pendant le nettoyage.",
      "Élimination du soufflage à l'air comprimé dans toute la manipulation du combustible.",
      "Retrait de la matière récupérée du bâtiment à la fin de chaque passage — jamais de contenant plein laissé sur place.",
      "Fréquences par surface : acier de galerie, rebords de tours, extérieur des carters de broyeurs et périmètre des entraînements.",
    ],
    faqs: [
      {
        question: "La poussière de charbon est-elle explosive ?",
        answer:
          "Oui. C'est une poussière carbonée combustible de Classe II, Groupe F, et le registre des explosions en mine et en centrale figure parmi les plus documentés de la sécurité industrielle. Elle se consume aussi lentement : un foyer profond peut persister dans la matière accumulée ou entreposée et se rallumer après qu'un événement visible paraît résolu.",
      },
      {
        question: "Pourquoi la poussière de charbon récupérée ne peut-elle pas rester dans le contenant ?",
        answer:
          "Parce qu'un contenant plein concentre en un seul endroit le combustible qui était réparti en couche mince dans la galerie, et que la poussière carbonée peut retenir la chaleur à l'intérieur. Le contrôle est simple : sortir la matière récupérée du bâtiment à la fin de chaque passage de nettoyage plutôt que de laisser les contenants sur place.",
      },
      {
        question: "Par où commencer dans une centrale ?",
        answer:
          "Les galeries de convoyeurs et les tours de transfert, parce qu'elles combinent les plus fortes accumulations, le confinement le plus étroit et une répartition de moteurs et de roulements. Les zones de broyage suivent, puisqu'elles produisent la matière la plus fine de l'installation.",
      },
      {
        question: "La poussière de charbon est-elle dangereuse pour la santé ?",
        answer:
          "Oui. L'inhalation chronique de poussière de charbon cause la pneumoconiose des mineurs de charbon, une maladie pulmonaire irréversible. Le contrôle de l'exposition accompagne donc le contrôle de l'incendie, et une filtration retenue pendant le nettoyage fait partie des deux.",
      },
    ],
    enPath: "/materials/coal-dust",
  },
  {
    slug: "poussiere-de-titane",
    name: "Poussière de titane",
    group: "Poussières métalliques",
    metaTitle: "Le titane est-il inflammable ? Particules de",
    metaDescription:
      "Le titane massif s'enflamme difficilement ; les particules et la poudre de titane s'enflamment facilement et brûlent à température extrême. Pourquoi l'eau et le CO₂ sont inappropriés et comment récupérer les fines.",
    intro:
      "Le titane massif s'enflamme difficilement. Les particules, les copeaux et la poudre de titane s'enflamment facilement et brûlent à température extrême une fois amorcés. C'est un métal combustible sous la NFPA 660, et l'eau comme le dioxyde de carbone sont inappropriés sur du titane en combustion.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique combustible réactive" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E — poussière métallique conductrice" },
      { label: "Classe d'incendie", value: "Classe D — l'eau et le CO₂ sont inappropriés" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 484)" },
    ],
    overview: [
      "Parce que l'eau et le dioxyde de carbone ne conviennent pas, l'accent porte entièrement sur la prévention de l'inflammation : récupération contrôlée, aucune accumulation, aucune étincelle près des particules fines.",
      "L'étape de récupération elle-même peut fournir l'énergie d'inflammation. Les particules de titane sont conductrices et sensibles, de sorte que l'aspirateur doit être mis à la terre et équipotentiel de bout en bout, exempt de sources d'inflammation, et dans bien des cas une séparation par immersion est spécifiée pour que les particules récupérées demeurent mouillées plutôt que de s'accumuler à sec.",
    ],
    risksHeading: "Ce que font les particules de titane",
    risks: [
      "Inflammation facile des particules et de la poudre, contrairement au métal massif.",
      "Températures de combustion extrêmes, difficiles à maîtriser une fois amorcées.",
      "Eau et CO₂ inappropriés : les moyens d'extinction habituels ne conviennent pas.",
      "Conductivité : les poussières du Groupe E peuvent court-circuiter de l'équipement électrique.",
      "Accumulation à sec dans les contenants, où la chaleur peut s'accumuler.",
      "Étincelles de meulage : l'opération produit simultanément le combustible et l'inflammation.",
    ],
    solutions: [
      "Équipement de récupération incapable de fournir une énergie d'inflammation : conducteur, mis à la terre et équipotentiel.",
      "Séparation par immersion pour garder les particules récupérées mouillées plutôt qu'à sec.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification le favorise.",
      "Ségrégation stricte du titane, sans mélange avec d'autres métaux ni avec du liquide de coupe.",
      "Élimination du soufflage à l'air comprimé partout où des particules de titane sont produites.",
      "Retrait rapide de la matière récupérée du bâtiment ; dispositions de Classe D et personnel formé.",
    ],
    faqs: [
      {
        question: "Le titane est-il inflammable ?",
        answer:
          "Le titane massif s'enflamme difficilement ; les particules, les copeaux et la poudre s'enflamment facilement et brûlent à température extrême une fois amorcés. C'est un métal combustible sous la NFPA 660, qui a regroupé l'ancienne NFPA 484. L'eau et le dioxyde de carbone sont inappropriés sur du titane en combustion, de sorte que l'accent porte sur la prévention de l'inflammation.",
      },
      {
        question: "Pourquoi la récupération du titane exige-t-elle un équipement particulier ?",
        answer:
          "Parce que l'étape de récupération elle-même peut fournir l'énergie d'inflammation. Les particules de titane sont conductrices et sensibles, de sorte que l'aspirateur doit être mis à la terre et équipotentiel de bout en bout et exempt de sources d'inflammation. Dans bien des cas, une séparation par immersion est spécifiée pour que les particules demeurent mouillées plutôt que de s'accumuler à sec.",
      },
      {
        question: "Peut-on utiliser de l'eau sur un feu de titane ?",
        answer:
          "Non. Les feux de métaux sont de Classe D, et l'eau comme le dioxyde de carbone sont inappropriés sur du titane en combustion. C'est précisément pourquoi la prévention — aucune accumulation, aucune source d'inflammation, récupération contrôlée — porte l'essentiel du poids.",
      },
      {
        question: "Comment collecter les copeaux et les particules de titane ?",
        answer:
          "Séparément des autres métaux et du liquide de coupe, avec un équipement conducteur et mis à la terre, et en retirant la matière récupérée du bâtiment rapidement. Laisser un contenant de particules de titane dans l'atelier est le mode de défaillance à concevoir hors du procédé.",
      },
    ],
    enPath: "/materials/titanium-dust",
  },

  {
    slug: "poussiere-metallique-combustible",
    name: "Poussière métallique combustible",
    group: "Poussières métalliques",
    metaTitle: "Poussière métallique combustible — quels métaux",
    metaDescription:
      "Quels métaux forment une poussière combustible, pourquoi l'eau aggrave un feu de métal, ce que signifie la Classe II Groupe E et comment récupérer les particules fines de meulage et d'usinage.",
    intro:
      "La page d'ensemble sur les poussières métalliques. Le métal massif se manipule sans danger ; le même métal réduit en particules fines est une matière différente, avec des règles différentes — où l'eau peut aggraver un incendie, où la conductivité compte autant que la combustibilité, et où la méthode de récupération fait partie du dossier de sécurité.",
    facts: [
      { label: "Ce qui rend la poussière combustible", value: "La surface exposée — les particules fines exposent bien plus de métal à l'oxygène" },
      { label: "Classification", value: "Classe II, Groupe E — poussières métalliques conductrices" },
      { label: "Classe d'incendie", value: "Classe D — l'eau et le CO₂ sont généralement inappropriés" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 484 pour les métaux combustibles)" },
    ],
    overview: [
      "La question arrive habituellement sous la forme « les métaux sont-ils inflammables ? », et la réponse honnête est que le métal n'est pas la variable : la granulométrie l'est. Un bloc d'aluminium ne soutiendra pas la combustion dans un atelier ordinaire. Le même aluminium en poussière de meulage est un combustible réactif exposant une grande surface à l'oxygène. Rien n'a changé dans la chimie, seulement dans la géométrie.",
      "Quels métaux importent en pratique ? L'aluminium, le magnésium, le titane et le zirconium forment le groupe réactif qui impose la manipulation la plus stricte. Le fer et l'acier, le lithium, le cobalt, le manganèse, l'étain, le zinc, le chrome et le nickel exigent tous une évaluation comme poussières combustibles lorsqu'ils sont finement divisés, certains présentant des préoccupations de toxicité qui dominent la question de l'incendie — le nickel et le chrome en particulier. Le cuivre et le laiton se situent à l'extrémité moins réactive, mais devraient tout de même être caractérisés par essai plutôt que présumés inertes.",
    ],
    risksHeading: "Pourquoi la poussière métallique se manipule autrement",
    risks: [
      "La granulométrie transforme la matière : les particules de meulage, de coupe, de polissage et de sablage ne se comportent pas comme le métal d'origine.",
      "L'eau peut aggraver : plusieurs métaux réactifs libèrent de l'hydrogène à chaud en présence d'eau.",
      "La poussière conductrice court-circuite l'équipement : les poussières du Groupe E peuvent ponter des connexions électriques.",
      "Températures de combustion extrêmes : les particules de magnésium et de titane brûlent beaucoup plus chaud que la matière organique.",
      "Comportement pyrophorique des particules très fines fraîchement générées.",
      "Accumulation mixte : les bacs combinant plusieurs métaux, du liquide de coupe et d'autres débris créent des conditions non évaluées.",
      "Combustion lente dans les contenants : les particules récupérées peuvent retenir la chaleur et se rallumer.",
    ],
    solutions: [
      "Équipement de récupération incapable de fournir une énergie d'inflammation : conducteur, mis à la terre et équipotentiel, avec accessoires antistatiques.",
      "Séparation par immersion pour les particules réactives, gardées mouillées plutôt que de s'accumuler à sec.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification favorise un entraînement sans composant électrique.",
      "Ségrégation par métal, sans mélanger avec d'autres matières ou du liquide de coupe.",
      "Élimination du soufflage à l'air comprimé, qui met les particules en suspension et les projette sur des surfaces chaudes.",
      "Retrait rapide de la matière récupérée du bâtiment.",
      "Dispositions de Classe D et personnel formé, sachant que l'eau et le CO₂ ne sont pas les outils appropriés.",
    ],
    faqs: [
      {
        question: "Quels métaux forment une poussière combustible ?",
        answer:
          "L'aluminium, le magnésium, le titane et le zirconium constituent le groupe le plus réactif et imposent la manipulation la plus stricte. Le fer et l'acier, le lithium, le cobalt, le manganèse, l'étain, le zinc, le chrome et le nickel exigent une évaluation comme poussières combustibles lorsqu'ils sont finement divisés. Le cuivre et le laiton sont moins réactifs mais devraient tout de même être caractérisés par essai. Le principe constant est que la finesse, et non l'identité du métal seule, détermine le comportement.",
      },
      {
        question: "Les métaux sont-ils inflammables ?",
        answer:
          "Le métal massif ne l'est pas dans un contexte d'atelier ordinaire. Le métal finement divisé est autre chose : réduire le même métal en poussière expose une surface énorme à l'oxygène, et les particules issues du meulage, de l'usinage, du sablage ou de la manipulation de poudres peuvent s'enflammer et propager la combustion. Les particules de magnésium et de titane sont les plus facilement inflammables parmi les métaux industriels courants.",
      },
      {
        question: "Que signifie Classe II, Groupe E ?",
        answer:
          "Le Groupe E est le groupe de poussières des emplacements dangereux couvrant les poussières métalliques combustibles — aluminium, magnésium et leurs alliages commerciaux, ainsi que d'autres poussières dont la granulométrie, l'abrasivité et la conductivité électrique présentent des dangers comparables. Il est traité avec une sévérité particulière parce qu'une poussière conductrice peut court-circuiter et ponter de l'équipement électrique en plus d'alimenter une déflagration.",
      },
      {
        question: "Pourquoi ne peut-on pas utiliser d'eau sur un feu de poussière métallique ?",
        answer:
          "Plusieurs métaux réactifs réagissent avec l'eau à température élevée en libérant de l'hydrogène : appliquer de l'eau sur des particules en combustion ajoute donc un second combustible. Les feux de métaux sont de Classe D, où l'eau et le CO₂ sont généralement inappropriés. C'est une des raisons pour lesquelles la prévention — aucune accumulation, aucune source d'inflammation, récupération contrôlée — porte l'essentiel du poids avec la poussière métallique.",
      },
      {
        question: "Que faire après avoir inhalé de la poussière métallique ?",
        answer:
          "Éloignez-vous de l'exposition et consultez un médecin plutôt que de gérer la situation de façon informelle, et signalez l'événement pour que l'exposition soit évaluée. Certains métaux comportent des obligations précises en santé au travail — le cadmium, le béryllium, le plomb, le nickel et le chrome notamment — et des symptômes pseudo-grippaux après un travail à chaud sur du matériel galvanisé ou du laiton peuvent indiquer une fièvre des fondeurs. Nous fabriquons de l'équipement de récupération ; un clinicien et votre service de santé au travail sont les autorités appropriées en matière d'exposition.",
      },
    ],
    enPath: "/materials/combustible-metal-dust",
  },
  {
    slug: "poussiere-de-bois",
    name: "Poussière de bois",
    group: "Poussières de bois",
    metaTitle: "La poussière de bois est-elle combustible ?",
    metaDescription:
      "La poussière de bois est combustible et classée cancérogène pour l'humain par le CIRC. Pourquoi la poussière de sablage est plus dangereuse que les copeaux et comment la récupérer en sécurité.",
    intro:
      "La poussière de bois est l'une des poussières combustibles classiques — la poussière fine de sablage bien davantage que les copeaux ou les retailles, parce que la granulométrie détermine le comportement. Elle comporte aussi un volet sanitaire que beaucoup d'ateliers sous-estiment.",
    facts: [
      { label: "Type de matière", value: "Poussière organique combustible" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Volet sanitaire", value: "Classée cancérogène pour l'humain par le CIRC — cancers naso-sinusiens" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 664 pour le bois)" },
    ],
    overview: [
      "Chaque opération de coupe, de rabotage, de ponçage et de perçage produit des particules, et c'est la fraction fine du ponçage qui compte le plus pour le risque de déflagration. Cette poussière légère reste en suspension assez longtemps pour voyager et se déposer sur les poutres, les rebords et le dessus des conduits, loin de la machine qui l'a produite.",
      "Le programme de nettoyage remplit donc deux fonctions. Il retire le combustible qu'une inflammation primaire disperserait, et une filtration retenue réduit la charge inhalable — la poussière de bois est classée cancérogène pour l'humain par le CIRC, avec des cancers naso-sinusiens parmi les effets documentés, et c'est aussi un irritant et un sensibilisant respiratoire.",
    ],
    risksHeading: "Ce qui rend la poussière de bois exigeante",
    risks: [
      "Poussière organique combustible : la fraction fine de ponçage est la plus dangereuse.",
      "Accumulation en hauteur : les particules fines se déposent sur l'acier, les rebords et les conduits — le combustible d'un événement secondaire.",
      "Cancérogène : classée cancérogène pour l'humain par le CIRC, avec des cancers naso-sinusiens documentés.",
      "Irritation et sensibilisation respiratoires, certaines essences présentant des préoccupations additionnelles.",
      "Volume important : les ateliers de bois accumulent rapidement de grandes quantités.",
      "Électricité statique dans les conduits et le transport pneumatique de matière sèche.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel de bout en bout.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable pendant le nettoyage.",
      "Élimination du soufflage à l'air comprimé, qui transforme une couche déposée en nuage.",
      "Grande capacité de collecte ou système centralisé pour le volume d'un atelier de bois.",
      "Nettoyage à fréquence définie de l'acier en hauteur, du dessus des conduits et des carters de machines.",
      "Retrait de la matière récupérée du bâtiment plutôt que de laisser des contenants pleins sur place.",
    ],
    faqs: [
      {
        question: "La poussière de bois est-elle combustible ?",
        answer:
          "Oui, et c'est l'une des poussières combustibles classiques — la poussière fine de ponçage bien davantage que les copeaux, parce que la granulométrie détermine le comportement. La NFPA 660, qui a regroupé l'ancienne NFPA 664 pour les installations de transformation du bois, est la norme de référence.",
      },
      {
        question: "La poussière de bois est-elle nocive à respirer ?",
        answer:
          "Oui. La poussière de bois est classée cancérogène pour l'humain par le CIRC, avec des cancers naso-sinusiens parmi les effets documentés, et elle est également un irritant et un sensibilisant respiratoire. La poussière de feuillus et certaines essences comportent des préoccupations additionnelles. Le programme de poussières d'un atelier remplit donc deux fonctions à la fois, et la filtration retenue compte autant que le contrôle des accumulations.",
      },
      {
        question: "Où s'accumule la poussière de bois ?",
        answer:
          "Partout où le bois est coupé, raboté, poncé ou percé. La poussière qui compte le plus pour le risque de déflagration est la fraction fine qui se dépose au-dessus de la hauteur des yeux — poutres, rebords, dessus de conduits et extérieur des carters de machines.",
      },
      {
        question: "Peut-on souffler la poussière de bois à l'air comprimé ?",
        answer:
          "Non. Le soufflage transforme une couche déposée en nuage en suspension, dans un local qui contient déjà du confinement et des sources d'inflammation. Il déplace aussi la matière au lieu de la retirer, généralement vers des surfaces en hauteur que personne n'inspecte.",
      },
    ],
    enPath: "/materials/wood-dust",
  },
  {
    slug: "poussiere-de-fer-et-d-acier",
    name: "Poussière de fer et d'acier",
    group: "Poussières métalliques",
    metaTitle: "La poussière de fer est-elle combustible ?",
    metaDescription:
      "Une plaque d'acier ne brûle pas, mais la poussière fine de fer et d'acier peut s'enflammer, se consumer lentement et se comporter de façon pyrophorique. Récupération sécuritaire des particules de meulage et de sablage.",
    intro:
      "Une plaque d'acier ne prendra pas feu, mais la poussière fine de fer et d'acier est une autre question : les particules de meulage, la poussière de sablage au grenat et la poudre de fer très fine fraîchement générée peuvent s'enflammer, se consumer lentement à l'intérieur de la matière récupérée et, sous leur forme la plus fine, se comporter de façon pyrophorique.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique combustible (conductrice)" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E — poussière métallique conductrice" },
      { label: "Comportement notable", value: "Combustion lente dans la matière accumulée ; pyrophoricité des particules très fines" },
      { label: "Norme applicable", value: "NFPA 660 (regroupant l'ancienne NFPA 484)" },
    ],
    overview: [
      "C'est pourquoi les débris de meulage et de sablage sont traités comme une poussière métallique combustible plutôt que comme du gravier balayé. Les particules sont aussi abrasives, ce qui use les boyaux, les tubes et les surfaces de séparation d'un équipement qui n'est pas conçu pour cette tâche.",
      "S'y ajoute la conductivité électrique : les poussières métalliques du Groupe E peuvent ponter des bornes et court-circuiter de l'équipement en plus de brûler. Dans un atelier de fabrication, l'accumulation autour des moteurs et des roulements combine donc chaleur, combustible et possibilité de court-circuit.",
    ],
    risksHeading: "Ce que font les particules fines de fer et d'acier",
    risks: [
      "Inflammation et combustion lente : les particules fines peuvent s'enflammer et se consumer à l'intérieur de la matière collectée.",
      "Pyrophoricité des particules très fines fraîchement générées.",
      "Conductivité : les poussières du Groupe E peuvent court-circuiter et ponter de l'équipement électrique.",
      "Abrasivité : les débris usent boyaux, tubes et surfaces de séparation.",
      "Étincelles du procédé : le meulage produit simultanément le combustible et la source d'inflammation.",
      "Accumulation près des sources de chaleur : moteurs et roulements combinent chaleur et combustible.",
    ],
    solutions: [
      "Récupération par aspirateur conducteur, mis à la terre et équipotentiel, avec accessoires antistatiques.",
      "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
      "Filtration absolue HEPA 99,99 % là où des particules respirables sont générées.",
      "Récupération humide ou par immersion là où les copeaux arrivent avec du liquide de coupe.",
      "Élimination du soufflage à l'air comprimé aux machines-outils.",
      "Retrait rapide de la matière récupérée, sans laisser de contenants pleins dans l'atelier.",
    ],
    faqs: [
      {
        question: "La poussière de fer est-elle inflammable ?",
        answer:
          "Une plaque d'acier ne prendra pas feu, mais la poussière fine de fer et d'acier est une autre question : les particules de meulage, la poussière de sablage et la poudre de fer très fine fraîchement générée peuvent s'enflammer, se consumer lentement à l'intérieur de la matière collectée et, sous leur forme la plus fine, se comporter de façon pyrophorique. C'est pourquoi les débris de meulage sont traités comme une poussière métallique combustible.",
      },
      {
        question: "La poussière d'acier est-elle combustible ?",
        answer:
          "La poussière fine d'acier se comporte comme la poussière fine de fer. Le stock d'acier massif ne présente pas de risque d'incendie ; la poussière produite en le travaillant est une poussière métallique combustible et se manipule comme telle.",
      },
      {
        question: "Pourquoi le meulage est-il particulièrement à risque ?",
        answer:
          "Parce que l'opération fournit à la fois le combustible et la source d'inflammation : elle réduit le métal en particules fines et projette simultanément des particules incandescentes. C'est pourquoi le contrôle des accumulations importe autant dans les cabines de meulage, et pourquoi le soufflage à l'air comprimé y est la pire option disponible.",
      },
      {
        question: "Comment récupérer les particules de meulage ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et équipotentiel de bout en bout, construit pour résister à l'abrasion, et doté d'une filtration qui retient la fraction respirable. Là où les copeaux arrivent avec du liquide de coupe, une récupération conçue pour le liquide est appropriée.",
      },
    ],
    enPath: "/materials/iron-dust",
  },

  {
    slug: "poussiere-de-cadmium",
    name: "Poussière de cadmium",
    group: "Poussières métalliques",
    metaTitle: "La poussière de cadmium est-elle dangereuse ?",
    metaDescription:
      "Le cadmium est un métal lourd cancérogène régi par sa propre norme OSHA. Où la poussière et les fumées de cadmium apparaissent, pourquoi le balayage à sec est interdit et comment la récupération HEPA maîtrise l'exposition.",
    intro:
      "Le cadmium est le cas où la question de l'incendie est la mauvaise question. Il possède sa propre norme OSHA, il est classé cancérogène pour l'humain, et il endommage les reins et les poumons à des concentrations bien inférieures à ce qui paraît poussiéreux. La manière dont vous le nettoyez est donc une question réglementaire, non une préférence d'entretien.",
    facts: [
      { label: "Type de matière", value: "Métal lourd toxique — poussière, fumées et composés" },
      { label: "Danger principal", value: "Toxicité chronique et cancérogénicité, non la déflagration" },
      { label: "Organes cibles", value: "Reins et poumons ; classé cancérogène pour l'humain par le CIRC" },
      { label: "Norme applicable", value: "Norme OSHA sur le cadmium, 29 CFR 1910.1027" },
    ],
    overview: [
      "Le cadmium apparaît dans la fabrication de piles nickel-cadmium, la galvanoplastie, les pigments, les stabilisants et — la voie d'exposition qui surprend le plus souvent — les alliages de brasage à l'argent et certaines soudures anciennes, où le chauffage génère des fumées d'oxyde de cadmium. La poudre fine de cadmium est évaluée comme une poussière métallique combustible, mais ce n'est pas ce qui rend le cadmium redoutable. C'est sa toxicité.",
      "Le cadmium s'accumule dans l'organisme, se concentrant dans les reins au fil d'années d'exposition à faible dose. C'est pourquoi OSHA le régit par une norme distincte plutôt que comme une poussière générique : le 29 CFR 1910.1027, qui impose l'évaluation de l'exposition, des contrôles techniques, des zones réglementées, une surveillance médicale et des obligations d'entretien précises. Ce dernier point atteint l'armoire à balais : là où une norme substance s'applique, le balayage à sec et le soufflage à l'air comprimé ne sont pas des méthodes acceptables.",
    ],
    risksHeading: "Pourquoi le cadmium se manipule autrement",
    risks: [
      "Cancérogène réglementé : le cadmium est classé cancérogène pour l'humain et régi par une norme substance distincte.",
      "Atteinte rénale cumulative : le cadmium s'accumule sur des années, de sorte que le dommage vient d'expositions faibles et répétées.",
      "Fumées lors du travail à chaud : les alliages de brasage à l'argent et certaines soudures génèrent des fumées d'oxyde de cadmium.",
      "Invisible à des concentrations dangereuses : les niveaux qui comptent sont bien inférieurs à ce qui paraît poussiéreux.",
      "Voies de contamination croisée : le cadmium voyage sur les vêtements, la peau et les outils.",
      "Combustibilité de la poudre fine : comme pour d'autres métaux finement divisés, elle est évaluée par essai — considération secondaire, non un substitut à la toxicité.",
    ],
    solutions: [
      "Récupération par aspirateur à filtration absolue HEPA 99,99 %, afin que le cadmium capté soit retenu et non rejeté dans la zone respiratoire.",
      "Élimination complète du balayage à sec et du soufflage à l'air comprimé dans les zones de cadmium.",
      "Collecte et élimination scellées, traitées comme un déchet réglementé plutôt que versées aux ordures générales.",
      "Équipement dédié maintenu dans la zone réglementée, pour que le cadmium ne soit pas transporté ailleurs dans l'usine.",
      "Captation à la source aux postes de brasage et de soudage.",
      "Fréquences de nettoyage documentées faisant partie du programme de conformité écrit.",
    ],
    faqs: [
      {
        question: "La poussière de cadmium est-elle dangereuse ?",
        answer:
          "Oui, et son danger est chronique plutôt que spectaculaire. Le cadmium s'accumule dans l'organisme — en se concentrant dans les reins — et il est classé cancérogène pour l'humain. Le dommage provient d'inhalations répétées à faible dose, à des concentrations bien inférieures à ce qui paraît poussiéreux. C'est pourquoi OSHA le régit par sa propre norme substance, le 29 CFR 1910.1027.",
      },
      {
        question: "D'où provient réellement l'exposition au cadmium ?",
        answer:
          "La fabrication de piles nickel-cadmium, la galvanoplastie, les pigments et les stabilisants sont les sources évidentes. Celle qui surprend est le travail à chaud : les alliages de brasage à l'argent et certaines soudures anciennes contiennent du cadmium, et leur chauffage génère des fumées d'oxyde de cadmium au visage de l'opérateur.",
      },
      {
        question: "Peut-on balayer la poussière de cadmium ?",
        answer:
          "Non. Le balayage à sec et le soufflage à l'air comprimé remettent un cancérogène réglementé dans l'air, et là où la norme OSHA sur le cadmium s'applique, ce ne sont pas des méthodes acceptables. La récupération par aspirateur à filtration HEPA avec élimination scellée est le contrôle attendu.",
      },
      {
        question: "Le cadmium est-il inflammable ou combustible ?",
        answer:
          "La poudre de cadmium finement divisée est évaluée comme une poussière métallique combustible et devrait être testée plutôt que présumée. Mais présenter le cadmium d'abord comme un danger d'incendie passe à côté de l'essentiel : la raison de sa réglementation, et la raison pour laquelle votre méthode de nettoyage importe, est sa toxicité chronique et sa cancérogénicité.",
      },
    ],
    enPath: "/materials/cadmium-dust",
  },
  {
    slug: "poussiere-de-soufre",
    name: "Poussière de soufre",
    group: "Poussières chimiques",
    metaTitle: "Le soufre est-il inflammable ? Poussière de",
    metaDescription:
      "Le soufre élémentaire est combustible et brûle en produisant du dioxyde de soufre toxique. Pourquoi la poussière de soufre s'enflamme si facilement et comment la récupérer sans créer de source d'inflammation.",
    intro:
      "Le soufre élémentaire est combustible et brûle avec une flamme bleu pâle en produisant du dioxyde de soufre — un gaz irritant toxique qui rend dangereuse l'atmosphère après un incendie de soufre. Sous forme de poudre fine, le soufre figure parmi les poussières industrielles les plus sensibles à l'inflammation.",
    facts: [
      { label: "Type de matière", value: "Poussière chimique combustible (soufre élémentaire)" },
      { label: "Particularité", value: "Sensibilité élevée à l'inflammation, y compris par décharge statique" },
      { label: "Produit de combustion", value: "Dioxyde de soufre — gaz irritant toxique" },
      { label: "Normes applicables", value: "NFPA 660 (regroupant l'ancienne NFPA 655 pour le soufre)" },
    ],
    overview: [
      "Ce qui distingue le soufre est la combinaison de deux propriétés : il s'enflamme à partir de sources d'énergie relativement faibles — y compris une décharge statique — et sa combustion produit un gaz toxique. C'est pourquoi les zones de manipulation du soufre sont maintenues propres plutôt que simplement rangées.",
      "Cette sensibilité explique aussi le choix de l'équipement. Un circuit de récupération conducteur, mis à la terre et équipotentiel n'est pas un raffinement dans une zone de soufre : c'est la mesure qui empêche l'appareil de nettoyage de devenir la source d'inflammation.",
    ],
    risksHeading: "Ce qui rend le soufre particulier",
    risks: [
      "Faible énergie d'inflammation : le soufre s'enflamme à partir de sources d'énergie faibles, y compris des décharges statiques.",
      "Produit de combustion toxique : le dioxyde de soufre rend l'atmosphère dangereuse après un incendie.",
      "Accumulation statique : le soufre sec circulant dans les boyaux et les goulottes génère des charges.",
      "Finesse : la poudre de soufre se met en suspension facilement et se dépose sur les surfaces en hauteur.",
      "Confinement dans l'équipement : broyeurs et convoyeurs combinent poussière fine, confinement et sources d'inflammation mécaniques.",
      "Corrosivité en présence d'humidité, ce qui influe sur le choix des matériaux de construction.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur, mis à la terre et équipotentiel de bout en bout.",
      "Accessoires antistatiques plutôt qu'un boyau de plastique ordinaire.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification le favorise.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction fine.",
      "Élimination du soufflage à l'air comprimé, qui met la poussière de soufre en suspension.",
      "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Le soufre est-il inflammable ?",
        answer:
          "Oui. Le soufre élémentaire est combustible et brûle avec une flamme bleu pâle en produisant du dioxyde de soufre, un gaz irritant toxique qui rend dangereuse l'atmosphère après un incendie de soufre. Sous forme de poudre fine, le soufre figure parmi les poussières industrielles les plus sensibles à l'inflammation, ce qui explique pourquoi les zones de manipulation sont tenues propres plutôt que simplement rangées.",
      },
      {
        question: "La poussière de soufre est-elle explosive ?",
        answer:
          "De la poussière de soufre en suspension dans un espace confiné peut déflagrer, et le soufre est reconnu pour s'enflammer à partir de sources d'énergie relativement faibles — y compris une décharge statique. Cette combinaison d'inflammation facile et de produit de combustion toxique est ce qui impose un équipement de récupération conducteur, mis à la terre et équipotentiel plutôt qu'un aspirateur industriel ordinaire.",
      },
      {
        question: "Le soufre est-il combustible ?",
        answer:
          "Oui, et la NFPA 660 — qui a regroupé l'ancienne NFPA 655 consacrée au soufre — est la norme de référence. La sévérité exacte dépend de la granulométrie et de l'humidité de votre matière et s'établit par essai.",
      },
      {
        question: "Comment nettoyer la poussière de soufre en sécurité ?",
        answer:
          "Par récupération sous vide avec un circuit conducteur, mis à la terre et équipotentiel du bout du boyau jusqu'au contenant, des accessoires antistatiques et une filtration qui retient la fraction fine. Le soufflage à l'air comprimé est à exclure : il met en suspension une poussière qui s'enflamme facilement, dans un local qui contient déjà du confinement et des sources d'inflammation.",
      },
    ],
    enPath: "/materials/sulfur-dust",
  },
  {
    slug: "poussiere-de-silice",
    name: "Poussière de silice",
    group: "Poussières minérales",
    metaTitle: "La poussière de silice est-elle dangereuse ?",
    metaDescription:
      "La silice cristalline respirable cause la silicose, une maladie pulmonaire irréversible. La norme OSHA fixe une limite d'exposition de 50 µg/m³. Pourquoi la silice n'est pas combustible et comment la maîtriser.",
    intro:
      "La silice est l'exception utile dans ce répertoire : elle n'est pas combustible. Elle ne brûle pas et ne déflagre pas. Son danger est entièrement sanitaire — et il est sévère.",
    facts: [
      { label: "Type de matière", value: "Poussière minérale non combustible" },
      { label: "Danger principal", value: "Silice cristalline respirable — silicose, cancer du poumon" },
      { label: "Limite d'exposition", value: "Norme OSHA sur la silice cristalline respirable : 50 µg/m³ (MPT 8 h)" },
      { label: "Combustibilité", value: "Aucune — la silice ne brûle pas et ne déflagre pas" },
    ],
    overview: [
      "La silice cristalline respirable cause la silicose, une maladie pulmonaire irréversible, et elle est associée au cancer du poumon. La norme OSHA sur la silice cristalline respirable fixe une limite d'exposition admissible de 50 microgrammes par mètre cube en moyenne pondérée sur huit heures — un seuil suffisamment bas pour qu'une poussière visible le dépasse largement.",
      "Parce que la silice ne présente aucun danger de déflagration, elle échoue au test mental que beaucoup d'installations utilisent pour décider si une poussière mérite attention. C'est précisément l'erreur : le balayage à sec et le soufflage à l'air comprimé sont les mauvaises méthodes, non pour un risque d'incendie, mais parce qu'ils remettent en suspension une poussière dont la limite d'exposition est parmi les plus basses.",
    ],
    risksHeading: "Pourquoi la silice exige de la rigueur",
    risks: [
      "Silicose irréversible : la silice cristalline respirable cause une maladie pulmonaire permanente.",
      "Limite d'exposition très basse : 50 µg/m³ en MPT 8 h — bien en dessous de ce qui paraît poussiéreux.",
      "Association au cancer du poumon, en plus de la silicose.",
      "Omniprésence : béton, maçonnerie, sable de moulage, pierre, brique et bien d'autres matériaux.",
      "Génération par des opérations ordinaires : coupe, meulage, ponçage, démolition et sablage.",
      "Absence de danger d'incendie, ce qui conduit à sous-estimer la matière.",
    ],
    solutions: [
      "Récupération par aspirateur à filtration absolue HEPA 99,99 %, afin que la fraction respirable soit retenue.",
      "Élimination du balayage à sec et du soufflage à l'air comprimé partout où de la silice est présente.",
      "Captation à la source lors de la coupe, du meulage et du ponçage.",
      "Méthodes humides là où le procédé et l'évaluation d'exposition le permettent.",
      "Collecte et élimination scellées pour éviter une seconde mise en suspension.",
      "Fréquences de nettoyage documentées faisant partie du programme d'hygiène industrielle.",
    ],
    faqs: [
      {
        question: "La poussière de silice est-elle dangereuse ?",
        answer:
          "Oui. La silice cristalline respirable cause la silicose, une maladie pulmonaire irréversible, et elle est associée au cancer du poumon. La norme OSHA fixe une limite d'exposition admissible de 50 microgrammes par mètre cube en moyenne pondérée sur huit heures — assez bas pour qu'une poussière visible la dépasse largement. La silice n'est pas combustible ; le danger est entièrement sanitaire, ce qui explique pourquoi le balayage à sec et le soufflage à l'air comprimé sont les mauvaises méthodes.",
      },
      {
        question: "La poussière de silice est-elle combustible ou explosive ?",
        answer:
          "Non. La silice est minérale : elle ne brûle pas et ne présente aucun danger de déflagration, quelle que soit sa finesse. C'est une exception réelle parmi les poussières industrielles, et il vaut la peine de le dire clairement parce que le véritable danger est souvent négligé lorsqu'on ne pense qu'au feu.",
      },
      {
        question: "Où la silice apparaît-elle ?",
        answer:
          "Partout où l'on coupe, meule, ponce ou démolit du béton, de la maçonnerie, de la pierre ou de la brique, ainsi que dans le sable de moulage en fonderie et dans le sablage. Ce sont des opérations ordinaires, ce qui explique l'ampleur de l'exposition.",
      },
      {
        question: "Faut-il une filtration HEPA pour la silice ?",
        answer:
          "Là où une limite d'exposition aussi basse s'applique, une filtration absolue testée est la fonction même de l'appareil : elle retient la fraction respirable au lieu de la renvoyer dans le local que l'on vient de nettoyer. Demandez à quoi le filtre est testé, non comment il est nommé.",
      },
    ],
    enPath: "/materials/silica-dust",
  },

  {
    slug: "poussiere-d-amidon",
    name: "Poussière d'amidon",
    group: "Poussières alimentaires",
    metaTitle: "La poussière d'amidon est-elle combustible ?",
    metaDescription:
      "L'amidon en poudre est une poussière organique combustible — la fécule de maïs sert de poussière de référence en laboratoire. Comportement, risques et récupération sécuritaire par aspirateur antidéflagrant avec filtration HEPA.",
    intro:
      "L'amidon est la poudre à laquelle la science des explosions de poussières se compare. Parce que la fécule de maïs est sèche, fine et remarquablement uniforme, les laboratoires l'utilisent comme matière de référence dans les essais d'explosibilité. L'amidon qui s'accumule dans votre usine n'est donc pas une poudre ordinaire : c'est la matière à laquelle les autres poussières sont comparées.",
    facts: [
      { label: "Type de matière", value: "Poudre organique combustible fine (polysaccharide)" },
      { label: "Sources courantes", value: "Amidon de maïs, de blé, de pomme de terre, de tapioca et de riz" },
      { label: "Statut de référence", value: "La fécule de maïs sert de poussière de référence en laboratoire" },
      { label: "Normes applicables", value: "NFPA 660 (regroupant l'ancienne NFPA 61) ; directives OSHA sur les poussières combustibles" },
    ],
    overview: [
      "Ce qui rend l'amidon exigeant n'est pas sa chimie mais son comportement. Il se met en suspension avec une facilité remarquable : le versement, le vidage de sacs, le tamisage, le transport pneumatique et même la circulation du personnel le projettent dans l'air. Une fois en suspension, il retombe lentement et voyage — c'est ainsi que l'amidon se retrouve sur les poutres en hauteur, dans les armoires électriques et sur le dessus des conduits, loin de son point de manipulation.",
      "Cette répartition est le danger. Une inflammation primaire n'importe où dans le bâtiment peut soulever ces accumulations et produire l'événement secondaire qui cause les dommages réels. L'équipement de récupération doit donc retirer l'amidon sans créer de source d'inflammation et sans remettre l'accumulation en suspension — ce qui exclut le soufflage à l'air comprimé autant que les aspirateurs d'atelier ordinaires.",
    ],
    risksHeading: "Pourquoi la poussière d'amidon se comporte ainsi",
    risks: [
      "Finesse de référence : l'amidon sert d'étalon dans les essais d'explosibilité précisément parce qu'il est fin, sec et constant.",
      "Se met en suspension à la moindre perturbation : vidage de sacs, tamisage, transfert pneumatique et circulation ordinaire.",
      "Répartition invisible : parce qu'il retombe lentement, l'amidon s'accumule sur l'acier en hauteur, les chemins de câbles et le dessus des conduits.",
      "Accumulation de charges statiques : l'amidon sec circulant dans les boyaux et les goulottes génère de l'électricité statique.",
      "Accumulation profonde dans l'équipement : l'amidon se tasse dans les tamis, les élévateurs à godets et les carters de séchoirs.",
      "Chevauchement allergènes et salubrité : dans les usines alimentaires, l'amidon est aussi un enjeu de changement de production et de contamination croisée.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant avec circuit conducteur, mis à la terre et équipotentiel du bout du boyau jusqu'au contenant.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification favorise un entraînement sans composant électrique.",
      "Filtration absolue HEPA 99,99 %, afin que l'amidon fin soit retenu plutôt que rejeté dans le local pendant le nettoyage.",
      "Retrait du soufflage à l'air comprimé dans les zones d'amidon : il transforme une accumulation déposée en nuage en suspension.",
      "Collecte et élimination scellées, pour que l'amidon récupéré quitte le bâtiment sans deuxième mise en suspension.",
      "Nettoyage à fréquence définie des surfaces qui accumulent réellement : acier en hauteur, rebords, dessus de conduits, carters de tamis et d'élévateurs.",
    ],
    faqs: [
      {
        question: "La poussière d'amidon est-elle combustible ?",
        answer:
          "Oui. L'amidon est une poudre organique fine et combustible — la fécule de maïs est suffisamment bien caractérisée pour servir de poussière de référence dans les essais d'explosibilité. Dans un sac, elle se comporte comme tout solide organique sec ; le danger qui compte industriellement est le nuage en suspension, qui peut s'enflammer et déflagrer en présence de confinement et d'une source d'inflammation. La NFPA 660, qui a regroupé l'ancienne NFPA 61 pour la transformation alimentaire et agricole, est la norme de référence.",
      },
      {
        question: "La poudre d'amidon est-elle explosive ?",
        answer:
          "Une déflagration de poussière exige cinq conditions simultanées : poussière combustible, oxygène, dispersion en nuage, confinement et source d'inflammation. L'amidon fournit la première de façon fiable et il est particulièrement efficace à fournir la troisième, parce qu'il se met en suspension très facilement. C'est pourquoi l'entretien ménager est le contrôle principal : retirer l'accumulation retire le combustible qu'un événement primaire disperserait.",
      },
      {
        question: "Pourquoi l'amidon en poudre est-il plus dangereux que la matière brute ?",
        answer:
          "La surface exposée. Broyer une même masse en poudre fine expose beaucoup plus de matière à l'oxygène, de sorte que la combustion se propage à travers un nuage au lieu de progresser sur une surface. L'amidon se situe à l'extrémité fine de cette échelle, ce qui explique précisément son rôle d'étalon en laboratoire.",
      },
      {
        question: "Peut-on balayer ou souffler l'amidon plutôt que l'aspirer ?",
        answer:
          "Les deux aggravent la situation au moment même où on les exécute. Le balayage soulève les particules fines, et le soufflage à l'air comprimé transforme une couche déposée en nuage en suspension — exactement la condition qu'un programme de poussières vise à éviter. La récupération par aspirateur mis à la terre, équipotentiel et à filtration HEPA retire la matière au lieu de la déplacer.",
      },
    ],
    enPath: "/materials/starch-dust",
  },
  {
    slug: "poussiere-de-farine",
    name: "Poussière de farine",
    group: "Poussières alimentaires",
    metaTitle: "La farine est-elle inflammable ? Poussière de",
    metaDescription:
      "La farine est une poudre organique combustible : en nuage, elle peut déflagrer. Pourquoi la farine explose, ce que la NFPA 660 exige et comment récupérer la poussière de farine en sécurité.",
    intro:
      "La farine brûle. Dans un sac, elle se comporte comme tout solide organique sec, mais le danger qui compte dans une meunerie ou une boulangerie est le nuage en suspension : dispersée dans l'air à l'intérieur d'une enceinte, la poussière de farine peut s'enflammer et déflagrer.",
    facts: [
      { label: "Type de matière", value: "Poudre organique combustible riche en amidon" },
      { label: "Où elle est produite", value: "Mouture, tamisage, transfert, vidage de sacs, pétrissage" },
      { label: "Groupe de poussière", value: "Classe II, Groupe G (poussière combustible non conductrice)" },
      { label: "Normes applicables", value: "NFPA 660 (regroupant l'ancienne NFPA 61)" },
    ],
    overview: [
      "La farine est fine, sèche et riche en amidon, et elle se met en suspension à chaque transfert. Le nuage est le danger : une déflagration exige de la poussière combustible, de l'oxygène, une dispersion, un confinement et une source d'inflammation, et un procédé de mouture ou de boulangerie fournit couramment quatre de ces cinq conditions.",
      "Le mécanisme qui détruit les bâtiments est l'événement secondaire. Une inflammation primaire modeste — souvent contenue dans un équipement — soulève la farine accumulée sur les poutres, les rebords et le dessus des conduits, et cette poussière nouvellement en suspension propage l'explosion à travers la structure. La poussière que personne ne voit depuis le plancher est celle qui compte le plus.",
    ],
    risksHeading: "Pourquoi la farine mérite une attention particulière",
    risks: [
      "Poussière organique combustible : fine, sèche et facilement mise en suspension à chaque transfert.",
      "Accumulation en hauteur : les particules fines se déposent sur l'acier, les rebords et les conduits — le combustible d'un événement secondaire.",
      "Concentration au moulin : la mouture produit la fraction la plus fine du bâtiment, dans une enceinte avec des sources d'inflammation mécaniques.",
      "Électricité statique : la farine sèche circulant dans les goulottes et les lignes pneumatiques accumule des charges.",
      "Exposition respiratoire : l'inhalation répétée de poussière de farine est associée à l'asthme du boulanger.",
      "Chevauchement salubrité : le nettoyage doit satisfaire les registres de salubrité autant que la prévention des incendies.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant, conducteur et mis à la terre du bout du boyau jusqu'au contenant.",
      "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable au lieu de la remettre en circulation.",
      "Élimination du soufflage à l'air comprimé dans les zones de farine.",
      "Nettoyage à fréquence définie de l'acier en hauteur, du dessus des conduits et des carters de moulins et de tamis.",
      "Collecte scellée et retrait de la matière récupérée du bâtiment.",
      "Un seul passage de nettoyage documenté servant à la fois au programme de poussières et aux registres de salubrité.",
    ],
    faqs: [
      {
        question: "La farine est-elle inflammable ?",
        answer:
          "Oui. La farine est une poudre organique fine et riche en amidon, et elle brûle facilement. Dans un sac, elle se comporte comme tout solide organique sec, mais le danger qui compte dans une meunerie ou une boulangerie est le nuage : dispersée dans l'air à l'intérieur d'une enceinte, la poussière de farine peut s'enflammer et déflagrer. La NFPA 660 la traite comme une poussière combustible.",
      },
      {
        question: "La farine peut-elle exploser, et pourquoi ?",
        answer:
          "Une déflagration de poussière exige cinq conditions simultanées : poussière combustible, oxygène, dispersion en nuage, un certain confinement et une source d'inflammation. La farine fournit la première. La raison pour laquelle une poudre se comporte si différemment d'un bloc solide est la surface exposée : broyer une même masse en particules fines expose énormément de matière à l'oxygène, de sorte que la combustion se propage à travers tout le nuage.",
      },
      {
        question: "La poussière de farine est-elle combustible ou explosible ?",
        answer:
          "« Combustible » décrit la matière : la farine brûle. « Explosible » décrit le comportement d'un nuage en suspension dans une plage de concentration donnée et sous confinement. La distinction importe parce que l'entretien ménager contrôle la seconde condition. Le comportement de votre farine précise est établi par essai, puisque la granulométrie et l'humidité changent le résultat.",
      },
      {
        question: "Peut-on balayer la poussière de farine ?",
        answer:
          "Le balayage soulève les particules fines et laisse intactes les accumulations qui alimentent réellement un événement secondaire, puisque celles-ci se trouvent au-dessus de la hauteur des yeux. La récupération par aspirateur mis à la terre et à filtration HEPA retire la matière du bâtiment au lieu de la déplacer, et atteint les surfaces qu'un balai n'atteindra jamais.",
      },
    ],
    enPath: "/materials/flour-dust",
  },
  {
    slug: "poussiere-d-aluminium",
    name: "Poussière d'aluminium",
    group: "Poussières métalliques",
    metaTitle: "L'aluminium est-il inflammable ? Poussière",
    metaDescription:
      "L'aluminium massif s'enflamme difficilement ; la poussière fine d'aluminium est une poussière métallique combustible réactive. Pourquoi l'eau aggrave la situation, ce que signifie le Groupe E et comment récupérer les particules fines.",
    intro:
      "Une extrusion d'aluminium massif s'enflamme difficilement. La poudre fine d'aluminium est en pratique une matière différente : une poussière métallique combustible réactive qui s'enflamme beaucoup plus facilement et brûle à très haute température.",
    facts: [
      { label: "Type de matière", value: "Poussière métallique combustible réactive" },
      { label: "Groupe de poussière", value: "Classe II, Groupe E (poussière métallique conductrice)" },
      { label: "Classe d'incendie", value: "Classe D — l'eau et le CO₂ sont généralement inappropriés" },
      { label: "Normes applicables", value: "NFPA 660 (regroupant l'ancienne NFPA 484 pour les métaux combustibles)" },
    ],
    overview: [
      "La NFPA 660, qui a absorbé l'ancienne NFPA 484 pour les métaux combustibles, est la norme de référence, et c'est la raison pour laquelle les particules fines de métal ne sont jamais traitées comme des débris d'atelier ordinaires.",
      "Deux caractéristiques distinguent la poussière métallique de la poussière organique. La première est la réactivité à l'eau : l'aluminium réagit avec l'eau à température élevée en libérant de l'hydrogène, ce qui ajoute un second combustible à un incendie existant. La seconde est la conductivité électrique, qui explique pourquoi le code place les poussières métalliques conductrices dans la Classe II, Groupe E et les traite avec une sévérité particulière — une poussière conductrice peut ponter des bornes et court-circuiter de l'équipement en plus de brûler.",
    ],
    risksHeading: "Ce que font réellement les particules fines d'aluminium",
    risks: [
      "La granulométrie transforme la matière : les particules issues du meulage, de la coupe et du polissage ne se comportent pas comme le métal massif d'origine.",
      "L'eau peut aggraver la situation : l'aluminium réagit avec l'eau à chaud en libérant de l'hydrogène.",
      "La poussière conductrice court-circuite l'équipement : les poussières du Groupe E peuvent ponter des connexions électriques.",
      "Comportement pyrophorique des particules très fines et fraîchement générées.",
      "Accumulation de chaleur dans les contenants : les particules récupérées peuvent retenir la chaleur et se rallumer.",
      "Mélange de métaux : combiner des particules réactives avec d'autres débris ou du liquide de coupe crée des conditions non évaluées.",
    ],
    solutions: [
      "Équipement de récupération incapable de fournir une énergie d'inflammation : conducteur, mis à la terre et équipotentiel, avec accessoires antistatiques.",
      "Séparation par immersion pour les particules réactives, afin que la matière récupérée reste mouillée plutôt que de s'accumuler à sec.",
      "Appareils pneumatiques là où l'air comprimé est disponible et où la classification favorise un entraînement sans composant électrique.",
      "Ségrégation par métal, pour éviter de combiner des particules réactives avec d'autres matières ou du liquide de coupe.",
      "Élimination du soufflage à l'air comprimé, qui met les particules métalliques en suspension et les projette sur des surfaces chaudes.",
      "Retrait rapide de la matière récupérée du bâtiment, plutôt que de laisser des contenants pleins sur place.",
      "Dispositions de Classe D et personnel formé, en sachant que l'eau et le CO₂ ne sont pas les outils appropriés.",
    ],
    faqs: [
      {
        question: "L'aluminium est-il inflammable ?",
        answer:
          "L'aluminium massif s'enflamme difficilement. La poudre fine d'aluminium est en pratique une matière différente : une poussière métallique combustible réactive qui s'enflamme beaucoup plus facilement et brûle à très haute température. La NFPA 660, qui a absorbé l'ancienne NFPA 484 pour les métaux combustibles, est la norme de référence.",
      },
      {
        question: "La poussière d'aluminium est-elle combustible, et peut-on utiliser de l'eau ?",
        answer:
          "Elle est combustible, et l'eau est la mauvaise réponse : l'aluminium réagit avec l'eau à température élevée en libérant de l'hydrogène, ce qui ajoute un second combustible à un incendie existant. Les poussières métalliques combustibles exigent des méthodes de Classe D et un équipement de récupération qui ne crée pas de source d'inflammation au départ.",
      },
      {
        question: "Que signifie Classe II, Groupe E ?",
        answer:
          "Le Groupe E est le groupe de poussières des emplacements dangereux qui couvre les poussières métalliques combustibles — aluminium, magnésium et leurs alliages commerciaux, ainsi que d'autres poussières dont la granulométrie, l'abrasivité et la conductivité électrique présentent des dangers comparables. Il est traité avec une sévérité particulière parce qu'une poussière conductrice peut court-circuiter et ponter de l'équipement électrique en plus d'alimenter une déflagration.",
      },
      {
        question: "Comment récupérer les particules fines d'aluminium ?",
        answer:
          "Avec un équipement qui ne peut pas devenir la source d'inflammation : conducteur, mis à la terre et équipotentiel de bout en bout, avec des accessoires antistatiques et un entraînement adapté à la classification. Lorsque l'évaluation le justifie, la séparation par immersion garde les particules récupérées mouillées plutôt que de les laisser s'accumuler à sec dans un contenant.",
      },
    ],
    enPath: "/materials/aluminum-dust",
  },
];

export function getFrMaterial(slug: string) {
  return FR_MATERIALS.find((m) => m.slug === slug);
}
