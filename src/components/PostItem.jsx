import React from "react";
import MyButton from "../UI/MyButton/MyButton";


const PostItem = (props) => {

    return (
        <div className="post__item">
            <strong style={{fontSize: '1.5rem'}}>{props.number}</strong>
            <div style={{marginLeft: '25px'}}>
                <h1>{props.post.title}</h1>
                <p style={{fontSize: '1.2rem'}}>{props.post.body}</p>
            </div>
            <MyButton style={{position: 'absolute', right: '2rem'}} onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
    )
}

export default PostItem