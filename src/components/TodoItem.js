import { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { removeTodo, toggleTodoStatus } from '../store/todoList';

export default function TodoItem({todo,index}) {

    //just some animate
    const [hoverId, setHoverId] = useState(false);

    const recoilRemoveTodo = useSetRecoilState(removeTodo);
    const recoilToggleTodoStatus = useSetRecoilState(toggleTodoStatus);
    
    return (
        <li
            style={{animationDelay:index*0.1+'s'}}
            className="opacity-0 animate-fromLeft flex group cursor-pointer w-full px-6 py-4 bg-white rounded-md shadow-sm items-center transition duration-200 transform hover:scale-105 hover:bg-blue-600"
            onClick={() => recoilToggleTodoStatus(todo.id)}
            onMouseEnter={()=>setHoverId(todo.id)}
            onMouseLeave={()=>setHoverId('')}
          >
            {/* todo status */}
            <div className="w-5 h-5 relative curosr-pointer rounded-sm flex-shrink-0">
              <div className={todo.isComplete ? "hidden" : "w-full h-full absolute inset-0 pointer-events-none bg-white border border-black rounded-sm group-hover:border-white group-hover:bg-blue-600"}></div>
              <svg className={["rounded-sm w-full h-full absolute bg-blue-600 inset-0 text-white group-hover:bg-white  group-hover:text-blue-600",!todo.isComplete && 'hidden'].join(" ")} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <label htmlFor="toggle" className={!todo.isComplete ? "absolute -bottom-0.5 -right-0.5 block bg-blue-500 w-2 h-2 rounded-full group-hover:bg-white" : 'hidden'}></label>
            </div>

            {/* todo details */}
            <div className="w-full mx-4 text-left">
              <h1 className={["relative inline-block text-xl h-full select-none capitalize group-hover:text-white",todo.isComplete ?  "text-gray-600" : "text-gray-900"].join(" ")}>
                {todo.title}
                <div className={["absolute w-full h-px top-1/2 bg-gray-500 origin-left transition duration-200 transform group-hover:bg-white",todo.isComplete  ? 'scale-x-1' : 'scale-x-0'].join(" ")}></div>
              </h1>
              <p className="text-gray-500 group-hover:text-gray-300">{todo.time}</p>
            </div>

            {/* todo action */}
            <button onClick={()=>recoilRemoveTodo(todo.id)} className="focus:outline-none rounded-md text-center select-none">
              <svg className={["w-6 h-6 transform origin-center ml-auto hover:rotate-6", hoverId === todo.id ? 'text-white' : "text-gray-600"].join(" ")} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </li>
    )
}
