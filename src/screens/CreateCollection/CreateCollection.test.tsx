import React from "react";
import { server } from "../../mocks/server";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
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
      (global as any).FormData = jest.fn().mockReturnValue({
        append: jest.fn(),
      });

      new FormData();

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

  describe("When the user fills in the input", () => {
    test("Then it should show a button 'crear colección'", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      (global as any).FormData = jest.fn().mockReturnValue({
        append: jest.fn(),
      });
      new FormData();

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

      await waitFor(async () => {
        const titleScreen = await screen.queryByText(textTitle);
        const inputStyle = await screen.findByLabelText(labelInputStyle);
        const buttonUploadImage = await screen.queryByText(
          textbuttonUploadImage
        );

        // eslint-disable-next-line object-curly-spacing
        await fireEvent.changeText(inputStyle, { text: { value: "hola" } });

        const textbuttonCreateCollection = "CREAR COLECCIÓN";
        const buttonCreateCollection = await screen.queryByText(
          textbuttonCreateCollection
        );
        expect(buttonCreateCollection).not.toBeNull();
      });
    });
  });

  describe("When the user clicked in the button 'crear colección'", () => {
    test("Then it should got to collections, and show list (show a button card, with titlte of tattoo artist style)", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      (global as any).FormData = jest.fn().mockReturnValue({
        append: jest.fn(),
      });
      new FormData();

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

      await waitFor(async () => {
        const titleScreen = await screen.queryByText(textTitle);
        const inputStyle = await screen.findByLabelText(labelInputStyle);
        const buttonUploadImage = await screen.queryByText(
          textbuttonUploadImage
        );

        // eslint-disable-next-line object-curly-spacing
        await fireEvent.changeText(inputStyle, { text: { value: "hola" } });

        const textbuttonCreateCollection = "CREAR COLECCIÓN";
        const buttonCreateCollection = await screen.findByText(
          textbuttonCreateCollection
        );

        await fireEvent.press(buttonCreateCollection);
        screen.debug();
        const cardCollection = screen.queryAllByTestId("collectionCardButton");
        const titleWork = screen.queryByText("MIS COLECCIONES");
        const tattoStyle = screen.queryByText("Acuarela");

        expect(cardCollection).not.toBeNull();
        expect(titleWork).not.toBeNull();
        expect(tattoStyle).not.toBeNull();
      });
    });
  });
});
