import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";

const MobileMoneyPayment = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <React.Fragment>
      <TextInput
        label="Numero de Téléphone"
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={(text) => setPhoneNumber(text)}
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

export default MobileMoneyPayment;

const styles = StyleSheet.create({});
