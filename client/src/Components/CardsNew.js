import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image2 from "../images/image2.jpg";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Property from "../Pages/Property";
import { Button } from "@mui/material";


function CardsNew({info}) {

  return (
    <>
      <section className="ftco-section " >
        <div className="container col-sm-12">
          {/* <div className="row"> */}


          {/* <div className="col-md-12"> */}
          {/* <OwlCarousel
                className="featured-carousel owl-carousel"
                items={3}
                loop
                autoplay={true}
                autoplayTimeout={5000}
                margin={20}
                nav> */}
          <div className="item col-sm-12 col-md-12">
            <div className="blog-entry">
              <a
                href="/"
                className="block-20 d-flex align-items-start"
                style={{
                  backgroundImage: `url(${image2})`,
                  "-webkit-box-pack": "space-between",
                  "-webkit-justify-content": "space-between",
                  "-ms-flex-pack": "space-between",
                  "justify-content": "space-between",
                }}>
                <span
                  className="badge badge-primary"
                  style={{ "border-radius": "0", "font-size": "100%" }}>
                  Available
                </span>
                <span
                  className="badge badge-success"
                  style={{ "border-radius": "0", "font-size": "100%" }}>
                  Verified <br />
                  Owner
                </span>
              </a>
              <div
                className="text border border-top-0 p-4"
                style={{ textAlign: "left" }}>
                <h3 className="heading">
                  <a href="/">{info.propname}</a>
                </h3>
                <p>
                  TYPE: <strong>&nbsp; {info.ptype}</strong>
                </p>
                <p>{info.pfeatures}</p>
                <p>
                  OWNER: <strong>&nbsp; {info.ownname}</strong>
                </p>
                <br />
                <div>
                  {" "}
                  <p style={{ "font-size": "1.2rem", color: "black" }}>
                    {" "}
                    Rent: &#8377;<strong> {info.rentpermonth}</strong>/month
                  </p>
                </div>



    <Stack spacing={1}>
    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
    </Stack>
    <p className="mb-0 mt-3">
                    <a href={`/single/${info._id}`} className="btn btn-primary" style={{textDecoration: "none"}}>
                      Explore <span className="ion-ios-arrow-round-forward" />
                    </a>
                  </p>
  

                {/* <div
                  className="d-flex pb-4"
                  style={{
                    "-webkit-box-pack": "space-around",
                    "-webkit-justify-content": "space-around",
                    "-ms-flex-pack": "space-around",
                    "justify-content": "space-around",
                  }}>
                  <fieldset className="rating">
                    <input
                      type="radio"
                      id="star5"
                      name="rating"
                      defaultValue={5}
                    />
                    <label
                      className="full"
                      htmlFor="star5"
                      title="Awesome - 5 stars"
                    />
                    <input
                      type="radio"
                      id="star4half"
                      name="rating"
                      defaultValue="4 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star4half"
                      title="Pretty good - 4.5 stars"
                    />
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      defaultValue={4}
                    />
                    <label
                      className="full"
                      htmlFor="star4"
                      title="Pretty good - 4 stars"
                    />
                    <input
                      type="radio"
                      id="star3half"
                      name="rating"
                      defaultValue="3 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star3half"
                      title="Meh - 3.5 stars"
                    />
                    <input
                      type="radio"
                      id="star3"
                      name="rating"
                      defaultValue={3}
                    />
                    <label
                      className="full"
                      htmlFor="star3"
                      title="Meh - 3 stars"
                    />
                    <input
                      type="radio"
                      id="star2half"
                      name="rating"
                      defaultValue="2 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star2half"
                      title="Kinda bad - 2.5 stars"
                    />
                    <input
                      type="radio"
                      id="star2"
                      name="rating"
                      defaultValue={2}
                    />
                    <label
                      className="full"
                      htmlFor="star2"
                      title="Kinda bad - 2 stars"
                    />
                    <input
                      type="radio"
                      id="star1half"
                      name="rating"
                      defaultValue="1 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star1half"
                      title="Meh - 1.5 stars"
                    />
                    <input
                      type="radio"
                      id="star1"
                      name="rating"
                      defaultValue={1}
                    />
                    <label
                      className="full"
                      htmlFor="star1"
                      title="Sucks big time - 1 star"
                    />
                    <input
                      type="radio"
                      id="starhalf"
                      name="rating"
                      defaultValue="half"
                    />
                    <label
                      className="half"
                      htmlFor="starhalf"
                      title="Sucks big time - 0.5 stars"
                    />
                  </fieldset>
                  
                  <br />
                </div> */}
              </div>
            </div>
          </div>
          {/*------------- Card 1 ----------------*/}
          {/* </OwlCarousel> */}
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default CardsNew;
