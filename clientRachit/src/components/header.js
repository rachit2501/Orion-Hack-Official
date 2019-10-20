import React, { Component } from 'react'
import ReactDom from 'react-dom';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header className="main_menu home_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/"> <img src="img/logo.png" alt="logo" /> </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                  </button>
                  <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/predictor">Disease Predictor</Link>
                      </li>
                
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                    </ul>
                  </div>
                  <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
                </nav>
              </div>
            </div>
          </div>
        </header>
        )
    }
}

export default Header;