import React from "react";
import { Blocks } from "./data";

export default function Sidebar({
  onDragLeave,
  onDragEnter,
  onDragEnd,
  onDragOver,
  onDrop,
  onDragStart,
  handleOnChange,
  data,
}) {
  return (
    <div
      onDragLeave={(e) => onDragLeave(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
      className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
    >
      {Blocks({ handleOnChange, data }).map((arrs, index) => {
        return (
          <>
            <div className={`font-bold ${arrs.style}`}>{arrs.title}</div>
            <>
              {arrs.value.map((arr, i) => {
                return (
                  <div
                    key={i}
                    onDragStart={(e) => onDragStart(e, index, i)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <div
                      className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${arr?.style}`}
                    >
                      {arr?.title}
                    </div>
                  </div>
                );
              })}
            </>
          </>
        );
      })}
    </div>
  );
}
