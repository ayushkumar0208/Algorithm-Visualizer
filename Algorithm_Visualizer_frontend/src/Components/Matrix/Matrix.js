import React from "react";
import Draggable from "react-draggable";
import axios from "axios";
import "./Matrix.css";

function Matrix(props) {
    const handleValueChange = (e, indexs) => {
        var newMatrix = [...props.matrix];
        console.log("New Value : "+e.target.value)
        newMatrix[indexs[0]][indexs[1]] = Number(e.target.value);
        console.log(newMatrix);
        var val = JSON.stringify(e.target.value);
        console.log(typeof val)
        if(e.target.value===null)val = "";
        axios.post("http://localhost:8800/updateMatrixIndex/Matrices."+props.matrixIndex+"."+indexs[0]+"."+indexs[1],val).then((response)=>{
            console.log("Matrix Updated")
        })
      };
  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
    <div className="Matrix">
      <div className="Matrix-delete-pan">
        <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
        <img
          id="handle-delete"
          src="/Cross_red_circle.png"
          alt="delete"
          // onClick={deleteStack}
        />
      </div>
      <div className="Matrix-main">
        {props.matrix.map((row, i) => (
          <div id="matrix-row" key={i}>
            {row.map((col, j) => (
              <div id="matrix-element-container" key={j}>
                <div className="matrix-element">
                  <input
                    value={props.matrix[i][j]}
                    // type="number"
                    autoComplete="off"
                    id="matrix-value"
                    placeholder="0"
                    onChange={(event)=> handleValueChange(event,[i,j])}
                  />
                  <p id="matrix-index">
                    [{i}][{j}]
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </Draggable>
  );
}

export default Matrix;
