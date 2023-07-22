import { createStore, action } from "easy-peasy";

const globalModel = {
  insurance: { selectedPack: null, selectedCoverage: null },
  userInfo: { name: "", surname: "" },
  updateInsurance: action((state, payload) => {
    state.insurance.selectedPack = { ...payload };
  }),
  updateCoverage: action((state, payload) => {
    state.insurance.selectedCoverage = { ...payload };
  }),
  updateUserInfo: action((state, payload) => {
    state.userInfo = { ...state.userInfo, ...payload };
  }),
};

export const store = createStore(globalModel);
