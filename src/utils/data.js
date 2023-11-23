export const TERMS_AND_CONDITIONS = {
  title: "Contrat d'utilisation de l'application mobile",
  desc: 'Ce contrat d\'utilisation (le "Contrat") est établi entre l\'utilisateur (l\'"Utilisateur") et "Les Assurances Bleues" (la "Société"), responsable de l\'application mobile nommée "cnarsugu" (l\'"Application"). En acceptant les termes de ce Contrat, l\'Utilisateur accepte de se conformer à toutes les conditions énoncées ci-dessous.',
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
    desc: "Vous assurez rapidement, C’est possible. Faites une simulation et obtenez votre tarif AUTO. Souscrivez en quelques clics et faites-vous livrer gratuitement.",
    icon: require("../../assets/car.png"),
    type: "package",
    color: COLORS[0],
    bg: require("../../assets/carsbg.png"),
  },
  {
    id: 2,
    type: "package",
    title: "MultiRisque PME/PMI",
    desc: "Protégez vos investissements en souscrivant à notre assurance multirisque PME/PMI.",
    icon: require("../../assets/iconmulti.png"),
    color: COLORS[1],
    bg: require("../../assets/bg-onWeb3.png"),
  },
  {
    id: 3,
    title: "Assurance Santé + complémentaire AMO ",
    desc: `Couverture personnalisée à la suite de maladie ou d’accident en :
    •	Assurance santé « ordinaire » avec ou sans évacuation sanitaire à l’étranger et au taux de couverture choisi par l’assuré ;
    •	Complément AMO (prise en charge des 30% des soins non couverts par AMO).`,
    type: "Produit",
    icon: require("../../assets/icons/sante.png"),
    color: COLORS[2],
    coverage: [
      "Les garanties sont minutieusement choisies en fonction des besoins et du profil du prospect.",
    ],
    bg: require("../../assets/carsbg.png"),
  },

  {
    id: 4,
    title: "Assurance Assistance Voyage",
    desc: "Pour tous vos déplacements à l’étranger, Bénéficiez en cas d’urgence d’une assistance médicale et d’une prise en charge des frais liés aux pertes des documents d’identité (passeport, permis de conduire, carte d’identité), des bagages, rapatriement de corps, frais et honoraires d’avocats, etc.",
    icon: require("../../assets/icons/travel.png"),
    type: "Produit",
    color: COLORS[0],
    coverage: [
      "Les garanties sont minutieusement choisies en fonction des besoins et du profil du prospect.",
    ],
    bg: require("../../assets/carsbg.png"),
  },
  {
    id: 5,
    title: "Assurance Transport de marchandises ",
    desc: "Ne vous souciez plus du transport domestique  de vos marchandises selon la garantie souscrite.",
    icon: require("../../assets/icons/transport.png"),
    type: "Produit",
    color: COLORS[1],
    coverage: [
      "Les garanties sont minutieusement choisies en fonction des besoins et du profil du prospect.",
    ],
    bg: require("../../assets/carsbg.png"),
  },
  {
    id: 6,
    title: "Assurance des risques Techniques",
    desc: "Nos offres d’assurance couvrent les risques susceptibles de se réaliser lors des travaux de construction ou après, sur les machines et équipements industriels, etc. ",
    icon: require("../../assets/icons/toolbox.png"),
    type: "Produit",
    color: COLORS[2],
    coverage: [
      "Les garanties sont minutieusement choisies en fonction des besoins et du profil du prospect.",
    ],
    bg: require("../../assets/carsbg.png"),
  },
  {
    id: 7,
    title: "RC SColaire",
    desc: "Assurance Responsabilité Civile Scolaire pour la tranquillité d’esprit des parents et des responsables d’établissements scolaires pour une meilleure protection des élèves et staffs.",
    type: "Produit",
    icon: require("../../assets/icons/coverages/rcscolaire.png"),
    color: COLORS[3],
    price: "",
    coverage: [
      "Combinaison spéciale de la Responsabilité Civile et l’Individuelle Accidents Corporels (IAC)",
    ],
    bg: require("../../assets/carsbg.png"),
  },
];

