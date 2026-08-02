/**
 * Québec French compliance pages — hazardous location classification.
 *
 * REVIEW GATE. These pages carry the Class, Division and Group designations and the
 * antidéflagrant / protégé-contre-l'inflammation-des-poussières distinction, which
 * maps onto the real Class I vs Class II protection concepts. A reader uses them to
 * decide which equipment is permissible in their room.
 *
 * They are therefore marked REVIEW_PENDING until a French-speaking safety reviewer
 * signs off. While pending:
 *   - every page renders a visible notice at the top
 *   - every page is noindex/nofollow and excluded from the sitemap
 *   - no hreflang pairing is emitted, so they are not advertised as the French
 *     counterpart of a live English page
 *
 * To publish: set REVIEW_PENDING to false, add the pairs to LOCALE_PAIRS in
 * i18n.ts, and add the sitemap entries. Nothing else needs changing.
 */

import type { FrMaterialGuide } from "@/lib/data/fr-materials";

export type FrCompliancePage = FrMaterialGuide;

/** Flip to false only after a French-speaking safety reviewer has signed off. */
export const REVIEW_PENDING = true;

export const REVIEW_NOTICE =
  "Traduction en attente de révision par un spécialiste en sécurité francophone. Le contenu de référence est la version anglaise jusqu'à cette validation.";


