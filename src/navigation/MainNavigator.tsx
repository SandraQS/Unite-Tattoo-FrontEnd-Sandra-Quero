import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutesEnum from "./routes";
import { Login } from "../screens/Login/Login";
import { RootStackParamList } from "../types/navigation.types";
import UniteTattoo from "../screens/UniteTattoo/UniteTattoo";
import Register from "../screens/Register/Register";
import AllWorks from "../screens/AllWorks/AllWorks";
import { BottomNavigator } from "./BottomNavigator";
import CollectionsTattooArtist from "../screens/CollectionsTattooArtist/CollectionsTattooArtist";

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName={RoutesEnum.uniteTatto}>
      <Stack.Screen name={RoutesEnum.uniteTatto} component={UniteTattoo} />

      <Stack.Screen name={RoutesEnum.login} component={Login} />
      <Stack.Screen name={RoutesEnum.register} component={Register} />
      <Stack.Screen name={RoutesEnum.allworks} component={AllWorks} />

      <Stack.Screen name={RoutesEnum.bottomnav} component={BottomNavigator} />
    </Stack.Navigator>
  );
};
