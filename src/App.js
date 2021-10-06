import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import carView from "./components/carView";
import employeeView from "./components/employeeView";
import homeView from "./components/homeView";
import signupView from "./components/signupView";
 
 
 
class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home" className="navbar-brand">Home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/employee" className="nav-link">Employees</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/car" className="nav-link">Car</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup" className="nav-link">Signup</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <div>
          </div>
          <Route path="/home" exact component={homeView} />
          <Route path="/employee" exact component={employeeView} />
          <Route path="/car" exact component={carView} />
          <Route path="/signup" exact component={signupView} />
        </div>
      </Router>
    );
  }
}
export default App;
