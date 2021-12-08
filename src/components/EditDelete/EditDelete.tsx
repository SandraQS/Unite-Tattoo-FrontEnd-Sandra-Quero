import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IEditDeleteProps } from "../../types/interfacesComponent";

import styles from "./EditDelete.styles";

export const EditDelete = ({
  functionGoEdit,
  pressDelete,
}: IEditDeleteProps) => {
  return (
    <View style={styles.buttonsContain}>
      <TouchableOpacity
        onPress={functionGoEdit}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={pressDelete}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};
