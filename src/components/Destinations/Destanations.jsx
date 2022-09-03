import React from 'react';
import { motion } from 'framer-motion';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import images from '../../constants/images';
import './destanations.css';

const Destanations = () => {
  return (
    <div className='destinations'>
        <div className="container">
            <h1 className='h1-header'>Popular Destinations</h1>
            <div className="global-wrapper destinations-wrapper">
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }} className="place-wrap">
                    <img src={images.Dest1} alt="destinations" />
                    <div className="place-name">
                        <h5>Madrid</h5>
                        <p>Spain</p>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.6 }} className="place-wrap">
                    <img src={images.Dest2} alt="destinations" />
                    <div className="place-name">
                        <h5>St. Joseph</h5>
                        <p>Michigan, USA</p>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }} className="place-wrap">
                    <img src={images.Dest3} alt="destinations" />
                    <div className="place-name">
                        <h5>Tucson</h5>
                        <p>Arizona, USA</p>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }} className="place-wrap">
                    <img src={images.Dest4} alt="destinations" />
                    <div className="place-name">
                        <h5>Fort Mayers</h5>
                        <p>Florida, USA</p>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.9 }} className="place-wrap">
                    <img src={images.Dest5} alt="destinations" />
                    <div className="place-name">
                        <h5>Prescott</h5>
                        <p>Arizona, USA</p>
                    </div>
                </motion.div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }} className="place-wrap">
                    <img src={images.Dest6} alt="destinations" />
                    <div className="place-name">
                        <h5>Big Sur</h5>
                        <p>California, USA</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default Destanations;