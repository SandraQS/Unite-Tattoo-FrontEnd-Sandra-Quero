import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { EditDelete } from "../EditDelete/EditDelete";

import style from "./CollectionCard.styles";

const CollectionCard = ({ collection }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      onLongPress={() => {}}
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
          <View style={style.buttons}>
            <EditDelete />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;
