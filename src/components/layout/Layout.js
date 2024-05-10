import { View, Text } from "react-native";
import React from "react";
import { isTablet } from "../../utils/Styles";

const Layout = ({
  left,
  right,
  leftStyle,
  rightStyle,
  isContentCentered = false,
}) => {
  return (
    <View style={{ flex: 1, flexDirection: isTablet ? "row" : "column" }}>
      <View
        style={[
          {
            flex: 1,
            padding: 10,
          },
          leftStyle,
        ]}
      >
        {left}
      </View>
      <View
        style={[
          {
            flex: 1,
          },
          rightStyle,
        ]}
      >
        {right}
      </View>
    </View>
  );
};

export default Layout;
