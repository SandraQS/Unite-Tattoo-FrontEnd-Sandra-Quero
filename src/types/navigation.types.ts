import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";

export type RootStackParamList = {
  [RoutesEnum.uniteTatto]: undefined;
  [RoutesEnum.login]: undefined;
  [RoutesEnum.register]: undefined;
  [RoutesEnum.allworks]: undefined;
  [RoutesEnum.collections]: undefined;
};

export type UniteTattooScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.uniteTatto
>;

export type UniteTattooScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.uniteTatto
>;

export type LoginScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.login
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.login
>;

export type RegisterScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.register
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.register
>;

export type AllWorksScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.allworks
>;

export type AllWorksScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.allworks
>;
export type CollectionsTattooArtistScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.collections
>;

export type CollectionsTattooArtistScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, RoutesEnum.collections>;
