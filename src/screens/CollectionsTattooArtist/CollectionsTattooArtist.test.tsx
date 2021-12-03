import React from "react";
import { server } from "../../mocks/server";
import { render } from "@testing-library/react-native";
import AllWorks from "../AllWorks/AllWorks";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "../../navigation/MainNavigator";

jest.mock("@react-native-community/async-storage");

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given AllWorks screen", () => {
  describe("When", () => {
    test("Then it should", () => {
      const store = configureStore();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <AllWorks />
          </NavigationContainer>
        </Provider>
      );

      expect(screen).not.toBeNull();
    });
  });
});
