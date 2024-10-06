import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import './index.css'; // Import the CSS file for styling

const Success = () => {
    const { username } = useContext(DataContext);
    const navigate = useNavigate();

    const tryagain = () => {
        navigate("/game");
    };

    return (
        <div className="successComp">
             <img src="https://www.architecturaldigest.in/wp-content/themes/cntraveller/images/check-circle.gif" alt="Success"/>
            <h1>{username}</h1>
            <p>You have achieved success!</p>
           
            <button onClick={tryagain}>Try Again</button>
        </div>
    );
};

export default Success;
