import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";

import { LoginScreenNavigationProp } from "../../types/navigation.types";

import styles from "./CollectionsTattooArtist.styles";
import { mainContainer } from "../../styles/containers.styles";
import { generalStyles } from "../../styles/uniteTatto.styles";

import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Title from "../../components/Title/Title";
import NavHeader from "../../components/NavHeader/NavHeader";

const CollectionsTattooArtist = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const collection = {
    image:
      "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
    tattooStyles: "Acuarela",
  };

  const textTitle = "MIS COLECCIONES";
  return (
    <SafeAreaView style={generalStyles.screenWhite}>
      <ScrollView>
        <NavHeader nameUser="Sandra" />
        <View style={generalStyles.mainContainerGeneral}>
          <Title text={textTitle} />
        </View>
        <CollectionCard collection={collection} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionsTattooArtist;
