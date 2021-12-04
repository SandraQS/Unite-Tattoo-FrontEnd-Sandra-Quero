import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./EditDelete.styles";

export const EditDelete = () => {
  const editPress = () => {};

  const deletePress = () => {};

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
        onPress={deletePress}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};
