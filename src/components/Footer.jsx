import React, {useState, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import footerCar from '../assets/img/bottom_car.svg';
import logoFooter from '../assets/img/logo_bt.svg';
import fbfooter from '../assets/img/facebook.svg';
import twfooter from '../assets/img/twiter.svg';
import ifooter from '../assets/img/instagram.svg';

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    });

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const formSubmit = (e, resetForm) => {
        e.preventDefault();
        const formData = {name, mail};
        setMail("");
        setName("");
        
    };
    return (
        <footer className="footer">
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
                        <a className="logo__bottom" aria-label="logo" href="#">
                            <img src={logoFooter} alt="logo image" />
                        </a>
                        {/* I need to refactor this code */}
                        <ul className="nav_bottom"> 
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
                        {/*  */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="bottom__links ">
                    <div className="copy">Copyright @ 2019</div>
                    <ul className="bottom__links-social">
                        <li className="social__link-fa"><a href="#">
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
