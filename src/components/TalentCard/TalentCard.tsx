import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ITalentCard } from "../../types/components.types";

const TalentCard = ({
  imageWork,
  tattooArtist,
  styleWork,
  functionOnPress,
}: ITalentCard) => {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: "https://logiabarcelona.com/wp-content/uploads/photo-gallery/Bruno%20Almeida/tatuaje_brazo_flores_plantas_logia_barcelona_bruno_almeida.jpg",
          }}
        />

        <View>
          <Text>{tattooArtist}</Text>
          <Text>{styleWork}</Text>
        </View>
      </View>
    </View>
  );
};

export default TalentCard;
