import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext'; // Import DataProvider
import User from './components/User';
import Game from './components/Game';
import Success from './components/Success';
import Feedback from './components/Feedback';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            {/* Wrap your Routes in the DataProvider */}
            <DataProvider>
                <Routes>
                    <Route exact path="/quiz-game/" element={<User />} />
                    <Route exact path="/game" element={<Game />} />
                    <Route exact path='success' element={<Success/>}/>
                    <Route exact path='/feedback' element={<Feedback/>}/>
                </Routes>
            </DataProvider>
        </BrowserRouter>
    );
}

export default App;
