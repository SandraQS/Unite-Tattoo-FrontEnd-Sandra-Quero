import { useNavigation } from "@react-navigation/core";
import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import styles from "./UniteTattoo.styles";
import { mainContainer } from "../../styles/containers.styles";
import RoutesEnum from "../../navigation/routes";
import { UniteTattooScreenNavigationProp } from "../../types/navigation.types";

const UniteTattoo = () => {
  const navigation = useNavigation<UniteTattooScreenNavigationProp>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={mainContainer}>
          <View>
            <Button
              title="Vamos a HOME"
              onPress={() => {
                navigation.navigate(RoutesEnum.home);
              }}
            />
          </View>

          <Image source={require("../../assets/Uttoo-logo.svg")} />

          <TouchableOpacity
            style={styles.buttonUniteTattoo}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(RoutesEnum.home);
            }}
          >
            <Text style={styles.text}> Tatuador </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonUniteTattoo}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(RoutesEnum.login);
            }}
          >
            <Text style={styles.text}> Cliente </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonUniteTattoo}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(RoutesEnum.home)}
          >
            <Text style={styles.text}> Entrar como invitado </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UniteTattoo;
