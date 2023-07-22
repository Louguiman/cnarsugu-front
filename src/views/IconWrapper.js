import { View, Text, ImageBackground, Image } from "react-native";

const IconWrapper = ({ src, style }) => {
  return (
    <View
      style={[
        { ...style },
        {
          backgroundColor: "white",
          borderRadius: 150,
          elevation: 1,
          padding: 15,
          marginBottom: 15,
          // alignItems: "center",
          // justifyContent: "center",
        },
      ]}
    >
      <Image
        source={src}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default IconWrapper;
