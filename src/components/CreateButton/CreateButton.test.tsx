import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import CreateButton from "./CreateButton";

describe("Given CreateButton component", () => {
  describe("When it's clicked", () => {
    test("Then it should call the freceives function", () => {
      const functionCreate = jest.fn();

      const screen = render(<CreateButton functionCreate={functionCreate} />);

      const button = screen.getByRole("button");

      fireEvent.press(button);
      expect(button).not.toBeNull();
      expect(functionCreate).toHaveBeenCalled();
    });
  });
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const functionCreate = jest.fn();
      const screen = render(<CreateButton functionCreate={functionCreate} />);

      expect(screen).toMatchSnapshot();
    });
  });
});
