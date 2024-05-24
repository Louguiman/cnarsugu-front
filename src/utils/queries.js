import axios from "axios";
import apiClient from "./httpclient";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Platform } from "react-native";
import { useState } from "react";
import { arrangeAttachmentsForSent } from ".";
import { jsPDF } from "jspdf";

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
  const isModalOpen = useStoreState((state) => state.isModalOpen);
  const setModalOpen = useStoreActions((actions) => actions.setModalOpen);
  const setLoading = useStoreActions((actions) => actions.setLoading);
  const [error, setError] = useState(null);

  const openModal = () => {
    console.log("open modal:", isModalOpen);
    setModalOpen(true);
  };
  const closeModal = () => {
    console.log("close modal:", isModalOpen);
    setModalOpen(false);
  };

  const { userInfo, insurance, attachments } = useStoreState((state) => ({
    userInfo: state.userInfo,
    insurance: state.insurance,
    attachments: state.attachments,
  }));

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();
    doc.text(`Nom: ${userInfo.name}`, 10, 10);
    doc.text(`Prénom: ${userInfo.surname}`, 10, 20);
    doc.text(`Numéro de téléphone: ${userInfo.phoneNumber}`, 10, 30);
    doc.text(`Assurance: ${insurance.selectedPack.title}`, 10, 40);
    doc.text(
      `Couverture: ${insurance.selectedCoverage?.category} ${insurance.selectedCoverage?.type}`,
      10,
      50
    );
    doc.text(`Prix: ${insurance.selectedCoverage?.price}`, 10, 60);
    doc.save("receipt.pdf");
  };

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
    if (attachments && attachments.length > 0) {
      attachments.forEach((attachment, index) => {
        formData.append(`attachments[${index}]`, {
          uri: attachment.uri,
          type: attachment.type,
          name: `attachment_${index}`,
        });
      });
    }

    try {
      setLoading(true);
      const response = await apiClient.post("subscription", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response:", response);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    handleDownloadReceipt,
    submitSubscription,
    error,
  };
};
