import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../utils/data";
import { getRandomNumber, isIphone } from "../utils";
import { COVERAGE_SCREEN } from "../navigation/routeNames";
import getRandomColor, { getRandomColorFromTenthCHar } from "../utils/getRandomColor";

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
  const { backgroundColor, textColor } = getRandomColorFromTenthCHar(category);

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
      <Text adjustsFontSizeToFit style={[styles.text, { color: textColor }]}>
        {name}
      </Text>
      <Image source={icon} resizeMode="contain" style={styles.img} />
      <View style={{ marginVertical: 10 }}>
        {coverage.map((cov, index) => (
          <Text
            key={`cov-${index}`}
            adjustsFontSizeToFitkey={`cov-${index}`}
            style={[styles.textDesc, { color: textColor }]}
          >
            {cov}
          </Text>
        ))}
      </View>
      <View style={[styles.pillContainer, { backgroundColor: pillBgColor }]}>
        <Text
          adjustsFontSizeToFit
          style={[styles.pillText, { color: pillTextColor }]}
        >
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoverageCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
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
    fontSize: isIphone ? 14 : 16,
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
    width: 100,
    height: 100,
    position: "absolute",
    right: 8,
    top: 10,
    bottom: 0,
  },
  pillContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 8,
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
