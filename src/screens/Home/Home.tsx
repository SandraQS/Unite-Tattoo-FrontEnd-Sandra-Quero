import React from "react";
import TalentCard from "../../components/TalentCard/TalentCard";
import Title from "../../components/Title/Title";

import UniteTattoo from "../UniteTattoo/UniteTattoo";

export const Home = () => {
  return (
    <>
      <Title text="HOLA" textBold="QUETAL" />

      <TalentCard
        imageWork="imagen"
        tattooArtist="Bruno"
        styleWork="fine line"
        functionOnPress={() => {}}
      />
    </>
  );
};
