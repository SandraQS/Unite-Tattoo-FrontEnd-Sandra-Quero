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
  EditWorkScreenNavigationProp,
  EditWorkScreenRouteProp,
} from "../../types/navigation.types";
import { useWorks } from "../../hooks/useWorks";
import RoutesEnum from "../../navigation/routes";
import { INewImage } from "../../types/interfacesComponent";

interface IEditorkProps {
  route: EditWorkScreenRouteProp;
}

export const EditWork = ({ route }: IEditorkProps) => {
  const { editWork } = useWorks();
  const navigation = useNavigation<EditWorkScreenNavigationProp>();

  const {
    params: { work, collection },
  } = route;

  const initialWorkData = {
    ...work,
    tittle: work.tittle,
    tattooArtist: work.tattooArtist,
    description: work.description,
    tattooStyles: work.tattooStyles,
  };
  const [workData, setWorkData] = useState(initialWorkData);
  const [newImage, setNewImage] = useState<INewImage>({
    fileName: "",
    type: "",
    uri: "",
  });

  const textTitle = "EDITAR PROYECTO";

  const onChangeDataWork = (text: string, nameValue: string) => {
    setWorkData({
      ...workData,
      [nameValue]: text,
    });

    return workData;
  };

  const workFormData = new FormData();

  const editClick = () => {
    if (
      newImage.fileName === "" ||
      newImage.type === "" ||
      newImage.uri === ""
    ) {
      editWork(workData, work.id);
    } else {
      workFormData.append("tittle", workData.tittle);
      workFormData.append("tattooArtist", workData.tattooArtist);
      workFormData.append("description", workData.description);
      workFormData.append("tattooStyles", workData.tattooStyles);
      workFormData.append("image", {
        name: newImage.fileName,
        type: newImage.type,
        uri: newImage.uri,
      });
      editWork(workFormData, work.id);
    }

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

              <GeneralButton
                textButton="EDITAR PROYECTO"
                functionOnPress={editClick}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
