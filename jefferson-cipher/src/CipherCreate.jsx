import { useState } from 'react'; 
import { onlyAlphaNumericAndSpaces, randomGenerateWheelSet } from './WheelLogic'; 

const CipherCreate = () => {

    const [unencrypted, setUnencrypted] = useState('');
    const [encrypted, setEncrypted] = useState(false);
    
    const handleUnencryptedChange = (event) => {
        console.log(`Test me (event target value): ${event.target.value}`);
        setUnencrypted(event.target.value);
        console.log(`Current unencrypted message is: ${unencrypted}`);
    }


    const clickSubmitHandler = (event) => {
        event.preventDefault();
        console.log(`Submitted unencrypted message is: ${unencrypted}`);

        if ((unencrypted.length >= 2) && (onlyAlphaNumericAndSpaces(unencrypted))){
            const {wheelSet, unencryptedCombo, deliveryCombo} = randomGenerateWheelSet(unencrypted);
            console.log(wheelSet);
            console.log(unencryptedCombo);
            console.log(deliveryCombo);
            setEncrypted(true);
        }
        else{
            alert('Message is not valid!');
        }
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
                    <button onClick={clickSubmitHandler}>Encrypt</button>
                    <br />
                    <input type="radio" id="Self-Generate" name="testname"></input> 
                    <label for='Self-Generate'>Self Generate Wheel Set</label>
                    <br />
                    <input type="radio" id="Random-Generate" name="testname"></input>
                    <label for='Random-Generate'>Randomly Generated Wheel Set</label>

                    <br />
                    {/* {unencrypted && <button id="downloadUnencrypted">Download Unencrypted Message</button>} */}
                    {encrypted && <button id="downloadWheelSet">Download WheelSet</button>}
                    {encrypted && <button id="downloadDeliveryCombo">Download Delivery/Encrypted Combo</button>}
                    {encrypted && <button id="downloadSolutionCombo">Download Solution Combo</button>}

        
                </form>
            </div>
        </div>
        

     );
}
 
export default CipherCreate;