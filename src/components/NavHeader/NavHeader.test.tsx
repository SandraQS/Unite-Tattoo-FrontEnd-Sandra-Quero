import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import NavHeader from "./NavHeader";

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
});
