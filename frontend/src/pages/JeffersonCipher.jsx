import { useEffect, useState } from 'react';

// components
import JeffersonCipherDetails from './../components/JeffersonCipherDetails';
import JeffersonCipherForm from '../components/JeffersonCipherForm';

const JeffersonCipher = () => {
    const [jeffersonCiphers, setJeffersonCiphers] = useState(null);

    useEffect(() => {
        const fetchJeffersonCiphers = async() => {
            const response = await fetch('/api/jefferson-cipher');
            const json = await response.json();
            if (response.ok) {
                setJeffersonCiphers(json);
            }
        }

        fetchJeffersonCiphers();
    }, []); //useEffect will always render once

    return(
        <div className='main' class='flex justify-between mx-5'>
            <div className="jefferson-ciphers">
                {jeffersonCiphers && jeffersonCiphers.map((jeffersonCipher) => (
                    <JeffersonCipherDetails key={jeffersonCipher._id} jeffersonCipher={jeffersonCipher}/>
                    
                ))}
            </div>  
                
            <JeffersonCipherForm />
        </div>
        
    )
};

export default JeffersonCipher;
