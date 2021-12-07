import { render } from "@testing-library/react-native";
import React from "react";
import CollectionCard from "./CollectionCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";

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

describe("Given a CollectionCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const collection = {
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        tattooStyles: "Acuarela",
        id: "2",
      };
      const functionGoWorks = jest.fn();
      const functionGoEdit = jest.fn();
       const store = configureStore();
      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
          <CollectionCard
          functionGoWorks={functionGoWorks}
          collection={collection}
          functionGoEdit={functionGoEdit}
        />
          </NavigationContainer>
        </Provider>
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
