const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 6
    },
    email : {
        type : String,
        required : true,
        min : 8,
    },
    password : {
        type : String,
        require : true,
        min : 8
    }
})
 
module.exports = mongoose.model("User", userSchema);


