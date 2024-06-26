import React, { useEffect, useMemo, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  // Image,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import { Image } from "expo-image";
import BottomSheet from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../utils/data";
import { useStoreActions } from "easy-peasy";
import { DEVIS_SCREEN } from "../../navigation/routeNames";
import {
  getPermissionAsync,
  pickImage,
  takePhoto,
} from "../../utils/imagesUtils";

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
          top: -10,
          height: 100,
          width: 100,
          right: 15,
          zIndex: 100,
        }}
        resizeMode="contain"
        source={require("../../../assets/logocnar.png")}
      />
    </View>
  );
};

const TransportationDetails = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const [image, setImage] = React.useState(null);
  const addAttachment = useStoreActions((actions) => actions.addAttachment);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  useEffect(() => {
    image && handleClosePress();
    return () => {};
  }, [image]);

  const snapPoints = useMemo(() => ["15%", "50%"], []);

  const handleNext = () => {
    if (!image) {
      Alert.alert(
        "Informations Incompletes",
        "Veuillez renseigner les champs obligatoires"
      );
      return;
    }
    addAttachment(image);
    navigation.navigate(DEVIS_SCREEN);
  };

  const handleClosePress = () => bottomSheetRef.current.close();
  const handleOpenPress = () => bottomSheetRef.current.snapToIndex(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        keyboardDismissMode="interactive"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header navigation={navigation} />
        <View style={styles.banner}>
          <Text adjustsFontSizeToFit style={styles.headerText}>
            Vous y êtes presque!
          </Text>
          <Text adjustsFontSizeToFit style={styles.subHeader}>
            Nous aurons besoin des documents supplementaires (Facture ou
            Assurance voyage).
          </Text>
        </View>
        <View style={styles.content}>
          {image && (
            <Image
              style={{
                width: 200,
                height: 200,
                alignSelf: "center",
                borderRadius: 4,
                marginVertical: 10,
              }}
              source={{ uri: image }}
            />
          )}
          <Button title="Télécharger Document" onPress={handleOpenPress} />
        </View>
        <View style={styles.footer}>
          {image && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.nextBtn}
              onPress={handleNext}
            >
              <Text adjustsFontSizeToFit style={styles.btnText}>
                Suivant
              </Text>
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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={styles.quickBtn}
            activeOpacity={0.6}
            onPress={() => takePhoto(setImage)}
          >
            <AntDesign name="camerao" size={48} color="black" />
            <Text style={styles.quickBtnText}>Prendre une photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickBtn}
            activeOpacity={0.6}
            onPress={() => pickImage(setImage)}
          >
            <AntDesign name="picture" size={48} color="black" />
            <Text style={styles.quickBtnText}>Choisir une image</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
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
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    left: 10,
    zIndex: -10,
  },
  quickBtn: {
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
