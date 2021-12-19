import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { DevSettings, Text, TouchableOpacity, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { useTattooArtist } from "../../hooks/useTattooArtist";
import { useUserTattooArtist } from "../../hooks/useUserTattooArtist";
import RoutesEnum from "../../navigation/routes";
import { NavHeaderProps } from "../../types/components.types";
import { EditCollectionScreenNavigationProp } from "../../types/navigation.types";

import styles from "./NavHeader.styles";
const NavHeader = ({ client, goBack }: NavHeaderProps) => {
  const navigation = useNavigation<EditCollectionScreenNavigationProp>();

  const { tattooArtistLogOut } = useUserTattooArtist();
  const { tattooArtist, tattooArtistPorfile } = useTattooArtist();

  useEffect(() => {
    tattooArtistPorfile();
  }, []);

  const clickIcon = () => {
    navigation.navigate(RoutesEnum.porfile);
    // tattooArtistLogOut();
    // DevSettings.reload();
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
            <Text style={styles.nameUserText}>
              {!client
                ? tattooArtist.personalDataTattoArtist
                  ? tattooArtist.personalDataTattoArtist.name
                  : "Salir"
                : "Salir"}
            </Text>
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
