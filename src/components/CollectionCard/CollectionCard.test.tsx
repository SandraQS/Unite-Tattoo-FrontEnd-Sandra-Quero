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
        id: "2",
      };
      const functionGoWorks = jest.fn();
      const functionGoEdit = jest.fn();

      const screen = render(
        <CollectionCard
          functionGoWorks={functionGoWorks}
          collection={collection}
          functionGoEdit={functionGoEdit}
        />
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
