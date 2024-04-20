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
                <p> This is the About page. Here is where I am meant to show a page that I am able to route to use react router, according to the requirements. This page was made before the Deck yet I still spent almost 2 hours setting up the react app as the create-react-app command was failing, and I had to make an empty folder called npm in my C drive for some reason then it ran ¯\_(ツ)_/¯. Well anyway it works now so thats cool.  I'm fairly happy with the result of the Deck in the end, The tilting and tilt shadow are not perfect but it adds a little pizzazz to the site. Hope you like it enough. </p>
            </div>
        </div>
    );
}

export default About;