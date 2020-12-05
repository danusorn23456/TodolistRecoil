import { selector, useSetRecoilState } from "recoil";
import { atom } from "recoil";

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

const todoListDefault = [
  {
    id: '1576996323453',
    title: "sweep picking traning",
    time:'2020-12-5 3:52:12:40',
    isComplete: true,
  },
  {
    id: '1765413549953',
    title: "feed the dog",
    time:'2018-8-3 11:12:43',
    isComplete: false,
  },
];

//state

export const todoList = atom({
  key: "todoList",
  default: todoListDefault,
});

export const filterOption = atom({
  key: "filterOption",
  default: "Show All",
});

//selector

export const totalTodo = selector({
  key:"totalTodo",
  get:({get})=>{
    let _todolist = get(todoList)
    return{
      all:_todolist.length,
      complete:_todolist.filter(todo => todo.isComplete).length,
      unComplete:_todolist.filter(todo => !todo.isComplete).length,
    }
  }
})

export const filterTodoList = selector({
  key: "filterTodoList",
  get: ({ get }) => {
    let _todolist = [...get(todoList)];
    switch (get(filterOption)) {
      case "Show All":
        return _todolist;
      case "Show Complete":
        return _todolist.filter((todo) => todo.isComplete);
      case "Show UnComplete":
        return _todolist.filter((todo) => !todo.isComplete);
      default:
        return _todolist;
    }
  },
});

export const addTodo = selector({
  key: "addTodo",
  set: ({ set, get }, title) => {
    let oldState = get(todoList);
    set(todoList, [
      ...oldState,
      {
        id:Date.now(),
        title: title,
        time:dateTime,
        isComplete: false,
      },
    ]);
  },
});

export const toggleTodoStatus = selector({
  key: "toggleTodoStatus",
  set: ({ set, get }, id) => {
    let oldState = JSON.parse(JSON.stringify(get(todoList)));
    set(
      todoList,
      oldState.map((todo) => {
        todo.id === id && (todo.isComplete = !todo.isComplete);
        return todo;
      })
    );
  },
});

export const removeTodo = selector({
  key: "RemoveTodo",
  set: ({ set, get }, id) => {
    let oldState = JSON.parse(JSON.stringify(get(todoList)));
    set(
      todoList,
      oldState.filter((todo) => todo.id != id )
    );
  },
});

