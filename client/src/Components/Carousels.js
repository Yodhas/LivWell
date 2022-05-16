import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel1 from "../images/image3.jpeg";
import Carousel3 from "../images/image2.jpg";
import Carousel2 from "../images/image3.jpg";
import { Carousel } from "react-bootstrap";

function Carousels() {
  return (
    <>
      <Carousel fade interval={4000} keyboard={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
            style={{ height: "92vh" }}
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel3}
            alt="Second slide"
            style={{ height: "92vh" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel2}
            alt="Third slide"
            style={{ height: "92vh" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousels;
