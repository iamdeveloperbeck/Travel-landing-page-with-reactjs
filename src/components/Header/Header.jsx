import React from 'react';
import { motion } from 'framer-motion';

import './header.css';
import images from '../../constants/images';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TodayIcon from '@mui/icons-material/Today';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
        <img src={images.Hero} alt="hero" className='header-hero'/>
        <div className="container">
            <div className="hero-wrapper">
                <div className="header-main">
                    <motion.h1 whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }} className='header-heading'>Discover the most engaging places</motion.h1>
                    <motion.button whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }} className='header-cta'>
                        <img src={images.Globe} alt="globe" />
                        Discover on 3D Globe
                    </motion.button>
                </div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }} className="header-search_row">
                    <form action="/" className='row-header'>
                        <FmdGoodOutlinedIcon />
                        <div>
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder='Nearby destinations' />
                        </div>
                    </form>
                    <form action="/" className='row-header'>
                        <DirectionsBikeIcon />
                        <div>
                            <label htmlFor="">Activity</label>
                            <input type="text" placeholder='All Activities' />
                        </div>
                    </form>
                    <form action="/" className='row-header'>
                        <TodayIcon />
                        <div>
                            <label htmlFor="">When</label>
                            <input type="text" placeholder='Choose a Date' />
                        </div>
                    </form>
                    <form action="/" className='row-header'>
                        <PeopleAltIcon />
                        <div>
                            <label htmlFor="">Guests</label>
                            <input type="number" placeholder='1 guest' />
                        </div>
                    </form>
                    <button className='header-cta form-btn'>
                        <img src={images.VectorS} alt="" />
                    </button>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default Header;