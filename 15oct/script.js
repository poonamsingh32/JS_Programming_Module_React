import {user} from "./data.js"
import React from "react";
import {createRoot} from "react-dom/client"
import "./style.css"

console.log(user.username);
console.log("hello world");

// const h2= <h2>Create React Element</h2>


function Card(key)
{   console.log(key)
   return <div className='card' key={key}>
    <img src="https://guptadeepak.com/content/images/size/w2000/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp"></img>
    <div className='cardinfo'>
        <h4>Subscribe to the best of Udemy</h4>
        <p>school of AI</p>
        <p><b>₹200</b></p>
    </div>
    
</div>
    
}
const container=[Card(1),Card(2),Card(3),Card(4),Card(5),Card(6)]
const root=createRoot(document.querySelector('#root'))
root.render(<div className="container">{container}</div>)