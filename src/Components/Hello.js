import React, { useState, useEffect } from 'react';


export default function Hello() {
const [message,setMessage]=useState('')
useEffect(() => {
    fetch('http://127.0.0.1:8000/firenet/hello/')
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(error => console.error('Error fetching message:', error));
}, []);
  return (
    <div>
       <h1>Hello from React!</h1>
        <p>{message}</p>
    </div>
  )
}
