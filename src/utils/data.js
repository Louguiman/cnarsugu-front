export const TERMS_AND_CONDITIONS = {
  title: "Contrat d'utilisation de l'application mobile",
  desc: 'Ce contrat d\'utilisation (le "Contrat") est établi entre l\'utilisateur (l\'"Utilisateur") et [Nom de la société](la "Société"), responsable de l\'application mobile nommée [Nom de l\'application] (l\'"Application"). En acceptant les termes de ce Contrat, l\'Utilisateur accepte de se conformer à toutes les conditions énoncées ci-dessous.',
  content: [
    {
      id: 2,
      title: "1. Acceptation des conditions",
      desc: "En téléchargeant, installant ou utilisant l'Application, l'Utilisateur reconnaît avoir lu, compris et accepté les termes et conditions de ce Contrat. Si l'Utilisateur n'est pas d'accord avec l'une des clauses de ce Contrat, il ne doit pas télécharger, installer ou utiliser l'Application.",
    },
    {
      id: 3,
      title: "2. Licence d'utilisation",
      desc: "La Société accorde à l'Utilisateur une licence personnelle, non exclusive, non transférable et révocable pour utiliser l'Application, conformément aux conditions énoncées dans ce Contrat. L'Utilisateur ne doit pas copier, modifier, distribuer ou vendre l'Application ou son contenu sans l'autorisation écrite préalable de la Société.",
    },
    {
      id: 4,
      title: "3. Restrictions d'utilisation",
      desc: "L'Utilisateur s'engage à n'utiliser l'Application que conformément aux lois et réglementations en vigueur et à ne pas :\n\na) Utiliser l'Application à des fins illégales, frauduleuses ou nuisibles.\nb) Contourner ou tenter de contourner les mesures de sécurité de l'Application.\nc) Utiliser l'Application pour collecter des informations personnelles d'autres utilisateurs sans leur consentement.\nd) Interférer avec le bon fonctionnement de l'Application ou perturber les serveurs ou réseaux connectés à celle-ci.\ne) Utiliser l'Application d'une manière qui puisse endommager, désactiver, surcharger ou altérer l'Application.",
    },
    {
      id: 5,
      title: "4. Propriété intellectuelle",
      desc: "Tous les droits de propriété intellectuelle relatifs à l'Application (y compris, mais sans s'y limiter, les droits d'auteur, les marques commerciales et les secrets commerciaux) sont la propriété exclusive de la Société. L'Utilisateur reconnaît que l'utilisation de l'Application ne lui confère aucun droit de propriété sur celle-ci.",
    },
    {
      id: 6,
      title: "5. Collecte de données",
      desc: "L'Utilisateur reconnaît et accepte que la Société puisse collecter et utiliser des données personnelles conformément à sa politique de confidentialité. L'Utilisateur est invité à consulter la politique de confidentialité de la Société pour en savoir plus sur les données collectées, leur utilisation et leur protection.",
    },
    {
      id: 7,
      title: "6. Limitation de responsabilité",
      desc: "Dans la mesure maximale autorisée par la loi applicable, la Société décline toute responsabilité pour tout dommage direct, indirect, accessoire, spécial, consécutif ou exemplaire découlant de l'utilisation ou de l'incapacité d'utiliser l'Application, même si la Société a été informée de la possibilité de tels dommages.",
    },
    {
      id: 8,
      title: "7. Modification du contrat",
      desc: "La Société se réserve le droit de modifier ce Contrat à tout moment, à sa seule discrétion. Les modifications entreront en vigueur dès leur publication dans l'Application. Il est de la responsabilité de l'Utilisateur de vérifier régulièrement les mises à jour du Contrat.",
    },
  ],
};

export const COLORS = ["#0768AE", "#029D40", "#F8F104", "#DC0123"];

export const InsurancePacks = [
  {
    id: 1,
    title: "Auto Prestige",
    desc: "Assurez votre véhicule de prestige avec notre pack d'assurance auto prestige",
    icon: require("../../assets/car.png"),
    color: COLORS[0],
  },
  {
    id: 2,
    title: "MultiRisque PME/PMI",
    desc: "Protégez votre entreprise avec notre pack multirisque adaptée aux PME/PMI.",
    icon: require("../../assets/iconmulti.png"),
    color: COLORS[1],
  },
];

