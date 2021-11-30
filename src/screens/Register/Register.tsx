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
    imageAmbient: "",
    profileImage: "",
  });
  const [personalDataTattoArtist, setPersonalDataTattoArtist] = useState(
    initTatooArtisData.personalDataTattoArtist
  );

  const onChangeData = (event: any) => {
    event.persist();

    const { text } = event.nativeEvent;
    const { testID } =
      event.target._internalFiberInstanceHandleDEV.return.child.pendingProps;

    setPersonalDataTattoArtist({
      ...personalDataTattoArtist,
      [testID]: text,
    });
  };

  console.log(personalDataTattoArtist);

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
          <View style={styles.personalDataContainer}>
            <Text style={styles.tittleH2}>Datos personales</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.name}
                  // onFocus={}
                  placeholder="Nombre *"
                  onChange={onChangeData}
                  testID="name"
                  key="name"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.surname1}
                  onChange={onChangeData}
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
                  onChange={onChangeData}
                  // onFocus={}
                  placeholder="Segundo apellido *"
                  testID="surname2"
                  maxLength={20}
                />
              </View>
            </View>
          </View>
          <GeneralButton
            textButton="REGISTRARME COMO TATUADOR"
            functionOnPress={() => {
              navigation.navigate(RoutesEnum.login);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
