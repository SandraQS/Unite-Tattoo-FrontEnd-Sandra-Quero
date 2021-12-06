import React, { useEffect } from "react";

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
  UniteTattooScreenRouteProp,
  WorksCollectionScreenNavigationProp,
  WorksCollectionScreenRouteProp,
} from "../../types/navigation.types";

interface IWorksCollectionProps {
  route: WorksCollectionScreenRouteProp;
}

const WorksCollection = ({ route }: IWorksCollectionProps) => {
  const navigation = useNavigation<WorksCollectionScreenNavigationProp>();
  const { loadWorksCollection, works } = useWorks();
  // const {
  //   params: { idCollection },
  // } = route;

  // console.log("ID", idCollection);
  ////==>>>> OJO AQUI HAY QUE PASAR POR EL NAV LOS DATOS DE COLLECTION!!!!!<<<<<=====
  const idCollection = "61a37f78b0e47a2b50e4635b";
  ////==>>>> OJO AQUI HAY QUE PASAR POR EL NAV LOS DATOS DE COLLECTION!!!!!<<<<<=====

  useEffect(() => {
    if (idCollection) {
      loadWorksCollection(idCollection);
    }
  }, [works]);

  const textTitle = "COLECCIÓN";
  const textTitleBold = " REALISTA"; //==>> FALTA QUE VENGA DE API

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
          <View style={styles.buttonAddWork}>
            <Button title=" + Añadir nuevo trabajo" color={colors.darkBrown} />
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
