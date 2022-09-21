import React from "react";
import { render, screen } from "@testing-library/react";
import TodoCard from "./TodoCard";

describe("TodoCard tests", () => {
  test("check title renders", () => {
    const todoItem = {
      title: "Go to gym",
      userId: 1,
      id: 343,
      completed: false,
    };
    render(<TodoCard item={todoItem} />);
    const linkElement = screen.getByText(todoItem.title);
    expect(linkElement).toBeInTheDocument();
  });
  test("check status renders", () => {
    const todoItem = {
      title: "Go to gym",
      userId: 1,
      id: 343,
      completed: false,
    };
    render(<TodoCard item={todoItem} />);
    const linkElement = screen.getByText(/Uncompleted/i);
    expect(linkElement).toBeInTheDocument();
  });
});
