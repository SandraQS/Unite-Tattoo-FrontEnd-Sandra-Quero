import { useNavigation } from "@react-navigation/core";
import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from "react-native";

import styles from "./UniteTattoo.styles";
import RoutesEnum from "../../navigation/routes";
import { UniteTattooScreenNavigationProp } from "../../types/navigation.types";
import AutoHeightImage from "react-native-auto-height-image";

const UniteTattoo = () => {
  const navigation = useNavigation<UniteTattooScreenNavigationProp>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainter}>
            <AutoHeightImage
              width={250}
              source={require("../../assets/uniteTattoo_logo.png")}
              style={styles.logo}
            />
          </View>
          <ImageBackground
            source={require("../../assets/icono-rombo-fondo-01.png")}
            resizeMode="contain"
            style={styles.imageBackground}
          >
            <View style={styles.containerUsers}>
              <TouchableOpacity
                style={[styles.buttonUniteTattoo, styles.separator]}
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
            </View>
            <View style={styles.containerInvited}>
              <TouchableOpacity
                style={[styles.buttonUniteTattoo, styles.buttonInvited]}
                activeOpacity={0.7}
                onPress={() => navigation.navigate(RoutesEnum.home)}
              >
                <Text style={styles.invited}> Entrar como invitado </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UniteTattoo;
