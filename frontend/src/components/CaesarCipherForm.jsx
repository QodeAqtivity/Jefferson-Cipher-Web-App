import { useState, useEffect } from 'react';
import * as regexes from '../Regexes';
import { useCaesarCiphersContext } from '../hooks/useCaesarsCipherContext';
import { useAuthContext } from '../hooks/useAuthContext';

const CaesarCipherForm = (props) => {
    const { dispatch } = useCaesarCiphersContext();
    const [unencrypted, setUnencrypted] = useState('');
    const [shift, setShift] = useState(0);
    let regex = null;
    const [visibility, setVisibility] = useState('');
    const [error, setError] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const { user, dispatch: authDispatch } = useAuthContext();
    // const [ _user, set_User] = useState(user);

    const inputValidation = () => {
        console.log(`regex is: ${regex}`);
        let alertMessage = 'Message is not valid!';
        // if ((unencrypted.length < 1) || (!regex(unencrypted))){
        if (unencrypted.length < 1) {
            alertMessage += '  Must only contain characters within set specified AND contain at least 2 characters';
            alert(alertMessage);
            return false;
        } else if (emptyFields.length > 0) {
            for (emptyField in emptyFields) {
                // conditional for unencrypted length
                // conditional for shift
                // conditional for regex
                console.log('for loop :', emptyField)
            }
            return false;
        }
        return true;
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!inputValidation()) {
            return;
        }

        let validUser = user;
        let caesarCipher = {unencrypted, shift, visibility};

        if (validUser) {
            const caesarCipherCreateValidUser = async () => {

                const response = await fetch('/api/caesar-cipher',
                    {
                        method: 'POST',
                        body: JSON.stringify(caesarCipher),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${user.token}`
                        }
                    }
                );
            
                const json = await response.json();
        
                if (!response.ok) { //could be a number of reasons, bad input, miscommunication with server, invalid JWT, etc
                    console.log('Failed to Add New Caesar Cipher', json);            
                    setError(json.error);
    
                    if (json.emptyFields == undefined) {
                        setEmptyFields([]);  
                    } else {
                        setEmptyFields(json.emptyFields);
                    }
    
                    if (json.error == 'Request is not authorized (Invalid JWT)') {
                        return -1
                    }
                } else {
                    setUnencrypted('');
                    setError('');
                    setEmptyFields([]);
                    console.log('New Caesar Cipher Added', json);
                    alert('New Caesar Cipher Added');
                    dispatch({type: 'CREATE_CAESAR_CIPHER', payload: json});
                    // props.setcc([json, ...props.cc])
                };
            }

            if (await caesarCipherCreateValidUser() == -1) {
                validUser = null; //supposed valid validUser is not valid (invalid JWT)
                authDispatch({type: 'LOGOUT'}); //global auth context
                localStorage.removeItem('user'); //local storage JWT
                alert('Invalid JWT.  You have been logged out.');
                return;
            }
        }

        if (!validUser) {
            const caesarCipherCreateInvalidUser = async() => {
                const response = await fetch('/api/caesar-cipher/public',
                    {
                        method: 'POST',
                        body: JSON.stringify(caesarCipher),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
            
                const json = await response.json();
        
                if (!response.ok) {
                    console.log('Failed to Add New Caesar Cipher', json);            
                    setError(json.error);
                    setEmptyFields(json.emptyFields);
                } else {
                    setUnencrypted('');
                    setError('');
                    setEmptyFields([]);
                    console.log('New Caesar Cipher Added', json);
                    alert('New Caesar Cipher Added');
                    dispatch({type: 'CREATE_CAESAR_CIPHER', payload: json});
                    // props.setcc([json, ...props.cc])
                }
            }

            setVisibility('public');  // react state updates are async
            caesarCipher = {unencrypted, shift, visibility: 'public'};
            caesarCipherCreateInvalidUser();
        }
    };


    return (
        <div className="caesar-cipher" class='border border-solid rounded-lg border-green-500 p-5 mr-5 flex max-h-96 min-w-max' >
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
                    class={`mb-3 border bg-gray-800 max-h-12 ${emptyFields.includes('unencrypted') ? 'border-red-700' : ''}`}
                ></textarea>
                <label for="shift" class='italic'>Shift Amount</label>
                <input 
                    type="number" 
                    min="0" 
                    step="1"
                    onChange={(event) => setShift(event.target.value)}
                    class={`mb-3 border bg-gray-800 ${emptyFields.includes('shift') ? 'border-red-700' : ''}`}
                >
                </input>
                <button 
                    onClick={handleSubmit}
                    class='border border-solid rounded-lg border-green-500 mb-5 p-2 font-bold'
                >Encrypt</button>
                <div class=''>
                    <h3><em>Visibility</em></h3>
                    <input
                        type='radio'
                        name='visibility'
                        value='Public'
                        onClick={() => {
                            setVisibility('public');
                        }}
                    />
                    <label class='pl-1 pr-2'>Public</label>
                    <input
                        type='radio'
                        name='visibility'
                        value='Registered'
                        onClick={() => {
                            setVisibility('registered');
                        }}
                    />
                    <label class='pl-1 pr-2'>Registered</label>
                    <input
                        type='radio'
                        name='visibility'
                        value='Private'
                        onClick={() => {
                            setVisibility('private');
                        }}
                    />
                    <label class='pl-1 pr-2'>Private</label>
                </div>
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
            
            {emptyFields && <p>{`${error}: ${emptyFields.map((field) => field)}`}</p>}
        </div>
    )
};

export default CaesarCipherForm;