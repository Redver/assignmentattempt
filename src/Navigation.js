import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";
import './fonts/fonts.css';

function Navigation()
{
    return(
        <nav className="Navbar">
            <ul>
                <li>
                    <div className="logo">
                        <img src="/pika.png" alt="Pikachu"/>
                    </div>
                </li>
                <li><Link to="/Deck">Deck</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;