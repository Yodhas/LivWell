const mongoose = require("mongoose");

const propSchema = new mongoose.Schema({

    propname :{
        type:String,
        required:true
    },
    
    ownname:{
        type:String,
        required:true
    },
    owncontact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    rentpermonth:{
        type:Number,
        required:true
    },
    depositamount:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
        },
    password:{
        type:String,
        required:true
    },
   ptype : {
       type : String,
       required : true
   },
   pfeatures : {
       type : String,
       required : true
   }
   
     
},
{timestamps : true}
)

const propDetails = new mongoose.model("propDetails",propSchema);
module.exports = propDetails;
