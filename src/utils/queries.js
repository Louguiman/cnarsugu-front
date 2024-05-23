import axios from "axios";
import apiClient from "./httpclient";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Platform } from "react-native";
import { useState } from "react";

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

// export async function submitSubscription(payload) {
//   return await apiClient.post("subscription", payload);
// }

export async function requestPayment(payload) {
  return await apiClient.post("payment", payload);
}

export const useSubmitSubscription = () => {
  const setLoading = useStoreActions((actions) => actions.setLoading);
  const resetState = useStoreActions((actions) => actions.resetState);
  const { userInfo, insurance, attachments } = useStoreState((state) => ({
    userInfo: state.userInfo,
    insurance: state.insurance,
    attachments: state.attachments,
  }));

  const [error, setError] = useState(null);

  const submitSubscription = async () => {
    const formData = new FormData();

    formData.append("insurance", insurance.selectedPack.title);
    formData.append(
      "coverage",
      `${insurance.selectedCoverage?.category} ${insurance.selectedCoverage?.type}`
    );
    formData.append("price", insurance?.selectedCoverage?.price);
    formData.append("name", userInfo.name);
    const hasPaid = userInfo.hasOwnProperty("paymentId");
    formData.append("paymentId ", hasPaid ? userInfo.paymentId : null);
    formData.append("surname", userInfo.surname);
    formData.append("phoneNumber", userInfo?.phoneNumber);

    attachments.forEach((attachment, index) => {
      formData.append("attachments", {
        uri:
          Platform.OS === "ios"
            ? attachment.uri.replace("file://", "")
            : attachment.uri,
        type: attachment.type,
        name: `attachment_${index}`,
      });
    });

    try {
      setLoading(true);
      const response = await apiClient.post("subscription", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response:", response);
      resetState();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { submitSubscription, error };
};
