import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Footer() {
    return (
        <div className="footer-container py-1">
            <footer className='footertext'>
                <div id='footerleft' className='col-md-8'>
                    © 2024 UnityTrade.com Ltd. |
                    <a href="/tos"> Terms of Use </a>
                    |
                    <a href="/privacy"> Privacy Policy </a>
                    |
                    <a href="/contact"> Contact Us </a>
                </div>
                <div id='footerright' className='text-end col-md-4'>
                    <a href="https://www.facebook.com" target='_blank'> 
                        <FontAwesomeIcon icon={faFacebook} id='icon' style={{ color: 'dodgerblue', fontWeight: 'bolder' }} />
                    </a>
                    <a href="https://www.twitter.com" target='_blank'> 
                        <FontAwesomeIcon icon={faTwitter} id='icon' style={{ color: '#1DA1F2', fontWeight: 'bolder' }} /> 
                    </a>
                    <a href="https://www.instagram.com" target='_blank'> 
                        <FontAwesomeIcon icon={faInstagram} id='icon' style={{ color: '#E1306C', fontWeight: 'bolder' }} /> 
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
