import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IWorkProps } from "../../types/interfacesComponent";
import { EditDelete } from "../EditDelete/EditDelete";

import styles from "./WorkCard.styles";

const WorkCard = ({ work }: IWorkProps) => {
  const [longPress, setLongPress] = useState(false);
  const showButtons = () => {
    setLongPress(!longPress);
  };

  return (
    <TouchableOpacity onLongPress={showButtons} activeOpacity={0.6}>
      <View style={styles.workContainer}>
        <View style={styles.imageContainer}>
          {/* <Image source={{ uri: work.image }} style={styles.imageWork} /> */}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleWork}>TITULO TRABAJO</Text>
          <Text style={styles.styleWork}>Estilo</Text>
          <Text style={styles.textWork}>Descripción</Text>
        </View>

        <View style={styles.buttonsEditDelete}>
          {longPress && (
            <EditDelete collection={work} setLongPress={setLongPress} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkCard;
