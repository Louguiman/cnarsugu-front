import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Surface } from "@react-native-material/core";
import { isIphone } from "../utils";
import {
  COVERAGE_SCREEN,
  PRODUCT_SCREEN,
  STEP2_SCREEN,
} from "../navigation/routeNames";
import { getRandomColorFromTenthCHar } from "../utils/getRandomColor";
import { isTablet } from "../utils/Styles";

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
      {id === 2 ? (
        <Text
          adjustsFontSizeToFit
          // numberOfLines={4}
          ellipsizeMode="clip"
          style={[styles.text, { color: "#FFF" }]}
        >
          {name.split(" ")[0]}
          <Text
            adjustsFontSizeToFit
            style={[styles.text, { color: "#FF2400", fontWeight: "500" }]}
          >
            {" "}
            {name.split(" ")[1]}
          </Text>
        </Text>
      ) : (
        <Text
          adjustsFontSizeToFit
          // numberOfLines={4}
          ellipsizeMode="clip"
          style={[styles.text, { color: "#FFF" }]}
        >
          {name}
        </Text>
      )}
      <Text adjustsFontSizeToFit style={[styles.textDesc, { color: "#FFFF" }]}>
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
    minWidth: isTablet ? 550 : 200,
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
    width: !isTablet ? 100 : 200,
    height: !isTablet ? 100 : 200,
    position: "absolute",
    right: 8,
    bottom: 8,
    zIndex: -10,
  },
});
