import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { images } from '../../constants';
import './navbar.scss';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {['Home', 'About', 'work', 'skill', 'contact'].map((item) => {
                    return (
                        <li key={`link-${item}`} className="app__flex p-text">
                            <div />
                            <a href={`#${item}`}>{item} </a>
                        </li>
                    );
                })}
            </ul>

            <div className="app__navbar__manu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInview={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />

                        <ul>
                            {['Home', 'About', 'work', 'skill', 'contact'].map((item) => {
                                return (
                                    <li key={item} className="app__flex p-text">
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                                            {item}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
