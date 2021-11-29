import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";

import Prueba2 from "../../components/Prueba2/Prueba2";

export const Login = () => {
  const navigation = useNavigation();
  return (
    <>
      <Prueba2 />
      <Button
        title="Vamos a HOME"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </>
  );
};
