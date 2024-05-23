import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { isIphone } from "../utils";
import { PRODUCT_SCREEN, STEP2_SCREEN } from "../navigation/routeNames";
import { getRandomColorFromTenthCHar } from "../utils/getRandomColor";
import * as classicStyles from "../utils/Styles";

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
        <Text style={styles.pillText}>{type}</Text>
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
      <Text style={[styles.textDesc, { color: "#FFF" }]}>{desc}</Text>
      <Image source={icon} resizeMode="cover" style={styles.img} />
    </TouchableOpacity>
  );
};

export default Pack;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "#FFF",
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    elevation: 0,
  },
  text: {
    fontSize: isIphone ? 16 : 20,
    fontWeight: "400",
    maxWidth: classicStyles.width > 350 ? 280 : 180,
    textTransform: "uppercase",
  },
  textDesc: {
    fontSize: isIphone ? 12 : 13,
    fontWeight: "400",
    maxWidth: classicStyles.width > 350 ? 230 : 200,
    textTransform: "uppercase",
    letterSpacing: 0.9,
    marginVertical: 20,
  },
  pillContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
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
    width: !classicStyles.isTablet ? 100 : 150,
    height: !classicStyles.isTablet ? 100 : 150,
    position: "absolute",
    right: 0,
    bottom: 8,
    zIndex: -10,
  },
});
