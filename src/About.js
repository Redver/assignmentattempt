// About.js
import React from 'react';
import Navigation from './Navigation';
import './About.css';
import './fonts/fonts.css';

function About() {
    return (
        <div>
            <div className="about-title">
                <p>What is this?</p>
            </div>
            <div className="about-content">
                <p> This is the About page. Here is where I am meant to show a page that I am able to route to use react router, according to the requirements. This page was made before the Deck as I wanted to procrastinate that as it seemed like a harder task than this one, yet I still spent almost 2 hours setting up the react app as the create-react-app command was failing, and I had to make an empty folder called npm in my C drive for some reason than it ran ¯\_(ツ)_/¯. Well anyway it works now so thats cool. </p>
            </div>
        </div>
    );
}

export default About;