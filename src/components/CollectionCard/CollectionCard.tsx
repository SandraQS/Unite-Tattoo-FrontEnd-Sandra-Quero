import React from "react";
import { Image, Text, View } from "react-native";

import style from "./CollectionCard.styles";

const CollectionCard = ({ collection }: any) => {
  return (
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
      </View>
    </View>
  );
};

export default CollectionCard;
