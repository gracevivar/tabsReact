import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Message from "../screens/Message";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigator = props => {
  return (
    <Tab.Navigator initialRoute="Message">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={32} color="green" />
          )
        }}
      />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
