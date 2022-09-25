import Todo from "../domain/Todo";
import randomIntFromInterval from "../utils/getRandomInt";

export const createTodo = async ({title, completed}: {title: string, completed:boolean}): Promise<boolean> => {
  return new Promise((res, rej) => {
    try{
        const item = localStorage.getItem('todo-list');
        const todoList: Todo[] = item ? JSON.parse(item) : [];
        todoList.push({title, completed, userId:123, id:randomIntFromInterval(1,1000)});
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        res(true);
    }catch (e) {
        res(false);
    }
  });
};

