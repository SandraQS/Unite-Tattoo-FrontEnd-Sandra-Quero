import { useNavigation } from "@react-navigation/core";
import { RegisterScreenNavigationProp } from "../../types/navigation.types";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import GeneralButton from "../../components/GeneralButton/GeneralButton";

import React, { useEffect, useState } from "react";
import { generalStyles, colors } from "../../styles/uniteTatto.styles";
import formsStyles from "../../styles/forms.styles";

import { useTattooArtist } from "../../hooks/useTattooArtist";
import AutoHeightImage from "react-native-auto-height-image";
import Title from "../../components/Title/Title";
import RoutesEnum from "../../navigation/routes";

const Register = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { tattooArtistCreate } = useTattooArtist();

  const initTatooArtisData = {
    personalDataTattoArtist: {
      name: "",
      surname1: "",
      surname2: "",
    },

    userDataTattoArtist: {
      userName: "",
      password: "",
      repeatPassword: "",
      email: "",
    },

    professionalDataTattooArtist: {
      studioName: "",
      professionalName: "",
      phone: "",
      contactEmail: "",
      openingHours: "",
      direction: "",
      tattooStyles: "",
      colaboration: false,
    },
  };

  const [personalDataTattoArtist, setPersonalDataTattoArtist] = useState(
    initTatooArtisData.personalDataTattoArtist
  );
  const [userDataTattoArtist, setUserDataTattoArtist] = useState(
    initTatooArtisData.userDataTattoArtist
  );
  const [professionalDataTattooArtist, setProfessionalDataTattooArtist] =
    useState(initTatooArtisData.professionalDataTattooArtist);

  const [isSelected, setSelection] = useState(false);
  const [newTattooArtist, setNewTattooArtist] = useState(initTatooArtisData);

  const onChangeDataPersonal = (event: any) => {
    event.persist();

    const { text } = event.nativeEvent;
    const { testID } =
      event.target._internalFiberInstanceHandleDEV.return.child.pendingProps;

    setPersonalDataTattoArtist({
      ...personalDataTattoArtist,
      [testID]: text,
    });
    return personalDataTattoArtist;
  };

  const onChangeDataUser = (event: any) => {
    event.persist();

    const { text } = event.nativeEvent;
    const { testID } =
      event.target._internalFiberInstanceHandleDEV.return.child.pendingProps;

    setUserDataTattoArtist({
      ...userDataTattoArtist,
      [testID]: text,
    });
    return userDataTattoArtist;
  };

  const onChangeDataProfessional = (event: any) => {
    event.persist();

    const { text } = event.nativeEvent;
    const { testID } =
      event.target._internalFiberInstanceHandleDEV.return.child.pendingProps;

    setProfessionalDataTattooArtist({
      ...professionalDataTattooArtist,
      [testID]: text,
    });
    return professionalDataTattooArtist;
  };

  const selectCheckBox = () => {
    setSelection(!isSelected);
    setProfessionalDataTattooArtist({
      ...professionalDataTattooArtist,
      colaboration: isSelected,
    });
  };

  useEffect(() => {
    setNewTattooArtist({
      personalDataTattoArtist: {
        ...personalDataTattoArtist,
      },

      userDataTattoArtist: {
        ...userDataTattoArtist,
      },

      professionalDataTattooArtist: {
        ...professionalDataTattooArtist,
      },
    });
  }, [
    personalDataTattoArtist,
    userDataTattoArtist,
    professionalDataTattooArtist,
  ]);

  const onSubmit = () => {
    tattooArtistCreate(newTattooArtist);
    setPersonalDataTattoArtist(initTatooArtisData.personalDataTattoArtist);
    setUserDataTattoArtist(initTatooArtisData.userDataTattoArtist);
    setProfessionalDataTattooArtist(
      initTatooArtisData.professionalDataTattooArtist
    );
    setSelection(false);
    setNewTattooArtist(initTatooArtisData);
    navigation.navigate(RoutesEnum.login);
  };

  return (
    <SafeAreaView style={generalStyles.screenMediumBrown}>
      <StatusBar />
      <ScrollView>
        <View style={generalStyles.mainContainerGeneral}>
          <View style={formsStyles.logoContainter}>
            <AutoHeightImage
              width={150}
              source={require("../../assets/utoo-logo.png")}
              style={formsStyles.logo}
            />
          </View>
          <View style={formsStyles.welcomeContainer}>
            <Text style={formsStyles.tittleH2}>Bienvenid@!</Text>
            <View>
              <Text style={formsStyles.text}>
                Has escogido la opci??n
                <Text style={formsStyles.textBold}> ???tatuador???,</Text> a
                continuaci??n deber??s rellenar un formulario para registrarte y
                as?? poder formar parte de nuestra comunidad. Despu??s de eso,
                podr??s entrar en tu perfil como tatuador directamente. Esperamos
                que tengas una buena experiencia!
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.pop();
                }}
                activeOpacity={0.6}
                style={formsStyles.buttonCancel}
              >
                <AutoHeightImage
                  width={30}
                  source={require("../../assets/icono-rombo-titulo.png")}
                />
                <Text style={[formsStyles.text, formsStyles.textCancel]}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={formsStyles.forms}>
            <Title text="DATOS PERSONALES" />
            <View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={personalDataTattoArtist.name}
                  placeholder="Nombre *"
                  onChange={onChangeDataPersonal}
                  testID="name"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={formsStyles.input}
                  value={personalDataTattoArtist.surname1}
                  onChange={onChangeDataPersonal}
                  placeholder="Primer apellido *"
                  testID="surname1"
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={personalDataTattoArtist.surname2}
                  onChange={onChangeDataPersonal}
                  placeholder="Segundo apellido *"
                  testID="surname2"
                  maxLength={20}
                />
              </View>
            </View>
          </View>

          <View style={formsStyles.forms}>
            <Title text="DATOS DE USUARIO" />
            <View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={userDataTattoArtist.userName}
                  placeholder="Nombre de usuario *"
                  onChange={onChangeDataUser}
                  testID="userName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={formsStyles.input}
                  value={userDataTattoArtist.password}
                  onChange={onChangeDataUser}
                  placeholder="Contrase??a *"
                  testID="password"
                  secureTextEntry={true}
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={userDataTattoArtist.repeatPassword}
                  onChange={onChangeDataUser}
                  placeholder="Repetir la contrase??a *"
                  secureTextEntry={true}
                  testID="repeatPassword"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="email-address"
                  style={formsStyles.input}
                  value={userDataTattoArtist.email}
                  onChange={onChangeDataUser}
                  placeholder="Email *"
                  testID="email"
                  maxLength={20}
                />
              </View>
            </View>
          </View>

          <View style={formsStyles.forms}>
            <Title text="DATOS PROFESIONALES" />
            <View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={professionalDataTattooArtist.studioName}
                  placeholder="Nombre Estudio (opcional)"
                  onChange={onChangeDataProfessional}
                  testID="studioName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={formsStyles.input}
                  value={professionalDataTattooArtist.professionalName}
                  placeholder="Nombre profesional *"
                  onChange={onChangeDataProfessional}
                  testID="professionalName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="numeric"
                  style={formsStyles.input}
                  value={professionalDataTattooArtist.phone}
                  placeholder="Telefono de contacto *"
                  onChange={onChangeDataProfessional}
                  testID="phone"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="email-address"
                  style={formsStyles.input}
                  value={professionalDataTattooArtist.contactEmail}
                  placeholder="Email de contacto *"
                  onChange={onChangeDataProfessional}
                  testID="contactEmail"
                  maxLength={20}
                />
              </View>
            </View>

            <View>
              <TextInput
                style={formsStyles.input}
                value={professionalDataTattooArtist.openingHours}
                placeholder="Horario *"
                onChange={onChangeDataProfessional}
                testID="openingHours"
                maxLength={20}
              />
            </View>

            <View>
              <TextInput
                style={formsStyles.input}
                value={professionalDataTattooArtist.direction}
                placeholder="Direcci??n *"
                onChange={onChangeDataProfessional}
                testID="direction"
                maxLength={20}
              />
            </View>

            <View>
              <TextInput
                style={formsStyles.input}
                value={professionalDataTattooArtist.tattooStyles}
                placeholder="Estilos *"
                onChange={onChangeDataProfessional}
                testID="tattooStyles"
                maxLength={20}
              />
            </View>
          </View>

          <View>
            <CheckBox
              disabled={false}
              value={professionalDataTattooArtist.colaboration}
              onValueChange={selectCheckBox}
              boxType="square"
              testID="colaboration"
              onTintColor={colors.darkBrown}
              onCheckColor={colors.darkBrown}
              tintColor={colors.black}
            />
            <Text style={formsStyles.text}>
              Colaboraci??n con otros estudios / tatuadores?
            </Text>

            <GeneralButton
              textButton="REGISTRARME COMO TATUADOR"
              functionOnPress={onSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
