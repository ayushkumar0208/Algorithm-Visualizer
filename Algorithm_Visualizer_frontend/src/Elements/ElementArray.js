import React from "react";
import "./ElementArray.css";
import axios from "axios";
// import Array from "../Components/Array/Array";
// import Draggable from "react-draggable";

class ElementArray extends React.Component{
  // const [value, setValue] = useState(props.value);
  state = {
    value:this.props.value,
    currentArray:this.props.array,
    typeOfArray:this.props.typeOfArray
  } 
  handleValueChange = (e) => {
    const newValue = e.target.value;
    // setValue(newValue);
    axios.post("http://localhost:8800/updateArrayIndex/Arrays."+this.props.arrayIndex+"."+this.props.index+"/"+newValue).then((response) => {
      console.log("Updated")
    })
    this.setState({ value: newValue });
    this.props.setCurrentArray(
      ...this.props.array,
      (this.props.array[this.props.index] = Number(newValue))
    );
  };
  
  

  render(){
    
  return (
    // <Draggable>
    <div className="ElementArray" style={{'width': this.props.dataType==="Integer"? '3vw':this.props.dataType==="String"? '5.3vw':'4.7vw'}}>
      <p id="ElementArray_value">
        {console.log(this.props.dataType)}
        {this.props.dataType==="Integer" && (<input
          onChange={this.handleValueChange}
          value={this.state.value}
          type="number"
          autoComplete="off"
          id="array-value"
          name="array-value"
          placeholder="0"
        />)}
        {this.props.dataType==="String" && (<input
          onChange={this.handleValueChange}
          value={this.state.value}
          type="text"
          autoComplete="off"
          id="array-value"
          name="array-value"
          placeholder="' '"
        />)}
        {this.props.dataType==="Double" && (<input
          oninput="this.style.width = ((this.value.length + 1) * 8) + 'px';"
          onChange={this.handleValueChange}
          value={this.state.value}
          type="number"
          autoComplete="off"
          id="array-value"
          name="array-value"
          placeholder="0.0"
        />)}
      </p>
      <p id="ElementArray_index">{this.props.index}</p>
      {/* {console.log(this.props.updateSortArray)} */}
      {/* {this.props.updateSortArray?(<>{sortArray()}</>):(<></>)} */}
    </div>
    // </Draggable>
  );
}
}

export default ElementArray;
