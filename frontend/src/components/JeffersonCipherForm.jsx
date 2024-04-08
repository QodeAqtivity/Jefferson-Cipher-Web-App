import { useState } from 'react';
import * as regexes from './../Regexes';

const JeffersonCipherForm = () => {
    const [unencrypted, setUnencrypted] = useState('');
    const [error, setError] = useState('');

    // input validation will be done client-side
    const inputValidation = () => {
        if ((unencrypted.length < 2) || (!regexes.onlyAlphaNumericAndSpaces(unencrypted))){
            alert('Message is not valid!  Must only contain characters within set specified AND contain at least 2 characters');
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!inputValidation()){
            return false;
        }

        const jeffersonCipher = {unencrypted};

        const response = await fetch('/api/jefferson-cipher', 
        {
            method: 'POST',
            body: JSON.stringify(jeffersonCipher),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.log('Failed to Add New Jefferson Cipher', json);            
            setError(json.error);
            alert('Failed to Add New Jefferson Cipher')
        }
        else{
            setUnencrypted('');
            setError('');
            console.log('New Jefferson Cipher Added', json);
            alert('New Jefferson Cipher Added');
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit} class='flex border border-solid rounded-lg border-green-500 p-5 mr-5 max-h-64 min-w-max'>
            <div class='flex flex-col mr-10'>
                <h3 class='text-xl font-bold self-center'>Create Jefferson Cipher</h3>
                <label for="message" class='italic'>Message</label>
                <textarea 
                    value={unencrypted} 
                    onChange={(event) => setUnencrypted(event.target.value)} 
                    id="message" 
                    name="message" 
                    required
                    class='mb-3 bg-gray-800'
                ></textarea>
                <button 
                    onClick={handleSubmit}
                    class='border border-solid rounded-lg border-green-500 p-2 font-bold'
                >Encrypt</button>
            </div>
            
            <div class='flex flex-col justify-between border border-solid rounded-lg border-green-500 p-2'>
                <div class='flex flex-col'>
                    <h3 class='self-center font-bold italic'>Options</h3>
                    <div>
                        <input 
                            type="radio" 
                            id="Self-Generate" 
                            name="testname"
                        ></input> 
                        <label 
                            for='Self-Generate'
                        >Self Generate Wheel Set</label>
                        <br />
                        <input 
                            type="radio" 
                            id="Random-Generate" 
                            name="testname"
                        ></input>
                        <label for='Random-Generate'>Randomly Generated Wheel Set</label>
                        <br />
                        
                        
                    </div>

                </div>

                <button
                    class='border border-solid rounded-lg border-green-500 p-2 font-bold'
                >Advanced</button>

            </div>

            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default JeffersonCipherForm;