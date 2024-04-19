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
                <p> This is the About page. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ultricies fermentum justo, eget elementum urna consectetur et.
                    Proin ac risus vel magna fermentum consequat sit amet eget tortor.
                    Phasellus ut semper neque. Ut rhoncus lobortis nisi non suscipit.</p>
            </div>
        </div>
    );
}

export default About;