import { render } from "@testing-library/react-native";
import React from "react";
import CollectionCard from "./CollectionCard";

describe("Given a CollectionCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const collection = {
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        tattooStyles: "Acuarela",
      };
      const screen = render(<CollectionCard collection={collection} />);

      expect(screen).toMatchSnapshot();
    });
  });
});
