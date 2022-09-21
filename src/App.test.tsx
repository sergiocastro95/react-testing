import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's check your TODO list!/i);
  expect(linkElement).toBeInTheDocument();
});
