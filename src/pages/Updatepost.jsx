import React from 'react';
import {useState, useEffect} from 'react';


export const Updatepost = () => {
  const [post, setPost] = useState(null);
 

    useEffect(() => {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        title: 'Update post number 1',
        body:'This a new  post number 1'})
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
        .then(response => response.json())
        .then(result => setPost(result));

}, []);

return(
  <div className="result">
  {post && (
 <>
 <h1>Method Put</h1>
 <h1>Post title:<span>{post.title}</span></h1>
 <p>Post body:<span>{post.body}</span></p>
 <p>Post id:<span>{post.id}</span></p>
 </>
)}
</div>
);
}
