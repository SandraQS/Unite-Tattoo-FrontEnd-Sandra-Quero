import React from "react";
import { server } from "../../mocks/server";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import CollectionsTattooArtist from "./CollectionsTattooArtist";
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

describe("Given CollectionsTattoArtist screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button card, with titlte of tattoo artist style", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <CollectionsTattooArtist />
          </NavigationContainer>
        </Provider>
      );

      await waitFor(() => {
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
