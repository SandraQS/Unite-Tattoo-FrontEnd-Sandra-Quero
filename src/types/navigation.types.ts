import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";

export type RootStackParamList = {
  [RoutesEnum.uniteTatto]: undefined;
  [RoutesEnum.login]: undefined;
  [RoutesEnum.register]: undefined;
  [RoutesEnum.allworks]: undefined;
  [RoutesEnum.collections]: undefined;
  [RoutesEnum.bottomnav]: undefined;
  [RoutesEnum.tattooartistnav]: undefined;
  [RoutesEnum.create]: undefined;
  [RoutesEnum.edit]: undefined;
  [RoutesEnum.works]: { idCollection: string | undefined };
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

export type BottomNavigatorScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.bottomnav
>;

export type BottomNavigatorScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.bottomnav
>;

export type TattooArtistNavigatorScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.tattooartistnav
>;

export type TattooArtistNavigatorScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, RoutesEnum.tattooartistnav>;

export type CreateCollectionScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.create
>;

export type CreateCollectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.create
>;
export type EditCollectionScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.edit
>;

export type EditCollectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.edit
>;
export type WorksCollectionScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.works
>;

export type WorksCollectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.works
>;
