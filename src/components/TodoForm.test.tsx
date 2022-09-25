import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";
import * as functions from "../services/createTodo";

describe("TodoForm tests", () => {
  test("check title renders", () => {
    render(<TodoForm />);
    const linkElement = screen.getByText(/Insert new TODO/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("check create todo", () => {
    render(<TodoForm />);
    const spy = jest.spyOn(functions, "createTodo");
    spy.mockReturnValue(new Promise((res) => res(true)));

    const textInput = screen.getByLabelText("Title");
    fireEvent.change(textInput, { target: { value: "Go to gym" } });
    fireEvent.click(screen.getByText(/Add TODO/i));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  test("check try create without title", () => {
    render(<TodoForm />);
    const spy = jest.spyOn(functions, "createTodo");
    const textInput = screen.getByLabelText("Title");
    expect(textInput).toBeInvalid();
    fireEvent.click(screen.getByText(/Add TODO/i));
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
