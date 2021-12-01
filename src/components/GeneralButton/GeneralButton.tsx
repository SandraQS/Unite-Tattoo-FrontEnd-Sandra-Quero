import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GeneralButtonProps } from "../../types/components.types";

import styles from "./GeneralButton.styles";

const GeneralButton = ({ textButton, functionOnPress }: GeneralButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={functionOnPress}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeneralButton;
