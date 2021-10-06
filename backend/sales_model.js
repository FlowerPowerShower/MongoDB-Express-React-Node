const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
 
 
 
const salesSchema = new Schema({
    id: {
        type: Number,
    },
    employee_id: {
        type: Schema.Types.ObjectId,
        ref: "employeeSchema"
    },
    car_id: {
        type: Schema.Types.ObjectId,
        ref: "carSchema"
    }
});
 
 
module.exports = mongoose.model("salesSchema", salesSchema)
