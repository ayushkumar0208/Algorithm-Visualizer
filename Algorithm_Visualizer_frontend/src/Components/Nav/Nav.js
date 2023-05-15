import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderLink from "./HeaderLink/HeaderLink";
import '../../css/styles.css'
import '../../css/bootstrap.css'

import logo2 from "../../images/Logo2.png";
import search from "../../images/icons/search-icon-sm.png";
import Login from "../../images/icons/Login.png";
import cart from "../../images/icons/cart-sm.png";
import {VscAccount} from 'react-icons/vsc'

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src={logo2} alt="" style={{width:"9vw"}}/>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link href="/tv">Home</Nav.Link>
              <Nav.Link href="/music">Features</Nav.Link>
              <Nav.Link href="/watch">About Us</Nav.Link>
              <Nav.Link href="/workspace">Workspace</Nav.Link>
              <Nav.Link href="/login">
                {/* <img src={Login} alt="" style={{width:"1.5vw"}}/> */}
                <VscAccount size={25} color="white"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
