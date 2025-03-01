import React from "react";
import './SignInModal.css';

function SignInModal ( {isOpen, onClose} ) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Username</h2>
                <input type="text" />
                <h2>Password</h2>
                <input type="text" />
                <button className="create-btn">Sign in</button>
            </div>
        </div>
    );
}

export default SignInModal;