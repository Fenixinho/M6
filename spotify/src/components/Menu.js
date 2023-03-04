import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu(){
    return (
        <div className="navigationContainer">
        <nav>
            <ul>
                <li><Link to="/"><img className="logo" src={require(`../img/logo-1.webp`)} /></Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/lists">Lists</Link></li>
            </ul>
        </nav>
        </div>

    );
}

export default Menu;