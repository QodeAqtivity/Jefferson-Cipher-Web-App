import { Link } from 'react-router-dom';
import { useState } from 'react';

const CipherNavbar = () => {

    const [cipherHover, useCipherHover] = useState('');

    
    const caesarDescription = 'The Caesar Cipher is a Mono-Alphabetic Substitution Cipher.  The algorithm consist of selecting a shift amount (an integer) and substituting each character with the character that is the shift amount away (usually to the right).'
    const jeffersonDescription = 'The Jefferson Cipher is a Poly-Alphabetic Disk-Based Cipher.  There exists a set of wheels, at least as many as there are characters in the plaintext.  Each wheel has the same set of viable characters (an alphabet), but are independently, randomly arranged.  The message sender determines the solution combination of wheels (which may be less than the total amount of wheels if the plaintext has less characters than there are wheels in the wheelset), and arranges/rotates the wheel to spell the plaintext in a row.  Then, the sender picks a different row (at random) that is not the plaintext row to send as the cipher text.';
    const vigenereDescription = 'The Vigenere Cipher is a Poly-Alphabetic Substitution Cipher. The sender determines the Vigenere Table to use, usually the standard English alphabet, and a keyword to encrypt the plaintext respective to.  There are no restrictions on length of the keyword, but the longer (and more unique and less predictiable) the kewyord, the more secure the cipher. The keyword is repeated for the length of message, if the keyword is longer than the mesage itself then only the respective portion of the keyword will be used. The top row of the Vigenere Table is keyword index and the left column of the Vigenere Table is the plaintext index.  The encrypted character is derived from finding the intersecting cell of the current plaintext character and its respective keyword character. ';

    return (
        <div class='flex justify-between'>
            <div class='inline-flex flex-col pl-10 text-2xl font-bold'>
                <Link to="/ciphers/caesar-cipher" class='flex justify-center border rounded-lg border-green-500 p-3 mb-5'
                    onMouseEnter={() => {useCipherHover('Caesar Cipher')}}
                    // onMouseLeave={() => {useCipherHover('')}}
                >
                    <h3>Caesar Cipher</h3>
                </Link>
                <Link to="/ciphers/jefferson-cipher" class='flex justify-center border rounded-lg border-green-500 p-3 mb-5'
                    onMouseEnter={() => {useCipherHover('Jefferson Cipher')}}
                    // onMouseLeave={() => {useCipherHover('')}}                
                >
                    <h3>Jefferson Cipher</h3>
                </Link>
                <Link to="/ciphers/vigenere-cipher" class='flex justify-center border rounded-lg border-green-500 p-3 mb-5'
                    onMouseEnter={() => {useCipherHover('Vigenere Cipher')}}
                    // onMouseLeave={() => {useCipherHover('')}}
                >
                    <h3>Vigenere Cipher</h3>
                </Link>
                
            </div>
            {
                cipherHover &&
                <div class='flex flex-col justify-center items-center border rounded-lg border-green-500 p-3 mr-10 max-w-5xl'>
                    <h4 class='font-bold text-3xl mb-5'>{cipherHover}</h4>
                    {
                        cipherHover === 'Caesar Cipher' &&
                        <div class='flex flex-col items-center'>
                            <iframe
                                class='mb-5 ' 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/fR8rVR72a6o" 
                                title="Caesar Cipher Video" 
                                // frameborder="0" 
                                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                // allowfullscreen
                            ></iframe>

                            <p class='italic'>{caesarDescription}</p>
                        </div>
                    }
                    {
                        cipherHover === 'Jefferson Cipher' &&
                        <div class='flex flex-col items-center'>
                            <iframe
                                class='mb-5 ' 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/FVcSk6TYUI8" 
                                title="Jefferson Cipher Video" 
                                // frameborder="0" 
                                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                // allowfullscreen
                            ></iframe>

                            <p class='italic'>{jeffersonDescription}</p>
                        </div>
                    }
                    {
                        cipherHover === 'Vigenere Cipher' &&
                        <div class='flex flex-col items-center'>
                            <iframe
                                class='mb-5 ' 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/rccRQcyKB5g" 
                                title="Vigenere Cipher Video" 
                                // frameborder="0" 
                                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                // allowfullscreen
                            ></iframe>

                            <p class='italic'>{vigenereDescription}</p>
                        </div>
                    }
                </div>
            }
            
        </div>

    )
}

export default CipherNavbar;
