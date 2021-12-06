import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCollections } from "../../hooks/useCollections";
import { IEditDeleteProps } from "../../types/interfacesComponent";

import styles from "./EditDelete.styles";

export const EditDelete = ({
  collection,
  setLongPress,
  functionGoEdit,
}: IEditDeleteProps) => {
  const { deleteCollection } = useCollections();
  const { id } = collection;
  const editPress = () => {
    functionGoEdit(collection);
    setLongPress(false);
  };

  const deletePress = () => {
    deleteCollection(id);
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
        onPress={deletePress}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};
