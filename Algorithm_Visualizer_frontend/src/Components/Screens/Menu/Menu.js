import React,{useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from "axios";
import './Menu.css'

function Menu() {
    const navigate  = useNavigate();
    const [Id,setId] = useState("");
    const generateWorkspaceId = () =>{
        const randomNumber = Math.floor(Math.random() * 100000000);
        const id =  randomNumber.toString().padStart(8, '0');
        console.log("Id: "+id);
        const Obj = {name: id};
        axios.post("http://localhost:8800/Workspace/Structures",Obj).then((response) => {
            console.log("Workspace added successfully");
        });

        setId({...Id, id: id});
        redirectToAbout(id);
    }
     
    const redirectToAbout = (idToRedirect) => {
        // Pass props as state when redirecting
        navigate('/Home', {state: idToRedirect});
      };



  return (
    <div className='Menu'>
        <div className='Menu-title'>
            <h1>Want to, Create New Workspace ?</h1>
        </div>
        <button id="Menu-Create-button" onClick={() => {generateWorkspaceId()}}>Create</button>

        <hr/>

        <input type="text" id="Menu-input"></input>
    </div>
  )
}

export default Menu
