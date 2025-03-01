import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/img/logo.png'

function Navbar () {
    return (
        <div className="navbar">
            {/*Letterboxd Clone*/}
            <div className="navbar-logo">
                <Link to="/" className="navbar-link">
                <img src={logo} alt="Site Logo" className="logo-img"></img>
                </Link>
        </div>

        {/*Links de navegação*/}
        <div className="navbar-items">
            <Link to="singin" className="navbar-link">
            SING IN
            </Link>
            <Link to="/createAccount" className="navbar-link">
            CREATE ACCOUNT
            </Link>
            <Link to="/films" className="navbar-link">
            FILMS
            </Link>
        </div>
    </div>
    );
}

export default Navbar;