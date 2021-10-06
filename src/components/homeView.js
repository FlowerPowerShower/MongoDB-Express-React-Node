import React, { Component } from 'react';
import "./signupView.css"
import picture from "./cardealership.jpeg";

 
 
export default class homeView extends Component { 
 
    render() {
        return (
            <div class="card">
            <div class="card-body">
              <p class="card-text"> This project has its humble beginnings in Lund (Sweden), and has since grown from just a concept a week ago to reality today. 
                With the ambition of creating a truly sensational cardealership experience to improve the everyday life of people ranging all ages, "Lunicore Carshop" is on its
                own way to revolutionize society's view on online cardealerships! The result is simply astonshing, and what we consider to be 
                the apex of innovation in terms of application-design. What are you waiting for? Change your life, today!</p>
            </div>
            <img src={picture} alt="..."/>
          </div>
        )
    }
}
