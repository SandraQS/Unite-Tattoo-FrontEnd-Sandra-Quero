import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";
import { ICollection, IWork } from "./interfacesComponent";

export type RootStackParamList = {
  [RoutesEnum.uniteTatto]: undefined;
  [RoutesEnum.login]: undefined;
  [RoutesEnum.register]: undefined;
  [RoutesEnum.allworks]: undefined;
  [RoutesEnum.bottomnav]: undefined;
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

export type BottomNavigatorScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.bottomnav
>;

export type BottomNavigatorScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.bottomnav
>;

export type RootTabParamList = {
  [RoutesEnum.tattooartistnav]: undefined;
};

export type TattooArtistNavigatorScreenRouteProp = RouteProp<
  RootTabParamList,
  RoutesEnum.tattooartistnav
>;

export type TattooArtistNavigatorScreenNavigationProp =
  NativeStackNavigationProp<RootTabParamList, RoutesEnum.tattooartistnav>;

export type RootTattooArtistParamList = {
  [RoutesEnum.collections]: undefined;
  [RoutesEnum.create]: undefined;
  [RoutesEnum.edit]: { collection: ICollection };
  [RoutesEnum.works]: { collection: ICollection };
  [RoutesEnum.creatework]: { collection: ICollection };
};

export type CollectionsTattooArtistScreenRouteProp = RouteProp<
  RootTattooArtistParamList,
  RoutesEnum.collections
>;

export type CollectionsTattooArtistScreenNavigationProp =
  NativeStackNavigationProp<RootTattooArtistParamList, RoutesEnum.collections>;

export type CreateCollectionScreenRouteProp = RouteProp<
  RootTattooArtistParamList,
  RoutesEnum.create
>;

export type CreateCollectionScreenNavigationProp = NativeStackNavigationProp<
  RootTattooArtistParamList,
  RoutesEnum.create
>;

export type EditCollectionScreenRouteProp = RouteProp<
  RootTattooArtistParamList,
  RoutesEnum.edit
>;

export type EditCollectionScreenNavigationProp = NativeStackNavigationProp<
  RootTattooArtistParamList,
  RoutesEnum.edit
>;
export type WorksCollectionScreenRouteProp = RouteProp<
  RootTattooArtistParamList,
  RoutesEnum.works
>;

export type WorksCollectionScreenNavigationProp = NativeStackNavigationProp<
  RootTattooArtistParamList,
  RoutesEnum.works
>;
export type CreateWorkScreenRouteProp = RouteProp<
  RootTattooArtistParamList,
  RoutesEnum.creatework
>;

export type CreateWorkScreenNavigationProp = NativeStackNavigationProp<
  RootTattooArtistParamList,
  RoutesEnum.creatework
>;
export type EditWorkScreenRouteProp = RouteProp<
  RootTattooArtistParamList,
  RoutesEnum.editwork
>;

export type EditWorkScreenNavigationProp = NativeStackNavigationProp<
  RootTattooArtistParamList,
  RoutesEnum.editwork
>;
