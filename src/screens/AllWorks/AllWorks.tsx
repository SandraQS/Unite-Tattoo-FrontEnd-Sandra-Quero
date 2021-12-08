import React, { useEffect } from "react";

import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title/Title";
import TalentCard from "../../components/TalentCard/TalentCard";
import { useWorks } from "../../hooks/useWorks";
import { IWork } from "../../types/interfacesComponent";

import { generalStyles } from "../../styles/uniteTatto.styles";
import styles from "./AllWorks.styles";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useNavigation } from "@react-navigation/core";
import { AllWorksScreenNavigationProp } from "../../types/navigation.types";

const AllWorks = () => {
  const { loadAllWorks, works } = useWorks();
  const navigation = useNavigation<AllWorksScreenNavigationProp>();

  useEffect(() => {
    loadAllWorks();
  }, []);

  const textTitle = "TALENTOS";
  const textTitleBold = " DESTACADOS";

  return (
    <SafeAreaView style={generalStyles.screenWhite}>
      <View style={generalStyles.navHeader}>
        <NavHeader nameUser="" goBack={() => navigation.pop()} />
      </View>
      <ScrollView>
        <View style={generalStyles.mainContainerGeneral}>
          <View>
            <Title text={textTitle} textBold={textTitleBold} />
          </View>
          {works.length ? (
            <View style={styles.allWorkList}>
              {works.map((work: IWork) => (
                <TalentCard key={work.id} work={work} />
              ))}
            </View>
          ) : (
            <Text>La página se está cargando...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllWorks;
