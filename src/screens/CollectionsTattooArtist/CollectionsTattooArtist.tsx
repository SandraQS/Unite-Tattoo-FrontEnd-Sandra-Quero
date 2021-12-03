import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";

import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";

import { LoginScreenNavigationProp } from "../../types/navigation.types";

import styles from "./CollectionsTattooArtist.styles";
import { generalStyles } from "../../styles/uniteTatto.styles";

import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Title from "../../components/Title/Title";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useCollections } from "../../hooks/useCollections";
import { ICollection } from "../../types/interfacesComponent";
import CreateButton from "../../components/CreateButton/CreateButton";

const CollectionsTattooArtist = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { collections, loadCollections } = useCollections();

  useEffect(() => {
    loadCollections();
  }, []);

  const textTitle = "MIS COLECCIONES";
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
              <CreateButton/>
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
