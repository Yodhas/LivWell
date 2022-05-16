import React from 'react'
import "../css/style1.css"
// import "../js/uploadImg.js"

function NewProperty() {
  return (
    <div className='container'>
        <form>
      <br/>
      <h2>Add New Property</h2>
      <div class="row my-3">
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="first">Property Name</label>
            <input type="text" class="form-control"  id="first" required/>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="first">Owner's Name</label>
            <input type="text" class="form-control"  id="first"required />
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="first">Owner's Contact</label>
            <input type="text" class="form-control"  id="first" required/>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="last">Address</label>
            <textarea class="form-control" aria-label="With textarea" required></textarea>
          </div>
        </div>
        
      </div>
      <div class="row my-3">
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="last">Rent per Month</label>
            <input type="text" class="form-control"  id="last"required />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="first">Deposit Amount</label>
            <input type="text" class="form-control"  id="first"required />
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="last">Property Features</label>
            <textarea class="form-control" placeholder="Furniture, Landmark, other Features. "aria-label="With textarea"required></textarea>
          </div>
        </div>
      <div class="form-group col-md-4">
        <label htmlFor="inputState">Property Type</label>
        <select id="inputState" class="form-control" required>
          <option selected>Choose...</option>
          <option>Flat/Apartment</option>
          <option>PG</option>
          <option>Room</option>
        </select>
      </div>

    </div>

      
      <div class="row my-4">
        <div class="col-md-4">
          <div class="form-group">
            <label htmlFor="inputState">Upload Images :</label>
            <div class="input-group">
              
              <input class="form-control" id="files" type="file" multiple placeholder="Upload Images"
                aria-label="Upload Images" aria-describedby="basic-addon2" required/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Upload</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
        <div style={{padding: "14px", margin: "auto"}}>
          <div id="sortableImgThumbnailPreview">
          </div>
        </div>
      </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default NewProperty;