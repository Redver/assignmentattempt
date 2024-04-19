// About.js
import React from 'react';
import Navigation from './Navigation';
import './About.css'; // Import the CSS file

function About() {
    return (
        <div>
            <Navigation />
            <div className="about-content">
                <p>This is the About page. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}

export default About;