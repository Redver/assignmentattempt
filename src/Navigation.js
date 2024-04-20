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
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/pikachu.png`}
                            alt="Pikachu"
                        />
                    </div>
                </li>
                <li><Link to="/Deck"><span className="text">Deck</span></Link></li>
                <li><Link to="/About"><span className="text">About</span></Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;