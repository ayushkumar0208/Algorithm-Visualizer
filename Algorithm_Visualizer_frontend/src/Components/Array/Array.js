import React from "react";
import "./Array.css";
import ElementArray from "../../Elements/ElementArray";
import Draggable from "react-draggable";
import axios from "axios";

class Array extends React.Component {
  // const [currArr, setCurrentArray] = useState(props.array);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8800/Workspace/Structures")
  //     .then((response) => {
  //       // console.log(response.data[0]);
  //       setCurrentArray(response.data[0].Arrays[props.arrayIndex]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });
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
  //   // console.log("teri maa ki")
  //   indents = props.array.map((i, index) => (
  //     <ElementArray value={i} index={index} array={props.array} />
  //   ))
  // })
  // useEffect(){

  // }

  // }

  deleteArray = () => {
    // const index = props.allArrays.indexOf(props.arrayIndex);
    if (this.props.arrayIndex > -1) {
      // only splice array when item is found
      this.props.allArrays.splice(this.props.arrayIndex, 1); // 2nd parameter means remove one item only
    }
    var ArrayObject = {};
    ArrayObject["Arrays"] = this.props.allArrays;
    console.log(this.props.allArrays);
    axios
      .post("http://localhost:8800/updateArray", ArrayObject)
      .then((response) => {
        console.log("Array Deleted");
      });
    if (this.props.arrayIndex > -1) {
      // only splice array when item is found
      this.props.arrayTypes.splice(this.props.arrayIndex, 1); // 2nd parameter means remove one item only
    }
    var ArrayTypeObject = {};
    ArrayTypeObject["ArrayTypes"] = this.props.arrayTypes;
    axios
      .post("http://localhost:8800/updateArray", ArrayTypeObject)
      .then((response) => {
        console.log("Arraytype Deleted");
      });
    // getUpdates();
    window.location.reload(true);
  };
  reverseArray = () => {
    this.props.array.reverse();
    var ArrayObject = {};
    ArrayObject["Arrays." + this.props.arrayIndex] = this.props.array;
    axios
      .post("http://localhost:8800/updateArray", ArrayObject)
      .then((response) => {
        console.log("Array Reversed");
      });
    window.location.reload(true);
  };

  sortArray = () => {
    this.props.array.sort((a, b) => a - b);
    console.log(this.props.array);
    var SortedArrayObject = {};
    SortedArrayObject["Arrays." + this.props.arrayIndex] = this.props.array;
    axios
      .post("http://localhost:8800/updateArray", SortedArrayObject)
      .then((response) => {
        console.log("Array Sorted");
      });
    // window.refres
    window.location.reload(true);
  };

  // var indents =
  render(){
  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
      <div className="Array">
        {/* {true && console.log("Mein ")} */}
        <div className="Array-manipulate-options" style={{ width: "100%" }}>
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <button id="handle-sort" onClick={this.sortArray}>
            Sort
          </button>
          <button id="handle-reverse" onClick={this.reverseArray}>
            Reverse
          </button>
          <div id="Array-delete-option">
            <img
              id="handle-delete"
              src="/Cross_red_circle.png"
              alt=""
              onClick={this.deleteArray}
            />
          </div>
        </div>
        <div className="draggable">
          {/* {console.log(props.array)} */}
          {this.props.array.map((i, index) => (
            <ElementArray
              value={i}
              index={index}
              array={this.props.array}
              arrayIndex={this.props.arrayIndex}
              typeOfArray={this.props.typeOfArray}
              dataType={this.props.dataType}
            />
          ))}
        </div>
      </div>
    </Draggable>
  );
          }
}

export default Array;
