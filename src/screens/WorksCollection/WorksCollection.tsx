import React, { useEffect, useState } from "react";

import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title/Title";
import { useWorks } from "../../hooks/useWorks";
import { IWork } from "../../types/interfacesComponent";

import { generalStyles, colors } from "../../styles/uniteTatto.styles";
import NavHeader from "../../components/NavHeader/NavHeader";
import WorkCard from "../../components/WorkCard/WorkCard";

import styles from "./WorksCollection.styles";
import { useNavigation } from "@react-navigation/core";
import {
  WorksCollectionScreenNavigationProp,
  WorksCollectionScreenRouteProp,
} from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";
interface IWorksCollectionProps {
  route: WorksCollectionScreenRouteProp;
}

const WorksCollection = ({ route }: IWorksCollectionProps) => {
  const navigation = useNavigation<WorksCollectionScreenNavigationProp>();
  const { loadWorksCollection, works } = useWorks();

  // const worksReverse = works.reverse();
  const {
    params: { collection },
  } = route;

  useEffect(() => {
    loadWorksCollection(collection.id);
  }, [works]);

  const textTitle = "COLECCIÓN";
  const textTitleBold = ` ${collection.tattooStyles.toUpperCase()}`;

  const goCreateWork = () => {
    navigation.navigate(RoutesEnum.creatework, { collection: collection });
  };

  return (
    <SafeAreaView style={generalStyles.screenWhite}>
      <View style={generalStyles.navHeader}>
        <NavHeader nameUser="Log Out" goBack={() => navigation.pop()} />
      </View>
      <ScrollView>
        <View style={generalStyles.mainContainerGeneral}>
          <View>
            <Title text={textTitle} textBold={textTitleBold} />
          </View>
          <View style={styles.buttonAddWork}>
            <Button
              title=" + Añadir nuevo trabajo"
              color={colors.darkBrown}
              onPress={goCreateWork}
            />
          </View>
          {works.length ? (
            <View style={styles.worksList}>
              {works.map((work: IWork) => (
                <WorkCard key={work.id} work={work} />
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

export default WorksCollection;
