import React, { createContext, useState, useContext } from 'react';

const LineNumberContext = createContext();

export const LineNumberProvider = ({ children }) => {
    const [lineNumber, setLineNumber] = useState("0");

    return (
        <LineNumberContext.Provider value={{ lineNumber, setLineNumber }}>
            {children}
        </LineNumberContext.Provider>
    );
};

export const useLineNumber = () => useContext(LineNumberContext);