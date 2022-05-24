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
                <h6 class="m-b-20">Website Visitors</h6>
                <h2 class="text-right">
                  <i class="fa fa-wifi f-left fa-lg"></i>
                  <span>100+</span>
                </h2>
              
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Listed Properties</h6>
                <h2 class="text-right">
                  <i class="fa fa-home f-left"></i>
                  <span>15+</span>
                </h2>
               
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Verified Owners</h6>
                <h2 class="text-right">
                  <i class="fa fa-user-plus f-left"></i>
                  <span>10+</span>
                </h2>
               
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card1 bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">User Accounts</h6>
                <h2 class="text-right">
                  <i class="fa fa-lock f-left"></i>
                  <span>20+</span>
                </h2>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
