import React from 'react';

function Header() {
    return (
        <header>
            <ul id="top-bar" className="top-bar">
                <li className="logo align-center">
                    <img src="assets/infinitum logo.png" alt="infinitum logo" />
                </li>
                <li className="infinitum">
                    <h2>Infinitum</h2>
                </li>
                <li className="login-icon align-center">
                    <img src="assets/sign in.png" alt="arrow sign in icon" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
