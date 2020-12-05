import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterOption, totalTodo } from "../store/todoList";

export default function TodoFilter() {
  const recoilSetFilter = useSetRecoilState(filterOption);
  const recoilFilterOption = useRecoilValue(filterOption);
  const recoilTotalTodo = useRecoilValue(totalTodo);

  const filters = [
    {
      key: "all",
      type: "Show All",
      label: "ALL",
    },
    {
      key: "complete",
      type: "Show Complete",
      label: "Done",
    },
    {
      key: "unCOmplete",
      type: "Show UnComplete",
      label: "Pending",
    },
  ];

  return (
    <div className="py-4 w-full flex-shrink-0">
      <div className="grid grid-cols-3 cursor-pointer justify-center divide-x overflow-hidden rounded-md border border-gray-300 bg-gray-50 shadow">
        {filters.map((filter) => (
          <h1
            key={filter.key}
            className={[
              "p-2 grid place-items-center text-center transition duration-200",
              recoilFilterOption === filter.type
                ? "bg-blue-700 text-white"
                : "text-gray-700 hover:bg-blue-100 shadow-inner",
            ].join(" ")}
            onClick={() => recoilSetFilter(filter.type)}
          >
            {filter.label} : {recoilTotalTodo[filter.key]}
          </h1>
        ))}
      </div>
    </div>
  );
}
