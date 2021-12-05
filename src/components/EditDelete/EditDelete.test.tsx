import { render } from "@testing-library/react-native";
import React from "react";
import { EditDelete } from "./EditDelete";
import { getDataObject } from "../../storage/asyncStorage";

jest.mock("@react-native-community/async-storage");

describe("Given EditDelete component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two buttons whith text 'Editar' and 'Eliminar'", () => {
      const collection = {
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        tattooStyles: "Acuarela",
        works: [],
        id: "1",
      };
      const screen = render(<EditDelete collection={collection} />);

      const editButton = screen.getByText("Editar");
      const deleteButton = screen.getByText("Eliminar");

      expect(editButton).not.toBeNull();
      expect(deleteButton).not.toBeNull();
    });
  });
});
