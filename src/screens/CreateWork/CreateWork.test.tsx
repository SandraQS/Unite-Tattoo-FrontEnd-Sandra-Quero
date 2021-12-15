import React from "react";
import { server } from "../../mocks/server";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreateWork } from "./CreateWork";

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

describe("Given CreateWork screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button card, with titlte of tattoo artist style", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      (global as any).FormData = jest.fn().mockReturnValue({
        append: jest.fn(),
      });
      const route = {
        params: {
          collection: {
            tattooStyles: "Realista",
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638921273323-.png",
            works: [[Object]],
            id: "61aff43a77a75540f78b8449",
          },
        },
      };
      const { params } = route;
      const toUpperCase = jest.fn();

      new FormData();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <CreateWork route={route} />
          </NavigationContainer>
        </Provider>
      );

      const textTitle = "AÑADIR NUEVO PROYECTO";
      const labelInputTitle = "tittle";
      const labelInputName = "tattooArtist";
      const labelInputDescription = "description";

      const textbuttonUploadImage = "SUBIR IMAGEN";

      await waitFor(() => {
        const titleScreen = screen.queryByText(textTitle);
        const inputTitle = screen.findByLabelText(labelInputTitle);
        const inputName = screen.findByLabelText(labelInputName);
        const inputDescription = screen.findByLabelText(labelInputDescription);
        const buttonUploadImage = screen.queryByText(textbuttonUploadImage);

        expect(titleScreen).not.toBeNull();
        expect(inputTitle).not.toBeNull();
        expect(inputName).not.toBeNull();
        expect(inputDescription).not.toBeNull();
        expect(buttonUploadImage).not.toBeNull();
      });
    });
  });
});