const COVERAGES_AUTO = [
  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage",
    ],
    price: "43,500 FCFA",
    id: 1,
    description:
      "Une couverture de base pour votre véhicule de gamme 3 à 6 CV. Protégez-vous contre les dommages causés aux tiers, les incendies, les poursuites judiciaires, et bénéficiez d'une assistance en cas de besoin.",
    category: "Fourchette 3 à 6 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "50 650 FCFA",
    id: 2,
    description:
      "Une formule essentielle pour votre véhicule de gamme 3 à 6 CV. Bénéficiez d'une protection complète contre les responsabilités civiles, les incendies, les poursuites judiciaires, les dommages causés par des tiers, et assurez la sécurité du conducteur.",
    category: "Fourchette 3 à 6 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Vol-accessoires",
    ],
    price: "62 650 FCFA",
    id: 3,
    description:
      "Une couverture étendue pour votre véhicule de gamme 3 à 6 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 3 à 6 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "68 650 FCFA",
    id: 4,
    description:
      "Une couverture confort pour votre véhicule de gamme 7 à 10 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 3 à 6 CV",
  },

  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage",
    ],
    price: "43 318 FCFA",
    id: 5,
    description:
      "Une protection étendue pour les véhicules de gamme 7 à 10 CV. Couvrez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, et bénéficiez de l'assistance en cas de besoin.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "55 318 FCFA",
    id: 6,
    description:
      "Une formule essentielle pour votre véhicule de gamme 7 à 10 CV. Bénéficiez d'une protection complète contre les responsabilités civiles, les incendies, les poursuites judiciaires, les dommages causés par des tiers, et assurez la sécurité du conducteur.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "67 318 FCFA",
    id: 7,
    description:
      "Une couverture étendue pour votre véhicule de gamme 7 à 10 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "73 318 FCFA",
    id: 8,
    description:
      "Une couverture confort pour votre véhicule de gamme 7 à 10 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage",
    ],
    price: "54 509 FCFA",
    id: 9,
    description:
      "Une protection pour les véhicules de gamme 11 à 14 CV CV. Couvrez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, et bénéficiez de l'assistance en cas de besoin.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "66 509 FCFA",
    id: 10,
    description:
      "Une formule essentielle pour votre véhicule de gamme 11 à 14 CV. Bénéficiez d'une protection complète contre les responsabilités civiles, les incendies, les poursuites judiciaires, les dommages causés par des tiers, et assurez la sécurité du conducteur.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "78 509 FCFA",
    id: 11,
    description:
      "Une couverture étendue pour votre véhicule de gamme 7 à 10 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "90 509 FCFA",
    id: 12,
    description:
      "Une couverture confort pour votre véhicule de gamme 11 à 14 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage",
    ],
    price: "71 410 FCFA",
    id: 13,
    description:
      "Une protection pour les véhicules de gamme 15 à 23 CV. Couvrez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, et bénéficiez de l'assistance en cas de besoin.",
    category: "Fourchette 15 à 23 CVCV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "83 410 FCFA",
    id: 14,
    description:
      "Une formule essentielle pour votre véhicule de gamme 15 à 23 CV. Bénéficiez d'une protection complète contre les responsabilités civiles, les incendies, les poursuites judiciaires, les dommages causés par des tiers, et assurez la sécurité du conducteur.",
    category: "Fourchette 15 à 23 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "95 410 FCFA",
    id: 15,
    description:
      "Une couverture étendue pour votre véhicule de gamme 15 à 23 CVs Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 15 à 23 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "107 410 FCFA",
    id: 16,
    description:
      "Une couverture confort pour votre véhicule de gamme 15 à 23 CV. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 15 à 23 CV",
  },

  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage",
    ],
    price: "85 303 FCFA",
    id: 17,
    description:
      "Une protection pour les véhicules de gamme 24 CV & plus. Couvrez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, et bénéficiez de l'assistance en cas de besoin.",
    category: "Fourchette 24 CV & plus",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "103 303 FCFA",
    id: 18,
    description:
      "Une formule essentielle pour votre véhicule de gamme 24 CV & plus. Bénéficiez d'une protection complète contre les responsabilités civiles, les incendies, les poursuites judiciaires, les dommages causés par des tiers, et assurez la sécurité du conducteur.",
    category: "Fourchette 24 CV & plus",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "109 303 FCFA",
    id: 19,
    description:
      "Une couverture étendue pour votre véhicule de gamme 24 CV & plus. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 24 CV & plus",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civil",
      "Recours des tiers Incendie",
      "Défense pénale & Recours",
      "CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "121 303 FCFA",
    id: 20,
    description:
      "Une couverture confort pour votre véhicule de gamme 24 CV & plus. Protégez-vous contre les responsabilités civiles, les dommages causés par des tiers, les incendies, les poursuites judiciaires, bénéficiez d'une assistance complète et assurez la sécurité du conducteur.",
    category: "Fourchette 24 CV & plus",
  },
];

