import React, { Component } from "react";
import $ from 'jquery';
import '../../js/custom.js';
import flag from "../../images/icons/16.png";
// import 'flag-icon-css/css/flag-icon.min.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            SillyCooder is a comprehensive platform that aims to simplify the understanding of complex algorithms through interactive visualizations. Explore our extensive algorithm library, experiment with different algorithms in real-time, and enhance your learning experience with our educational resources. Join our thriving community of learners and experts, share insights, and collaborate on algorithmic challenges. Customize and share your visualizations to foster knowledge sharing and collaboration. Begin your algorithmic journey today and unlock the power of algorithms with SillyCooder. 
Discover the beauty and elegance of algorithms as you dive into our immersive visualizations. Gain a deeper understanding of key concepts like sorting, searching, graph algorithms, and machine learning. Stay updated with the latest algorithmic trends and advancements through our curated content and expert articles. Whether you're a student, a developer, or a curious mind, SillyCooder is your gateway to unlocking the potential of algorithms and taking your programming skills to new heights. Join us on this exciting adventure and embark on a journey of algorithmic exploration like never before.{" "}
            {/* <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              {" "}
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              {" "}
              here
            </a> */}
            .
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            {/* <h3>Code and Learn</h3>
            <ul>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">HomePod</a>
              </li>
              <li>
                <a href="#">iPod touch</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              
            </ul> */}
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            {/* <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Apple Music</a>
              </li>
              <li>
                <a href="#">Apple News+</a>
              </li>
              <li>
                <a href="#">Apple TV+</a>
              </li>
              <li>
                <a href="#">Apple Arcade</a>
              </li>
              <li>
                <a href="#">Apple Card</a>
              </li>
              <li>
                <a href="#">iCloud</a>
              </li>
            </ul> */}
            <h3>Account</h3>
            <ul>
              <li>
                <a href="#">Manage Your SillyCooder ID</a>
              </li>
              <li>
                <a href="#">SillyCooder Account</a>
              </li>
              <li>
                <a href="#">mongoCloud.com</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>SillyCooder Space</h3>
            <ul>
              {/* <li>
                <a href="#">Find a SillyCooder store</a>
              </li> */}
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at SillyCooder</a>
              </li>
              <li>
                <a href="#">SillyCooder Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">SillyCooder App</a>
              </li>
              <li>
                <a href="#">Refurbished and Clearance</a>
              </li>
              <li>
                <a href="#">Financing</a>
              </li>
              {/* <li>
                <a href="#">SillyCooder Trade In</a>
              </li> */}
              <li>
                <a href="#">Order Status</a>
              </li>
              {/* <li>
                <a href="#">Shopping Help</a>
              </li> */}
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            {/* <h3>For Business</h3>
            <ul>
              <li>
                <a href="#">SillyCooder and Business</a>
              </li>
              <li>
                <a href="#">SillyCooder for Business</a>
              </li>
            </ul> */}
            <h3>For Education</h3>
            <ul>
              <li>
                <a href="#">SillyCooder for School</a>
              </li>
              <li>
                <a href="#">SillyCooder for College</a>
              </li>
            </ul>
            {/* <h3>For Healthcare</h3>
            <ul>
              <li>
                <a href="#">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul> */}
            {/* <h3>For Government</h3>
            <ul>
              <li>
                <a href="#">Apple and Education</a>
              </li>
              <li>
                <a href="#">Shop for College</a>
              </li>
            </ul> */}
          </div>
          {/* <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
            </ul>
          </div> */}
        </div>
        {/* <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div> */}
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2023 SillyCooder. All rights reserved.
          </div>
          <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper">
              <img src="\India_flag_icon.png" height={20} width={21} style={{borderRadius:"99vw"}}/>
              {/* <span classname="flag-icon flag-icon-in"></span> */}
            </div>{" "}
            <div className="footer-country-name">India</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
