import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Panel.css";
import Workspace from "../Workspace/Workspace";
import axios from "axios";
import Main from "../../../component/Main";
function Panel(props) {
  const location = useLocation();
  const [showPanel, setShowPanel] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  const [currNote, setCurrNote] = useState(0);
  const [Notes, setNotes] = useState([""]);
  const [state, setState] = useState({
    DropDownArray: false,
    typeOfArray: null,
    lengthOfArray: 0,
    DropDownStack: false,
    typeOfStack: null,
    DropDownQueue: false,
    typeOfQueue: null,
  });

  const [arrayTypes, setarrayTypes] = useState([]);
  const [stackTypes, setstackTypes] = useState([]);
  const [queueTypes, setqueueTypes] = useState([]);

  
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

  const AddNote = () => {
    Notes.push("");
  };

  const handleNoteContent = (e) => {
    var newNotes = [...Notes];
    newNotes[currNote] = e.target.value;
    setNotes(newNotes);
  };

  const deleteNote = (index) => {
    var newNotes = [...Notes];
    
    if(index>-1){
      newNotes.splice(index, 1);
      setCurrNote(0);
    }
    setNotes(newNotes)
    
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
      });
  });

  return (
    <div className="Home">
      {/* {console.log(Notes)} */}
      {console.log(location.state)}
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
                style={{
                  borderTopLeftRadius: "1vw",
                  borderBottomLeftRadius: "1vw",
                }}
                onClick={() => {
                  setShowPanel(false);
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
                  setShowPanel(true);
                  setShowNotes(false);
                }}
              >
                &gt;
              </button>
            )}
          </div>
          {showPanel && (
            <div className="Panel">
              <h6>WorkSpace Id: {location.state}</h6>
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
                                "http://localhost:8800/updateAddNewArrayType/Integer/"+location.state
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
                                "http://localhost:8800/updateAddNewArrayType/String/"+location.state
                              );
                              setState({ ...state, typeOfArray: "String" });
                            }}
                          >
                            String
                          </div>
                          {/* {console.log(arrayTypes)} */}
                          <div
                            className="DropDownArray-option"
                            onClick={() => {
                              axios.post(
                                "http://localhost:8800/updateAddNewArrayType/Double/"+location.state
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
                  {/* Panel for Queue ends */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="Home-workspace"
          style={{
            width:
              showPanel && !showNotes
                ? "78vw"
                : !showPanel && showNotes
                ? "60vw"
                : "95vw",
          }}
        >
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
            WorkspaceId = {location.state}
          />
          {/* <LinkedList/> */}
        </div>
        <div className="Notes">
          {showNotes && (
            <div className="Notes-Main">
              <div style={{display:"flex", justifyContent:"space-between" ,width:"90%",alignItems:"center"}}>
              <p id="Notes-title">Notes</p>
              <button id="Note-Add-button" onClick={AddNote}>Add +</button>
              </div>
              
              <div className="Notes-Menu">
                <div className="Notes-List">
                  {Notes.map((element, index) => (
                    <p
                      id="Note-button"
                      onClick={() => setCurrNote(index)}
                      style={{
                        backgroundColor:
                          index === currNote ? "#F7F6F6" : "#dbdbdb",
                      }}
                    >
                      Note {index + 1}
                      <img id="Notes-Close-img" src="/Notes-Close.png" alt="" onClick={() => deleteNote(index)}/>
                    </p>
                    // console.log(index)
                  ))}
                </div>

                
              </div>
              
              {Notes.length!==0?(<textarea
                id="Note-content"
                name="Note-content"
                placeholder="Write a Note..."
                value={Notes[currNote]}
                onChange={(e) => handleNoteContent(e)}
              />):(
                <div id="dummy-Note">
                  <p style={{fontFamily:"monospace", fontWeight:600 , fontSize:"1.5vw", color:"#757474"}}>Add New Note</p>
                </div>
              )}
              
            </div>
          )}
          {showNotes ? (
            <button
              id="panel-toggle-button"
              style={{
                borderTopRightRadius: "1vw",
                borderBottomRightRadius: "1vw",

                transition: "0.6s",
              }}
              onClick={() => {
                setShowNotes(false);
              }}
            >
              &gt;
            </button>
          ) : (
            <button
              id="panel-toggle-button"
              style={{
                borderTopLeftRadius: "1vw",
                borderBottomLeftRadius: "1vw",
                transition: "0.6s",
                height: "80vh",
              }}
              onClick={() => {
                setShowNotes(true);
                setShowPanel(false);
              }}
            >
              &lt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Panel;
