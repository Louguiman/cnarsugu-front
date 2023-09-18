import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { COLORS } from "../../utils/data";
import { height } from "../../utils/Styles";
import { isIphone } from "../../utils";

const NotAMobileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <View style={styles.content}>
        {" "}
        <Image
          style={styles.imgBg}
          source={require("../../../assets/logocnar.png")}
        />
        <Text adjustsFontSizeToFit style={styles.subHeader}>
          Pour une meilleur expérience utilisateur !{"\n"} Veuillez télécharger
          l'application sur le Google Play Store!{"\n"}
        </Text>
        <Image
          style={{
            width: 300,
            height: 300,
            resizeMode: "contain",
            alignSelf: "center",
            marginBottom: 0,
          }}
          source={require("../../../assets/apps.png")}
        />
      </View>
    </View>
  );
};

export default NotAMobileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#001220" },
  header: {
    flex: 1,
  },
  banner: { flex: 0.25, padding: 8 },
  content: {
    flex: 8,
    padding: 20,
  },
  footer: {
    flex: 2,
    justifyContent: "center",
    padding: 10,
    alignItems: "flex-end",
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
  headerText: {
    color: "#FFF",
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: 26,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 8,
  },
  subHeader: {
    fontWeight: "300",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: 0.8,
    marginLeft: 4,
    textAlign: "center",
  },
  nextBtn: {
    flexDirection: "row",
    maxWidth: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: isIphone ? 14 : 16,
    fontWeight: "500",
    letterSpacing: 1,
  },
  btnIconBox: {
    backgroundColor: COLORS[0],
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    padding: 10,
    marginLeft: 10,
  },
  imgBg: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: 0,
    alignSelf: "center",
    zIndex: -10,
  },
  imgBgXs: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    zIndex: -10,
  },
});
