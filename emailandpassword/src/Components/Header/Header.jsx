import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navsection'>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Resister">Resister</Link>
            <Link to="/resister_bs">Resister_bootstrap</Link>
            <Link to="/res-bs2">Resister_bootstrap2</Link>
        </div>
    );
};

export default Header;
