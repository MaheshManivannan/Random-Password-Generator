import { useState } from "react";
import "./App.css";

const RandomPass = () => {

    const [pass,setPass] = useState("");
    const password = () => {
        let a = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_{}[]|?<>/ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const randomChar = () => {
            let b = Math.floor(Math.random() * a.length);
            let c = a[b];
            return c;
        }
        let d = [];
        for(let i=0;i<12;i++){
            d.push(randomChar());
        }
        setPass(d.join(""));
    } 
    return (
        <>
        <div className="container">
        <main className="main-content">
        <h1>Random Password Generator</h1>
        <h3 className="password">{pass}</h3>
        <button onClick={() => password()}>Generate</button>
        </main>
        </div>
        </>
    );
}

export default RandomPass;