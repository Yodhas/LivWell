import React from "react";
import "../css/style1.css";
// import "../js/uploadImg";
import Menu from "./Menu";

function MyProperty() {
  return (

    <div className="content-wrapper">
      <Menu/>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              
              {/* <h1 className="m-0 text-dark">Dashboard</h1> */}
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">My Property</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        {" "}
        <div className="container ">
          <form>
            <br />
            <h2>Add New Property</h2>
            <div className="row my-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Property Name</label>
                  <input
                    type="text"
                    name="propname"
                    value=""
                    className="form-control"
                    placeholder ="Enter Your Property Name"
                    id="propname"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Owner's Name</label>
                  <input
                    type="text"
                    name="ownname"
                    value=""
                    className="form-control"
                    placeholder ="Enter Your Name"
                    id="ownname"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Owner's Contact</label>
                  <input
                    type="text"
                    name="owncontact"
                    value=""
                    className="form-control"
                    placeholder ="Enter your Contact Number"
                    id="owncontact"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="last">Address</label>
                  <textarea
                    name="address"
                    value=""
                    placeholder="Enter Address"
                    className="form-control"
                    aria-label="With textarea"
                    required
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="last">Rent per Month</label>
                  <input
                    type="text"
                    name="rentpermonth"
                    value=""
                    className="form-control"
                    placeholder ="Enter rent per Month"
                    id="rentpermonth"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Deposit Amount</label>
                  <input
                    type="text"
                    name="depositamount"
                    value=""
                    className="form-control"
                    placeholder ="Enter deposit amount"
                    id="depositamount"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="last">Property Features</label>
                  <textarea
                    name="pfeatures"
                    value=""
                    className="form-control"
                    placeholder="Furniture, Landmark, other Features. "
                    aria-label="With textarea"
                    required
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label htmlfor="inputState">Property Type</label>
                <select id="inputState" className="form-control" name="ptype"
                    value="" required>
                  <option selected>Choose...</option>
                  <option>Flat/Apartment</option>
                  <option>PG</option>
                  <option>Room</option>
                </select>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="inputState">Upload Images :</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      id="files"
                      name="files"
                      value=""
                      type="file"
                      multiple
                      placeholder="Upload Images"
                      aria-label="Upload Images"
                      aria-describedby="basic-addon2"
                      required
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ padding: "14px", margin: "auto" }}>
                  <div id="sortableImgThumbnailPreview"></div>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <h5 className="mb-3">Confirm your Credentials to Proceed</h5>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value=""
                    className="form-control"
                    placeholder ="Enter email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    value=""
                    className="form-control"
                    placeholder ="Enter password"
                    id="password"
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-4">
              Submit
            </button>
          </form>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default MyProperty;
