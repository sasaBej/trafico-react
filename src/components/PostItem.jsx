import React, {useState} from 'react'

const PostItem = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        // I have to refactor this part of code
        <div className="post">
            
            <div 
            className="post__question"
            onClick={()=>setIsActive(!isActive)}
            >
                <p>{props.post.title}</p>
                <div className="post__question-sign">
                {isActive ? <span></span> : <><span></span><span></span></>}

                </div>
            </div>
            {isActive &&
            <div className="post__answer">
                {props.post.body}
            </div>}
            
        </div>
    )
}

export default PostItem;
