import React, { useState } from 'react'


const initialState = {
    numbers: [],
    dates: [],
    county: '', 
    deaths: [], 
    deathToll: 0,
    tests: 0,
}

export const Context = React.createContext();

const Store = ({children}) => {
    const [state, setState] = useState(initialState)

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store; 