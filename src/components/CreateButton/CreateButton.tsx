import React from "react";
import { TouchableOpacity, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

import style from "./CreateButton.styles";

const CreateButton = () => {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
      <View style={style.card}>
        <View style={style.imageContainer}>
          <AutoHeightImage
            width={150}
            source={require("../../assets/crear-rombo.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CreateButton;
