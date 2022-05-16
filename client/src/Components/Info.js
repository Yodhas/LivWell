import React from 'react';
import '../css/info.css';

function Info() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right">
                  <i class="fa fa-cart-plus f-left fa-lg"></i>
                  <span>486</span>
                </h2>
                <p class="m-b-0">
                  Completed Orders<span class="f-right">351</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right">
                  <i class="fa fa-rocket f-left"></i>
                  <span>486</span>
                </h2>
                <p class="m-b-0">
                  Completed Orders<span class="f-right">351</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right">
                  <i class="fa fa-refresh f-left"></i>
                  <span>486</span>
                </h2>
                <p class="m-b-0">
                  Completed Orders<span class="f-right">351</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right">
                  <i class="fa fa-credit-card f-left"></i>
                  <span>486</span>
                </h2>
                <p class="m-b-0">
                  Completed Orders<span class="f-right">351</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
