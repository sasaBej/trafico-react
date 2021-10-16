import React from 'react';
import axios from 'axios';

import faqImg from '../assets/img/bottom_guy.svg';
import PostItem from './PostItem';

async function fetchComments() {
    const response = await axios.get("https://lxpi9qne2a.api.quickmocker.com/getReactFAQs");
    console.log(response.data.response);
}
fetchComments();

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
                    <PostItem/>
                </div>
           </div>
        </section>
    )
}

export default Faq;