const COVERAGES_AUTO = [
  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage",
    ],
    price: "38 650 FCFA",
    id: 1,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie de base de votre véhicule de 3 à 6 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin.",
    category: "Fourchette 3 à 6 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "50 650 FCFA",
    id: 2,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule Tiers Essentiel de votre véhicule de 3 à 6 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin et prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré.",
    category: "Fourchette 3 à 6 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Vol-accessoires",
    ],
    price: "62 650 FCFA",
    id: 3,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie étendue de votre véhicule de 3 à 6 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré et des frais des accessoires volés.",
    category: "Fourchette 3 à 6 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "68 650 FCFA",
    id: 4,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule confort de votre véhicule de 3 à 6 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge du préjudice corporel subi par le conducteur et les passagers du véhicule assuré ; sont garantis les frais des accessoires volés. Couverture des dommages causés aux pare-brise, aux glaces latérales, et à la lunette arrière.",
    category: "Fourchette 3 à 6 CV",
  },

  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage",
    ],
    price: "43 318 FCFA",
    id: 5,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie de base de votre véhicule de 7 à 10 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "55 318 FCFA",
    id: 6,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule Tiers Essentiel de votre véhicule de 7 à 10 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin et prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "67 318 FCFA",
    id: 7,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie étendue de votre véhicule de 7 à 10 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré et des frais des accessoires volés.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "73 318 FCFA",
    id: 8,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule confort de votre véhicule de 7 à 10 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge du préjudice corporel subi par le conducteur et les passagers du véhicule assuré ; sont garantis les frais des accessoires volés. Couverture des dommages causés aux pare-brise, aux glaces latérales, et à la lunette arrière.",
    category: "Fourchette 7 à 10 CV",
  },
  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage",
    ],
    price: "54 509 FCFA",
    id: 9,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie de base de votre véhicule de 11 à 14 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "66 509 FCFA",
    id: 10,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule Tiers Essentiel de votre véhicule de 11 à 14 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin et prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "78 509 FCFA",
    id: 11,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie étendue de votre véhicule de 11 à 14 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré et des frais des accessoires volés.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "90 509 FCFA",
    id: 12,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule confort de votre véhicule de 11 à 14 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge du préjudice corporel subi par le conducteur et les passagers du véhicule assuré ; sont garantis les frais des accessoires volés. Couverture des dommages causés aux pare-brise, aux glaces latérales, et à la lunette arrière.",
    category: "Fourchette 11 à 14 CV",
  },
  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage",
    ],
    price: "71 410 FCFA",
    id: 13,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie de base de votre véhicule de 15 à 23 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin.",
    category: "Fourchette 15 à 23 CV",
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "83 410 FCFA",
    id: 14,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule Tiers Essentiel de votre véhicule de 15 à 23CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin et prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré.",
    category: "Fourchette 15 à 23 CV",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "95 410 FCFA",
    id: 15,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie étendue de votre véhicule de 15 à 23 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré et des frais des accessoires volés.",
    category: "Fourchette 15 à 23 CV",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "107 410 FCFA",
    id: 16,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule confort de votre véhicule de 15 à 23 CV. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge du préjudice corporel subi par le conducteur et les passagers du véhicule assuré ; sont garantis les frais des accessoires volés. Couverture des dommages causés aux pare-brise, aux glaces latérales, et à la lunette arrière.",
    category: "Fourchette 15 à 23 CV",
  },

  {
    type: "Formule Tiers",
    icon: require("../../assets/icons/formula/icon-formule-tiers1.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage",
    ],
    price: "85 303 FCFA",
    id: 17,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie de base de votre véhicule de 24 CV & plus. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin.",
    category: `Fourchette 24 CV & plus`,
  },
  {
    type: "Formule Tiers Essentiel",
    icon: require("../../assets/icons/formula/icon-formule-tiers-essentiel2.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "103 303 FCFA",
    id: 18,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule Tiers Essentiel de votre véhicule de 24 CV & plus. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin et prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré.",
    category: "Fourchette 24 CV & plus",
  },
  {
    type: "Formule Tiers Etendu",
    icon: require("../../assets/icons/formula/icon-formule-tiers-etendu5.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
    ],
    price: "109 303 FCFA",
    id: 19,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la garantie étendue de votre véhicule de 24 CV & plus. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge gratuite du préjudice corporel subi par le conducteur du véhicule assuré et des frais des accessoires volés.",
    category: "Fourchette 24 CV & plus",
  },
  {
    type: "Formule Tiers Confort",
    icon: require("../../assets/icons/formula/icon-formule-tiers-confort6.png"),
    coverage: [
      "Responsabilité Civile",
      "Défense - Recours",
      "Attestation CEDEAO",
      "Assistance en avantage +",
      "Individuel conducteur",
      "Individuel personnes transportées",
      "Vol-accessoires",
      "Bris de glace",
    ],
    price: "121 303 FCFA",
    id: 20,
    description:
      "Protégez votre patrimoine en cas de dommages causés aux tiers grâce à la formule confort de votre véhicule de 24 CV & plus. Bénéficiez gratuitement des frais de poursuite judiciaire liés à votre défense suite à un sinistre couvert et de toute réclamation d’indemnité à votre profit auprès d’une compagnie responsable. Assistance offerte au besoin ; prise en charge du préjudice corporel subi par le conducteur et les passagers du véhicule assuré ; sont garantis les frais des accessoires volés. Couverture des dommages causés aux pare-brise, aux glaces latérales, et à la lunette arrière.",
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
    clientType: 3, //1 For individual, 2 For entrerprises and 3 For both
    description:
      "Assurance multirisque complète pour protéger votre restaurant contre les imprévus et garantir la tranquillité d'esprit de votre établissement.",
    icon: require("../../assets/icons/coverages/cutlery.png"),
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
    clientType: 2,
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
    clientType: 3,
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
    clientType: 2,
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
    clientType: 3,
    price: "80 000 FCFA",
    description:
      "Assurance multirisque complète pour protéger votre habitation. Dormez sur vos deux oreilles en sachant que votre foyer et vos biens sont couverts par une protection complète et fiable. Offrez à votre famille une maison en toute sécurité.",
    icon: require("../../assets/icons/coverages/house.png"),
    extraFields: ["activity"],
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
    clientType: 2,
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
    clientType: 2,
    price: "95 000 FCFA",
    extraFields: ["shop"],
    description:
      "Assurance multirisque complète pour les boutiques. Protégez votre commerce, vos produits et votre activité contre les incidents inattendus. Offrez à vos clients une expérience d'achat en toute sécurité.",
    icon: require("../../assets/icons/coverages/retailer.png"),
  },
  {
    id: 10,
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
    clientType: 2,
    description:
      "Protégez votre clinique en souscrivant à notre multirisque CLINIQUES.",
    icon: require("../../assets/icons/coverages/clinic1.png"),
  },
  {
    id: 11,

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
    clientType: 2,
    description:
      "Assurance multirisque complète pour les bars et les clubs branchés. Protégez votre établissement, vos clients et votre réputation avec une couverture fiable et adaptée.",
    icon: require("../../assets/icons/coverages/cocktail.png"),
    extraFields: ["activity"],
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
    clientType: 3,
    description:
      "Assurance multirisque complète pour les hôtels et les appartements meublés. Offrez à vos clients un séjour en toute sécurité en protégeant votre établissement des risques courants.",
    icon: require("../../assets/icons/coverages/hotel.png"),
    extraFields: ["activity"],
  },
  {
    id: 12,
    type: "Multirisque",
    category: "Offre sur Mesure",
    coverage: [
      "Les garanties sont minutieusement choisies en fonction des besoins et du profil du prospect.",
    ],
    price: "Demande de Devis",
    clientType: 3,
    description:
      "A la demande du client, nous proposons une couverture sur mesure.",
    icon: require("../../assets/icons/coverages/percentIcon.png"),
    extraFields: ["activity"],
  },
];

export const COVERAGES = [COVERAGES_AUTO, COVERAGES_MULTI];
