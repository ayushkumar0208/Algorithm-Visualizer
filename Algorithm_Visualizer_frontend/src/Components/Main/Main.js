import React, { Component } from "react";

import appletv from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import arcade from "../../images/icons/arcade.png";

import Fourth from "./Fourth/Fourth";
import Rating from "./Rating/Rating";
import Youtube from "../Youtube/Youtube";
import '../../css/styles.css'
import Nav from "../Nav/Nav"
import Logo from '../../images/Logo1.png'
import img1 from '../../images/home/First-Highlight.avif'
import img2 from '../../images/home/img2.avif'
import Footer from "../Footer/Footer";
// import workspace_Video from "../../Videos/workspace_Video.mp4"
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'

function Main() {
  return (
    <div>
      <section className="alert-section top-50">
        <Nav/>
        <div className="container-first">
          {/* <div className="alert-title">We’re open for you.</div> */}
          <img src={Logo} alt = "" style={{width:"50vw"}}/>
          <div className="alert-text">
          At <b style={{fontWeight:"800"}}>SillyCooder</b>, we believe that understanding algorithms is crucial for anyone interested in computer science and programming. Our platform offers a unique way to learn and explore algorithms through immersive visualizations. Whether you're a student, a professional developer, or simply curious about how algorithms work, our website provides a rich and engaging learning experience.
          </div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">

          {/* <div className="new-alert">New</div> */}

          <div className="title-wraper bold black">Welcome to SillyCooder!<br></br>Begin your experience from this moment</div>

          <div className="links-wrapper">
            <ul>
              <p style={{textAlign:"center"}}>
                <a href="/workspace" target="blank">Create Workspace <BsFillArrowUpRightSquareFill size={25} /></a>
              </p>
              {/* <li>
                <a href="">Order</a>
              </li> */}
            </ul>
          </div>
          <img src={img1} alt = "" style={{width:"40vw"}}/>

          
      </section>
      <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10vw"}}> 
      <section className="second-hightlight-wrapper">
        <div className="container">

          <div className="title-wraper bold black">Why SillyCooder?</div>

          <div className="description-wrapper black">
          Visualize Complex Concepts | Hands-On Learning | Algorithm Visualization
          </div>
            <br></br>
          <div className="price-wrapper grey why-points">
            <p>- Begin your algorithmic journey by exploring our algorithm library, trying out interactive visualizations.</p>
            <p>- Interactive environment where you can experiment with different algorithms and see their effects in real-time.</p>
            <p>-  Write code snippets, and pseudocode alongside each visualization to help you grasp the underlying concepts. </p>
          </div>
          

          <div className="links-wrapper">
            <ul>
            <p style={{textAlign:"center"}}>
                <a href="/watch" target="blank">Learn More <BsFillArrowUpRightSquareFill size={25} /></a>
              </p>
              {/* <li>
                <a href=""></a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      <img src={img2} alt = "" style={{width:"30vw",height:"30vw"}}/>
      </div>
      
      {/* <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">Arrays</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={appletv} />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={banker} />
                </div>

                <div className="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={series5} />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div style={{width:"100%",display:"flex",justifyContent:"space-evenly" }}>
        <div style={{ marginLeft: "2vw"}}>
        <div><p className="title-wraper bold black" >Unlock the power of algorithms through interactive visualizations</p></div>
        <div className="description-wrapper black">
          - Interactive Workspace <br></br> - Ready to use for Beginners 
          </div>
        </div>
        
      <video src="/workspace_Video.mp4" style={{width:"55vw",padding:"0.5vw",backgroundColor:"black",borderRadius:"2vw", marginRight: "2vw"}} loop autoPlay muted></video>
      </div>
      <br/>
      <br/>
      
      {/* <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} />
                  </div>
                </div>
                <div className="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  Apple Card Monthly Installments
                </div>
                <div className="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer/>
    </div>
  );
}

export default Main;
