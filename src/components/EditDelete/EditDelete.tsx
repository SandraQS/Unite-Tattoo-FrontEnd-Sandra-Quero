import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IEditDeleteProps } from "../../types/interfacesComponent";

import styles from "./EditDelete.styles";

export const EditDelete = ({
  object,
  setLongPress,
  functionGoEdit,
  pressDelete,
}: IEditDeleteProps) => {
  const editPress = () => {
    functionGoEdit(object);
    setLongPress(false);
  };

  return (
    <View style={styles.buttonsContain}>
      <TouchableOpacity
        onPress={editPress}
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
