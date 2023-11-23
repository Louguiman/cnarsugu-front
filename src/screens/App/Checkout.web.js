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
import Layout from "../../components/layout/Layout";
import { CONFIRMATION_SCREEN } from "../../navigation/routeNames";
import { PAYMENT_METHOD_DATA } from "../../utils/constants";

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
          top: 0,
          right: 15,
          width: 250,
          height: 100,
          // alignSelf: "center",
        }}
        resizeMode="contain"
        source={require("../../../assets/logocnar.png")}
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
        <Layout
          left={
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
          }
          right={
            <View style={styles.content}>
              {renderPaymentComponent(selectedId)}
            </View>
          }
          rightStyle={{
            marginTop: 180,
          }}
        />

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(CONFIRMATION_SCREEN)}
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
    flex: 0.2,
  },
  banner: {
    flex: 2,
    padding: 8,
    justifyContent: "space-evenly",
  },
  content: {
    flexGrow: 1,
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
