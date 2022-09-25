import { ReactElement } from "react";
import Todo from "../domain/Todo";
import "../styles/components/TodoCard.css";

const TodoCard = ({ item }: { item: Todo }): ReactElement => {
  return (
    <div className="todo-card">
      <span className="todo-card-title">{item.title}</span>
      <div>Status</div>
      <span>{item.completed ? "✅ Completed" : "❌ Uncompleted"}</span>
    </div>
  );
};
export default TodoCard;
