import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";

export type RootStackParamList = {
  [RoutesEnum.home]: undefined;
  [RoutesEnum.login]: undefined;
};

export type LoginScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.login
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.login
>;

export type HomeScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.home
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.home
>;
