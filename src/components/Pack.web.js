import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Surface } from "@react-native-material/core";
import { isIphone } from "../utils";
import {
  COVERAGE_SCREEN,
  PRODUCT_SCREEN,
  STEP2_SCREEN,
} from "../navigation/routeNames";
import getRandomColor, {
  getRandomColorFromTenthCHar,
} from "../utils/getRandomColor";

const Pack = ({
  id,
  name,
  icon,
  color,
  desc,
  navigation,
  handleSelect,
  type,
}) => {
  const { backgroundColor, textColor } = getRandomColorFromTenthCHar(desc);
  console.log(`back ${name}: `, backgroundColor, " / ", textColor);
  const onCardPress = () => {
    handleSelect();
    if (type == "package") {
      navigation.navigate(STEP2_SCREEN, { selected: id });
    } else {
      navigation.navigate(PRODUCT_SCREEN, { selected: id });
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.card, { backgroundColor }]}
      onPress={onCardPress}
    >
      <View style={[styles.pillContainer, { backgroundColor: color }]}>
        <Text adjustsFontSizeToFit style={styles.pillText}>
          {type}
        </Text>
      </View>
      <Text
        adjustsFontSizeToFit
        numberOfLines={2}
        ellipsizeMode="clip"
        style={[styles.text, { color: textColor }]}
      >
        {name}
      </Text>
      <Text
        adjustsFontSizeToFit
        style={[styles.textDesc, { color: textColor }]}
      >
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
    flex: 1,
    flexGrow: 1,
    minWidth: 550,
    maxWidth: 700,
    minHeight: 250,
    backgroundColor: "#FFF",
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    fontSize: isIphone ? 16 : 22,
    fontWeight: "500",
    maxWidth: 350,
    textTransform: "uppercase",
  },
  textDesc: {
    fontSize: isIphone ? 11 : 14,
    fontWeight: "400",
    maxWidth: 300,
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
    fontSize: isIphone ? 10 : 14,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "white",
  },
  img: {
    width: 200,
    height: 200,
    position: "absolute",
    right: 8,
    bottom: 8,
    zIndex: -10,
  },
});
