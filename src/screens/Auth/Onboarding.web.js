import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import * as classicStyles from "../../utils/Styles";
import {
  TERMS_AND_CONDITIONS,
  TERMS_AND_CONDITIONS_SCREEN,
} from "../../navigation/routeNames";

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground
      style={[
        {
          flex: 1,
          // alignItems: "center",
          // justifyContent: "center",
        },
      ]}
      resizeMode="cover"
      resizeMethod="scale"
      source={require("../../../assets/bg.jpg")}
    >
      <SafeAreaView style={styles.container}>
        <View styles={styles.frame}>
          <View style={styles.singleFrame}>
            {/* <Image
              style={{
                position: "absolute",
                top: 400,
                width: 300,
                height: 300,
                left: 0,
                alignSelf: "center",
              }}
              resizeMode="contain"
              source={require("../../../assets/bg-3.png")}
            /> */}
            {/* <Text
              adjustsFontSizeToFit
              style={[styles.slogan, { top: -100, left: 0 }]}
            >
              Annoncez la couleur {"\n"}soyez Bleu!
            </Text> */}
            <animatable.Image
              animation="fadeInDown"
              easing="ease-out"
              style={{
                position: "absolute",
                top: 240,
                width: 400,
                height: 400,
                alignSelf: "center",
              }}
              resizeMode="contain"
              source={require("../../../assets/logocnar.png")}
            />
          </View>
          <View style={styles.singleFrame}>
            {/* <Image
              style={{
                position: "absolute",
                top: 350,
                width: 400,
                height: 400,
                right: 0,
                alignSelf: "center",
              }}
              resizeMode="contain"
              source={require("../../../assets/bg-2.png")}
            /> */}
          </View>
        </View>
        <animatable.Image
          animation="fadeInRight"
          easing="ease-out"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "20%",
            height: "20%",
            // alignSelf: "center",
          }}
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
        />

        <View style={{ flex: 7, paddingHorizontal: 10, paddingTop: 40 }}>
          <animatable.Text
            delay={500}
            animation="fadeInLeft"
            easing="ease-out"
            adjustsFontSizeToFit
            style={styles.headerText}
          >
            Bienvenue {"\n"}sur
          </animatable.Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(TERMS_AND_CONDITIONS_SCREEN)}
            activeOpacity={0.7}
            style={styles.btnStart}
          >
            <Text adjustsFontSizeToFit style={styles.btnText}>
              Démarrer
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFF",
  },
  frame: {
    position: "absolute",
    backgroundColor: "red",
    flex: 1,
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    zIndex: 1000,
    width: classicStyles.width,
    height: classicStyles.height,
    flexDirection: "row",
  },
  singleFrame: {
    flex: 1,
  },
  headerText: {
    fontSize: 64,
    fontWeight: "400",
    letterSpacing: 1,
    color: "#000",
    marginLeft: 10,
    marginTop: 20,
  },

  title: {
    marginTop: 100,
    fontSize: 48,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
    color: "#000",
    // textTransform: "capitalize",
  },
  caption: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.9,
  },
  btnStart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   width: "50%",
    height: 60,
    backgroundColor: "#F8F104",
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 1,
    elevation: 4,
    marginTop: 20,
  },
  btnText: {
    color: "#000",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    marginRight: 8,
  },
  slogan: {
    color: "lightblue",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontSize: 10,
    // position:'absolute',
    bottom: classicStyles.height / 50,
    right: -100,
    zIndex: 1000,
  },
});
