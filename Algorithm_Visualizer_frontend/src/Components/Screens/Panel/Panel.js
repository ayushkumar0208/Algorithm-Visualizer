import React, { useState } from "react";
import "./Panel.css";
import Workspace from "../Workspace/Workspace";

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
                  />
                  <hr id="DropDownArray-separator" />
                  <div className="DropDownArray-options">
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "Integer" })
                      }
                    >
                      Integer
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "String" })
                      }
                    >
                      String
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "Double" })
                      }
                    >
                      Double
                    </div>
                  </div>
                </div>
              )}
              {console.log(state.lengthOfArray)}
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
          {console.log(state.lengthOfArray)}
          {console.log(state.typeOfStack)}
          <Workspace
            typeOfArray={state.typeOfArray}
            setState={setState}
            lengthOfArray={state.lengthOfArray}
            typeOfStack={state.typeOfStack}
            typeOfQueue={state.typeOfQueue}
          />
        </div>
      </div>
    </div>
  );
}

export default Panel;
