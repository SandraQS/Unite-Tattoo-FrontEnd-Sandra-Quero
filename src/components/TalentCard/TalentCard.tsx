import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TalentCard } from "../../types/components.types";

const TalentCard = ({
  imageWork,
  titleWork,
  subtitleWork,
  functionOnPress,
}: TalentCard) => {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: "",
          }}
        />

        <View>
          <Text>{titleWork}</Text>
          <Text>{subtitleWork}</Text>
        </View>
      </View>
    </View>
  );
};

export default TalentCard;
