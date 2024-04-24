import { createContext, useReducer } from 'react';

export const CaesarCiphersContext = createContext();

export const caesarCiphersReducer = (state, action) => {

    switch (action.type) {
        case 'SET_CAESAR_CIPHERS':
            return {
                caesarCiphers : action.payload
            }

        case 'CREATE_CAESAR_CIPHER':
            return {
                caesarCiphers : [action.payload, ...state.caesarCiphers]
            }
        
        case 'DELETE_CAESAR_CIPHER':
            return {
                caesarCiphers: state.caesarCiphers.filter((caesarCipher) => caesarCipher._id !== action.payload._id)
            }
    
        default:
            console.log('Not a valid action! State remain unchanged!');
            return state
    }

};

export const CaesarCiphersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(caesarCiphersReducer, {
        caesarCiphers : null
    });

    return (
        <CaesarCiphersContext.Provider value={ {...state, dispatch} } >
            { children }
        </CaesarCiphersContext.Provider>
    )

};

