import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/MainNavigator";
import { BottomNavigator } from "./navigation/BottomNavigator";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </>
  );
};
export default App;
