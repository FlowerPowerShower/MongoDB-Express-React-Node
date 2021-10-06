import React, { Component } from 'react';
import axios from "axios";
 
 
export default class carView extends Component {
    
    constructor(props){
        super(props);
        this.state = {cars: []};
 
        //Needed to accsess the state 
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmitComponent = this.onSubmitComponent.bind(this);
        this.onClick = this.deleteCar.bind(this);
 
        this.state = {
            cars : [],
            id : "",
            brand: "",
            model: "",
            price: "",
            _id: "", 
        }
    }
    refreshPage() {
        window.location.reload(false);
      }
    componentDidMount(){
        axios.get("http://localhost:4000/cars/")
            .then(response => {
                this.setState({cars: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
     
    onChangeId(e){
        this.setState({
            id: e.target.value
        });
    }
 
    onChangeBrand(e){
        this.setState({
            brand: e.target.value
        });
    }
    
    onChangeModel(e) {
        this.setState({
            model: e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }
 
    deleteCar(id, e){
        axios.delete(`http://localhost:4000/cars/${id}`)
            .then(res =>{
                
                const cars = this.state.cars.filter(item=>item.id !== id);
                this.setState({cars})
            })
        this.refreshPage()
    }
 
    
    onSubmitComponent(e){
        e.preventDefault();
 
        //Get values of input 
        const newCar = {
            id: this.state.id,
            brand: this.state.brand,
            model: this.state.model,
            price: this.state.price,
            
        }
        axios.post("http://localhost:4000/cars/add", newCar)
            .then(res => console.log(res.data));
 
        this.refreshPage()
    }
    
 
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Car</h3>
                <div>
                
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th> 
                        </tr>
                    </thead>
                    <tbody>  
              
              {this.state.cars.sort((a,b) => {
                        return a.id - b.id
                    }).map((car) => (  
                
                <tr key={car._id}>  
                  <td>{car.id}</td>  
                  <td>{car.brand}</td>  
                  <td>{car.model}</td>  
                  <td>{car.price}</td> 
                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteCar(car._id, e)}>Delete</button>  
                  </td>  
                </tr>  
                
              ))}  
            </tbody>  
                </table>
            </div>
                <form onSubmit={this.onSubmitComponent}>
                <div className="form-group">
                        <label>ID: </label>
                        <input  type="text" className="form-control" 
                                value={this.state.id} 
                                onChange={this.onChangeId}
                        /> 
                    </div>
                    <div className="form-group">
                        <label>Brand: </label>
                        <input  type="text" className="form-control" 
                                value={this.state.brand} 
                                onChange={this.onChangeBrand}
                        /> 
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input  type="text" className="form-control"
                                value = {this.state.model}
                                onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price : </label>
                        <input  type="text" className="form-control"
                                value = {this.state.price}
                                onChange={this.onChangePrice}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create car" className="btn btn-primary"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}
