import { useState, useContext, useEffect } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import './index.css';

const User = () => {
    const [name, setName] = useState(""); 
    const { changeUsername } = useContext(DataContext); 
    const navigate = useNavigate(); 

    const inputName = (e) => {
        setName(e.target.value);
    };

    const userLoging = (e) => {
        e.preventDefault(); 
        if (name==="") { 
            alert("Please enter your name!")
        }
        else{
            changeUsername(name); 
            localStorage.setItem("username",name)
            navigate("/game")
            }
    };
    useEffect(()=>{
        let stored = localStorage.getItem("username")
        localStorage.setItem("username",stored)
    },[])
    const fullURL ="https://premg514.github.io/quiz-game/";
    return (
        <div className="loginComp">
            
             <QRCodeSVG 
                value={fullURL}
                size={200}
                bgColor="#ffffff" 
                fgColor="#000000" 
            />
             <p>Scan this QR code to visit our website.</p>
            <form className="loginForm" onSubmit={userLoging}>
                <input
                    onChange={inputName}
                    value={name}
                    type="text"
                    placeholder="Enter your name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default User;
