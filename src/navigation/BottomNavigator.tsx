import React from "react";
import RoutesEnum from "./routes";
import { Login } from "../screens/Login/Login";

import { RootStackParamList } from "../types/navigation.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CollectionsTattooArtist from "../screens/CollectionsTattooArtist/CollectionsTattooArtist";

//mainnavigator
export const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator initialRouteName={RoutesEnum.uniteTatto}>
      <Tab.Screen name={RoutesEnum.collections} component={CollectionsTattooArtist} />
    </Tab.Navigator>
  );
};
