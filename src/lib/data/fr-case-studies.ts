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
    slug: "poussiere-de-lactose-comprimes-pharmaceutiques",
    name: "Poussière de lactose en production de comprimés",
    group: "Sciences de la vie",
    metaTitle: "Étude de cas : poussière de lactose en production pharmaceutique",
    metaDescription:
      "Scénario représentatif : maîtriser une poudre à la fois soumise à une limite d'exposition et combustible dans une ligne de comprimés.",
    intro:
      "Une ligne de production de comprimés type manipule des poudres qui posent deux questions à la fois, et la seconde est régulièrement négligée.",
    facts: [
      { label: "Type d'installation", value: "Ligne de compression de comprimés" },
      { label: "Matières", value: "Lactose, excipients, principes actifs" },
      { label: "Régime 1", value: "Limite d'exposition professionnelle du composé" },
      { label: "Régime 2", value: "Le lactose et les excipients sont aussi combustibles" },
    ],
    overview: [
      "La limite d'exposition du composé gouverne la spécification : elle fixe le niveau de confinement et de filtration, et la procédure de vidange en découle. Les composés à forte activité imposent bien plus qu'une poussière ordinaire.",
      "Le point négligé est que le lactose et la plupart des excipients sont des poussières organiques combustibles. Lorsque la poudre est les deux, le confinement et la protection contre les explosions se spécifient ensemble plutôt que l'un à la place de l'autre — et le nettoyage doit en plus être validé et consigné.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Limite d'exposition gouvernant le niveau de confinement.",
      "Lactose et excipients combustibles, souvent oubliés.",
      "Changement de contenant comme moment d'exposition le plus élevé.",
      "Nettoyage devant être validé et consigné.",
      "Contamination croisée entre produits.",
      "Constructions devant supporter le nettoyage et la validation.",
    ],
    solutions: [
      "Filtration absolue HEPA 99,99 % ou ULPA selon la limite d'exposition.",
      "Collecte scellée avec procédure définie pour le changement de contenant.",
      "Équipement conducteur et mis à la terre, la poudre étant aussi combustible.",
      "Construction en acier inoxydable lavable et validable.",
      "Appareils dédiés par zone et par produit.",
      "Consignation des nettoyages, servant sécurité et validation.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Le lactose est-il combustible ?",
        answer:
          "Oui, comme la plupart des excipients — amidons et charges organiques comprises. C'est régulièrement négligé parce que l'attention porte sur le confinement. Lorsque la poudre est à la fois toxique et combustible, les deux exigences se spécifient ensemble.",
      },
      {
        question: "Qu'est-ce qui détermine la filtration ?",
        answer:
          "La limite d'exposition professionnelle du composé manipulé. Elle fixe le niveau requis, et la procédure de vidange en découle. C'est une conséquence de l'évaluation d'exposition plutôt qu'une préférence d'équipement.",
      },
      {
        question: "Quel est le moment le plus exposant ?",
        answer:
          "Le changement de contenant plutôt que la récupération. C'est le moment où la matière captée est ouverte et déplacée, souvent en fin de série. Des sacs scellés et une procédure définie valent davantage qu'une aspiration supplémentaire.",
      },
    ],
    enPath: "/case-studies/lactose-dust-pharmaceutical-tablet",
    related: [
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Pharmaceutique", href: `/fr/industries/pharmaceutique` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
    ],
  }),
  study({
    slug: "poussiere-de-soufre-usine-chimique",
    name: "Poussière de soufre en usine chimique",
    group: "Procédés",
    metaTitle: "Étude de cas : poussière de soufre en usine chimique",
    metaDescription:
      "Scénario représentatif : maîtriser une poussière qui s'enflamme à faible énergie et produit un gaz toxique en brûlant.",
    intro:
      "Une usine de produits chimiques spécialisés type manipulant du soufre affronte une combinaison inhabituelle : une inflammation facile et un produit de combustion toxique.",
    facts: [
      { label: "Type d'installation", value: "Usine de produits chimiques spécialisés" },
      { label: "Matière", value: "Soufre élémentaire en poudre" },
      { label: "Danger 1", value: "Énergie d'inflammation faible, y compris décharge statique" },
      { label: "Danger 2", value: "Combustion produisant du dioxyde de soufre toxique" },
    ],
    overview: [
      "Le soufre s'enflamme à partir de sources d'énergie relativement faibles — une décharge statique suffit — ce qui fait du circuit conducteur et mis à la terre la mesure qui empêche l'appareil de nettoyage de devenir la source d'inflammation.",
      "La combustion produit du dioxyde de soufre, un gaz irritant toxique, de sorte qu'un incendie de soufre crée un problème d'atmosphère au-delà du feu lui-même. C'est pourquoi les zones de manipulation sont tenues propres plutôt que simplement rangées.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Inflammation à faible énergie, y compris par décharge statique.",
      "Dioxyde de soufre rendant l'atmosphère dangereuse après un incendie.",
      "Accumulation statique dans les boyaux et goulottes.",
      "Finesse permettant au soufre de se déposer en hauteur.",
      "Confinement au broyage et au convoyage.",
      "Corrosivité en présence d'humidité.",
    ],
    solutions: [
      "Récupération conductrice, mise à la terre et équipotentielle de bout en bout.",
      "Accessoires antistatiques plutôt que boyau de plastique ordinaire.",
      "Filtration absolue HEPA 99,99 % pour la fraction fine.",
      "Appareils pneumatiques là où l'air comprimé et la classification le favorisent.",
      "Élimination du soufflage à l'air comprimé.",
      "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi le soufre est-il particulier ?",
        answer:
          "Parce qu'il s'enflamme à partir de sources d'énergie relativement faibles — une décharge statique suffit — et que sa combustion produit du dioxyde de soufre, un gaz irritant toxique. Cette combinaison d'inflammation facile et de produit de combustion toxique impose un équipement conducteur et mis à la terre.",
      },
      {
        question: "Un aspirateur ordinaire convient-il ?",
        answer:
          "Non. Dans une zone de soufre, un circuit conducteur, mis à la terre et équipotentiel est la mesure qui empêche l'appareil de nettoyage de devenir lui-même la source d'inflammation.",
      },
      {
        question: "Que se passe-t-il après un incendie de soufre ?",
        answer:
          "L'atmosphère devient dangereuse en raison du dioxyde de soufre produit, ce qui ajoute un problème respiratoire au problème d'incendie. C'est une raison de plus de maintenir les accumulations basses plutôt que de compter sur l'intervention.",
      },
    ],
    enPath: "/case-studies/sulfur-dust-specialty-chemical-plant",
    related: [
      { label: "Poussière de soufre", href: `${M}/poussiere-de-soufre` },
      { label: "Chimie", href: `/fr/industries/chimie` },
      { label: "Mélange et malaxage", href: `${A}/melange-et-malaxage` },
    ],
  }),
  study({
    slug: "whiskers-de-zinc-centre-de-donnees",
    name: "Whiskers de zinc en centre de données",
    group: "Infrastructure",
    metaTitle: "Étude de cas : whiskers de zinc en centre de données",
    metaDescription:
      "Scénario représentatif : un mode de défaillance où la poussière ne brûle pas mais provoque des pannes difficiles à diagnostiquer.",
    intro:
      "Un centre de données type illustre un cas où la poussière n'est pas un danger d'incendie mais un danger de disponibilité.",
    facts: [
      { label: "Type d'installation", value: "Centre de données avec faux planchers" },
      { label: "Mécanisme", value: "Whiskers de zinc issus de dalles anciennes" },
      { label: "Danger dominant", value: "Panne d'équipement, non incendie" },
      { label: "Contrainte absolue", value: "Aucune méthode humide près d'équipement sous tension" },
    ],
    overview: [
      "Les whiskers de zinc sont de fines excroissances cristallines qui se forment sur les revêtements de zinc électrodéposé de certaines dalles de faux plancher anciennes. Elles se détachent, circulent avec l'air de refroidissement, et provoquent des courts-circuits — un mode de défaillance documenté dans les installations plus anciennes.",
      "Le nettoyage sous faux plancher est donc une opération d'infrastructure planifiée. La contrainte principale est la filtration : un appareil qui rejette des particules dans le flux d'air de refroidissement distribue le problème plutôt que de le retirer.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Poussière conductrice pontant des connexions et provoquant des pannes.",
      "Whiskers de zinc issus de dalles anciennes à revêtement de zinc.",
      "Circulation par l'air de refroidissement, distribuant les particules.",
      "Filtration insuffisante remettant des particules dans le flux d'air.",
      "Méthodes humides exclues près d'équipement sous tension.",
      "Diagnostic difficile de pannes causées par la poussière.",
    ],
    solutions: [
      "Filtration absolue HEPA 99,99 %, pour ne rien remettre dans le flux d'air.",
      "Nettoyage sous faux plancher planifié comme opération d'infrastructure.",
      "Aucune méthode humide près d'équipement sous tension.",
      "Attention particulière aux dalles anciennes à revêtement de zinc.",
      "Nettoyage des entrées d'air et des baies à intervalle défini.",
      "Collecte contenue, sans redispersion à la vidange.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Qu'est-ce qu'un whisker de zinc ?",
        answer:
          "Une fine excroissance cristalline qui se forme sur les revêtements de zinc électrodéposé de certaines dalles de faux plancher anciennes. Elles se détachent, circulent avec l'air de refroidissement et provoquent des courts-circuits — un mode de défaillance documenté.",
      },
      {
        question: "La poussière est-elle un danger d'incendie ici ?",
        answer:
          "Rarement le danger dominant. Le problème est la panne : une accumulation conductrice peut ponter des connexions et provoquer des défaillances difficiles à diagnostiquer. C'est un enjeu de disponibilité plutôt que de sécurité incendie.",
      },
      {
        question: "Peut-on utiliser une méthode humide ?",
        answer:
          "Pas près d'équipement sous tension. C'est une contrainte absolue dans ce contexte, et elle rend la récupération à sec avec filtration absolue la seule approche appropriée pour la plupart des zones.",
      },
    ],
    enPath: "/case-studies/zinc-whisker-data-center",
    related: [
      { label: "Poussière de zinc", href: `${M}/poussiere-de-zinc` },
      { label: "Centres de données", href: `/fr/industries/centres-de-donnees` },
      { label: "Nettoyage de salle blanche", href: `${A}/nettoyage-de-salle-blanche` },
    ],
  }),
  study({
    slug: "poussiere-de-silicium-usine-de-semi-conducteurs",
    name: "Poussière de silicium en usine de semi-conducteurs",
    group: "Fabrication de précision",
    metaTitle: "Étude de cas : poussière de silicium en usine de semi-conducteurs",
    metaDescription:
      "Scénario représentatif : une installation où la contamination particulaire est un défaut de production autant qu'un danger.",
    intro:
      "Une usine de semi-conducteurs type illustre un contexte où la poussière est simultanément un enjeu de sécurité et un défaut de production.",
    facts: [
      { label: "Type d'installation", value: "Usine de semi-conducteurs et conditionnement avancé" },
      { label: "Matières", value: "Poussière de silicium, fines de découpe, poudres de procédé" },
      { label: "Régime 1", value: "Contamination particulaire comme défaut de production" },
      { label: "Régime 2", value: "Poudres de procédé parfois combustibles ou régulées" },
    ],
    overview: [
      "La contamination particulaire est un défaut : une particule au mauvais endroit détruit un composant. L'appareil est donc jugé sur ce qu'il rejette autant que sur ce qu'il capte, et la filtration absolue est la fonction de l'appareil plutôt qu'une option.",
      "S'y ajoutent l'électricité statique — qui peut endommager des composants sensibles autant qu'enflammer une poussière — et le fait que certaines poudres de procédé sont combustibles ou régulées. Les deux exigences, ESD et antistatique, doivent être nommées séparément lorsque les deux s'appliquent.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Contamination particulaire comme défaut de production.",
      "Échappement de l'appareil comptant autant que sa captation.",
      "Décharge électrostatique endommageant des composants sensibles.",
      "Poudres de procédé parfois combustibles ou régulées.",
      "Équipement partagé important de la contamination.",
      "Confusion fréquente entre exigences ESD et antistatique.",
    ],
    solutions: [
      "Filtration absolue HEPA 99,99 % ou ULPA selon la classification de la salle.",
      "Construction dissipatrice ESD là où des composants sensibles sont manipulés.",
      "Équipement dédié et étiqueté par zone.",
      "Construction lisse en acier inoxydable, essuyable.",
      "Spécification explicite des deux exigences lorsque les deux s'appliquent.",
      "Collecte scellée pour une vidange contenue.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi la filtration absolue est-elle la fonction de l'appareil ici ?",
        answer:
          "Parce que la contamination particulaire est un défaut de production : une particule au mauvais endroit détruit un composant. Un appareil qui rejette de la poussière fine a aggravé le problème qu'il devait corriger.",
      },
      {
        question: "ESD et antistatique, est-ce la même chose ?",
        answer:
          "Non, même si la physique se recoupe. L'ESD protège des composants sensibles d'une décharge ; l'antistatique empêche une décharge d'enflammer une poussière combustible. Une installation qui a besoin des deux devrait les nommer séparément.",
      },
      {
        question: "Un appareil peut-il circuler entre les zones ?",
        answer:
          "Non. Un appareil qui nettoie aussi une zone générale rapporte de la contamination dans l'environnement contrôlé, et ici la contamination est un défaut plutôt qu'un désagrément.",
      },
    ],
    enPath: "/case-studies/silicon-dust-semiconductor-fab",
    related: [
      { label: "Poussière de silice", href: `${M}/poussiere-de-silice` },
      { label: "Électronique", href: `/fr/industries/electronique` },
      { label: "Salles blanches", href: `/fr/industries/salles-blanches` },
    ],
  }),
  study({
    slug: "poussiere-de-papier-conversion-emballage",
    name: "Poussière de papier en conversion d'emballage",
    group: "Pâtes et papiers",
    metaTitle: "Étude de cas : poussière de papier en conversion d'emballage",
    metaDescription:
      "Scénario représentatif : maîtriser fibre de cellulose et fines d'amidon sur des lignes de conversion rapides.",
    intro:
      "Une usine de conversion de carton ondulé type produit deux fractions combustibles à la fois, et la seconde est plus fine que la première.",
    facts: [
      { label: "Type d'installation", value: "Conversion de carton ondulé et emballage" },
      { label: "Matière 1", value: "Fibre de cellulose issue de la coupe et du refendage" },
      { label: "Matière 2", value: "Fines d'amidon séché provenant des adhésifs" },
      { label: "Où ça compte", value: "Acier en hauteur, conduits, intérieur des carters" },
    ],
    overview: [
      "La coupe, le rainage, le refendage et l'empilage produisent de la fibre à chaque passage. L'amidon des adhésifs ajoute une fraction plus fine encore — suffisamment fine pour servir de matière de référence dans les essais d'explosibilité.",
      "L'accumulation qui compte se trouve au-dessus de la hauteur des yeux et à l'intérieur des carters de machines. La pression de production limite les fenêtres de nettoyage, ce qui rend une vidange rapide et un intervalle réaliste plus utiles qu'un plan ambitieux jamais appliqué.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Deux fractions combustibles, l'amidon étant la plus fine.",
      "Accumulation en hauteur et dans les carters, hors de vue.",
      "Lignes rapides produisant en continu.",
      "Fenêtres de nettoyage limitées par la production.",
      "Charges statiques dans le travail de matière sèche.",
      "Évaluation devant couvrir les deux fractions.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % pour la fraction respirable.",
      "Rallonges pour l'acier en hauteur et le dessus des conduits.",
      "Contenants à vidange rapide, pour tenir dans la fenêtre disponible.",
      "Fréquences réalistes plutôt qu'ambitieuses et inappliquées.",
      "Élimination du soufflage à l'air comprimé.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi deux fractions ?",
        answer:
          "La fibre de cellulose issue de la coupe et du refendage, et les fines d'amidon séché provenant des adhésifs. L'amidon est la plus fine des deux — suffisamment fine pour servir de matière de référence dans les essais d'explosibilité — et les deux devraient être évaluées.",
      },
      {
        question: "Comment nettoyer sans arrêter la production ?",
        answer:
          "Par un intervalle réaliste planifié entre les séries plutôt qu'un arrêt prolongé, avec des contenants à vidange rapide. Un plan ambitieux jamais appliqué protège moins qu'un intervalle modeste effectivement respecté.",
      },
      {
        question: "Où faut-il regarder en premier ?",
        answer:
          "Au-dessus de la hauteur des yeux — acier, rebords, dessus de conduits — et à l'intérieur des carters de machines. Ce sont les endroits que personne n'inspecte depuis le plancher.",
      },
    ],
    enPath: "/case-studies/paper-dust-packaging-converting",
    related: [
      { label: "Poussière de papier", href: `${M}/poussiere-de-papier` },
      { label: "Poussière d'amidon", href: `${M}/poussiere-d-amidon` },
      { label: "Papier et emballage", href: `/fr/industries/papier-et-emballage` },
    ],
  }),
  study({
    slug: "poussiere-de-charbon-centrale",
    name: "Poussière de charbon en centrale thermique",
    group: "Production d'énergie",
    metaTitle: "Étude de cas : poussière de charbon en centrale thermique",
    metaDescription:
      "Scénario représentatif : maîtriser une poussière carbonée qui se consume lentement dans les galeries de manutention de combustible.",
    intro:
      "Une centrale thermique type concentre son danger dans la manutention du combustible, avec une poussière dont la caractéristique est de brûler sans se montrer.",
    facts: [
      { label: "Type d'installation", value: "Centrale thermique au charbon, avec cocombustion possible" },
      { label: "Matière", value: "Poussière de charbon et de coke — Groupe F" },
      { label: "Comportement", value: "Combustion lente en profondeur, avec rallumage" },
      { label: "Zones critiques", value: "Galeries, tours de transfert, broyage" },
    ],
    overview: [
      "Les galeries de convoyeurs réunissent l'inventaire de combustible sur toute leur longueur et des entraînements répartis partout. Les tours de transfert produisent la fraction la plus fine et la confinent. C'est la géométrie des événements secondaires les mieux documentés du secteur.",
      "La combustion lente change la gestion de la matière récupérée : un contenant plein concentre le combustible et peut abriter un foyer. Le retrait du bâtiment à la fin de chaque passage est le contrôle simple, et le nettoyage se fait équipement arrêté et consigné.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Galeries concentrant accumulations, confinement et entraînements.",
      "Combustion lente pouvant persister sans flamme visible.",
      "Contenants pleins laissés dans les galeries.",
      "Cocombustion de biomasse ajoutant l'auto-échauffement.",
      "Pneumoconiose par inhalation chronique.",
      "Nettoyage en marche comme risque distinct.",
    ],
    solutions: [
      "Récupération antidéflagrante adaptée au Groupe F.",
      "Appareils pneumatiques adaptés au travail continu en galerie.",
      "Filtration absolue HEPA 99,99 % pour la fraction respirable.",
      "Retrait de la matière récupérée à la fin de chaque passage.",
      "Nettoyage équipement arrêté et consigné.",
      "Fréquences définies par surface, incluant le pourtour des entraînements.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi le charbon est-il particulier ?",
        answer:
          "Il se consume lentement en profondeur : un foyer peut persister dans une accumulation sans flamme visible puis se rallumer. C'est pourquoi une accumulation tiède mérite un suivi, et pourquoi la matière récupérée sort du bâtiment.",
      },
      {
        question: "Peut-on nettoyer une galerie en marche ?",
        answer:
          "Non. Le nettoyage se fait équipement arrêté et consigné : nettoyer autour d'un convoyeur en marche expose l'opérateur à des pièces mobiles pour retirer une poussière qui sera encore là au prochain arrêt planifié.",
      },
      {
        question: "La cocombustion de biomasse change-t-elle le tableau ?",
        answer:
          "Elle ajoute une seconde poussière combustible, plus légère, et la biomasse peut s'auto-échauffer biologiquement en entreposage. Les deux fractions devraient être évaluées.",
      },
    ],
    enPath: "/case-studies/coal-dust-power-generation",
    related: [
      { label: "Poussière de charbon", href: `${M}/poussiere-de-charbon` },
      { label: "Énergie", href: `/fr/industries/energie` },
      { label: "Entretien des convoyeurs", href: `${A}/entretien-des-convoyeurs` },
    ],
  }),
  study({
    slug: "poussiere-de-beryllium-laboratoire-de-recherche",
    name: "Poussière de béryllium en laboratoire de recherche",
    group: "Institutions",
    metaTitle: "Étude de cas : poussière de béryllium en laboratoire de recherche",
    metaDescription:
      "Scénario représentatif : contenir une matière régulée dont la présence n'est souvent pas signalée par la description de la pièce.",
    intro:
      "Un laboratoire de recherche type usine des matières qu'une usine de production voit rarement, et le béryllium en est l'exemple le plus exigeant.",
    facts: [
      { label: "Type d'installation", value: "Laboratoire de recherche avec atelier d'usinage" },
      { label: "Matière", value: "Béryllium et alliages cuivre-béryllium" },
      { label: "Danger", value: "Sensibilisation et bérylliose chronique irréversible" },
      { label: "Norme", value: "OSHA béryllium, 29 CFR 1910.1024" },
    ],
    overview: [
      "Le béryllium provoque une sensibilisation à médiation immunitaire chez les personnes susceptibles, qui peut évoluer vers la bérylliose chronique — irréversible. Il est aussi classé cancérogène pour l'humain, et OSHA le régit par une norme substance distincte.",
      "La difficulté propre à ce contexte est l'identification : le cuivre-béryllium ne représente souvent que quelques pour cent d'un alliage, et rien dans la description d'une pièce ne l'indique. L'exposition survient donc pendant un travail que personne n'avait signalé comme du travail sur béryllium.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Sensibilisation à médiation immunitaire : les faibles expositions comptent.",
      "Alliages cuivre-béryllium rarement identifiés dans les descriptions.",
      "Variété des matières dans un même atelier de recherche.",
      "Contamination persistante des surfaces, outils et vêtements.",
      "Changement de contenant comme moment d'exposition élevé.",
      "Balayage à sec exclu là où la norme s'applique.",
    ],
    solutions: [
      "Aspirateurs à filtration absolue HEPA 99,99 % dédiés et étiquetés.",
      "Élimination complète du balayage à sec et du soufflage à l'air comprimé.",
      "Captation à la source au meulage, à l'ébavurage et au sciage.",
      "Changements de filtre et de contenant comme procédures contrôlées.",
      "Vérification de la composition des alliages avant usinage.",
      "Consignation de chaque nettoyage dans le dossier de conformité.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Comment un atelier saurait-il que du béryllium est présent ?",
        answer:
          "Souvent il ne le saurait pas sans demander. Le cuivre-béryllium ne représente souvent que quelques pour cent d'un alliage et apparaît dans des ressorts, connecteurs, outils antiétincelles et moules. Vérifier la composition auprès du fournisseur avant d'usiner un stock inconnu est le contrôle pratique.",
      },
      {
        question: "Le même aspirateur peut-il servir ailleurs ?",
        answer:
          "Non. Un appareil qui récupère une matière réglementée puis nettoie ailleurs déplace un problème de conformité vers une autre partie du bâtiment. Des appareils dédiés et étiquetés demeurant dans la zone réglementée sont la pratique attendue.",
      },
      {
        question: "Le béryllium est-il aussi un danger d'incendie ?",
        answer:
          "Le béryllium finement divisé est évalué comme poussière métallique combustible et devrait être testé. Mais la raison de son contrôle aussi strict est toxicologique : ce sont les limites d'exposition qui déterminent comment l'accumulation doit être retirée.",
      },
    ],
    enPath: "/case-studies/beryllium-dust-national-laboratory",
    related: [
      { label: "Poussière de béryllium", href: `${M}/poussiere-de-beryllium` },
      { label: "Éducation et recherche", href: `/fr/industries/education-et-recherche` },
      { label: "Ébavurage", href: `${A}/ebavurage` },
    ],
  }),

  study({
    slug: "poudre-de-titane-fabrication-additive",
    name: "Poudre de titane en fabrication additive",
    group: "Fabrication avancée",
    metaTitle: "Étude de cas : poudre de titane en fabrication additive",
    metaDescription:
      "Scénario représentatif : récupérer une poudre de titane réactive destinée au réemploi dans un atelier de fabrication additive.",
    intro:
      "Un atelier de fabrication additive type doit récupérer une poudre qui est à la fois un métal combustible et un consommable ayant une valeur réelle.",
    facts: [
      { label: "Type d'installation", value: "Atelier de fabrication additive métal" },
      { label: "Matière", value: "Poudre de titane à granulométrie contrôlée" },
      { label: "Danger", value: "Métal combustible réactif — Classe D" },
      { label: "Contrainte additionnelle", value: "La poudre est destinée au réemploi" },
    ],
    overview: [
      "La granulométrie contrôlée qui rend la poudre imprimable la situe précisément dans la fraction la plus réactive. Le titane s'enflamme facilement sous cette forme, brûle à haute température, et l'eau comme le CO₂ sont inappropriés sur un feu déclaré.",
      "Le réemploi crée une contrainte qui sert la sécurité : la poudre non fusionnée est récupérée, tamisée et réintroduite, de sorte que la contamination croisée entre alliages détruit sa valeur. La ségrégation stricte est donc à la fois une mesure de sécurité et une mesure de coût — ce qui la rend plus facile à faire respecter.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Granulométrie contrôlée située dans la fraction la plus réactive.",
      "Eau et CO₂ inappropriés sur un feu de titane déclaré.",
      "Accumulation à sec dans les contenants comme mode de défaillance.",
      "Contamination croisée détruisant la valeur de la poudre.",
      "Conductivité de la poudre métallique.",
      "Récupération pouvant elle-même fournir l'énergie d'inflammation.",
    ],
    solutions: [
      "Équipement conducteur, mis à la terre et exempt de sources d'inflammation.",
      "Séparation par immersion pour garder la poudre récupérée humide.",
      "Appareils dédiés par matière.",
      "Ségrégation stricte par alliage.",
      "Dispositions de Classe D et personnel formé.",
      "Retrait rapide de la matière récupérée du bâtiment.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi la poudre additive est-elle si réactive ?",
        answer:
          "Parce que la granulométrie contrôlée qui la rend imprimable la place dans la fraction la plus réactive. Le titane sous cette forme s'enflamme facilement et brûle à haute température, et l'eau comme le CO₂ sont inappropriés sur un feu déclaré.",
      },
      {
        question: "La ségrégation est-elle une question de sécurité ou de coût ?",
        answer:
          "Les deux, et c'est ce qui la rend praticable. Mélanger des poudres réactives crée des conditions non évaluées, et la contamination croisée détruit la valeur de la poudre destinée au réemploi. Un même contrôle sert les deux objectifs.",
      },
      {
        question: "Comment récupérer sans créer le danger ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation, et lorsque l'évaluation le justifie, une séparation par immersion qui garde la poudre humide plutôt que de la laisser s'accumuler à sec dans un contenant.",
      },
    ],
    enPath: "/case-studies/titanium-powder-additive-manufacturing",
    related: [
      { label: "Poussière de titane", href: `${M}/poussiere-de-titane` },
      { label: "Fabrication additive", href: `/fr/industries/fabrication-additive` },
      { label: "Impression 3D métal", href: `${A}/impression-3d-metal` },
    ],
  }),
  study({
    slug: "poussiere-de-graphite-usine-de-piles",
    name: "Poussière de graphite en usine de piles",
    group: "Fabrication avancée",
    metaTitle: "Étude de cas : poussière de graphite en usine de piles",
    metaDescription:
      "Scénario représentatif : maîtriser une poussière de graphite à la fois combustible et conductrice dans une usine de fabrication d'électrodes.",
    intro:
      "Une usine de fabrication d'électrodes type manipule du graphite en grande quantité — une poussière qui est combustible et, contrairement à la plupart, électriquement conductrice.",
    facts: [
      { label: "Type d'installation", value: "Usine de fabrication d'électrodes de piles" },
      { label: "Matière", value: "Poudre de graphite en grande quantité" },
      { label: "Danger 1", value: "Poussière carbonée combustible du Groupe F" },
      { label: "Danger 2", value: "Conductivité électrique — pontage et court-circuit" },
    ],
    overview: [
      "La conductivité est ce qui rend le graphite exigeant : une couche accumulée dans une armoire électrique ou sur un tableau n'est pas seulement du combustible, c'est un chemin conducteur. Cela explique pourquoi les normes d'entretien sont fixées aussi strictement dans ce secteur, et pourquoi les zones électriques passent en priorité.",
      "S'y ajoute la combustion lente commune aux poussières carbonées : un foyer profond peut persister dans la matière accumulée sans flamme visible et se rallumer plus tard, ce qui rend le retrait de la matière récupérée du bâtiment nécessaire plutôt que prudent.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Conductivité pontant des bornes et court-circuitant l'équipement.",
      "Combustible carboné du Groupe F, sujet à la combustion lente.",
      "Finesse permettant au graphite de se déposer largement.",
      "Volume élevé en fabrication d'électrodes.",
      "Rallumage possible dans la matière récupérée laissée en place.",
      "Contamination généralisée des surfaces et équipements.",
    ],
    solutions: [
      "Récupération adaptée au Groupe F, conductrice et mise à la terre.",
      "Filtration absolue HEPA 99,99 % pour la fraction fine.",
      "Nettoyage prioritaire des armoires, tableaux et chemins de câbles.",
      "Élimination du soufflage à l'air comprimé.",
      "Retrait de la matière récupérée à la fin de chaque passage.",
      "Fréquences définies pour les conduits et surfaces hautes.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi le graphite est-il doublement exigeant ?",
        answer:
          "Parce qu'il est combustible et électriquement conducteur. Une couche accumulée dans une armoire électrique est un chemin conducteur en plus d'être du combustible, ce qui ajoute un mode de défaillance que les poussières non conductrices ne présentent pas.",
      },
      {
        question: "Pourquoi nettoyer les zones électriques en priorité ?",
        answer:
          "Parce que c'est là que la conductivité compte : une accumulation sur un tableau ou dans une armoire peut ponter des bornes. C'est une priorité de nettoyage différente de celle qu'on appliquerait à une poussière purement combustible.",
      },
      {
        question: "Faut-il sortir la matière récupérée ?",
        answer:
          "Oui. Les poussières carbonées se consument lentement en profondeur : un foyer peut persister dans un contenant sans flamme visible puis se rallumer. Le retrait à la fin de chaque passage est le contrôle simple.",
      },
    ],
    enPath: "/case-studies/graphite-dust-ev-battery-plant",
    related: [
      { label: "Poussière de graphite", href: `${M}/poussiere-de-graphite` },
      { label: "Fabrication de piles", href: `/fr/industries/batterie` },
      { label: "Poussière de lithium", href: `${M}/poussiere-de-lithium` },
    ],
  }),
  study({
    slug: "poussiere-de-bois-mobilier",
    name: "Poussière de bois en fabrication de mobilier",
    group: "Transformation",
    metaTitle: "Étude de cas : poussière de bois en fabrication de mobilier",
    metaDescription:
      "Scénario représentatif : maîtriser un volume élevé de poussière de bois combustible et cancérogène dans un atelier de mobilier.",
    intro:
      "Un atelier de mobilier type produit un volume de poussière parmi les plus élevés de tous les secteurs, avec une fraction fine véritablement combustible et une classification cancérogène pour la matière elle-même.",
    facts: [
      { label: "Type d'installation", value: "Atelier de fabrication de mobilier" },
      { label: "Matière", value: "Poussière de bois, fraction fine de ponçage" },
      { label: "Danger 1", value: "Poussière combustible — NFPA 660" },
      { label: "Danger 2", value: "Cancérogène pour l'humain selon le CIRC" },
    ],
    overview: [
      "La fraction fine issue du ponçage compte bien davantage que les copeaux : c'est elle qui reste en suspension, voyage et se dépose sur l'acier en hauteur, où elle constitue l'inventaire d'un événement secondaire.",
      "Le volet sanitaire est régulièrement sous-estimé : la poussière de bois est classée cancérogène pour l'humain, avec des cancers naso-sinusiens documentés, et c'est aussi un irritant et un sensibilisant respiratoire. La filtration retenue compte donc autant que le contrôle des accumulations.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Fraction fine de ponçage produite en grand volume.",
      "Classification cancérogène de la poussière de bois.",
      "Accumulation sur l'acier en hauteur et dans les carters.",
      "Colmatage rapide d'une filtration sous-dimensionnée.",
      "Charges statiques dans les conduits.",
      "Captation à la source nécessaire sur les ponceuses portatives.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
      "Filtration absolue HEPA 99,99 % pour la fraction respirable.",
      "Grande capacité de collecte ou système centralisé.",
      "Captation à la source sur les ponceuses.",
      "Fréquences définies pour surfaces hautes et conduits.",
      "Élimination du soufflage à l'air comprimé.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Pourquoi la poussière de ponçage compte-t-elle plus que les copeaux ?",
        answer:
          "Parce que la granulométrie détermine le comportement. La fraction fine reste en suspension, voyage et se dépose sur l'acier en hauteur — les copeaux de la même matière ne font aucune de ces choses.",
      },
      {
        question: "La poussière de bois est-elle nocive à respirer ?",
        answer:
          "Oui. Elle est classée cancérogène pour l'humain par le CIRC, avec des cancers naso-sinusiens documentés, et c'est aussi un irritant et un sensibilisant respiratoire. C'est le volet le plus souvent sous-estimé dans les ateliers.",
      },
      {
        question: "Un appareil mobile suffit-il ?",
        answer:
          "Rarement, à cause du volume. Un atelier de mobilier génère de la poussière en continu, ce qui rend un système centralisé souvent plus approprié, complété par des appareils mobiles pour ce que le réseau n'atteint pas.",
      },
    ],
    enPath: "/case-studies/wood-dust-furniture-manufacturing",
    related: [
      { label: "Poussière de bois", href: `${M}/poussiere-de-bois` },
      { label: "Travail du bois", href: `/fr/industries/travail-du-bois` },
      { label: "Ponçage", href: `${A}/poncage` },
    ],
  }),
  study({
    slug: "poudre-de-thermolaquage-finition-automobile",
    name: "Poudre de thermolaquage en finition automobile",
    group: "Finition de surface",
    metaTitle: "Étude de cas : poudre de thermolaquage en finition automobile",
    metaDescription:
      "Scénario représentatif : récupérer proprement une surpulvérisation de thermolaquage pour la réintroduire au procédé.",
    intro:
      "Une ligne de finition automobile type présente un cas rare : la matière récupérée a une valeur réelle, et la propreté de la collecte détermine si cette valeur est conservée ou détruite.",
    facts: [
      { label: "Type d'installation", value: "Ligne de finition et thermolaquage automobile" },
      { label: "Matière", value: "Surpulvérisation de poudre polymère" },
      { label: "Danger", value: "Poussière organique combustible du Groupe G" },
      { label: "Occasion", value: "Surpulvérisation propre souvent réutilisable" },
    ],
    overview: [
      "La poudre est combustible et se charge en électricité statique — le procédé repose précisément sur la charge électrostatique, ce qui rend un circuit de récupération conducteur et mis à la terre nécessaire plutôt qu'optionnel.",
      "Le réemploi dépend entièrement de la propreté du flux. Une collecte dédiée, séparée du nettoyage de plancher, préserve la valeur ; mélanger les couleurs ou introduire de la poussière de plancher la détruit. C'est un cas où l'entretien ménager devient une récupération de coût.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Poudre combustible chargée électrostatiquement par le procédé.",
      "Réemploi conditionnel à la propreté du flux.",
      "Contamination croisée aux changements de couleur.",
      "Accumulation dans la cabine, les conduits et alentour.",
      "Collecte de plancher détruisant la valeur si mélangée.",
      "Poudre fine facilement mise en suspension.",
    ],
    solutions: [
      "Récupération dédiée par couleur là où le réemploi est visé.",
      "Équipement conducteur, mis à la terre et équipotentiel.",
      "Filtration absolue HEPA 99,99 % pour la fraction fine.",
      "Collecte propre séparée du nettoyage de plancher.",
      "Nettoyage de cabine à fréquence définie.",
      "Élimination du soufflage à l'air comprimé.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "La surpulvérisation peut-elle vraiment être réutilisée ?",
        answer:
          "Souvent oui, à condition que le flux reste propre. Une collecte dédiée par couleur, séparée du nettoyage de plancher, préserve la valeur ; mélanger les couleurs ou introduire de la poussière de plancher la détruit.",
      },
      {
        question: "Pourquoi la mise à la terre est-elle nécessaire ici ?",
        answer:
          "Parce que le procédé de thermolaquage charge délibérément les particules par électrostatique. Un circuit de récupération conducteur et mis à la terre n'est pas un raffinement dans une cabine conçue pour charger de la poudre.",
      },
      {
        question: "Peut-on souffler une cabine à l'air comprimé ?",
        answer:
          "Non. Le soufflage disperse une poudre combustible dans tout le bâtiment, détruit toute possibilité de réemploi, et met un nuage en suspension dans un espace conçu pour charger électrostatiquement des particules.",
      },
    ],
    enPath: "/case-studies/coating-powder-automotive-finishing",
    related: [
      { label: "Thermolaquage", href: `${A}/thermolaquage` },
      { label: "Automobile", href: `/fr/industries/automobile` },
      { label: "Peintures et revêtements", href: `/fr/industries/peintures-et-revetements` },
    ],
  }),
  study({
    slug: "fines-de-magnesium-composants-automobiles",
    name: "Fines de magnésium en composants automobiles",
    group: "Fabrication",
    metaTitle: "Étude de cas : fines de magnésium en composants automobiles",
    metaDescription:
      "Scénario représentatif : récupérer des fines de magnésium, parmi les métaux structuraux les plus facilement inflammables.",
    intro:
      "Un atelier usinant des composants en magnésium type manipule le métal structural le plus facilement inflammable, dans un contexte où l'instinct — appliquer de l'eau — est précisément le mauvais geste.",
    facts: [
      { label: "Type d'installation", value: "Usinage de composants automobiles en magnésium" },
      { label: "Matière", value: "Fines de magnésium issues de l'usinage et du meulage" },
      { label: "Danger", value: "Métal combustible hautement réactif — Classe D" },
      { label: "Point critique", value: "L'eau est activement dangereuse sur un feu déclaré" },
    ],
    overview: [
      "Le magnésium figure parmi les métaux structuraux les plus facilement inflammables, et ses fines brûlent à température extrême une fois amorcées. L'eau réagit avec le magnésium chaud en libérant de l'hydrogène, ce qui ajoute un second combustible.",
      "La prévention constitue donc toute la stratégie : aucune accumulation, aucune source d'inflammation, récupération contrôlée, et un personnel qui connaît les dispositions de Classe D avant d'en avoir besoin. L'usinage produit par ailleurs le combustible et, par les étincelles, une source d'inflammation possible dans la même opération.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Inflammation très facile des fines de magnésium.",
      "Eau activement dangereuse — réaction libérant de l'hydrogène.",
      "Usinage produisant combustible et inflammation ensemble.",
      "Accumulation de chaleur dans les contenants de récupération.",
      "Mélange avec d'autres métaux créant des conditions non évaluées.",
      "Nécessité de connaître les dispositions de Classe D à l'avance.",
    ],
    solutions: [
      "Équipement conducteur, mis à la terre et exempt de sources d'inflammation.",
      "Séparation par immersion pour garder les fines humides.",
      "Ségrégation stricte du magnésium.",
      "Élimination du soufflage à l'air comprimé.",
      "Retrait rapide de la matière récupérée du bâtiment.",
      "Dispositions de Classe D et formation du personnel.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Peut-on utiliser de l'eau sur un feu de magnésium ?",
        answer:
          "Non — c'est l'un des cas où la réaction instinctive est la plus dommageable. Le magnésium réagit avec l'eau en libérant de l'hydrogène, ce qui ajoute un second combustible à un incendie déjà difficile. Les feux de magnésium sont de Classe D.",
      },
      {
        question: "Pourquoi l'usinage est-il particulièrement à risque ?",
        answer:
          "Parce que l'opération fournit à la fois le combustible et, par les étincelles, une source d'inflammation possible. C'est la même dynamique que le meulage, avec un métal beaucoup plus sensible.",
      },
      {
        question: "Comment récupérer les fines de magnésium ?",
        answer:
          "Avec un équipement conducteur, mis à la terre et exempt de sources d'inflammation, en gardant le magnésium séparé des autres métaux, et lorsque l'évaluation le justifie, par séparation par immersion qui évite l'accumulation à sec.",
      },
    ],
    enPath: "/case-studies/magnesium-fines-automotive-components",
    related: [
      { label: "Poussière de magnésium", href: `${M}/poussiere-de-magnesium` },
      { label: "Automobile", href: `/fr/industries/automobile` },
      { label: "Usinage CNC", href: `${A}/usinage-cnc` },
    ],
  }),
  study({
    slug: "poussiere-de-grain-elevateur",
    name: "Poussière de grain en élévateur et meunerie",
    group: "Agroalimentaire",
    metaTitle: "Étude de cas : poussière de grain en élévateur et meunerie",
    metaDescription:
      "Scénario représentatif : maîtriser la poussière de grain aux points de transfert d'un élévateur et d'une meunerie.",
    intro:
      "Un élévateur à grains type concentre son danger là où le grain change de direction, dans un secteur où les fréquences de nettoyage figurent dans une réglementation plutôt que dans une norme consensuelle seule.",
    facts: [
      { label: "Type d'installation", value: "Élévateur à grains et meunerie" },
      { label: "Matière", value: "Poussière de grain combustible" },
      { label: "Normes", value: "NFPA 660 et dispositions OSHA sur la manutention des grains" },
      { label: "Zones critiques", value: "Fosses, têtes et pieds d'élévateurs, tours, séchoirs" },
    ],
    overview: [
      "Les points où le grain change de direction produisent la fraction la plus fine et la confinent : fosses de réception, têtes et pieds d'élévateurs, tours de transfert et nettoyeurs. Ces points concentrent aussi des entraînements et roulements.",
      "Les séchoirs ajoutent une chaleur soutenue à proximité de matière fine accumulée, et les silos posent la question de l'entrée en espace clos — où nettoyer depuis les ouvertures rend les entrées rares plutôt qu'inutiles.",
    ],
    risksHeading: "Ce que le scénario met en évidence",
    risks: [
      "Points de changement de direction produisant et confinant la fraction fine.",
      "Entraînements et roulements distribués aux mêmes endroits.",
      "Chaleur soutenue des séchoirs près de matière accumulée.",
      "Entrée en espace clos dans les silos et cellules.",
      "Combustion lente possible dans le grain accumulé.",
      "Fréquences de nettoyage inscrites dans la réglementation.",
    ],
    solutions: [
      "Récupération par aspirateur antidéflagrant conducteur et mis à la terre.",
      "Appareils pneumatiques adaptés au travail prolongé.",
      "Filtration absolue HEPA 99,99 % pour la fraction respirable.",
      "Nettoyage depuis les ouvertures pour réduire la fréquence des entrées.",
      "Fréquences définies par surface et consignation des passages.",
      "Application intégrale du permis lorsqu'une entrée est nécessaire.",
    ],
    faqs: [
      {
        question: "Cette étude de cas décrit-elle un client réel ?",
        answer:
          "Non. C'est un scénario représentatif : il illustre une situation type, sans nom de client, sans donnée chiffrée de résultat et sans citation. Nous préférons illustrer honnêtement une situation plutôt que présenter des chiffres que nous ne pouvons pas étayer.",
      },
      {
        question: "Où se concentre le danger dans un élévateur ?",
        answer:
          "Là où le grain change de direction : fosses de réception, têtes et pieds d'élévateurs, tours de transfert et nettoyeurs. Ces points produisent la fraction la plus fine, la confinent, et concentrent des entraînements et roulements.",
      },
      {
        question: "Le nettoyage de silo exige-t-il une entrée ?",
        answer:
          "Pas toujours. Nettoyer depuis les trous d'homme et les ouvertures rend les entrées rares plutôt qu'inutiles — lorsque la géométrie exige réellement une entrée, le processus complet de permis s'applique exactement comme avant.",
      },
      {
        question: "Pourquoi ce secteur est-il particulièrement réglementé ?",
        answer:
          "À cause du registre d'explosions d'élévateurs à grains. C'est l'un des rares secteurs où des fréquences de nettoyage figurent dans une réglementation plutôt que seulement dans une norme consensuelle.",
      },
    ],
    enPath: "/case-studies/grain-dust-elevator-feed-mill",
    related: [
      { label: "Poussière de grain", href: `${M}/poussiere-de-grain` },
      { label: "Agriculture", href: `/fr/industries/agriculture` },
      { label: "Nettoyage de silo", href: `${A}/nettoyage-de-silo` },
    ],
  }),

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
