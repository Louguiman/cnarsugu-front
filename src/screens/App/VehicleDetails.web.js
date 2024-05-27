import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
  Image,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../utils/data";
import { useStoreActions } from "easy-peasy";
import Layout from "../../components/layout/Layout";
import { CHECKOUT_SCREEN } from "../../navigation/routeNames";
import { default as Responsive } from "./VehicleDetails.js";
import { isTablet } from "../../utils/Styles.js";
import { getPermissionAsync, pickImage } from "../../utils/imagesUtils";

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
          right: isTablet ? 15 : 0,
          width: isTablet ? 250 : 100,
          height: isTablet ? 100 : 50,
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
  const [image, setImage] = React.useState(null);
  const updateUserInfo = useStoreActions((actions) => actions.updateUserInfo);
  const addAttachment = useStoreActions((actions) => actions.addAttachment);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const handleNext = () => {
    if (!image) {
      Alert.alert(
        "Informations Incompletes",
        "Veuillez renseigner les champs obligatoires"
      );
      return;
    }
    const extraData = { carteGrise: vehicleNo };
    updateUserInfo({ extraData });
    addAttachment(image);
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
              <Text adjustsFontSizeToFit style={styles.headerText}>
                Vous y êtes presque!
              </Text>
              <Text adjustsFontSizeToFit style={styles.subHeader}>
                Nous aurons besoin de la carte grise du véhicule.
              </Text>
              {/* <Image
                style={styles.imgBg}
                source={require("../../../assets/car2.png")}
              /> */}
            </View>
          }
          rightStyle={styles.content}
          right={
            <View>
              {image && (
                <View style={{ marginBottom: 20 }}>
                  <ExpoImage
                    style={{
                      width: 400,
                      height: 400,
                      alignSelf: "center",
                      borderRadius: 4,
                      marginVertical: 20,
                    }}
                    source={{ uri: image }}
                  />
                </View>
              )}
              <Button
                title="Télécharger ma carte grise"
                onPress={() => pickImage(setImage)}
                style={{ marginTop: 20 }}
              />
            </View>
          }
        />

        <View style={styles.footer}>
          {image && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.nextBtn}
              onPress={handleNext}
            >
              <Text style={styles.btnText}>Suivant</Text>
              <View style={styles.btnIconBox}>
                <AntDesign name="arrowright" size={32} color="white" />
              </View>
            </TouchableOpacity>
          )}
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
    justifyContent: "space-around",
    alignItems: "center",
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
    marginTop: 20,
    bottom: 0,
    right: 10,
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
    position: "absolute",
    bottom: 80,
    left: -50,
    zIndex: -10,
  },
  quickBtn: {
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
