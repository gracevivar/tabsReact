import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tab from "./src/navigation/Tabs";

const App = props => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};
export default App;
