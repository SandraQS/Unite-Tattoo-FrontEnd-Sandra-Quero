import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TalentCardProps } from "../../types/components.types";

import style from "./TalentCard.styles";

const TalentCard = ({ work }: TalentCardProps) => {
  return (
    <View style={style.mainContainerCard}>
      <View style={style.talentCard}>
        <View style={style.imageContainer}>
          <Image source={{ uri: work.image }} style={style.imageWork} />

          <View style={style.textContainer}>
            <Text style={style.tattooArtistTitle}>{work.tattooArtist}</Text>
            <Text style={style.styleSubtitle}>{work.tattooStyles}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TalentCard;
