import React from 'react';
import {useState, useEffect} from 'react';


 export const Deletepost = () => {
  const [status, setStatus] = useState(null);
 

    useEffect(() => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
            title: 'Method Post using hook useEffect',
          })
        };
        fetch('https://jsonplaceholder.typicode.com/1', requestOptions)
            .then(() => setStatus('Delete successful'));
          
    }, []);

    return (
        <div className="result">
            <h1>Delete request</h1>
            <p>Result:<span>{status}</span></p>
            </div>
    );
}

