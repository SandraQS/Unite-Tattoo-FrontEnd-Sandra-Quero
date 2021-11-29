import { useNavigation } from "@react-navigation/core";
import React from "react";
import GeneralButton from "../../components/Button/GeneralButton";
import RoutesEnum from "../../navigation/routes";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

const Register = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <GeneralButton
      textButton="REGISTRARME COMO TATUADOR"
      functionOnPress={() => {
        navigation.navigate(RoutesEnum.login);
      }}
    />
  );
};

export default Register;
