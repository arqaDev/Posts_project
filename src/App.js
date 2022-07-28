import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([])

  function create(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={create}/>
      <PostList posts={posts} remove={removePost}/>
    </div>
  );
}

export default App;
