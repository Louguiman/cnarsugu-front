import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";
import PaypalPayment from "../../views/payment/PaypalPayment";
import CreditCardPayment from "../../views/payment/CreditCardPayment";
import MobileMoneyPayment from "../../views/payment/MobileMoneyPayment";
import { isIphone } from "../../utils";

const DATA = [
  {
    id: 5,
    title: "Carte Bancaire",
  },
  {
    id: 2,
    title: "Orange Money",
  },
  {
    id: 3,
    title: "Moov Money",
  },
  {
    id: 4,
    title: "Wave",
  },
  {
    id: 1,
    title: "Paypal",
  },
];

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
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
};

const renderPaymentComponent = (selectedOption) => {
  switch (selectedOption) {
    case 5:
      return <CreditCardPayment />;
    case 1:
      return <PaypalPayment />;
    case 2:
    case 3:
    case 4:
      return <MobileMoneyPayment />;
    default:
      return null;
  }
};

const Checkout = ({ navigation }) => {
  const [selectedId, setSelectedId] = React.useState(null);

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
            data={DATA}
            horizontal
            contentContainerStyle={{ height: 80, marginTop: 8 }}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
        <View style={styles.content}>{renderPaymentComponent(selectedId)}</View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Confirmation")}
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
    flex: 1.8,
  },
  banner: {
    flex: 2,
    padding: 8,
    justifyContent: "space-evenly",
  },
  content: {
    flex: 6,
    padding: 20,
    paddingTop: 0,
  },
  footer: {
    flex: 1,
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
