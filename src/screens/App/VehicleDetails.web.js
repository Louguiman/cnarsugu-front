import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";
import { useStoreActions, useStoreState } from "easy-peasy";
import Layout from "../../components/layout/Layout";
import { CHECKOUT_SCREEN } from "../../navigation/routeNames";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={[styles.btnStart, { marginBottom: 0, marginLeft: 10 }]}
      >
        <AntDesign name="arrowleft" size={48} color="black" />
      </TouchableOpacity>
      <Image
        style={{
          position: "absolute",
          top: -25,
          right: -15,
          width: 350,
          height: 150,
          // alignSelf: "center",
        }}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
};

const VehicleDetails = ({ navigation }) => {
  const [vehicleNo, setVehicleNo] = React.useState("");
  const updateUserInfo = useStoreActions((actions) => actions.updateUserInfo);

  const handleNext = () => {
    if (!vehicleNo) {
      Alert.alert(
        "Informations Incompletes",
        "Veuillez renseigner les champs obligatoires"
      );
      return;
    }
    updateUserInfo({ carteGrise: vehicleNo });

    navigation.navigate(CHECKOUT_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        keyboardDismissMode="interactive"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header navigation={navigation} />
        <Layout
          left={
            <View style={styles.banner}>
              <Text
                adjustsFontSizeToFitadjustsFontSizeToFit
                style={styles.headerText}
              >
                Vous y êtes presque!
              </Text>
              <Text
                adjustsFontSizeToFitadjustsFontSizeToFit
                style={styles.subHeader}
              >
                Nous aurons besoin de la carte grise du véhicule.
              </Text>
              <Image
                style={styles.imgBg}
                source={require("../../../assets/car2.png")}
              />
            </View>
          }
          right={
            <View style={styles.content}>
              <TextInput
                label="Carte Grise"
                value={vehicleNo}
                onChangeText={(text) => setVehicleNo(text)}
                style={{ marginVertical: 8, marginTop: 150 }}
                labelStyle={{ color: "#ffffff" }}
                theme={{
                  ...defaultTheme,
                  colors: {
                    ...defaultTheme.colors,
                    primary: "#00ff00", // color when focused
                    accent: COLORS[0], // color when not focused
                  },
                }}
              />
            </View>
          }
        />

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.nextBtn}
            onPress={handleNext}
          >
            <Text
              adjustsFontSizeToFitadjustsFontSizeToFitstyle={styles.btnText}
            >
              Suivant
            </Text>
            <View style={styles.btnIconBox}>
              <AntDesign name="arrowright" size={32} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#001220", paddingTop: 10 },
  header: {
    paddingTop: 10,
  },
  banner: { marginVertical: 10, padding: 8 },
  content: {
    padding: 20,
    paddingTop: 0,
    marginVertical: 10,
  },
  footer: {
    justifyContent: "center",
    padding: 10,
    alignItems: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 10,
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
  },
  nextBtn: {
    flexDirection: "row",
    maxWidth: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 60,
  },
  btnText: {
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 18,
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
    width: 350,
    height: 350,
    resizeMode: "contain",
    // position: "absolute",
    // bottom: 80,
    // left: -50,
    marginTop: 150,
    zIndex: -10,
  },
});
