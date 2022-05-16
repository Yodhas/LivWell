import React from "react";

function Property() {
  return (
    <div>
      <div className="mainmenu-bg" id="mainmenu-bg" />
      <div id="mainmenu-wrap">
        <nav id="mainmenu" className="mainmenu">
          <button id="mainmenu-close" className="mainmenu-close" href="/">
            <i className="ion-android-close" />
          </button>
          <ul>
            <li className="menu-item-has-children">
              <a href="index-detailed.html">
                Home <i className="fa fa-caret-down" />
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="index-agency.html">Home - Agency</a>
                </li>
                <li>
                  <a href="index-detailed.html">Home - Detailed</a>
                </li>
                <li>
                  <a href="index-banners.html">Home - Banners</a>
                </li>
                <li>
                  <a href="index-multi.html">Home - Multi</a>
                </li>
                <li>
                  <a href="index-booking.html">Home - Booking</a>
                </li>
                <li>
                  <a href="index-map.html">Home - Full Map</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children active">
              <a href="catalog-grid.html">
                Properties <i className="fa fa-caret-down" />
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="catalog-grid.html">Catalog - Grid Style</a>
                </li>
                <li>
                  <a href="catalog-list.html">Catalog - List Style</a>
                </li>
                <li>
                  <a href="property.html">Single Property - Style 1</a>
                </li>
                <li className="active">
                  <a href="property-2.html">Single Property - Style 2</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="agents.html">
                Agents <i className="fa fa-caret-down" />
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="agents.html">Agents List</a>
                </li>
                <li>
                  <a href="agent.html">Agent Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
            <li className="menu-item-has-children">
              <a href="blog-grid.html">
                Blog <i className="fa fa-caret-down" />
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="blog-grid.html">Grid Style</a>
                </li>
                <li>
                  <a href="blog-list.html">List Style</a>
                </li>
                <li>
                  <a href="post.html">Single Post</a>
                </li>
                <li>
                  <a href="post-slider-sidebar-right.html">Slider Post</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="gallery.html">
                Pages <i className="fa fa-caret-down" />
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="404.html">404 Page</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container prop-b-crumbs">
        <time dateTime="2017-12-14 20:00" className="prop-date">
          Updated on May 29, 2017 at 3:42 pm
        </time>
        <ul className="b-crumbs">
          <li>
            <a href="index-detailed.html">Home</a>
          </li>
          <li>
            <a href="catalog-grid.html">Catalog</a>
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
                  <img src="/dist/img2/PropertuImage.jpg" alt="abcd" />
                  <a
                    href="http://placehold.it/1350x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="/dist/img2/PropertuImage.jpg" alt="xyz" />
                  <a
                    href="http://placehold.it/1350x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                  <a
                    href="http://placehold.it/1349x900"
                    className="fancy-img prop-slider-top-zoom"
                    data-fancybox-group="prop-slider-top">
                    Zoom
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src="http://placehold.it/720x480" alt="" />
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
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(http://placehold.it/150x100)",
                  }}>
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(http://placehold.it/150x100)",
                  }}>
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(http://placehold.it/150x100)",
                  }}>
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(http://placehold.it/150x100)",
                  }}>
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(http://placehold.it/150x100)",
                  }}>
                  <img src="/dist/img2/PropertuImage.jpg" alt="uvw" />
                </div>
              </div>
            </div>
          </div>
          <div className="prop-cont">
            <p className="prop-main-loc">
              <a href="catalog-grid.html">Madrid</a>,{" "}
              <a href="catalog-grid.html">Spain</a>
            </p>
            <h1 className="prop-main-ttl">Comfortable Apartments 15 Sqrt</h1>
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
                Square Feet
              </dt>
              <dd>
                <a href="catalog-grid.html">1500</a>
              </dd>
              <dt>
                <span className="prop-i-info-icon">
                  <img src="/dist/img2/ico-bed.png" alt="" />
                </span>
                Beds
              </dt>
              <dd>
                <a href="catalog-grid.html">4</a>
              </dd>
              <dt>
                <span className="prop-i-info-icon">
                  <img src="/dist/img2/ico-price.png" alt="" />
                </span>
                Price
              </dt>
              <dd>
                <a href="catalog-grid.html">$1600</a>
              </dd>
              <dt>
                <span className="prop-i-info-icon">
                  <img src="/dist/img2/ico-type.png" alt="" />
                </span>
                Type
              </dt>
              <dd>
                <a href="catalog-grid.html">Apartment</a>
              </dd>
              <dt>
                <span className="prop-i-info-icon">
                  <img src="/dist/img2/ico-garage.png" alt="" />
                </span>
                Garage SqFt
              </dt>
              <dd>
                <a href="catalog-grid.html">2 / 200</a>
              </dd>
              <dt>
                <span className="prop-i-info-icon">
                  <img src="/dist/img2/ico-bath.png" alt="" />
                </span>
                Baths
              </dt>
              <dd>
                <a href="catalog-grid.html">2</a>
              </dd>
              <dt>
                <span className="prop-i-info-icon">
                  <img src="/dist/img2/ico-user.png" alt="" />
                </span>
                Guests
              </dt>
              <dd>
                <a href="catalog-grid.html">3</a>
              </dd>
            </dl>
            <div className="prop-cont-bottom">
              <div className="prop-main-price-wrap">
                <p className="prop-main-price-label">Price</p>
                <p className="prop-main-price">
                  <span className="prop-main-price-val">$1800</span>{" "}
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
            <a href="agent.html">Mark Duncan</a>
          </h3>
          <a href="agent.html">
            <img src="http://placehold.it/80x80" alt="" />
          </a>
        </div>
        <a href="/" className="modalform-btn btn1 prop-callback">
          Get direction
        </a>
      </div>
      <div className="container cont-boxed prop-atts-wrap-boxed">
        <div className="prop-atts-wrap">
          <div className="prop-atts">
            <h3>Room Dimensions</h3>
            <dl>
              <dt>Interior Size</dt>
              <dd>2500 Sq Ft</dd>
              <dt>Bedrooms</dt>
              <dd>4</dd>
              <dt>Bathrooms</dt>
              <dd>3</dd>
              <dt>Garage</dt>
              <dd>3 car</dd>
              <dt>Laundry Room</dt>
              <dd>Washer / Dryer</dd>
            </dl>
          </div>
          <div className="prop-atts">
            <h3>Exterior Details</h3>
            <dl>
              <dt>Lot Size</dt>
              <dd>0.5 Acres</dd>
              <dt>Roof</dt>
              <dd>Partial Tile Roof</dd>
              <dt>Sewer</dt>
              <dd>Connected</dd>
              <dt>Construction</dt>
              <dd>Frame / Wood</dd>
              <dt>Cooling</dt>
              <dd>Electric Air</dd>
            </dl>
          </div>
          <div className="prop-atts">
            <h3>Room Proportions</h3>
            <dl>
              <dt>Living Room</dt>
              <dd>29×18</dd>
              <dt>Dining Room</dt>
              <dd>12×11</dd>
              <dt>Kitchen</dt>
              <dd>15×14</dd>
              <dt>Master Bedroom</dt>
              <dd>23×14</dd>
              <dt>Bedroom 2</dt>
              <dd>2×11</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="prop-info">
        <div className="stylization container prop-desc">
          <h2>
            About <b>Property</b>
          </h2>
          <p>
            Etiam vitae tortor id augue mattis convallis eget sed elit. Quisque
            tincidunt faucibus orci, in tristique dui. Sed ac vestibulum dui.
            Nam at ligula odio. Morbi sit amet vulputate lectus. Fusce non lacus
            nec nulla tristique rutrum. Suspendisse tincidunt non urna sit amet
            fringilla. Morbi sit amet sagittis risus, non porta eros. Sed varius
            id risus in iaculis. Phasellus non egestas enim, vel molestie justo.
            Maecenas varius neque ullamcorper interdum sagittis. Suspendisse
            turpis risus, lacinia at vestibulum at, tempor vel felis.
          </p>
        </div>
        <hr className="prop-hr" />
        <div className="container prop-features">
          <h2>
            Advanced <b>Features</b>
          </h2>
          <ul>
            <li>Air Conditioning</li>
            <li>Microwave</li>
            <li>Window Coverings</li>
            <li>Lawn</li>
            <li>Barbeque</li>
            <li>WiFi</li>
            <li>Dryer</li>
            <li>Gym</li>
            <li>Sauna</li>
            <li>Refrigerator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Property;
