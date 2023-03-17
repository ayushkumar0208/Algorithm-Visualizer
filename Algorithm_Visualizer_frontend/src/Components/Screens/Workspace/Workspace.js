import React, { useEffect, useState } from "react";
import "./Workspace.css";
import Array from "../../Array/Array";
import axios from "axios";
import Stackstructure from "../../Stack/Stackstructure";
import Queuestructure from "../../Queue/Queuestructure";

function Workspace(props) {
  const [arr, setArrays] = useState([]);
  const [stack,setStack] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8800/Workspace/Structures", {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setArrays(result[0].Arrays);
        setStack(result[0].Stacks);
      });
  });

  const createNewArray = () => {
    console.log(props.typeOfArray);

    props.setState({
      ...props.state,
      typeOfArray: null,
    });
    const arrayToAdd = [];
    for (var i = 0; i < Math.min(props.lengthOfArray, 10); i++) {
      arrayToAdd.push(0);
    }

    axios
      .post("http://localhost:8800/updateAddNewArray", arrayToAdd)
      .then((response) => {
        console.log("Array added successfully");
      });
    console.log(props.typeOfArray);
    console.log(props.lengthOfArray);
  };

  // const createNewStack = () => {
  //   console.log(props.typeOfStack);
  //   props.setState({
  //     ...props.state,
  //    typeOfStack:null,
  //   });
  //   console.log(props.typeOfStack);
  // };

  // const [isDrawing, setIsDrawing] = useState(false);
  // const whiteboardRef = useRef(null);

  // function handleMouseDown(e) {
  //   setIsDrawing(true);
  //   const dot = createDot(e.clientX, e.clientY);
  //   whiteboardRef.current.appendChild(dot);
  // }

  // function handleMouseMove(e) {
  //   if (isDrawing) {
  //     const dot = createDot(e.clientX, e.clientY);
  //     whiteboardRef.current.appendChild(dot);
  //   }
  // }

  // function handleMouseUp(e) {
  //   setIsDrawing(false);
  // }

  // function createDot(x, y) {
  //   const whiteboardRect = whiteboardRef.current.getBoundingClientRect();
  //   const dot = document.createElement('div');
  //   dot.classList.add('dot');
  //   dot.style.left = `${x - whiteboardRect.left}px`;
  //   dot.style.top = `${y - whiteboardRect.top}px`;
  //   return dot;
  // }
  return (
    <div className="Workspace">
       {/* <div
      ref={whiteboardRef}
      className="whiteboard"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
    /> */}
    <Queuestructure/>
      {(props.typeOfStack!==null && <Stackstructure/>)}
      {(props.typeOfQueue!==null && <Queuestructure/>)}


      {props.typeOfArray !== null && props.lengthOfArray>0 && createNewArray()}



      {arr.map((element,index) => {
        return <Array array={element} arrayIndex={index} allArrays={arr}/>;
      })}
      {stack.map((element,index) => {
        return <Stackstructure stackIndex={index} stack={element} setStack={setStack} allStacks={stack}/>;
      })}
    </div>
  );
}

export default Workspace;
