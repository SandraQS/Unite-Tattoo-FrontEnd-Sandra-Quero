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

const CollectionsTattooArtist = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={mainContainer}>
          <Image source={require("../../assets/Uttoo-logo.svg")} />

          <Text style={styles.text}>COLECCIONES TATUADOR SCREEN</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionsTattooArtist;
