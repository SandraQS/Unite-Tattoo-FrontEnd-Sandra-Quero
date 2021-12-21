import React from "react";
import { server } from "../../mocks/server";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PorfileTattooArtist } from "./PorfileTattooArtist";

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
describe("Give PorfileTattooArtist screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show match with the last snapsot", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <PorfileTattooArtist />
          </NavigationContainer>
        </Provider>
      );

      await waitFor(() => {
        expect(screen).toMatchSnapshot();
      });
    });
  });
});
