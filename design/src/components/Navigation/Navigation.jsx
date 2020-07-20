import React, { Component } from 'react';
import './Navigation.css';
import Logo from './logo192.png';
import Facebook from '../Social-Media-SVG-components /Facebook';
import Instagram from '../Social-Media-SVG-components /Instagram';
import Phone from '../Social-Media-SVG-components /Phone';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";    
import Form from '../Form/Form';  

function onClickMenu (){
    document.getElementById("menu").classList.toggle("change")
    document.getElementById("nav").classList.toggle("change")
}
function Nav () {
    
 return (
     <Router>
    <header>
    <div className="logo">
        <img src={Logo} alt="logo" className="logo_img"/>
    </div>
    <div id="menu-bars">
        <div id="menu" onClick={onClickMenu} >
            <div className="menu-bars">
                <div className="bar" id="bar1"></div>
                <div className="bar" id="bar2"></div>
                <div className="bar" id="bar3"></div>
            </div>
        </div>
        <ul className="nav" id="nav">
            <li className="list-item"><Link to="/">Хто ми</Link></li>
            <li className="list-item"><Link to="/Form">Портфоліо</Link></li>
            <li className="list-item"><a href="#">Послуги та ціни</a></li>
            <li className="list-item"><a href="#Contacts">Контакти</a></li>
            <ul className="social-list__top">
                <li className="social-list-item "><a href="#">
                <Facebook/>
                       </a></li>
                <li className="social-list-item "><a href="#">
                <Instagram/>
                       </a></li>
                <li className="social-list-item "><a href="#">
                    <Phone/>
                    </a></li>
            </ul>
        </ul>
    </div>
</header>
<Switch>
          <Route path="/Form">
            <Form />
          </Route>
        </Switch>
</Router>
 )
}

export default Nav;