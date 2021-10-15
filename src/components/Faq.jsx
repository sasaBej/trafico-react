import React from 'react';

import faqImg from '../assets/img/bottom_guy.svg';

function Faq() {
    return (
        <section className="faq">
            <div className="containerF">
                <div className="faq__content">
                    <div className="faq__content-q">
                        <h2>faq</h2>
                        <p>Questions and Answers on Professional Traffic Permits:</p>
                        

                    </div>
                    <div className="faq__img-guy">
                        <img src={faqImg} alt="Image Guy Question" />
                    </div>
                </div>               
                <div className="question_com"> 

                </div>
           </div>
        </section>
    )
}

export default Faq;
