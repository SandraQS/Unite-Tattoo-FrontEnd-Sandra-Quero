import { useNavigation } from "@react-navigation/core";

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from "react-native";

import { generalStyles, formsStyles } from "../../styles/uniteTatto.styles";

// import RoutesEnum from "../../navigation/routes";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Title from "../../components/Title/Title";
import { useCollections } from "../../hooks/useCollections";

export const CreateCollection = () => {
  const { createCollection, collections } = useCollections();
  // const navigation = useNavigation<LoginScreenNavigationProp>();

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
  };

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
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
