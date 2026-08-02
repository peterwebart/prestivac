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
    slug: "munitions",
    name: "Munitions",
    group: "Défense",
    metaTitle: "Aspirateurs pour la fabrication de munitions | Poussières métalliques",
    metaDescription:
      "Cette page traite de la poussière métallique et de l'entretien ménager en usine de munitions. Elle ne fournit aucune indication sur les matières énergétiques.",
    intro:
      "Cette page porte sur une partie précise du travail : la poussière métallique et l'entretien ménager dans les ateliers d'usinage d'une installation de munitions. Elle ne traite pas des matières énergétiques.",
    facts: [
      { label: "Portée de cette page", value: "Poussière métallique et entretien ménager en atelier d'usinage" },
      { label: "Hors portée", value: "Poudres propulsives, explosifs et matières énergétiques" },
      { label: "Matières couvertes", value: "Laiton, acier, plomb, aluminium issus de l'usinage" },
      { label: "Autorité compétente", value: "Vos spécialistes en matières énergétiques, pour tout le reste" },
    ],
    overview: [
      "L'usinage des douilles et des projectiles produit des poussières métalliques ordinaires : laiton — souvent plombé — acier, aluminium et plomb. Ces matières relèvent des mêmes cadres que dans toute autre usine d'usinage : le plomb sous le 29 CFR 1910.1025, les fines d'aluminium comme métal combustible, et le laiton avec sa teneur en plomb rarement indiquée sur la pièce.",
      "Pour tout ce qui touche aux poudres propulsives, aux amorces et aux explosifs, nous n'offrons aucune indication et nous ne cherchons pas à en offrir. Ces matières relèvent de spécialistes en matières énergétiques et d'un cadre réglementaire distinct. Adressez-vous à eux.",
    ],
    risksHeading: "Ce que cette page couvre",
    risks: [
    "Poussière de laiton, souvent plombé, issue de l'usinage des douilles.",
    "Plomb des projectiles, régi par le 29 CFR 1910.1025.",
    "Fines d'aluminium combustibles selon les composants usinés.",
    "Poussière d'acier abrasive et conductrice.",
    "Composition d'alliage rarement indiquée sur la pièce.",
    "Entretien ménager des ateliers d'usinage.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % là où du plomb est présent.",
    "Collecte scellée et élimination selon le statut réglementaire de la matière.",
    "Équipement conducteur et mis à la terre pour les fines métalliques.",
    "Équipement dédié là où la norme sur le plomb s'applique.",
    "Vérification de la composition des alliages avant usinage.",
    "Consultation de vos spécialistes en matières énergétiques pour tout le reste.",
    ],
    faqs: [
      {
        question: "Que couvre exactement cette page ?",
        answer:
          "La poussière métallique et l'entretien ménager dans les ateliers d'usinage : laiton, acier, aluminium et plomb issus de la fabrication de douilles et de projectiles. Ce sont les mêmes matières que dans toute autre usine d'usinage, relevant des mêmes cadres réglementaires.",
      },
      {
        question: "Traitez-vous des poudres propulsives et des explosifs ?",
        answer:
          "Non. Nous n'offrons aucune indication sur les matières énergétiques — poudres propulsives, amorces, explosifs — et nous ne cherchons pas à en offrir. Ces matières relèvent de spécialistes et d'un cadre réglementaire distinct. Adressez-vous à eux plutôt qu'à un fournisseur d'équipement.",
      },
      {
        question: "Le plomb des projectiles est-il un enjeu ?",
        answer:
          "Oui, et il relève du 29 CFR 1910.1025 avec une limite d'exposition de 50 microgrammes par mètre cube. Filtration absolue, collecte scellée, équipement dédié et aucun balayage à sec sont les contrôles attendus, comme dans tout autre atelier travaillant le plomb.",
      },
      {
        question: "Le laiton des douilles contient-il du plomb ?",
        answer:
          "Fréquemment : le plomb est ajouté aux laitons de décolletage pour l'usinabilité, et rien dans l'apparence d'une pièce ne l'indique. Vérifier la composition auprès du fournisseur avant d'usiner un stock inconnu est la démarche prudente.",
      },
    ],
    enPath: "/industries/ammunition",
    related: [
      { label: "Poussière de laiton et de bronze", href: `${M}/poussiere-de-laiton-et-de-bronze` },
      { label: "Poussière de plomb", href: `${M}/poussiere-de-plomb` },
      { label: "Poussière de fer et d'acier", href: `${M}/poussiere-de-fer-et-d-acier` },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
      { label: "Ébavurage", href: `${A}/ebavurage` },
    ],
  },
  {
    slug: "industrie-du-charbon",
    name: "Industrie du charbon",
    group: "Ressources",
    metaTitle: "Aspirateurs pour l'industrie du charbon | Groupe F et combustion lente",
    metaDescription:
      "Le charbon est une poussière carbonée du Groupe F qui se consume lentement en profondeur. Manutention, préparation et entreposage.",
    intro:
      "L'industrie du charbon manipule une poussière dont la caractéristique déterminante n'est pas l'inflammabilité mais la persistance : un foyer profond peut brûler à l'intérieur d'une accumulation sans flamme visible, puis se rallumer.",
    facts: [
      { label: "Groupe de poussière", value: "Classe II, Groupe F — poussières carbonées" },
      { label: "Comportement distinctif", value: "Combustion lente en profondeur, avec rallumage" },
      { label: "Danger sanitaire", value: "Pneumoconiose des mineurs de charbon" },
      { label: "Zones critiques", value: "Manutention, préparation, convoyage, entreposage" },
    ],
    overview: [
      "Le registre des explosions en mine et en installation de préparation figure parmi les mieux documentés de la sécurité industrielle, et le mécanisme est constant : un événement primaire soulève les accumulations, et l'événement secondaire se propage.",
      "La combustion lente change la gestion de la matière récupérée : un contenant plein n'est pas un problème résolu mais un combustible concentré. Le retrait du bâtiment à la fin de chaque passage est le contrôle simple.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Poussière carbonée du Groupe F, sujette à la combustion lente.",
    "Rallumage possible après qu'un incendie paraît éteint.",
    "Registre d'explosions documenté en mine et en préparation.",
    "Pneumoconiose des mineurs de charbon par inhalation chronique.",
    "Contenants pleins laissés en place, concentrant le combustible.",
    "Convoyage et transfert produisant la fraction fine.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant adapté au Groupe F.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Retrait de la matière récupérée du bâtiment à la fin de chaque passage.",
    "Nettoyage équipement arrêté et consigné dans les galeries.",
    "Fréquences définies pour les transferts et le pourtour des entraînements.",
    "Vigilance sur les foyers : une accumulation tiède mérite un suivi.",
    ],
    faqs: [
      {
        question: "Pourquoi la poussière de charbon est-elle particulière ?",
        answer:
          "Sa caractéristique déterminante est la persistance plutôt que l'inflammabilité : un foyer profond peut brûler à l'intérieur d'une accumulation sans flamme visible, puis se rallumer après qu'un événement paraît résolu. C'est pourquoi une accumulation tiède mérite un suivi plutôt qu'un soulagement.",
      },
      {
        question: "Pourquoi sortir la matière récupérée du bâtiment ?",
        answer:
          "Parce qu'un contenant plein n'est pas un problème résolu : il concentre en un point le combustible qui était réparti en couche mince, dans une matière capable d'entretenir un foyer interne.",
      },
      {
        question: "La poussière de charbon a-t-elle un effet sur la santé ?",
        answer:
          "Oui. L'inhalation chronique cause la pneumoconiose des mineurs de charbon, une maladie pulmonaire irréversible. Le contrôle de l'exposition accompagne donc le contrôle de l'incendie.",
      },
      {
        question: "Où se concentre le danger ?",
        answer:
          "À la manutention, à la préparation et au convoyage : transferts, chutes, têtes et pieds d'élévateurs. Ces points produisent la fraction la plus fine et la confinent, près d'entraînements mécaniques.",
      },
    ],
    enPath: "/industries/coal",
    related: [
      { label: "Poussière de charbon", href: `${M}/poussiere-de-charbon` },
      { label: "Poussière de coke", href: `${M}/poussiere-de-coke` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Nettoyage de silo", href: `${A}/nettoyage-de-silo` },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
    ],
  },
  {
    slug: "education-et-recherche",
    name: "Éducation et recherche",
    group: "Institutions",
    metaTitle: "Aspirateurs pour établissements d'enseignement et laboratoires",
    metaDescription:
      "Les ateliers d'enseignement et les laboratoires manipulent une grande variété de matières, souvent inconnues à l'avance et par des opérateurs peu expérimentés.",
    intro:
      "Les établissements d'enseignement et de recherche posent un problème que l'industrie n'a pas : une grande variété de matières, souvent manipulées par des personnes peu expérimentées, dans des installations conçues pour la polyvalence plutôt que pour un procédé précis.",
    facts: [
      { label: "Difficulté centrale", value: "Variété des matières, souvent inconnues à l'avance" },
      { label: "Facteur humain", value: "Opérateurs en formation, rotation fréquente" },
      { label: "Installations", value: "Conçues pour la polyvalence, non pour un procédé" },
      { label: "Conséquence", value: "Spécifier pour le pire cas plausible et former explicitement" },
    ],
    overview: [
      "Un atelier universitaire peut usiner du cuivre-béryllium, de l'aluminium et de l'inox dans la même semaine, chacun avec des exigences différentes. Un laboratoire de recherche peut manipuler des poudres dont personne dans le bâtiment n'a caractérisé le comportement.",
      "La formation compte donc autant que l'équipement : une procédure claire sur ce qui peut être aspiré, ce qui ne peut pas l'être, et à qui demander en cas de doute vaut davantage qu'un appareil sophistiqué mal utilisé.",
    ],
    risksHeading: "Ce que ces établissements doivent maîtriser",
    risks: [
    "Variété des matières, souvent non caractérisées à l'avance.",
    "Opérateurs en formation, avec rotation fréquente.",
    "Cuivre-béryllium et autres alliages régulés dans les ateliers.",
    "Poudres de recherche au comportement inconnu.",
    "Installations polyvalentes plutôt que dédiées.",
    "Procédures et formation comptant autant que l'équipement.",
    ],
    solutions: [
    "Spécification couvrant le pire cas plausible des matières manipulées.",
    "Filtration absolue HEPA 99,99 % pour couvrir les matières régulées.",
    "Équipement dédié pour les zones manipulant des matières réglementées.",
    "Procédure écrite : ce qui peut être aspiré, ce qui ne peut pas, qui contacter.",
    "Vérification de la composition des matières avant usinage.",
    "Formation explicite des utilisateurs, avec rappel à chaque rotation.",
    ],
    faqs: [
      {
        question: "Pourquoi les établissements d'enseignement sont-ils un cas particulier ?",
        answer:
          "Parce qu'ils combinent une grande variété de matières, souvent non caractérisées à l'avance, et des opérateurs en formation avec une rotation fréquente. Un atelier universitaire peut usiner trois alliages très différents dans la même semaine.",
      },
      {
        question: "Comment spécifier sans connaître les matières ?",
        answer:
          "En couvrant le pire cas plausible : filtration absolue et équipement conducteur mis à la terre. C'est plus prudent que le strict nécessaire pour un usage moyen, et c'est le prix de la polyvalence.",
      },
      {
        question: "La formation est-elle vraiment aussi importante ?",
        answer:
          "Dans ce contexte, oui. Une procédure claire sur ce qui peut être aspiré, ce qui ne peut pas l'être, et à qui demander en cas de doute vaut davantage qu'un appareil sophistiqué mal utilisé par quelqu'un qui ne connaît pas la matière.",
      },
      {
        question: "Quels alliages surprennent le plus souvent ?",
        answer:
          "Le cuivre-béryllium, présent dans des ressorts, connecteurs et outils antiétincelles sans mention dans la description de la pièce. Il est régi par sa propre norme OSHA, et un atelier peut l'usiner sans le savoir.",
      },
    ],
    enPath: "/industries/education",
    related: [
      { label: "Poussière de béryllium", href: `${M}/poussiere-de-beryllium` },
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
      { label: "Poussière de bois", href: `${M}/poussiere-de-bois` },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
      { label: "Ponçage", href: `${A}/poncage` },
    ],
  },
  {
    slug: "naval-et-maritime",
    name: "Naval et maritime",
    group: "Fabrication lourde",
    metaTitle: "Aspirateurs pour chantiers navals | Décapage, soudage et espaces clos",
    metaDescription:
      "Les chantiers navals combinent décapage abrasif, soudage, revêtements anciens et travail en espace clos dans les compartiments.",
    intro:
      "Un chantier naval réunit presque tous les dangers de poussière au même endroit : décapage abrasif à grande échelle, soudage, revêtements anciens contenant parfois du plomb, et travail en espace clos dans les compartiments.",
    facts: [
      { label: "Décapage", value: "Média usé mélangé au revêtement retiré — silice possible" },
      { label: "Revêtements anciens", value: "Plomb possible, transférant son statut au flux récupéré" },
      { label: "Soudage", value: "Fumées de manganèse, chrome hexavalent sur l'inox" },
      { label: "Espaces clos", value: "Compartiments, ballasts et citernes, avec permis" },
    ],
    overview: [
      "Le décapage produit le volume : média usé mélangé au revêtement retiré, avec de la silice si le média en contient et du plomb si la peinture en contenait. Le flux récupéré hérite du statut réglementaire de ce qui a été décapé.",
      "Le travail en compartiment ajoute la dimension espace clos, avec contrôle de l'atmosphère, permis et surveillance — dans une géométrie où la ventilation naturelle est nulle.",
    ],
    risksHeading: "Ce qu'un chantier naval doit maîtriser",
    risks: [
    "Volume élevé de média usé mélangé aux revêtements retirés.",
    "Silice si le média en contient, plomb si la peinture en contenait.",
    "Statut réglementaire du flux hérité de ce qui a été décapé.",
    "Fumées de soudage : manganèse, chrome hexavalent sur l'inox.",
    "Travail en espace clos dans les compartiments et citernes.",
    "Abrasivité extrême usant l'équipement.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 %, silice et plomb gouvernant la spécification.",
    "Grande capacité de collecte pour le volume de décapage.",
    "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
    "Captation à la source au soudage.",
    "Application intégrale du processus de permis d'espace clos.",
    "Vérification du média et du revêtement avant le travail.",
    ],
    faqs: [
      {
        question: "Quel est le principal enjeu sur un chantier naval ?",
        answer:
          "Le volume et la composition du flux de décapage : média usé mélangé au revêtement retiré. Si le média contient de la silice ou la peinture du plomb, le flux récupéré hérite du statut réglementaire correspondant — ce n'est pas du média usé ordinaire.",
      },
      {
        question: "Le travail en compartiment est-il un espace clos ?",
        answer:
          "Généralement oui, avec contrôle de l'atmosphère, permis et surveillance. La géométrie d'un compartiment ou d'une citerne offre une ventilation naturelle nulle, ce qui rend le processus complet nécessaire plutôt que formel.",
      },
      {
        question: "Faut-il vérifier les revêtements avant décapage ?",
        answer:
          "Oui. La composition du revêtement détermine le statut réglementaire du flux récupéré et les protections requises. Les revêtements anciens peuvent contenir du plomb, régi par sa propre norme.",
      },
      {
        question: "Pourquoi l'équipement s'use-t-il vite ?",
        answer:
          "Parce que le média abrasif est conçu pour éroder, et il érode aussi boyaux, tubes et surfaces de séparation. Une construction tolérante à l'abrasion avec des pièces remplaçables est plus économique à l'usage.",
      },
    ],
    enPath: "/industries/marine",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Poussière de plomb", href: `${M}/poussiere-de-plomb` },
      { label: "Poussière de chrome", href: `${M}/poussiere-de-chrome` },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
      { label: "Nettoyage après soudage", href: `${A}/nettoyage-de-soudage` },
      { label: "Nettoyage de réservoirs", href: `${A}/nettoyage-de-reservoirs` },
    ],
  },
  {
    slug: "ferroviaire",
    name: "Ferroviaire",
    group: "Fabrication lourde",
    metaTitle: "Aspirateurs pour l'industrie ferroviaire | Meulage, freins et ateliers",
    metaDescription:
      "L'entretien ferroviaire produit de la poussière de meulage, des résidus de freinage et des revêtements anciens à décaper.",
    intro:
      "L'entretien ferroviaire combine des ateliers lourds et des interventions sur matériel ancien : meulage et soudage sur structures, décapage de revêtements posés il y a des décennies, et résidus de freinage.",
    facts: [
      { label: "Ateliers", value: "Meulage, soudage, usinage sur structures lourdes" },
      { label: "Décapage", value: "Revêtements anciens, plomb possible" },
      { label: "Résidus de freinage", value: "Poussière métallique fine et abrasive" },
      { label: "Espaces", value: "Voitures, citernes et réservoirs lors des révisions" },
    ],
    overview: [
      "Le meulage et le soudage sur structures produisent des fines métalliques conductrices et des fumées dont la composition suit le métal — manganèse dans l'acier, chrome hexavalent sur l'inox.",
      "Le décapage de matériel ancien pose la question des revêtements : une peinture posée il y a des décennies peut contenir du plomb, et le flux récupéré hérite alors de son statut réglementaire.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Fines métalliques conductrices du meulage et de l'usinage.",
    "Fumées de soudage : manganèse, chrome hexavalent sur l'inox.",
    "Revêtements anciens pouvant contenir du plomb.",
    "Résidus de freinage fins et abrasifs.",
    "Travail en espace clos dans les citernes et réservoirs.",
    "Grandes structures compliquant l'accès en hauteur.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % pour les fumées et les revêtements au plomb.",
    "Captation à la source au soudage et au meulage.",
    "Construction tolérante à l'abrasion.",
    "Vérification des revêtements avant décapage de matériel ancien.",
    "Application du processus de permis d'espace clos le cas échéant.",
    "Rallonges pour les grandes structures.",
    ],
    faqs: [
      {
        question: "Quels dangers dominent en atelier ferroviaire ?",
        answer:
          "Les fumées de soudage et les fines de meulage : manganèse dans presque tous les aciers, chrome hexavalent sur l'inox, et des fines métalliques conductrices et abrasives. La captation à la source est le contrôle principal.",
      },
      {
        question: "Le matériel ancien pose-t-il un problème particulier ?",
        answer:
          "Le décapage de revêtements posés il y a des décennies peut libérer du plomb. Le flux récupéré hérite alors du statut réglementaire du plomb, avec les exigences de collecte scellée et d'élimination correspondantes.",
      },
      {
        question: "Les résidus de freinage sont-ils dangereux ?",
        answer:
          "Ce sont des poussières métalliques fines et abrasives. Elles se récupèrent avec un équipement conducteur, mis à la terre et tolérant à l'abrasion, avec une filtration retenue pour la fraction respirable.",
      },
      {
        question: "Le travail en citerne est-il un espace clos ?",
        answer:
          "Généralement oui, avec le processus de permis complet : contrôle de l'atmosphère, surveillance et moyens de secours.",
      },
    ],
    enPath: "/industries/rail",
    related: [
      { label: "Poussière de fer et d'acier", href: `${M}/poussiere-de-fer-et-d-acier` },
      { label: "Poussière de plomb", href: `${M}/poussiere-de-plomb` },
      { label: "Poussière de chrome", href: `${M}/poussiere-de-chrome` },
      { label: "Nettoyage après soudage", href: `${A}/nettoyage-de-soudage` },
      { label: "Poussière de meulage", href: `${A}/poussiere-de-meulage` },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
    ],
  },
  {
    slug: "fours-sous-vide",
    name: "Fours sous vide",
    group: "Traitement thermique",
    metaTitle: "Aspirateurs pour fours sous vide | Résidus fins et entretien",
    metaDescription:
      "L'entretien des fours sous vide implique des résidus métalliques très fins, parfois réactifs, dans une enceinte confinée.",
    intro:
      "L'entretien d'un four sous vide met en présence des résidus métalliques extrêmement fins — condensats, poussières de charge, résidus de traitement — dans une enceinte confinée conçue pour être propre.",
    facts: [
      { label: "Résidus", value: "Condensats métalliques et poussières de charge très fins" },
      { label: "Réactivité", value: "Variable selon les métaux traités — parfois réactive" },
      { label: "Enceinte", value: "Confinée, avec accès par ouvertures ou entrée" },
      { label: "Contrainte", value: "La propreté de l'enceinte fait partie du procédé" },
    ],
    overview: [
      "Les condensats métalliques qui se déposent sur les parois et les éléments sont très fins, et leur réactivité dépend entièrement des métaux traités : un four utilisé pour du titane ou de l'aluminium laisse des résidus qu'il faut traiter comme des métaux combustibles.",
      "La propreté de l'enceinte fait partie du procédé : des résidus accumulés dégazent et compromettent le vide, de sorte que le nettoyage sert la qualité autant que la sécurité.",
    ],
    risksHeading: "Ce que l'entretien de fours doit maîtriser",
    risks: [
    "Condensats métalliques très fins déposés sur parois et éléments.",
    "Réactivité dépendant entièrement des métaux traités.",
    "Enceinte confinée, avec accès parfois en espace clos.",
    "Résidus dégazant et compromettant le vide.",
    "Éléments chauffants et isolants fragiles.",
    "Propreté faisant partie du procédé, non seulement de la sécurité.",
    ],
    solutions: [
    "Équipement conducteur, mis à la terre et exempt de sources d'inflammation.",
    "Filtration absolue HEPA 99,99 % pour les condensats très fins.",
    "Ségrégation selon les métaux traités dans le four.",
    "Dispositions de Classe D si des métaux réactifs sont traités.",
    "Application du processus de permis d'espace clos le cas échéant.",
    "Outils adaptés pour ne pas endommager éléments et isolants.",
    ],
    faqs: [
      {
        question: "Quels résidus trouve-t-on dans un four sous vide ?",
        answer:
          "Des condensats métalliques et des poussières de charge extrêmement fins, déposés sur les parois et les éléments. Leur réactivité dépend entièrement des métaux traités : un four utilisé pour du titane ou de l'aluminium laisse des résidus à traiter comme des métaux combustibles.",
      },
      {
        question: "Pourquoi la propreté fait-elle partie du procédé ?",
        answer:
          "Parce que les résidus accumulés dégazent et compromettent le vide. Le nettoyage sert donc la qualité du traitement autant que la sécurité, ce qui le rend plus facile à justifier.",
      },
      {
        question: "L'accès à un four est-il un espace clos ?",
        answer:
          "Selon la géométrie et le mode d'accès, il peut l'être, avec le processus de permis correspondant. La consignation précède dans tous les cas toute intervention.",
      },
      {
        question: "Faut-il ségréger les résidus ?",
        answer:
          "Selon les métaux traités, oui : mélanger des résidus de métaux différents crée des conditions non évaluées, particulièrement lorsque des métaux réactifs sont impliqués.",
      },
    ],
    enPath: "/industries/vacuum-furnace",
    related: [
      { label: "Poussière de titane", href: `${M}/poussiere-de-titane` },
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Nettoyage de réservoirs", href: `${A}/nettoyage-de-reservoirs` },
    ],
  },
  {
    slug: "peintures-et-revetements",
    name: "Peintures et revêtements",
    group: "Transformation",
    metaTitle: "Aspirateurs pour peintures et revêtements | Poudres et pigments",
    metaDescription:
      "La fabrication de peintures et revêtements combine poudres combustibles, pigments contenant parfois des métaux régulés, et solvants inflammables.",
    intro:
      "La fabrication de peintures et de revêtements réunit trois régimes : des poudres combustibles, des pigments dont certains contiennent des métaux régulés, et des solvants inflammables créant des zones classifiées.",
    facts: [
      { label: "Poudres", value: "Charges, résines et pigments — souvent combustibles" },
      { label: "Pigments", value: "Certains contenant des métaux régulés" },
      { label: "Solvants", value: "Inflammables, créant des zones de Classe I" },
      { label: "Conséquence", value: "Trois régimes dans la même installation" },
    ],
    overview: [
      "Le broyage et le mélange de poudres produisent la fraction fine, et les charges organiques sont combustibles. Certains pigments contiennent du plomb, du chrome ou du cadmium, régis par leurs propres normes avec des limites d'exposition basses.",
      "Les zones utilisant des solvants inflammables sont classifiées en Classe I, où l'équipement doit correspondre à la classification assignée. Comme pour le cannabis, un appareil convenant à une zone poudre ne convient pas nécessairement à une zone solvant.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Poudres combustibles issues du broyage et du mélange.",
    "Pigments contenant parfois plomb, chrome ou cadmium.",
    "Solvants inflammables créant des zones de Classe I.",
    "Trois régimes d'équipement dans la même installation.",
    "Contamination croisée entre teintes et formulations.",
    "Charges statiques dans le travail de poudres sèches.",
    ],
    solutions: [
    "Équipement correspondant à la classification assignée, zone par zone.",
    "Filtration absolue HEPA 99,99 % là où des pigments régulés sont manipulés.",
    "Récupération conductrice et mise à la terre pour les poudres sèches.",
    "Vérification de la composition des pigments avant introduction.",
    "Récupération dédiée par formulation là où la contamination croisée est un enjeu.",
    "Collecte scellée pour les pigments à métaux régulés.",
    ],
    faqs: [
      {
        question: "Quels sont les trois régimes ?",
        answer:
          "Les poudres combustibles issues du broyage et du mélange, les pigments dont certains contiennent des métaux régulés, et les solvants inflammables créant des zones classifiées en Classe I. Ils coexistent dans la même installation et appellent des équipements différents.",
      },
      {
        question: "Les pigments posent-ils un danger particulier ?",
        answer:
          "Certains contiennent du plomb, du chrome ou du cadmium, régis par leurs propres normes avec des limites d'exposition basses. Vérifier la composition avant d'introduire une nouvelle formulation est la démarche prudente.",
      },
      {
        question: "Un appareil peut-il servir dans toute l'usine ?",
        answer:
          "Rarement. Un appareil convenant à une zone poudre ne convient pas nécessairement à une zone solvant classifiée en Classe I. L'équipement se choisit zone par zone selon la classification assignée par votre ingénieur.",
      },
      {
        question: "Comment gérer la contamination entre teintes ?",
        answer:
          "Par une récupération dédiée par formulation là où l'enjeu existe, et un nettoyage documenté entre séries — la même discipline que celle qu'exige une analyse des dangers liés aux poussières.",
      },
    ],
    enPath: "/industries/paints-coatings",
    related: [
      { label: "Poussière de plomb", href: `${M}/poussiere-de-plomb` },
      { label: "Poussière de chrome", href: `${M}/poussiere-de-chrome` },
      { label: "Poussière de cadmium", href: `${M}/poussiere-de-cadmium` },
      { label: "Thermolaquage", href: `${A}/thermolaquage` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
      { label: "Nettoyage de déversements", href: `${A}/nettoyage-de-deversements` },
    ],
  },

  {
    slug: "desamiantage-et-decontamination",
    name: "Désamiantage et décontamination",
    group: "Environnement",
    metaTitle: "Aspirateurs pour désamiantage et décontamination | Cadre réglementaire",
    metaDescription:
      "Le désamiantage et le retrait du plomb sont des travaux d'entreprise agréée. Un aspirateur HEPA est un équipement nommé dans ce cadre, jamais un substitut.",
    intro:
      "Cette page a une chose à dire avant toute autre : le désamiantage et le retrait de peinture au plomb sont des travaux d'entreprise agréée, menés par des travailleurs accrédités sous confinement conçu. Notre équipement a sa place à l'intérieur de ce cadre.",
    facts: [
      { label: "Nature du travail", value: "Travaux d'entreprise agréée, non des tâches d'entretien" },
      { label: "Rôle de l'équipement", value: "Équipement nommé À L'INTÉRIEUR du cadre réglementaire" },
      { label: "Ce qu'il n'est pas", value: "Un substitut au confinement, au permis ou à l'accréditation" },
      { label: "Normes", value: "OSHA 1910.1001 et 1926.1101 (amiante) ; 1910.1025 (plomb)" },
    ],
    overview: [
      "L'amiante cause l'amiantose, le cancer du poumon et le mésothéliome, avec des décennies de latence. Le plomb est une toxine systémique cumulative avec une limite d'exposition de 50 microgrammes par mètre cube. Les deux sont régis par des normes substances dédiées qui imposent l'accréditation, le confinement, la notification et l'élimination réglementée.",
      "Un aspirateur à filtration HEPA testée est nommé dans ces cadres, et il est indispensable — mais il ne remplace ni le confinement, ni le permis, ni la formation. Toute lecture de cette page qui suggérerait le contraire serait une mauvaise lecture.",
    ],
    risksHeading: "Ce que ce travail exige",
    risks: [
    "Accréditation et agrément : ce n'est pas un travail d'entretien général.",
    "Confinement conçu, notification et élimination réglementée.",
    "Filtration HEPA testée, comme équipement à l'intérieur du cadre.",
    "Aucun balayage à sec, en aucune circonstance.",
    "Matière ancienne suspecte présumée amiantée jusqu'à analyse.",
    "Décontamination des équipements et des vêtements en sortie.",
    ],
    solutions: [
    "Aspirateur à filtration HEPA testée, dédié et demeurant dans la zone.",
    "Circuits de boyaux scellés et intègres à l'intérieur des barrières.",
    "Collecte scellée et élimination selon les obligations applicables.",
    "Suppression à la source pendant le travail, pratique courante et non facultative.",
    "Analyse avant perturbation, systématiquement.",
    "Application intégrale des exigences d'accréditation et de confinement.",
    ],
    faqs: [
      {
        question: "Un aspirateur HEPA suffit-il pour du désamiantage ?",
        answer:
          "Non, et c'est le point central de cette page. Un aspirateur à filtration HEPA testée est un équipement nommé à l'intérieur du cadre réglementaire de l'amiante, et il y est indispensable — mais il ne remplace ni le confinement conçu, ni le permis, ni l'accréditation des travailleurs. Le travail relève d'une entreprise agréée.",
      },
      {
        question: "Peut-on faire ce travail à l'interne ?",
        answer:
          "Le travail sur matière friable relève d'entreprises agréées avec des travailleurs accrédités. Ce n'est pas une question d'équipement mais de qualification réglementaire, et aucun appareil ne change cela.",
      },
      {
        question: "Que faire d'une matière ancienne suspecte ?",
        answer:
          "La traiter comme de l'amiante jusqu'à ce qu'une analyse démontre le contraire, et ne pas la perturber entre-temps. L'identification par analyse précède toute intervention.",
      },
      {
        question: "Le retrait de peinture au plomb suit-il les mêmes règles ?",
        answer:
          "Il relève de sa propre norme, le 29 CFR 1910.1025, avec une limite d'exposition de 50 microgrammes par mètre cube. La logique est la même : filtration absolue, collecte scellée, équipement dédié, et aucun balayage à sec.",
      },
    ],
    enPath: "/industries/abatement",
    related: [
      { label: "Amiante", href: `${M}/amiante` },
      { label: "Poussière de vermiculite", href: `${M}/poussiere-de-vermiculite` },
      { label: "Poussière de plomb", href: `${M}/poussiere-de-plomb` },
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
    ],
  },
  {
    slug: "fabrication-additive",
    name: "Fabrication additive",
    group: "Fabrication avancée",
    metaTitle: "Aspirateurs pour la fabrication additive | Poudres réactives et réemploi",
    metaDescription:
      "Les poudres de fabrication additive sont fines, souvent réactives, et destinées au réemploi. Récupération, tamisage et ségrégation.",
    intro:
      "La fabrication additive réunit trois contraintes qui se renforcent : les poudres sont extrêmement fines, souvent réactives, et destinées à être récupérées et réutilisées.",
    facts: [
      { label: "Poudres métalliques", value: "Titane, aluminium, inox, superalliages — Classe D pour les réactives" },
      { label: "Poudres polymères", value: "Combustibles, du Groupe G" },
      { label: "Granulométrie", value: "Contrôlée, donc dans la fraction la plus réactive" },
      { label: "Contrainte économique", value: "La poudre a une valeur — la contamination la détruit" },
    ],
    overview: [
      "La granulométrie contrôlée qui rend une poudre imprimable la place précisément dans la fraction la plus réactive. Le titane et l'aluminium sont des métaux combustibles où l'eau est inappropriée sur un feu déclaré.",
      "Le réemploi ajoute une contrainte qui sert la sécurité : la poudre non fusionnée est récupérée, tamisée et réutilisée, de sorte que la contamination croisée entre alliages détruit sa valeur. La ségrégation stricte est donc à la fois une mesure de sécurité et une mesure de coût.",
    ],
    risksHeading: "Ce que la fabrication additive doit maîtriser",
    risks: [
    "Poudres réactives de titane et d'aluminium, de Classe D.",
    "Granulométrie contrôlée située dans la fraction la plus réactive.",
    "Contamination croisée détruisant la valeur de la poudre.",
    "Accumulation à sec dans les contenants de récupération.",
    "Poudres polymères combustibles dans les procédés non métalliques.",
    "Conductivité des poudres métalliques.",
    ],
    solutions: [
    "Équipement conducteur, mis à la terre et exempt de sources d'inflammation.",
    "Séparation par immersion pour les poudres réactives là où l'évaluation le justifie.",
    "Appareils dédiés par matière, servant la sécurité et la valeur.",
    "Ségrégation stricte par alliage.",
    "Dispositions de Classe D et personnel formé.",
    "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Pourquoi les poudres additives sont-elles particulièrement réactives ?",
        answer:
          "Parce que la granulométrie contrôlée qui les rend imprimables les situe précisément dans la fraction la plus réactive. Le titane et l'aluminium sont des métaux combustibles de Classe D, où l'eau est inappropriée sur un feu déclaré.",
      },
      {
        question: "Peut-on utiliser un seul appareil pour plusieurs poudres ?",
        answer:
          "Non, pour deux raisons convergentes : la contamination croisée détruit la valeur de la poudre récupérée, et mélanger des poudres réactives crée des conditions non évaluées. Des appareils dédiés par matière servent la sécurité et le coût ensemble.",
      },
      {
        question: "Comment récupérer une poudre réactive ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation, et lorsque l'évaluation le justifie, une séparation par immersion qui garde la poudre humide plutôt que de la laisser s'accumuler à sec.",
      },
      {
        question: "Les procédés polymères posent-ils le même problème ?",
        answer:
          "Un problème différent : les poudres polymères sont des poussières organiques combustibles du Groupe G, non des métaux réactifs. Elles exigent une mise à la terre et une filtration retenue, mais pas les dispositions de Classe D.",
      },
    ],
    enPath: "/industries/additive-manufacturing",
    related: [
      { label: "Poussière de titane", href: `${M}/poussiere-de-titane` },
      { label: "Poussière d'aluminium", href: `${M}/poussiere-d-aluminium` },
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
      { label: "Poussière de plastique", href: `${M}/poussiere-de-plastique` },
      { label: "Impression 3D métal", href: `${A}/impression-3d-metal` },
    ],
  },
  {
    slug: "salles-blanches",
    name: "Salles blanches",
    group: "Environnements contrôlés",
    metaTitle: "Aspirateurs pour salles blanches | Filtration absolue et équipement dédié",
    metaDescription:
      "En salle blanche, l'appareil est jugé sur son échappement autant que sur sa captation, et il ne doit jamais quitter la zone contrôlée.",
    intro:
      "En salle blanche, la règle est simple à énoncer : un appareil qui retire des particules du plancher et en rejette de plus fines dans l'air a aggravé la situation qu'il devait corriger.",
    facts: [
      { label: "Critère décisif", value: "Ce que rejette l'échappement, non seulement ce qui est capté" },
      { label: "Filtration", value: "HEPA ou ULPA selon la classification de la salle" },
      { label: "Règle d'usage", value: "Équipement dédié, ne quittant jamais la zone" },
      { label: "L'appareil", value: "Est lui-même une surface dans la salle" },
    ],
    overview: [
      "La classification détermine l'exigence : HEPA pour la plupart des environnements contrôlés, ULPA là où la salle l'impose. La bonne question à poser est à quoi le filtre est testé plutôt que comment il est nommé.",
      "L'appareil est aussi une surface : une construction lisse en acier inoxydable essuyable lui permet de passer un protocole de nettoyage et d'habillage. Et un appareil qui nettoie aussi une zone générale rapporte de la contamination dans la salle.",
    ],
    risksHeading: "Ce que les salles blanches exigent",
    risks: [
    "Échappement comptant autant que la captation.",
    "Classification de la salle déterminant l'exigence de filtration.",
    "Équipement partagé important de la contamination depuis l'extérieur.",
    "Surfaces de l'appareil devant supporter l'essuyage et l'habillage.",
    "Vidange devant rester contenue.",
    "Poudres parfois aussi combustibles selon le procédé.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % ou ULPA selon la classification.",
    "Équipement dédié et étiqueté, demeurant dans la zone contrôlée.",
    "Construction lisse en acier inoxydable 316 et 304.",
    "Collecte scellée pour une vidange contenue.",
    "Vérification de ce à quoi le filtre est testé.",
    "Prise en compte de la combustibilité là où la poudre l'est aussi.",
    ],
    faqs: [
      {
        question: "Quelle filtration faut-il ?",
        answer:
          "Celle qu'impose la classification de la salle : HEPA pour la plupart des environnements contrôlés, ULPA là où la salle l'exige. La bonne question à poser à un fournisseur est à quoi le filtre est testé plutôt que comment il est nommé.",
      },
      {
        question: "Pourquoi l'échappement est-il le critère ?",
        answer:
          "Parce qu'un appareil qui retire des particules du plancher et en rejette de plus fines dans l'air a aggravé la situation. En environnement contrôlé, la performance se mesure autant à ce qui sort qu'à ce qui entre.",
      },
      {
        question: "Un appareil de salle blanche peut-il servir ailleurs ?",
        answer:
          "Non. Un appareil qui nettoie aussi une zone générale rapporte de la contamination dans la salle. L'équipement dédié et étiqueté est la pratique attendue.",
      },
      {
        question: "La construction de l'appareil compte-t-elle ?",
        answer:
          "Oui : il est lui-même une surface dans la salle. Une construction lisse en acier inoxydable essuyable lui permet de passer un protocole de nettoyage et d'habillage, alors qu'une surface texturée le contrarie.",
      },
    ],
    enPath: "/industries/cleanrooms",
    related: [
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Poussière de fibre de carbone", href: `${M}/poussiere-de-fibre-de-carbone` },
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
    ],
  },
  {
    slug: "centres-de-donnees",
    name: "Centres de données",
    group: "Infrastructure",
    metaTitle: "Aspirateurs pour centres de données | Poussière conductrice et faux planchers",
    metaDescription:
      "Dans un centre de données, la poussière conductrice peut ponter des connexions, et les whiskers de zinc des dalles de faux plancher sont un mode de défaillance documenté.",
    intro:
      "Dans un centre de données, la poussière ne présente pas de danger d'incendie notable — elle présente un danger de panne. Une accumulation conductrice peut ponter des connexions et provoquer des défaillances difficiles à diagnostiquer.",
    facts: [
      { label: "Danger dominant", value: "Panne d'équipement, non l'incendie" },
      { label: "Mode documenté", value: "Whiskers de zinc issus des dalles de faux plancher" },
      { label: "Zones critiques", value: "Sous les faux planchers, dans les baies, aux entrées d'air" },
      { label: "Contrainte", value: "Aucune méthode humide près d'équipement sous tension" },
    ],
    overview: [
      "Les whiskers de zinc méritent une mention particulière : de fines excroissances cristallines se formant sur les revêtements de zinc électrodéposé de certaines dalles de faux plancher anciennes. Elles se détachent, circulent avec l'air de refroidissement, et provoquent des courts-circuits.",
      "Le nettoyage sous faux plancher est donc une opération d'infrastructure plutôt qu'un entretien ménager : elle se planifie, elle exige une filtration absolue pour ne pas remettre de particules dans le flux d'air, et elle exclut toute méthode humide près d'équipement sous tension.",
    ],
    risksHeading: "Ce qu'un centre de données doit maîtriser",
    risks: [
    "Poussière conductrice pontant des connexions et provoquant des pannes.",
    "Whiskers de zinc des dalles de faux plancher anciennes.",
    "Circulation par l'air de refroidissement, distribuant les particules.",
    "Filtration insuffisante remettant des particules dans le flux d'air.",
    "Méthodes humides exclues près d'équipement sous tension.",
    "Diagnostic difficile des pannes causées par la poussière.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 %, pour ne rien remettre dans le flux d'air.",
    "Nettoyage planifié sous faux plancher comme opération d'infrastructure.",
    "Aucune méthode humide près d'équipement sous tension.",
    "Attention particulière aux dalles anciennes à revêtement de zinc.",
    "Nettoyage des entrées d'air et des baies selon un intervalle défini.",
    "Collecte contenue, sans redispersion à la vidange.",
    ],
    faqs: [
      {
        question: "La poussière est-elle un danger d'incendie en centre de données ?",
        answer:
          "Rarement le danger dominant. Le problème est la panne : une accumulation conductrice peut ponter des connexions et provoquer des défaillances difficiles à diagnostiquer, ce qui en fait un enjeu de disponibilité plutôt que de sécurité incendie.",
      },
      {
        question: "Qu'est-ce que les whiskers de zinc ?",
        answer:
          "De fines excroissances cristallines qui se forment sur les revêtements de zinc électrodéposé de certaines dalles de faux plancher anciennes. Elles se détachent, circulent avec l'air de refroidissement, et provoquent des courts-circuits — un mode de défaillance documenté dans les installations plus anciennes.",
      },
      {
        question: "Peut-on nettoyer sous un faux plancher sans arrêter les services ?",
        answer:
          "Le nettoyage se planifie comme une opération d'infrastructure. La contrainte principale est la filtration : un appareil qui rejette des particules dans le flux d'air de refroidissement distribue le problème plutôt que de le retirer.",
      },
      {
        question: "Les méthodes humides sont-elles utilisables ?",
        answer:
          "Pas près d'équipement sous tension. C'est une contrainte absolue dans ce contexte, et elle rend la récupération à sec avec filtration absolue la seule approche appropriée pour la plupart des zones.",
      },
    ],
    enPath: "/industries/data-centers",
    related: [
      { label: "Poussière de zinc", href: `${M}/poussiere-de-zinc` },
      { label: "Poussière de fibre de carbone", href: `${M}/poussiere-de-fibre-de-carbone` },
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
    ],
  },
  {
    slug: "dispositifs-medicaux",
    name: "Dispositifs médicaux",
    group: "Sciences de la vie",
    metaTitle: "Aspirateurs pour dispositifs médicaux | Usinage et propreté",
    metaDescription:
      "La fabrication de dispositifs médicaux combine usinage d'alliages exigeants, exigences de propreté et matières régulées.",
    intro:
      "La fabrication de dispositifs médicaux réunit deux mondes qui se rencontrent rarement : l'usinage de métaux exigeants et les exigences de propreté d'un environnement contrôlé.",
    facts: [
      { label: "Alliages typiques", value: "Titane, cobalt-chrome, inox, parfois cuivre-béryllium" },
      { label: "Matières régulées", value: "Cobalt, chrome, béryllium selon les alliages" },
      { label: "Second régime", value: "Propreté de production et validation du nettoyage" },
      { label: "Conséquence", value: "Deux exigences à satisfaire simultanément" },
    ],
    overview: [
      "Les alliages employés ne sont pas neutres : le titane est un métal combustible, le cobalt-chrome produit une poussière associée à la maladie pulmonaire des métaux durs, et certains alliages contiennent du cuivre-béryllium — régi par sa propre norme et rarement identifié dans une description de pièce.",
      "S'y ajoute l'exigence de propreté : une particule laissée sur un implant ou un instrument est un défaut, et le nettoyage doit être validé et consigné plutôt que simplement effectué.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Titane combustible de Classe D dans plusieurs procédés d'usinage.",
    "Cobalt-chrome associé à la maladie pulmonaire des métaux durs.",
    "Cuivre-béryllium possible et rarement identifié dans les descriptions.",
    "Propreté de production : une particule est un défaut.",
    "Nettoyage devant être validé et consigné.",
    "Deux régimes à satisfaire simultanément.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % pour les matières régulées et la propreté.",
    "Équipement conducteur et mis à la terre pour les fines métalliques.",
    "Séparation par immersion pour le titane là où l'évaluation le justifie.",
    "Appareils dédiés par matière et par zone.",
    "Vérification de la composition des alliages avant usinage.",
    "Consignation des nettoyages, servant sécurité et validation.",
    ],
    faqs: [
      {
        question: "Quels alliages posent problème ?",
        answer:
          "Le titane est un métal combustible de Classe D. Le cobalt-chrome produit une poussière associée à la maladie pulmonaire des métaux durs. Et certains alliages contiennent du cuivre-béryllium, régi par sa propre norme OSHA et rarement identifié dans une description de pièce.",
      },
      {
        question: "Pourquoi vérifier la composition des alliages ?",
        answer:
          "Parce que la teneur en béryllium d'un alliage de cuivre n'apparaît pas dans la description d'une pièce, et qu'elle change entièrement les exigences d'exposition. La vérification auprès du fournisseur précède l'usinage d'un stock inconnu.",
      },
      {
        question: "Comment concilier sécurité et propreté ?",
        answer:
          "Par une filtration absolue, qui sert les deux : elle retient les matières régulées et elle évite de remettre des particules dans un environnement où une particule est un défaut. Le nettoyage validé et consigné répond au second régime.",
      },
      {
        question: "Faut-il des appareils dédiés ?",
        answer:
          "Par matière et par zone, oui. Mélanger des fines réactives crée des conditions non évaluées, et un appareil circulant entre zones compromet la propreté de production.",
      },
    ],
    enPath: "/industries/medical-devices",
    related: [
      { label: "Poussière de titane", href: `${M}/poussiere-de-titane` },
      { label: "Poussière de cobalt", href: `${M}/poussiere-de-cobalt` },
      { label: "Poussière de béryllium", href: `${M}/poussiere-de-beryllium` },
      { label: "Poussière de chrome", href: `${M}/poussiere-de-chrome` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
    ],
  },
  {
    slug: "biotechnologie",
    name: "Biotechnologie",
    group: "Sciences de la vie",
    metaTitle: "Aspirateurs pour la biotechnologie | Confinement et poudres actives",
    metaDescription:
      "En biotechnologie, le confinement est gouverné par la limite d'exposition du composé, et plusieurs excipients sont aussi combustibles.",
    intro:
      "En biotechnologie comme en pharmaceutique, la spécification découle d'une chose : la limite d'exposition professionnelle du composé manipulé. Le reste en découle.",
    facts: [
      { label: "Ce qui gouverne", value: "La limite d'exposition professionnelle du composé" },
      { label: "Second régime", value: "Nettoyage validé, traçabilité, contamination croisée" },
      { label: "Fait souvent oublié", value: "Plusieurs excipients sont aussi combustibles" },
      { label: "Moment critique", value: "Le changement de contenant" },
    ],
    overview: [
      "Les composés à forte activité imposent un confinement supérieur à ce qu'une poussière ordinaire exigerait, et c'est l'évaluation d'exposition qui fixe le niveau plutôt qu'une préférence d'équipement.",
      "Un point régulièrement négligé : les excipients — amidons, lactose, charges — sont des poussières organiques combustibles. Lorsque la poudre est les deux, le confinement et la protection contre les explosions se spécifient ensemble.",
    ],
    risksHeading: "Ce que la biotechnologie doit maîtriser",
    risks: [
    "Limites d'exposition très basses pour les composés actifs.",
    "Excipients souvent aussi combustibles.",
    "Changement de contenant comme moment d'exposition le plus élevé.",
    "Nettoyage validé et traçabilité exigés.",
    "Contamination croisée entre produits.",
    "Constructions devant supporter le nettoyage et la validation.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 % ou ULPA selon la limite d'exposition.",
    "Collecte scellée avec procédure définie pour le changement de contenant.",
    "Construction en acier inoxydable 316 et 304, lavable et validable.",
    "Équipement dédié par zone et par produit.",
    "Spécification conjointe du confinement et de la protection contre les explosions.",
    "Consignation des nettoyages.",
    ],
    faqs: [
      {
        question: "Qu'est-ce qui détermine l'équipement ?",
        answer:
          "La limite d'exposition professionnelle du composé manipulé. Elle fixe le niveau de confinement et de filtration requis, et la procédure de vidange en découle. C'est une conséquence de l'évaluation d'exposition plutôt qu'une préférence.",
      },
      {
        question: "Les excipients sont-ils combustibles ?",
        answer:
          "Beaucoup le sont — amidons, lactose et de nombreuses charges sont des poussières organiques combustibles. C'est régulièrement négligé parce que l'attention porte sur le confinement. Lorsque la poudre est les deux, les deux exigences se spécifient ensemble.",
      },
      {
        question: "Quel est le moment le plus exposant ?",
        answer:
          "Le changement de contenant plutôt que la récupération. C'est le moment où la matière captée est ouverte et déplacée, et une procédure définie avec sacs scellés vaut davantage qu'une aspiration supplémentaire.",
      },
      {
        question: "Un appareil peut-il servir plusieurs produits ?",
        answer:
          "Là où la contamination croisée est un enjeu de conformité, non. Un équipement dédié par zone et par produit est attendu, et le nettoyage entre produits doit être validé et consigné.",
      },
    ],
    enPath: "/industries/biotech",
    related: [
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
      { label: "Ensachage et vidage de sacs", href: `${A}/ensachage-et-vidage-de-sacs` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
    ],
  },
  {
    slug: "hydrogene",
    name: "Hydrogène",
    group: "Énergie",
    metaTitle: "Aspirateurs pour installations à hydrogène | Zones de Classe I",
    metaDescription:
      "L'hydrogène est un danger de gaz, non de poussière : ce qui compte est la classification de zone et l'équipement qui peut y entrer.",
    intro:
      "L'hydrogène est le cas où il faut être clair sur ce dont on parle : ce n'est pas un danger de poussière. C'est un gaz inflammable, et ce qui détermine l'équipement est la classification de la zone.",
    facts: [
      { label: "Nature du danger", value: "Gaz inflammable — non une poussière combustible" },
      { label: "Classification", value: "Classe I, Groupe B pour l'hydrogène" },
      { label: "Ce que cela change", value: "L'équipement doit convenir à une zone de Classe I" },
      { label: "Poussières présentes", value: "Celles des procédés adjacents, non l'hydrogène lui-même" },
    ],
    overview: [
      "L'hydrogène brûle avec une plage d'inflammabilité très large et une énergie d'inflammation très faible, ce qui explique son classement en Groupe B — le plus exigeant des groupes de gaz après l'acétylène.",
      "Ce qu'un aspirateur fait dans une telle installation concerne donc les poussières des procédés adjacents — catalyseurs, matières premières, résidus — récupérées avec un équipement convenant à la classification assignée. La classification est établie par l'ingénieur de l'installation, non déduite de l'apparence de la zone.",
    ],
    risksHeading: "Ce que ces installations doivent maîtriser",
    risks: [
    "Hydrogène classé en Classe I, Groupe B — parmi les plus exigeants.",
    "Plage d'inflammabilité très large et énergie d'inflammation très faible.",
    "Équipement devant convenir à la classification assignée.",
    "Poussières des procédés adjacents, distinctes du danger gazeux.",
    "Catalyseurs et matières premières avec leurs propres exigences.",
    "Classification établie par l'ingénieur, non présumée.",
    ],
    solutions: [
    "Équipement correspondant à la classification de zone assignée par votre ingénieur.",
    "Récupération conductrice, mise à la terre et exempte de sources d'inflammation.",
    "Filtration absolue HEPA 99,99 % pour les poussières de procédé.",
    "Compatibilité établie pour les catalyseurs et résidus manipulés.",
    "Aucune présomption sur la classification à partir de l'apparence de la zone.",
    "Documentation de certification fournie pour la configuration retenue.",
    ],
    faqs: [
      {
        question: "L'hydrogène est-il un danger de poussière ?",
        answer:
          "Non, et il vaut la peine d'être clair : l'hydrogène est un gaz inflammable, classé en Classe I, Groupe B — parmi les plus exigeants des groupes de gaz. Ce qui détermine l'équipement est la classification de la zone, non une évaluation de poussière combustible.",
      },
      {
        question: "Que fait un aspirateur dans une installation à hydrogène ?",
        answer:
          "Il récupère les poussières des procédés adjacents — catalyseurs, matières premières, résidus — avec un équipement convenant à la classification assignée à la zone où il est utilisé.",
      },
      {
        question: "Pourquoi le Groupe B est-il exigeant ?",
        answer:
          "Parce que l'hydrogène a une plage d'inflammabilité très large et une énergie d'inflammation très faible. Cela restreint ce qui peut être utilisé dans une zone classifiée pour lui.",
      },
      {
        question: "Qui détermine la classification ?",
        answer:
          "L'ingénieur électrique ou de procédé de votre installation, et elle est acceptée par l'autorité compétente. Nous adaptons l'équipement à cette assignation plutôt que de la deviner.",
      },
    ],
    enPath: "/industries/hydrogen",
    related: [
      { label: "Poussière de soufre", href: `${M}/poussiere-de-soufre` },
      { label: "Nettoyage de réservoirs", href: `${A}/nettoyage-de-reservoirs` },
      { label: "Nettoyage de déversements", href: `${A}/nettoyage-de-deversements` },
      { label: "Poussière métallique combustible", href: `${M}/poussiere-metallique-combustible` },
    ],
  },

  {
    slug: "recyclage",
    name: "Recyclage",
    group: "Ressources",
    metaTitle: "Aspirateurs pour le recyclage | Flux mixtes et matières inconnues",
    metaDescription:
      "Le recyclage traite des flux dont la composition n'est pas connue à l'avance, ce qui inverse la logique habituelle d'évaluation des dangers.",
    intro:
      "Le recyclage inverse la logique habituelle : partout ailleurs on connaît sa matière et on spécifie contre elle, alors qu'ici le flux arrive avec une composition qu'on ne contrôle pas.",
    facts: [
      { label: "Difficulté centrale", value: "La composition du flux n'est pas connue à l'avance" },
      { label: "Poussières typiques", value: "Papier, plastique, bois, métaux, verre — souvent mélangés" },
      { label: "Danger émergent", value: "Piles au lithium dans les flux, cause d'incendies documentée" },
      { label: "Conséquence", value: "Spécifier pour le pire cas plausible plutôt que le cas moyen" },
    ],
    overview: [
      "Cette incertitude change la façon de spécifier : il faut couvrir le pire cas plausible du flux plutôt que sa composition moyenne, parce qu'un lot atypique n'annonce pas son arrivée.",
      "Les piles au lithium présentes dans les flux de déchets sont devenues une cause d'incendie documentée dans le secteur : endommagées au broyage, elles s'enflamment. C'est un danger qui n'existait pas dans les installations plus anciennes et qui n'apparaît dans aucune fiche de matière.",
    ],
    risksHeading: "Ce que le recyclage doit maîtriser",
    risks: [
    "Composition du flux inconnue et variable d'un lot à l'autre.",
    "Piles au lithium dans les flux, s'enflammant au broyage.",
    "Mélange de poussières combustibles de natures différentes.",
    "Volumes élevés et matières abrasives.",
    "Matières régulées arrivant sans être déclarées.",
    "Impossibilité de caractériser à l'avance chaque lot.",
    ],
    solutions: [
    "Spécification couvrant le pire cas plausible du flux, non sa moyenne.",
    "Équipement antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 %, la composition étant incertaine.",
    "Construction tolérante à l'abrasion pour les flux mixtes.",
    "Retrait rapide de la matière récupérée, sans contenants laissés en place.",
    "Vigilance sur les foyers dans la matière collectée.",
    ],
    faqs: [
      {
        question: "Pourquoi le recyclage est-il un cas particulier ?",
        answer:
          "Parce que la composition du flux n'est pas connue à l'avance. Partout ailleurs on connaît sa matière et on spécifie contre elle ; ici il faut couvrir le pire cas plausible plutôt que la composition moyenne, puisqu'un lot atypique n'annonce pas son arrivée.",
      },
      {
        question: "Les piles au lithium sont-elles un danger réel ?",
        answer:
          "C'est devenu une cause d'incendie documentée dans le secteur : des piles au lithium présentes dans les flux de déchets s'enflamment lorsqu'elles sont endommagées au broyage. C'est un danger qui n'apparaît dans aucune fiche de matière et qui n'existait pas dans les installations plus anciennes.",
      },
      {
        question: "Comment spécifier sans connaître la matière ?",
        answer:
          "En couvrant le pire cas plausible : équipement antidéflagrant conducteur et mis à la terre, filtration absolue, et construction tolérante à l'abrasion. C'est plus prudent que le strict nécessaire pour un flux moyen, et c'est le prix de l'incertitude.",
      },
      {
        question: "Faut-il surveiller la matière collectée ?",
        answer:
          "Oui, particulièrement dans ce secteur. Un flux mixte peut contenir de quoi entretenir un foyer, et un contenant plein laissé en place concentre le problème. Le retrait rapide est un contrôle simple et efficace.",
      },
    ],
    enPath: "/industries/recycling",
    related: [
      { label: "Poussière de papier", href: `${M}/poussiere-de-papier` },
      { label: "Poussière de plastique", href: `${M}/poussiere-de-plastique` },
      { label: "Poussière de lithium", href: `${M}/poussiere-de-lithium` },
      { label: "Poussière de bois", href: `${M}/poussiere-de-bois` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
    ],
  },
  {
    slug: "textile",
    name: "Textile",
    group: "Transformation",
    metaTitle: "Aspirateurs pour le textile | Charpie, byssinose et machines",
    metaDescription:
      "La charpie textile est combustible, isole les surfaces chaudes des machines, et le coton possède sa propre norme OSHA en raison de la byssinose.",
    intro:
      "Dans le textile, la charpie fait deux choses à la fois : elle constitue un combustible réparti dans tout l'atelier, et elle isole les surfaces chaudes des machines — créant ainsi la source d'inflammation qu'elle alimente ensuite.",
    facts: [
      { label: "Matière", value: "Charpie et fines de fibres — combustibles" },
      { label: "Danger sanitaire", value: "Byssinose pour le coton, avec norme OSHA dédiée" },
      { label: "Mécanisme particulier", value: "La charpie isole les surfaces chaudes des machines" },
      { label: "Zones critiques", value: "Cardage, filature, moteurs et carters d'entraînement" },
    ],
    overview: [
      "Le cardage et la filature produisent le plus de charpie, et les moteurs et carters d'entraînement sont les endroits où elle cause le plus de dommage : une couche isolante fait monter la température de la surface qu'elle recouvre.",
      "Le coton ajoute un régime distinct : OSHA le régit par une norme dédiée en raison de la byssinose, la maladie respiratoire historiquement appelée poumon brun. Un atelier de coton porte donc un danger d'incendie et un danger sanitaire réglementé simultanément.",
    ],
    risksHeading: "Ce que le textile doit maîtriser",
    risks: [
    "Charpie combustible répartie dans tout l'atelier.",
    "Isolation des surfaces chaudes par la charpie accumulée.",
    "Byssinose pour le coton, régie par une norme OSHA dédiée.",
    "Cardage et filature comme points de production principaux.",
    "Blocage des systèmes de refroidissement des machines.",
    "Charges statiques dans le travail de fibre sèche.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Nettoyage prioritaire des moteurs et carters d'entraînement.",
    "Fréquences définies pour le cardage, la filature et les surfaces hautes.",
    "Élimination du soufflage à l'air comprimé, qui redistribue la charpie.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Pourquoi la charpie est-elle particulièrement dangereuse ?",
        answer:
          "Parce qu'elle fait deux choses à la fois : elle constitue un combustible réparti dans tout l'atelier, et elle isole les surfaces chaudes des machines. Une couche de charpie sur un moteur fait monter la température de la surface qu'elle recouvre — elle crée la source d'inflammation qu'elle alimente ensuite.",
      },
      {
        question: "Le coton a-t-il sa propre réglementation ?",
        answer:
          "Oui, ce qui est inhabituel pour une poussière organique. OSHA le régit par une norme dédiée en raison de la byssinose, la maladie respiratoire historiquement appelée poumon brun. Un atelier de coton porte donc un danger d'incendie et un danger sanitaire réglementé en même temps.",
      },
      {
        question: "Où nettoyer en priorité ?",
        answer:
          "Sur les moteurs et les carters d'entraînement, où la charpie cause le plus de dommage, puis au cardage et à la filature qui en produisent le plus, puis sur les surfaces hautes.",
      },
      {
        question: "Peut-on souffler la charpie à l'air comprimé ?",
        answer:
          "Non. Le soufflage la redistribue sur d'autres surfaces, souvent en hauteur et hors de vue, et met la fraction respirable en suspension dans un atelier où la byssinose est le danger sanitaire documenté.",
      },
    ],
    enPath: "/industries/textile",
    related: [
      { label: "Poussière de coton", href: `${M}/poussiere-de-coton` },
      { label: "Poussière de cuir", href: `${M}/poussiere-de-cuir` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
    ],
  },
  {
    slug: "materiaux-de-construction",
    name: "Matériaux de construction",
    group: "Ressources",
    metaTitle: "Aspirateurs pour matériaux de construction | Silice avant tout",
    metaDescription:
      "Béton, brique, pierre et maçonnerie ne brûlent pas. Le danger est la silice cristalline respirable, avec une limite d'exposition très basse.",
    intro:
      "Dans les matériaux de construction, la question de la combustibilité est la mauvaise question : le béton, la brique et la pierre ne brûlent pas. Le danger est la silice cristalline respirable, et il est sérieux.",
    facts: [
      { label: "Combustibilité", value: "Nulle — ces matériaux ne brûlent pas et ne déflagrent pas" },
      { label: "Danger réel", value: "Silice cristalline respirable — silicose, cancer du poumon" },
      { label: "Limite d'exposition", value: "50 µg/m³ (MPT 8 h) selon la norme OSHA" },
      { label: "Opérations concernées", value: "Coupe, meulage, ponçage, démolition, sablage" },
    ],
    overview: [
      "La coupe, le meulage, le ponçage et la démolition libèrent la silice, et ce sont des opérations ordinaires effectuées quotidiennement sur des chantiers et dans des usines de préfabrication.",
      "Parce qu'il n'y a aucun danger de déflagration, la matière échoue au test mental que beaucoup d'installations utilisent pour décider si une poussière mérite attention. C'est précisément l'erreur : le balayage à sec et le soufflage sont inappropriés, non pour un risque d'incendie mais parce qu'ils remettent en suspension une poussière dont la limite est parmi les plus basses.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Silice cristalline respirable causant une maladie pulmonaire irréversible.",
    "Limite d'exposition très basse, bien en dessous d'une poussière visible.",
    "Opérations ordinaires générant la silice quotidiennement.",
    "Absence de danger d'incendie menant à sous-estimer la matière.",
    "Volume élevé en démolition et en préfabrication.",
    "Balayage à sec encore courant et inapproprié.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 %, la silice gouvernant entièrement la spécification.",
    "Captation à la source sur les scies, meuleuses et ponceuses.",
    "Méthodes humides là où le procédé et l'évaluation d'exposition le permettent.",
    "Élimination du balayage à sec et du soufflage à l'air comprimé.",
    "Grande capacité de collecte pour les chantiers de démolition.",
    "Consignation des fréquences dans le programme d'hygiène industrielle.",
    ],
    faqs: [
      {
        question: "Le béton et la brique sont-ils combustibles ?",
        answer:
          "Non. Ce sont des matériaux minéraux : ils ne brûlent pas et ne présentent aucun danger de déflagration, quelle que soit la finesse de leur poussière. C'est une exception réelle parmi les poussières industrielles.",
      },
      {
        question: "Quel est le vrai danger alors ?",
        answer:
          "La silice cristalline respirable, qui cause la silicose — une maladie pulmonaire irréversible — et qui est associée au cancer du poumon. La norme OSHA fixe une limite d'exposition de 50 microgrammes par mètre cube, assez bas pour qu'une poussière visible la dépasse largement.",
      },
      {
        question: "Pourquoi cette poussière est-elle sous-estimée ?",
        answer:
          "Parce qu'elle échoue au test mental habituel : elle ne brûle pas, donc elle paraît inoffensive. C'est l'erreur exacte que cette page existe pour corriger — l'absence de danger d'incendie ne dit rien du danger sanitaire.",
      },
      {
        question: "Le balayage à sec est-il acceptable ?",
        answer:
          "Non. Il remet en suspension une poussière dont la limite d'exposition est parmi les plus basses. La captation à la source sur les outils et la récupération à filtration absolue sont les contrôles attendus, avec des méthodes humides là où le procédé le permet.",
      },
    ],
    enPath: "/industries/construction-materials",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Poussière de béton et de ciment", href: `${M}/poussiere-de-beton-et-de-ciment` },
      { label: "Ponçage", href: `${A}/poncage` },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
    ],
  },
  {
    slug: "verre-et-ceramique",
    name: "Verre et céramique",
    group: "Transformation",
    metaTitle: "Aspirateurs pour verre et céramique | Silice et abrasivité",
    metaDescription:
      "Le verre et la céramique combinent silice cristalline respirable, abrasivité extrême et chaleur de procédé élevée.",
    intro:
      "Le verre et la céramique posent la même question que les matériaux de construction — la silice — avec deux contraintes ajoutées : une abrasivité qui détruit l'équipement et une chaleur de procédé très élevée.",
    facts: [
      { label: "Danger dominant", value: "Silice cristalline respirable des matières premières et du façonnage" },
      { label: "Contrainte 1", value: "Abrasivité extrême du verre et des céramiques" },
      { label: "Contrainte 2", value: "Chaleur de procédé élevée des fours" },
      { label: "Combustibilité", value: "Nulle pour la matière — le danger est sanitaire" },
    ],
    overview: [
      "Les matières premières — sable, feldspath, argiles — contiennent de la silice, et le façonnage, le meulage et le polissage la libèrent sous forme respirable. Le danger est sanitaire plutôt qu'incendiaire.",
      "L'abrasivité est la contrainte pratique : les particules de verre et de céramique érodent boyaux, tubes et surfaces de séparation plus vite que presque toute autre matière. Une construction tolérante à l'abrasion n'est pas un luxe.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Silice cristalline respirable des matières premières et du façonnage.",
    "Abrasivité extrême érodant rapidement l'équipement.",
    "Chaleur de procédé élevée à proximité des zones de manutention.",
    "Poudres d'émaux et de pigments avec leurs propres compatibilités.",
    "Absence de danger de déflagration menant à sous-estimer la matière.",
    "Éclats de verre mêlés à la poussière fine.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 %, la silice gouvernant la spécification.",
    "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
    "Captation à la source au façonnage, au meulage et au polissage.",
    "Élimination du balayage à sec et du soufflage à l'air comprimé.",
    "Vérification de la composition des émaux et pigments utilisés.",
    "Fréquences définies incluant le pourtour des fours.",
    ],
    faqs: [
      {
        question: "Le verre pose-t-il un danger de poussière ?",
        answer:
          "Oui, mais sanitaire plutôt qu'incendiaire. Les matières premières contiennent de la silice, et le façonnage, le meulage et le polissage la libèrent sous forme respirable. Le verre ne brûle pas et ne déflagre pas.",
      },
      {
        question: "Pourquoi l'équipement s'use-t-il si vite ?",
        answer:
          "Parce que les particules de verre et de céramique sont parmi les plus abrasives qu'un appareil de récupération puisse rencontrer. Elles érodent boyaux, tubes et surfaces de séparation, ce qui rend une construction tolérante à l'abrasion nécessaire plutôt qu'optionnelle.",
      },
      {
        question: "Les émaux et pigments changent-ils quelque chose ?",
        answer:
          "Ils peuvent : certains contiennent des métaux régulés, et leur composition détermine des exigences supplémentaires. Vérifier la composition auprès du fournisseur avant de travailler une nouvelle formulation est la démarche prudente.",
      },
      {
        question: "Comment gérer les éclats mêlés à la poussière fine ?",
        answer:
          "Par une récupération conçue pour un flux mixte, avec une construction résistante et une filtration retenue pour la fraction fine. Séparer les deux à la source, quand le procédé le permet, simplifie les deux problèmes.",
      },
    ],
    enPath: "/industries/glass-ceramics",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Poussière de béton et de ciment", href: `${M}/poussiere-de-beton-et-de-ciment` },
      { label: "Poussière de plomb", href: `${M}/poussiere-de-plomb` },
      { label: "Poussière de meulage", href: `${A}/poussiere-de-meulage` },
      { label: "Décapage abrasif", href: `${A}/decapage-abrasif` },
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    group: "Agroalimentaire",
    metaTitle: "Aspirateurs pour l'agriculture | Silos, élévateurs et grain",
    metaDescription:
      "La poussière de grain est combustible et le secteur agricole est l'un des rares où les fréquences de nettoyage figurent dans une réglementation.",
    intro:
      "L'agriculture est l'un des rares secteurs où des fréquences de nettoyage figurent dans une réglementation plutôt que seulement dans une norme consensuelle — conséquence directe du registre d'explosions d'élévateurs à grains.",
    facts: [
      { label: "Matière", value: "Poussière de grain combustible — Classe II, Groupe G" },
      { label: "Normes", value: "NFPA 660 et dispositions OSHA sur la manutention des grains" },
      { label: "Zones critiques", value: "Fosses, élévateurs, tours de transfert, séchoirs" },
      { label: "Espaces clos", value: "Silos et cellules, avec processus de permis" },
    ],
    overview: [
      "Le danger se concentre là où le grain change de direction : fosses de réception, têtes et pieds d'élévateurs, tours de transfert et nettoyeurs. Ces points combinent la fraction la plus fine, du confinement et des sources d'inflammation mécaniques.",
      "Les séchoirs ajoutent une chaleur soutenue près de matière fine accumulée, et les silos posent la question de l'entrée en espace clos, avec le processus de permis complet lorsque l'entrée est nécessaire.",
    ],
    risksHeading: "Ce que l'agriculture doit maîtriser",
    risks: [
    "Poussière de grain combustible avec un registre d'explosions documenté.",
    "Fréquences de nettoyage figurant dans la réglementation.",
    "Fosses, élévateurs et tours de transfert comme points critiques.",
    "Chaleur soutenue des séchoirs près de matière fine.",
    "Entrée en espace clos dans les silos et cellules.",
    "Combustion lente possible dans le grain accumulé.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Appareils pneumatiques adaptés au travail prolongé là où l'air est disponible.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Nettoyage depuis les ouvertures pour réduire la fréquence des entrées en silo.",
    "Fréquences définies pour fosses, élévateurs, tours et pourtour des séchoirs.",
    "Application intégrale du processus de permis lorsqu'une entrée est nécessaire.",
    ],
    faqs: [
      {
        question: "La poussière de grain est-elle vraiment explosive ?",
        answer:
          "Oui, et le registre des explosions d'élévateurs à grains est la raison pour laquelle la maîtrise des poussières est devenue un sujet réglementé en agriculture. La NFPA 660 s'applique, ainsi que les dispositions OSHA sur les installations de manutention des grains.",
      },
      {
        question: "Où se concentre le danger ?",
        answer:
          "Là où le grain change de direction : fosses de réception, têtes et pieds d'élévateurs, tours de transfert et nettoyeurs. Ces points réunissent la fraction la plus fine, du confinement et des entraînements mécaniques. Les séchoirs y ajoutent une chaleur soutenue.",
      },
      {
        question: "Le nettoyage de silo exige-t-il une entrée ?",
        answer:
          "Pas toujours. Nettoyer depuis les trous d'homme et les ouvertures rend les entrées rares plutôt qu'inutiles — lorsque la géométrie exige réellement une entrée, le processus complet de permis s'applique exactement comme avant.",
      },
      {
        question: "Les petites exploitations sont-elles concernées ?",
        answer:
          "Le mécanisme ne dépend pas de l'échelle : une fosse confinée avec de la poussière accumulée et un élévateur mécanique réunit les mêmes conditions dans une installation plus petite.",
      },
    ],
    enPath: "/industries/agriculture",
    related: [
      { label: "Poussière de grain", href: `${M}/poussiere-de-grain` },
      { label: "Poussière de maïs", href: `${M}/poussiere-de-mais` },
      { label: "Poussière de malt", href: `${M}/poussiere-de-malt` },
      { label: "Nettoyage de silo", href: `${A}/nettoyage-de-silo` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
    ],
  },
  {
    slug: "cannabis",
    name: "Cannabis",
    group: "Transformation",
    metaTitle: "Aspirateurs pour le cannabis | Poussière végétale et extraction",
    metaDescription:
      "La transformation du cannabis combine poussière végétale combustible et, en extraction aux solvants, des zones classifiées Classe I.",
    intro:
      "La transformation du cannabis présente deux profils très différents sous un même toit : la manipulation de matière végétale sèche, et l'extraction aux solvants — qui crée des zones classifiées.",
    facts: [
      { label: "Côté végétal", value: "Poussière organique combustible du broyage et du tamisage" },
      { label: "Côté extraction", value: "Solvants inflammables créant des zones de Classe I" },
      { label: "Conséquence", value: "Deux régimes d'équipement dans la même installation" },
      { label: "Facteur additionnel", value: "Exigences de salubrité et de traçabilité" },
    ],
    overview: [
      "La matière végétale sèche produit une poussière combustible au broyage, au tamisage et à la manipulation du kief — une fraction fine et facilement mise en suspension.",
      "L'extraction change le régime : les solvants inflammables comme le butane et l'éthanol créent des zones classifiées en Classe I pour les gaz et vapeurs, où l'équipement doit correspondre à la classification assignée par l'ingénieur de l'installation. Un appareil convenant à la salle de broyage ne convient pas nécessairement à la salle d'extraction.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Poussière végétale combustible au broyage et au tamisage.",
    "Solvants inflammables créant des zones de Classe I en extraction.",
    "Deux régimes d'équipement dans la même installation.",
    "Exigences de salubrité et de traçabilité s'ajoutant à la sécurité.",
    "Charges statiques dans le travail de matière végétale sèche.",
    "Résidus résineux compliquant le nettoyage des surfaces.",
    ],
    solutions: [
    "Équipement correspondant à la classification assignée, par zone.",
    "Récupération conductrice et mise à la terre côté végétal.",
    "Équipement adapté à la Classe I en zone d'extraction.",
    "Filtration absolue HEPA 99,99 % pour la fraction fine.",
    "Construction lavable répondant aux exigences de salubrité.",
    "Consignation des nettoyages, servant sécurité et traçabilité.",
    ],
    faqs: [
      {
        question: "Quels sont les deux profils de danger ?",
        answer:
          "La manipulation de matière végétale sèche, qui produit une poussière organique combustible au broyage et au tamisage, et l'extraction aux solvants, qui crée des zones classifiées en Classe I pour les gaz et vapeurs. Ce sont deux régimes d'équipement différents dans la même installation.",
      },
      {
        question: "Un appareil peut-il servir dans les deux zones ?",
        answer:
          "Pas nécessairement. Un appareil convenant à la salle de broyage ne convient pas forcément à une zone d'extraction classifiée en Classe I. La classification est assignée par l'ingénieur de l'installation, et l'équipement doit y correspondre zone par zone.",
      },
      {
        question: "La poussière de cannabis est-elle combustible ?",
        answer:
          "La matière végétale sèche produit une poussière organique combustible, particulièrement au broyage et au tamisage, et la manipulation du kief génère une fraction fine facilement mise en suspension.",
      },
      {
        question: "Comment concilier sécurité et traçabilité ?",
        answer:
          "Par un nettoyage documenté avec un appareil à construction lavable : un même passage consigné sert le programme de poussières combustibles et les exigences de salubrité et de traçabilité du secteur.",
      },
    ],
    enPath: "/industries/cannabis",
    related: [
      { label: "Poussière de tabac", href: `${M}/poussiere-de-tabac` },
      { label: "Poussière de grain", href: `${M}/poussiere-de-grain` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
      { label: "Nettoyage de déversements", href: `${A}/nettoyage-de-deversements` },
    ],
  },
  {
    slug: "cosmetiques",
    name: "Cosmétiques",
    group: "Sciences de la vie",
    metaTitle: "Aspirateurs pour les cosmétiques | Poudres fines et contamination",
    metaDescription:
      "Les poudres cosmétiques sont fines, souvent combustibles, et la contamination croisée entre teintes est un enjeu de conformité distinct.",
    intro:
      "Les poudres cosmétiques sont conçues pour être extrêmement fines — c'est ce qui les rend agréables à l'usage, et c'est aussi ce qui les rend faciles à mettre en suspension.",
    facts: [
      { label: "Matières", value: "Talc, mica, pigments, amidons et charges" },
      { label: "Finesse", value: "Conçue pour être extrême, donc facilement mise en suspension" },
      { label: "Combustibilité", value: "Réelle pour les poudres organiques ; nulle pour les minérales" },
      { label: "Enjeu additionnel", value: "Contamination croisée entre teintes et formulations" },
    ],
    overview: [
      "La combustibilité dépend de la matière : les amidons et charges organiques sont combustibles, alors que le talc et le mica sont minéraux et ne brûlent pas. Une même ligne peut traiter les deux, ce qui rend l'évaluation par produit nécessaire plutôt qu'une hypothèse globale.",
      "La contamination croisée est l'autre contrainte : une trace de pigment d'une teinte dans un lot d'une autre est un défaut de production, ce qui impose un nettoyage documenté entre séries — exactement ce qu'exige aussi une analyse des dangers liés aux poussières.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Poudres conçues pour être extrêmement fines, donc facilement en suspension.",
    "Combustibilité variable selon la matière — organique ou minérale.",
    "Contamination croisée entre teintes comme défaut de production.",
    "Nettoyage documenté exigé entre séries.",
    "Pigments contenant parfois des métaux régulés.",
    "Exigences de salubrité s'ajoutant à la sécurité.",
    ],
    solutions: [
    "Récupération à filtration absolue HEPA 99,99 % pour la fraction fine.",
    "Évaluation par produit plutôt qu'hypothèse globale sur la combustibilité.",
    "Récupération dédiée par teinte là où la contamination croisée est un enjeu.",
    "Construction lavable répondant aux exigences de salubrité.",
    "Vérification de la composition des pigments utilisés.",
    "Un seul passage documenté servant la sécurité et la conformité produit.",
    ],
    faqs: [
      {
        question: "Les poudres cosmétiques sont-elles combustibles ?",
        answer:
          "Cela dépend de la matière. Les amidons et charges organiques le sont ; le talc et le mica sont minéraux et ne brûlent pas. Une même ligne pouvant traiter les deux, l'évaluation se fait par produit plutôt que par hypothèse globale.",
      },
      {
        question: "Pourquoi la finesse pose-t-elle problème ?",
        answer:
          "Parce que ces poudres sont conçues pour être extrêmement fines — c'est ce qui les rend agréables à l'usage. La même propriété les rend faciles à mettre en suspension et difficiles à retenir sans filtration absolue.",
      },
      {
        question: "Comment gérer la contamination entre teintes ?",
        answer:
          "Par une récupération dédiée par teinte là où l'enjeu existe, et un nettoyage documenté entre séries. C'est un défaut de production plutôt qu'un danger, mais il impose exactement la même discipline qu'une analyse des dangers liés aux poussières.",
      },
      {
        question: "Les pigments posent-ils un danger particulier ?",
        answer:
          "Certains contiennent des métaux régulés, ce qui ajoute des exigences d'exposition et d'élimination. Vérifier la composition auprès du fournisseur avant d'introduire une nouvelle formulation est la démarche prudente.",
      },
    ],
    enPath: "/industries/cosmetics",
    related: [
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Ensachage et vidage de sacs", href: `${A}/ensachage-et-vidage-de-sacs` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
    ],
  },

  {
    slug: "mines-et-mineraux",
    name: "Mines et minéraux",
    group: "Ressources",
    metaTitle: "Aspirateurs pour mines et traitement des minéraux | Silice",
    metaDescription:
      "Le traitement des minéraux combine silice cristalline respirable, volumes élevés et abrasivité extrême. Récupération adaptée.",
    intro:
      "Le traitement des minéraux pose un problème d'échelle avant un problème de chimie : les volumes sont élevés, la matière est abrasive, et la silice cristalline respirable est présente dans une grande partie de ce qui est concassé.",
    facts: [
      { label: "Danger dominant", value: "Silice cristalline respirable — silicose" },
      { label: "Limite d'exposition", value: "50 µg/m³ (MPT 8 h) selon la norme OSHA" },
      { label: "Contrainte physique", value: "Volumes élevés et abrasivité extrême" },
      { label: "Combustibilité", value: "Variable : nulle pour la plupart des minéraux, réelle pour le charbon" },
    ],
    overview: [
      "La plupart des minéraux ne brûlent pas : leur danger est sanitaire, dominé par la silice. Le charbon et certains minerais sulfurés sont l'exception, et pour eux le danger de combustion s'ajoute au danger d'exposition.",
      "L'abrasivité détermine ensuite la durée de vie de l'équipement : un appareil non conçu pour du minéral concassé s'use rapidement au niveau des boyaux, des tubes et des surfaces de séparation.",
    ],
    risksHeading: "Ce que le traitement des minéraux doit maîtriser",
    risks: [
    "Silice cristalline respirable présente dans une grande partie du concassé.",
    "Volumes élevés à récupérer, dépassant la capacité d'appareils mobiles seuls.",
    "Abrasivité extrême usant rapidement l'équipement.",
    "Combustibilité réelle pour le charbon et certains minerais sulfurés.",
    "Accumulation sur les structures et convoyeurs de manutention.",
    "Balayage à sec, encore courant et inapproprié là où il y a de la silice.",
    ],
    solutions: [
    "Filtration absolue HEPA 99,99 %, la silice gouvernant la spécification.",
    "Construction tolérante à l'abrasion et pièces d'usure remplaçables.",
    "Grande capacité de collecte ou système centralisé pour le volume.",
    "Équipement antidéflagrant là où le charbon ou des sulfures sont traités.",
    "Élimination du balayage à sec et du soufflage à l'air comprimé.",
    "Fréquences définies pour les structures de convoyage et les points de transfert.",
    ],
    faqs: [
      {
        question: "Quel est le principal danger en traitement des minéraux ?",
        answer:
          "La silice cristalline respirable, présente dans une grande partie de ce qui est concassé. Elle cause la silicose, une maladie pulmonaire irréversible, et la norme OSHA fixe une limite d'exposition de 50 µg/m³ — assez bas pour qu'une poussière visible la dépasse largement.",
      },
      {
        question: "Les poussières minérales sont-elles combustibles ?",
        answer:
          "La plupart ne le sont pas : leur danger est entièrement sanitaire. Le charbon et certains minerais sulfurés sont l'exception, et pour eux le danger de combustion s'ajoute à celui d'exposition plutôt que de le remplacer.",
      },
      {
        question: "Pourquoi l'équipement s'use-t-il si vite ?",
        answer:
          "Parce que le minéral concassé est extrêmement abrasif : il érode boyaux, tubes et surfaces de séparation. Une construction tolérante à l'abrasion avec des pièces d'usure remplaçables est plus économique à l'usage qu'un appareil générique.",
      },
      {
        question: "Le balayage à sec est-il acceptable ?",
        answer:
          "Non, là où il y a de la silice. Il remet en suspension une poussière dont la limite d'exposition est parmi les plus basses, et il reste pourtant courant dans le secteur — c'est le premier changement de pratique à faire.",
      },
    ],
    enPath: "/industries/mining",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Poussière de charbon", href: `${M}/poussiere-de-charbon` },
      { label: "Poussière de soufre", href: `${M}/poussiere-de-soufre` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Nettoyage de silo", href: `${A}/nettoyage-de-silo` },
    ],
  },
  {
    slug: "energie",
    name: "Énergie",
    group: "Production d'énergie",
    metaTitle: "Aspirateurs pour la production d'énergie | Manutention de combustible",
    metaDescription:
      "En production d'énergie, les galeries de convoyeurs et les tours de transfert combinent poussière carbonée, confinement et sources d'inflammation.",
    intro:
      "En production d'énergie, le danger n'est pas dans la chaudière mais dans la manutention du combustible : galeries de convoyeurs, tours de transfert et broyage réunissent poussière carbonée, confinement et entraînements.",
    facts: [
      { label: "Danger dominant", value: "Poussière carbonée combustible — Classe II, Groupe F" },
      { label: "Comportement distinctif", value: "Combustion lente en profondeur, avec rallumage" },
      { label: "Zones critiques", value: "Galeries, tours de transfert, broyage, mise en silo" },
      { label: "Cocombustion", value: "La biomasse ajoute l'auto-échauffement biologique" },
    ],
    overview: [
      "Le registre des explosions en centrale figure parmi les mieux documentés de la sécurité industrielle, et le mécanisme est constant : un événement primaire soulève les accumulations d'une galerie, et l'événement secondaire se propage dans la structure.",
      "La combustion lente exige un traitement distinct : un incendie qui paraît éteint dans de la poussière accumulée peut brûler à l'intérieur. C'est pourquoi la matière récupérée est sortie du bâtiment plutôt qu'entreposée dans un contenant.",
    ],
    risksHeading: "Ce que la production d'énergie doit maîtriser",
    risks: [
    "Poussière carbonée combustible du Groupe F, sujette à la combustion lente.",
    "Galeries de convoyeurs concentrant accumulations, confinement et entraînements.",
    "Tours de transfert produisant la fraction la plus fine.",
    "Broyage produisant la matière la plus fine de l'installation.",
    "Biomasse ajoutant l'auto-échauffement biologique en entreposage.",
    "Contenants pleins laissés dans les galeries.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant adapté au Groupe F.",
    "Appareils pneumatiques adaptés au travail continu en galerie.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Retrait de la matière récupérée du bâtiment à la fin de chaque passage.",
    "Nettoyage équipement arrêté et consigné dans les galeries.",
    "Fréquences définies par surface, incluant le pourtour des entraînements.",
    ],
    faqs: [
      {
        question: "Où se concentre le danger dans une centrale ?",
        answer:
          "Dans la manutention du combustible plutôt que dans la chaudière : galeries de convoyeurs, tours de transfert et broyage réunissent poussière carbonée fine, confinement et entraînements répartis. C'est la géométrie des événements secondaires les mieux documentés du secteur.",
      },
      {
        question: "Pourquoi la matière récupérée doit-elle sortir du bâtiment ?",
        answer:
          "Parce que la poussière carbonée se consume lentement en profondeur : un foyer peut persister dans un contenant sans flamme visible et se rallumer. Un contenant plein concentre en un point le combustible qui était réparti en couche mince.",
      },
      {
        question: "La cocombustion de biomasse change-t-elle quelque chose ?",
        answer:
          "Elle ajoute une seconde poussière combustible, plus légère et plus facilement mise en suspension, et la biomasse peut s'auto-échauffer biologiquement en entreposage. Les deux fractions devraient être évaluées plutôt que de supposer que l'évaluation du charbon suffit.",
      },
      {
        question: "Peut-on nettoyer une galerie en marche ?",
        answer:
          "Non. Le nettoyage se fait équipement arrêté et consigné : nettoyer autour d'un convoyeur en marche expose l'opérateur à des pièces mobiles pour retirer une poussière qui sera encore là au prochain arrêt planifié.",
      },
    ],
    enPath: "/industries/energy",
    related: [
      { label: "Poussière de charbon", href: `${M}/poussiere-de-charbon` },
      { label: "Poussière de coke", href: `${M}/poussiere-de-coke` },
      { label: "Poussière de bois", href: `${M}/poussiere-de-bois` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Nettoyage de silo", href: `${A}/nettoyage-de-silo` },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
    ],
  },
  {
    slug: "petrole-et-gaz",
    name: "Pétrole et gaz",
    group: "Procédés",
    metaTitle: "Aspirateurs pour pétrole et gaz | Zones classifiées et catalyseurs",
    metaDescription:
      "En pétrole et gaz, la classification de zone détermine tout, et les catalyseurs, boues et résidus posent des questions de compatibilité distinctes.",
    intro:
      "En pétrole et gaz, la classification de zone n'est pas une formalité : elle détermine quel équipement peut entrer, et une grande partie de l'installation est classifiée en Classe I pour les gaz et vapeurs.",
    facts: [
      { label: "Classification dominante", value: "Classe I — gaz, vapeurs et liquides inflammables" },
      { label: "Matières typiques", value: "Catalyseurs, boues, résidus, sable de production" },
      { label: "Enjeu additionnel", value: "Compatibilité chimique et statut réglementaire des résidus" },
      { label: "Espaces clos", value: "Réservoirs, colonnes et cuves lors des arrêts" },
    ],
    overview: [
      "Les catalyseurs méritent une mention particulière : certains sont pyrophoriques à l'état usé, d'autres contiennent des métaux régulés, et leur retrait lors d'un arrêt se planifie plutôt qu'il ne s'improvise.",
      "Les arrêts concentrent aussi le travail en espace clos — réservoirs, colonnes, cuves — avec le processus de permis complet et la compatibilité des résidus à établir avant d'engager l'équipement.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Classification de Classe I sur une grande partie de l'installation.",
    "Catalyseurs usés parfois pyrophoriques ou contenant des métaux régulés.",
    "Compatibilité chimique des boues et résidus.",
    "Travail en espace clos concentré pendant les arrêts.",
    "Statut réglementaire des résidus contraignant l'élimination.",
    "Flux mixtes solide-liquide dans les fonds de réservoirs.",
    ],
    solutions: [
    "Équipement correspondant à la classification assignée par votre ingénieur.",
    "Récupération conçue pour les flux mixtes solide-liquide.",
    "Compatibilité établie contre le résidu réel avant l'intervention.",
    "Application intégrale du processus de permis d'espace clos.",
    "Planification du retrait de catalyseur plutôt qu'improvisation.",
    "Destination réglementaire des résidus établie à l'avance.",
    ],
    faqs: [
      {
        question: "Pourquoi la classification est-elle centrale ici ?",
        answer:
          "Parce qu'une grande partie d'une installation pétrolière ou gazière est classifiée en Classe I pour les gaz, vapeurs et liquides inflammables. La classification détermine quel équipement peut entrer, et elle est assignée par l'ingénieur de l'installation plutôt que déduite de l'apparence de la zone.",
      },
      {
        question: "Les catalyseurs usés posent-ils un danger particulier ?",
        answer:
          "Certains sont pyrophoriques à l'état usé, et d'autres contiennent des métaux régulés. Leur retrait lors d'un arrêt se planifie plutôt qu'il ne s'improvise, et la nature du catalyseur détermine l'équipement et l'élimination.",
      },
      {
        question: "Comment gérer les fonds de réservoirs ?",
        answer:
          "Par une récupération conçue pour les flux mixtes solide-liquide, ce qui est la situation normale plutôt que l'exception. La compatibilité s'établit contre le résidu réel, et sa destination réglementaire avant le choix du mode de collecte.",
      },
      {
        question: "Les arrêts changent-ils l'exposition ?",
        answer:
          "Ils la concentrent : le travail en espace clos, l'ouverture d'équipements et le retrait de résidus se déroulent sur une période courte. Le processus de permis s'applique intégralement, et la planification vaut mieux que la réaction.",
      },
    ],
    enPath: "/industries/oil-gas",
    related: [
      { label: "Poussière de soufre", href: `${M}/poussiere-de-soufre` },
      { label: "Nettoyage de réservoirs", href: `${A}/nettoyage-de-reservoirs` },
      { label: "Nettoyage de déversements", href: `${A}/nettoyage-de-deversements` },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
    ],
  },
  {
    slug: "papeteries",
    name: "Papeteries",
    group: "Pâtes et papiers",
    metaTitle: "Aspirateurs pour papeteries | Fibres, poussière et volumes",
    metaDescription:
      "Les papeteries combinent fibre de cellulose combustible, volumes élevés et environnements humides puis secs selon la section.",
    intro:
      "Une papeterie change de nature selon la section : humide en amont, sèche en aval. C'est la partie sèche — sécherie, bobinage, coupe — qui produit la poussière combustible.",
    facts: [
      { label: "Matière", value: "Fibre de cellulose combustible" },
      { label: "Où la poussière apparaît", value: "Sécherie, bobinage, coupe, refendage" },
      { label: "Volume", value: "Élevé, avec accumulation rapide en hauteur" },
      { label: "Facteur aggravant", value: "Chaleur soutenue de la sécherie près de la fibre sèche" },
    ],
    overview: [
      "La sécherie est le point de convergence : elle produit la fibre sèche et fournit une chaleur soutenue à proximité. Les accumulations sur les charpentes, les conduits et au-dessus des machines constituent l'inventaire d'un événement secondaire.",
      "Le volume est l'autre contrainte : une papeterie génère de la fibre en continu, ce qui rend un système centralisé souvent plus approprié que des appareils mobiles seuls.",
    ],
    risksHeading: "Ce qu'une papeterie doit maîtriser",
    risks: [
    "Fibre de cellulose combustible produite en section sèche.",
    "Chaleur soutenue de la sécherie à proximité de fibre sèche.",
    "Accumulation rapide sur charpentes, conduits et au-dessus des machines.",
    "Volume continu exigeant une capacité proportionnée.",
    "Charges statiques dans le transport de fibre sèche.",
    "Accès difficile en hauteur dans les grandes halles.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé.",
    "Fréquences définies incluant explicitement les surfaces hautes.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "La poussière de papeterie est-elle combustible ?",
        answer:
          "La fibre de cellulose l'est, et c'est la section sèche — sécherie, bobinage, coupe, refendage — qui la produit. La section humide en amont ne pose pas le même problème, ce qui explique pourquoi le danger se concentre en aval.",
      },
      {
        question: "Pourquoi la sécherie est-elle le point critique ?",
        answer:
          "Parce qu'elle réunit les deux conditions : elle produit la fibre sèche et fournit une chaleur soutenue à proximité. Les accumulations sur les charpentes et au-dessus des machines constituent l'inventaire qu'un événement primaire disperserait.",
      },
      {
        question: "Un appareil mobile suffit-il ?",
        answer:
          "Rarement, à cause du volume. Une papeterie génère de la fibre en continu, ce qui rend un système centralisé souvent plus approprié, avec des appareils mobiles pour les zones que le réseau n'atteint pas.",
      },
      {
        question: "Où commencer dans une usine existante ?",
        answer:
          "Par les surfaces hautes autour de la sécherie et au-dessus des machines, qui portent l'accumulation qui compte, puis par les conduits où la fibre voyage hors de vue.",
      },
    ],
    enPath: "/industries/paper-mills",
    related: [
      { label: "Poussière de papier", href: `${M}/poussiere-de-papier` },
      { label: "Poussière de bois", href: `${M}/poussiere-de-bois` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Nettoyage de dépoussiéreur", href: `${A}/nettoyage-de-depoussiereur` },
    ],
  },
  {
    slug: "papier-et-emballage",
    name: "Papier et emballage",
    group: "Pâtes et papiers",
    metaTitle: "Aspirateurs pour la conversion et l'emballage | Fibre et amidon",
    metaDescription:
      "La conversion produit de la poussière de fibre et, avec les adhésifs à base d'amidon, une seconde fraction plus fine encore.",
    intro:
      "La conversion de carton ondulé produit de la poussière à chaque coupe, rainage, refendage et empilage — et lorsque des adhésifs à base d'amidon sont utilisés, une seconde fraction combustible plus fine que la fibre s'y ajoute.",
    facts: [
      { label: "Matière 1", value: "Fibre de cellulose issue de la coupe et du refendage" },
      { label: "Matière 2", value: "Fines d'amidon séché provenant des adhésifs" },
      { label: "Vitesse", value: "Lignes rapides produisant en continu" },
      { label: "Où ça compte", value: "Acier en hauteur, dessus de conduits, intérieur des carters" },
    ],
    overview: [
      "L'amidon mérite d'être nommé séparément : il est suffisamment fin pour servir de matière de référence dans les essais d'explosibilité, de sorte qu'une usine de conversion utilisant des adhésifs à base d'amidon devrait faire évaluer les deux fractions plutôt que la fibre seule.",
      "Les accumulations qui comptent sont au-dessus de la hauteur des yeux et à l'intérieur des carters de machines — les endroits que personne n'inspecte depuis le plancher.",
    ],
    risksHeading: "Ce que la conversion doit maîtriser",
    risks: [
    "Fibre de cellulose combustible produite à chaque opération mécanique.",
    "Fines d'amidon séché plus fines encore que la fibre.",
    "Accumulation en hauteur et dans les carters de machines.",
    "Lignes rapides produisant en continu.",
    "Charges statiques dans le travail de matière sèche.",
    "Pression de production limitant les fenêtres de nettoyage.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé.",
    "Fréquences définies incluant explicitement les surfaces hautes.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "La poussière de conversion est-elle combustible ?",
        answer:
          "Oui, à deux titres. La fibre de cellulose est combustible, et les adhésifs à base d'amidon ajoutent des fines d'amidon séché — une matière suffisamment fine pour servir de référence dans les essais d'explosibilité en laboratoire.",
      },
      {
        question: "Faut-il évaluer les deux fractions ?",
        answer:
          "Oui. Une usine de conversion utilisant des adhésifs à base d'amidon devrait faire évaluer la fibre et l'amidon plutôt que la fibre seule, puisque leur comportement diffère et que l'amidon est la plus fine des deux.",
      },
      {
        question: "Où s'accumule la poussière ?",
        answer:
          "Au-dessus de la hauteur des yeux — acier, rebords, dessus de conduits — et à l'intérieur des carters de machines. Ce sont les endroits que personne n'inspecte depuis le plancher, et ceux qui alimentent un événement secondaire.",
      },
      {
        question: "Comment nettoyer sans arrêter la production ?",
        answer:
          "Par un nettoyage à fréquence définie planifié entre les séries plutôt qu'un arrêt prolongé, avec des contenants à vidange rapide pour que le passage tienne dans la fenêtre disponible.",
      },
    ],
    enPath: "/industries/paper-packaging",
    related: [
      { label: "Poussière de papier", href: `${M}/poussiere-de-papier` },
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
      { label: "Entretien d'entrepôt", href: `${A}/entretien-d-entrepot` },
    ],
  },
  {
    slug: "plastiques-et-caoutchouc",
    name: "Plastiques et caoutchouc",
    group: "Transformation",
    metaTitle: "Aspirateurs pour plastiques et caoutchouc | Fumée toxique et statique",
    metaDescription:
      "Les poussières de polymères et de caoutchouc sont combustibles et produisent une fumée dense et toxique en brûlant.",
    intro:
      "Les poussières de polymères et de caoutchouc partagent deux caractéristiques : elles sont combustibles, et elles produisent une fumée dense et toxique en brûlant — ce qui fait d'un incendie de poussière un problème d'atmosphère autant que de feu.",
    facts: [
      { label: "Matières", value: "Poussières de polymères et de caoutchouc — Groupe G" },
      { label: "Danger additionnel", value: "Fumée dense et toxique en cas de combustion" },
      { label: "Statique", value: "Charges importantes dans les polymères secs" },
      { label: "Caoutchouc", value: "Rétention de chaleur dans la matière récupérée après meulage" },
    ],
    overview: [
      "La variété des polymères impose de caractériser sa propre matière : la granulométrie, les charges minérales et les additifs ignifuges changent le comportement, et une résine ne se comporte pas comme une autre.",
      "Le caoutchouc ajoute la rétention de chaleur : de la matière laissée dans un contenant après une opération de meulage conserve la chaleur du procédé, ce qui rend le retrait en fin de quart une mesure utile plutôt qu'une formalité.",
    ],
    risksHeading: "Ce que le secteur doit maîtriser",
    risks: [
    "Poussières combustibles de polymères et de caoutchouc.",
    "Fumée dense et toxique en cas de combustion.",
    "Charges statiques importantes dans les polymères secs.",
    "Rétention de chaleur dans le caoutchouc récupéré après meulage.",
    "Comportement variable selon la résine, les charges et les additifs.",
    "Volume élevé en granulation et en recyclage.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Retrait de la matière récupérée en fin de quart, particulièrement pour le caoutchouc.",
    "Caractérisation de sa propre résine plutôt que présomption.",
    "Grande capacité pour la granulation et le recyclage.",
    "Élimination du soufflage à l'air comprimé.",
    ],
    faqs: [
      {
        question: "Les poussières de plastique sont-elles combustibles ?",
        answer:
          "La plupart le sont : ce sont des poussières organiques relevant du Groupe G comme poussières non conductrices. Elles produisent aussi une fumée dense et toxique en brûlant, de sorte qu'un incendie crée un problème d'atmosphère en plus du feu.",
      },
      {
        question: "Tous les polymères se comportent-ils pareillement ?",
        answer:
          "Non, et c'est pourquoi il faut caractériser sa propre matière. La granulométrie, les charges minérales et les additifs ignifuges changent le comportement. L'essai porte sur la poussière réellement produite par votre procédé.",
      },
      {
        question: "Pourquoi sortir la poussière de caoutchouc en fin de quart ?",
        answer:
          "Parce qu'elle retient la chaleur du procédé après meulage. Un contenant plein laissé dans l'atelier concentre en un point une matière chaude et combustible — le retrait est un contrôle simple.",
      },
      {
        question: "La statique est-elle un problème particulier ici ?",
        answer:
          "Oui : les polymères secs accumulent des charges facilement dans les boyaux et le transport pneumatique. Un circuit conducteur, mis à la terre et équipotentiel n'est pas un raffinement dans ce contexte.",
      },
    ],
    enPath: "/industries/plastics-rubber",
    related: [
      { label: "Poussière de plastique", href: `${M}/poussiere-de-plastique` },
      { label: "Poussière de caoutchouc", href: `${M}/poussiere-de-caoutchouc` },
      { label: "Poussière de noir de carbone", href: `${M}/poussiere-de-noir-de-carbone` },
      { label: "Poussière de meulage", href: `${A}/poussiere-de-meulage` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
    ],
  },
  {
    slug: "imprimerie",
    name: "Imprimerie",
    group: "Transformation",
    metaTitle: "Aspirateurs pour l'imprimerie | Poussière de papier, toner et encres",
    metaDescription:
      "L'imprimerie combine poussière de papier combustible, toner fin et résidus d'encre. Récupération et propreté de production.",
    intro:
      "En imprimerie, la poussière est à la fois un danger et un défaut de production : la même particule qui alimente une accumulation combustible gâche une impression.",
    facts: [
      { label: "Matières", value: "Poussière de papier, toner, résidus d'encre et de vernis" },
      { label: "Toner", value: "Poudre fine de polymère et pigment, combustible" },
      { label: "Double enjeu", value: "Sécurité et qualité d'impression" },
      { label: "Où ça compte", value: "Massicots, plieuses, sécheurs, hauteurs" },
    ],
    overview: [
      "La poussière de papier issue de la coupe et du massicotage est combustible, et le toner — poudre fine de polymère et de pigment — l'est aussi tout en étant facilement mis en suspension. Les sécheurs UV et thermiques ajoutent une chaleur soutenue.",
      "L'enjeu de qualité change la dynamique : dans d'autres secteurs le nettoyage se justifie par la sécurité seule, alors qu'ici il se justifie aussi par le taux de rebut. Cela rend un programme plus facile à faire adopter.",
    ],
    risksHeading: "Ce que l'imprimerie doit maîtriser",
    risks: [
    "Poussière de papier combustible issue de la coupe et du massicotage.",
    "Toner combustible et facilement mis en suspension.",
    "Chaleur soutenue des sécheurs UV et thermiques.",
    "Accumulation en hauteur et dans les carters de machines.",
    "Poussière comme défaut de production autant que danger.",
    "Résidus d'encre et de vernis avec leurs propres compatibilités.",
    ],
    solutions: [
    "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
    "Filtration absolue HEPA 99,99 % pour retenir la fraction respirable.",
    "Élimination du soufflage à l'air comprimé.",
    "Fréquences définies incluant explicitement les surfaces hautes.",
    "Retrait de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "La poussière d'imprimerie est-elle dangereuse ?",
        answer:
          "La poussière de papier issue de la coupe et du massicotage est combustible, et le toner — une poudre fine de polymère et de pigment — l'est aussi tout en étant facilement mis en suspension. Les sécheurs ajoutent une chaleur soutenue à proximité.",
      },
      {
        question: "Le toner pose-t-il un problème particulier ?",
        answer:
          "Il est fin, combustible, et se met en suspension facilement, ce qui en fait un problème récurrent en impression et en entretien de copieurs. Une filtration retenue est nécessaire pour éviter de le renvoyer dans l'atelier.",
      },
      {
        question: "Pourquoi le nettoyage est-il plus facile à justifier ici ?",
        answer:
          "Parce que la poussière est aussi un défaut de production : la même particule qui alimente une accumulation combustible gâche une impression. Le programme se justifie par le taux de rebut en plus de la sécurité.",
      },
      {
        question: "Où commencer ?",
        answer:
          "Par les massicots et les plieuses, qui produisent la fraction fine, puis par les surfaces hautes et l'intérieur des carters, où l'accumulation s'installe hors de vue.",
      },
    ],
    enPath: "/industries/printing",
    related: [
      { label: "Poussière de papier", href: `${M}/poussiere-de-papier` },
      { label: "Poussière de plastique", href: `${M}/poussiere-de-plastique` },
      { label: "Poussière de noir de carbone", href: `${M}/poussiere-de-noir-de-carbone` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
    ],
  },

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
