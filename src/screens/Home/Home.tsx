import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";
import Prueba from "../../components/Prueba/Prueba";

export const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Prueba />
      <Button
        title="Vamos a Prueba2"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </>
  );
};
