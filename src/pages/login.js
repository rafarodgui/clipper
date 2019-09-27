import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png'

export default class Login extends Component{
    render(){
        return(
            <div>
                <form className="login-container">
                    <div className="logo"><img src={logo} alt="logo"/><h1>Clipper</h1></div>
                    <input type="text" placeholder="User" />
                    <input type="password" placeholder="Password" />
                    <Link to={'/main'}><input type="button" value="Access" /></Link>
                </form>
            </div>
        );
    }
}