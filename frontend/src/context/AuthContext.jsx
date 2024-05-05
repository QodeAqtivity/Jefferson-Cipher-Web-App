import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {

    switch (action.type) {
        case '':
            return {

            }
        case '': 
            return {

            }
        case '':
            return {

            }
        default: 
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {

    });

    return(
        <AuthContext.Provider value= { {...state, dispatch} } >
            {children}
        </AuthContext.Provider>
    )
};