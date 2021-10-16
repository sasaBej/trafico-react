import React, {useState, useEffect} from 'react';
import axios from 'axios';

import faqImg from '../assets/img/bottom_guy.svg';
import PostItem from './PostItem';



function Faq() {

    const [posts, setPosts] = useState([]);

    async function fetchComments() {
            // const res = await axios.get("https://lxpi9qne2a.api.quickmocker.com/getReactFAQs");
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const firstPage = res.data;
            const onPage = firstPage.slice(0, 12);
            setPosts(onPage);
        }
        
    useEffect(() => {
        fetchComments()  
    }, [])

    


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

                {posts.map((post) =>
                        <PostItem post={post} key={post.id}/>
                )}
                    
                </div>
           </div>
        </section>
    )
}

export default Faq;
