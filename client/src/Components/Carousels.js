import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel1 from "../images/image3.jpeg";
import Carousel3 from "../images/image2.jpg";
import Carousel2 from "../images/image3.jpg";
import { Carousel } from "react-bootstrap";
import Search from "./Search";

function Carousels() {
  return (
    <>
    {/* <div style={{height: "100vh", width: "100vw", margin:"0px", padding: "0px", zIndex: "-10"}}> */}
    
      <Carousel fade interval={4000} keyboard={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
            style={{ height: "100vh" }}
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel3}
            alt="Second slide"
            style={{ height: "100vh" }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel2}
            alt="Third slide"
            style={{ height: "100vh" }}
          />

        </Carousel.Item>
        
      </Carousel>
      {/* </div> */}
    </>
  );
}

export default Carousels;
