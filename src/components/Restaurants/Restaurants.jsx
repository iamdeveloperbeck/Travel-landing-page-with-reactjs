import React from 'react';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './restaurants.css';

const Restaurants = () => {
    return (
        <div className='restaurants'>
            <div className="container">
                <div className="global-head">
                    <h1 className='h1-header'>Hotels and Restaurants</h1>
                    <button className="global-cta">
                        View all
                        <EastOutlinedIcon />
                    </button>
                </div>
                <div className="global-wrapper">
                    <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }} className="rest-wrap">
                        <img src={images.Rest4} alt="restaurant" />
                        <div className="rest-info">
                            <h5>Monastero Santa Rosa Hotel & Spa</h5>
                            <div className='rest-content'>
                                <p>
                                    <FmdGoodOutlinedIcon />
                                    Salerno, Italy
                                </p>
                                <div className="rest-stars">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.6 }} className="rest-wrap">
                        <img src={images.Rest3} alt="restaurant" />
                        <div className="rest-info">
                            <h5>Grand Hotel Tremezzo</h5>
                            <div className='rest-content'>
                                <p>
                                    <FmdGoodOutlinedIcon />
                                    Lake Como, Italy
                                </p>
                                <div className="rest-stars">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }} className="rest-wrap">
                        <img src={images.Rest2} alt="restaurant" />
                        <div className="rest-info">
                            <h5>The Oberoi Udaivilas, Udaipur</h5>
                            <div className='rest-content'>
                                <p>
                                    <FmdGoodOutlinedIcon />
                                    Udaipur, India
                                </p>
                                <div className="rest-stars">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }} className="rest-wrap">
                        <img src={images.Rest1} alt="restaurant" />
                        <div className="rest-info">
                            <h5>AKA Beverly Hills</h5>
                            <div className='rest-content'>
                                <p>
                                    <FmdGoodOutlinedIcon />
                                    Los Angeles, United States
                                </p>
                                <div className="rest-stars">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;