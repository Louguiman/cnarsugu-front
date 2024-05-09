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
import { default as Responsive } from './TransportationDetails.js'
import { isTablet } from "../../utils/Styles.js";


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

const TransportationDetails = ({ navigation }) => {
  const [image, setImage] = React.useState(null);
  const updateUserInfo = useStoreActions((actions) => actions.updateUserInfo);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please allow access to your camera roll."
        );
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleNext = () => {
    if (!image) {
      Alert.alert(
        "Informations Incompletes",
        "Veuillez renseigner les champs obligatoires"
      );
      return;
    }

    navigation.navigate(CONFIRMATION_SCREEN);
  };
  if (!isTablet) return <Responsive navigation={navigation} />
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
                Nous aurons besoin des documents supplementaires (Facture ou
                Assurance voyage).
              </Text>
              <Image
                style={styles.imgBg}
                source={require("../../../assets/car2.png")}
              />
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
                title="Télécharger Document"
                onPress={pickImage}
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
        <Image
          style={styles.imgBg}
          source={require("../../../assets/contact.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransportationDetails;

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
  quickBtn: {
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
