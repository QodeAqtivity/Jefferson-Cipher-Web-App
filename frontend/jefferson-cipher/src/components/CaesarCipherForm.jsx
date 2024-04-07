import { useState } from 'react';
import * as regexes from '../Regexes';

const CaesarCipher = () => {
    const [unencrypted, setUnencrypted] = useState('');
    const [shift, setShift] = useState(0);
    let regex = null;
    const [error, setError] = useState('');

    const inputValidation = () => {
        console.log(`regex is: ${regex}`);
        if ((unencrypted.length < 1) || (!regex(unencrypted))){
            alert('Message is not valid!  Must only contain characters within set specified AND contain at least 2 characters');
            return false;
        }
        return true;
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(unencrypted)
        console.log(regex)

        // if (!inputValidation()) {
        //     return false;
        // }


        const caesarCipher = {unencrypted, shift};

        const response = await fetch('/api/caesar-cipher',
        {
            method: 'POST',
            body: JSON.stringify(caesarCipher),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.log('Failed to Add New Caesar Cipher', json);            
            setError(json.error);
            alert('Failed to Add New Caesar Cipher')
        }
        else{
            setUnencrypted('');
            setError('');
            console.log('New Caesar Cipher Added', json);
            alert('New Caesar Cipher Added');
        }
    };


    return (
        <div className="caesar-cipher">
            <h2>Create a Caesar Cipher</h2>
            <label for="message">Message</label>
            <textarea 
                value={unencrypted} 
                onChange={(event) => setUnencrypted(event.target.value)} 
                id="message" 
                name="message" 
                required
            ></textarea>
            <label for="shift">Shift Amount</label>
            <input 
                type="number" 
                min="0" 
                step="1"
                onChange={(event) => setShift(event.target.value)}>
            </input>
            <button 
                onClick={handleSubmit}
            >Encrypt</button>
            <br />
            <input 
                type="radio"
                name="regexes"
                value="Lower Alpha"
                onClick={() =>{
                    regex = regexes.onlyLowerAlphaAndSpaces
                    console.log(regex)
                } }
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Lower Alpha</label>
            <input 
                type="radio"
                name="regexes"
                value="Upper Alpha"
                // onClick={() => setRegex(regexes.onlyUpperAlphaAndSpaces)}
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Upper Alpha</label>
            <input 
                type="radio"
                name="regexes"
                value="Alpha"
                // onClick={() => setRegex(regexes.onlyAlphaAndSpaces)}
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Alpha</label>
            <input 
                type="radio"
                name="regexes"
                value="Numeric"
                // onClick={() => setRegex(regexes.onlyNumeric)}
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Numeric</label>
            <input 
                type="radio"
                name="regexes"
                value="Lower AlphaNumeric"
                // onClick={() => setRegex(regexes.onlyLowerAlphaAndNumericAndSpaces)}
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Lower AlphaNumeric</label>
            <input 
                type="radio"
                name="regexes"
                value="Upper AlphaNumeric"
                // onClick={() => setRegex(regexes.onlyUpperAlphaAndNumericAndSpaces)}
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Upper AlphaNumeric</label>
            <input 
                type="radio"
                name="regexes"
                value="AlphaNumeric"
                // onClick={() => setRegex(regexes.onlyAlphaAndNumericAndSpaces)}
                // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
            />
            <label >Alpha Numeric</label>
        </div>
    )
};

export default CaesarCipher;