import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";

import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";

import { LoginScreenNavigationProp } from "../../types/navigation.types";

import styles from "./CollectionsTattooArtist.styles";
import { mainContainer } from "../../styles/containers.styles";
import { generalStyles } from "../../styles/uniteTatto.styles";

import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Title from "../../components/Title/Title";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useCollections } from "../../hooks/useCollections";
import { ICollection } from "../../types/interfacesComponent";

const CollectionsTattooArtist = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { collections, loadCollections } = useCollections();

  const textTitle = "MIS COLECCIONES";
  return (
    <SafeAreaView style={generalStyles.screenWhite}>
      <ScrollView>
        <NavHeader nameUser="Sandra" />
        <View style={generalStyles.mainContainerGeneral}>
          <Title text={textTitle} />
        </View>

        {collections ? (
          <View>
            {collections.map((collection: ICollection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionsTattooArtist;
