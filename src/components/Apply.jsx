import React, {useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import applyGirl from '../assets/img/girl_call.svg';

function Apply() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    });
    return (
        <section className="apply" id="apply">
            <div className="containerA">
                <div className="apply__container">
                    <div className="apply__container-img">
                        <img data-aos="fade-right" src={applyGirl} alt="Girl call image" />
                    </div>
                    <div className="apply__text">
                        <h2  className="apply__text-title">how to apply</h2>
                        <p className="apply__text-descr">When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apply;
