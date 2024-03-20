import React from 'react';

function Navbar() {
    return (
        <nav>
           <h1>Crypto market place</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;