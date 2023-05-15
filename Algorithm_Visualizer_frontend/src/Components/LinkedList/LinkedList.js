import React from "react";
import "./LinkedList.css";
import Draggable from "react-draggable";
import axios from "axios";

function LinkedList(props) {

  
  const addNode = () => {
    axios
      .post(
        "http://localhost:8800/updateAddNewNode/LinkedLists." + props.listIndex
      )
      .then((response) => {
        console.log(response);
      });
  };

  const handleValueChange = (e, elementIndex) => {
    const newList = [...props.allLinkedList[props.listIndex]];
    newList[elementIndex] = e.target.value;
    // props.setLinkedList(newList)
    axios
      .post(
        "http://localhost:8800/updateIndex/LinkedLists." + props.listIndex,
        newList
      )
      .then((response) => {
        console.log("Updated");
      });
  };
  const deleteNode = (index) => {
    // const newList = [...props.allLinkedList[props.listIndex]];
    if(index>-1){
      props.LinkedList.splice(index, 1);
    }
    axios
      .post(
        "http://localhost:8800/updateIndex/LinkedLists." + props.listIndex,
        props.LinkedList
      )
      .then((response) => {
        console.log("Deleted");
      });

  };
  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
      <div className="LinkedList">
        {/* {console.log(props.LinkedList)} */}
        <div className="LinkedList-delete-pan">
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <img
            id="handle-delete"
            src="/Cross_red_circle.png"
            alt="delete"
            // onClick={deleteStack}
          />
        </div>
        <div className="LinkedList-Main">
          {props.LinkedList.map((element, index) => (
            <>
              <div className="LinkedList-Node" style={{
        backgroundColor:
          index === 0 ? "rgb(169, 248, 138)" : "rgb(232, 231, 231)",
        fontWeight: "500",
      }}>
                <input
                  text="number"
                  id="LinkedList-Node-value"
                  placeholder="__"
                  onChange={(e) => handleValueChange(e, index)}
                  value={element}
                  autoComplete="off"
                />
                <div className="LinkedList-Node-options">
                  <button id="Node-option">Insert</button>
                  <button id="Node-option" onClick={() => deleteNode(index)}>Delete</button>
                </div>
              </div>
              <img
                id="next-pointer-image"
                src="/next-pointer-image.png"
                alt=""
              />
            </>
          ))}
          <div className="LinkedList-Null">
            {props.LinkedList.length === 0 ? <p>Head Null</p> : <p>Null</p>}
            <button id="Node-option" onClick={addNode}>
              Add Node
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default LinkedList;