const COVERAGES_MULTI = [
  {
    id: 1,
    type: "Multirisque",
    category: "Restaurants",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "80 000 FCFA",
    description:
      "Assurance multirisque complète pour protéger votre restaurant contre les imprévus et garantir la tranquillité d'esprit de votre établissement.",
    icon: require("../../assets/icons/coverages/cutlery.png"),
  },
  {
    id: 2,

    type: "Multirisque",
    category: "Bars & Clubs",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "200 000 FCFA",
    description:
      "Assurance multirisque complète pour les bars et les clubs branchés. Protégez votre établissement, vos clients et votre réputation avec une couverture fiable et adaptée.",
    icon: require("../../assets/icons/coverages/cocktail.png"),
  },
  {
    id: 3,
    type: "Multirisque",
    category: "Hotels & Appart meublé",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "155 000 FCFA",
    description:
      "Assurance multirisque complète pour les hôtels et les appartements meublés. Offrez à vos clients un séjour en toute sécurité en protégeant votre établissement des risques courants.",
    icon: require("../../assets/icons/coverages/hotel.png"),
  },
  {
    id: 4,
    type: "Multirisque",
    category: "Agence de voyage",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "95 000 FCFA",
    description:
      "Assurance multirisque complète pour les agences de voyage. Protégez vos clients, vos employés et votre entreprise des incidents imprévus et profitez d'une tranquillité d'esprit totale.",
    icon: require("../../assets/icons/coverages/travel.png"),
  },
  {
    id: 5,
    type: "Multirisque",
    category: "Alimentation",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "125 000 FCFA",
    description:
      "Assurance multirisque complète pour les commerces alimentaires. Garantissez la continuité de votre activité et la sécurité de vos produits avec une couverture adaptée à vos besoins spécifiques.",
    icon: require("../../assets/icons/coverages/grocery-cart.png"),
  },
  {
    id: 6,

    type: "Multirisque",
    category: "Boulangerie",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "210 000 FCFA",
    description:
      "Assurance multirisque complète pour les boulangeries. Protégez votre commerce, votre équipement et votre réputation en cas d'incidents inattendus. Offrez à vos clients la confiance d'une boulangerie bien protégée.",
    icon: require("../../assets/icons/coverages/breads.png"),
  },
  {
    id: 7,

    type: "Multirisque",
    category: "Habitation",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "80 000 FCFA",
    description:
      "Assurance multirisque complète pour protéger votre habitation. Dormez sur vos deux oreilles en sachant que votre foyer et vos biens sont couverts par une protection complète et fiable. Offrez à votre famille une maison en toute sécurité.",
    icon: require("../../assets/icons/coverages/house.png"),
  },
  {
    id: 8,

    type: "Multirisque",
    category: "Pharmacie",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "125 000 FCFA",
    description:
      "Assurance multirisque complète pour les pharmacies. Protégez vos médicaments, votre matériel et votre établissement contre les risques potentiels et assurez la sécurité de vos patients. Garantissez une pharmacie bien protégée et rassurez vos clients.",
    icon: require("../../assets/icons/coverages/pharmacymain.png"),
  },
  {
    id: 9,
    type: "Multirisque",
    category: "Halle Marché (Boutique)",
    coverage: [
      "Incendie et Événements assimilés",
      "Accidents aux Appareils Électriques",
      "Dégâts des Eaux",
      "Bris des Glaces",
      "Vol par effraction",
      "Responsabilité civile",
    ],
    price: "95 000 FCFA",
    description:
      "Assurance multirisque complète pour les boutiques. Protégez votre commerce, vos produits et votre activité contre les incidents inattendus. Offrez à vos clients une expérience d'achat en toute sécurité.",
    icon: require("../../assets/icons/coverages/retailer.png"),
  },
  {
    id: 10,
    category: "RC Scolaire",
    type: "Multirisque",
    coverage: [
      "Capital en cas de décès suite à un accident",
      "Capital en cas d’invalidité permanente suite à un accident",
    ],
    price: "1 800 FCFA",
    description:
      "Assurance responsabilité civile scolaire pour la tranquillité d'esprit des parents et la protection des élèves. Soyez prêt à faire face aux imprévus et garantissez un environnement d'apprentissage sûr. Assurez l'avenir de vos élèves avec une protection adéquate.",
    icon: require("../../assets/icons/coverages/rcscolaire.png"),
  },
  {
    id: 11,
    category: "Cliniques & laboratoires",
    type: "Multirisque",
    coverage: [
      "Incendie et Evènements assimilés :",
      "Incendie, Explosions, Implosion, Foudre, Chocs de véhicules terrestres & Chutes d'aéronefs, Fumée, Mur du son, Fuites de sprinkler.",
      "Accidents aux Appareils Electriques (1er risque)",
      "Dégâts des Eaux (1er risque)",
      "Bris des Glaces & Enseignes lumineuses (1er risque)",
      "Vol par effraction dans les Locaux (1er risque)",
    ],
    price: "195 000 FCFA",
    description:
      "Protégez votre clinique en souscrivant à notre multirisque CLINIQUES.",
    icon: require("../../assets/icons/coverages/clinic1.png"),
  },
];

export const COVERAGES = [COVERAGES_AUTO, COVERAGES_MULTI];
