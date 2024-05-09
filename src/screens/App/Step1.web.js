import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import * as classicStyles from "../../utils/Styles";
import { InsurancePacks } from "../../utils/data";
import Pack from "../../components/Pack";
import { isIphone } from "../../utils";
import { useStoreActions } from "easy-peasy";
import { MaterialIcons } from "@expo/vector-icons";
import { default as Responsive } from './Step1.js'

// const{}
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.btnText}>
          Nos Formules
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={2} style={styles.btnText}>
          d'assurance
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={2} style={styles.btnText}>
          en ligne
        </Text>
        <View
          style={{
            marginBottom: 10,
            position: "relative",
            left: 5,
            top: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="support-agent" size={20} color="black" />
          <Text adjustsFontSizeToFit style={styles.contactText}>
            (+ 223) 20 23 57 57
          </Text>
        </View>
      </View>

      <Image
        style={{
          position: "absolute",
          top: -25,
          right: classicStyles.isTablet ? 15 : -10,
          right: classicStyles.isTablet ? 15 : 0,
          width: classicStyles.isTablet ? 250 : 100,
          height: classicStyles.isTablet ? 100 : 50,
        }}
        resizeMode="contain"
        source={require("../../../assets/logocnar.png")}
      />
    </View>
  );
};
const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", left: 20 }}>
      {Array(4).map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              position: "absolute",
              left: 50,
              top: classicStyles.height / 2 - 12 * 4,
              height: 8,
              width: 10,
              borderRadius: 3,
              backgroundColor: "#333",
              opacity,
              margin: 5,
              transform: [
                {
                  scale,
                },
              ],
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};
const Step1 = ({ navigation }) => {
  const updateInsurance = useStoreActions((actions) => actions.updateInsurance);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  if (!classicStyles.isTablet) return <Responsive navigation={navigation} />
  return (
    <ImageBackground
      source={require("../../../assets/bg-onWeb.png")}
      imageStyle={{ resizeMode: "cover" }}
      style={[
        {
          flex: 1,
          overflow: "hidden",
        },
        StyleSheet.absoluteFill,
      ]}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <Animated.FlatList
          style={{
            flex: 7,
            marginTop: 20,
          }}
          contentContainerStyle={{
            // alignSelf: "center",
            // backgroundColor: "red",
            // overflow: "scroll",
            justifyContent: "center",
            alignItems: "center",
          }}
          data={InsurancePacks}
          numColumns={classicStyles.isTablet ? 2 : 1}
          renderItem={({ item }) => {
            const handleSelect = () => {
              updateInsurance(item);
            };
            return (
              <Pack
                key={item.id}
                id={item.id}
                name={item.title}
                color={item.color}
                desc={item.desc}
                type={item.type}
                icon={item.icon}
                navigation={navigation}
                handleSelect={handleSelect}
              />
            );
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        <Indicator scrollX={scrollX} />
        {/* spacer */}
        <View style={{ flex: 1 }} />
        <View style={{ position: "absolute", left: 0, bottom: 50 }}>
          <Text adjustsFontSizeToFit style={styles.slogan}>
            L'espace{" "}
            <Text adjustsFontSizeToFit style={styles.sloganAccent}>
              d'assurance
            </Text>{" "}
            {"\n"}
            par{" "}
            <Text adjustsFontSizeToFit style={styles.sloganAccent}>
              excellence
            </Text>
          </Text>
        </View>
        {/* <Footer navigation={navigation} /> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // backgroundColor: "#FFF",
  },
  header: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  subHeader: {
    fontWeight: "300",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: 0.8,
    marginLeft: 4,
  },
  contactText: {
    fontWeight: "300",
    fontSize: isIphone ? 10 : 12,
    color: "lightgrey",
    letterSpacing: 0.8,
    marginLeft: 4,
  },
  content: {
    // flex: 10,
    flexGrow: 1,
    backgroundColor: "#D9D9D9",
    width: "95%",
    alignSelf: "center",
    height: 400,
    borderRadius: 10,
    padding: 10,
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    width: "100%",
    height: 50,
  },
  headerText: {
    fontSize: isIphone ? 24 : 20,
    fontWeight: "400",
    letterSpacing: 1,
  },
  btnStart: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // width: "70%",
    height: 60,
    // backgroundColor: "black",
    // borderColor: "#D3D3D3",

    marginBottom: 20,
    marginRight: 5,
  },
  btnText1: {
    color: "#000",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: isIphone ? 16 : 18,
    fontWeight: "600",
    letterSpacing: 1,
    marginRight: 8,
  },
  btnText: {
    color: "#FFF",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: isIphone ? 16 : 20,
    fontWeight: "600",
    letterSpacing: 1,
    marginLeft: 10,
  },
  title: {
    // marginTop: 150,
    fontSize: isIphone ? 16 : 20,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
    color: "#000",
    // textTransform: "capitalize",
  },
  body: { marginVertical: 10, fontSize: 17 },
  contentHeader: {
    maxHeight: 80,
    minHeight: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderRadius: 4,
  },
  contentFooter: {
    maxHeight: 80,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    // alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  slogan: {
    color: "white",
    textAlign: "center",
    textTransform: "none",
    letterSpacing: 1.2,
    fontSize: isIphone ? 10 : 14,
    // position:'absolute',
    bottom: -classicStyles.height / 20,
    right: -80,
    zIndex: 1000,
    fontWeight: 500,
  },
  sloganAccent: {
    fontSize: isIphone ? 12 : 17,
    color: "yellow",
  },
});
