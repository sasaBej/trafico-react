import React, {useEffect} from 'react';


import { Link } from "react-scroll";

import AOS from 'aos';
import 'aos/dist/aos.css';


import logo from '../assets/img/logo.svg';
import topCar from '../assets/img/top_car.svg';

function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    });
    return (
        <header id="header">
            <div className="top">
                <div className="container">               
                    
                    <nav className="navbar">
                        <Link
                        to="header"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="logo">
                            <img src={logo} alt="logo Trafico" />
                        </Link>
                        
                        <ul className="nav">
                            <li className="nav__item">
                                <Link
                                to="about"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav__link">
                                    about
                                </Link>
                                </li>
                                <li className="nav__item">
                                <Link
                                to="apply"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                    how to
                                </Link>
                                </li>
                                <li className="nav__item">
                                <Link
                                to="faq"
                                spy={true}
                                smooth={true}
                                duration={700}
                                className="nav__link">
                                    faqs
                                </Link>
                                </li>
                                <li className="nav__item">
                                <Link
                                to="footer"
                                spy={true}
                                smooth={true}
                                duration={1000}                           
                                className="nav__link nav__link-btn">
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="hero__container">
                <div className="hero">    
                    <div className="container">
                        
                        <h1 className="hero__title">Your awesome traffic permit consultant.</h1>
                        <Link
                        to="footer"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="hero__btn btn__orange ">get started</Link>
                        
                    </div>
                </div>
                <div className="hero__car">
                    <img data-aos="fade-right" src={topCar} alt="top car" />
                </div>
            </div>
            
        </header>
    )
}

export default Header;
