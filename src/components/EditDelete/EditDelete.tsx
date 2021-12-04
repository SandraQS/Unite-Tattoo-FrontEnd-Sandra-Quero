import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCollections } from "../../hooks/useCollections";
import { ICollectionsProps } from "../../types/interfacesComponent";

import styles from "./EditDelete.styles";

export const EditDelete = ({ collection }: ICollectionsProps) => {
  const editPress = () => {
    //Funcion eliditar
  };

  const deletePress = () => {
    //Funcion eliminar
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
        onPress={deletePress}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};
