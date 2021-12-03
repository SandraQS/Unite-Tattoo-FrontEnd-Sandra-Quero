import { useNavigation } from "@react-navigation/core";

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from "react-native";

import { generalStyles } from "../../styles/uniteTatto.styles";
import styles from "./CreateCollection.styles";

// import RoutesEnum from "../../navigation/routes";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Title from "../../components/Title/Title";

export const CreateCollection = () => {
  // const navigation = useNavigation<LoginScreenNavigationProp>();

  const initialCollectionData = { tattooStyles: "", image: "" };
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
    //Crear
    setCollectionDataData(initialCollectionData);
  };

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
      <ScrollView>
        <View style={generalStyles.mainContainerGeneral}>
          <View>
            <Title text={textTitle} />
          </View>

          <View style={styles.forms}>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={collectionData.tattooStyles}
                  placeholder="Estilo"
                  onChangeText={(text) => {
                    onChangeDataCollection(text, "tattooStyles");
                  }}
                  accessibilityLabel="tattooStyles"
                  maxLength={20}
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
