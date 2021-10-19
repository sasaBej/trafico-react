import React, {useEffect} from 'react';

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
        <header>
            <div className="top">
                <div className="container">
                    <nav className="navbar">
                        <a className="logo" href="#">
                            <img src={logo} alt="logo Trafico" />
                        </a>
                        
                        <ul className="nav">
                            <li className="nav__item">
                            <a href="#aboutS" className="nav__link">
                                about
                            </a>
                            </li>
                            <li className="nav__item">
                            <a href="#htaS" className="nav__link">
                                how to
                            </a>
                            </li>
                            <li className="nav__item">
                            <a href="#faqS" className="nav__link">
                                faqs
                            </a>
                            </li>
                            <li className="nav__item">
                            <a href="#formS" className="nav__link nav__link-btn">
                                contact us
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="hero__container">
                <div className="hero">    
                    <div className="container">
                        
                        <h1 className="hero__title">Your awesome traffic permit consultant.</h1>
                        <button className="hero__btn btn__orange ">get started</button>
                        
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
