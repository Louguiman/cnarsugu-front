import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, defaultTheme } from "@react-native-material/core";
import { COLORS } from "../../utils/data";
import { isIphone } from "../../utils";
import { useStoreActions, useStoreState } from "easy-peasy";
import { SERVICE_CLIENT_TYPES } from "../../utils/constants";
import { CONTACT_SCREEN } from "../../navigation/routeNames";
import { useNavigation } from "@react-navigation/core";

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

const Enrolment = ({ }) => {
  const [clientTypes, setClientTypes] = useState(null);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [selectedId, setSelectedId] = React.useState(null);
  const [companyName, setCompanyName] = React.useState("");
  const [address, setAddress] = useState("");
  const [activity, setActivity] = useState("");
  const [owner, setOwner] = useState("");
  const navigation = useNavigation()
  const { insurance } = useStoreState((state) => state);
  const { selectedCoverage, selectedPack } = insurance;
  const updateUserInfo = useStoreActions((actions) => actions.updateUserInfo);
  console.log("insurance: ", insurance);
  console.log("client types: ", clientTypes);
  useEffect(() => {
    const typesList = [];
    if (selectedPack.type == "Produit") {
      if (selectedPack.clientType) {
        typesList.push(SERVICE_CLIENT_TYPES[selectedPack.clientType - 1]);
      } else typesList.push(...SERVICE_CLIENT_TYPES);
    } else if (selectedCoverage?.clientType === 1)
      typesList?.push(SERVICE_CLIENT_TYPES[0]);
    else if (selectedCoverage?.clientType === 2)
      typesList.push(SERVICE_CLIENT_TYPES[1]);
    else typesList.push(...SERVICE_CLIENT_TYPES);
    setSelectedId(typesList[0].id);
    setClientTypes(typesList);

    return () => {
      setClientTypes(null);
    };
  }, [selectedCoverage, selectedPack]);

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
  const handleNext = useCallback(() => {
    if (
      (selectedId === 1 && (!name || !surname)) ||
      (selectedId === 2 && (!companyName || !address))
    ) {
      Alert.alert(
        "Informations Incompletes",
        "Veuillez renseigner les champs obligatoires"
      );
      return;
    }
    updateUserInfo({ name, surname });
    navigation.navigate(CONTACT_SCREEN);
  }, [selectedId, companyName, address, name, surname]);

  const isActivityField = useMemo(
    () => (selectedCoverage?.extraFields?.includes("activity") ? true : false),
    [selectedCoverage]
  );
  const isShopField = useMemo(
    () => (selectedCoverage?.extraFields?.includes("shop") ? true : false),
    [selectedCoverage]
  );

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
            Informations Personnelles
          </Text>
          <Text adjustsFontSizeToFit style={styles.subHeader}>
            Veuillez renseigner les champs suivants qui serviront à procéder à
            votre souscription.
          </Text>
        </View>
        <View style={styles.content}>
          {clientTypes && (
            <FlatList
              data={clientTypes}
              horizontal
              contentContainerStyle={{ height: 80, marginTop: 8 }}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          )}
          {selectedId === 1 ? (
            <>
              <TextInput
                label="Nom"
                value={name}
                onChangeText={(text) => setName(text)}
                style={{ marginVertical: 8 }}
                labelStyle={{ color: "#ffffff" }}
                theme={{
                  ...defaultTheme,
                  colors: {
                    ...defaultTheme.colors,
                    primary: "#ff0000", // color when focused
                    accent: "#00ff00", // color when not focused
                  },
                }}
              />
              <TextInput
                label="Prénom"
                value={surname}
                style={{ marginVertical: 8 }}
                onChangeText={(text) => setSurname(text)}
                theme={{
                  ...defaultTheme,
                  colors: {
                    ...defaultTheme.colors,
                    primary: "#ff0000", // color when focused
                    accent: "#00ff00", // color when not focused
                  },
                }}
              />
              {isActivityField && (
                <TextInput
                  label="Activité"
                  value={activity}
                  style={{ marginVertical: 8 }}
                  onChangeText={(text) => setActivity(text)}
                  theme={{
                    ...defaultTheme,
                    colors: {
                      ...defaultTheme.colors,
                      primary: "#ff0000", // color when focused
                      accent: "#00ff00", // color when not focused
                    },
                  }}
                />
              )}
            </>
          ) : selectedId === 2 ? (
            <>
              <TextInput
                label={`Nom de la ${isShopField ? "Boutique" : "Société"}`}
                value={companyName}
                onChangeText={(text) => setCompanyName(text)}
                style={{ marginVertical: 8 }}
                labelStyle={{ color: "#ffffff" }}
                theme={{
                  ...defaultTheme,
                  colors: {
                    ...defaultTheme.colors,
                    primary: "#ff0000", // color when focused
                    accent: "#00ff00", // color when not focused
                  },
                }}
              />
              {isShopField && (
                <TextInput
                  label="Nom du Propriétaire"
                  value={owner}
                  style={{ marginVertical: 8 }}
                  onChangeText={(text) => setOwner(text)}
                  theme={{
                    ...defaultTheme,
                    colors: {
                      ...defaultTheme.colors,
                      primary: "#ff0000", // color when focused
                      accent: "#00ff00", // color when not focused
                    },
                  }}
                />
              )}
              {isActivityField && (
                <TextInput
                  label="Activité"
                  value={activity}
                  style={{ marginVertical: 8 }}
                  onChangeText={(text) => setActivity(text)}
                  theme={{
                    ...defaultTheme,
                    colors: {
                      ...defaultTheme.colors,
                      primary: "#ff0000", // color when focused
                      accent: "#00ff00", // color when not focused
                    },
                  }}
                />
              )}
              <TextInput
                label="Adresse"
                value={address}
                style={{ marginVertical: 8 }}
                onChangeText={(text) => setAddress(text)}
                theme={{
                  ...defaultTheme,
                  colors: {
                    ...defaultTheme.colors,
                    primary: "#ff0000", // color when focused
                    accent: "#00ff00", // color when not focused
                  },
                }}
              />
            </>
          ) : null}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Enrolment;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#001220" },
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
    paddingBottom: 0,
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
    fontSize: isIphone ? 24 : 26,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 8,
  },
  subHeader: {
    fontWeight: "300",
    fontSize: isIphone ? 16 : 18,
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
    left: -50,
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
