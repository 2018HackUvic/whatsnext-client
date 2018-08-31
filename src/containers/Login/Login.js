import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import './Login.css'
class Login extends Component {
    render() {
        return <div className="Login">
                <input type="text" className="form-control" placeholder="Username" />
               
                
                <br/>
                <input type="password" className="form-control" placeholder="Password"/>
                <br/>
            < div className = "center" >
                <div className="row">
                <button type="button" className="btn btn-primary">Login</button>
                </div>
                <br/>
                <div className="row">
                <button type="button" className="btn btn-primary">Sign Up</button>
                </div>
            </div>
          </div>;}
}

export default Login;