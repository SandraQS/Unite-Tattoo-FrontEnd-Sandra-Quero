import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RoutesEnum from "./routes";
import { RootStackParamList } from "../types/navigation.types";
import { BottomNavigator } from "./BottomNavigator";

import UniteTattoo from "../screens/UniteTattoo/UniteTattoo";
import Register from "../screens/Register/Register";
import AllWorks from "../screens/AllWorks/AllWorks";
import { CreateCollection } from "../screens/CreateCollection/CreateCollection";
import { Login } from "../screens/Login/Login";
import { useUserTattooArtist } from "../hooks/useUserTattooArtist";

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { stateUserTattooArtist } = useUserTattooArtist();

  return stateUserTattooArtist.isAuth ? (
    <Stack.Navigator initialRouteName={RoutesEnum.uniteTatto}>
      <Stack.Screen name={RoutesEnum.uniteTatto} component={UniteTattoo} />

      <Stack.Screen name={RoutesEnum.login} component={Login} />
      <Stack.Screen name={RoutesEnum.register} component={Register} />
      <Stack.Screen name={RoutesEnum.allworks} component={AllWorks} />
      <Stack.Screen name={RoutesEnum.create} component={CreateCollection} />

      <Stack.Screen name={RoutesEnum.bottomnav} component={BottomNavigator} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName={RoutesEnum.bottomnav}>
      <Stack.Screen name={RoutesEnum.create} component={CreateCollection} />
      <Stack.Screen name={RoutesEnum.bottomnav} component={BottomNavigator} />
    </Stack.Navigator>
  );
};
