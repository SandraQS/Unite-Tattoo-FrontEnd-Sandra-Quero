import { render } from "@testing-library/react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../redux/store";
import { Provider } from "react-redux";
import { BottomNavigator } from "./BottomNavigator";

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
