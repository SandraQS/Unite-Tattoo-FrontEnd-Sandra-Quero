import { useNavigation } from "@react-navigation/core";

import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TextInput } from "react-native";

import { generalStyles } from "../../styles/uniteTatto.styles";
import formsStyles from "../../styles/forms.styles";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Title from "../../components/Title/Title";
import { useCollections } from "../../hooks/useCollections";
import NavHeader from "../../components/NavHeader/NavHeader";
import { CreateCollectionScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

export const EditCollection = () => {
  const { collections } = useCollections();
  const navigation = useNavigation<CreateCollectionScreenNavigationProp>();

  ////==>>>> OJO AQUI HAY QUE PASAR POR EL NAV LOS DATOS DE COLLECTION!!!!!<<<<<=====
  const initialCollectionData = {
    id: "61a37fc1b0e47a2b50e4635f",
    image:
      "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638438947435-.png",
    tattooStyles: "Realista",
  };
  ////==>>>> OJO AQUI HAY QUE PASAR POR EL NAV LOS DATOS DE COLLECTION!!!!!<<<<<=====

  const [collectionData, setCollectionDataData] = useState(
    initialCollectionData
  );
  const isComplete = collectionData.tattooStyles === "";

  const textTitle = "EDITAR LA COLECCIÓN";

  const onChangeDataCollection = (text: string, nameValue: string) => {
    setCollectionDataData({
      ...collectionData,
      [nameValue]: text,
    });

    return collectionData;
  };

  const editClick = () => {
    // console.log("NUEVO OBJETO", collectionData);
    navigation.navigate(RoutesEnum.bottomnav);
  };

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
      <View style={generalStyles.navHeader}>
        <NavHeader nameUser="Sandra" goBack={() => navigation.pop()} />
      </View>
      <ScrollView>
        <View style={generalStyles.mainContainerGeneral}>
          <View>
            <Title text={textTitle} />
          </View>

          <View style={formsStyles.forms}>
            <View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={collectionData.tattooStyles}
                  placeholder="Estilo"
                  onChangeText={(text) => {
                    onChangeDataCollection(text, "tattooStyles");
                  }}
                  accessibilityLabel="tattooStyles"
                  maxLength={12}
                />
              </View>

              {!isComplete && (
                <GeneralButton
                  textButton="EDITAR COLECCIÓN"
                  functionOnPress={editClick}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
