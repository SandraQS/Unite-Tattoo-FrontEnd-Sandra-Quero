import { useNavigation } from "@react-navigation/core";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

import styles from "./Login.styles";

import RoutesEnum from "../../navigation/routes";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import AutoHeightImage from "react-native-auto-height-image";

export const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <>
      <Button
        title="Registrarme"
        onPress={() => {
          navigation.navigate(RoutesEnum.register);
        }}
      />
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
            <View>
              <Text style={styles.tittleH2}>Login</Text>
            </View>

            <View style={styles.forms}>
              <View>
                <View>
                  <TextInput
                    style={styles.input}
                    value={"hola"}
                    placeholder="Nombre *"
                    onChange={() => {}}
                    testID="name"
                    maxLength={20}
                  />
                </View>

                <GeneralButton
                  textButton="REGISTRARME COMO TATUADOR"
                  functionOnPress={() => {}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
