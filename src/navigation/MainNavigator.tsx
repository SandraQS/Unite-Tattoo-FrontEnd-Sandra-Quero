import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutesEnum from "./routes";
import { Home } from "../screens/Home/Home";
import { Login } from "../screens/Login/Login";

//mainnavigator
export const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RoutesEnum.home}>
      <Stack.Screen name={RoutesEnum.home} component={Home} />
      <Stack.Screen name={RoutesEnum.login} component={Login} />
    </Stack.Navigator>
  );
};
