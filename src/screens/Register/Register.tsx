import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/uniteTatto.styles";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

import styles from "./Register.styles";
import { useTattooArtist } from "../../hooks/useTattooArtist";
import AutoHeightImage from "react-native-auto-height-image";

const Register = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
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
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainter}>
            <AutoHeightImage
              width={150}
              source={require("../../assets/utoo-logo.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.tittleH2}>Bienvenid@</Text>
            <View>
              <Text style={styles.text}>
                Has escogido la opción “tatuador”, a continuación deberás
                rellenar un formulario para registrarte y así poder formar parte
                de nuestra comunidad. Después de eso, podrás entrar en tu perfil
                como tatuador directamente. Esperamos que tengas una buena
                experiencia!
              </Text>
            </View>
          </View>

          <View style={styles.forms}>
            <Text style={styles.tittleH2}>Datos personales</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.name}
                  // onFocus={}
                  placeholder="Nombre *"
                  onChange={onChangeDataPersonal}
                  testID="name"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.surname1}
                  onChange={onChangeDataPersonal}
                  // onFocus={}
                  placeholder="Primer apellido *"
                  testID="surname1"
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.surname2}
                  onChange={onChangeDataPersonal}
                  // onFocus={}
                  placeholder="Segundo apellido *"
                  testID="surname2"
                  maxLength={20}
                />
              </View>
            </View>
          </View>

          <View style={styles.forms}>
            <Text style={styles.tittleH2}>Datos de usuario</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={userDataTattoArtist.userName}
                  // onFocus={}
                  placeholder="Nombre de usuario *"
                  onChange={onChangeDataUser}
                  testID="userName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={userDataTattoArtist.password}
                  onChange={onChangeDataUser}
                  // onFocus={}
                  placeholder="Contraseña *"
                  testID="password"
                  secureTextEntry={true}
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={userDataTattoArtist.repeatPassword}
                  onChange={onChangeDataUser}
                  // onFocus={}
                  placeholder="Repetir la contraseña *"
                  secureTextEntry={true}
                  testID="repeatPassword"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="email-address"
                  style={styles.input}
                  value={userDataTattoArtist.email}
                  onChange={onChangeDataUser}
                  // onFocus={}
                  placeholder="Email *"
                  testID="email"
                  maxLength={20}
                />
              </View>
            </View>
          </View>

          <View style={styles.forms}>
            <Text style={styles.tittleH2}>Datos profesionales</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={professionalDataTattooArtist.studioName}
                  // onFocus={}
                  placeholder="Nombre Estudio (opcional)"
                  onChange={onChangeDataProfessional}
                  testID="studioName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={professionalDataTattooArtist.professionalName}
                  // onFocus={}
                  placeholder="Nombre profesional *"
                  onChange={onChangeDataProfessional}
                  testID="professionalName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  value={professionalDataTattooArtist.phone}
                  // onFocus={}
                  placeholder="Telefono de contacto *"
                  onChange={onChangeDataProfessional}
                  testID="phone"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="email-address"
                  style={styles.input}
                  value={professionalDataTattooArtist.contactEmail}
                  // onFocus={}
                  placeholder="Email de contacto *"
                  onChange={onChangeDataProfessional}
                  testID="contactEmail"
                  maxLength={20}
                />
              </View>
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={professionalDataTattooArtist.openingHours}
                // onFocus={}
                placeholder="Horario *"
                onChange={onChangeDataProfessional}
                testID="openingHours"
                maxLength={20}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={professionalDataTattooArtist.direction}
                // onFocus={}
                placeholder="Dirección *"
                onChange={onChangeDataProfessional}
                testID="direction"
                maxLength={20}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={professionalDataTattooArtist.tattooStyles}
                // onFocus={}
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
            <Text style={styles.text}>
              Colaboración con otros estudios / tatuadores?
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
