import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer_Home";
import {Link} from "react-router-dom"

function Property() {

    const location = useLocation();
    const refId = location.pathname.split('/')[2];
    console.log(location);
    console.log(refId);

    const [datas, setdatas] = useState({});

    useEffect(() => {
      const getPost = async()=>{
        const res = await axios.get('/new/'+refId);
        console.log(res);
        setdatas(res.data);
      }
      getPost()
    }, [])
    
  

  return (
    <div>
      <div className="mainmenu-bg" id="mainmenu-bg" />
     
      <div className="container prop-b-crumbs">
        <time dateTime="2017-12-14 20:00" className="prop-date">
          Updated on May 17, 2022 at 3:42 pm
        </time>
        <ul className="b-crumbs">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/property">Catalog</Link>
          </li>
          <li>Single Property</li>
        </ul>
      </div>
      <div className="container">
        <div className="prop-wrap">
          <div className="swiper-container prop-slider">
            <div className="swiper-container prop-slider-top">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="https://im.proptiger.com/1/659733/6/shiv-elite-elevation-4597384.jpeg" alt="abcd" />
                  <a
                    href="http://placehold.it/1350x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="https://mediacdn.99acres.com/media1/16790/7/335807528T-1640334563753.jpg" alt="xyz" />
                  <a
                    href="http://placehold.it/1350x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="https://is1-3.housingcdn.com/01c16c28/331c3921b230bc53f7b320a2fa99757c/v0/fs/2_bhk_apartment-for-sale-shankarpur_1-Nagpur-bedroom.jpg" alt="uvw" />
                  <a
                    href="http://placehold.it/1349x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="/dist/img2/PropertuImage.jpg" alt="" />
                  <a
                    href="http://placehold.it/1307x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="/dist/img2/PropertuImage.jpg" alt="abcd" />
                  <a
                    href="http://placehold.it/1350x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}>
                  <img src="/dist/img2/PropertuImage.jpg" alt="abcd" />
                  <a
                    href="http://placehold.it/1500x985"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
            </div>
            <div className="swiper-container prop-slider-thumbs">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {" "}
                  <img src="https://mediacdn.99acres.com/media1/16790/7/335807528T-1640334563753.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  >
                  <img src="https://is1-3.housingcdn.com/01c16c28/8d19d06bf30db6cdf5b03607e231060a/v0/fs/2_bhk_apartment-for-sale-shankarpur_1-Nagpur-hall.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  >
                  <img src="https://files.propertywala.com/photos/ae/J119004331.kitchen.2761902l.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  >
                  <img src="https://newprojects.99acres.com/projects/om_shivam_buildcon._pvt._ltd./shiv_elite/images/5uvexmvf.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  >
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  >
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
              </div>
            </div>
          </div>
          <div className="prop-cont">
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
                <a href="catalog-grid.html">{datas.owncontact}</a>
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
                  <span className="prop-main-price-val">Rs. {datas.rentpermonth}</span>{" "}
                  <span className="prop-main-price-currency">/ month</span>
                </p>
              </div>
              <div className="prop-cont-buttons">
                <a href="/" className="prop-wishlist">
                  <i className="fa fa-heart" />
                </a>
                {/* Here */}
                <button href="javascript:window.print()" className="prop-print">
                  <i className="fa fa-print" />
                </button>
                <div className="prop-share">
                  <a className="prop-share-btn" href="/">
                    <i className="fa fa-share-alt" />
                  </a>
                  <div className="prop-share-list">
                    <ul className="post-share">
                      <li>
                        <buton
                          onclick="window.open('https://www.facebook.com/sharer.php?s=100&p[url]=http://absolute-html.real-web.pro','sharer', 'toolbar=0,status=0,width=620,height=280');"
                          data-toggle="tooltip"
                          title="Share on Facebook"
                          href="javascript:">
                          <i className="fa fa-facebook" />
                        </buton>
                      </li>
                      <li>
                        <button
                          onclick="popUp=window.open('http://twitter.com/home?status=Post with Shortcodes http://absolute-html.real-web.pro','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;"
                          data-toggle="tooltip"
                          title="Share on Twitter"
                          href="javascript:;">
                          <i className="fa fa-twitter" />
                        </button>
                      </li>
                      <li>
                        <button
                          onclick="popUp=window.open('http://vk.com/share.php?url=http://absolute-html.real-web.pro','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;"
                          data-toggle="tooltip"
                          title="Share on VK"
                          href="javascript:;">
                          <i className="fa fa-vk" />
                        </button>
                      </li>
                      <li>
                        <button
                          data-toggle="tooltip"
                          title="Share on Pinterest"
                          onclick="popUp=window.open('http://pinterest.com/pin/create/button/?url=http://absolute-html.real-web.pro&description=Absolute HTML Template&media=http://discover.real-web.pro/wp-content/uploads/2017/09/insect-1130497_1920.jpg','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;"
                          href="javascript:;">
                          <i className="fa fa-pinterest" />
                        </button>
                      </li>
                      <li>
                        <button
                          data-toggle="tooltip"
                          title="Share on Google +1"
                          href="javascript:;"
                          onclick="popUp=window.open('https://plus.google.com/share?url=http://absolute-html.real-web.pro','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;">
                          <i className="fa fa-google-plus" />
                        </button>
                      </li>
                      <li>
                        <button
                          data-toggle="tooltip"
                          title="Share on Linkedin"
                          onclick="popUp=window.open('http://linkedin.com/shareArticle?mini=true&url=http://absolute-html.real-web.pro&title=Absolute HTML Template','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;"
                          href="javascript:;">
                          <i className="fa fa-linkedin" />
                        </button>
                      </li>
                      <li>
                        <button
                          data-toggle="tooltip"
                          title="Share on Tumblr"
                          onclick="popUp=window.open('http://www.tumblr.com/share/link?url=http://absolute-html.real-web.pro&name=Absolute HTML Template&description=Aliquam%2C+consequuntur+laboriosam+minima+neque+nesciunt+quod+repudiandae+rerum+sint.+Accusantium+adipisci+aliquid+architecto+blanditiis+dolorum+excepturi+harum+ipsa%2C+ipsam%2C...','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;"
                          href="javascript:;">
                          <i className="fa fa-tumblr" />
                        </button>
                      </li>
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container prop-agent-wrap">
        <div className="prop-agent">
          <p>Agent</p>
          <h3>
            <strong>LivWell Co.</strong>
          </h3>
         
        </div>
        <a href="/" className="modalform-btn btn1 prop-callback">
           <strong>Add to Wishlist</strong>
        </a>
      </div>
      
      <div className="prop-info">
        <div className="stylization container prop-desc">
          <h2>
            About <b>Property</b>
          </h2>
          <p>
          {datas.pfeatures}
          </p>
        <hr className="prop-hr mb-4" />
          <h2>
             <b>For further Details</b>
          </h2>
           <p>Contact :   <a href="tel:9876543210" >{datas.owncontact}</a> <br/>
           Email : <a href="mailto:varun2120@gmail.com">{datas.email}</a> </p>
          
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
export default Property;
