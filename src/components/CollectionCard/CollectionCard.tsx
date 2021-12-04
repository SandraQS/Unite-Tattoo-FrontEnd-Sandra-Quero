import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { EditDelete } from "../EditDelete/EditDelete";

import style from "./CollectionCard.styles";

const CollectionCard = ({ collection }: any) => {
  const [longPress, setLongPress] = useState(false);
  const showButtons = () => {
    setLongPress(!longPress);
  };

  const onPressCollection = () => {
    if (longPress) {
      setLongPress(false);
    } else {
      //ir a trabajos
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressCollection}
      onLongPress={showButtons}
      activeOpacity={0.6}
    >
      <View style={style.mainContainerCard}>
        <View style={style.collectionCard}>
          <View style={style.imageContainer}>
            <Image
              source={{ uri: collection.image }}
              style={style.imageCollection}
            />
          </View>

          <View style={style.textContainer}>
            <Text style={style.styleTitle}>{collection.tattooStyles}</Text>
          </View>
          <View style={style.buttons}>{longPress && <EditDelete />}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;
