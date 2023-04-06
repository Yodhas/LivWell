import React from 'react'
import "./user.css"
import profile from "../../images/image.jpg"

function user() {
  return (
    <div>
        <div class="container-xl px-4 mt-4">
       
       <div class="row">
           <div class="col-xl-4  ">
               <div class="card mb-4 mb-xl-0">
                   <div class="card-header">Profile Picture</div>
                   <div class="card-body text-center">
                       <img class="img-account-profile rounded-circle mb-2" src={profile} alt=""/>
                       <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                       <button class="btn btn-primary" type="button">Upload new image</button>
                   </div>
               </div>
           </div>
           <div class="col-xl-8">
               <div class="card mb-4">
                   <div class="card-header">Account Details</div>
                   <div class="card-body">
                       <form>
                           <div class="mb-3">
                               <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                               <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" defaultValue={"varun819"}/>
                           </div>
                           <div class="row gx-3 mb-3">
                               <div class="col-md-6">
                                   <label class="small mb-1" for="inputFirstName">First name</label>
                                   <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue={"Varun"}/>
                               </div>
                               <div class="col-md-6">
                                   <label class="small mb-1" for="inputLastName">Last name</label>
                                   <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue={"Katiyar"}/>
                               </div>
                           </div>
                           
                           <div class="mb-3">
                               <label class="small mb-1" for="inputEmailAddress">Email address</label>
                               <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue={"varunkatiyar819@gmail.com"}/>
                           </div>
                           <div class="row gx-3 mb-3">
                               <div class="col-md-6">
                                   <label class="small mb-1" for="inputPhone">Phone number</label>
                                   <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue={"8080439478"}/>
                               </div>
                               <div class="col-md-6">
                                   <label class="small mb-1" for="inputBirthday">Password</label>
                                   <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your Password" defaultValue={""}/>
                               </div>
                           </div>
                           <button class="btn btn-primary" type="button">Save changes</button>
                       </form>
                   </div>
               </div>
           </div>
       </div>
   </div>
    </div>
  )
}

export default user