import { createStore, action } from "easy-peasy";

const globalModel = {
  isModalOpen: false,
  insurance: { selectedPack: null, selectedCoverage: null },
  userInfo: { name: "", surname: "" },
  attachments: [],
  isLoading: false,
  updateInsurance: action((state, payload) => {
    state.insurance.selectedPack = { ...payload };
  }),
  updateCoverage: action((state, payload) => {
    state.insurance.selectedCoverage = { ...payload };
  }),
  updateUserInfo: action((state, payload) => {
    state.userInfo = { ...state.userInfo, ...payload };
  }),
  addAttachment: action((state, payload) => {
    state.attachments.push(payload);
  }),
  setModalOpen: action((state, payload) => {
    state.isModalOpen = payload;
  }),
  removeAttachment: action((state, payload) => {
    state.attachments = state.attachments.filter(
      (_, index) => index !== payload
    );
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  resetState: action((state) => {
    state.insurance = { selectedPack: null, selectedCoverage: null };
    state.userInfo = { name: "", surname: "", phoneNumber: "", address: "" };
    state.attachments = [];
    state.isLoading = false;
  }),
};

export const store = createStore(globalModel);
