import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation()
{
    return
    (
        <nav className="Navbar">
            <ul>
                <li><Link to="/Deck"></Link></li>
                <li><Link to="/About"></Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;