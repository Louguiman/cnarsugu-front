import axios from "axios";
import apiClient from "./httpclient";

export function authUser(data) {
  return axios("https://corpmali-backend.herokuapp.com/api/auth/signin", {
    method: "POST",
    data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

export function getClientsbyUser(id) {
  return axios(
    `https://corpmali-backend.herokuapp.com/api/clients/user/${id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
}

export const uploadForm = (data) => {
  return axios("https://corpmali-backend.herokuapp.com/api/form-upload", {
    method: "POST",
    data: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
export const changePassword = (data) => {
  return axios(
    "https://corpmali-backend.herokuapp.com/api/auth/reset-password",
    {
      method: "POST",
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};

export function getClientsbyService() {
  return axios("https://corpmali-backend.herokuapp.com/api/services", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

export async function submitSubscription(payload) {
  return await apiClient.post("subscription", payload);
}

export async function requestPayment(payload) {
  return await apiClient.post("payment", payload);
}
