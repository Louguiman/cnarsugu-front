import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

const ReceiptModal = ({
  open,
  onClose,
  userInfo,
  insurance,
  handleDownload,
}) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Modal visible={open} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../../assets/logocnar.png")}
            style={styles.logo}
          />
          <Text style={styles.date}>{currentDate}</Text>
          <Text style={styles.title}>Résumé de la transaction</Text>
          {userInfo?.name && (
            <Text style={styles.text}>Nom: {userInfo.name}</Text>
          )}
          {userInfo?.surname && (
            <Text style={styles.text}>Prénom: {userInfo.surname}</Text>
          )}
          {userInfo?.phoneNumber && (
            <Text style={styles.text}>
              Numéro de téléphone: {userInfo.phoneNumber}
            </Text>
          )}
          {insurance?.selectedPack?.title && (
            <Text style={styles.text}>
              Assurance: {insurance.selectedPack.title}
            </Text>
          )}
          {insurance?.selectedCoverage && (
            <Text style={styles.text}>
              Couverture:{" "}
              {`${insurance.selectedCoverage.category} ${insurance.selectedCoverage.type}`}
            </Text>
          )}
          {insurance?.selectedCoverage?.price && (
            <Text style={styles.text}>
              Prix: {insurance.selectedCoverage.price}
            </Text>
          )}
          <TouchableOpacity style={styles.button} onPress={handleDownload}>
            <Text style={styles.buttonText}>Télécharger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      Platform.OS === "web" ? "rgba(0, 0, 0, 0.5)" : "transparent",
  },
  modalContainer: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: "#666",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "stretch",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ReceiptModal;
