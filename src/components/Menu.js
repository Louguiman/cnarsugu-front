import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "../utils/Styles";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity style={{elevation:2}} onPress={() => navigation.navigate("Paramètres")}>
        <Ionicons name="ios-settings-outline" size={24} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default Menu;
