import React, { useState,useEffect } from "react";
import "./Panel.css";
import Workspace from "../Workspace/Workspace";
import axios from "axios";

function Panel(props) {
  const [state, setState] = useState({
    DropDownArray: false,
    typeOfArray: null,
    lengthOfArray: 0,
    DropDownStack: false,
    typeOfStack: null,
    DropDownQueue: false,
    typeOfQueue: null,
  });

  const [arrayTypes,setarrayTypes]=useState([]);

  const handleArrayLengthChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      lengthOfArray: value,
    });
    console.log(value);
    console.log(props.lengthOfArray);
  };
  const handleDropDownArray = () => {
    console.log(state.DropDownArray);
    console.log(state.typeOfArray);

    setState({
      ...state,
      DropDownArray: !state.DropDownArray,
    });
  };

  const handleDropDownStack = () => {
    setState({
      ...state,
      DropDownStack: !state.DropDownStack,
    });
  };

  const handleDropDownQueue = () => {
    setState({
      ...state,
      DropDownQueue: !state.DropDownQueue,
    });
  };

  useEffect(() => {
    fetch("http://localhost:8800/Workspace/Structures", {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setarrayTypes(result[0].ArrayTypes);
      });
  });

  return (
    <div className="Home">
      <div className="Home-main-activity">
        <div className="Panel">
          <div className="Panel-Section-1">
            {/* Pannel for Array begins*/}
            <div className="Panel-Array">
              <button
                id="Array-option-button"
                onClick={() => handleDropDownArray()}
              >
                Array
              </button>
              {state.DropDownArray && (
                <div className="DropDownArray">
                  <input
                    id="DropDownArray-length"
                    type="number"
                    placeholder="Length"
                    name="lengthOfArray"
                    onChange={handleArrayLengthChange}
                   required/>
                  <hr id="DropDownArray-separator" />
                  <div className="DropDownArray-options">
                    <div
                      className="DropDownArray-option"
                      onClick={() =>{
                        axios.post("http://localhost:8800/updateAddNewArrayType/Integer")
                        setState({ ...state, typeOfArray: "Integer" })
                      }
                        
                        
                      }
                    >
                      Integer
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        {axios.post("http://localhost:8800/updateAddNewArrayType/String")
                        setState({ ...state, typeOfArray: "String" })}
                      }
                    >
                      String
                    </div>
                    {console.log(arrayTypes)}
                    <div
                      className="DropDownArray-option"
                      onClick={() =>{
                        axios.post("http://localhost:8800/updateAddNewArrayType/Double")
                        setState({ ...state, typeOfArray: "Double" })}
                      }
                    >
                      Double
                    </div>
                  </div>
                </div>
              )}
              {/* {console.log(state.lengthOfArray)} */}
            </div>
            {/* Panek for Array ends */}

            {/* Panel for Stack begins */}
            <div className="Panel-Array">
              <button
                id="Array-option-button"
                onClick={() => handleDropDownStack()}
              >
                Stack
              </button>
              {state.DropDownStack && (
                <div className="DropDownArray">
                  <div className="DropDownArray-options">
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfStack: "Integer" })
                      }
                    >
                      Integer
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfStack: "String" })
                      }
                    >
                      String
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfStack: "Double" })
                      }
                    >
                      Double
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Panel for Stack ends */}

            {/* Panel for Queue begins */}
            <div className="Panel-Array">
              <button id="Array-option-button" onClick={handleDropDownQueue}>
                Queue
              </button>
              {state.DropDownQueue && (
                <div className="DropDownArray">
                  <div className="DropDownArray-options">
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfQueue: "Integer" })
                      }
                    >
                      Integer
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfQueue: "String" })
                      }
                    >
                      String
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfQueue: "Double" })
                      }
                    >
                      Double
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Panel for Queue ends */}
          </div>
        </div>
        <div className="Home-workspace">
          {/* {console.log(state.lengthOfArray)} */}
          {/* {console.log(state.typeOfArray)} */}
          {/* {console.log(arrayTypes[arrayTypes.length-1])} */}
          <Workspace
            typeOfArray={state.typeOfArray}
            setState={setState}
            lengthOfArray={state.lengthOfArray}
            typeOfStack={state.typeOfStack}
            typeOfQueue={state.typeOfQueue}
            arrayTypes={arrayTypes}
            setarrayTypes={setarrayTypes}
          />
        </div>
      </div>
    </div>
  );
}

export default Panel;
