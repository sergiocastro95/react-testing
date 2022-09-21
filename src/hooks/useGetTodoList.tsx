import { useEffect, useState } from "react";
import Todo from "../domain/Todo";
import getTodoList from "../services/getTodoList";

interface IUseGetTodoList {
  list?: Todo[];
  loading: boolean;
}
const useGetTodoList = (): IUseGetTodoList => {
  const [list, setList] = useState<Todo[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodoList().then((l) => {
      setList(l);
      setLoading(false);
    });
  }, []);

  return {
    list,
    loading,
  };
};
export default useGetTodoList;
