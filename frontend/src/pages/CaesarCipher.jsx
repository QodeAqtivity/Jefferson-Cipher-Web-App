import { useEffect, useState } from 'react';
import { useCaesarCiphersContext } from '../hooks/useCaesarsCipherContext';
import { useAuthContext } from '../hooks/useAuthContext';

// components
import CaesarCipherDetails from './../components/CaesarCipherDetails';
import CaesarCipherForm from '../components/CaesarCipherForm';

const CaesarCipher = () => {
    // const [caesarCiphers, setCaesarCiphers] = useState(null);  // before using contexts
    const { caesarCiphers, dispatch } = useCaesarCiphersContext();
    const { user, dispatch: authDispatch } = useAuthContext();
 
    useEffect(() => {
        // this useEffect will always run at least once (after initial component render)
        // will also run when dispatch (should never change) and/or user changes
        // refreshing and renavigating causes rerender therefore rerun

        if (user) { //does not validate the user, merely checks the global auth context which is being updated on interval in AuthContext
            const fetchCaesarCiphers = async() => {
                const response = await fetch('/api/caesar-cipher', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                const json = await response.json();

                if (response.ok) { //valid response
                    dispatch({type:'SET_CAESAR_CIPHERS', payload: json});
                } else {
                    if (json.error == 'Request is not authorized (Invalid JWT)') {
                        // clear global auth state and JWT in local storage
                        authDispatch({type: 'LOGOUT'});
                        localStorage.removeItem('user');
                    }
                }
            }

            fetchCaesarCiphers()
        }

        if (!user) { //either user not logged in OR invalid JWT
            const fetchCaesarCiphersPublic = async() => {
                const response = await fetch('/api/caesar-cipher/public');
                const json = await response.json();
    
                if (response.ok) {
                    dispatch({type:'SET_CAESAR_CIPHERS', payload: json});
                } else {
                    alert('Unable to retrieve any Caesar Ciphers.');
                }
            }

            fetchCaesarCiphersPublic();
        }
        
    }, [dispatch, user]);

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
