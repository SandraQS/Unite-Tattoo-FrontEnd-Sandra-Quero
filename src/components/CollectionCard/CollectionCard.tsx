import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ICollectionsProps } from "../../types/interfacesComponent";
import { EditDelete } from "../EditDelete/EditDelete";

import style from "./CollectionCard.styles";

const CollectionCard = ({
  collection,
  functionGoWorks,
  functionGoEdit,
}: ICollectionsProps) => {
  const [longPress, setLongPress] = useState(false);
  const showButtons = () => {
    setLongPress(!longPress);
  };

  const onPressCollection = () => {
    if (longPress) {
      setLongPress(false);
    } else {
      functionGoWorks(collection);
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
              <EditDelete
                collection={collection}
                setLongPress={setLongPress}
                functionGoEdit={functionGoEdit}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;
