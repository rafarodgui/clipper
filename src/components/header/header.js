import React, { Component } from 'react'
import logo from '../../imgs/logo.png'

export default class Header extends Component{
    
    render(){
        return(
            <div className="main-header">
                <img src={logo} alt="logo" className="logo-header"/><h1>Clipper</h1>
            </div>
        );
    }
} 