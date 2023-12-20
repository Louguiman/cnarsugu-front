import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";

const MobileMoneyPayment = ({ phoneNumber, onNumberChange }) => {

  return (
    <View style={{ flex: 1, marginTop:10 }}>
      <TextInput
        label="Numero de Téléphone"
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={onNumberChange}
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
    </View>
  );
};

export default MobileMoneyPayment;

const styles = StyleSheet.create({});
