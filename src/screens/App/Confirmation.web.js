import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../utils/data";
import { height, isTablet } from "../../utils/Styles";
import { isIphone } from "../../utils";
import { useStoreState } from "easy-peasy";
import { ActivityIndicator } from "react-native";
import { STEP1_SCREEN } from "../../navigation/routeNames";
import { submitSubscription } from "../../utils/queries";
import { default as Responsive } from "./Confirmation.js";

const Confirmation = ({ navigation }) => {
  const { insurance, userInfo } = useStoreState((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    // Assuming 'attachments' is an array of attachment files
    const formData = new FormData();
    formData.append("insurance", insurance.selectedPack.title);
    formData.append(
      "coverage",
      `${insurance.selectedCoverage?.category} ${insurance.selectedCoverage?.type}`
    );
    formData.append("paymentId", "0");
    formData.append("price", insurance?.selectedCoverage?.price);
    formData.append("name", userInfo.name);
    formData.append("surname", userInfo.surname);
    formData.append("phoneNumber", userInfo?.phoneNumber);

    // Append each attachment file to the formData
    // attachments.forEach((attachment, index) => {
    //   formData.append(`attachment${index + 1}`, attachment);
    // });

    submitSubscription(formData)
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

  useEffect(() => {
    handleSubmit();

    return () => {
      setIsLoading(true);
    };
  }, [refreshPage]);

  if (!isTablet) return <Responsive navigation={navigation} />;

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
              Félicitations, votre souscription a été prise en compte, merci de
              confirmer votre payement en mettant votre code secret via le SMS
              reçu. Un de nos agents vous contactera.
              {`
          `}
              Merci pour la confiance!
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
        source={require("../../../assets/logocnar.png")}
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
