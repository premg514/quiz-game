import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import './index.css'; // Import CSS file for styling

const Feedback = () => {
    const { username } = useContext(DataContext);
    const navigate = useNavigate();

    const tryagain = () => {
        navigate("/game");
    };

    return (
        <div className="feedbackComp">
            <img src="https://getsmart.co.in/WL-CNT/main/assest/img/failed.gif" alt="Failure"/>
            <h1>Mr.{username}</h1>
            <p>Your choice is not correct, better luck next time!</p>
            
            <button onClick={tryagain}>Try Again</button>
        </div>
    );
};

export default Feedback;
