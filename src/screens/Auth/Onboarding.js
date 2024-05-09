import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
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
        },
        StyleSheet.absoluteFill,
      ]}
      resizeMode="cover"
      source={require("../../../assets/bg-on1.png")}
    >
      <SafeAreaView style={styles.container}>
        <Image
          style={{
            position: "absolute",
            top: classicStyles.height / 3,
            width: "80%",
            height: "48%",
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={require("../../../assets/logocnar.png")}
        />

        <View style={{ flex: 7, paddingHorizontal: 10, paddingTop: 40 }}>
          <Text adjustsFontSizeToFit style={styles.headerText}>
            Bienvenue {"\n"}sur
          </Text>
        </View>
        <View
          style={{ flex: 3, justifyContent: "flex-end", alignItems: "center" }}
        >
          <Text adjustsFontSizeToFit style={styles.slogan}>
            Annoncez la couleur {"\n"}soyez Bleu!
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(TERMS_AND_CONDITIONS_SCREEN)}
            activeOpacity={0.7}
            style={styles.btnStart}
          >
            <Text adjustsFontSizeToFit style={styles.btnText}>
              Démarrer
            </Text>
            <AntDesign name="arrowright" size={24} color="white" />
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
  headerText: {
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 1,
    color: "#FFF",
  },

  title: {
    marginTop: 125,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "400",
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
    width:classicStyles.isTablet? "70%":"85%",
    height: 60,
    backgroundColor: "#F8F104",
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 1,
    elevation: 4,
    marginBottom: 20,
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
