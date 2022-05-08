import React from 'react';
import {useState, useEffect} from 'react';


export const Createpost=()=>{
	const[post, setPost] = useState(null);


	useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
      title: 'New post',
      body:'This a new  post',
      id:'101'
    })
  };
		fetch(`https://jsonplaceholder.typicode.com/posts`,  requestOptions)
			.then((res) => res.json())
		  .then((json) => setPost(json))
   }, []);

   return(
	   <div className="result">
	   {post && (
		<>
    <h1>Method Post</h1>
		<h1>Post title:<span>{post.title}</span></h1>
		<p>Post body:<span>{post.body}</span></p>
    <p>Post id:<span>{post.id}</span></p>
		</>
   )}
   </div>
 );
   };