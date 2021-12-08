import React from "react";
import { server } from "../../mocks/server";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreateCollection } from "./CreateCollection";

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

describe("Given CreateCollection screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button card, with titlte of tattoo artist style", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      //       function FormDataMock() {
      //     this.append = jest.fn()
      // }
      //       const FormData = FormDataMock
      //       const collectionFormData = new FormData()

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <CreateCollection />
          </NavigationContainer>
        </Provider>
      );

      const textTitle = "AÑADIR NUEVA COLECCIÓN";
      const labelInputStyle = "tattooStyles";
      const textbuttonUploadImage = "SUBIR IMAGEN";

      await waitFor(() => {
        const titleScreen = screen.queryByText(textTitle);
        const inputStyle = screen.findByLabelText(labelInputStyle);
        const buttonUploadImage = screen.queryByText(textbuttonUploadImage);

        expect(titleScreen).not.toBeNull();
        expect(inputStyle).not.toBeNull();
        expect(buttonUploadImage).not.toBeNull();
      });
    });
  });
});
