const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const carSchema = new Schema({
    id: {
        type: Number,
        required : true,
        unique : true,
    },
    brand: {
        type: String,
        required : true,
 
    },
    model: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
    }
})
 
module.exports = mongoose.model("carSchema", carSchema);