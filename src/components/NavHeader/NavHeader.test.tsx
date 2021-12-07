import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import NavHeader from "./NavHeader";
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

describe("Given a NavHeader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const nameUser = "Sandra";
      const store = configureStore();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <NavHeader nameUser={nameUser} />
          </NavigationContainer>
        </Provider>
      );

      expect(screen).toMatchSnapshot();
    });
  });

  describe("When it is click at logo", () => {
    test("Then it should call the receives function", () => {
      const nameUser = "Log Out";
      const goBack = jest.fn();
      const store = configureStore();
      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <NavHeader nameUser={nameUser} />
          </NavigationContainer>
        </Provider>
      );

      const button = screen.getByRole("button");

      fireEvent.press(button);
      expect(goBack).toHaveBeenCalled();
    });
  });
});
