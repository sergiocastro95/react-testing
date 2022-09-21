import Todo from "../domain/Todo";

const getTodoList = async (): Promise<Todo[]> => {
  return new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => res(json))
      .catch(() => res([]));
  });
};

export default getTodoList;
