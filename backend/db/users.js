const  mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile_no:String,
    address:String,
    message:String,
    filedata:String,
    image:String,
});

module.exports = mongoose.model('users',userSchema);