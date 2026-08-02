/**
 * Québec French (fr-CA) content.
 *
 * Terminology decisions, deliberate:
 *  - "soumission" for a quote — the Québec business term. France-French "devis"
 *    would read as foreign to a Québec buyer.
 *  - "aspirateur antidéflagrant" for explosion-proof vacuum. This is both the
 *    correct term and the phrase with search demand behind it, so it leads the
 *    titles, H1s and URLs.
 *  - "poussières combustibles" / "liquides inflammables" / "emplacements
 *    dangereux (classifiés)".
 *
 * Regulatory language mirrors the English exactly — UL 1203, NRTL, the Class and
 * Division designations — because those are the assertions PrestiVac makes and
 * they must not drift between languages.
 */

export const FR = {
  nav: {
    products: "Produits",
    industries: "Industries",
    materials: "Poussières et matières",
    resources: "Ressources",
    quote: "Obtenir une soumission",
    switchTo: "English",
    home: "Accueil",
  },
  brand: {
    lockupTagline: "Fabricant d'aspirateurs antidéflagrants",
    positioning:
      "Fabricant d'aspirateurs certifiés pour poussières combustibles et liquides / solvants inflammables",
  },
  home: {
    metaTitle: "Fabricant d'aspirateurs antidéflagrants",
    metaDescription:
      "PrestiVac fabrique des aspirateurs industriels antidéflagrants certifiés UL 1203 pour poussières combustibles et liquides inflammables. Acier inoxydable massif, filtration absolue HEPA 99,99 %, plus de 200 modèles. Fabriqués aux États-Unis.",
    eyebrow: "Fabricant depuis plus de 40 ans",
    h1: "Aspirateurs antidéflagrants pour poussières combustibles",
    intro:
      "PrestiVac conçoit et fabrique des aspirateurs industriels antidéflagrants légalement certifiés pour les environnements à contamination contrôlée et les emplacements dangereux. Chaque appareil est construit en acier inoxydable massif dans notre propre usine.",
    ctaPrimary: "Obtenir une soumission",
    ctaSecondary: "Voir la gamme",
    pillarsHeading: "Pourquoi PrestiVac",
    pillars: [
      {
        title: "Fabrication",
        body:
          "Nous concevons et fabriquons des systèmes d'aspiration industrielle haute performance adaptés aux exigences les plus sévères des environnements critiques et dangereux. Chaque appareil est fabriqué à l'interne, avec précision, qualité et sécurité.",
      },
      {
        title: "Antidéflagrant",
        body:
          "Nos aspirateurs sont construits avec des composants antidéflagrants, conçus pour un fonctionnement sécuritaire dans les zones de poussières combustibles. Certifiés pour les Classes I, II et III, Divisions 1 et 2.",
      },
      {
        title: "Conformité NFPA 652 – 654 et 484",
        body:
          "Tous les systèmes PrestiVac sont conformes aux normes NFPA 652, 654 et 484 — désormais regroupées dans la NFPA 660 — assurant une protection fiable contre les incendies et les explosions de poussières.",
      },
    ],
    ratingsHeading: "Nos aspirateurs antidéflagrants",
    ratingsIntro: "Nous ne faisons pas que répondre à vos attentes : nous les dépassons.",
    ratings: [
      "Classe I, Divisions 1 et 2, Groupes A, B, C et D (gaz, vapeurs ou liquides)",
      "Classe II, Divisions 1 et 2, Groupes E, F et G (poussières combustibles)",
      "Protection contre l'inflammation des poussières",
    ],
    customization:
      "PrestiVac peut personnaliser ou modifier ses aspirateurs selon vos besoins particuliers. Comme nous sommes le fabricant, nous pouvons construire un aspirateur conçu précisément pour votre application.",
    statsHeading: "En chiffres",
    stats: [
      { value: "1000+", label: "Aspirateurs vendus dans le monde" },
      { value: "40+", label: "Années d'expérience en vente d'aspirateurs" },
      { value: "200+", label: "Modèles d'aspirateurs construits" },
      { value: "20+", label: "Industries desservies" },
    ],
  },
  explosionProof: {
    slug: "aspirateurs-antideflagrants",
    metaTitle: "Aspirateurs antidéflagrants certifiés UL 1203",
    metaDescription:
      "Aspirateurs industriels antidéflagrants certifiés UL 1203 pour poussières combustibles et liquides inflammables : construction conductrice mise à la terre, modèles électriques et pneumatiques, filtration HEPA 99,99 %. Fabriqués aux États-Unis.",
    eyebrow: "Emplacements dangereux",
    h1: "Aspirateurs antidéflagrants",
    intro:
      "Aspirateurs certifiés UL 1203 antidéflagrants et protégés contre l'inflammation des poussières, destinés aux emplacements dangereux (classifiés). Dites-nous votre matière et votre classification, et notre équipe technique recommandera le modèle approprié.",
    certHeading: "Certification",
    certBody:
      "Les aspirateurs antidéflagrants PrestiVac sont certifiés UL 1203, antidéflagrants et protégés contre l'inflammation des poussières, pour usage dans les emplacements dangereux (classifiés) : Classe I, Divisions 1 et 2, Groupes A, B, C et D (gaz, vapeurs ou liquides) et Classe II, Divisions 1 et 2, Groupes E, F et G (poussières combustibles). Tous les appareils sont construits et testés selon les normes NRTL.",
    featuresHeading: "Ce qui définit cette gamme",
    features: [
      "Construction en acier inoxydable massif de qualité 316 et 304",
      "Circuit de récupération conducteur, mis à la terre et équipotentiel",
      "Filtration absolue HEPA 99,99 %",
      "Modèles électriques et pneumatiques (à air comprimé)",
      "Construction dissipatrice d'électricité statique (ESD)",
      "Option chariot RCT à réservoir amovible",
    ],
    selectionHeading: "Électrique ou pneumatique ?",
    selection: [
      {
        title: "Pneumatique (à air comprimé)",
        body:
          "Aucun composant électrique dans l'appareil : ni moteur, ni interrupteur, ni cordon. Convient à de nombreux emplacements classifiés et au fonctionnement continu. Nécessite une alimentation en air comprimé d'au moins 1/2 po de diamètre intérieur.",
      },
      {
        title: "Électrique",
        body:
          "Pour les installations sans alimentation en air comprimé suffisante. Même circuit de récupération conducteur, mis à la terre et équipotentiel. Généralement plus silencieux qu'un entraînement pneumatique.",
      },
    ],
    shopVacHeading: "Pourquoi pas un aspirateur d'atelier modifié ?",
    shopVacBody:
      "Un aspirateur d'atelier standard introduit trois problèmes à la fois : un moteur à balais qui produit des étincelles en fonctionnement normal, un boyau de plastique qui accumule des charges statiques sans mise à la terre, et une filtration qui renvoie la fraction la plus fine dans le local. C'est une question de construction, non de qualité : modifier un appareil grand public ne corrige aucun des trois.",
    ctaPrimary: "Obtenir une soumission",
  },
  quote: {
    slug: "demande-de-soumission",
    metaTitle: "Obtenir une soumission",
    metaDescription:
      "Demandez une soumission pour un aspirateur industriel antidéflagrant PrestiVac. Indiquez votre matière, votre classification et vos services, et notre équipe technique recommandera le modèle approprié.",
    eyebrow: "Directement du fabricant",
    h1: "Obtenir une soumission",
    intro:
      "Dites-nous ce que vous devez aspirer et où. Notre équipe technique recommandera l'aspirateur PrestiVac le mieux adapté à votre application, à son intensité d'utilisation et à ses utilisateurs.",
    assurances: [
      "Plus de 200 modèles — la plupart des besoins ont déjà un précédent",
      "Construction en acier inoxydable massif sur chaque appareil",
      "Options antidéflagrantes légalement certifiées",
      "Nous pouvons modifier ou construire selon votre besoin précis",
    ],
    contactHeading: "Vous préférez parler à quelqu'un ?",
    fields: {
      name: "Nom",
      company: "Entreprise",
      email: "Courriel",
      phone: "Téléphone",
      address: "Adresse",
      cityState: "Ville / Province",
      zip: "Code postal",
      products: "Quels produits souhaitez-vous aspirer ?",
      explosive: "Est-ce explosif ?",
      toxic: "Est-ce toxique ?",
      classification: "Classification particulière ?",
      operation: "Combien d'heures d'utilisation par jour ?",
      capacity: "Quelle capacité de collecte recherchez-vous ?",
      compressedAir: "Avez-vous de l'air comprimé ? Si oui, quel diamètre et quel débit (pi³/min) ?",
      voltage: "Si électrique, quelle tension est disponible ?",
      filtration: "Avez-vous besoin d'une filtration absolue ?",
      hose: "Quel diamètre et quelle longueur de boyau d'aspiration ?",
      accessories: "Quels accessoires sont requis ?",
      additional: "Renseignements additionnels",
      submit: "Obtenir une soumission",
      required: "Les champs marqués d'un astérisque sont obligatoires.",
    },
    options: {
      yesNo: ["Je ne sais pas", "Oui", "Non"],
      classifications: ["Emplacement ordinaire", "Division I", "Division II", "Je ne sais pas — veuillez conseiller"],
      filtration: ["Non requise", "HEPA Plus", "ULPA", "Je ne sais pas — veuillez conseiller"],
    },
  },
  about: {
    slug: "a-propos",
    metaTitle: "À propos | Fabricant d'aspirateurs industriels",
    metaDescription:
      "PrestiVac USA Inc. est un chef de file national des systèmes d'aspiration industrielle avec plus de 35 ans d'expérience. Acier inoxydable massif, plus de 200 modèles, normes NRTL et OSHA.",
    eyebrow: "À propos de PrestiVac",
    h1: "Nous fabriquons chaque aspirateur que nous vendons",
    body: [
      "Avec des propriétaires et un personnel cumulant plus de 35 ans d'expérience, PrestiVac est un chef de file du marché national et maintient son statut de « meilleur de sa catégorie » par un engagement envers l'excellence.",
      "Les aspirateurs industriels PrestiVac sont reconnus pour leur haute qualité, leur construction en acier inoxydable massif, leur puissance d'aspiration, leur filtration efficace et leur convivialité. Ils sont conçus pour recueillir les résidus de procédé, les liquides, les poussières et autres résidus en respectant les normes de sécurité nord-américaines et internationales.",
      "Nos aspirateurs industriels servent à une vaste gamme d'applications : entretien de bâtiments, procédés de fabrication, sécurité antidéflagrante, dépoussiérage, transformation alimentaire, automobile et aérospatiale. PrestiVac offre plus de 200 versions différentes d'aspirateurs industriels.",
      "PrestiVac aide les entreprises et les travailleurs à faire les bons choix quant à l'équipement à utiliser, aux procédures les plus sécuritaires à suivre et au maintien de la conformité OSHA. Notre gamme complète d'aspirateurs industriels et antidéflagrants respecte les normes NRTL.",
      "PrestiVac USA Inc. est une entreprise privée. Toute la conception et la fabrication sont réalisées à notre siège social et à notre usine de production situés à Dover, au Delaware.",
    ],
  },
} as const;
