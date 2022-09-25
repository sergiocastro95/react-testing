import { ReactElement } from "react";
import Todo from "../domain/Todo";
import { createTodo } from "../services/createTodo";
import "../styles/components/TodoForm.css";
import SubmitButton from "./buttons/SubmitButton";
import CheckBoxInput from "./inputs/CheckBoxInput";
import TextInput from "./inputs/TextInput";

const TodoForm = (): ReactElement => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const completed = !!formData.get("completed");
    console.log(completed);
    if (title) createTodo({ title, completed });
  };
  return (
    <div className="todo-form">
      <h2 className="todo-form-title">Insert new TODO</h2>
      <form onSubmit={onSubmit}>
        <TextInput id={"title"} label={"Title"} name={"title"} required />
        <CheckBoxInput
          label="Already completed?"
          id={"completed"}
          name={"completed"}
        />

        <SubmitButton value="Add TODO" />
      </form>
    </div>
  );
};
export default TodoForm;
