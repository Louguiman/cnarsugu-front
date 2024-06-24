import axios from "axios";
import apiClient, { apiKey, apiUrl } from "./httpclient";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Platform } from "react-native";
import { useState } from "react";
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

export async function requestPayment(payload) {
  return await apiClient.post("payment", payload);
}

export const useSubmitSubscription = () => {
  const isModalOpen = useStoreState((state) => state.isModalOpen);
  const setModalOpen = useStoreActions((actions) => actions.setModalOpen);
  const setLoading = useStoreActions((actions) => actions.setLoading);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const LogoCnar = require("../../assets/logocnar.png");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { userInfo, insurance, attachments } = useStoreState((state) => ({
    userInfo: state.userInfo,
    insurance: state.insurance,
    attachments: state.attachments,
  }));

  const handleDownloadReceipt = () => {
    const doc = new jsPDF("p", "px", "letter");
    const image = new Image();
    image.src = "../../assets/logocnar.png";
    doc.addImage(LogoCnar, "png", 100, 10, 100, 31);
    doc.text(`Nom: ${userInfo.name}`, 10, 60);
    doc.text(`Prénom: ${userInfo.surname}`, 10, 80);
    doc.text(`Numéro de téléphone: ${userInfo.phoneNumber}`, 10, 100);
    doc.text(`Assurance: ${insurance.selectedPack.title}`, 10, 120);
    doc.text(
      `Couverture: ${insurance.selectedCoverage?.category} ${insurance.selectedCoverage?.type}`,
      10,
      140
    );
    doc.text(`Prix: ${insurance.selectedCoverage?.price}`, 10, 160);
    doc.text(`call center: (+ 223) 20 23 57 57`, 10, 210);
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
    formData.append("paymentId", hasPaid ? userInfo.paymentId : null);
    formData.append("surname", userInfo.surname);
    formData.append("phoneNumber", userInfo?.phoneNumber);

    if (attachments && attachments.length > 0) {
      attachments.forEach((attachment, index) => {
        formData.append(`files`, attachment);
      });
    }

    try {
      setLoading(true);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${apiUrl}/subscription`, true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = (event.loaded / event.total) * 100;
          setProgress(percentCompleted / 100);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 201) {
          const result = JSON.parse(xhr.response);
          console.log("response:", result);
        } else {
          console.error("Error:", xhr.responseText);
          setError(xhr.responseText);
        }
        setLoading(false);
      };

      xhr.onerror = () => {
        console.error("Error:", xhr.responseText);
        setError(xhr.responseText);
        setLoading(false);
      };

      xhr.send(formData);
    } catch (error) {
      console.error("Error:", error);
      setError(error);
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
    progress,
  };
};
