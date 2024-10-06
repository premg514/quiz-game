import React, { useState, createContext } from 'react';


const DataContext = createContext(); // Create context

export const DataProvider = ({ children }) => {
    const [username, setUsername] = useState(""); // State for username

    const changeUsername = (name) => {
       
            setUsername(name);
            localStorage.setItem("username",name)
        
        // Update the username in context
    };

    return (
        <DataContext.Provider value={{ username, changeUsername }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
