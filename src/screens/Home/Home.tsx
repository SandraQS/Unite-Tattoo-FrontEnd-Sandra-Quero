import React from "react";

import AutoHeightImage from "react-native-auto-height-image";

import AllWorks from "../AllWorks/AllWorks";
import Register from "../Register/Register";

import UniteTattoo from "../UniteTattoo/UniteTattoo";

export const Home = () => {
  return (
    <>
      <Register />
      <AutoHeightImage width={100} source={require(logoImage)} />
    </>
  );
};
