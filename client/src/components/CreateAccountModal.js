import React from "react";
import './CreateAccountModal.css';

function CreateAccountModal ( {isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>JOIN LETTERBOXD</h2>
                <h3>Email Address</h3>
                <input type="text" />
                <h3>Username</h3>
                <input type="text" />
                <h3>Password</h3>
                <input type="text" />
                <button className="create-btn">Sign Up</button>
            </div>
        </div>
    );
}

export default CreateAccountModal;