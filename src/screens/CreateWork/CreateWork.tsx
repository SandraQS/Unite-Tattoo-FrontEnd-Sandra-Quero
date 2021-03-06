import { useNavigation } from "@react-navigation/core";

import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TextInput } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import { generalStyles } from "../../styles/uniteTatto.styles";
import formsStyles from "../../styles/forms.styles";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Title from "../../components/Title/Title";
import NavHeader from "../../components/NavHeader/NavHeader";
import {
  CreateWorkScreenNavigationProp,
  CreateWorkScreenRouteProp,
} from "../../types/navigation.types";
import { useWorks } from "../../hooks/useWorks";
import RoutesEnum from "../../navigation/routes";
import { INewImage } from "../../types/interfacesComponent";

interface ICreateWorkProps {
  route: CreateWorkScreenRouteProp;
}

export const CreateWork = ({ route }: ICreateWorkProps) => {
  const { createWork } = useWorks();
  const navigation = useNavigation<CreateWorkScreenNavigationProp>();

  const {
    params: { collection },
  } = route;

  const initialWorkData = {
    tittle: "",
    tattooArtist: "",
    description: "",
    tattooStyles: `${collection.tattooStyles}`,
  };
  const [workData, setWorkData] = useState(initialWorkData);
  const [newImage, setNewImage] = useState<INewImage>({
    fileName: "",
    type: "",
    uri: "",
  });

  const isComplete =
    workData.tittle === "" ||
    workData.tattooArtist === "" ||
    workData.description === "" ||
    workData.tattooStyles === "" ||
    newImage.fileName === "" ||
    newImage.type === "" ||
    newImage.uri === "";

  const textTitle = "AÑADIR NUEVO PROYECTO";

  const onChangeDataWork = (text: string, nameValue: string) => {
    setWorkData({
      ...workData,
      [nameValue]: text,
    });

    return workData;
  };

  const workFormData = new FormData();

  const CreateClick = () => {
    workFormData.append("tittle", workData.tittle);
    workFormData.append("tattooArtist", workData.tattooArtist);
    workFormData.append("description", workData.description);
    workFormData.append("tattooStyles", collection.tattooStyles);
    workFormData.append("image", {
      name: newImage.fileName,
      type: newImage.type,
      uri: newImage.uri,
    });
    createWork(workFormData, collection.id);

    navigation.navigate(RoutesEnum.works, { collection: collection });
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

    launchImageLibrary(options, (response: any) => {
      const source = response.assets;
      setNewImage(source[0]);
    });
  };

  return (
    <SafeAreaView style={generalStyles.screenLightBrown}>
      <View style={generalStyles.navHeader}>
        <NavHeader client={false} goBack={() => navigation.pop()} />
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
                  value={workData.tittle}
                  placeholder="Titulo"
                  onChangeText={(text) => {
                    onChangeDataWork(text, "tittle");
                  }}
                  accessibilityLabel="tittle"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={formsStyles.input}
                  value={workData.tattooArtist}
                  placeholder="Nombre tatuador"
                  onChangeText={(text) => {
                    onChangeDataWork(text, "tattooArtist");
                  }}
                  accessibilityLabel="tattooArtist"
                  maxLength={12}
                />
              </View>

              <View>
                <TextInput
                  style={[formsStyles.input, formsStyles.textArea]}
                  value={workData.description}
                  placeholder="Descripción"
                  onChangeText={(text) => {
                    onChangeDataWork(text, "description");
                  }}
                  numberOfLines={10}
                  multiline={true}
                  accessibilityLabel="description"
                  maxLength={650}
                />
              </View>

              <View>
                <TextInput
                  style={formsStyles.input}
                  value={workData.tattooStyles}
                  placeholder="Estilo"
                  onChangeText={(text) => {
                    onChangeDataWork(text, "tattooStyles");
                  }}
                  accessibilityLabel="tattooStyles"
                  maxLength={20}
                />
              </View>

              <GeneralButton
                textButton="SUBIR IMAGEN"
                functionOnPress={chooseFile}
              />

              {!isComplete && (
                <GeneralButton
                  textButton="CREAR PROYECTO"
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
