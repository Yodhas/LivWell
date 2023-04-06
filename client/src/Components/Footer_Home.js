import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div>
        <footer className="footer-bs" style={{ textAlign: "left", marginBottom: "0px", padding: "12px"}}>
          <div className="row">
            <div className="col-md-3 footer-brand animated fadeInLeft">
              <h2>LivWell</h2>
              <p>
              LivWell is a Web based Application, which  focuses mainly on helping the students to get the proper accommodation nearby college campus. Also, it displays all the available house and PG facility data such as address, city, state, photos, and furthermore details on it.
              </p>
              <p>© 2022 LivWell.Co, All rights reserved</p>
            </div>
            <div className="col-md-3 footer-nav animated fadeInUp">
              <h4>Menu —</h4>
              <div className="col-md-6">
                <ul className="pages">
                  <li>
                    <a href="/">Flats</a>
                  </li>
                  <li>
                    <a href="/">PG's</a>
                  </li>
                  <li>
                    <a href="/">Rooms</a>
                  </li>
                  <li>
                    <a href="/">RowHouses</a>
                  </li>
                  <li>
                    <a href="/">Others</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer-nav animated fadeInUp">
              <ul className="list">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contacts</a>
                </li>
                <li>
                  <a href="/">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/* <div class="col-md-2  animated fadeInDown">

                  </div> */}
            <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
              <p>
                A rover wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
              <p></p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-envelope" />
                  </button>
                </span>
              </div>
              {/* /input-group */}
              <p />
              <div className="footer-social">
                <h4>Follow Us</h4>
                <ul>
                  <li>
                    <a href="/">
                      <FaFacebook />
                      &nbsp;&nbsp; Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaTwitter />
                      &nbsp;&nbsp; Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaInstagram />
                      &nbsp;&nbsp; Instagram
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaEnvelope />
                      &nbsp;&nbsp; Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* JavaScript Bundle with Popper */}
    </>
  );
}

export default Footer;
