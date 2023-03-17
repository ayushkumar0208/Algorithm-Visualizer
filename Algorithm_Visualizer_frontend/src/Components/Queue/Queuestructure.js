import React, { useState } from 'react'
//import Stackupperelements from '../../Elements/Stack/Stackupperelements';
import './Queuestructure.css';
// import { useRef } from "react";
// import { useQueueState } from "rooks";
//import Visibility from '../../Component_features/visibility';
//import Pushpopbut from './pushpopbut';
// import pushbutton from './Queueassets/pushbutton.png'
// import popbutton from './Queueassets/popbutton.png'
import Draggable from "react-draggable";

export default function Queuestructure(props){
    
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue] = useState('');


  const pushItem = (item) => {
    if (inputValue === '') {
        return;
      }
      setStack([...stack, inputValue]);
      setInputValue('');
  };

  const popItem = () => {
    if (stack.length === 0) {
        return;
      }
      const newStack = [...stack];
      newStack.reverse();
      newStack.pop();
      newStack.reverse();
      setStack(newStack);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushItem();
    
  };


  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
    <div className="maincontainer0">
    <div className="stackblock0">
       {stack.map((item,index) => {
                    return <div className='individualstackblock0' key={index} style={{ color: index === 0 ? 'green' : 'black' }}>{item}</div>;
                })}
    </div>
    <div className="pushpopbutton0">
       <div className='Inputarea0'>
        <form className="submitarea0" onSubmit={handleSubmit}>
        <div className="but0">
        <button type='submit' class="but0">
            <img onClick={pushItem} src="/pushbutton.png" alt="Push button" height="25" width="25" />
            </button>
        </div>
        <input type="text0" id="inputvalue0" value={inputValue} onChange={handleChange}/>
        <div className="but20">
        <img onClick={popItem} src="/popbutton.png" alt="Push button" height="23" width="23" />
        </div>
        </form>
       </div>
       {/* <p>peek:{peek()}</p>
       <p>length: {length}</p> */}
       {/* <p>length: {length}</p> */}
    </div>
    <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
    </div></Draggable>);
}

