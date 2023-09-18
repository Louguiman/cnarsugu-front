import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import * as classicStyles from "../../utils/Styles";
import { InsurancePacks } from "../../utils/data";
import Pack from "../../components/Pack";
import { isIphone } from "../../utils";
import { useStoreActions } from "easy-peasy";

// const{}
const Header = () => {
  return (
    <View style={styles.header}>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.btnText}>
        Nos Formules
      </Text>
      <Text adjustsFontSizeToFit numberOfLines={2} style={styles.btnText}>
        d'assurance
      </Text>
      <Text adjustsFontSizeToFit numberOfLines={2} style={styles.btnText}>
        en ligne
      </Text>
    </View>
  );
};

const Step1 = ({ navigation }) => {
  const updateInsurance = useStoreActions((actions) => actions.updateInsurance);

  return (
    <ImageBackground
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        StyleSheet.absoluteFill,
      ]}
      resizeMode="cover"
      source={require("../../../assets/bg-on1.png")}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <Image
          style={{
            position: "absolute",
            top: classicStyles.height / 18,
            height: classicStyles.width / 2.4,
            width: classicStyles.width / 2.4,
            right: -4,
            zIndex: 100,
          }}
          resizeMode="contain"
          source={require("../../../assets/logocnar.png")}
        />
        <View
          style={{
            flex: 10,
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            paddingVertical: 80,
          }}
        >
          {InsurancePacks.map((item) => {
            const handleSelect = () => {
              updateInsurance(item);
            };
            return (
              <Pack
                key={item.id}
                id={item.id}
                name={item.title}
                color={item.color}
                desc={item.desc}
                icon={item.icon}
                navigation={navigation}
                handleSelect={handleSelect}
              />
            );
          })}

          <Text adjustsFontSizeToFit style={styles.slogan}>
            L'espace{" "}
            <Text
              adjustsFontSizeToFitadjustsFontSizeToFit
              style={styles.sloganAccent}
            >
              d'assurance
            </Text>{" "}
            {"\n"}
            par{" "}
            <Text adjustsFontSizeToFit style={styles.sloganAccent}>
              excellence
            </Text>
          </Text>
        </View>
        {/* <Footer navigation={navigation} /> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // backgroundColor: "#FFF",
  },
  header: {
    marginTop: 20,
    flex: 1,
  },
  content: {
    // flex: 10,
    flexGrow: 1,
    backgroundColor: "#D9D9D9",
    width: "95%",
    alignSelf: "center",
    height: 400,
    borderRadius: 10,
    padding: 10,
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    width: "100%",
    height: 50,
  },
  headerText: {
    fontSize: isIphone ? 24 : 20,
    fontWeight: "400",
    letterSpacing: 1,
  },
  btnStart: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // width: "70%",
    height: 60,
    // backgroundColor: "black",
    // borderColor: "#D3D3D3",

    marginBottom: 20,
    marginRight: 5,
  },
  btnText1: {
    color: "#000",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: isIphone ? 16 : 18,
    fontWeight: "600",
    letterSpacing: 1,
    marginRight: 8,
  },
  btnText: {
    color: "#FFF",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: isIphone ? 16 : 18,

    fontWeight: "600",
    letterSpacing: 1,
    marginLeft: 10,
  },
  title: {
    // marginTop: 150,
    fontSize: isIphone ? 16 : 18,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
    color: "#000",
    // textTransform: "capitalize",
  },
  body: { marginVertical: 10, fontSize: 15 },
  contentHeader: {
    maxHeight: 80,
    minHeight: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderRadius: 4,
  },
  contentFooter: {
    maxHeight: 80,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    // alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  slogan: {
    color: "white",
    textAlign: "center",
    textTransform: "none",
    letterSpacing: 1.2,
    fontSize: isIphone ? 10 : 12,
    // position:'absolute',
    bottom: -classicStyles.height / 20,
    right: -80,
    zIndex: 1000,
    fontWeight: 500,
  },
  sloganAccent: {
    fontSize: isIphone ? 12 : 15,
    color: "yellow",
  },
});
