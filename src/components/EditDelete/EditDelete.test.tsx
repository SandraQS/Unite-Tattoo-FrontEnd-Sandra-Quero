import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { EditDelete } from "./EditDelete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { server } from "../../mocks/server";
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "warn",
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given EditDelete component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two buttons whith text 'Editar' and 'Eliminar'", () => {
      const store = configureStore();
      //   AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      const collection = {
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        tattooStyles: "Acuarela",
        works: [],
        id: "1",
      };
      const deletePress = jest.fn();
      const functionGoEdit = jest.fn();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <EditDelete
              functionGoEdit={functionGoEdit}
              pressDelete={deletePress}
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
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      const collection = {
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        tattooStyles: "Acuarela",
        works: [],
        id: "1",
      };
      const deletePress = jest.fn();
      const functionGoEdit = jest.fn();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <EditDelete
              functionGoEdit={functionGoEdit}
              pressDelete={deletePress}
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
