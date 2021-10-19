import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutGuy from '../assets/img/top_guy.svg';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    });
    return (
        <section className="about">
            <div className="container">
                <div className="about__container">
                    <div className="about__container-left">
                        <h2  className="about__container-text">about us</h2>
                        <p className="about__container-desc">The occupational traffic permit is one of the most important things in the company when carrying out freight transport.&nbsp; In fact, it is a prerequisite for doing business traffic at all.</p>
                        <p className="about__container-sub">
                            How do you do when you need to obtain 
                            a commercial traffic permit for freight transport to your business?
                            
                        
                        </p>
                    </div>
                    <div className="about__container-img">
                        <img data-aos="fade-left" src={aboutGuy} alt="about guy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
