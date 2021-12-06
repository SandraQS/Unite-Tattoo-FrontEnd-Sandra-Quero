import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IWorkProps } from "../../types/interfacesComponent";
import styles from "./WorkCard.styles";

const WorkCard = ({ work }: IWorkProps) => {
  // const [longPress, setLongPress] = useState(false);

  // const showButtons = () => {
  //   setLongPress(!longPress);
  // };
  // const onPressWork = () => {
  //   if (longPress) {
  //     setLongPress(false);
  // };
  return (
    <TouchableOpacity
      /* onPress={onPressWork} */ onLongPress={() => {}}
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
          {/* {longPress && (
            <EditDelete collection={work} setLongPress={setLongPress} />
          )} */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkCard;
