import { useEffect, useState } from 'react';

// components
import JeffersonCipherDetails from './../components/JeffersonCipherDetails';

const JeffersonCipher = () => {
    const [jeffersonCiphers, setJeffersonCiphers] = useState(null);

    useEffect(() => {
        const fetchJeffersonCiphers = async() => {
            console.log('here me')
            const response = await fetch('/api/jefferson-cipher');
            const json = await response.json();
            console.log('first');
            if (response.ok) {
                setJeffersonCiphers(json);
                console.log('worked');
            }
        }

        fetchJeffersonCiphers();
    }, []); //useEffect will always render once

    return(
        <div className="jeffersonCiphers">
            {jeffersonCiphers && jeffersonCiphers.map((jeffersonCipher) => (
                <JeffersonCipherDetails key={jeffersonCipher._id} jeffersonCipher={jeffersonCipher}/>
                
            ))}
        </div>
    )
};

export default JeffersonCipher;
