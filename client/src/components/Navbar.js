import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/img/logo.png';
import CreateAccountModal from "./CreateAccountModal";
import SignInModal from "./SignInModal";

function Navbar() {
    const [CreatemodalOpen, setCreateModalOpen] = useState(false);
    const [SignInmodalOpen, setSignInModalOpen] = useState(false);

    return (
        <div className="navbar">
            {/*Letterboxd Clone*/}
            <div className="navbar-logo">
                <Link to="/" className="navbar-link">
                    <img src={logo} alt="Site Logo" className="logo-img" />
                </Link>
            </div>

            {/*Links de navegação*/}
            <div className="navbar-items">
                <Link className="navbar-link" onClick={() => setSignInModalOpen(true)}>
                    SING IN
                </Link>
                <Link className="navbar-link" onClick={() => setCreateModalOpen(true)}>
                    CREATE ACCOUNT
                </Link>
                <Link to="/films" className="navbar-link">
                    FILMS
                </Link>
            </div>

            {/* Modal */}
            <CreateAccountModal isOpen={CreatemodalOpen} onClose={() => setCreateModalOpen(false)} />
            <SignInModal isOpen={SignInmodalOpen} onClose={() => setSignInModalOpen(false)} />
        </div>
    );
}

export default Navbar;
