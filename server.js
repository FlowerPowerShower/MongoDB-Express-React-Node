const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
const PORT = 4000;

//Routes
const carRoutes = express.Router();
const empRoutes = express.Router();
const salesRoutes = express.Router();
const userRoutes = express.Router();
app.use("/cars", carRoutes)
app.use("/employees", empRoutes)
app.use("/sales", salesRoutes);
app.use("/users", userRoutes);

 
//Schemas
let carSchema = require("./backend/car_model");
let employeeSchema = require("./backend/employee_model");
let salesSchema = require("./backend/sales_model")
let userSchema = require("./backend/user_model");
 

//DB connection  
mongoose.connect("mongodb://localhost:27017/[carshop]", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const connection = mongoose.connection;
 
 
//-------------------Car------------------------
carRoutes.route("/").get(function(req, res){
    carSchema.find(function(err, cars){
        if(err){
            console.log(err);
        }
        else {
            res.json(cars);
        }
    });
});
 
carRoutes.route("/add").post(function(req, res){
    let car = new carSchema(req.body);
    car.save()
        .then(cars => {
            res.status(200).json({"car" : "car added succses"});
        })
        .catch(err => {
            res.status(400).send("Adding new todo failed");
        });
});
carRoutes.route("/:id").delete((req, res)=>{
    carSchema.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json("Error: " + err))
 
    carSchema.findByIdAndDelete(req.params.id)
        .catch(err => res.status(400).json("Error: " + err))
})
 
 
//-------------------Emoloyee------------------------
empRoutes.route("/").get(function(req, res){
    employeeSchema.find(function(err, emps){
        if(err){
            console.log(err);
        }
        else {
            res.json(emps);
        }
    });
});
empRoutes.route("/add").post(function(req, res){
    let emp = new employeeSchema(req.body);
    emp.save()
        .then(emps => {
            res.status(200).json({"Emp" : "Emp added succses"});
        })
        .catch(err => {
            res.status(400).send("Adding new emp failed");
        });
});
 
 
//-------------------Sales------------------------
salesRoutes.route("/").get(function(req, res){
    salesSchema.find(function(err, sales){
        if(err){
            console.log(err);
        }
        else {
            res.json(sales);
        }
    });
});
 
//-------------------Users------------------------
userRoutes.route("/add").post((req, res) =>{
    let user = new userSchema(req.body)
    user.save()
        .then(users => {
            res.status(200).json({"Emp" : "Emp added succses:" + users});
        })
        .catch(err => {
            res.status(400).send("Adding new emp failed" + err);
        });
});
 
 
connection.once("open", function(){
    console.log("MongoDB database connection established");
})
 
app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})
