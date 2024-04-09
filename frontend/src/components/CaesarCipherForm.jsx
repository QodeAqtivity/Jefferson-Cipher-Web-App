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
        <div className="caesar-cipher" class='border border-solid rounded-lg border-green-500 p-5 mr-5 flex max-h-72 min-w-max' >
            {/* <h2 class='text-xl italics font-bold flex justify-center'>Create a Caesar Cipher</h2> */}
            <div class='flex flex-col mr-10'>
                <h2 class='text-xl italics font-bold flex justify-center'>Create a Caesar Cipher</h2>
                <label for="message" class='italic'>Message</label>
                <textarea 
                    value={unencrypted} 
                    onChange={(event) => setUnencrypted(event.target.value)} 
                    id="message" 
                    name="message" 
                    required
                    class='mb-3 bg-gray-800' 
                ></textarea>
                <label for="shift" class='italic'>Shift Amount</label>
                <input 
                    type="number" 
                    min="0" 
                    step="1"
                    onChange={(event) => setShift(event.target.value)}
                    class='mb-5 bg-gray-800'
                >
                </input>
                <button 
                    onClick={handleSubmit}
                    class='border border-solid rounded-lg border-green-500 mb-5 p-2 font-bold'
                >Encrypt</button>
            </div>
            
            <div className='border border-solid rounded-lg border-green-500 p-2 flex flex-col justify-between'>
                <div class='flex flex-col ml-3'>
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="Lower Alpha"
                            onClick={() =>{
                                regex = regexes.onlyLowerAlphaAndSpaces
                                console.log(regex)
                            } }
                            class='mr-4'
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                        />
                        <label>Lower Alpha</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="Upper Alpha"
                            // onClick={() => setRegex(regexes.onlyUpperAlphaAndSpaces)}
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                            class='mr-4'
                        />
                        <label >Upper Alpha</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="Alpha"
                            // onClick={() => setRegex(regexes.onlyAlphaAndSpaces)}
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                            class='mr-4'
                        />
                        <label >Alpha</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="Numeric"
                            // onClick={() => setRegex(regexes.onlyNumeric)}
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                            class='mr-4'
                        />
                        <label >Numeric</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="Lower AlphaNumeric"
                            // onClick={() => setRegex(regexes.onlyLowerAlphaAndNumericAndSpaces)}
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                            class='mr-4'
                        />
                        <label >Lower AlphaNumeric</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="Upper AlphaNumeric"
                            // onClick={() => setRegex(regexes.onlyUpperAlphaAndNumericAndSpaces)}
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                            class='mr-4'
                        />
                        <label >Upper AlphaNumeric</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio"
                            name="regexes"
                            value="AlphaNumeric"
                            // onClick={() => setRegex(regexes.onlyAlphaAndNumericAndSpaces)}
                            // onClick={(event) => {handleRegexOnClick(event, event.target.value)}}
                            class='mr-4'
                        />
                        <label >Alpha Numeric</label>
                    </div>
                    
                </div>
                
                <button
                    class='border border-solid rounded-lg border-green-500 p-2 font-bold'
                >Advanced</button>
            </div>
            
           
        </div>
    )
};

export default CaesarCipher;