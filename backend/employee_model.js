const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
 
const employeeSchema = new Schema({
    id: {
        type: Number, 
        unique: true,
 
    },
    name: {
        type: String,
        required : true
        
    },
});
 
 
module.exports = mongoose.model("employeeSchema", employeeSchema)
