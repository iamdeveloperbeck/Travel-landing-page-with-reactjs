import React from 'react';

import images from '../../constants/images';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <img src={images.LogoBlack} alt="footer logo" />
                    <p className='footer-desc'>We always make our customers happy by providing as many choises as possible</p>
                    <div className="footer-socials">
                        <a href="#"><FacebookOutlinedIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                    </div>
                </div>
                <div className="footer-nav">
                    <nav className='footer-nav_links'>
                        <h4 className='footer-link_name'>About</h4>
                        <a href="#" className='footer-link'>About Us</a>
                        <a href="#" className='footer-link'>Features</a>
                        <a href="#" className='footer-link'>News</a>
                        <a href="#" className='footer-link'>Menu</a>
                    </nav>
                    <nav className='footer-nav_links'>
                        <h4 className='footer-link_name'>Company</h4>
                        <a href="#" className='footer-link'>Why 2rism</a>
                        <a href="#" className='footer-link'>Partner with us</a>
                        <a href="#" className='footer-link'>FAQ</a>
                        <a href="#" className='footer-link'>Blog</a>
                    </nav>
                    <nav className='footer-nav_links'>
                        <h4 className='footer-link_name'>Support</h4>
                        <a href="#" className='footer-link'>Account</a>
                        <a href="#" className='footer-link'>Support Center</a>
                        <a href="#" className='footer-link'>Feedback</a>
                        <a href="#" className='footer-link'>Contact Us</a>
                    </nav>
                </div>
                <div className="footer-form">
                    <h3 className='footer-link_name form-desc'>Subscribe on our destination review newsletters</h3>
                    <div className="header-search_row footer-form_row">
                        <form action="/" className='row-header'>
                            <LocalPostOfficeOutlinedIcon />
                            <div>
                                <label htmlFor="">Your Email</label>
                                <input type="text" placeholder='johndoe@gmail.com' />
                            </div>
                        </form>
                        <button className='header-cta form-btn _2'>
                            <EastOutlinedIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;