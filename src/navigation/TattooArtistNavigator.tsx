import React from "react";
import RoutesEnum from "./routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootTattooArtistParamList } from "../types/navigation.types";

import CollectionsTattooArtist from "../screens/CollectionsTattooArtist/CollectionsTattooArtist";
import { CreateCollection } from "../screens/CreateCollection/CreateCollection";
import { EditCollection } from "../screens/EditCollection/EditCollection";
import WorksCollection from "../screens/WorksCollection/WorksCollection";
import { CreateWork } from "../screens/CreateWork/CreateWork";
import { EditWork } from "../screens/EditWork/EditWork";

export const TattooArtistNavigator = () => {
  const Stack = createNativeStackNavigator<RootTattooArtistParamList>();
  return (
    <Stack.Navigator
      initialRouteName={RoutesEnum.collections}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={RoutesEnum.collections}
        component={CollectionsTattooArtist}
      />
      <Stack.Screen name={RoutesEnum.create} component={CreateCollection} />
      <Stack.Screen name={RoutesEnum.edit} component={EditCollection} />
      <Stack.Screen name={RoutesEnum.works} component={WorksCollection} />
      <Stack.Screen name={RoutesEnum.creatework} component={CreateWork} />
      <Stack.Screen name={RoutesEnum.editwork} component={EditWork} />
    </Stack.Navigator>
  );
};
