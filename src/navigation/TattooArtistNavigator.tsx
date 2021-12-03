import React from "react";
import RoutesEnum from "./routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation.types";

import CollectionsTattooArtist from "../screens/CollectionsTattooArtist/CollectionsTattooArtist";
import { CreateCollection } from "../screens/CreateCollection/CreateCollection";

export const TattooArtistNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName={RoutesEnum.collections}>
      <Stack.Screen
        name={RoutesEnum.collections}
        component={CollectionsTattooArtist}
      />

      <Stack.Screen name={RoutesEnum.create} component={CreateCollection} />
      {/* <Stack.Screen name={RoutesEnum.edit} component={EditCollection} />
      <Stack.Screen name={RoutesEnum.delete} component={Deleteollection} /> */}

      {/* <Stack.Screen name={RoutesEnum.bottomnav} component={BottomNavigator} /> */}
    </Stack.Navigator>
  );
};
