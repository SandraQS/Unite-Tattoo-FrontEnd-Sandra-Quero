import React from "react";
import RoutesEnum from "./routes";

import { RootStackParamList } from "../types/navigation.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CollectionsTattooArtist from "../screens/CollectionsTattooArtist/CollectionsTattooArtist";
import { colors } from "../styles/colors.styles";
import AutoHeightImage from "react-native-auto-height-image";
import { TouchableOpacity } from "react-native";
import Register from "../screens/Register/Register";

//mainnavigator
export const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      initialRouteName={RoutesEnum.collections}
      screenOptions={{
        tabBarActiveTintColor: colors.darkBrown,
        tabBarInactiveTintColor: colors.lightBrown,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopColor: colors.mediumBrown,
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name={RoutesEnum.collections}
        component={CollectionsTattooArtist}
        options={{
          tabBarAccessibilityLabel: "Colecciones",
          title: "Colecciones",
          tabBarIcon: () => (
            <AutoHeightImage
              width={30}
              source={require("../assets/nav-icono-colecciones.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
