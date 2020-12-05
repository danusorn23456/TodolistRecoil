import TodoFilter from "./components/TodoFilter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {

  return (
    <div className="h-screen flex p-4 justify-center bg-indigo-50 overflow-y-hidden">
      <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-4 shadow-xl rounded-md flex flex-col justify-start items-center bg-white overflow-hidden">
          <TodoInput />
          <TodoFilter />
          <TodoList />
      </div>
    </div>
  );
}
