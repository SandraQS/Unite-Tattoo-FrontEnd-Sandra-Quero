import { render } from "@testing-library/react-native";
import React from "react";
import { EditDelete } from "./EditDelete";

describe("Given EditDelete component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two buttons whith text 'Editar' and 'Eliminar'", () => {
      const screen = render(<EditDelete />);

      const editButton = screen.getByText("Editar");
      const deleteButton = screen.getByText("Eliminar");

      expect(editButton).not.toBeNull();
      expect(deleteButton).not.toBeNull();
    });
  });
});
