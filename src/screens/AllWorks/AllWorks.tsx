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

const AllWorks = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Title text="TALENTOS " textBold="DESTACADOS" />

          <TalentCard
            imageWork="imagen"
            tattooArtist="Bruno"
            styleWork="fine line"
            functionOnPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllWorks;
