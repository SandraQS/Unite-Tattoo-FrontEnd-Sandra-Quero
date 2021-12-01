import React, { useEffect } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  // FlatList,
} from "react-native";
import Title from "../../components/Title/Title";
import TalentCard from "../../components/TalentCard/TalentCard";
import { useWorks } from "../../hooks/useWorks";
import { IWork } from "../../types/interfacesComponent";

const AllWorks = () => {
  const { loadAllWorks, works } = useWorks();
  useEffect(() => {
    loadAllWorks();
  }, [loadAllWorks]);

  // const renderWork = ({ work }: any) => <TalentCard work={work} />;
  const textTitle = "TALENTOS";
  const textTitleBold = " DESTACADOS";
  return (
    // <SafeAreaView>
    //   <FlatList
    //     data={works}
    //     renderItem={renderWork}
    //     keyExtractor={(work) => work.id}
    //     // ListFooterComponent={}
    //   />
    // </SafeAreaView>

    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Title text={textTitle} textBold={textTitleBold} />
        {works.length ? (
          <View>
            {works.map((work: IWork) => (
              <TalentCard key={work.id} work={work} />
            ))}
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllWorks;
