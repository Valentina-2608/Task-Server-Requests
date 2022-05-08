import React from 'react';
import {useState, useEffect} from 'react';



export const Getpost=()=>{
	const[post, setPost] = useState(null);

useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((result) => setPost(result))
    }, []);

   return(
	   <div className="result">
	   {post && (
		<>
    <h1>Method Get</h1>
		<h1>Post title:<span>{post.title}</span></h1>
		<p>Post body:<span>{post.body}</span></p>
    <p>Post id:<span>{post.id}</span></p>
		</>
   )}
   </div>
 );
   };