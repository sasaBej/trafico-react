import React from 'react';

import applyGirl from '../assets/img/girl_call.svg';

function Apply() {
    return (
        <section className="apply">
            <div className="containerA">
                <div className="apply__container">
                    <div className="apply__container-img">
                        <img src={applyGirl} alt="Girl call image" />
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
