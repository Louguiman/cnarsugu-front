export const getIdFromClient = () => Date.now();

export const PAYMENT_METHOD_DATA = [
  {
    id: 2,
    serviceCode: "ML_PAIEMENTMARCHAND_OM_TP",
    title: "Orange Money",
    validationCall: "#144#37#",
  },
  {
    id: 3,
    serviceCode: "ML_PAIEMENTMARCHAND_MOOV_TP",
    title: "Moov Money",
    validationCall: "#",
  },
  {
    id: 4,
    serviceCode: "ML_PAIEMENTWAVE_TP",
    title: "Wave",
    validationCall: "#",
  },
  {
    id: 1,
    serviceCode: "ML_INIT_PAIEMENT_TP",
    validationCall: "#",
    title: "TouchPoint",
  },
];

//Removed payment by bank card
// {
//   id: 5,
//   title: "Carte Bancaire",
//   serviceCode: "",
// },

export const PAYMENT_DIGEST_USERNAME =
  "876e29d5802ec8025805a32c2cd3527d623566b536f9ff1c1453fcff3c7a9b48";
export const PAYMENT_DIGEST_PASSWORD =
  "f53b554c28347b143b90bdb652288ff63adfe3c379fa8d8e9601296ef38b24a8";

export const AGENCY_CODE = "BLEU6502";
export const LOGIN_AGENT = "940221570";
export const PASSWORD_AGENT = "";
export const RECIPIENT_FIRST_NAME = "THIERNO";
export const RECIPIENT_LAST_NAME = "AMADOU";
export const RECIPIENT_EMAIL = "husumaci@gmail.com";
export const RECIPIENT_NUMBER = "94022157";

export const SERVICE_CLIENT_TYPES = [
  {
    id: 1,
    title: "Particuliers",
  },
  {
    id: 2,
    title: "Entreprise",
  },
];

export const paymentCallbackUrl = "";
