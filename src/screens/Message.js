import React from "react";
import { View, Text } from "react-native";

const Message = props => {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Hola Mundo</Text>
    </View>
  );
};

export default Message;
