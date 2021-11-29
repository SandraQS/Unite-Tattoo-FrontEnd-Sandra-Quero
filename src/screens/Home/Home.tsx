import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";
import Prueba from "../../components/Prueba/Prueba";
import RoutesEnum from "../../navigation/routes";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

export const Home = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <>
      <Prueba />
      <Button
        title="Vamos a Prueba2"
        onPress={() => {
          navigation.navigate(RoutesEnum.login);
        }}
      />
    </>
  );
};
