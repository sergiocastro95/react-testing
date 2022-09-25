import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput tests", () => {
  test("check title renders", () => {
    const label = "First Name";

    render(<TextInput label={label} id="first-name" name="first-name" />);
    const linkElement = screen.getByText(label);
    expect(linkElement).toBeInTheDocument();
  });
});
