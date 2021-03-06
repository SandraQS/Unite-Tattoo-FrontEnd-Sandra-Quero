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
          {tattooArtist.personalDataTattoArtist && (
            <View style={styles.nameContainer}>
              <Text style={styles.nameTattooArtist}>
                {tattooArtist.personalDataTattoArtist.name}
              </Text>
              <Text style={[styles.nameTattooArtist, styles.secondName]}>
                {tattooArtist.personalDataTattoArtist.surname1}
              </Text>
            </View>
          )}

          {tattooArtist.tattooStyles &&
            tattooArtist.professionalDataTattooArtist.tattooStyles.length && (
              <View style={styles.tattooStyleContainer}>
                {tattooArtist.professionalDataTattooArtist.tattooStyles.map(
                  (style: string, index: string) => (
                    <Text key={index} style={styles.tattooStyle}>
                      {style}
                    </Text>
                  )
                )}
              </View>
            )}
        </View>

        {tattooArtist.professionalDataTattooArtist && (
          <View
            style={[generalStyles.mainContainerGeneral, styles.mainContainer]}
          >
            <View>
              <Title text="HORARIO" />
              <Text
                style={styles.texts}
              >{`${tattooArtist.professionalDataTattooArtist.openingHours}`}</Text>
            </View>

            <View>
              <Title text="DIRECCI??N" />
              <Text
                style={styles.texts}
              >{`${tattooArtist.professionalDataTattooArtist.direction}`}</Text>
            </View>

            <View>
              <Title text="ABIERTO A COLABORACIONES" />
              <Text style={styles.texts}>
                {tattooArtist.professionalDataTattooArtist.colaboration
                  ? "S??"
                  : "No"}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <View>
                <Title text="EMAIL" />
                <Text
                  style={styles.texts}
                >{`${tattooArtist.professionalDataTattooArtist.contactEmail}`}</Text>
              </View>
              <View>
                <Title text="TEL??FONO" />
                <Text
                  style={styles.texts}
                >{`${tattooArtist.professionalDataTattooArtist.phone}`}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
