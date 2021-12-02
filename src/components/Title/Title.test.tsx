import { render } from "@testing-library/react-native";
import React from "react";
import Title from "./Title";

describe("Given Title component", () => {
  describe("When it's rendered, and receives a text and textBold", () => {
    test("Then it should show this text", () => {
      const textTitle = "Titulo";
      const textTitleBold = " en negrita";

      const screen = render(
        <Title text={textTitle} textBold={textTitleBold} />
      );

      // const textExpected = screen.getByText(textTitle);
      const titleExpected = screen.getByText("Titulo en negrita");

      // expect(textExpected).not.toBeNull();
      expect(titleExpected).not.toBeNull();
    });
  });
});
