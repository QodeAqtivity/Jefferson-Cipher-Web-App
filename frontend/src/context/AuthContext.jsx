import { createContext, useReducer, useEffect, useState } from 'react';

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

    //I used a state but it was redundant...

    useEffect(() => {

        const checkLocalStorageUser = () => {  // this method runs on an interval
            const currentLocalStorageUser = JSON.parse(localStorage.getItem('user')); 
            
            if ((state.user != null) && (currentLocalStorageUser != null)) { //global auth context has a "JWT" and local storage has a "JWT" in 'user'
                if ((currentLocalStorageUser.email !== state.user.email) || (currentLocalStorageUser.token !== state.user.token)) {
                    // whether or not the global auth context is correct XOR the local storage JWT is correct, we will log them out
                    dispatch({type: 'LOGOUT'});
                    localStorage.removeItem('user');
                } else {
                    console.log('AuthContext UseEffect! Matching JWT between global auth context and local storage');
                }
            } else {
                if ((currentLocalStorageUser == null) && (state.user == null)) {
                    console.log('Both LocalStorage "user"/JWT and Global Auth Context are Null: Properly/Fully Logged Out');
                } else if (currentLocalStorageUser == null) {
                    console.log('No user/JWT in localStorage but Global Auth Context is not null: Log Out');
                    dispatch({type: 'LOGOUT'});
                } else if (state.user == null) {
                    console.log('Global Auth Context null but user/JWT in localStorage: Attempt to Login (frontend)');
                    dispatch({type: 'LOGIN', payload: currentLocalStorageUser})
                } else {
                    console.log('Never Show')
                }
            }
        };
        
        checkLocalStorageUser();

        const intervalCheckLocalStorageUser = setInterval(checkLocalStorageUser, 5000);

        return () => clearInterval(intervalCheckLocalStorageUser);
    }, [state]);

    console.log('AuthContext State Changed: ', state); // logged everytime state changes

    return(
        <AuthContext.Provider value= { {...state, dispatch} } >
            {children} 
        </AuthContext.Provider>
    ) // wraps root app component, while root app component surrounds all other components
};