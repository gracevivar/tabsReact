import React from "react";
import { View } from "react-native";

const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch"
      }}
    >
      <View
        style={{ height: 100, width: 100, backgroundColor: "powderblue" }}
      />
      <View style={{ height: 100, backgroundColor: "skyblue" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "steelblue" }} />
    </View>
  );
};
export default Home;
