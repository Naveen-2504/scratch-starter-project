import React from "react";
import Draggable from "react-draggable";

export default function MidArea({
  onDragLeave,
  onDragEnter,
  onDragEnd,
  onDragOver,
  onDrop,
  onDragStart,
  list,
  handleImage,
  handleOnChanges,
  datas,
}) {
  return (
    <div
      onDragLeave={(e) => onDragLeave(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
      className="flex-1 h-full overflow-auto"
    >
      <div onDragStart={(e) => onDragStart(e)} onDragEnd={(e) => onDragEnd(e)}>
        {list.map((arr, i) => {
          return (
            <Draggable>
              {arr?.title?.props?.children ? (
                <div
                  key={i}
                  className={`w-60 flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${
                    arr?.style
                  }`}
                  onClick={() => handleImage({ ...arr })}
                >
                  <>
                    {arr?.title?.props?.children.map((arr) => {
                      if (arr?.type === "input" || arr?.type === "select") {
                        return {
                          ...arr,
                          props: {
                            ...arr.props,
                            onChange: handleOnChanges,
                            value: datas[arr.props.name],
                          },
                        };
                      } else {
                        return arr;
                      }
                    })}
                  </>
                </div>
              ) : (
                <div
                  className={`w-14 flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${arr?.style}`}
                  onClick={() => handleImage({ ...arr })}
                >
                  {arr?.title}
                </div>
              )}
            </Draggable>
          );
        })}
      </div>
    </div>
  );
}
