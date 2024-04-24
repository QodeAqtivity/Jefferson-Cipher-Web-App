import { createContext, useReducer } from 'react';

export const JeffersonCiphersContext = createContext()

// We are not interacting with the DB at all over here, we are merely keeping the local state in-sync with the data in the DB
export const jeffersonCiphersReducer = (state, action) => { // state is previous state (before change), action is argument passed inside dispatch fx
    // check the action type
    switch (action.type){
        // return a new value of what we want the state to be
        case 'SET_JEFFERSON_CIPHERS':
            return { 
                jeffersonCiphers : action.payload
            }
        
        case 'CREATE_JEFFERSON_CIPHER':
            return {
                jeffersonCiphers: [action.payload, ...state.jeffersonCiphers] //adding new 
            }

        case 'DELETE_JEFFERSON_CIPHER':
            return {
                jeffersonCiphers: state.jeffersonCiphers.filter((jeffersonCipher) => jeffersonCipher._id !== action.payload._id) //the payload (of the action) is the jefferson cipher that was deleted/removed from DB
            }

        default: 
            console.log('Not a valid action!  State remains unchanged!');
            return state 
    }


};

export const JeffersonCiphersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(jeffersonCiphersReducer, { 
        jeffersonCiphers : null
    });

    // to update state
    // dispatch({type: 'CREATE_JEFFERSON_CIPHERS', payload : [{}, {}]}); //argument inside is called action

    return (
        <JeffersonCiphersContext.Provider value={ {...state, dispatch} }>
            {/* was state but used spread operator for ease of use */}
            { children }
        </JeffersonCiphersContext.Provider>
    )
};

// export default {JeffersonCipherContext, JeffersonCiphersContextProvider};