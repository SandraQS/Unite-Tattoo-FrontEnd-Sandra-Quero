import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/MainNavigator";

const App = () => {
  const a = 34;
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default App;
