import React, { Component } from 'react';
import axios from "axios";

 
export default class employeeView extends Component {
    
    constructor(props){
        super(props);
        this.state = {employees: []};
 
        //Needed to accsess the state 
        
 
        this.state = {
            employees : [],
            id : "",
            name: "",
        }
    }
    refreshPage() {
        window.location.reload(false);
      }
    componentDidMount(){
        axios.get("http://localhost:4000/employees/")
            .then(response => {
                this.setState({employees: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Employee</h3>
                <div>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody> 
                    {this.state.employees.map((employee) => (  
                <tr key={employee.id}>  
                  <td>{employee.id}</td>  
                  <td>{employee.name}</td>  
                </tr>     
              ))} 
               </tbody>
                </table>
            </div>
                
            </div>
        )
    }
}
