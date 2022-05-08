import React from 'react';
import {useState, useEffect} from 'react';


export const Updatefieldpost = () => {
  const [post, setPost] = useState(null);
 

    useEffect(() => {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        title:'This is a post number 2' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts/2', requestOptions)
        .then(response => response.json())
        .then(result => setPost(result));

}, []);

return(
  <div className="result">
  {post && (
 <>
 <h1>Method Patch</h1>
 <h1>Post title:<span>{post.title}</span></h1>
 <p>Post body:<span>{post.body}</span></p>
 <p>Post id:<span>{post.id}</span></p>
 </>
)}
</div>
);
}