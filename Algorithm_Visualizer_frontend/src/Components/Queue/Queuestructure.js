import React, { useState } from "react";
//import Stackupperelements from '../../Elements/Stack/Stackupperelements';
import "./Queuestructure.css";
// import { useRef } from "react";
// import { useQueueState } from "rooks";
//import Visibility from '../../Component_features/visibility';
//import Pushpopbut from './pushpopbut';
// import pushbutton from './Queueassets/pushbutton.png'
// import popbutton from './Queueassets/popbutton.png'
import Draggable from "react-draggable";

export default function Queuestructure(props) {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const pushItem = (item) => {
    if (inputValue === "") {
      return;
    }
    setQueue([...queue, inputValue]);
    setInputValue("");
  };

  const popItem = () => {
    if (queue.length === 0) {
      return;
    }
    const newQueue = [...queue];
    newQueue.reverse();
    newQueue.pop();
    newQueue.reverse();
    setQueue(newQueue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushItem();
  }; 

  const deleteQueue = () => {}

  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
      <div className="Queue">
        <div className="Queue-delete-pan">
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <img  id="handle-delete" src="/Cross_red_circle.png" alt="delete" onClick={deleteQueue}/>
        </div>

        <div className="maincontainer-Queue">
        {queue.length===0? (<p className="Queueblock" id="empty-block-queue">Empty</p>):(
          <div className="Queueblock">
            
          {queue.map((item, index) => {
            return (
              <div
                className="individualQueueBlock"
                key={index}
                style={{ 'background-color': index === 0 ? "rgb(169, 248, 138)" : "rgb(232, 231, 231)" ,'fontWeight':'500'}}
              >
                {item}
              </div>
            );
          })}
        </div>
        )}
          
          <div className="pushpopbutton-Queue">
            <div className="Inputarea-Queue">
              <form className="submitarea-Queue" onSubmit={handleSubmit}>
                <img
                id="push-button-Queue"
                  onClick={pushItem}
                  src="/pushbutton.png"
                  alt="Push button"
                  height="25"
                  width="25"
                />

                <input
                  type="text-Queue"
                  id="inputvalue-Queue"
                  value={inputValue}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="'Add to Queue'"
                />
                <img
                id="pop-button-Queue"
                  onClick={popItem}
                  src="/popbutton.png"
                  alt="Push button"
                  height="23"
                  width="23"
                />
              </form>
            </div>
            {/* <p>peek:{peek()}</p>
       <p>length: {length}</p> */}
            {/* <p>length: {length}</p> */}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
