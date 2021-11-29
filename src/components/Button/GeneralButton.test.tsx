import GeneralButton from "./GeneralButton";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Given GeneralButton component", () => {
  describe("When it's rendered", () => {
    test("Then it should show receives text and call the function receives", () => {
      const textButton = "REGISTRARME COMO TATUADOR";
      const functionOnPress = jest.fn();

      const screen = render(
        <GeneralButton
          textButton={textButton}
          functionOnPress={functionOnPress}
          // eslint-disable-next-line comma-dangle
        />
      );

      const button = screen.getByText(textButton);

      fireEvent.press(button);
      expect(button).not.toBeNull();
      expect(functionOnPress).toHaveBeenCalled();
    });
  });
});
