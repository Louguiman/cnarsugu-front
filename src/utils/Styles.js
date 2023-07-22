import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("screen");
export const isTablet = width > 450;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  containerEven: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    paddingVertical: 0,
    width: "100%",
    height: "100%",
  },
  bgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxes: {
    flex: 1,
    margin: 10,
    elevation: 3,
    borderRadius: 15,
    overflow: "hidden",
  },
  boxBg: {
    flex: 1,
    padding: 10,
    overflow: "hidden",
  },
  loginBox: {
    width: isTablet ? width / 2 : "90%",
    height: height / 2,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 2,
    padding: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: "300",
    margin: 8,
    marginTop: 2,
    letterSpacing: 1.5,
  },
  subHeading1: {
    fontSize: 18,
    fontWeight: "500",
    marginRight: 8,
    alignSelf: "flex-end",
    letterSpacing: 1.5,
  },
  subHeading2: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 18,
    letterSpacing: 1.5,
  },
  subHeading3: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "400",
    color: "black",
    letterSpacing: 1.5,
  },
  subTitle1: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.2,
    lineHeight: 20,
    alignSelf: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
    marginTop: 15,
  },
  h3: {
    fontSize: 15,
    fontWeight: "500",
    margin: 8,
  },
  VDivider: {
    width: 1,
    height: "60%",
    backgroundColor: "white",
    borderRadius: 15,
  },
});

export default styles;
