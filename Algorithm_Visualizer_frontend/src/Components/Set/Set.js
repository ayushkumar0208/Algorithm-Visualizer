import React, { useState } from "react";
// import "./Array.css";
import Draggable from "react-draggable";
import axios from "axios";

function Set(props){

    const [inputValue, setInputValue] = useState("");
    const [errorMessage,setErrorMeassage]=useState("");

  const insertItem = (item) => {
    var num=parseInt(inputValue,10);
    if (num === "") {
      return;
    }
    if(props.set.includes(num)){
      const msg="Input already exists";
      setErrorMeassage(msg);
      setInputValue(""); 
      return;
    } 
    
    // try{
    //   if (num === "") {
    //       throw "is empty";
    //   }
    //   if(isNaN(num)) throw "is not a number";
    //   if(props.set.includes(num)){
    //     throw "already exists";
    //   } 
    // }catch(err){
    //   MessageChannel.innerhtml="Input "+err;
    // }
    setErrorMeassage("");
    const newSet = [...props.set, num];
    updateSetInDb(newSet);
    setInputValue("");
  };

  const updateSetInDb = (newSet) => {
    axios
      .post(
        "http://localhost:8800/updateStructure/Sets." + props.setIndex,
        newSet
      )
      .then((response) => {
        console.log("Updated Set successfully");
      });
  };

  const deleteSet = () => {
    if (props.setIndex > -1) {
      props.allSets.splice(props.setIndex, 1);
    }
    var SetObject = {};
    SetObject["Sets"] = props.allSets;
    axios
      .post("http://localhost:8800/updateQueueAfterDelete", SetObject)
      .then((response) => {
        console.log("Set Deleted");
      });
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    insertItem();
  }; 



    return(
        <Draggable handle="#handle" bounds={{ left: 0 }}>
        <div className="Queue">
        <div className="Queue-delete-pan">
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <img  id="handle-delete" src="/Cross_red_circle.png" alt="delete" onClick={deleteSet}/>
        </div>

        <div className="maincontainer-Queue">
        {props.set.length===0? (<p className="Queueblock" id="empty-block-queue">Empty</p>):(
          <div className="Queueblock">
            
          {props.set.map((item, index) => {
            return (
              <div
                className="individualQueueBlock"
                key={index}
                style={{ 'backgroundColor': index === 0 ? "rgb(232, 231, 231)" : "rgb(232, 231, 231)" ,'fontWeight':'500'}}
              >
                {item}
              </div>
            );
          })}
        </div>
        )}
              <p>{errorMessage}</p>
          <div className="pushpopbutton-Queue">
            <div className="Inputarea-Queue">
              <form className="submitarea-Queue" onSubmit={handleSubmit}>
                {/* <p>{errorMessage}</p> */}
                {/* <p>Hello</p> */}
                <img
                id="push-button-Queue"
                  onClick={insertItem}
                  src="/pushbutton.png"
                  alt="Push button"
                  height="25"
                  width="25"
                />
                <input
                  type="number"
                  id="inputvalue-Queue"
                  value={inputValue}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="'Add to Set'"
                />
                {/* <p9>Element already exists</p9> */}
              </form>
            </div>
          </div>
        </div>
      </div>
        </Draggable>
    );
}

export default Set;