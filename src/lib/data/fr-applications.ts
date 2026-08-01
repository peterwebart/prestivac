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
    slug: "usinage-cnc",
    name: "Usinage CNC",
    group: "Travail des métaux",
    metaTitle: "Récupération des copeaux et brouillard d'huile en usinage CNC",
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
    metaTitle: "Récupération de la poudre de thermolaquage | Récupération et réemploi",
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
    metaTitle: "Récupération après décapage abrasif | Média usé et silice",
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
    metaTitle: "Récupération de la poussière d'ébavurage | Zone respiratoire",
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
    metaTitle: "Nettoyage de silo | Réduire les entrées en espace clos",
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
    metaTitle: "Nettoyage de déversements | Compatibilité chimique d'abord",
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
