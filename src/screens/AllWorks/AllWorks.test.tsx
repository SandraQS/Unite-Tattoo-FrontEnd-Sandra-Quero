
import React from "react";
import { server } from "../../mocks/server";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllWorks from "./AllWorks";
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

describe("Given AllWorks screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show a works list, with titlte, tattoo artist style and description", async () => {
      const store = configureStore();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <AllWorks />
          </NavigationContainer>
        </Provider>
      );

      await waitFor(() => {
        const titleWork = screen.findByText("Pajaritos");
        const tattooStyleWork = screen.findByText("Acuarela");
        const description = screen.findByText("descripción");
        
        expect(titleWork).not.toBeNull();
        expect(tattooStyleWork).not.toBeNull();
        expect(description).not.toBeNull();
      });
    });
  });
  });