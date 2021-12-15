import GeneralButton from "./GeneralButton";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { useCollections } from "../../hooks/useCollections";

import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

describe("Given GeneralButton component", () => {
  describe("When it's rendered", () => {
    test("Then it should show receives text and call the function receives", () => {
      const textButton = "REGISTRARME COMO TATUADOR";
      const functionOnPress = jest.fn();

      const screen = render(
        <GeneralButton
          textButton={textButton}
          functionOnPress={functionOnPress}
          // eslint-disable-next-line comma-dangle
        />
      );

      const button = screen.getByText(textButton);

      fireEvent.press(button);
      expect(button).not.toBeNull();
      expect(functionOnPress).toHaveBeenCalled();
    });
  });

  describe("When the user clicked in the button 'crear colección'", () => {
    test("Then it should got to collections, and show list (show a button card, with titlte of tattoo artist style)", async () => {
      const textButton = "REGISTRARME COMO TATUADOR";
      const collectionData = { tattooStyles: "Acuarela" };
      //  const CreateClick = jest.fn().mockImplementation(
      //    jest.fn().mockReturnValue({
      //      id: 1,
      //      name: "hola"
      //    })
      //  )
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      // (global as any).FormData = jest.fn().mockReturnValue({
      //   append: jest.fn(),
      // });
      // new FormData();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <GeneralButton
              textButton={textButton}
              functionOnPress={jest.fn()}
            />
          </NavigationContainer>
        </Provider>
      );

      await waitFor(async () => {
        const button = await screen.findByText(textButton);
        await fireEvent.press(button);

        const cardCollection = screen.queryAllByTestId("collectionCardButton");
        const titleWork = screen.queryByText("MIS COLECCIONES");
        const tattoStyle = screen.queryByText("Acuarela");

        expect(cardCollection).not.toBeNull();
        expect(titleWork).not.toBeNull();
        expect(tattoStyle).not.toBeNull();
      });
    });
  });
});
