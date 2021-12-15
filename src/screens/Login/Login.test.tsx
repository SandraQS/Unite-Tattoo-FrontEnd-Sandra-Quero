import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Login } from "./Login";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

// beforeAll(() => {
//   server.listen({
//     onUnhandledRequest: "warn",
//   });
// });

// afterEach(() => {
//   server.resetHandlers();
// });

// afterAll(() => {
//   server.close();
// });

describe("Given Login screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show two inputs with 'Email' and 'Name', button 'Registrarme' and butto 'Candelar", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      (global as any).FormData = jest.fn().mockReturnValue({
        append: jest.fn(),
      });

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <Login />
          </NavigationContainer>
        </Provider>
      );

      const labeltattooName = "name";
      const labeltattooPassword = "password";

      await waitFor(() => {
        const inputName = screen.findByLabelText(labeltattooName);
        const inputPassword = screen.findByLabelText(labeltattooPassword);

        const buttons = screen.queryByA11yRole("button");

        expect(inputName).not.toBeNull();
        expect(inputPassword).not.toBeNull();
        expect(buttons).not.toBeNull();
      });
    });
  });
});
