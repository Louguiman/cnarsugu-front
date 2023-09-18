import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";

const PaypalPayment = () => {
  const [email, setEmail] = React.useState("");
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        label="Adresse mail"
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
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

export default PaypalPayment;

const styles = StyleSheet.create({});
