import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../utils/data";
import PaypalPayment from "../../views/payment/PaypalPayment";
import CreditCardPayment from "../../views/payment/CreditCardPayment";
import MobileMoneyPayment from "../../views/payment/MobileMoneyPayment";
import { isIphone, makePhoneCall } from "../../utils";
import { PAYMENT_METHOD_DATA } from "../../utils/constants";
import { useStoreActions, useStoreState } from "easy-peasy";
import { requestPayment } from "../../utils/queries";
import { CONFIRMATION_SCREEN } from "../../navigation/routeNames";
import Toast from "react-native-root-toast";

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  borderWidth,
  elevation,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, backgroundColor, borderWidth, elevation]}
  >
    <Text adjustsFontSizeToFit style={[styles.title, textColor]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

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
          top: -20,
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

const Checkout = ({ navigation }) => {
  const { selectedCoverage } = useStoreState((state) => state.insurance);
  const [selectedId, setSelectedId] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const updateUserInfo = useStoreActions((actions) => actions.updateUserInfo);

  const onNumberChange = (text) => setPhoneNumber(text);
  const renderPaymentComponent = (selectedOption) => {
    switch (selectedOption) {
      case 5:
        return <CreditCardPayment />;
      case 1:
        return <PaypalPayment />;
      case 2:
      case 3:
      case 4:
        return (
          <MobileMoneyPayment
            onNumberChange={onNumberChange}
            phoneNumber={phoneNumber}
          />
        );
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = !isSelected ? "transparent" : COLORS[2];
    const color = isSelected ? "black" : "white";
    const borderWidth = isSelected ? 1 : 1;
    const elevation = isSelected ? 4 : 0;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        borderWidth={{ borderWidth }}
        elevation={{ elevation }}
      />
    );
  };

  const onSubmit = () => {
    const service = PAYMENT_METHOD_DATA.find(
      (service) => service.id === selectedId
    );
    const payload = {
      amount: selectedCoverage?.price,
      phoneNumber,
      serviceCode: service.serviceCode,
    };

    setIsLoading(true);
    requestPayment(payload)
      .then((res) => {
        console.log("res : ", res);
        if (res) {
          if (res.status === 201) {
            makePhoneCall(service.validationCall);
            Toast.show(
              "Suivez les instructions qui vuous seront envoyes pour proceder au paiement",
              { duration: Toast.durations.LONG }
            );
            updateUserInfo({ paymentId: res.data.idFromClient });
            navigation.navigate(CONFIRMATION_SCREEN);
          } else {
            throw new Error("Verifies vos infos, et Re-essayez!");
          }
        }
      })
      .catch((e) => {
        console.log("error occured: ", e);
        Toast.show(e.toString(), {
          duration: Toast.durations.SHORT,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"handled"}
      >
        <Header navigation={navigation} />
        <View style={styles.banner}>
          <Text adjustsFontSizeToFit style={styles.headerText}>
            Paiement
          </Text>
          <Text adjustsFontSizeToFit style={styles.subHeader}>
            Veuillez choisir une méthode de paiement.
          </Text>
          <FlatList
            data={PAYMENT_METHOD_DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ height: 80, marginTop: 8 }}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
        <View style={styles.content}>{renderPaymentComponent(selectedId)}</View>

        <View style={styles.footer}>
          {isLoading ? (
            <ActivityIndicator size={"large"} color={"blue"} />
          ) : (
            <TouchableOpacity
              onPress={onSubmit}
              activeOpacity={0.6}
              style={styles.nextBtn}
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
          source={require("../../../assets/payment3.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#001220", paddingTop: 10 },
  header: {
    flex: 1,
  },
  banner: {
    padding: 8,
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flex: 0.2,
    justifyContent: "flex-end",
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
    width: 280,
    height: 280,
    resizeMode: "contain",
    position: "absolute",
    bottom: 80,
    left: 10,
    zIndex: -10,
  },
  item: {
    padding: 10,
    marginVertical: 18,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderRadius: 8,
    height: 50,
  },
  title: {
    fontSize: isIphone ? 16 : 18,
  },
});
