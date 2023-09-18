import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import * as classicStyles from "../../utils/Styles";
import { TERMS_AND_CONDITIONS } from "../../utils/data";
import { APP_STACK_SCREENS } from "../../navigation/routeNames";

// const{}
const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={[
          styles.btnStart,
          { marginBottom: 0, justifyContent: "flex-start", marginLeft: 10 },
        ]}
      >
        <AntDesign name="arrowleft" size={28} color="white" />
        <Text adjustsFontSizeToFit style={styles.btnText}>
          {" "}
          Retour
        </Text>
      </TouchableOpacity>
      {/* <Text adjustsFontSizeToFit style={styles.headerText}>Contrat d'Utilisation</Text> */}
    </View>
  );
};

const Footer = ({ navigation }) => (
  <View style={styles.footer}>
    <TouchableOpacity
      onPress={() => navigation.replace(APP_STACK_SCREENS)}
      activeOpacity={0.7}
      style={styles.btnStart}
    >
      <Text adjustsFontSizeToFit style={styles.btnText}>
        Suivant
      </Text>
      <AntDesign name="arrowright" size={28} color="white" />
    </TouchableOpacity>
  </View>
);

const Terms = ({ navigation }) => {
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
        <Header navigation={navigation} />
        <View style={{ flex: 10 }}>
          <ScrollView
            stickyHeaderIndices={[0]}
            // contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.content}
          >
            <View style={styles.contentHeader}>
              <Text adjustsFontSizeToFit style={styles.title}>
                {TERMS_AND_CONDITIONS.title}
              </Text>
            </View>
            <Text adjustsFontSizeToFit style={styles.body}>
              {TERMS_AND_CONDITIONS.desc}
            </Text>
            {TERMS_AND_CONDITIONS.content.map((item) => (
              <React.Fragment key={item.id}>
                <Text adjustsFontSizeToFit style={styles.contractTitle}>
                  {item.title}
                </Text>
                <Text adjustsFontSizeToFit style={styles.contractDesc}>
                  {item.desc}
                </Text>
              </React.Fragment>
            ))}
            {/* <RenderContract contract={TERMS_AND_CONDITIONS.content} /> */}
            <View style={styles.contentFooter}>
              <Text adjustsFontSizeToFit style={{ fontSize: 11.5 }}>
                En appuyant sur "suivant", vous acceptez les termes du contrat
              </Text>
            </View>
          </ScrollView>
        </View>
        <Footer navigation={navigation} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // backgroundColor: "#FFF",
  },
  header: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 80,
  },
  footer: {
    flex: 1,
  },
  headerText: {
    fontSize: 28,
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
  btnText: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
    marginRight: 8,
  },
  title: {
    // marginTop: 150,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
    color: "#000",
    // textTransform: "capitalize",
  },
  body: { marginVertical: 10, fontSize: 15 },
  contentHeader: {
    // maxHeight: 80,
    minHeight: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderRadius: 4,
    elevation: 4,
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
  contractTitle: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 4,
  },
  contractDesc: {
    fontSize: 15,
    marginBottom: 4,
  },
});
