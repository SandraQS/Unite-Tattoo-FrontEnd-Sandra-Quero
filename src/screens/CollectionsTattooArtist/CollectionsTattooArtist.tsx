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
  const { collections, loadCollections } = useCollections();

  useEffect(() => {
    loadCollections();
  }, [collections]);

  const textTitle = "MIS COLECCIONES";
  const functionCreate = () => {
    navigation.navigate(RoutesEnum.create);
  };
  return (
    <SafeAreaView style={generalStyles.screenWhite}>
      <ScrollView>
        <NavHeader nameUser="Sandra" />
        <View style={generalStyles.mainContainerGeneral}>
          <View>
            <Title text={textTitle} />
          </View>

          {collections.length ? (
            <View style={styles.collections}>
              {collections.map((collection: ICollection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
              <CreateButton functionCreate={functionCreate} />
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionsTattooArtist;
