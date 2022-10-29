import React from 'react';
import './Navbar.css';
import globe from '../images/globe-solid.svg';

export default function Navbar() {
    return (
        <nav className='nav--container'>
            <img className='nav--icon' src={globe}/>
            <h1 className='nav--title'>My travel journal</h1>
        </nav>
    );
}