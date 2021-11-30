import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import GeneralButton from "../../components/Button/GeneralButton";
import RoutesEnum from "../../navigation/routes";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

import styles from "./Register.styles";

const Register = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [initTatooArtisData, setInitTatooArtisData] = useState({
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
      tattooStyles: false,
    },
    imagesTattoArtist: {
      imageAmbient: "",
      profileImage: "",
    },
  });
  const [personalDataTattoArtist, setPersonalDataTattoArtist] = useState(
    initTatooArtisData.personalDataTattoArtist
  );
  const [userDataTattoArtist, setUserDataTattoArtist] = useState(
    initTatooArtisData.userDataTattoArtist
  );
  const [professionalDataTattooArtist, setProfessionalDataTattooArtist] =
    useState(initTatooArtisData.professionalDataTattooArtist);
  const [imagesTattoArtist, setImagesTattoArtist] = useState(
    initTatooArtisData.imagesTattoArtist
  );

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

  const onSubmit = () => {
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
      imagesTattoArtist: {
        ...imagesTattoArtist,
      },
    });
    return newTattooArtist;
  };
  console.log(newTattooArtist);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.mainContainer}>
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
          <GeneralButton
            textButton="REGISTRARME COMO TATUADOR"
            functionOnPress={onSubmit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
