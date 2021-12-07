import { render } from "@testing-library/react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../redux/store";
import { Provider } from "react-redux";
import { BottomNavigator } from "./BottomNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mockReturnValues: any = {
  token: JSON.stringify("token"),
};

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
  multiSet: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
  getItem: jest.fn((key) => {
    return new Promise((resolve) => {
      if (mockReturnValues[key]) {
        resolve(mockReturnValues[key]);
      } else {
        resolve(null);
      }
    });
  }),
  removeItem: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
}));

describe("Given BottomNavigator navigation", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const store = configureStore();
      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <BottomNavigator />
          </NavigationContainer>
        </Provider>
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
