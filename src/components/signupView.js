import "./signupView.css"
import React, { Component } from 'react';
import axios from "axios";
 
export default class signupView extends Component {
    
    constructor(props){
        super(props);
        
 
        //Needed to accsess the state 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPasswrod = this.onChangeConfirmPasswrod.bind(this);
        this.onSubmitComponent = this.onSubmitComponent.bind(this);
 
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            admin: false
        }
    }
    onChangeUsername(event){
        this.setState({
            username : event.target.value
        })
    }
    onChangeEmail(event){
        this.setState({
            email : event.target.value
        })
    }
    onChangePassword(event){
        this.setState({
            password : event.target.value
        })
    }
    onChangeConfirmPasswrod(event){
        this.setState({
            confirm_password : event.target.value
        })
    }
    onSubmitComponent(e){
        e.preventDefault();
 
        //Get values of input 
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,  
            confirm_password: this.state.confirm_password          
        }
        const matches = this.state.password === this.state.confirm_password
        if(matches === false) {
            alert("Passwords do not seem to match")
            
        }else {
            axios.post("http://localhost:4000/users/add", newUser)
            .then(res => console.log(res.data));
 
        this.props.history.push("/car")
            this.setState({
            username: "",
            email: "",
            password: "",
            confirm_password : "",
            })
        } 
    }
 
 
    render() {
        return (
            
            <div class="container login-container">
            
                <div class="d-flex justify-content-center w-75 p-3 login-form-1 bg-light">
                    
                    <form onSubmit={this.onSubmitComponent}>
                    <h3 align="center">Sign up now</h3>  
                    <div class="form-group">
                            <input type="text" 
                            class="form-control" 
                            placeholder="Username *"
                            value={this.state.username} 
                            onChange={this.onChangeUsername}
                            />
                        </div>
                        <div class="form-group">
                            <input type="text" 
                            class="form-control" 
                            placeholder="Email *" 
                            value={this.state.email} 
                            onChange={this.onChangeEmail}
                            /> 
                        </div>
                        <div class="form-group">
                            <input type="password" 
                            class="form-control" 
                            placeholder="Password *" 
                            value={this.state.password} 
                            onChange={this.onChangePassword} 
                            /> 
                        </div>
                        <div class="form-group">
                            <input type="password" 
                            class="form-control" 
                            placeholder="Confirm password *" 
                            value={this.state.confirm_password} 
                            onChange={this.onChangeConfirmPasswrod} 
                            />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Sign up" />
                        </div>
                        
                    </form>
                </div>
                </div>
                
            
        )
    }
}
