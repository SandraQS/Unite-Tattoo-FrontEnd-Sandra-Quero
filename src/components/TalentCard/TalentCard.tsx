import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ITalentCard } from "../../types/components.types";

import style from "./TalentCard.styles";

const TalentCard = ({
  imageWork,
  tattooArtist,
  styleWork,
  functionOnPress,
}: ITalentCard) => {
  return (
    <View style={style.mainContainerCard}>
      <View style={style.talentCard}>
        <View style={style.imageContainer}>
          <Image
            source={{
              uri: "https://logiabarcelona.com/wp-content/uploads/photo-gallery/Bruno%20Almeida/tatuaje_brazo_flores_plantas_logia_barcelona_bruno_almeida.jpg",
            }}
            style={style.imageWork}
          />

          <View style={style.textContainer}>
            <Text style={style.tattooArtistTitle}>{tattooArtist}</Text>
            <Text style={style.styleSubtitle}>{styleWork}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TalentCard;
