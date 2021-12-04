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

export const CreateCollection = () => {
  const { createCollection } = useCollections();
  const navigation = useNavigation<CreateCollectionScreenNavigationProp>();

  const initialCollectionData = { tattooStyles: "" };
  const [collectionData, setCollectionDataData] = useState(
    initialCollectionData
  );
  const isComplete = collectionData.tattooStyles === "";

  const textTitle = "AÑADIR NUEVA COLECCIÓN";

  const onChangeDataCollection = (text: string, nameValue: string) => {
    setCollectionDataData({
      ...collectionData,
      [nameValue]: text,
    });

    return collectionData;
  };

  const CreateClick = () => {
    createCollection(collectionData);
    setCollectionDataData(initialCollectionData);
    navigation.navigate(RoutesEnum.bottomnav);
  };

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
      <View style={generalStyles.navHeader}>
        <NavHeader nameUser="Sandra" goBack={() => {}} />
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
                  textButton="CREAR COLECCIÓN"
                  functionOnPress={CreateClick}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
