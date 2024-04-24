import { CaesarCiphersContext } from "../context/CaesarCiphersContext";
import { useContext } from 'react';

export const useCaesarCiphersContext = () => {
    const context = useContext(CaesarCiphersContext);

    if (!context) {
        throw Error('useCaesarCiphersContext must be used inside an CaesarCiphersContextProvider');
    }

    return context;
};