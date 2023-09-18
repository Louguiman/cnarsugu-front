import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../utils/data";
import { height } from "../../utils/Styles";
import { isIphone } from "../../utils";
import { useStoreState } from "easy-peasy";
import axios from "axios";
import { ActivityIndicator } from "react-native";
import { STEP1_SCREEN } from "../../navigation/routeNames";

const Confirmation = ({ navigation }) => {
  const { insurance, userInfo } = useStoreState((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = () => {
    setIsLoading(true);
    const body = {
      insurance: insurance.selectedPack.title,
      coverage: `${insurance.selectedCoverage.category} ${insurance.selectedCoverage.type}`,
      price: insurance.selectedCoverage.price,
      name: userInfo.name,
      surname: userInfo.surname,
      vehicleID: userInfo?.carteGrise,
      phoneNumber: userInfo?.phoneNumber,
    };
    console.log("data: ", body);
    axios
      .post("http://10.0.2.2:3000/api/subscription", body)
      .then((res) => {
        console.log("res :", res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleSubmit();

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Text
          adjustsFontSizeToFit
          style={[styles.headerText, { textAlign: "center" }]}
        >
          Confirmation
        </Text>
      </View>
      <View style={styles.content}>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ActivityIndicator />
            <Text adjustsFontSizeToFit style={styles.subHeader}>
              Votre demande est en cours de traitement.{"\n"}Veuillez patienter!
            </Text>
          </View>
        ) : (
          <>
            <Image
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
                alignSelf: "center",
                marginBottom: 40,
              }}
              source={require("../../../assets/check.png")}
            />
            <Text adjustsFontSizeToFit style={styles.subHeader}>
              Félicitations, votre souscription a été prise en compte. Un de nos
              agents vous contactera pour la suite.{" "}
              {`
          `}
              Merci pour votre confiance!
            </Text>
          </>
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.nextBtn}
          onPress={() => navigation.navigate(STEP1_SCREEN)}
        >
          <Text adjustsFontSizeToFit style={styles.btnText}>
            Retour à l'Accueil
          </Text>
          <View style={styles.btnIconBox}>
            <AntDesign name="logout" size={32} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={height < 650 ? styles.imgBgXs : styles.imgBg}
        source={require("../../../assets/logo.png")}
      />
    </SafeAreaView>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#001220" },
  header: {
    flex: 1.8,
  },
  banner: { flex: 1, padding: 8 },
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
    textAlign: "center",
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
    width: 280,
    height: 280,
    resizeMode: "contain",
    position: "absolute",
    bottom: 60,
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
