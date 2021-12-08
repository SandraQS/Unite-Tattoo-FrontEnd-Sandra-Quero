import React from "react";
import { DevSettings, Text, TouchableOpacity, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { useUserTattooArtist } from "../../hooks/useUserTattooArtist";
import { NavHeaderProps } from "../../types/components.types";

import styles from "./NavHeader.styles";
const NavHeader = ({ nameUser, goBack }: NavHeaderProps) => {
  const { tattooArtistLogOut } = useUserTattooArtist();

  const clickIcon = () => {
    tattooArtistLogOut();
    DevSettings.reload();
  };
  return (
    <View style={styles.navContainter}>
      <View style={styles.logoContainter}>
        <TouchableOpacity onPress={goBack} activeOpacity={0.6}>
          <AutoHeightImage
            width={100}
            source={require("../../assets/utoo-logo.png")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={clickIcon}
          activeOpacity={0.6}
          style={styles.userContainter}
          accessibilityRole="button"
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
