import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './components/Navigation/Navigation';
import Logo from './components/Navigation/logo192.png';
import Facebook from './components/Social-Media-SVG-components /Facebook';
import Instagram from './components/Social-Media-SVG-components /Instagram';
import Phone from './components/Social-Media-SVG-components /Phone';
import Portfolio from './pages/Portfolio';
import MainPage from './pages/main';
import Footer from './components/Footer/Footer';
import ServicesPrices from './pages/ServicesPrices';
import './App.css';


function onClickMenu (){
  document.getElementById("menu").classList.toggle("change")
  document.getElementById("nav").classList.toggle("change")
}
function onClickContact (){
  console.log('Hello')
}
function App() {
  return (
    <div>
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
            <li  className="list-item"><AnchorLink href='#WhoWe'><Link to="/main">Хто ми</Link></AnchorLink></li>
            <li  className="list-item"><Link to="/Portfolio"><a href="WhoWe">Портфоліо</a></Link></li>
            <li className="list-item"><Link to="/ServicesPrices">Послуги та ціни</Link></li>
            <li className="list-item"><AnchorLink href='#Contacts'><Link to="/main#Contacts">Контакти</Link></AnchorLink></li>
            
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
        <Route path="/main">
             <MainPage />
        </Route>
        
        <Route path="/Portfolio">
             <Portfolio/>
        </Route>
          <ServicesPrices/>
          </Switch>

   
    </Router>
    <Footer/>
   
    </div>
  );
}


export default App;
