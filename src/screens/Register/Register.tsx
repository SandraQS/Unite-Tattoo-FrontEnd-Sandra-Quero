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

  const [tatooArtisData, setTatooArtisData] = useState({
    personalDataTattoArtist: {
      name: "AAAA",
      surname1: "BBB",
      surname2: "CCCC",
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
  const [newTatooArtisData, setNewTatooArtisData] = useState(tatooArtisData);
  const [name, setName] = useState("");

  const onChangeData = (text: string) => {
    setName(text);
  };
  const onChangeData2 = (event: any) => {
    setNewTatooArtisData({
      personalDataTattoArtist: {
        name: event.text,
        surname1: event.text,
        surname2: event.text,
      },

      userDataTattoArtist: {
        userName: event.text,
        password: event.text,
        repeatPassword: event.text,
        email: event.text,
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
  };

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
                  value={newTatooArtisData.personalDataTattoArtist.name}
                  onChange={(event) => {
                    onChangeData2(event);
                  }}
                  // onFocus={}
                  placeholder="Nombre *"
                  testID="name"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={newTatooArtisData.personalDataTattoArtist.surname1}
                  onChange={(event) => {
                    onChangeData2(event);
                  }}
                  // onFocus={}
                  placeholder="Primer apellido *"
                  testID="username1"
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={newTatooArtisData.personalDataTattoArtist.surname2}
                  onChange={(event) => {
                    onChangeData2(event);
                  }}
                  // onFocus={}
                  placeholder="Segundo apellido *"
                  testID="username1"
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
