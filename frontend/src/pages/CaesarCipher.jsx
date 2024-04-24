import { useEffect, useState } from 'react';
import { useCaesarCiphersContext } from '../hooks/useCaesarsCipherContext';

// components
import CaesarCipherDetails from './../components/CaesarCipherDetails';
import CaesarCipherForm from '../components/CaesarCipherForm';

const CaesarCipher = () => {
    // const [caesarCiphers, setCaesarCiphers] = useState(null);

    const { caesarCiphers, dispatch } = useCaesarCiphersContext();

    useEffect(() => {
        const fetchCaesarCiphers = async() => {
            const response = await fetch('/api/caesar-cipher'); //by default GET request
            const json = await response.json();
            if (response.ok) { //valid response
                // setCaesarCiphers(json);
                dispatch({type:'SET_CAESAR_CIPHERS', payload: json});
            }
        }

        fetchCaesarCiphers();
    }, []); //useEffect will always render once

    return(
        <div className='caesar-cipher' class='flex justify-between mx-5'>
            <div className="caesar-ciphers">
                {caesarCiphers && caesarCiphers.map((caesarCipher) => (
                    <CaesarCipherDetails key={caesarCipher._id} caesarCipher={caesarCipher}/>
                    
                ))}
            </div>  

            <CaesarCipherForm/>
        </div>
        
    )
};

export default CaesarCipher;
