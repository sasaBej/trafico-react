import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import AOS from 'aos';
import 'aos/dist/aos.css';

import footerCar from '../assets/img/bottom_car.svg';
import logoFooter from '../assets/img/logo_bt.svg';
import fbfooter from '../assets/img/facebook.svg';
import twfooter from '../assets/img/twiter.svg';
import ifooter from '../assets/img/instagram.svg';
// import reactDom from 'react-dom';

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    });

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = {name, mail};
        setMail("");
        setName("");
        
    };
    return (
        <footer className="footer" id="footer">
            <div className="footer__car">
                <img data-aos="fade-right" src={footerCar} alt="Footer car" />
            </div>
            <div className="footer__main">
                    <div className="container"> 
                    <div className="footer__top">
                       
                        <div className="footer__main-descr">
                        We provide traffic management consultants so you get started quickly, contact us for a quote today!
                        </div>
                        {/* form  */}
                        <form 
                        className="form"
                        onSubmit={formSubmit}
                        >
                            <label >Name</label>
                            <input 
                            type="text" 
                            placeholder="Your name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                            <label >Email address</label>
                            <input 
                            type="email" 
                            placeholder="Your email address" 
                            value={mail} 
                            onChange={(e) => setMail(e.target.value)}
                            required
                            />
                            <button className="btn__orange">get started</button>
                        </form> 
                        {/* form */}
                        </div>

                    <div className="footer__nav">
                        <Link
                        to="header"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="logo__bottom" aria-label="logo" >
                            <img src={logoFooter} alt="logo image" />
                        </Link>
                        {/* I need to refactor this code */}
                        <ul className="nav_bottom"> 
                            <li className="nav_bottom__item nav__item">
                                <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                className="nav__link">about
                                </Link>
                            </li>
                            <li className="nav_bottom__item nav__item">
                                <Link
                                to="apply"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">how to
                                </Link>
                            </li>
                            <li className="nav_bottom__item nav__item">
                                <Link
                                to="faq"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">faqs</Link>
                            </li>
                        </ul>  
                        {/*  */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="bottom__links ">
                    <div className="copy">Copyright @ 2019</div>
                    <ul className="bottom__links-social">
                        <li className="social__link-fa">
                            <a href="#">
                                <img src={fbfooter} alt="Facebook social link" />
                            </a></li>
                        <li className="social__link-tw"><a href="#">
                            <img src={twfooter} alt="Twiter social link" />
                            </a></li>
                        <li className="social__link-insta"><a href="#">
                            <img src={ifooter} alt="Instagram social link" />
                            </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
