import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { Blocks } from "./components/data";

export default function App() {
  const [mainIndex, setMainIndex] = useState([]);
  const [childIndex, setChildIndex] = useState([]);
  const [list, setList] = useState([]);
  const [showText, setShowText] = useState(false);
  const [data, setData] = useState({
    event_count_1: 10,
    motion_count_1: 10,
    motion_count_2: 10,
    motion_count_3: 10,
    motion_count_4: 10,
    motion_count_5: 10,
    motion_count_6: 10,
    motion_count_7: 10,
    motion_count_8: 10,
    motion_count_9: 10,
    motion_count_10: 10,
    motion_count_11: 10,
    motion_count_12: 10,
    motion_count_13: 10,
    control_count_1: 10,
    control_count_2: 10,
    control_count_3: 10,
    control_count_4: 10,
    control_count_5: 10,
    control_count_6: 10,
    control_count_7: 10,
    look_count_1: "Hello!",
    look_count_2: 10,
    look_count_3: "Hello!",
    look_count_4: "Hmm...",
    look_count_5: 10,
    look_count_6: "Hmm...",
    look_count_7: 10,
    look_count_8: 10,
    look_count_9: 10,
    look_count_10: 10,
    look_count_11: 1,
  });

  const [datas, setDatas] = useState({
    event_count_1: 10,
    motion_count_1: 10,
    motion_count_2: 10,
    motion_count_3: 10,
    motion_count_4: 10,
    motion_count_5: 10,
    motion_count_6: 10,
    motion_count_7: 10,
    motion_count_8: 10,
    motion_count_9: 10,
    motion_count_10: 10,
    motion_count_11: 10,
    motion_count_12: 10,
    motion_count_13: 10,
    control_count_1: 10,
    control_count_2: 10,
    control_count_3: 10,
    control_count_4: 10,
    control_count_5: 10,
    control_count_6: 10,
    control_count_7: 10,
    look_count_1: "Hello!",
    look_count_2: 10,
    look_count_3: "Hello!",
    look_count_4: "Hmm...",
    look_count_5: 10,
    look_count_6: "Hmm...",
    look_count_7: 10,
    look_count_8: 10,
    look_count_9: 10,
    look_count_10: 10,
    look_count_11: 10,
    go: "random",
  });

  const [imageControls, setImageControls] = useState({
    x: 0,
    y: 0,
    rotate: 1,
    value: 0,
    changeX: 0,
    changeY: 0
  });

  const [controls, setControls] = useState({
    image: true,
    value: 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleOnChanges = (e) => {
    const { name, value } = e.target;

    setDatas((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const onDragStart = (evt, mian_index, child_index) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt);
    setMainIndex(mian_index);
    setChildIndex(child_index);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const handleImage = ({ type, plus, count, key, title, ...rest }) => {
    setImageControls((preState) => ({
      ...preState,
      [type]: imageControls?.[type] + count,
      changeX: imageControls["changeX"] + 1,
    }));

    if (plus) {
      setControls((preState) => ({
        ...preState,
        x: imageControls.x / 4 <= datas.motion_count_1 && imageControls.x,
        y: imageControls.y,
      }));
    }

    if (type === "rotate") {
      let value =
        key === "undo"
          ? parseInt(imageControls.rotate) * datas.motion_count_2
          : parseInt(imageControls.rotate) *
            parseInt(`-${datas?.motion_count_3}`);
      setControls((preState) => ({
        ...preState,
        value,
      }));
    }

    if (type === "changeX") {
      setControls((preState) => ({
        ...preState,
        x: imageControls.changeX / 4 <= datas.motion_count_11 && imageControls.changeX,
      }));
    }

    if (type === "setX") {
      setControls((preState) => ({
        ...preState,
        y: imageControls.y,
      }));
    }

    if (type === "direction") {
      setControls((preState) => ({
        ...preState,
        value: parseInt(datas?.motion_count_10),
      }));
    }

    if (type === "goto") {
      let r = ["top", "left", "right", "bottom"];
      let count = Math.floor(Math.random() * 100);
      let style =
        datas.go === "random"
          ? {
              position: "absolute",
              [r[Math.floor(Math.random() * r.length)]]: count,
            }
          : "";
      setControls((preState) => ({
        ...preState,
        style,
      }));
    }

    if (type === "goAxis") {
      setControls((preState) => ({
        ...preState,
        x: datas.motion_count_4,
        y: datas.motion_count_5,
      }));
    }
    if (title?.props?.children) {
      title.props.children.map((arr, i) => {
        if (type === "text") {
          if (arr?.props?.name && arr?.props?.id === "text") {
            setShowText(true);
            setControls((preState) => ({
              ...preState,
              text: datas[arr?.props?.name],
            }));
          }

          if (arr?.props?.name && arr?.props?.id === "sec") {
            setControls((preState) => ({
              ...preState,
              sec: parseInt(datas[arr?.props?.name]),
              type: "text_sec",
            }));
          }
        }

        if (arr?.props?.name && type === "normal_text") {
          setShowText(true);
          setControls((preState) => ({
            ...preState,
            text: datas[arr?.props?.name],
            type: "sec",
          }));
        }

        if (arr?.props?.name && type === "size_text") {
          setControls((preState) => ({
            ...preState,
            imgStyle: {
              ...controls.imgStyle,
              width: `${datas[arr?.props?.name]}px`,
            },
          }));
        }
        if (arr?.props?.name && type === "size_text_per") {
          setControls((preState) => ({
            ...preState,
            imgStyle: {
              ...controls.imgStyle,
              width: `${datas[arr?.props?.name]}%`,
            },
          }));
        }
      });
    }

    if (type === "showImage") {
      setControls((preState) => ({
        ...preState,
        image: true,
      }));
    }

    if (type === "hideImage") {
      setControls((preState) => ({
        ...preState,
        image: false,
      }));
    }
  };

  useEffect(() => {
    if (controls.type === "text_sec") {
      let milli = controls.sec * 1000;
      const timer = setTimeout(() => {
        setShowText(false);
      }, milli);
      return () => clearTimeout(timer);
    }
  }, [controls]);

  const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    setList([
      ...list,
      Blocks({ handleOnChange: handleOnChanges, data: datas })[mainIndex].value[
        childIndex
      ],
    ]);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            onDragLeave={onDragLeave}
            onDragEnter={onDragEnter}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDrop={onDrop}
            handleOnChange={handleOnChange}
            data={data}
          />{" "}
          <MidArea
            onDragLeave={onDragLeave}
            onDragEnter={onDragEnter}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDrop={onDrop}
            handleImage={handleImage}
            handleOnChanges={handleOnChanges}
            list={list}
            datas={datas}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            imageControls={imageControls}
            datas={datas}
            controls={controls}
            showText={showText}
          />
        </div>
      </div>
    </div>
  );
}
