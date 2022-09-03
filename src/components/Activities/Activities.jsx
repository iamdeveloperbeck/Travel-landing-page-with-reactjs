import React from 'react';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './activities.css';

const Activities = () => {
  return (
    <div className='activities'>
        <div className="container">
            <div className="global-head">
                <h1 className='h1-header'>Activities</h1>
                <button className="global-cta">
                    View all
                    <EastOutlinedIcon />
                </button>
            </div>
            <div className="global-wrapper activities-wrapper">
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }} className="activities-wrap">
                    <img src={images.Activities1} alt="activities" className='active-img' />
                    <div className="activities-content">
                        <h3>Sailing</h3>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.6 }} className="activities-wrap">
                    <img src={images.Activities2} alt="activities" className='active-img' />
                    <div className="activities-content">
                        <h3>Climbing</h3>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }} className="activities-wrap">
                    <img src={images.Activities3} alt="activities" className='active-img' />
                    <div className="activities-content">
                        <h3>Skiing</h3>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }} className="activities-wrap">
                    <img src={images.Activities4} alt="activities" className='active-img' />
                    <div className="activities-content">
                        <h3>Hiking</h3>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default Activities;