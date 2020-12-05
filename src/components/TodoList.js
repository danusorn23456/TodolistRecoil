import { useRecoilValue } from "recoil";
import { filterTodoList } from "../store/todoList";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const recoilTodoList = useRecoilValue(filterTodoList);

  return (
    <ul className="flex w-full h-full flex-col items-center space-y-4 overflow-y-scroll">
      {recoilTodoList.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index}></TodoItem>
      ))}
    </ul>
  );
}
