import React, { useEffect } from "react";

import { FlatList, SafeAreaView } from "react-native";
import Title from "../../components/Title/Title";
import TalentCard from "../../components/TalentCard/TalentCard";
import { useWorks } from "../../hooks/useWorks";
import { generalStyles } from "../../styles/uniteTatto.styles";

const AllWorks = () => {
  const { loadAllWorks, works } = useWorks();
  useEffect(() => {
    loadAllWorks();
  }, [loadAllWorks]);

  const renderWork = ({ item }: any) => <TalentCard work={item} />;
  const textTitle = "TALENTOS";
  const textTitleBold = " DESTACADOS";

  return (
    <SafeAreaView style={generalStyles.screen}>
      <FlatList
        ListHeaderComponent={
          <Title text={textTitle} textBold={textTitleBold} />
        }
        data={works}
        renderItem={renderWork}
        keyExtractor={(work) => work.id}
      />
    </SafeAreaView>
  );
};

export default AllWorks;
