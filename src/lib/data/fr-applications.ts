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
    slug: "nettoyage-de-soudage",
    name: "Nettoyage après soudage",
    group: "Travail des métaux",
    metaTitle: "Nettoyage des fumées et scories de soudage | Récupération",
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
    metaTitle: "Récupération de la poussière de meulage | Étincelles et fines",
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
    metaTitle: "Récupération de la poussière de ponçage | Bois, métal, apprêts",
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
