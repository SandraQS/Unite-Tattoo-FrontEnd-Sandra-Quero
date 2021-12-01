import React from "react";
import { Text, View } from "react-native";
import { TitlleProps } from "../../types/components.types";

import style from "./Title.styles";

const Title = ({ text, textBold }: TitlleProps) => {
  return (
    <View>
      <Text style={style.title}>
        {text}
        <Text style={style.titleBold}>{textBold}</Text>
      </Text>
    </View>
  );
};

export default Title;
