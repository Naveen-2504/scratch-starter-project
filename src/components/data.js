import React from "react";
import Icon from "./Icon";

export const Blocks = ({ handleOnChange, data }) => {
  return [
    {
      title: "Events",
      value: [
        {
          id: 1,
          title: (
            <>
              When
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
              clicked
            </>
          ),
          style: "bg-yellow-500",
        },
        {
          id: 2,
          title: (
            <>
              When
              <select
                name="eventsKey"
                id="eventsKey"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="space">space</option>
                <option value="up arrow">up arrow</option>
                <option value="down arrow">down arrow</option>
                <option value="right arrow">right arrow</option>
                <option value="left arrow">left arrow</option>
                <option value="any">any</option>
                <option value="space">space</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
                <option value="e">e</option>
                <option value="f">f</option>
                <option value="g">g</option>
                <option value="h">h</option>
                <option value="i">i</option>
                <option value="j">j</option>
                <option value="k">k</option>
                <option value="l">l</option>
                <option value="m">m</option>
                <option value="n">n</option>
                <option value="o">o</option>
                <option value="p">p</option>
                <option value="q">q</option>
                <option value="r">r</option>
                <option value="s">s</option>
                <option value="t">t</option>
                <option value="u">u</option>
                <option value="v">v</option>
                <option value="w">w</option>
                <option value="x">x</option>
                <option value="y">y</option>
                <option value="z">z</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              key pressed
            </>
          ),
          style: "bg-yellow-500",
        },
        {
          id: 3,
          title: "When this sprite clicked",
          style: "bg-yellow-500",
        },
        {
          id: 4,
          title: (
            <>
              When backdrop switches to
              <select
                name="eventsDrop"
                id="eventsDrop"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="backdrop1">backdrop1</option>
              </select>
            </>
          ),
          style: "bg-yellow-500",
        },
        {
          id: 5,
          title: (
            <>
              When
              <select
                name="eventCountType"
                id="eventCountType"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="loudness">loudness</option>
                <option value="timer">timer</option>
              </select>
              {">"}{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.event_count_1}
                name="event_count_1"
                className="w-1/6 mx-2 rounded-full"
              />
            </>
          ),
          style: "bg-yellow-500",
        },
        {
          id: 6,
          title: (
            <>
              When I receive
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-yellow-500",
        },
        {
          id: 7,
          title: (
            <>
              broadcast
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-yellow-500",
        },
        {
          id: 8,
          title: (
            <>
              broadcast
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
              and wait
            </>
          ),
          style: "bg-yellow-500",
        },
      ],
    },
    {
      title: "Motion",
      value: [
        {
          id: 9,
          title: (
            <>
              Move
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_1}
                name="motion_count_1"
                className="w-1/6 mx-2 rounded-full"
              />
              steps
            </>
          ),
          style: "bg-blue-500",
          type: "x",
          plus: true,
          count: 1,
        },
        {
          id: 10,
          title: (
            <>
              Turn
              <Icon name="undo" size={15} className="text-white-600 mx-2" />
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_2}
                name="motion_count_2"
                className="w-1/6 mx-2 rounded-full"
              />
              degrees
            </>
          ),
          style: "bg-blue-500",
          type: "rotate",
          key: "undo",
          plus: true,
          count: 1,
        },
        {
          id: 11,
          title: (
            <>
              Turn
              <Icon name="redo" size={15} className="text-white-600 mx-2" />
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_3}
                name="motion_count_3"
                className="w-1/6 mx-2 rounded-full"
              />{" "}
              degrees
            </>
          ),
          style: "bg-blue-500",
          type: "rotate",
          plus: true,
          count: 1,
        },
        {
          id: 12,
          title: (
            <>
              go to{" "}
              <select name="go" id="go" onChange={(e) => handleOnChange(e)}>
                <option value="random">random position</option>
                <option value="mouse">mouse-pointer</option>
              </select>
            </>
          ),
          type: "goto",
          style: "bg-blue-500",
        },
        {
          id: 13,
          title: (
            <>
              go to x:{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_4}
                name="motion_count_4"
                className="w-1/6 mx-2 rounded-full"
              />{" "}
              y:{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_5}
                name="motion_count_5"
                className="w-1/6 mx-2 rounded-full"
              />
            </>
          ),
          type: "goAxis",
          style: "bg-blue-500",
        },
        // {
        //   id: 14,
        //   title: (
        //     <>
        //       glide{" "}
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.motion_count_6}
        //         name="motion_count_6"
        //         className="w-1/6 mx-2 rounded-full"
        //       />{" "}
        //       secs to
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        // {
        //   id: 15,
        //   title: (
        //     <>
        //       glide{" "}
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.motion_count_7}
        //         name="motion_count_7"
        //         className="w-1/6 mx-2 rounded-full"
        //       />{" "}
        //       secs to x:{" "}
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.motion_count_8}
        //         name="motion_count_8"
        //         className="w-1/6 mx-2 rounded-full"
        //       />{" "}
        //       y:{" "}
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.motion_count_9}
        //         name="motion_count_9"
        //         className="w-1/6 mx-2 rounded-full"
        //       />
        //       {/* <Icon name="flag" size={15} className="text-green-600 mx-2" /> */}
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        {
          id: 16,
          title: (
            <>
              point in direction{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_10}
                name="motion_count_10"
                className="w-1/6 mx-2 rounded-full"
              />
              {/* <Icon name="flag" size={15} className="text-green-600 mx-2" />
            and wait */}
            </>
          ),
          type: "direction",
          style: "bg-blue-500",
        },
        {
          id: 17,
          title: (
            <>
              point towards
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
              {/* 
            and wait */}
            </>
          ),
          style: "bg-blue-500",
          type: "changeX",
        },
        {
          id: 18,
          title: (
            <>
              change x by{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_11}
                name="motion_count_11"
                className="w-1/6 mx-2 rounded-full"
              />
            </>
          ),
          type: "changeY",
          style: "bg-blue-500",
        },
        {
          id: 19,
          title: (
            <>
              set x to{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_12}
                name="motion_count_12"
                className="w-1/6 mx-2 rounded-full"
              />
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 20,
          title: (
            <>
              set y to{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.motion_count_13}
                name="motion_count_13"
                className="w-1/6 mx-2 rounded-full"
              />
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 21,
          title: "if on edge, bounce",
          style: "bg-blue-500",
        },
        {
          id: 1,
          title: (
            <>
              set rotation style
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 22,
          title: (
            <>
              <Icon name="flag" size={15} className="text-green-600 mx-2" />x
              position
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 23,
          title: (
            <>
              <Icon name="flag" size={15} className="text-green-600 mx-2" />y
              position
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 24,
          title: (
            <>
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
              direction
            </>
          ),
          style: "bg-blue-500",
        },
      ],
    },
    {
      title: "Control",
      value: [
        {
          id: 25,
          title: (
            <>
              wait
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_1}
                name="control_count_1"
                className="w-1/6 mx-2 rounded-full"
              />
              seconds
            </>
          ),
          style: "bg-yellow-600",
          type: "x",
          plus: true,
        },
        {
          id: 26,
          title: (
            <>
              repeat
              <Icon name="undo" size={15} className="text-white-600 mx-2" />
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_2}
                name="control_count_2"
                className="w-1/6 mx-2 rounded-full"
              />
              <Icon name="undo" size={15} className="text-white-600 mx-2" />
            </>
          ),
          style: "bg-yellow-600",
          type: "rotate",
          plus: true,
        },
        {
          id: 27,
          title: (
            <>
              forever
              <Icon name="redo" size={15} className="text-white-600 mx-2" />
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_3}
                name="control_count_3"
                className="w-1/6 mx-2 rounded-full"
              />{" "}
              <Icon name="redo" size={15} className="text-white-600 mx-2" />
            </>
          ),
          style: "bg-yellow-600",
          type: "rotate",
        },
        {
          id: 28,
          title: (
            <>
              if then
              <Icon name="redo" size={15} className="text-green-600 mx-2" />
              <Icon name="redo" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-yellow-600",
        },
        {
          id: 29,
          title: (
            <>
              if{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_4}
                name="control_count_4"
                className="w-1/6 mx-2 rounded-full"
              />{" "}
              then{" "}
              <Icon name="redo" size={15} className="text-green-600 mx-2" />
              <Icon name="redo" size={15} className="text-green-600 mx-2" />
              else{" "}
              <Icon name="redo" size={15} className="text-green-600 mx-2" />
              <Icon name="redo" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-yellow-600",
        },
        {
          id: 30,
          title: (
            <>
              wait until{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_5}
                name="control_count_5"
                className="w-1/6 mx-2 rounded-full"
              />{" "}
            </>
          ),
          style: "bg-yellow-600",
        },
        {
          id: 31,
          title: (
            <>
              repeat until{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_6}
                name="control_count_6"
                className="w-1/6 mx-2 rounded-full"
              />{" "}
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-yellow-600",
        },
        {
          id: 32,
          title: (
            <>
              stop all{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.control_count_7}
                name="control_count_7"
                className="w-1/6 mx-2 rounded-full"
              />
              {/* <Icon name="flag" size={15} className="text-green-600 mx-2" />
            and wait */}
            </>
          ),
          style: "bg-yellow-600",
        },
        {
          id: 33,
          title: "when I start as a clone",
          style: "bg-yellow-600",
        },
        {
          id: 34,
          title: (
            <>
              create clone of
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-yellow-600",
        },
        {
          id: 35,
          title: "delete this clone",
          style: "bg-yellow-600",
        },
      ],
    },
    {
      title: "Looks",
      value: [
        {
          id: 36,
          title: (
            <>
              say
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_1}
                name="look_count_1"
                className="w-1/4 mx-2 rounded-full"
                id="text"
              />
              for
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_2}
                name="look_count_2"
                className="w-1/6 mx-2 rounded-full"
                id="sec"
              />
              seconds
            </>
          ),
          style: "bg-blue-500",
          type: "text",
        },
        {
          id: 37,
          title: (
            <>
              say
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_3}
                name="look_count_3"
                className="w-1/6 mx-2 rounded-full"
                id="text"
              />
            </>
          ),
          style: "bg-blue-500",
          type: "normal_text",
        },
        {
          id: 38,
          title: (
            <>
              think
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_4}
                name="look_count_4"
                className="w-1/6 mx-2 rounded-full"
                id="text"
              />{" "}
              for{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_5}
                name="look_count_5"
                className="w-1/6 mx-2 rounded-full"
                id="sec"
              />
              seconds
            </>
          ),
          style: "bg-blue-500",
          type: "text",
        },
        {
          id: 39,
          title: (
            <>
              think
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_6}
                name="look_count_6"
                className="w-1/6 mx-2 rounded-full"
                id="text"
              />{" "}
            </>
          ),
          style: "bg-blue-500",
          type: "normal_text",
        },
        // {
        //   id: 40,
        //   title: (
        //     <>
        //       switch costume to{" "}
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        // {
        //   id: 41,
        //   title: "next costume",
        //   style: "bg-blue-500",
        // },
        // {
        //   id: 42,
        //   title: (
        //     <>
        //       switch backdrop to{" "}
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        // {
        //   id: 43,
        //   title: "next backdrop",
        //   style: "bg-blue-500",
        // },
        {
          id: 44,
          title: (
            <>
              change size by
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_7}
                name="look_count_7"
                className="w-1/6 mx-2 rounded-full"
              />
            </>
          ),
          type: "size_text",
          style: "bg-blue-500",
        },
        {
          id: 45,
          title: (
            <>
              set size to{" "}
              <input
                style={{ color: "#000", textAlign: "center" }}
                onChange={(e) => handleOnChange(e)}
                value={data?.look_count_8}
                name="look_count_8"
                className="w-1/6 mx-2 rounded-full"
              /> %
            </>
          ),
          type: "size_text_per",
          style: "bg-blue-500",
        },
        // {
        //   id: 46,
        //   title: (
        //     <>
        //       change
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />x
        //       effact by{" "}
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.look_count_9}
        //         name="look_count_9"
        //         className="w-1/6 mx-2 rounded-full"
        //       />
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        // {
        //   id: 47,
        //   title: (
        //     <>
        //       set
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />x
        //       effact to{" "}
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.look_count_10}
        //         name="look_count_10"
        //         className="w-1/6 mx-2 rounded-full"
        //       />
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        {
          id: 48,
          title: "clear graphic effects",
          style: "bg-blue-500",
        },
        {
          id: 49,
          title: "show",
          style: "bg-blue-500",
          type: "showImage"
        },
        {
          id: 50,
          title: "hide",
          style: "bg-blue-500",
          type: "hideImage"
        },
        // {
        //   id: 51,
        //   title: (
        //     <>
        //       go to
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />y
        //       layer
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        // {
        //   id: 52,
        //   title: (
        //     <>
        //       go
        //       <Icon name="flag" size={15} className="text-green-600 mx-2" />
        //       <input
        //         style={{ color: "#000", textAlign: "center" }}
        //         onChange={(e) => handleOnChange(e)}
        //         value={data?.look_count_11}
        //         name="look_count_11"
        //         className="w-1/6 mx-2 rounded-full"
        //       />
        //       layers
        //     </>
        //   ),
        //   style: "bg-blue-500",
        // },
        {
          id: 53,
          title: (
            <>
              costume
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 54,
          title: (
            <>
              backdrop
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </>
          ),
          style: "bg-blue-500",
        },
        {
          id: 55,
          title: "size",
          style: "bg-blue-500",
        },
      ],
    },
  ];
};
