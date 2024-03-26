import { useState } from 'react'; 
import { onlyAlphaNumericAndSpaces, randomGenerateWheelSet } from './WheelLogic'; 

const CipherCreate = () => {

    const [unencrypted, setUnencrypted] = useState(''); //user input message
    const [encrypted, setEncrypted] = useState(false); //if there is an encrypted message (ever encrypted in this session)

    let wSet;
    let solCombo;
    let delCombo;
    
    const handleUnencryptedChange = (event) => {
        console.log(`Test me (event target value): ${event.target.value}`);
        setUnencrypted(event.target.value);
        console.log(`Current unencrypted message is: ${unencrypted}`);
    }


    const clickSubmitHandler = (event) => {
        console.log(`Event object is: ${event}`);
        console.log(`Submitted unencrypted message is: ${unencrypted}`);

        if ((unencrypted.length >= 2) && (onlyAlphaNumericAndSpaces(unencrypted))){
            const {wheelSet, solutionCombo, deliveryCombo} = randomGenerateWheelSet(unencrypted);
            // wSet = wheelSet;
            solCombo = solutionCombo.replaceAll(',', ' ');
            delCombo= deliveryCombo.replaceAll(',', ' ');
            console.log(solCombo);
            console.log(delCombo);

            setEncrypted(true);
        }
        else{
            alert('Message is not valid!');
        }

        event.preventDefault();
    }

    const handleSolutionComboDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([solCombo], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Solution Combo';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
        
    };

    const handleDeliveryComboDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([delCombo], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Delivery Combo';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
        
    };





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
                    {encrypted && <button id="downloadDeliveryCombo" onClick={(event) => handleDeliveryComboDownload(event)}>Download Delivery/Encrypted Combo</button>}
                    {encrypted && <button id="downloadSolutionCombo" onClick={(event) => handleSolutionComboDownload(event)}>Download Solution Combo</button>}

        
                </form>
            </div>
        </div>
        

     );
}
 
export default CipherCreate;