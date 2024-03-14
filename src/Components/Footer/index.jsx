import './style.css'
import React from 'react'

function Footer() {
    return (
        <footer className='footertext container-fluid d-flex'>
            <div id='footerleft' className='col-6'>
            © 2024 UnityTrade.com Ltd. |
            <a href="#"> Terms of Use </a>
            |
            <a href="#"> Privacy Policy </a>
            |
            <a href="#"> Contact Us </a> 
            </div>
            <div id='footerright' className='text-end col-6'>
                <a href="https://www.facebook.com" target='_blank'> Facebook </a>
                |
                <a href="https://www.twitter.com" target='_blank'> Twitter </a>
                |
                <a href="https://www.instagram.com" target='_blank'> Instagram </a>
            </div>
        </footer>
    )
}

export default Footer
