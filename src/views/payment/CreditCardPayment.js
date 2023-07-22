import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";

const CreditCardPayment = () => {
  const [cardNo, setCardNo] = useState("");
  const [valid, setValid] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setcardName] = useState("");

  return (
    <React.Fragment>
      <TextInput
        label="Numero de carte"
        value={cardNo}
        keyboardType="phone-pad"
        onChangeText={(text) => setCardNo(text)}
        style={{ marginVertical: 8 }}
        labelStyle={{ color: "#ffffff" }}
        theme={{
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            primary: "#00ff00", // color when focused
            accent: COLORS[0], // color when not focused
          },
        }}
      />
      <View style={styles.section}>
        <TextInput
          label="Date d'expiration"
          value={valid}
          placeholder="Mois/Année"
          maxLength={7}
          keyboardType="number-pad"
          onChangeText={(text) => setValid(text)}
          style={styles.inputRow}
          labelStyle={{ color: "#ffffff" }}
          theme={{
            ...defaultTheme,
            colors: {
              ...defaultTheme.colors,
              primary: "#00ff00", // color when focused
              accent: COLORS[0], // color when not focused
            },
          }}
        />
        <TextInput
          label="CVV"
          value={cvv}
          secureTextEntry
          placeholder="***"
          maxLength={3}
          keyboardType="phone-pad"
          onChangeText={(text) => setCvv(text)}
          style={styles.inputRow}
          labelStyle={{ color: "#ffffff" }}
          theme={{
            ...defaultTheme,
            colors: {
              ...defaultTheme.colors,
              primary: "#00ff00", // color when focused
              accent: COLORS[0], // color when not focused
            },
          }}
        />
      </View>
      <TextInput
        label="Titulaire de la carte"
        value={cardName}
        onChangeText={(text) => setcardName(text)}
        style={{ marginVertical: 8 }}
        labelStyle={{ color: "#ffffff" }}
        theme={{
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            primary: "#00ff00", // color when focused
            accent: COLORS[0], // color when not focused
          },
        }}
      />
    </React.Fragment>
  );
};

export default CreditCardPayment;

const styles = StyleSheet.create({
  inputRow: {
    width: "49%",
    marginVertical: 8,
    // margin: 8,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
