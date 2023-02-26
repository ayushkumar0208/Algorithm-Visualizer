import React, { useEffect, useState } from "react";
import "./Workspace.css";
import Array from "../../Array/Array";
import axios from "axios";

function Workspace(props) {
  const [arr, setArrays] = useState([]);
  
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

  return (
    <div className="Workspace">
      {props.typeOfArray !== null && props.lengthOfArray>0 && createNewArray()}
      {arr.map((element,index) => {
        return <Array array={element} arrayIndex={index} allArrays={arr}/>;
      })}
    </div>
  );
}

export default Workspace;
