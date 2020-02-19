import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Message from "../screens/Message";

const Tab = createBottomTabNavigator();
const TabNavigator = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
