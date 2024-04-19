import { JeffersonCiphersContext } from "../context/JeffersonCipherContext";
import { useContext } from 'react';

export const useJeffersonCiphersContext = () => {
    const context = useContext(JeffersonCiphersContext); //JeffersonCiphersContext is the value property ({state, dispatch}) we passed into the Provider component

    //Check if you are in scope of context
    if (!context) {
        throw Error('useJeffersonCiphersContext must be used inside an JeffersonCiphersContextProvider');
    }

    return context;
};