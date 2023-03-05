import React, { useEffect, useState } from "react";
import "./Workspace.css";
import Array from "../../Array/Array";
import axios from "axios";
import Stackstructure from "../../Stack/Stackstructure";
import Queuestructure from "../../Queue/Queuestructure";

function Workspace(props) {
  const [arr, setArrays] = useState([]);
  // useEffect(() => {
  //   props.setState({
  //     ...props.state,
  //     typeOfStack: null,
  //   });
  // }, [props,props.setState]);
  
  useEffect(() => {
    fetch("http://localhost:8800/Workspace/Structures", {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setArrays(result[0].Arrays);
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
  
  return (
    <div className="Workspace">
       {(props.typeOfStack!==null && <Stackstructure/>)}

      {(props.typeOfQueue!==null && <Queuestructure/>)}

      {props.typeOfArray !== null && props.lengthOfArray>0 && createNewArray()}
      {arr.map((element,index) => {
        return <Array array={element} arrayIndex={index} allArrays={arr}/>;
      })}
     

    </div>
  );
}

export default Workspace;
