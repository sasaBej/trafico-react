import React from 'react';

import logo from '../assets/img/logo.svg';

function Header() {
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
            </div>
            
        </header>
    )
}

export default Header;
