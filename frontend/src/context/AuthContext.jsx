import { createContext, useReducer, useEffect } from 'react';

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

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')); //stored as JSON string in LocalStorage  

        if (user) {
            dispatch({type: 'LOGIN', payload: user});
        }
        // state.user = localStorage.getItem('user')
    }, []); //empty depedency array, only fire this useEffect once upon initial component render

    console.log('AuthContext state: ', state); // logged everytime state changes

    return(
        <AuthContext.Provider value= { {...state, dispatch} } >
            {children} 
        </AuthContext.Provider>
    ) // wraps root app component, while root app component surrounds all other components
};