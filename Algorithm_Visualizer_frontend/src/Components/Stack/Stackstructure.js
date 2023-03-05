import React, { useState } from 'react'
//import Stackupperelements from '../../Elements/Stack/Stackupperelements';
import './Stackstructure.css'
// import '../../Elements/Stack/Stackupperelements.css';
import Draggable from "react-draggable";



export default function Stackstructure(props){
    
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue] = useState('');


  const pushItem = (item) => {
    if (inputValue === '') {
        return;
      }
      // stack.slice().reverse()
      setStack([...stack, inputValue]);
      setInputValue('');
      
  };
  console.log(stack)

  const popItem = () => {
    if (stack.length === 0) {
        return;
      }
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
  };

//   const peek = () => {
//     if (stack.length === 0) {
//         return null;
//       }
//       const lastItem = stack[stack.length - 1];
//       for (let i = stack.length - 2; i >= 0; i--) {
//         if (stack[i] === lastItem) {
//           return null;
//         }
//       }
//       return lastItem;
//   };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushItem();
    
  };



  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
    <div className="maincontainer">
    <div className="stackblock" >          
       {stack.slice().reverse().map((item,index) => {
                    return <div className='individualstackblock' key={index} style={{ color: index === 0 ? 'green' : 'black' }}>
                        {item}
                     </div>;
                })}
    </div>
    <div className="pushpopbutton">
       <div className='Inputarea'>
        <form className="submitarea" onSubmit={handleSubmit}>
        <div className="but">
            <button type='submit' class="pushbuttonbut">
            <img onClick={pushItem} src='./pushbutton.png' alt="Push button" height="20" width="20" />
            </button>
        </div>
        <div className='handler'>
        <input type="text" id="inputvalue" value={inputValue} onChange={handleChange}/>
        <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
        </div>
        <div className="but2">
        <img onClick={popItem} src="./popbutton.png" alt="Push button" height="23" width="23" />
        </div>
        </form>
       </div>
       {/* <p>peek:{peek()}</p>
       <p>length: {length}</p> */}
       {/* <p>length: {length}</p> */}
    </div>
       
    </div></Draggable>);
}

