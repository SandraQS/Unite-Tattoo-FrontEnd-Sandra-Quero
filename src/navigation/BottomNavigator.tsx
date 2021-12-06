import React from "react";
import RoutesEnum from "./routes";

import { RootTabParamList } from "../types/navigation.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../styles/colors.styles";
import AutoHeightImage from "react-native-auto-height-image";
import { TattooArtistNavigator } from "./TattooArtistNavigator";

export const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <Tab.Navigator
      initialRouteName={RoutesEnum.tattooartistnav}
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
        name={RoutesEnum.tattooartistnav}
        component={TattooArtistNavigator}
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
