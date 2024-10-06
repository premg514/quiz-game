import { useContext, useEffect } from 'react';

import DataContext from '../../context/DataContext';
import Data from '../Data';
import Choices from '../Choices';
import './index.css';
import { useNavigate } from 'react-router-dom';


const Game = () => {
    
   const navigate = useNavigate()
    
    const { username ,changeUsername} = useContext(DataContext);
    const { quiz } = Data();
    let randomIndex = Math.floor(Math.random() * quiz.length);
    const qanda = quiz[randomIndex];
    useEffect(()=>{
        let stored = localStorage.getItem("username")
        changeUsername(stored)
    },[username,changeUsername])
    if( username===""){
        navigate("/quiz-game/")
    }
    return (
        
        <div className='gameComp'>
          <p>{`Welcome, ${username}!`}</p>
            <h1>{qanda.question}</h1>
            <div>
                {qanda.choices.map((each) => (
                    <Choices item = {each} key={each} correctAnswer={qanda.correctAnswer}  />
                ))}
            </div>
           
        </div>
    );
};

export default Game;
