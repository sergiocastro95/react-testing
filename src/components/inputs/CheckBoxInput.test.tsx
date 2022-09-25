import React from "react";
import { render, screen } from "@testing-library/react";
import CheckBoxInput from "./CheckBoxInput";

describe("CheckBoxInput tests", () => {
  test("check title renders", () => {
    const label = "I want to subscribe to newsletter";

    render(<CheckBoxInput label={label} id="first-name" value="first-name" />);
    const linkElement = screen.getByText(label);
    expect(linkElement).toBeInTheDocument();
  });
});
