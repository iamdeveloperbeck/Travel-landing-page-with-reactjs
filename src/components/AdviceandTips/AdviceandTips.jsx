import React from 'react';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './adviceandtips.css';

const AdviceandTips = () => {
  return (
    <div className='adviceandtips'>
        <div className="container">
            <div className="global-head">
                <h1 className='h1-header'>Travel Tips and Advice</h1>
                <button className="global-cta">
                    View all
                    <EastOutlinedIcon />
                </button>
            </div>
            <div className="global-wrapper">
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }} className="adviceandtips-wrap">
                    <img src={images.Advice1} alt="advice tip" className='advice-img' />
                    <div className="adviceandtips-content">
                        <div className="adviceandtips-text">
                            <h5>East Village Ice Cream Crawl</h5>
                            <p>We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…</p>
                        </div>
                        <div className="adviceandtips-counter">
                            <div>
                                <CalendarMonthOutlinedIcon />
                                Today
                            </div>
                            <div>
                                <PersonOutlineOutlinedIcon />
                                Maria Philips
                            </div>
                            <div>
                                <ChatBubbleOutlineIcon />
                                2
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.6 }} className="adviceandtips-wrap">
                    <img src={images.Advice2} alt="advice tip" className='advice-img' />
                    <div className="adviceandtips-content">
                        <div className="adviceandtips-text">
                            <h5>Brooklyn Bridge cinematic photo walk</h5>
                            <p>This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge.</p>
                        </div>
                        <div className="adviceandtips-counter">
                            <div>
                                <CalendarMonthOutlinedIcon />
                                Today
                            </div>
                            <div>
                                <PersonOutlineOutlinedIcon />
                                James Calzoni
                            </div>
                            <div>
                                <ChatBubbleOutlineIcon />
                                17
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default AdviceandTips;