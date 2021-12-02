import React from "react";
import { Text, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { TitlleProps } from "../../types/components.types";

import styles from "./Title.styles";

const Title = ({ text, textBold }: TitlleProps) => {
  return (
    <View style={styles.headerContainter}>
      <View style={styles.logoContainter}>
        <AutoHeightImage
          width={50}
          source={require("../../assets/icono-rombo-titulo.png")}
        />
      </View>
      <View style={styles.titleContainter}>
        <Text style={styles.title}>
          {text}
          <Text style={styles.titleBold}>{textBold}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Title;
