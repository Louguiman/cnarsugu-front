import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, COVERAGES, InsurancePacks } from "../../utils/data";
import CoverageCard from "../../components/CoverageCard";
import { isIphone } from "../../utils";
import { useStoreActions } from "easy-peasy";

const DATA = [
  {
    id: 1,
    title: "Tout",
  },
  {
    id: 2,
    title: "3 à 6 CV",
  },
  {
    id: 3,
    title: "7 à 10 CV",
  },
  {
    id: 4,
    title: "11 à 14 CV",
  },
  {
    id: 5,
    title: "15 à 23 CV",
  },
  {
    id: 6,
    title: "24 CV & plus",
  },
];

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={[styles.btnStart, { marginBottom: 0, marginLeft: 10 }]}
        >
          <AntDesign name="arrowleft" size={48} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>choisissez votre couverture </Text>
      </View>
      <Image
        style={{
          position: "absolute",
          top: -25,
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
    <Text adjustsFontSizeToFit style={[styles.filterTitle, textColor]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const Step2 = ({ navigation, route }) => {
  const { selected } = route.params;
  const [selectedFilterId, setSelectedFilterId] = useState(1);
  const [coverages, setCoverages] = useState([]);
  const [Banner, setBanner] = useState({});
  const updateCoverage = useStoreActions((actions) => actions.updateCoverage);

  useEffect(() => {
    setCoverages(COVERAGES[route.params.selected - 1]);
    setBanner(InsurancePacks[route.params.selected - 1]);
    return () => {
      setCoverages([]);
      setBanner({});
    };
  }, [route]);

  useEffect(() => {
    // let currentIndex
    if (!selectedFilterId) return;
    else if (selectedFilterId === 1)
      setCoverages(COVERAGES[route.params.selected - 1]);
    else {
      const selectedFilter = DATA.find(
        (filter) => filter.id === selectedFilterId
      );
      const filteredCoverages = COVERAGES[route.params.selected - 1].filter(
        (cov) => cov.category.includes(selectedFilter.title)
      );
      setCoverages(filteredCoverages);
    }
    // currentIndex
    return () => {};
  }, [selectedFilterId]);

  const renderItem = ({ item, index }) => {
    const pillColor = COLORS[index % COLORS.length];
    const textColor = index % COLORS.length === 2 ? "black" : "white";
    const handleSelect = () => {
      updateCoverage(item);
    };
    return (
      <CoverageCard
        key={item.id}
        id={item.id}
        selectedPack={selected}
        name={item.type}
        coverage={item.coverage}
        desc={item.description}
        icon={item.icon}
        price={item.price}
        category={item.category}
        navigation={navigation}
        pillBgColor={pillColor}
        pillTextColor={textColor}
        handleSelect={handleSelect}
      />
    );
  };

  const renderFilterItem = ({ item }) => {
    const isSelected = item.id === selectedFilterId;
    const backgroundColor = !isSelected ? "transparent" : COLORS[2];
    const color = isSelected ? "black" : "black";
    const borderWidth = isSelected ? 1 : 1;
    const elevation = isSelected ? 4 : 0;

    return (
      <Item
        item={item}
        onPress={() => setSelectedFilterId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        borderWidth={{ borderWidth }}
        elevation={{ elevation }}
      />
    );
  };

  return (
    <ImageBackground
      style={[
        {
          flex: 1,
          // alignItems: "center",
          // justifyContent: "center",
        },
        StyleSheet.absoluteFill,
      ]}
      resizeMode="cover"
      source={Banner && Banner.bg}
    >
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* <Image
              style={{
                width: 450,
                height: 450,
              }}
              resizeMode="contain"
              source={Banner && Banner.icon}
            /> */}
            <Text
              // numberOfLines={1}
              textBreakStrategy="highQuality"
              ellipsizeMode="clip"
              style={[
                styles.headerText,
                {
                  textAlign: "center",
                  fontSize: 44,
                  marginTop: 350,
                  fontFamily: "Montserrat_500Medium",
                },
              ]}
            >
              {Banner && Banner.title}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            {route.params.selected === 1 && (
              <View style={{ flex: 0.15 }}>
                <FlatList
                  data={DATA}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%" }}
                  contentContainerStyle={{
                    marginLeft:20,
                    alignItems: "center",
                  }}
                  renderItem={renderFilterItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedFilterId}
                />
              </View>
            )}
            <FlatList
              data={coverages}
              style={{ flex: 1, width: "80%" }}
              contentContainerStyle={{
                marginLeft: 50,
                padding: 10,
              }}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    marginTop: 20,
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  content: {
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
    color: "#FFF",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: isIphone ? 16 : 20,
    width: 350,
    fontWeight: "600",
    letterSpacing: 1,
    marginLeft: 15,
  },
  btnStart: {
    justifyContent: "flex-end",
    marginRight: 5,
  },
  btnText1: {
    color: "#000",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    marginRight: 8,
  },

  title: {
    // marginTop: 150,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
    color: "#000",
  },
  body: { marginVertical: 10, fontSize: 15 },
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  item: {
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderRadius: 8,
    height: 50,
  },
  filterTitle: {
    fontSize: isIphone ? 12 : 14,
  },
});
