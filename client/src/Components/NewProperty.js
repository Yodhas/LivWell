import React from "react";
import "../css/style1.css";
// import "../js/uploadImg";
import Menu from "./Menu";
import { useState } from "react";
import axios from "axios";



function MyProperty() {

  
  const [pname, setpname] = useState("");
  const [college, setcollege] = useState("");
  const [oname, setoname] = useState("");
  const [cont, setcont] = useState("");
  const [add, setadd] = useState("");
  const [rpm, setrpm] = useState("");
  const [depAmt, setdepAmt] = useState("");
  const [pfeat, setpfeat] = useState("");
  const [pType, setpType] = useState("");
  const [emaill, setemaill] = useState("");
  const [pass, setpass] = useState("");
  const [files, setFiles] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      // username: user.username,
      propname : pname,
      college:college,
      ownname : oname,
      owncontact : cont,
      address : add,
      rentpermonth : rpm,
      depositamount : depAmt,
      pfeatures : pfeat,
      ptype : pType,
      email : emaill,
      password : pass,
    };
try {
      const res = await axios.post("/new", newPost);
      window.location.replace("/single/" + res.data._id);
    } catch (err) {}
  };


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
                <li className="breadcrumb-item active">Add New Property</li>
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
          <form onSubmit={handleSubmit}>
            <br />
            <h2>Add New Property</h2>
            <div className="row my-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Property Name</label>
                  <input
                    type="text"
                    name="propname"
                    value={pname}
                    onChange = {(event)=>setpname(event.target.value)}
                    className="form-control"
                    placeholder ="Enter Your Property Name"
                    id="propname"
                    required
                    


                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">College Name</label>
                  <input
                    type="text"
                    name="college"
                    value={college}
                    onChange = {(event)=>setcollege(event.target.value)}
                    className="form-control"
                    placeholder ="Enter Your Property Name"
                    id="college"
                    required
                    


                  />
                </div>
              </div>

            </div>
            <div className="row my-3">
            <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Owner's Name</label>
                  <input
                    type="text"
                    name="ownname"
                    value={oname}
                    onChange = {(event)=>setoname(event.target.value)}
                    className="form-control"
                    placeholder ="Enter Your Name"
                    id="ownname"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="first">Owner's Contact</label>
                  <input
                    type="text"
                    name="owncontact"
                    value={cont}
                    onChange = {(event)=>setcont(event.target.value)}
                    className="form-control"
                    placeholder ="Enter your Contact Number"
                    id="owncontact"
                    required
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
                    value={rpm}
                    onChange = {(event)=>setrpm(event.target.value)}
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
                    value={depAmt}
                    onChange = {(event)=>setdepAmt(event.target.value)}
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
                    value={pfeat}
                    onChange = {(event)=>setpfeat(event.target.value)}
                    className="form-control"
                    placeholder="Furniture, Landmark, other Features. "
                    aria-label="With textarea"
                    required
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group col-md-4" >
                <label htmlfor="inputState">Property Type</label>
                <select id="inputState" style={{padding : "0px 1.25rem"}} className="form-control" name="ptype"
                     value={pType}
                     onChange = {(event)=>setpType(event.target.value)} required>
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
                  <label htmlfor="last">Address</label>
                  <textarea
                    name="address"
                    value={add}
                    onChange = {(event)=>setadd(event.target.value)}
                    placeholder="Enter Address"
                    className="form-control"
                    aria-label="With textarea"
                    required
                    
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlfor="inputState">Upload Images :</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      id="files"
                      name="files"
                      value={files}
                      onChange = {(event)=>setFiles(event.target.value)}
                      type="file"
                      multiple
                      placeholder="Upload Images"
                      aria-label="Upload Images"
                      aria-describedby="basic-addon2"
                      
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
                    value={emaill}
                    onChange = {(event)=>setemaill(event.target.value)}
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
                    value={pass}
                    onChange = {(event)=>setpass(event.target.value)}
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
