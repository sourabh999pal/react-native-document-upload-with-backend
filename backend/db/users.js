const  mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    mobile_no:String,
    message:String,
    filedata:String,
    image:String,
    
});

module.exports = mongoose.model('users',userSchema);