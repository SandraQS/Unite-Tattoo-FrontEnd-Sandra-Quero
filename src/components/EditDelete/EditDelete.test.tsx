import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { EditDelete } from "./EditDelete";

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
      const setLongPress = jest.fn();
      const functionGoEdit = jest.fn();
      const store = configureStore();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <EditDelete
              collection={collection}
              setLongPress={setLongPress}
              functionGoEdit={functionGoEdit}
            />
          </NavigationContainer>
        </Provider>
      );

      const editButton = screen.getByText("Editar");
      const deleteButton = screen.getByText("Eliminar");

      expect(editButton).not.toBeNull();
      expect(deleteButton).not.toBeNull();
    });
  });
  describe("When it is clicked at button edit", () => {
    test("Then it should call the functionGoEdit function", () => {
      const collection = {
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        tattooStyles: "Acuarela",
        works: [],
        id: "1",
      };
      const setLongPress = jest.fn();
      const functionGoEdit = jest.fn();
      const store = configureStore();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <EditDelete
              collection={collection}
              setLongPress={setLongPress}
              functionGoEdit={functionGoEdit}
            />
          </NavigationContainer>
        </Provider>
      );

      const editButton = screen.getByText("Editar");
      fireEvent.press(editButton);

      expect(functionGoEdit).toHaveBeenCalled();
    });
  });
});
