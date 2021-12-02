import React, { useEffect } from "react";

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../../components/Title/Title";
import TalentCard from "../../components/TalentCard/TalentCard";
import { useWorks } from "../../hooks/useWorks";
import { IWork } from "../../types/interfacesComponent";

import { generalStyles } from "../../styles/uniteTatto.styles";
import styles from "./AllWorks.styles";

const AllWorks = () => {
  const { loadAllWorks, works } = useWorks();
  useEffect(() => {
    loadAllWorks();
  }, [loadAllWorks]);

  const textTitle = "TALENTOS";
  const textTitleBold = " DESTACADOS";
  return (
    <SafeAreaView style={generalStyles.screen}>
      <ScrollView>
        <View
          style={[generalStyles.mainContainerGeneral, styles.mainContainer]}
        >
          <Title text={textTitle} textBold={textTitleBold} />
          {works.length ? (
            <View style={styles.allWorkList}>
              {works.map((work: IWork) => (
                <TalentCard key={work.id} work={work} />
              ))}
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllWorks;
