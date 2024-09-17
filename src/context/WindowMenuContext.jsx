import React, { createContext, useState, useContext } from 'react';

const WindowMenuContext = createContext();

export const WindowMenuProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState("");

    return (
        <WindowMenuContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </WindowMenuContext.Provider>
    );
};

export const useWindowMenu = () => useContext(WindowMenuContext);