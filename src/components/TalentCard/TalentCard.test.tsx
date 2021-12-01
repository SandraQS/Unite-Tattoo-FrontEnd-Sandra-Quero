import { render } from "@testing-library/react-native";
import React from "react";
import { IWork } from "../../types/interfacesComponent";
import TalentCard from "./TalentCard";

describe("Given TalentCard.test component", () => {
  describe("When it's rendered, an receives tattooArtis, tattoStyles and url image", () => {
    test("Then it should show a card with this titleCard, subtitleCard and image", () => {
      const work: IWork = {
        collectionWork: ["61a37f78b0e47a2b50e4635b"],
        description: "Loremm",
        id: "61a3b9ca4cc19250ca826626",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638119881947-.png",
        likes: 0,
        tattooArtist: "Javi Wolff",
        tattooStyles: "Acuarela",
        tittle: "Lobo",
      };

      const screen = render(<TalentCard key={work.id} work={work} />);

      const titleCard = screen.getByText(work.tattooArtist);
      const subTitleCard = screen.getByText(work.tattooStyles);
      const imageCard = screen.findByRole("image")

      expect(screen).not.toBeNull();
      expect(titleCard).not.toBeNull();
      expect(subTitleCard).not.toBeNull();
      expect(imageCard).not.toBeNull();
    });
  });
});
