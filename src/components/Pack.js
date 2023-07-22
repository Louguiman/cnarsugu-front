import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Surface } from "@react-native-material/core";
import { isIphone } from "../utils";

const Pack = ({ id, name, icon, color, desc, navigation, handleSelect }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.card}
      onPress={() => {
        handleSelect();
        navigation.navigate("Step2", { selected: id });
      }}
    >
      <View style={[styles.pillContainer, { backgroundColor: color }]}>
        <Text adjustsFontSizeToFit style={styles.pillText}>
          Package
        </Text>
      </View>
      <Text adjustsFontSizeToFit numberOfLines={2} ellipsizeMode="clip" style={styles.text}>
        {name}
      </Text>
      <Text adjustsFontSizeToFit style={styles.textDesc}>
        {desc}
      </Text>
      <Image source={icon} resizeMode="cover" style={styles.img} />
    </TouchableOpacity>
  );
};

export default Pack;

const styles = StyleSheet.create({
  card: {
    // flexDirection: "row",
    width: "100%",
    minHeight: 180,
    backgroundColor: "#FFF",
    marginVertical: 8,
    borderRadius: 8,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    elevation: 4,
  },
  text: {
    fontSize: isIphone ? 16 : 20,
    fontWeight: "400",
    maxWidth: 150,
    textTransform: "uppercase",
  },
  textDesc: {
    fontSize: isIphone ? 11 : 12,
    fontWeight: "400",
    maxWidth: 200,
    // textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  pillContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 8,
    top: 8,
    borderRadius: 8,
  },
  pillText: {
    fontSize: isIphone ? 10 : 12,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "white",
  },
  img: {
    width: 150,
    height: 150,
    position: "absolute",
    right: 4,
    bottom: 8,
    zIndex: -10,
  },
});
