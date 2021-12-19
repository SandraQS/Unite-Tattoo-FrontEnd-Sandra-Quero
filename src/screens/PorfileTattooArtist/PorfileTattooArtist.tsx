import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import NavHeader from "../../components/NavHeader/NavHeader";
import Title from "../../components/Title/Title";
import { useTattooArtist } from "../../hooks/useTattooArtist";
import generalStyles from "../../styles/general.styles";
import styles from "./PorfileTattooArtist.styles";

import { PorfileTattooArtistScreenNavigationProp } from "../../types/navigation.types";

export const PorfileTattooArtist = () => {
  const { tattooArtist, tattooArtistPorfile } = useTattooArtist();
  const navigation = useNavigation<PorfileTattooArtistScreenNavigationProp>();

  useEffect(() => {
    tattooArtistPorfile();
  }, []);

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
      <View style={generalStyles.navHeader}>
        <NavHeader client={false} goBack={() => navigation.pop()} />
      </View>
      <ScrollView>
        <View style={styles.headerPorfile}>
          <View>
            <Image
              source={{ uri: tattooArtist.imageAmbient }}
              style={styles.imageAmbient}
            />
          </View>

          <View>
            <ImageBackground
              source={require("../../assets/marco-rombo.png")}
              resizeMode="contain"
              style={styles.imageBackground}
            >
              <View style={styles.imagePorfileContainer}>
                <Image
                  source={{ uri: tattooArtist.profileImage }}
                  style={styles.imagePorfile}
                  resizeMode="cover"
                />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.nameTattooArtist}>
              {tattooArtist.personalDataTattoArtist.name}
            </Text>
            <Text style={[styles.nameTattooArtist, styles.secondName]}>
              {tattooArtist.personalDataTattoArtist.surname1}
            </Text>
          </View>
        </View>

        <View style={generalStyles.mainContainerGeneral}>
          <View>
            <Title text="HORARIO" />
            <Text>{`${tattooArtist.professionalDataTattooArtist.openingHours}`}</Text>
          </View>

          <View>
            <Title text="DIRECCIÓN" />
            <Text>{`${tattooArtist.professionalDataTattooArtist.direction}`}</Text>
          </View>

          <View>
            <Title text="ABIERTO A COLABORACIONES" />
            <Text>
              {tattooArtist.professionalDataTattooArtist.colaboration
                ? "Sí"
                : "No"}
            </Text>
          </View>

          <View>
            <Title text="EMAIL" />
            <Text>{`${tattooArtist.professionalDataTattooArtist.contactEmail}`}</Text>
          </View>

          <View>
            <Title text="TELÉFONO" />
            <Text>{`${tattooArtist.professionalDataTattooArtist.phone}`}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
