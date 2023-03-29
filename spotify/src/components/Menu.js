import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import './Context';
import { Context } from './Context';
import  { useContext, useState } from 'react';
import { TokenContext } from './Context';
import { loginUri } from '../spotifyKeys';

function Menu () {
    
  const[token, setToken] = useContext(TokenContext);

  function logout(){

    setToken('');
    
  }
      return (
        <div className="navigationContainer">
            <nav>
                <ul>
                    <li><Link to="/"><img className="logo" src={require(`../img/logo.webp`)} /></Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/lists">Lists</Link></li>
                </ul>
            </nav>
            <div>
              
              {token ? (
                <button onClick={ logout } >Logout</button>
              ):(
                <a href={ loginUri }>Login</a>
              )}
            </div>
        </div>
        
      );
      
    }

  export default Menu;
  