export const FR_COMPLIANCE: FrCompliancePage[] = [
  {
    slug: "classe-i-division-2",
    name: "Classe I, Division 2",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe I, Division 2",
    metaDescription:
      "En Division 2, l'atmosphère inflammable n'est présente qu'en cas de défaillance ou de condition anormale — la différence avec la Division 1 est la fréquence.",
    intro:
      "La Division 2 désigne un emplacement où des gaz ou vapeurs inflammables sont manipulés ou entreposés, mais confinés dans des contenants ou des systèmes fermés d'où ils ne s'échappent qu'en cas de défaillance.",
    facts: [
      { label: "Ce que la Division 2 signifie", value: "Atmosphère inflammable présente seulement en cas de DÉFAILLANCE" },
      { label: "Différence avec la Division 1", value: "La fréquence, non la gravité du danger" },
      { label: "Groupes", value: "Les mêmes A, B, C et D qu'en Division 1" },
      { label: "Attention", value: "Une zone Division 2 peut devenir Division 1 selon la ventilation" },
    ],
    overview: [
      "La Division 2 couvre aussi les emplacements où une atmosphère inflammable est normalement empêchée par une ventilation mécanique, et ceux adjacents à une zone de Division 1 d'où des vapeurs pourraient migrer.",
      "Ce dernier point mérite attention : la classification d'une zone dépend en partie de ce qui se passe dans la zone voisine et du fonctionnement de la ventilation. Une défaillance de ventilation peut modifier la classification effective, ce qui fait partie de l'évaluation de votre ingénieur.",
    ],
    risksHeading: "Ce que cette classification implique",
    risks: [
      "La différence avec la Division 1 porte sur la fréquence, non la gravité.",
      "Une défaillance de ventilation peut modifier la classification effective.",
      "La proximité d'une zone Division 1 entre dans l'évaluation.",
      "Les groupes A à D s'appliquent de la même façon.",
      "Un équipement Division 2 ne convient pas en Division 1.",
      "La classification est assignée, non déduite.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier la classe, la division ET le groupe.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'une certification couvre une classe qu'elle ne nomme pas.",
      "Confirmer la classification de chaque zone où l'appareil circulera.",
      "Consigner la correspondance équipement-classification dans votre dossier.",
    ],
    faqs: [
      {
        question: "Que signifie Classe I, Division 2 ?",
        answer:
          "Un emplacement où des gaz ou vapeurs inflammables sont manipulés ou entreposés, mais confinés dans des contenants ou systèmes fermés d'où ils ne s'échappent qu'en cas de défaillance. La différence avec la Division 1 porte sur la fréquence : en Division 1 l'atmosphère dangereuse existe en fonctionnement normal.",
      },
      {
        question: "Un équipement Division 2 convient-il en Division 1 ?",
        answer:
          "Non. La Division 1 est plus exigeante parce que l'atmosphère dangereuse y est présente en fonctionnement normal. Un équipement certifié pour la Division 2 seulement n'y est pas acceptable.",
      },
      {
        question: "La ventilation peut-elle changer la classification ?",
        answer:
          "Elle entre dans l'évaluation : certains emplacements sont classés Division 2 précisément parce qu'une ventilation mécanique empêche normalement l'accumulation. Une défaillance de ventilation fait donc partie de ce que votre ingénieur considère.",
      },
      {
        question: "La proximité d'une zone Division 1 compte-t-elle ?",
        answer:
          "Oui. La Division 2 couvre notamment les emplacements adjacents à une zone de Division 1 d'où des vapeurs pourraient migrer, ce qui explique pourquoi la classification ne se déduit pas de l'activité menée dans le local seul.",
      },
    ],
    enPath: "/hazardous-locations/class-i-division-2",
  },
  {
    slug: "classe-ii-division-2",
    name: "Classe II, Division 2",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe II, Division 2",
    metaDescription:
      "En Division 2, la poussière combustible n'est pas normalement en suspension, mais des accumulations sont présentes. C'est la classification la plus courante en industrie.",
    intro:
      "La Division 2 désigne un emplacement où de la poussière combustible n'est pas normalement en suspension en quantité inflammable, mais où des accumulations sont présentes sur les surfaces et l'équipement.",
    facts: [
      { label: "Ce que la Division 2 signifie", value: "Poussière NON normalement en suspension, mais accumulée" },
      { label: "Fréquence en industrie", value: "C'est la classification la plus courante" },
      { label: "Groupes", value: "Les mêmes E, F et G qu'en Division 1" },
      { label: "Ce qui la déclenche", value: "Les accumulations, plus que la mise en suspension" },
    ],
    overview: [
      "C'est la classification la plus fréquemment rencontrée en industrie, précisément parce que les accumulations sont courantes même là où la poussière n'est pas continuellement en suspension. Une usine bien tenue avec de la poussière sur les surfaces hautes est typiquement en Division 2.",
      "Elle inclut aussi les emplacements où une accumulation pourrait interférer avec la dissipation de chaleur d'un équipement électrique, ou être mise en suspension par une défaillance mécanique — ce qui relie directement la classification au programme d'entretien ménager.",
    ],
    risksHeading: "Ce que cette classification implique",
    risks: [
      "Les accumulations, plus que la suspension, déclenchent la Division 2.",
      "Une accumulation nuisant à la dissipation de chaleur entre dans la définition.",
      "La classification la plus courante en industrie.",
      "Lien direct entre classification et entretien ménager.",
      "Les groupes E, F et G s'appliquent de la même façon.",
      "Un équipement Division 2 ne convient pas en Division 1.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier la classe, la division ET le groupe.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'une certification couvre une classe qu'elle ne nomme pas.",
      "Confirmer la classification de chaque zone où l'appareil circulera.",
      "Consigner la correspondance équipement-classification dans votre dossier.",
    ],
    faqs: [
      {
        question: "Que signifie Classe II, Division 2 ?",
        answer:
          "Un emplacement où de la poussière combustible n'est pas normalement en suspension en quantité inflammable, mais où des accumulations sont présentes sur les surfaces et l'équipement. C'est la classification la plus fréquemment rencontrée en industrie.",
      },
      {
        question: "Pourquoi est-elle si courante ?",
        answer:
          "Parce que les accumulations sont courantes même là où la poussière n'est pas continuellement en suspension. Une usine bien tenue avec de la poussière sur les surfaces hautes est typiquement en Division 2.",
      },
      {
        question: "L'entretien ménager influence-t-il la classification ?",
        answer:
          "Le lien est direct : la définition inclut les emplacements où une accumulation pourrait nuire à la dissipation de chaleur d'un équipement électrique ou être mise en suspension par une défaillance. Le programme d'entretien agit donc sur la condition même que la classification décrit.",
      },
      {
        question: "Un équipement Division 2 suffit-il partout ?",
        answer:
          "Non. Un même bâtiment peut comporter des zones de Division 1, et un équipement certifié pour la Division 2 seulement n'y est pas acceptable. La classification s'établit zone par zone.",
      },
    ],
    enPath: "/hazardous-locations/class-ii-division-2",
  },
  {
    slug: "classe-i-division-1-ou-division-2",
    name: "Classe I : Division 1 ou Division 2 ?",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe I Division 1 ou 2 ? La différence est la",
    metaDescription:
      "La Division 1 signifie que l'atmosphère dangereuse existe en fonctionnement normal ; la Division 2, seulement en cas de défaillance. La gravité du danger est la même.",
    intro:
      "La question revient souvent sous la forme « laquelle est la plus dangereuse ? », et la réponse est qu'elles décrivent la même gravité de danger avec des fréquences différentes.",
    facts: [
      { label: "Division 1", value: "Atmosphère dangereuse présente en fonctionnement NORMAL" },
      { label: "Division 2", value: "Présente seulement en cas de défaillance ou condition anormale" },
      { label: "Ce qui diffère", value: "La fréquence d'exposition, non la gravité du danger" },
      { label: "Conséquence", value: "La Division 1 impose des exigences d'équipement plus strictes" },
    ],
    overview: [
      "En Division 1, l'atmosphère inflammable existe pendant le fonctionnement normal — ou fréquemment en raison de réparations, d'entretien ou de fuites. En Division 2, les gaz sont confinés dans des systèmes fermés d'où ils ne s'échappent qu'en cas de défaillance.",
      "Parce que la Division 1 suppose la présence de l'atmosphère dangereuse en marche normale, elle impose des exigences plus strictes. Un équipement certifié pour la Division 2 seulement n'est pas acceptable en Division 1 ; l'inverse est généralement acceptable, la certification supérieure couvrant l'exigence moindre — mais il faut le vérifier sur la documentation plutôt que le présumer.",
    ],
    risksHeading: "Ce qui distingue les deux",
    risks: [
      "La fréquence, non la gravité, distingue les divisions.",
      "Division 1 : présence en fonctionnement normal.",
      "Division 2 : présence seulement en cas de défaillance.",
      "La Division 1 impose des exigences d'équipement plus strictes.",
      "Un équipement Division 2 n'est pas acceptable en Division 1.",
      "La couverture inverse se vérifie sur la documentation.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier la classe, la division ET le groupe.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'une certification couvre une classe qu'elle ne nomme pas.",
      "Confirmer la classification de chaque zone où l'appareil circulera.",
      "Consigner la correspondance équipement-classification dans votre dossier.",
    ],
    faqs: [
      {
        question: "Laquelle est la plus dangereuse, Division 1 ou 2 ?",
        answer:
          "Ni l'une ni l'autre : elles décrivent la même gravité de danger avec des fréquences différentes. En Division 1 l'atmosphère inflammable existe en fonctionnement normal ; en Division 2 seulement en cas de défaillance ou de condition anormale.",
      },
      {
        question: "Un équipement Division 1 convient-il en Division 2 ?",
        answer:
          "Généralement oui, la certification plus exigeante couvrant l'exigence moindre — mais cela se vérifie sur la documentation de certification plutôt que se présume, parce que le marquage doit nommer explicitement ce qui est couvert.",
      },
      {
        question: "Et l'inverse ?",
        answer:
          "Non. Un équipement certifié pour la Division 2 seulement n'est pas acceptable dans une zone de Division 1, où l'atmosphère dangereuse est présente en fonctionnement normal.",
      },
      {
        question: "Comment savoir laquelle s'applique chez moi ?",
        answer:
          "Par la classification assignée par l'ingénieur électrique ou de procédé de votre installation et acceptée par l'autorité compétente. Elle ne se déduit pas de l'activité menée dans le local.",
      },
    ],
    enPath: "/hazardous-locations/class-i-division-1-vs-division-2",
  },
  {
    slug: "classe-ii-division-1-ou-division-2",
    name: "Classe II : Division 1 ou Division 2 ?",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe II Division 1 ou 2 ? Suspension contre",
    metaDescription:
      "En Division 1 la poussière est en suspension en fonctionnement normal ; en Division 2 elle est accumulée mais non normalement en suspension.",
    intro:
      "Pour les poussières, la distinction entre divisions porte sur la suspension : en Division 1 la poussière est dans l'air en fonctionnement normal, en Division 2 elle est sur les surfaces.",
    facts: [
      { label: "Division 1", value: "Poussière en suspension en fonctionnement NORMAL" },
      { label: "Division 2", value: "Accumulée sur les surfaces, non normalement en suspension" },
      { label: "Cas particulier", value: "Les poussières métalliques du Groupe E relèvent de la Division 1" },
      { label: "Plus courante", value: "La Division 2, dans la plupart des installations" },
    ],
    overview: [
      "La Division 1 couvre les emplacements où la poussière combustible est en suspension en fonctionnement normal en quantité inflammable, ceux où une défaillance mécanique pourrait produire simultanément un mélange inflammable et une source d'inflammation, et ceux où des poussières métalliques du Groupe E peuvent être présentes.",
      "Ce dernier point est important : la présence de poussières métalliques conductrices du Groupe E place l'emplacement en Division 1, indépendamment de la question de la suspension. C'est une conséquence de la conductivité, qui ajoute un mode de défaillance électrique au danger de déflagration.",
    ],
    risksHeading: "Ce qui distingue les deux",
    risks: [
      "Division 1 : suspension en fonctionnement normal.",
      "Division 2 : accumulation sur les surfaces.",
      "Les poussières métalliques du Groupe E relèvent de la Division 1.",
      "La conductivité ajoute un mode de défaillance électrique.",
      "La Division 2 est la plus courante en industrie.",
      "Un équipement Division 2 ne convient pas en Division 1.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier la classe, la division ET le groupe.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'une certification couvre une classe qu'elle ne nomme pas.",
      "Confirmer la classification de chaque zone où l'appareil circulera.",
      "Consigner la correspondance équipement-classification dans votre dossier.",
    ],
    faqs: [
      {
        question: "Quelle est la différence pour les poussières ?",
        answer:
          "En Division 1 la poussière combustible est en suspension en fonctionnement normal en quantité inflammable ; en Division 2 elle est accumulée sur les surfaces et l'équipement sans être normalement en suspension. La Division 2 est la plus courante en industrie.",
      },
      {
        question: "Les poussières métalliques changent-elles la classification ?",
        answer:
          "Oui, et c'est un point souvent manqué : la présence de poussières métalliques conductrices du Groupe E place l'emplacement en Division 1, indépendamment de la question de la suspension. C'est une conséquence de la conductivité, qui ajoute un mode de défaillance électrique.",
      },
      {
        question: "L'accumulation seule suffit-elle pour la Division 2 ?",
        answer:
          "Oui, c'est le cœur de la définition : des accumulations présentes sur les surfaces et l'équipement, y compris là où elles pourraient nuire à la dissipation de chaleur ou être mises en suspension par une défaillance.",
      },
      {
        question: "Comment savoir laquelle s'applique ?",
        answer:
          "Par la classification assignée par l'ingénieur de votre installation. Elle tient compte du procédé, de la ventilation, de la nature de la poussière et de la géométrie du local.",
      },
    ],
    enPath: "/hazardous-locations/class-ii-division-1-vs-division-2",
  },
  {
    slug: "classe-ii-groupes-e-f-g",
    name: "Classe II : Groupes E, F et G",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe II Groupes E, F et G",
    metaDescription:
      "Le Groupe E couvre les poussières métalliques conductrices, le Groupe F les carbonées, le Groupe G les autres poussières combustibles.",
    intro:
      "Les trois groupes de poussières de la Classe II ne sont pas un classement de gravité mais une distinction de comportement, et le Groupe E est traité à part pour une raison précise.",
    facts: [
      { label: "Groupe E", value: "Poussières métalliques combustibles — conductrices" },
      { label: "Groupe F", value: "Poussières carbonées — charbon, coke, graphite, noir de carbone" },
      { label: "Groupe G", value: "Autres poussières combustibles — farine, amidon, bois, plastique" },
      { label: "Pourquoi E est à part", value: "La conductivité ajoute un mode de défaillance électrique" },
    ],
    overview: [
      "Le Groupe E couvre les poussières métalliques combustibles comme l'aluminium et le magnésium et leurs alliages commerciaux, ainsi que d'autres poussières dont la granulométrie, l'abrasivité et la conductivité électrique présentent des dangers comparables.",
      "Le Groupe F couvre les poussières carbonées, qui partagent une tendance à la combustion lente en profondeur : un foyer peut persister dans une accumulation sans flamme visible. Le Groupe G couvre les autres poussières combustibles, non conductrices.",
      "La conductivité du Groupe E est ce qui justifie son traitement distinct : une accumulation de poussière métallique peut ponter des bornes et court-circuiter de l'équipement en plus de constituer un combustible. Sa présence place aussi l'emplacement en Division 1.",
    ],
    risksHeading: "Ce que les groupes impliquent",
    risks: [
      "Groupe E conducteur : ponte et court-circuite l'équipement.",
      "La présence de poussières du Groupe E place l'emplacement en Division 1.",
      "Groupe F : tendance à la combustion lente en profondeur.",
      "Groupe G : poussières combustibles non conductrices.",
      "Un équipement certifié pour un groupe ne couvre pas les autres.",
      "Le groupe se vérifie, pas seulement la classe et la division.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier la classe, la division ET le groupe.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'une certification couvre une classe qu'elle ne nomme pas.",
      "Confirmer la classification de chaque zone où l'appareil circulera.",
      "Consigner la correspondance équipement-classification dans votre dossier.",
    ],
    faqs: [
      {
        question: "Que signifient les Groupes E, F et G ?",
        answer:
          "Le Groupe E couvre les poussières métalliques combustibles, conductrices — aluminium, magnésium et leurs alliages notamment. Le Groupe F couvre les poussières carbonées comme le charbon, le coke, le graphite et le noir de carbone. Le Groupe G couvre les autres poussières combustibles : farine, amidon, bois, plastique.",
      },
      {
        question: "Pourquoi le Groupe E est-il traité à part ?",
        answer:
          "Parce que la conductivité ajoute un mode de défaillance que les autres groupes ne présentent pas : une accumulation de poussière métallique peut ponter des bornes et court-circuiter de l'équipement, en plus de constituer un combustible. Sa présence place aussi l'emplacement en Division 1.",
      },
      {
        question: "Le Groupe F a-t-il une particularité ?",
        answer:
          "Les poussières carbonées partagent une tendance à la combustion lente en profondeur : un foyer peut persister dans une accumulation sans flamme visible et se rallumer plus tard. C'est pourquoi la matière récupérée est retirée du bâtiment plutôt qu'entreposée.",
      },
      {
        question: "Un équipement certifié Groupe G couvre-t-il le Groupe E ?",
        answer:
          "Non. Les groupes ne sont pas hiérarchisés de manière à ce qu'une certification en couvre automatiquement d'autres. La certification doit nommer explicitement les groupes couverts.",
      },
    ],
    enPath: "/hazardous-locations/class-ii-groups-e-f-g",
  },
  {
    slug: "securite-intrinseque",
    name: "Sécurité intrinsèque",
    group: "Classification des emplacements dangereux",
    metaTitle: "Sécurité intrinsèque",
    metaDescription:
      "La sécurité intrinsèque limite l'énergie disponible sous le seuil d'inflammation. C'est un concept distinct de l'antidéflagrant, et PrestiVac ne revendique pas d'homologation IS.",
    intro:
      "La sécurité intrinsèque est un troisième concept de protection, distinct de l'antidéflagrant et de la protection contre l'inflammation des poussières — et il vaut la peine d'être clair sur ce que PrestiVac revendique et ne revendique pas.",
    facts: [
      { label: "Principe", value: "Limiter l'énergie disponible sous le seuil d'inflammation" },
      { label: "Différence avec l'antidéflagrant", value: "L'un limite l'énergie ; l'autre contient l'explosion" },
      { label: "Différence avec le Groupe E", value: "La protection poussière exclut la poussière et limite la température" },
      { label: "Position de PrestiVac", value: "Nous NE revendiquons PAS d'homologation de sécurité intrinsèque" },
    ],
    overview: [
      "L'approche antidéflagrante accepte qu'une inflammation puisse se produire à l'intérieur d'un boîtier et le construit pour la contenir. La protection contre l'inflammation des poussières empêche la poussière d'entrer et limite la température de surface. La sécurité intrinsèque prend une troisième voie : elle limite l'énergie électrique disponible dans le circuit sous le seuil capable d'enflammer l'atmosphère, de sorte qu'aucune inflammation ne peut survenir.",
      "Ces trois concepts répondent à des exigences différentes et sont évalués selon des référentiels différents. Une homologation dans l'un ne constitue pas une homologation dans un autre.",
      "Pour être explicite : PrestiVac ne revendique pas d'homologation de sécurité intrinsèque pour ses aspirateurs. Nos appareils antidéflagrants sont certifiés selon le cadre nord-américain pour les classes, divisions et groupes nommés sur leur documentation. Si votre application exige spécifiquement un équipement à sécurité intrinsèque, dites-le nous et nous vous le dirons franchement plutôt que d'étirer une certification pour qu'elle paraisse convenir.",
    ],
    risksHeading: "Ce qu'il faut savoir",
    risks: [
      "Trois concepts de protection distincts, évalués séparément.",
      "La sécurité intrinsèque limite l'énergie ; l'antidéflagrant contient l'explosion.",
      "Une homologation dans un concept ne vaut pas dans un autre.",
      "PrestiVac ne revendique pas d'homologation de sécurité intrinsèque.",
      "Les exigences se vérifient sur la documentation, non sur l'appellation.",
      "Une exigence IS spécifique doit être nommée dès la demande.",
    ],
    solutions: [
      "Nommer explicitement l'exigence si votre application impose la sécurité intrinsèque.",
      "Vérifier la documentation plutôt que l'appellation commerciale.",
      "Demander quelles classes, divisions et groupes sont nommés.",
      "Ne pas traiter les trois concepts comme interchangeables.",
      "Confirmer l'acceptation par votre autorité compétente.",
      "Nous le dire si nous ne sommes pas le bon fournisseur pour votre cas.",
    ],
    faqs: [
      {
        question: "Qu'est-ce que la sécurité intrinsèque ?",
        answer:
          "Un concept de protection qui limite l'énergie électrique disponible dans le circuit sous le seuil capable d'enflammer l'atmosphère environnante, de sorte qu'aucune inflammation ne peut survenir. C'est distinct de l'approche antidéflagrante, qui accepte qu'une inflammation puisse se produire dans un boîtier et le construit pour la contenir.",
      },
      {
        question: "Les aspirateurs PrestiVac sont-ils à sécurité intrinsèque ?",
        answer:
          "Non, et nous préférons le dire clairement. PrestiVac ne revendique pas d'homologation de sécurité intrinsèque. Nos appareils antidéflagrants sont certifiés selon le cadre nord-américain pour les classes, divisions et groupes nommés sur leur documentation.",
      },
      {
        question: "Si mon application exige la sécurité intrinsèque, que faire ?",
        answer:
          "Dites-le nous dès la demande. Nous vous répondrons franchement plutôt que d'étirer une certification pour qu'elle paraisse convenir — et si nous ne sommes pas le bon fournisseur pour votre cas, il vaut mieux le savoir tout de suite.",
      },
      {
        question: "Les trois concepts sont-ils interchangeables ?",
        answer:
          "Non. Antidéflagrant, protégé contre l'inflammation des poussières et sécurité intrinsèque répondent à des exigences différentes et sont évalués selon des référentiels différents. Une homologation dans l'un ne constitue pas une homologation dans un autre.",
      },
    ],
    enPath: "/hazardous-locations/intrinsically-safe-vacuums",
  },
  {
    slug: "classification-des-poussieres-combustibles",
    name: "Classification des poussières combustibles",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classification des poussières combustibles",
    metaDescription:
      "La classification d'une poussière s'établit par essai de votre propre matière, non par analogie. Ce que l'essai détermine et pourquoi il est propre à votre installation.",
    intro:
      "La classification d'une poussière combustible ne se lit pas dans une table : elle s'établit par essai de la matière réellement produite par votre procédé, parce que la granulométrie et l'humidité changent le résultat.",
    facts: [
      { label: "Ce qui détermine le comportement", value: "La granulométrie et l'humidité de VOTRE matière" },
      { label: "Ce que l'essai établit", value: "Explosibilité, sévérité, sensibilité à l'inflammation" },
      { label: "Pourquoi pas par analogie", value: "Une même matière se comporte différemment selon sa finesse" },
      { label: "Qui utilise le résultat", value: "Votre analyse des dangers et votre ingénieur" },
    ],
    overview: [
      "Une même matière — de la farine, de l'aluminium, du bois — se comporte très différemment selon sa finesse. C'est pourquoi une valeur trouvée pour une matière similaire dans une autre usine ne s'applique pas à la vôtre, et pourquoi l'analyse des dangers liés aux poussières est propre à l'installation qui l'a produite.",
      "L'essai établit si la poussière est explosible, avec quelle sévérité, et avec quelle sensibilité à l'inflammation. Ces résultats alimentent ensuite l'analyse des dangers et la classification de zone assignée par votre ingénieur.",
      "Nous ne publions pas de valeurs de sévérité pour des matières génériques, parce que ce serait donner un chiffre que votre installation ne peut pas utiliser. Ce que nous décrivons dans nos guides de matières est le comportement qualitatif — ce que la matière fait et pourquoi — et nous vous renvoyons à l'essai pour les chiffres.",
    ],
    risksHeading: "Ce que la classification implique",
    risks: [
      "La granulométrie et l'humidité de votre matière changent le résultat.",
      "Une valeur trouvée ailleurs ne s'applique pas à votre poussière.",
      "L'essai établit explosibilité, sévérité et sensibilité.",
      "Les résultats alimentent l'analyse des dangers et la classification de zone.",
      "Nous ne publions pas de valeurs de sévérité génériques.",
      "Nos guides décrivent le comportement qualitatif, non des chiffres.",
    ],
    solutions: [
      "Faire tester la matière réellement produite par votre procédé.",
      "Utiliser les résultats dans votre analyse des dangers.",
      "Faire assigner la classification de zone par votre ingénieur.",
      "Réviser l'essai quand la matière ou le procédé change.",
      "Ne pas raisonner par analogie avec une usine similaire.",
      "Nous consulter avec vos résultats plutôt qu'avec une hypothèse.",
    ],
    faqs: [
      {
        question: "Comment classifie-t-on une poussière combustible ?",
        answer:
          "Par essai de la matière réellement produite par votre procédé. La granulométrie et l'humidité changent le comportement, de sorte qu'une même matière — farine, aluminium, bois — se comporte très différemment selon sa finesse.",
      },
      {
        question: "Peut-on utiliser une valeur trouvée pour une matière similaire ?",
        answer:
          "Non. Une valeur établie pour une matière similaire dans une autre usine ne s'applique pas à la vôtre, ce qui est aussi la raison pour laquelle une analyse des dangers liés aux poussières est propre à l'installation qui l'a produite.",
      },
      {
        question: "Pourquoi ne publiez-vous pas de valeurs de sévérité ?",
        answer:
          "Parce que ce serait donner un chiffre que votre installation ne peut pas utiliser. Nos guides de matières décrivent le comportement qualitatif — ce que la matière fait et pourquoi — et nous vous renvoyons à l'essai pour les valeurs applicables à votre poussière.",
      },
      {
        question: "Quand faut-il refaire l'essai ?",
        answer:
          "Quand la matière ou le procédé change de façon significative : une nouvelle formulation, une mouture plus fine, un changement de séchage. Le comportement suit la matière réelle, pas la désignation du produit.",
      },
    ],
    enPath: "/hazardous-locations/combustible-dust-classification",
  },

  {
    slug: "classe-i-division-1",
    name: "Classe I, Division 1",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe I, Division 1 | Gaz et vapeurs inflammables",
    metaDescription:
      "La Classe I couvre les gaz, vapeurs et liquides inflammables. La Division 1 signifie que l'atmosphère dangereuse est présente en fonctionnement normal.",
    intro:
      "La Classe I désigne les emplacements où des gaz, vapeurs ou liquides inflammables sont présents. La Division 1 précise la fréquence : l'atmosphère dangereuse existe en fonctionnement normal, ou fréquemment en raison de réparations, d'entretien ou de fuites.",
    facts: [
      { label: "Ce que la Classe désigne", value: "Gaz, vapeurs et liquides inflammables" },
      { label: "Ce que la Division 1 signifie", value: "Atmosphère dangereuse présente en fonctionnement NORMAL" },
      { label: "Groupes", value: "A (acétylène), B (hydrogène), C (éthylène), D (propane et similaires)" },
      { label: "Qui l'assigne", value: "L'ingénieur électrique ou de procédé de l'installation" },
    ],
    overview: [
      "La distinction entre Division 1 et Division 2 porte sur la fréquence, non sur la gravité. En Division 1, l'atmosphère inflammable est présente pendant le fonctionnement normal ; en Division 2, elle ne l'est qu'en cas de défaillance ou de condition anormale.",
      "Les Groupes A à D classent les gaz par difficulté de confinement : l'acétylène en Groupe A est le plus exigeant, l'hydrogène en Groupe B suit, puis l'éthylène en C et le propane et gaz similaires en D. Un équipement certifié pour le Groupe D ne convient pas au Groupe B.",
      "La classification est assignée par l'ingénieur de votre installation et acceptée par l'autorité compétente. Elle ne se déduit pas de l'apparence d'un local.",
    ],
    risksHeading: "Ce que cette classification implique",
    risks: [
      "Division 1 : l'atmosphère dangereuse existe en fonctionnement normal.",
      "Groupes hiérarchisés : un équipement Groupe D ne convient pas au Groupe B.",
      "La classification est assignée, non déduite de l'apparence du local.",
      "La Classe I concerne les gaz et vapeurs, non les poussières.",
      "Un même bâtiment peut comporter plusieurs classifications.",
      "L'équipement doit correspondre à la classification exacte, groupe compris.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier le groupe et non seulement la classe et la division.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'un équipement Classe I couvre aussi la Classe II.",
      "Confirmer la classification de chaque zone où l'appareil circulera.",
      "Consigner la correspondance équipement-classification dans votre dossier.",
    ],
    faqs: [
      {
        question: "Que signifie Classe I, Division 1 ?",
        answer:
          "La Classe I désigne un emplacement où des gaz, vapeurs ou liquides inflammables sont présents. La Division 1 signifie que l'atmosphère dangereuse existe en fonctionnement normal, ou fréquemment en raison de réparations, d'entretien ou de fuites. La distinction entre Division 1 et Division 2 porte sur la fréquence, non sur la gravité.",
      },
      {
        question: "Que signifient les Groupes A, B, C et D ?",
        answer:
          "Ils classent les gaz par difficulté de confinement. Le Groupe A couvre l'acétylène et est le plus exigeant, le Groupe B l'hydrogène, le Groupe C l'éthylène, et le Groupe D le propane et les gaz similaires. Un équipement certifié pour le Groupe D ne convient pas à une zone de Groupe B.",
      },
      {
        question: "Qui détermine la classification ?",
        answer:
          "L'ingénieur électrique ou de procédé de votre installation, et elle est acceptée par l'autorité compétente. Elle ne se déduit pas de l'apparence d'un local, et nous adaptons l'équipement à cette assignation plutôt que de la deviner.",
      },
      {
        question: "Un équipement Classe I couvre-t-il la Classe II ?",
        answer:
          "Pas automatiquement. La Classe I concerne les gaz et vapeurs, la Classe II les poussières combustibles. Ce sont des concepts de protection distincts, et la certification d'un appareil doit nommer explicitement les classes, divisions et groupes couverts.",
      },
    ],
    enPath: "/hazardous-locations/class-i-division-1",
  },
  {
    slug: "classe-ii-division-1",
    name: "Classe II, Division 1",
    group: "Classification des emplacements dangereux",
    metaTitle: "Classe II, Division 1 | Poussières combustibles",
    metaDescription:
      "La Classe II couvre les poussières combustibles. La Division 1 signifie que la poussière est en suspension en fonctionnement normal, en quantité suffisante pour être inflammable.",
    intro:
      "La Classe II désigne les emplacements où des poussières combustibles sont présentes. La Division 1 signifie que la poussière est en suspension en fonctionnement normal, en quantité suffisante pour produire un mélange inflammable.",
    facts: [
      { label: "Ce que la Classe désigne", value: "Poussières combustibles" },
      { label: "Ce que la Division 1 signifie", value: "Poussière en suspension en fonctionnement NORMAL" },
      { label: "Groupes", value: "E (poussières métalliques), F (carbonées), G (autres combustibles)" },
      { label: "Concept de protection", value: "Protégé contre l'inflammation des poussières — distinct de l'antidéflagrant" },
    ],
    overview: [
      "Le concept de protection en Classe II diffère de celui de la Classe I. En Classe I, l'approche antidéflagrante contient une explosion à l'intérieur du boîtier. En Classe II, la protection contre l'inflammation des poussières empêche la poussière d'entrer et limite la température de surface pour qu'une couche déposée ne s'enflamme pas.",
      "Les Groupes E, F et G distinguent les poussières métalliques conductrices, les poussières carbonées et les autres poussières combustibles. Le Groupe E est traité avec une sévérité particulière parce qu'une poussière métallique conductrice peut aussi ponter et court-circuiter de l'équipement.",
      "La Division 1 inclut aussi les emplacements où une défaillance mécanique pourrait produire un mélange inflammable en même temps qu'une source d'inflammation, et ceux où des poussières métalliques du Groupe E peuvent être présentes.",
    ],
    risksHeading: "Ce que cette classification implique",
    risks: [
      "Division 1 : poussière en suspension en fonctionnement normal.",
      "Concept de protection différent de celui de la Classe I.",
      "Température de surface limitée pour ne pas enflammer une couche déposée.",
      "Groupe E traité sévèrement en raison de la conductivité.",
      "Les poussières métalliques du Groupe E relèvent de la Division 1.",
      "Un équipement antidéflagrant Classe I ne couvre pas automatiquement la Classe II.",
    ],
    solutions: [
      "Obtenir la classification assignée par votre ingénieur avant de spécifier.",
      "Vérifier le groupe de poussière et non seulement la classe et la division.",
      "Confirmer la limite de température de surface applicable.",
      "Demander la documentation de certification pour la configuration retenue.",
      "Ne pas présumer qu'une certification Classe I couvre la Classe II.",
      "Consigner la correspondance équipement-classification.",
    ],
    faqs: [
      {
        question: "Que signifie Classe II, Division 1 ?",
        answer:
          "La Classe II désigne un emplacement où des poussières combustibles sont présentes. La Division 1 signifie que la poussière est en suspension en fonctionnement normal, en quantité suffisante pour produire un mélange inflammable — et elle inclut aussi les emplacements où des poussières métalliques du Groupe E peuvent être présentes.",
      },
      {
        question: "Antidéflagrant et protégé contre l'inflammation des poussières, est-ce la même chose ?",
        answer:
          "Non, et c'est une distinction importante. L'approche antidéflagrante, associée à la Classe I, contient une explosion à l'intérieur du boîtier. La protection contre l'inflammation des poussières, associée à la Classe II, empêche la poussière d'entrer et limite la température de surface pour qu'une couche déposée ne s'enflamme pas. Ce sont des concepts de protection distincts.",
      },
      {
        question: "Que signifient les Groupes E, F et G ?",
        answer:
          "Le Groupe E couvre les poussières métalliques combustibles, le Groupe F les poussières carbonées, et le Groupe G les autres poussières combustibles comme les farines, amidons, bois et plastiques. Le Groupe E est traité avec une sévérité particulière parce qu'une poussière métallique conductrice peut aussi court-circuiter de l'équipement.",
      },
      {
        question: "Pourquoi la température de surface compte-t-elle ?",
        answer:
          "Parce qu'une couche de poussière déposée sur un boîtier chaud s'isole elle-même et peut s'enflammer à une température inférieure à celle d'un nuage. La limite de température de surface applicable fait donc partie de la certification, et non seulement la classe et le groupe.",
      },
    ],
    enPath: "/hazardous-locations/class-ii-division-1",
  },
  {
    slug: "atex-et-normes-nord-americaines",
    name: "ATEX et normes nord-américaines",
    group: "Classification des emplacements dangereux",
    metaTitle: "ATEX ou normes nord-américaines ? Deux cadres",
    metaDescription:
      "ATEX est le cadre européen ; les Classes et Divisions sont nord-américaines. Une certification dans l'un ne vaut pas dans l'autre.",
    intro:
      "Ce sont deux cadres réglementaires distincts pour le même problème physique, et une certification dans l'un ne constitue pas une certification dans l'autre.",
    facts: [
      { label: "ATEX", value: "Cadre européen — zones 0/1/2 pour les gaz, 20/21/22 pour les poussières" },
      { label: "Nord-américain", value: "Classes et Divisions, ou le système de zones du CEC/NEC" },
      { label: "Point essentiel", value: "Une certification dans un cadre ne vaut pas dans l'autre" },
      { label: "Position de PrestiVac", value: "Nous ne revendiquons pas de certification ATEX" },
    ],
    overview: [
      "ATEX utilise des zones numérotées selon la durée de présence de l'atmosphère dangereuse : zones 0, 1 et 2 pour les gaz, zones 20, 21 et 22 pour les poussières. Le système nord-américain historique utilise des Classes et des Divisions, et une approche par zones existe également dans le Code et le NEC.",
      "Les deux cadres visent le même phénomène mais reposent sur des exigences d'essai, des organismes et des marquages différents. Un appareil marqué pour ATEX n'est pas, de ce fait, acceptable dans une zone classifiée selon le système nord-américain — et l'inverse est également vrai.",
      "Pour être clair sur notre position : PrestiVac ne revendique pas de certification ATEX. Nos aspirateurs antidéflagrants sont certifiés selon le cadre nord-américain, et nous fournissons la documentation correspondant à la configuration retenue.",
    ],
    risksHeading: "Ce qu'il faut vérifier",
    risks: [
      "Une certification ATEX ne vaut pas dans une zone classifiée en Classes et Divisions.",
      "Une certification nord-américaine ne vaut pas dans une zone ATEX.",
      "Les marquages, organismes et exigences d'essai diffèrent.",
      "Les correspondances approximatives entre zones et divisions ne sont pas des équivalences.",
      "L'autorité compétente accepte le cadre applicable chez vous.",
      "PrestiVac ne revendique pas de certification ATEX.",
    ],
    solutions: [
      "Identifier le cadre applicable à votre installation avant de comparer des équipements.",
      "Demander la documentation de certification correspondant à ce cadre.",
      "Ne pas traiter une correspondance de zones comme une équivalence de certification.",
      "Confirmer l'acceptation par votre autorité compétente.",
      "Vérifier la classe, la division et le groupe, ou la zone, selon le cadre.",
      "Nous demander la documentation pour la configuration exacte que vous spécifiez.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre ATEX et les Classes et Divisions ?",
        answer:
          "ATEX est le cadre européen, avec des zones numérotées selon la durée de présence de l'atmosphère dangereuse — zones 0, 1 et 2 pour les gaz, 20, 21 et 22 pour les poussières. Les Classes et Divisions constituent le système nord-américain. Les deux visent le même phénomène physique mais reposent sur des exigences d'essai, des organismes et des marquages différents.",
      },
      {
        question: "Une certification ATEX est-elle acceptée en Amérique du Nord ?",
        answer:
          "Non, pas de ce fait. Un appareil marqué pour ATEX n'est pas automatiquement acceptable dans une zone classifiée selon le système nord-américain, et l'inverse est également vrai. C'est l'autorité compétente de votre installation qui accepte le cadre applicable.",
      },
      {
        question: "Les aspirateurs PrestiVac sont-ils certifiés ATEX ?",
        answer:
          "Non, et nous préférons le dire clairement plutôt que de laisser l'ambiguïté. PrestiVac ne revendique pas de certification ATEX. Nos aspirateurs antidéflagrants sont certifiés selon le cadre nord-américain, et nous fournissons la documentation correspondant à la configuration retenue.",
      },
      {
        question: "Peut-on convertir une zone ATEX en division nord-américaine ?",
        answer:
          "Des correspondances approximatives circulent, mais elles ne constituent pas des équivalences de certification. La classification applicable est celle assignée selon le cadre en vigueur chez vous, par votre ingénieur, et acceptée par votre autorité compétente.",
      },
    ],
    enPath: "/hazardous-locations/atex-vs-north-american",
  },
];
