import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { addTodo} from "../store/todoList";

export default function TodoInput() {

    const [inputValue, setInputValue] = useState("");
    const recoilAddTodo = useSetRecoilState(addTodo);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        recoilAddTodo(inputValue);
        setInputValue("");
      };


    return (
        <form className="w-full flex-shrink-0 overflow-hidden grid grid-cols-3 rounded-md border shadow border-gray-300 divide-x divide-gray-300" onSubmit={(e) => onSubmitHandler(e)}>
            <input className="col-span-2 px-2 focus:outline-none shadow-inner text-lg" type="text" placeholder="list something here ..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <input className={["col-span-1 cursor-pointer px-4 py-2 transform active:scale-110 font-bold focus:outline-none disabled:bg-white transition duration-300",!inputValue ? 'pointer-events-none bg-gray-50 text-gray-700' : 'bg-blue-700 text-white'].join(" ")} type="submit" value="Add New"/>
        </form>
    )
}
