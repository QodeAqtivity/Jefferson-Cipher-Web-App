import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT': 
            return {
                user: null
            }
        default: 
            console.log('Not a valid action.  State remains unchanged.');
            return state
            
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    console.log('AuthContext state: ', state); // logged everytime state changes

    return(
        <AuthContext.Provider value= { {...state, dispatch} } >
            {children} 
        </AuthContext.Provider>
    ) // wraps root app component, while root app component surrounds all other components
};