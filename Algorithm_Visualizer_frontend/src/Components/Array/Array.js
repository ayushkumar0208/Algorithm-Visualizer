import React from "react";
import "./Array.css";
import Draggable from "react-draggable";
import axios from "axios";

function Array(props) {


  const deleteArray = () => {
    if (props.arrayIndex > -1) {
      // only splice array when item is found
      props.arrayTypes.splice(props.arrayIndex, 1); // 2nd parameter means remove one item only
    }
    var ArrayTypeObject = {};
    ArrayTypeObject["ArrayTypes"] = props.arrayTypes;
    axios
      .post("http://localhost:8800/updateArray/"+props.WorkspaceId, ArrayTypeObject)
      .then((response) => {
        console.log("Arraytype Deleted");
      });
     
    // const index = props.allArrays.indexOf(props.arrayIndex);
    if (props.arrayIndex > -1) {
      // only splice array when item is found
      props.allArrays.splice(props.arrayIndex, 1); // 2nd parameter means remove one item only
    }
    var ArrayObject = {};
    ArrayObject["Arrays"] = props.allArrays;
    console.log(props.allArrays);
    axios
      .post("http://localhost:8800/updateArray/"+props.WorkspaceId, ArrayObject)
      .then((response) => {
        console.log("Array Deleted");
      //   axios.get("http://localhost:8800/Workspace/Structures")

      // .then((result) => {
      //   props.setArrays(result.data[0].Arrays);
      //   // console.log(props.array)
      // });
      });
  };
  const reverseArray = () => {
    props.array.reverse();
    var ArrayObject = {};
    ArrayObject["Arrays." + props.arrayIndex] = props.array;
    axios
      .post("http://localhost:8800/updateArray/"+props.WorkspaceId, ArrayObject)
      .then((response) => {
        console.log("Array Reversed");
      });
    // window.location.reload(true);
  };
  const sortArray = () => {
    props.array.sort((a, b) => a - b);
    console.log(props.array);
    var SortedArrayObject = {};
    SortedArrayObject["Arrays." + props.arrayIndex] = props.array;
    axios
      .post("http://localhost:8800/updateArray/"+props.WorkspaceId, SortedArrayObject)
      .then((response) => {
        console.log("Array Sorted");
      });
    // window.refres
    // window.location.reload(true);
  };
  const handleValueChange = (e,elementIndex) => {
    // const newValue = e.target.value;
    // console.log(newValue)
    // // setValue(newValue);
    // this.setState({ value:e.target.value })
    // this.state.value = e.target.value;
    const newArray=[...props.allArrays[props.arrayIndex]]
    console.log(newArray)
    newArray[elementIndex] = e.target.value
    // props.setArrays(newArray)

    axios.post("http://localhost:8800/updateIndex/Arrays."+props.arrayIndex+"/"+props.WorkspaceId,newArray).then((response) => {
      console.log("Updated")
    })
    
    
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
            <img
              id="handle-delete"
              src="/Cross_red_circle.png"
              alt=""
              onClick={deleteArray}
            />
          </div>
        </div>
        <div className="draggable">
          {/* {console.log(props.array)} */}
          {props.array.map((i, index) => {
   return <div className="ElementArray" >
   <p id="ElementArray_value">
     {/* {console.log(this.state.typeOfArray)} */}
     {props.dataType==="Integer"? (
       <input

       onChange={(e)=>handleValueChange(e,index)}
       value={props.array[index]}
       type="number"
       autoComplete="off"
       id="array-value"
       name="array-value"
       placeholder="0"
     />
     ):(props.dataType==="String"?(
       <input
       onChange={(e)=>handleValueChange(e,index)}
      //  value={state.value}
      value={props.array[index]}

       type="text"
       autoComplete="off"
       id="array-value"
       name="array-value"
       placeholder="' '"
     />
     ):(
       <input
       onChange={(e)=>handleValueChange(e,index)}
      //  value={this.state.value}
      value={props.array[index]}
       type="number"
       autoComplete="off"
       id="array-value"
       name="array-value"
       placeholder="0.0"
     />
     ))}
     
   </p>
   <p id="ElementArray_index">{index}</p>
   {/* {console.log(this.props.updateSortArray)} */}
   {/* {this.props.updateSortArray?(<>{sortArray()}</>):(<></>)} */}
 </div>
})}
        </div>
      </div>
    </Draggable>
  );
}

export default Array;
