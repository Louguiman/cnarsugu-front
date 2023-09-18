import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Surface } from "@react-native-material/core";
import { isIphone } from "../utils";
import { PRODUCT_SCREEN, STEP2_SCREEN } from "../navigation/routeNames";
import getRandomColor from "../utils/getRandomColor";
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
      style={[styles.card, { backgroundColor: getRandomColor(desc) }]}
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
        style={styles.text}
      >
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
    // width: "100%",
    minWidth: 400,
    minHeight: 180,
    backgroundColor: "#FFF",
    marginVertical: 10,
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
