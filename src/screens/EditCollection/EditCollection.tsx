import { useNavigation } from "@react-navigation/core";

import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TextInput } from "react-native";

import { generalStyles } from "../../styles/uniteTatto.styles";
import formsStyles from "../../styles/forms.styles";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Title from "../../components/Title/Title";
import { useCollections } from "../../hooks/useCollections";
import NavHeader from "../../components/NavHeader/NavHeader";
import {
  EditCollectionScreenNavigationProp,
  EditCollectionScreenRouteProp,
} from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

interface IEditCollectionProps {
  route: EditCollectionScreenRouteProp;
}

export const EditCollection = ({ route }: IEditCollectionProps) => {
  const { editCollection } = useCollections();
  const navigation = useNavigation<EditCollectionScreenNavigationProp>();
  const {
    params: { collection },
  } = route;

  const initialCollectionData = {
    id: collection.id,
    image: collection.image,
    tattooStyles: collection.tattooStyles,
    works: collection.works,
  };

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
    editCollection(collectionData);
    navigation.navigate(RoutesEnum.collections);
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
