import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { COLORS } from "../utils/data";
import { getRandomNumber, isIphone } from "../utils";
import { COVERAGE_SCREEN } from "../navigation/routeNames";
import getRandomColor, {
  getRandomColorFromTenthCHar,
} from "../utils/getRandomColor";
import { isTablet } from "../utils/Styles";

const CoverageCard = ({
  selectedPack,
  id,
  name,
  price,
  coverage,
  pillBgColor,
  pillTextColor,
  desc,
  category,
  icon,
  navigation,
  handleSelect,
}) => {
  const { backgroundColor, textColor } = useMemo(
    () => getRandomColorFromTenthCHar(name),
    []
  );

  const handleNav = () => {
    handleSelect();
    navigation.navigate(COVERAGE_SCREEN, {
      selected: id,
      packID: selectedPack,
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card, { backgroundColor }]}
      onPress={handleNav}
    >
      <Text style={[styles.text, { color: textColor }]}>{category}</Text>
      <Image source={icon} resizeMode="contain" style={styles.img} />
      <View style={{ marginVertical: 10 }}>
        <Text style={[styles.textDesc, { color: textColor }]}></Text>
      </View>
      <View style={[styles.pillContainer, { backgroundColor: pillBgColor }]}>
        <Text
          adjustsFontSizeToFit
          style={[styles.pillText, { color: pillTextColor }]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoverageCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    minHeight: 200,
    backgroundColor: "#FFF",
    marginVertical: 15,
    borderRadius: 8,
    padding: 10,
    paddingBottom: 25,
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
    fontSize: isIphone ? 16 : 48,
    fontWeight: "400",
    maxWidth: 220,
    textTransform: "uppercase",
  },
  priceTag: {
    fontSize: 16,
    position: "absolute",
    bottom: 8,
    right: 10,
  },
  img: {
    width: !isTablet ? 100 : 150,
    height: !isTablet ? 100 : 150,
    position: "absolute",
    alignSelf: "center",
    right: 20,
  },
  pillContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 18,
    bottom: 0,
    elevation: 4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  pillText: {
    fontSize: isIphone ? 10 : 12,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "white",
  },
  text: {
    fontSize: isIphone ? 14 : 18,
    fontWeight: "500",
    maxWidth: 220,
    textTransform: "uppercase",
  },
  textDesc: {
    fontSize: isIphone ? 10 : 12,
    fontWeight: "300",
    maxWidth: 230,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
});
