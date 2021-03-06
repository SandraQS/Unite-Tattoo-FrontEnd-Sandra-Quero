import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";

import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { CollectionsTattooArtistScreenNavigationProp } from "../../types/navigation.types";

import styles from "./CollectionsTattooArtist.styles";
import { generalStyles } from "../../styles/uniteTatto.styles";

import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Title from "../../components/Title/Title";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useCollections } from "../../hooks/useCollections";
import { ICollection } from "../../types/interfacesComponent";
import CreateButton from "../../components/CreateButton/CreateButton";
import RoutesEnum from "../../navigation/routes";

const CollectionsTattooArtist = () => {
  const navigation =
    useNavigation<CollectionsTattooArtistScreenNavigationProp>();
  const { collections, loadCollections, edited } = useCollections();

  useEffect(() => {
    loadCollections();
  }, [edited]);

  const functionGoWorks = (collection: ICollection) => {
    navigation.navigate(RoutesEnum.works, { collection: collection });
  };

  const functionGoEdit = (collection: ICollection) => {
    navigation.navigate(RoutesEnum.edit, { collection: collection });
  };

  const functionCreate = () => {
    navigation.navigate(RoutesEnum.create);
  };

  const textTitle = "MIS COLECCIONES";

  return (
    <SafeAreaView style={generalStyles.screenWhite}>
      <View style={generalStyles.navHeader}>
        <NavHeader client={false} />
      </View>
      <ScrollView>
        <View
          style={[
            generalStyles.mainContainerGeneral,
            styles.mainContainerGeneral,
          ]}
        >
          <View>
            <Title text={textTitle} />
          </View>

          {collections.length ? (
            <View style={styles.collections}>
              {collections.map((collection: ICollection) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  functionGoWorks={functionGoWorks}
                  functionGoEdit={functionGoEdit}
                />
              ))}
              <CreateButton functionCreate={functionCreate} />
            </View>
          ) : (
            <Text>La p??gina se est?? cargando...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionsTattooArtist;
