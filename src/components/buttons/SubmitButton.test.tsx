import React from "react";
import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton tests", () => {
  test("check title renders", () => {
    const label = "Login";

    render(<SubmitButton value={label} />);
    const linkElement = screen.getByText(label);
    expect(linkElement).toBeInTheDocument();
  });
});
