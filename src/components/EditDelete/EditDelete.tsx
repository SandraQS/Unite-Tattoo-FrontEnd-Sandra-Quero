import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCollections } from "../../hooks/useCollections";
import RoutesEnum from "../../navigation/routes";
import { ICollectionsProps } from "../../types/interfacesComponent";
import { CollectionsTattooArtistScreenNavigationProp } from "../../types/navigation.types";

import styles from "./EditDelete.styles";

export const EditDelete = ({ collection, setLongPress }: ICollectionsProps) => {
  const navigation =
    useNavigation<CollectionsTattooArtistScreenNavigationProp>();

  const { deleteCollection } = useCollections();
  const { id } = collection;
  const editPress = () => {
    navigation.navigate(RoutesEnum.edit);
    setLongPress(false)
  };

  const deletePress = () => {
    deleteCollection(id);
    setLongPress(false)

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
