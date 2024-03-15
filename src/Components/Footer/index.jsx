import './style.css'
import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className='footertext container d-flex'>
            <div id='footerleft' className='col-8'>
            © 2024 UnityTrade.com Ltd. |
            <a href="/tos"> Terms of Use </a>
            |
            <a href="/privacy"> Privacy Policy </a>
            |
            <Link to="/contact"> Contact Us </Link>
        </div>
            <div id='footerright' className='text-end col-4'>
                <a href="https://www.facebook.com" target='_blank'> <FontAwesomeIcon icon={faFacebook} id='icon' style={{color: '#1877F2'}}/></a>
                <a href="https://www.twitter.com" target='_blank'> <FontAwesomeIcon icon={faTwitter} id='icon' style={{color: '#1DA1F2'}}/> </a>
                <a href="https://www.instagram.com" target='_blank'> <FontAwesomeIcon icon={faInstagram} id='icon'  style={{color: '#E1306C'}}/> </a>
            </div>
        </footer>
    )
}

export default Footer
