import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/uniteTatto.styles";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";
import Title from "../../components/Title/Title";
import TalentCard from "../../components/TalentCard/TalentCard";
import { useWorks } from "../../hooks/useWorks";

const AllWorks = () => {
  const { loadAllWorks, works } = useWorks();
  useEffect(() => {
    loadAllWorks();
  }, [loadAllWorks]);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Title text="TALENTOS " textBold="DESTACADOS" />

          <TalentCard
            imageWork={works[0].tattooArtist}
            tattooArtist={works[0].tattooArtist}
            styleWork={works[0].tattooStyles}
            functionOnPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllWorks;
