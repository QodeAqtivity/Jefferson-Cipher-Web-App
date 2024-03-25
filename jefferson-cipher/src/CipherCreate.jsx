import { useState } from 'react'; 
import { randomGenerateWheelSet } from './WheelLogic'; 

const CipherCreate = () => {

    const [unencrypted, setUnencrypted] = useState('');
    
    const handleUnencryptedChange = (event) => {
        console.log(`Test me (event target value): ${event.target.value}`);
        setUnencrypted(event.target.value);
        console.log(`Current unencrypted message is: ${unencrypted}`);
    }


    const clickSubmitHandler = (event) => {
        event.preventDefault();
        console.log(`Submitted unencrypted message is: ${unencrypted}`);
        randomGenerateWheelSet(unencrypted);
    }



    return ( 
        <div className="main-create">
            <h1>Create a Cipher</h1>
            <hr />

            <div className="message-create">
                <form>
                    <label for="message">Message</label>
                    {/* <input type="text" id="message"></input> */}
                    <textarea value={unencrypted} onChange={handleUnencryptedChange} id="message" name="message" required></textarea>
                    <button onClick={clickSubmitHandler}>Submit</button>
                    <br />
                    <input type="radio" id="Self-Generate" name="testname"></input> 
                    <label for='Self-Generate'>Self Generate Wheel Set</label>
                    <br />
                    <input type="radio" id="Random-Generate" name="testname"></input>
                    <label for='Random-Generate'>Randomly Generated Wheel Set</label>
                    
        
                </form>
            </div>
        </div>
        

     );
}
 
export default CipherCreate;