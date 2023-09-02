import React, { useState, useEffect } from "react";
import "./Panel.css";
import Workspace from "../Workspace/Workspace";
import axios from "axios";
import Main from "../../../component/Main";
function Panel(props) {
  const [showPanel, setShowPanel] = useState(true);
  const [state, setState] = useState({
    DropDownArray: false,
    typeOfArray: null,
    lengthOfArray: 0,
    DropDownStack: false,
    typeOfStack: null,
    DropDownQueue: false,
    typeOfQueue: null,
    DropDownSet: false,
    typeOfSet: null,
  });

  const [arrayTypes, setarrayTypes] = useState([]);
  const [stackTypes, setstackTypes] = useState([]);
  const [queueTypes, setqueueTypes] = useState([]);
  const [setTypes, setsetTypes] = useState([]);
  
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

  const handleDropDownSet = () => {
    setState({
      ...state,
      DropDownSet: !state.DropDownSet,
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
        setstackTypes(result[0].StackTypes);
        setqueueTypes(result[0].QueueTypes);
        setsetTypes(result[0].SetTypes);
      });
  });

  return (
    <div className="Home">
      <Main />
      <div className="Home-main-activity">
        <div
          className="Panel-Complete"
          style={{ "margin-left": showPanel ? "1vw" : "0%" }}
        >
          <div className="Panel-toggle">
            {showPanel ? (
              <button
                id="panel-toggle-button"
                onClick={() => {
                  setShowPanel(!showPanel);
                }}
              >
                &lt;
              </button>
            ) : (
              <button
                id="panel-toggle-button"
                style={{
                  borderTopRightRadius: "1vw",
                  borderBottomRightRadius: "1vw",
                  borderTopLeftRadius: "0vw",
                  borderBottomLeftRadius: "0vw",
                  height: "80vh",
                  transition: "0.6s",
                }}
                onClick={() => {
                  setShowPanel(!showPanel);
                }}
              >
                &gt;
              </button>
            )}
          </div>
          {showPanel && (
            <div className="Panel">
              <div className="Panel-Section-1">
                <p id="Panel-Section-1-title">Linear Data Structures</p>
                <div className="Panel-Section-1-options">
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
                          required
                        />
                        <hr id="DropDownArray-separator" />
                        <div className="DropDownArray-options">
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              axios.post(
                                "http://localhost:8800/updateAddNewArrayType/Integer"
                              );
                              setState({ ...state, typeOfArray: "Integer" });
                            }}
                          >
                            Integer
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              axios.post(
                                "http://localhost:8800/updateAddNewArrayType/String"
                              );
                              setState({ ...state, typeOfArray: "String" });
                            }}
                          >
                            String
                          </div>
                          {console.log(arrayTypes)}
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              axios.post(
                                "http://localhost:8800/updateAddNewArrayType/Double"
                              );
                              setState({ ...state, typeOfArray: "Double" });
                            }}
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
                            onClick={() => {
                              // axios.post("http://localhost:8800/updateAddNewStackType/Integer")
                              setState({ ...state, typeOfStack: "Integer" });
                            }}
                          >
                            Integer
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              // axios.post("http://localhost:8800/updateAddNewStackType/String")
                              setState({ ...state, typeOfStack: "String" });
                            }}
                          >
                            String
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              // axios.post("http://localhost:8800/updateAddNewStackType/Double")
                              setState({ ...state, typeOfStack: "Double" });
                            }}
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
                    <button
                      id="Array-option-button"
                      onClick={handleDropDownQueue}
                    >
                      Queue
                    </button>
                    {state.DropDownQueue && (
                      <div className="DropDownArray">
                        <div className="DropDownArray-options">
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              // axios.post("http://localhost:8800/updateAddNewQueueType/Integer")
                              setState({ ...state, typeOfQueue: "Integer" });
                            }}
                          >
                            Integer
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              // axios.post("http://localhost:8800/updateAddNewQueueType/String")
                              setState({ ...state, typeOfQueue: "String" });
                            }}
                          >
                            String
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              // axios.post("http://localhost:8800/updateAddNewQueueType/Double")
                              setState({ ...state, typeOfQueue: "Double" });
                            }}
                          >
                            Double
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button id="Array-option-button">LinkedList</button>

                  {/* Panel for Set begins */}
                  <div className="Panel-Array">
                    <button
                      id="Array-option-button"
                      onClick={handleDropDownSet}
                    >
                      Set
                    </button>
                    {state.DropDownSet && (
                      <div className="DropDownArray">
                        <div className="DropDownArray-options">
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              setState({ ...state, typeOfSet: "Integer" });
                            }}
                          >
                            Integer
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              setState({ ...state, typeOfSet: "String" });
                            }}
                          >
                            String
                          </div>
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              setState({ ...state, typeOfSet: "Double" });
                            }}
                          >
                            Double
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Panel for Set ends */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="Home-workspace" style={{"width":showPanel?"78vw":"95vw"}}>
          {/* {console.log(state.lengthOfArray)} */}
          {/* {console.log(state.typeOfQueue)} */}
          {/* {console.log(arrayTypes[arrayTypes.length-1])} */}
          <Workspace
            typeOfArray={state.typeOfArray}
            setState={setState}
            lengthOfArray={state.lengthOfArray}
            typeOfStack={state.typeOfStack}
            typeOfQueue={state.typeOfQueue}
            arrayTypes={arrayTypes}
            setarrayTypes={setarrayTypes}
            stackTypes={stackTypes}
            setstackTypes={setstackTypes}
            queueTypes={queueTypes}
            setqueueTypes={setqueueTypes}
            setsetTypes={setsetTypes}
            setTypes={setTypes}
            typeOfSet={state.typeOfSet}
          />
          {/* <LinkedList/> */}
        </div>
        
      </div>
    </div>
  );
}

export default Panel;
