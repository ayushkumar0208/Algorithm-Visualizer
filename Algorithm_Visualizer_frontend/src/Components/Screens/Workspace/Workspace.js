import React, { useEffect, useState } from "react";
import "./Workspace.css";
import Array from "../../Array/Array";
import axios from "axios";
import Stackstructure from "../../Stack/Stackstructure";
import Queuestructure from "../../Queue/Queuestructure";

function Workspace(props) {
  const [arr, setArrays] = useState([]);
  const [stack, setStack] = useState([]);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/Workspace/Structures")

      .then((result) => {
        // console.log(result)
        setArrays(result.data[0].Arrays);
        setStack(result.data[0].Stacks);
        setQueue(result.data[0].Queues);
      });
  });
  const createNewQueue = () => {
    makeAllNull();

    axios.post("http://localhost:8800/updateAddNewQueue").then((response) => {
      console.log("Queue added successfully");
    });
  };

  const makeAllNull = () => {
    props.setState({
      typeOfArray: null,
      typeOfQueue: null,
      typeOfStack: null,
    });
  };
  const createNewStack = () => {
    makeAllNull();

    axios.post("http://localhost:8800/updateAddNewStack").then((response) => {
      console.log("Stack added successfully");
    });
  };

  const createNewArray = () => {
    makeAllNull();
    const arrayToAdd = [];

    for (var i = 0; i < Math.min(props.lengthOfArray, 10); i++) {
      arrayToAdd.push(null);
    }

    axios
      .post("http://localhost:8800/updateAddNewArray", arrayToAdd)
      .then((response) => {
        console.log("Array added successfully");
      });
  };

  return (
    <div className="Workspace">
      {props.typeOfArray !== null &&
        props.lengthOfArray > 0 &&
        createNewArray()}
      {props.typeOfQueue !== null && createNewQueue()}
      {props.typeOfStack !== null && createNewStack()}
      <div className="Workspace-bar">
        {arr.length>0 && <p className="Workspace-bar-options">Arrays: {arr.length}</p>}        
        {stack.length>0 && <p className="Workspace-bar-options">Stacks: {stack.length}</p>}
        {queue.length>0 && <p className="Workspace-bar-options">Queues: {queue.length}</p>}
      </div>
      <div className="Workspace-Main">
        {arr.map((element, index) => (
          <Array
            array={element}
            arrayIndex={index}
            allArrays={arr}
            arrayTypes={props.arrayTypes}
            dataType={props.arrayTypes[index]}
            setArrays={setArrays}
          />
        ))}

        {stack.map((element, index) => (
          <Stackstructure
            stackIndex={index}
            stack={element}
            setStack={setStack}
            allStacks={stack}
            stackTypes={props.stackTypes}
            dataType={props.stackTypes[index]}
          />
        ))}

        {queue.map((element, index) => (
          <Queuestructure
            queueIndex={index}
            queue={element}
            setQueue={setQueue}
            allQueues={queue}
          />
        ))}
      </div>
    </div>
  );
}

export default Workspace;