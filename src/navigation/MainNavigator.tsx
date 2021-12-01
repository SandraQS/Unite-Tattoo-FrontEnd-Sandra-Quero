import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutesEnum from "./routes";
import { Home } from "../screens/Home/Home";
import { Login } from "../screens/Login/Login";
import { RootStackParamList } from "../types/navigation.types";
import UniteTattoo from "../screens/UniteTattoo/UniteTattoo";

//mainnavigator
export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName={RoutesEnum.uniteTatto}>
      <Stack.Screen name={RoutesEnum.uniteTatto} component={UniteTattoo} />
      <Stack.Screen name={RoutesEnum.home} component={Home} />
      <Stack.Screen name={RoutesEnum.login} component={Login} />
    </Stack.Navigator>
  );
};
