import { useNavigation } from "@react-navigation/core";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from "react-native";

import { generalStyles, colors } from "../../styles/uniteTatto.styles";

import RoutesEnum from "../../navigation/routes";

import formsStyles from "../../styles/forms.styles";

import GeneralButton from "../../components/GeneralButton/GeneralButton";
import AutoHeightImage from "react-native-auto-height-image";
import { useUserTattooArtist } from "../../hooks/useUserTattooArtist";

export const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { tattooArtistLogin } = useUserTattooArtist();

  const initialUserData = { email: "", password: "" };
  const [userData, setUserData] = useState(initialUserData);

  const isComplete = userData.email === "" || userData.password === "";

  const onChangeDataUser = (text: string, nameValue: string) => {
    setUserData({
      ...userData,
      [nameValue]: text,
    });

    return userData;
  };

  const loginClick = () => {
    tattooArtistLogin(userData);
    setUserData(initialUserData);
  };

  const goRegister = () => {
    navigation.navigate(RoutesEnum.register);
  };

  return (
    <SafeAreaView style={generalStyles.screenMediumBrown}>
      <ScrollView>
        <View style={generalStyles.mainContainerGeneral}>
          <View style={formsStyles.logoContainter}>
            <AutoHeightImage
              width={150}
              source={require("../../assets/utoo-logo.png")}
              style={formsStyles.logo}
            />
          </View>

          <View style={formsStyles.forms}>
            <View>
              <View>
                <TextInput
                  style={formsStyles.input}
                  value={userData.email}
                  keyboardType="email-address"
                  placeholder="Email *"
                  onChangeText={(text) => {
                    onChangeDataUser(text, "email");
                  }}
                  accessibilityLabel="email"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={formsStyles.input}
                  value={userData.password}
                  onChangeText={(text) => {
                    onChangeDataUser(text, "password");
                  }}
                  // onFocus={}
                  placeholder="Contraseña *"
                  accessibilityLabel="password"
                  secureTextEntry={true}
                  maxLength={20}
                />
              </View>

              {!isComplete && (
                <GeneralButton
                  textButton="LOGIN"
                  functionOnPress={loginClick}
                />
              )}

              <Button
                title="Registrarme"
                onPress={goRegister}
                color={colors.darkBrown}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
