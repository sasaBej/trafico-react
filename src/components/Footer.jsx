import React from 'react';

import footerCar from '../assets/img/bottom_car.svg';
import logoFooter from '../assets/img/logo_bt.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__car">
                <img src={footerCar} alt="Footer car" />
            </div>
            <div className="footer__main">
                <div className="footer__top">
                    <div className="footer__main-descr">
                    We provide traffic management consultants so you get started quickly, contact us for a quote today!
                    </div>
                    <form className="form">
                        <label for="name">Name</label>
                        <input type="text"  name="name" placeholder="Your name" required/>
                        <label for="mail">Email address</label>
                        <input type="email"  name="mail" placeholder="Your email address"  required/>
                        <button className="btn__orange" type="submit" form="sendform">get started</button>
                    </form> 
                </div>

                <div className="nav_bot flex">
                    <a className="logo_bottom" aria-label="logo" href="#">
                        <img src={logoFooter} alt="logo image" />
                    </a>
                    <ul className="nav_bottom flex">
                        <li className="nav_bottom__item nav__item">
                            <a href="#aboutS" className="nav__link">about</a>
                        </li>
                        <li className="nav_bottom__item nav__item">
                            <a href="#htaS" className="nav__link">how to</a>
                        </li>
                        <li className="nav_bottom__item nav__item">
                            <a href="#faqS" className="nav__link">faqs</a>
                        </li>
                    </ul>  
                </div>
            </div>
            <div className="bottom_links flex">
                <div className="copy">Copyright @ 2019</div>
                <ul className="social_link flex">
                    <li className="social_link__fa"><a href="#"></a></li>
                    <li className="social_link__tw"><a href="#"></a></li>
                    <li className="social_link__insta"><a href="#"></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
