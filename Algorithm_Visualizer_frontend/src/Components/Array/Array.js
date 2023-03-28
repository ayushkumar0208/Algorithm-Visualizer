import React, { useEffect,useState } from "react";
import "./Array.css";
// import ElementArray from "../../Elements/ElementArray";
import Draggable from "react-draggable";
import axios from "axios";
import "../../Elements/ElementArray.css";

function Array(props) {
  const [currentArray,setCurrentArray]=useState([])

  useEffect(() => {
    axios.get("http://localhost:8800/Workspace/Structures")

      .then((result) => {
        // console.log(result)
        // console.log(result.data[0].Arrays[props.arrayIndex])
        setCurrentArray(result.data[0].Arrays[props.arrayIndex]);
      });
  });
  // componentDidMount() {
  //   this.indents = this.props.array.map((i, index) => (
  //     <ElementArray value={i} index={index} array={this.props.array} />
  //   ));
  // }
  // componentDidUpdate(){
  // console.log(props.array)
  // const [ignored,forcedUpdate] = useReducer(x=>x+1,0);
  // console.log("In array file: "+props.dataType)

  // useEffect(() => {
  //   axios.get("http://localhost:8800/Workspace/Structures")

  //     .then((result) => {
  //       props.setArrays(result.data[0].Arrays);
  //       // console.log(props.array)
  //     });
  //   // indents = props.array.map((i, index) => (
  //   //   <ElementArray value={i} index={index} array={props.array} arrayIndex={props.arrayIndex} typeOfArray={props.typeOfArray} dataType={props.dataType}/>
  //   // ))
  // });
  // console.log(currentArray)
  ;

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
    if (props.arrayIndex > -1) {
      // only splice array when item is found
      props.arrayTypes.splice(props.arrayIndex, 1); // 2nd parameter means remove one item only
    }
    var ArrayTypeObject = {};
    ArrayTypeObject["ArrayTypes"] = props.arrayTypes;
    axios
      .post("http://localhost:8800/updateArray", ArrayTypeObject)
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
      .post("http://localhost:8800/updateArray", ArrayObject)
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
      .post("http://localhost:8800/updateArray", ArrayObject)
      .then((response) => {
        console.log("Array Reversed");
      });
    window.location.reload(true);
  };
  const sortArray = () => {
    props.array.sort((a, b) => a - b);
    console.log(props.array);
    var SortedArrayObject = {};
    SortedArrayObject["Arrays." + props.arrayIndex] = props.array;
    axios
      .post("http://localhost:8800/updateArray", SortedArrayObject)
      .then((response) => {
        console.log("Array Sorted");
      });
    // window.refres
    window.location.reload(true);
  };
  const handleValueChange = (e,elementIndex) => {
    // const newValue = e.target.value;
    // console.log(newValue)
    // // setValue(newValue);
    // this.setState({ value:e.target.value })
    // this.state.value = e.target.value;
    const newArray=[...currentArray]
    newArray[elementIndex] =e.target.value
    setCurrentArray(newArray)

    axios.post("http://localhost:8800/updateArrayIndex/Arrays."+props.arrayIndex,newArray).then((response) => {
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
          {currentArray && currentArray.map((i, index) => {
   return <div className="ElementArray" >
   <p id="ElementArray_value">
     {/* {console.log(this.state.typeOfArray)} */}
     {props.dataType==="Integer"? (
       <input

       onChange={(e)=>handleValueChange(e,index)}
       value={currentArray[index]}
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
      value={currentArray[index]}

       type="text"
       autoComplete="off"
       id="array-value"
       name="array-value"
       placeholder="' '"
     />
     ):(
       <input
       oninput="this.style.width = ((this.value.length + 1) * 8) + 'px';"
       onChange={(e)=>handleValueChange(e,index)}
      //  value={this.state.value}
      value={currentArray[index]}
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
