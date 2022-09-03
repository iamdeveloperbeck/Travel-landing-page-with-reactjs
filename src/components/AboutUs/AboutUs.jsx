import React from 'react';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="container">
        <div className="aboutus_wrapper">
          <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }} className="about-left">
            <h1 className='h1-header aboutus-header'>About Us</h1>
            <p className='aboutus-describtion'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <button className="global-cta aboutus-cta">
              Read More
              <EastOutlinedIcon />
            </button>
          </motion.div>
          <motion.div whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }} className="about-right">
            <img src={images.AboutUs} alt="about us" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;