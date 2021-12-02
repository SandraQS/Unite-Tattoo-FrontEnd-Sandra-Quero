import { useNavigation } from "@react-navigation/core";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from "react-native";

import styles from "./Login.styles";
import { generalStyles, colors } from "../../styles/uniteTatto.styles";

import RoutesEnum from "../../navigation/routes";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import AutoHeightImage from "react-native-auto-height-image";

export const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const initialUserData = { email: "", password: "" };
  const [userData, setUserData] = useState(initialUserData);

  return (
    <SafeAreaView style={generalStyles.screenMediumBrown}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainter}>
            <AutoHeightImage
              width={150}
              source={require("../../assets/utoo-logo.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.forms}>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={userData.email}
                  keyboardType="email-address"
                  placeholder="Email *"
                  onChange={() => {}}
                  accessibilityLabel="email"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={userData.password}
                  onChange={() => {}}
                  // onFocus={}
                  placeholder="Contraseña *"
                  accessibilityLabel="password"
                  secureTextEntry={true}
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={userData.password}
                  onChange={() => {}}
                  // onFocus={}
                  placeholder="Repetir la contraseña *"
                  secureTextEntry={true}
                  accessibilityLabel="repeatPassword"
                  maxLength={20}
                />
              </View>

              <GeneralButton textButton="LOGIN" functionOnPress={() => {}} />
              <Button
                title="Registrarme"
                onPress={() => {
                  navigation.navigate(RoutesEnum.register);
                }}
                color={colors.darkBrown}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
