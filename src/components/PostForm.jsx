import React from "react";
import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton.jsx";
import MyInput from "../UI/MyInput/MyInput.jsx";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    function addPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <MyInput value={post.title} placeholder="Post title" onChange={event => setPost({...post, title: event.target.value})} />
            <MyInput style={{margin: '10px 0'}} placeholder="Post body" value={post.body} onChange={event => setPost({...post, body: event.target.value})} />
            <MyButton type="submit" style={{marginTop: '20px'}} onClick={addPost}>Post</MyButton>
        </form>
    )
}

export default PostForm