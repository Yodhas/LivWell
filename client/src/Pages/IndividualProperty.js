import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";

import ProductImagesSlider from "./helperProperty";
import { productImages } from "../assets";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer_Home";
import { rgbToHex } from "@material-ui/core";

function App() {
  const location = useLocation();
  const refId = location.pathname.split("/")[2];
  const [datas, setdatas] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/new/" + refId);
      console.log(res);
      setdatas(res.data);
    };
    getPost();
  }, []);
  return (
    <section
    // style={{
    //   backgroundImage:
    //     "url('https://img.freepik.com/free-photo/low-angle-massive-concrete-building-city_23-2148798667.jpg?w=740&t=st=1680952244~exp=1680952844~hmac=5a25132fa65787229293c9a91a30dfc0bf1db41387207dd157bdeb7524e442f9')",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "100% 100%",
    // }}
    >
      {/* <img
        src="https://img.freepik.com/free-photo/skyscrapers_1353-54.jpg?w=740&t=st=1680952946~exp=1680953546~hmac=fe281e6f374d8a1aea0e6a363a9568a339eda0b36f199c2c681e7f1ec3649189"
        alt="abcd"
        style={{
          position: "absolute",
          width: "100%",
          height: "90%",
          zIndex: "-1",
          opacity: "28%",
        }}
      /> */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "500px",
            padding: "20px",
            backgroundColor: "transparent",
          }}
        >
          <ProductImagesSlider images={productImages} />
        </div>
        <div
          className="prop-cont "
          style={{
            padding: "20px",
            marginTop: "10px",
          }}
        >
          <p className="prop-main-loc">
            <a href="catalog-grid.html">{datas.address} </a>{" "}
          </p>
          <h1 className="prop-main-ttl">{datas.propname}</h1>
          <p className="prop-main-loc">Nearby, {datas.college}</p>
          <div className="prop-main-rating">
            <ul>
              <li>
                <i className="ion-android-star" />
              </li>
              <li>
                <i className="ion-android-star" />
              </li>
              <li>
                <i className="ion-android-star" />
              </li>
              <li>
                <i className="ion-android-star" />
              </li>
              <li>
                <i className="ion-android-star" />
              </li>
            </ul>
          </div>
          <dl className="prop-main-atts">
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-area.png" alt="abcd" />
              </span>
              Status
            </dt>
            <dd>
              <a href="catalog-grid.html">For Rent</a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-area.png" alt="" />
              </span>
              No. of Rooms
            </dt>
            <dd>
              <a href="catalog-grid.html">3 BHK</a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-bed.png" alt="" />
              </span>
              Owner
            </dt>
            <dd>
              <a href="catalog-grid.html">{datas.ownname}</a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-price.png" alt="" />
              </span>
              Contact
            </dt>
            <dd>
              <a href="catalog-grid.html" style={{ paddingLeft: "5px" }}>
                {datas.owncontact}
              </a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-type.png" alt="" />
              </span>
              Rent
            </dt>
            <dd>
              <a href="catalog-grid.html">Rs. {datas.rentpermonth}</a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-garage.png" alt="" />
              </span>
              Deposit
            </dt>
            <dd>
              <a href="catalog-grid.html">Rs. {datas.depositamount}</a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-bath.png" alt="" />
              </span>
              Type
            </dt>
            <dd>
              <a href="catalog-grid.html">{datas.ptype}</a>
            </dd>
            <dt>
              <span className="prop-i-info-icon">
                <img src="/dist/img2/ico-user.png" alt="" />
              </span>
              Guests
            </dt>
            <dd>
              <a href="catalog-grid.html">5-6</a>
            </dd>
          </dl>
          <div className="prop-cont-bottom">
            <div className="prop-main-price-wrap">
              <p className="prop-main-price-label">Price</p>
              <p className="prop-main-price">
                <span className="prop-main-price-val">
                  Rs. {datas.rentpermonth}
                </span>{" "}
                <span className="prop-main-price-currency">/ month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container prop-agent-wrap">
        <div
          className="prop-agent"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <p>Agent</p>
          <h3 style={{ backgroundColor: "transparent" }}>
            <strong>LivWell Co.</strong>
          </h3>
        </div>
        <a
          href="/pricing"
          className="modalform-btn btn1 prop-callback"
          style={{ width: "65%"}}
        >
          <strong>Promote your Property</strong>
        </a>
      </div>
      <Footer />
    </section>
  );
}

export default App;