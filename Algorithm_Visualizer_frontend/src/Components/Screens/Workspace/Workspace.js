import React, { useEffect, useState } from "react";
import "./Workspace.css";
import Array from "../../Array/Array";
import axios from "axios";
import Stackstructure from "../../Stack/Stackstructure";
import Queuestructure from "../../Queue/Queuestructure";
import LinkedList from "../../LinkedList/LinkedList";
import Matrix from "../../Matrix/Matrix";

function Workspace(props) {
  const [arr, setArrays] = useState([]);
  const [stack, setStack] = useState([]);
  const [queue, setQueue] = useState([]);
  const [linkedList, setLinkedList] = useState([]);
  const [matrix,setMatrix] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/Workspace/Structures")

      .then((result) => {
        // console.log(result)
        setArrays(result.data[0].Arrays);
        setStack(result.data[0].Stacks);
        setQueue(result.data[0].Queues);
        setLinkedList(result.data[0].LinkedLists)
        setMatrix(result.data[0].Matrices)
      });
  });

  const createNewMatrix = (n,m) =>{
    makeAllNull();
    console.log("Running Matrix")
    
    var currMatrix = [];
    for(var i=0;i<n;i++){
      var currRow = [];
      for(var j = 0;j<m;j++){
        currRow.push("");
      }
      currMatrix.push(currRow);
    }
    
    console.log(currMatrix)
    axios.post("http://localhost:8800/updateAddNewMatrix",currMatrix).then((response) => {
      console.log("Matrix added successfully");
    });
    // for(var i=0;i<matrix.length;i++){
    //   var mat = matrix[i];
    //   console.log(mat)
    // }
    // console.log(matrix)
  }

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
      typeOfMatrix:null,
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
        {/* {console.log("Type of Matrix: " + matrix)} */}
      {props.typeOfMatrix !== null && props.matrixRow>0 && props.matrixCol>0 && createNewMatrix(props.matrixRow, props.matrixCol)}
      {props.typeOfQueue !== null && createNewQueue()}
      {props.typeOfStack !== null && createNewStack()}
      <div className="Workspace-bar">
        {arr.length > 0 && (
          <p className="Workspace-bar-options">Array: {arr.length}</p>
        )}
        {stack.length > 0 && (
          <p className="Workspace-bar-options">Stack: {stack.length}</p>
        )}
        {queue.length > 0 && (
          <p className="Workspace-bar-options">Queue: {queue.length}</p>
        )}
        {linkedList.length>0 && (
          <p className="Workspace-bar-options">LinkedList: {linkedList.length}</p>
        )}
      </div>
      <div className="Workspace-Main">
        {linkedList.map((element, index) => (
          <LinkedList
            LinkedList={element}
            allLinkedList={linkedList}
            listIndex={index}
            setLinkedList={setLinkedList}
          />
        ))}
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
        
        {matrix.map((element, index) =>(
          <Matrix matrix={element} matrixIndex={index}/>
        ))}
      </div>
    </div>
  );
}

export default Workspace;
