import React from "react";
import RoutesEnum from "./routes";
import { Home } from "../screens/Home/Home";
import { Login } from "../screens/Login/Login";
import { RootStackParamList } from "../types/navigation.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//mainnavigator
export const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator initialRouteName={RoutesEnum.home}>
      <Tab.Screen name={RoutesEnum.home} component={Home} />
      <Tab.Screen name={RoutesEnum.login} component={Login} />
    </Tab.Navigator>
  );
};
