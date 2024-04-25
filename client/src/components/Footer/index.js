import React from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
    return(
        <section class='footer'>
            <div class="footer-instructions">
                <p>App Desgined and Coded By Brit Sovic</p>
                <p>Click the icons below to visit my personal pages</p>
            </div>
            <div class="footer-section-links">
                <a href="https://github.com/bsovic23" target="_blank">< AiFillGithub class="icon" id="github-icon"/></a>
                <a href="https://www.linkedin.com/in/brit-sovic/" target="_blank">< AiFillLinkedin class="icon" id="linkedin-icon"/></a>
            </div>
        </section>
    )
};

export default Footer;