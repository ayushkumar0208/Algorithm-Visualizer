import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Stack.css'

const Stack = () => {
    const [num,setNum]=useState(0);
 const num_of_stack=()=>{
    setNum(num+1);
 };
 const str1="Stack is an abstract data structure which follows the FILO structure for computation. Types: int(and other numeric types), string, char etc. Functions: Push, Pop, Peek";

  return (
    <div className="stackbuttondiv">
        <Tippy content={str1} placement="right-end">
            <button onClick={num_of_stack}>
            <h3>Stack {num}</h3>
            </button>
        </Tippy>

    </div>
  )
}

export default Stack
