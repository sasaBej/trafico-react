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
                {/* here I have to make 2 different columns with different function
                 I don't known any other solution at the moment
                 */}
                        {posts.map((post) =>
                                <PostItem post={post} key={post.id}/>
                        )}
                    
                </div>

                <div className="faq__extend-button">
                    <p>load more</p>
                </div>
                
           </div>
        </section>
    )
}

export default Faq;
