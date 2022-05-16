import React from "react";
import "../css/testimonial.css";

function Testimonialss(props) {
  return (
    <>
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
            <div className="card">
              <div className="row d-flex">
                <div className="d-flex flex-column">
                  <h3 className="mt-2 mb-0">{props.name}</h3>
                  <div>
                    <p
                      className="text-center  mb-0"
                      style={{ textAlign: "center" }}>
                      {" "}
                      <span className="fa fa-star star-active"></span>{" "}
                      <span className="fa fa-star star-active"></span>{" "}
                      <span className="fa fa-star star-active"></span>{" "}
                      <span className="fa fa-star star-active"></span>{" "}
                      <span className="fa fa-star star-inactive"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-left">
                <h4 className="blue-text mt-3 text-center">
                  "An awesome activity to experience"
                </h4>
                <p className="content text-center">
                  If you really enjoy spending your vacation 'on water' or would
                  like to try something new and exciting for the first time.
                </p>
              </div>

              <div className="col text-center mt-4">
                <div className="like px-2 vote">
                  <img src="https://i.imgur.com/mHSQOaX.png" alt="dedo" />
                  <span className="blue-text pl-2" />
                  20{" "}
                </div>
                <div className="unlike px-2 vote">
                  {" "}
                  <img src="https://i.imgur.com/bFBO3J7.png" alt="dedo" />
                  <span className="text-muted pl-2" />4{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonialss;
