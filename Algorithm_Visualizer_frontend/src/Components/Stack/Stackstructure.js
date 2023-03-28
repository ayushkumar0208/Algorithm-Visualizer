import React, { useState } from "react";
import "./Stackstructure.css";
import Draggable from "react-draggable";
import axios from "axios";

export default function Stackstructure(props) {
  const [inputValue, setInputValue] = useState("");

  const pushItem = (item) => {
    if (inputValue === "") {
      return;
    }

    const newStack = [...props.stack];
    newStack.splice(0, 0, inputValue);
    updateStackInDb(newStack);
    setInputValue("");
  };

  const updateStackInDb = (newStack) => {
    axios
      .post(
        "http://localhost:8800/updateStack/Stacks." + props.stackIndex,
        newStack
      )
      .then((response) => {
        console.log("Updated Stack successfully");
      });
  };

  const deleteStack = () => {
    if (props.stackIndex > -1) {
      props.allStacks.splice(props.stackIndex, 1);
    }
    var StackObject = {};
    StackObject["Stacks"] = props.allStacks;
    axios
      .post("http://localhost:8800/updateStackAfterDelete", StackObject)
      .then((response) => {
        console.log("Stack Deleted");
      });
  };

  const popItem = () => {
    if (props.stack.length === 0) {
      return;
    }
    const newStack = [...props.stack];
    newStack.reverse().pop();
    newStack.reverse();
    updateStackInDb(newStack);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushItem();
  };

  var indents = props.stack.map((item, index) => (
    <div
      className="individualstackblock"
      key={index}
      style={{
        backgroundColor:
          index === 0 ? "rgb(169, 248, 138)" : "rgb(232, 231, 231)",
        fontWeight: "500",
      }}
    >
      {item}
    </div>
  ));

  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
      <div className="Stack">
        <div className="Stack-delete-pan">
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <img
            id="handle-delete"
            src="/Cross_red_circle.png"
            alt="delete"
            onClick={deleteStack}
          />
        </div>

        <div className="maincontainer-stack">
          {props.stack.length === 0 ? (
            <div className="stackblock" id="empty-block-stack">
              Empty
            </div>
          ) : (
            <div className="stackblock">{indents}</div>
          )}

          <div className="Inputarea">
            <form className="submitarea" onSubmit={handleSubmit}>
              <img
                id="push-button-Stack"
                onClick={pushItem}
                src="/plus-512.webp"
                alt="Push button"
              />
              <input
                type="text"
                id="inputvalue"
                value={inputValue}
                onChange={handleChange}
                autoComplete="off"
                placeholder="'Add to Stack"
              />
              <img
                id="pop-button-Stack"
                onClick={popItem}
                src="/popbutton.png"
                alt="Push button"
              />
            </form>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
