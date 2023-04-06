import React from "react";
import "../css/testimonial.css";

function Testimonialss(props) {
  return (
    <>
      
        <div className="row justify-content-center">
          <div className="text-center mb-5">
            <div className="carde" style={{width: "100%"}}>
              <div className="row d-flex">
                <div className="d-flex flex-column">
                  <h3 className="mt-2 mb-0">{props.name}</h3>
                  <div>
                    <p
                      className="text-center  mb-0"
                      style={{ textAlign: "center" }}>
                      <span className="fa fa-star stars-active"></span>
                      <span className="fa fa-star stars-active"></span>
                      <span className="fa fa-star stars-active"></span>
                      <span className="fa fa-star stars-active"></span>
                      <span className="fa fa-star stars-inactive"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-left">
                <h4 className="bluee-text mt-3 text-center">
                  {props.tagl}
                </h4>
                <p className="contents text-center">
                  {props.desc}
                </p>
              </div>

              <div className="col text-center mt-4">
                <div className="like px-2 vote">
                  <img src="https://i.imgur.com/mHSQOaX.png" alt="dedo" />
                  <span className="blue-text pl-2" />
                  {props.likes}
                </div>
                <div className="unlike px-2 vote">
                  <img src="https://i.imgur.com/bFBO3J7.png" alt="dedo" />
                  <span className="text-muted pl-2" />{props.disl}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Testimonialss;
