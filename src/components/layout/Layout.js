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
            
            padding: 10, flexShrink: 1,
          },
          leftStyle,
        ]}
      >
        {left}
      </View>
      <View
        style={[
          {
            flex: 1, flexGrow: 1
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
