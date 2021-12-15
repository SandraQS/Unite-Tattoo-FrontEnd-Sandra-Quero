import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useWorks } from "../../hooks/useWorks";
import { IWorkProps } from "../../types/interfacesComponent";
import { EditDelete } from "../EditDelete/EditDelete";
import styles from "./WorkCard.styles";

const WorkCard = ({ work }: IWorkProps) => {
  const [longPress, setLongPress] = useState(false);
  const { deleteWork, editWork } = useWorks();

  const showButtons = () => {
    setLongPress(!longPress);
  };
  const onPressWork = () => {
    setLongPress(false);
  };

  const deletePress = () => {
    deleteWork(work.id);
    setLongPress(false);
  };

  const editPress = () => {
    editWork(work);
    setLongPress(false);
  };

  return (
    <TouchableOpacity
      onPress={onPressWork}
      onLongPress={showButtons}
      activeOpacity={0.6}
    >
      <View style={styles.workContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: work.image }} style={styles.imageWork} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleWork}>{work.tittle}</Text>
          <Text style={styles.styleWork}>{work.tattooStyles}</Text>
          <Text style={styles.textWork}>{work.description}</Text>
        </View>

        <View style={styles.buttonsEditDelete}>
          {longPress && (
            <EditDelete functionGoEdit={editPress} pressDelete={deletePress} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkCard;
