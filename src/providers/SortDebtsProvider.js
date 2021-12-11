import React, { createContext, useState } from 'react';

export const SortDebtsContext = createContext();

export const SortDebtsProvider = ({ children }) => {
    const [sortType, setSortType] = useState('alphabetically');

    return (
        <SortDebtsContext.Provider value={{
            sortType,
            setSortType,
        }}>
            {children}
        </SortDebtsContext.Provider>
    )
}