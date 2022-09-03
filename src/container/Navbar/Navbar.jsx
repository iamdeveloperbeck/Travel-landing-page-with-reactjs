import React from 'react';

import './navbar.css';
import images from '../../constants/images';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="nav-wrapper">
                <a href="#" className='logo'>
                    <img src={images.Logo} alt="logo" />
                </a>
                <nav role="navigation" className='nav-menu'>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>Hotels</a>
                    <a href="#" className='nav-link'>Restaurants</a>
                    <a href="#" className='nav-link'>Tours</a>
                    <a href="#" className='nav-link'>Destinations</a>
                    <a href="#" className='nav-link'>Activities</a>
                    <a href="#" className='nav-link'>Contact</a>
                </nav>
                <div className='nav-user_menu'>
                    <a href="#" className='nav-user_block'>
                        <div className="user-name">
                            <p>Holla,</p>
                            <h3>Ales Nesetril</h3>
                        </div>
                        <div className="user-photo">
                            <img src={images.User} alt="user" />
                            <div className="status"></div>
                        </div>
                    </a>
                    <div className="menu-icon">
                        <MenuRoundedIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;