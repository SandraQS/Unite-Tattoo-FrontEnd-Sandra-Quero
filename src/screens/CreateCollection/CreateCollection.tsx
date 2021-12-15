import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TextInput } from "react-native";
import {
  ImagePickerResponse,
  launchImageLibrary,
} from "react-native-image-picker";

import { generalStyles } from "../../styles/uniteTatto.styles";
import formsStyles from "../../styles/forms.styles";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Title from "../../components/Title/Title";
import { useCollections } from "../../hooks/useCollections";
import NavHeader from "../../components/NavHeader/NavHeader";
import RoutesEnum from "../../navigation/routes";

import { CreateCollectionScreenNavigationProp } from "../../types/navigation.types";
import { INewImage } from "../../types/interfacesComponent";

export const CreateCollection = () => {
  const { createCollection } = useCollections();
  const navigation = useNavigation<CreateCollectionScreenNavigationProp>();

  const initialCollectionData = { tattooStyles: "" };
  const [collectionData, setCollectionDataData] = useState(
    initialCollectionData
  );
  const [newImage, setNewImage] = useState<INewImage>({
    fileName: "",
    type: "",
    uri: "",
  });

  const isComplete = collectionData.tattooStyles === "";
  const textTitle = "AÑADIR NUEVA COLECCIÓN";

  const onChangeDataCollection = (text: string, nameValue: string) => {
    setCollectionDataData({
      ...collectionData,
      [nameValue]: text,
    });

    return collectionData;
  };

  const collectionFormData = new FormData();

  const CreateClick = () => {
    if (
      newImage.fileName !== "" ||
      newImage.type !== "" ||
      newImage.uri !== ""
    ) {
      collectionFormData.append("tattooStyles", collectionData.tattooStyles);
      collectionFormData.append("image", {
        name: newImage.fileName,
        type: newImage.type,
        uri: newImage.uri,
      });
      createCollection(collectionFormData);
    } else {
      createCollection(collectionData);
    }
    setCollectionDataData(initialCollectionData);
    navigation.navigate(RoutesEnum.collections);
  };

  const chooseFile = () => {
    const options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose Photo from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.assets) {
        const source = response.assets;
        setNewImage(source[0]);
      }
    });
  };

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
      <View style={generalStyles.navHeader}>
        <NavHeader nameUser="Log Out" goBack={() => navigation.pop()} />
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

              <GeneralButton
                textButton="SUBIR IMAGEN"
                functionOnPress={chooseFile}
              />

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
