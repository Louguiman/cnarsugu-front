import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COVERAGES, InsurancePacks } from "../../utils/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { height, isTablet, width } from "../../utils/Styles";
import { AntDesign } from "@expo/vector-icons";
import { isIphone } from "../../utils";
import { ENROLMENT_SCREEN } from "../../navigation/routeNames";
import * as Linking from "expo-linking";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={[styles.btnStart, { marginBottom: 0, marginLeft: 10 }]}
      >
        <AntDesign name="arrowleft" size={40} color="black" />
      </TouchableOpacity>
      <Image
        style={{
          position: "absolute",
          top: 0,
          right: isTablet ? 15 : 0,
          width: isTablet ? 250 : 100,
          height: isTablet ? 100 : 50,
        }}
        resizeMode="contain"
        source={require("../../../assets/logocnar.png")}
      />
    </View>
  );
};

const Footer = ({ navigation, price }) => (
  <View style={styles.footer}>
    <View style={{ justifyContent: "space-evenly" }}>
      <Text adjustsFontSizeToFit style={styles.priceTag}>
        {price}
      </Text>
      <Text adjustsFontSizeToFit style={styles.caption}>
        prix ttc
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate(ENROLMENT_SCREEN)}
      activeOpacity={0.7}
      style={styles.btnSubscribe}
    >
      <AntDesign name="checkcircleo" size={28} color="green" />
      <Text adjustsFontSizeToFit style={styles.btnText1}>
        Souscrire
      </Text>
    </TouchableOpacity>
  </View>
);

const CoverageItem = ({ item }) => (
  <View style={styles.covContainer}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const CoverageNameContainer = ({ name, category }) => {
  return (
    <Text
      adjustsFontSizeToFit allowFontScaling
      style={[styles.headerText, { textAlign: "center", fontSize: 28, maxWidth: !isTablet ? 150 : null }]}
    >
      {name === "Multirisque" ? category : name}
    </Text>
  );
};

const Coverage = ({ route, navigation }) => {
  const { selected, packID } = route.params;
  const [selectedCoverage, setselectedCoverage] = useState(null);
  const [isError, setIsError] = useState(false);
  console.log("selected: ", selected, "Pack: ", packID);
  console.log("selected: ", selectedCoverage);

  useEffect(() => {
    const data = COVERAGES[packID - 1].find((cover) => cover.id === selected);
    console.log("data matched: ", data);
    if (data) setselectedCoverage(data);
    else setIsError(true);
    return () => {
      setselectedCoverage(null);
    };
  }, [selected]);

  if (!selectedCoverage)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={"blue"} size={"large"} />
      </View>
    );
  return (
    <ImageBackground
      style={[
        {
          flex: 1,
        },
      ]}
      resizeMode="cover"
      source={isTablet ? require("../../../assets/bg-onWeb.png") : require("../../../assets/bg-on1.png")}
    >
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {!isError && !selectedCoverage ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size={"large"} color={"blue"} />
          </View>
        ) : !selectedCoverage && isError ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>An error occured, Please Retry Later...</Text>
          </View>
        ) : (
          <View style={{ flex: 1, flexDirection: isTablet ? "row" : "column" }}>
            <View
              style={{
                flex: 1,
                flexDirection: isTablet ? "column" : "row-reverse",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={selectedCoverage.icon}
                style={{
                  width: isTablet ? 300 : height / 7,
                  height: isTablet ? 300 : height / 7,
                  marginBottom: 20,
                }}
                resizeMode="contain"
              />
              <CoverageNameContainer
                name={selectedCoverage.type}
                category={selectedCoverage.category}
              />
            </View>
            <View
              style={{ flex: isTablet ? 1 : 10, padding: 10, paddingLeft: 8, paddingBottom: 0 }}
            >
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingBottom: 180,
                }}
              >
                <View style={styles.card}>
                  <Text
                    adjustsFontSizeToFit
                    allowFontScaling
                    style={styles.title1}
                  >
                    Description
                  </Text>
                  <Text
                    adjustsFontSizeToFit
                    allowFontScaling
                    style={styles.desc}
                  >
                    {selectedCoverage.description}
                  </Text>
                </View>
                <View style={styles.listHeader}>
                  <AntDesign name="appstore-o" size={22} color="white" />
                  <Text
                    adjustsFontSizeToFit
                    style={[styles.title1, { marginLeft: 8, color: "#000" }]}
                  >
                    Les Garanties
                  </Text>
                </View>
                {selectedCoverage.coverage.map((item, index) => (
                  <CoverageItem key={index} item={item} />
                ))}

                {selectedCoverage?.type === "Multirisque" ||
                  selectedCoverage?.type.includes("Formule") ? (
                  <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => {
                      Linking.openURL(selectedCoverage.coverageLink);
                    }}
                  >
                    <Text
                      style={{
                        paddingLeft: 40,
                        textDecorationLine: "underline",
                      }}
                    >
                      Retrouvez la liste des garanties en faisant un clic ici{" "}
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </ScrollView>
              <Footer navigation={navigation} price={selectedCoverage.price} />
            </View>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Coverage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    marginBottom: 20,
    flex: 0.2,
  },
  listHeader: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#00334D",
    width: "95%",
    minHeight: 200,
    alignSelf: "center",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1,
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 120,
    backgroundColor: "rgba(4, 20, 36, .9)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 4,
  },
  headerText: {
    color: "#FFF",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: isIphone ? 14 : 16,
    fontWeight: "600",
    letterSpacing: 1,
    marginLeft: 10,
    marginTop: 8,
  },
  btnStart: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: "40%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
    borderRadius: 18,
  },
  btnSubscribe: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    // width: "40%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    borderRadius: 18,
  },
  title1: {
    color: "#FFF",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
    color: "#FFF",
  },
  desc: { fontWeight: "300", fontSize: 15, color: "white", letterSpacing: 0.8 },
  priceTag: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1,
    color: "#DC0123",
  },
  caption: {
    fontWeight: "400",
    fontSize: 14,
    color: "#d9d9d9",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  covContainer: {
    width: "90%",
    // minHeight: 30,
    justifyContent: "center",
    padding: 1,
    marginLeft: 40,
  },
  itemText: {
    fontWeight: "400",
    fontSize: 13,
    color: "#000",
    textAlign: "left",
    textTransform: "capitalize",
    letterSpacing: 0.8,
  },
  img: {
    width: height / 7,
    height: height / 7,
    position: "absolute",
    right: 10,
    top: 80,
  },
  btnText1: {
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 1,
    // marginRight: 8,
    marginLeft: 10,
  },
});
