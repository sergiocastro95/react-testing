import { ReactElement } from "react";
import useGetTodoList from "../hooks/useGetTodoList";
import TodoCard from "./TodoCard";
import "../styles/components/TodoList.css";

const TodoList = ({}): ReactElement => {
  const { list, loading } = useGetTodoList();
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="todo-list">
      {list?.map((item, index) => (
        <TodoCard item={item} />
      ))}
    </div>
  );
};

export default TodoList;
