import React from "react";
import "./Array.css";
import ElementArray from "../../Elements/ElementArray";
import Draggable from "react-draggable";
import axios from "axios";

function Array(props) {
  // componentDidMount() {
  //   this.indents = this.props.array.map((i, index) => (
  //     <ElementArray value={i} index={index} array={this.props.array} />
  //   ));
  // }
  // componentDidUpdate(){
    // console.log(props.array)
    // const [ignored,forcedUpdate] = useReducer(x=>x+1,0);
  var indents = props.array.map((i, index) => (
    <ElementArray value={i} index={index} array={props.array} arrayIndex={props.arrayIndex}/>
  ))
  // useEffect(() => {
  //   // console.log("teri maa ki")
  //   indents = props.array.map((i, index) => (
  //     <ElementArray value={i} index={index} array={props.array} />
  //   )) 
  // }) 
  // useEffect(){
    
  // }
     
  // }

  const deleteArray = () => {
    

    // const index = props.allArrays.indexOf(props.arrayIndex);
    if (props.arrayIndex > -1) { // only splice array when item is found
      props.allArrays.splice(props.arrayIndex, 1); // 2nd parameter means remove one item only
    }
    var ArrayObject = {};
    ArrayObject['Arrays']=props.allArrays
    console.log(props.allArrays)
    axios.post("http://localhost:8800/updateArray",ArrayObject).then((response) => {
      console.log("Array Deleted")
    })
  }
 const reverseArray = () => {
  props.array.reverse();
  var ArrayObject = {}
    ArrayObject["Arrays."+props.arrayIndex]=props.array;
    axios.post("http://localhost:8800/updateArray",ArrayObject).then((response) => {
      console.log("Array Reversed")
    })
    window.location.reload(true);
 }
  const sortArray = () => {
    props.array.sort((a, b) => a - b);
    console.log(props.array);
    var SortedArrayObject = {}
    SortedArrayObject["Arrays."+props.arrayIndex]=props.array;
    axios.post("http://localhost:8800/updateArray",SortedArrayObject).then((response) => {
      console.log("Array Sorted")
    })
    // window.refres
    window.location.reload(true);
  };


  // var indents =
  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
      <div className="Array">
        {/* {true && console.log("Mein ")} */}
        <div className="Array-manipulate-options" style={{ width: "100%" }}>
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <button id="handle-sort" onClick={sortArray}>
            Sort
          </button>
          <button id="handle-reverse" onClick={reverseArray}>
            Reverse
          </button>
          <div id="Array-delete-option"> 
            <img  id="handle-delete" src="/Cross_red_circle.png" alt="" onClick={deleteArray}/>
          </div>
          
        </div>
        <div className="draggable">
          {/* {console.log(props.array)} */}
          {indents}
        </div>
      </div>
    </Draggable>
  );
}

export default Array;
