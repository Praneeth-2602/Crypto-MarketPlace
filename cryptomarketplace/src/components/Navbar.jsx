import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
           <h1>KRYPTON</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li className='login'><a href="/login">Login</a></li>
                <li className='signup'><a href="/signup">Signup</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;