import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { NavHeaderProps } from "../../types/components.types";

import styles from "./NavHeader.styles";
const NavHeader = ({ nameUser }: NavHeaderProps) => {
  return (
    <View style={styles.navContainter}>
      <View style={styles.logoContainter}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <AutoHeightImage
            width={100}
            source={require("../../assets/utoo-logo.png")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={styles.userContainter}
        >
          <View style={styles.nameUserContainter}>
            <Text style={styles.nameUserText}>{nameUser}</Text>
          </View>

          <View style={styles.logoContainter}>
            <AutoHeightImage
              width={30}
              source={require("../../assets/icono-user.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavHeader;
