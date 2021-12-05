import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import RoutesEnum from "../../navigation/routes";
import { ICollectionsProps } from "../../types/interfacesComponent";
import { CollectionsTattooArtistScreenNavigationProp } from "../../types/navigation.types";
import { EditDelete } from "../EditDelete/EditDelete";

import style from "./CollectionCard.styles";

const CollectionCard = ({ collection }: ICollectionsProps) => {
  const navigation =
    useNavigation<CollectionsTattooArtistScreenNavigationProp>();
  const [longPress, setLongPress] = useState(false);
  const showButtons = () => {
    setLongPress(!longPress);
  };

  const onPressCollection = () => {
    if (longPress) {
      setLongPress(false);
    } else {
      navigation.navigate(RoutesEnum.works);
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
          <View style={style.buttons}>
            {longPress && (
              <EditDelete collection={collection} setLongPress={setLongPress} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;
