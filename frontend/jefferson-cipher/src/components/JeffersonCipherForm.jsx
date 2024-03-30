import { useState } from 'react';

const JeffersonCipherForm = () => {
    const [unencrypted, setUnencrypted] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

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
        <form className='create' onSubmit={handleSubmit}>
            <h3>Create New Jefferson Cipher</h3>
            <label for="message">Message</label>
            {/* <input type="text" id="message"></input> */}
            <textarea 
                value={unencrypted} 
                onChange={(event) => setUnencrypted(event.target.value)} 
                id="message" 
                name="message" 
                required
            ></textarea>
            <button 
                onClick={handleSubmit}
            >Encrypt</button>
            <br />
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
            {/* {unencrypted && <button id="downloadUnencrypted">Download Unencrypted Message</button>} */}
            {/* {encrypted && <button id="downloadWheelSet">Download WheelSet</button>}
            {encrypted && <button id="downloadDeliveryCombo" onClick={(event) => handleDeliveryComboDownload(event)}>Download Delivery/Encrypted Combo</button>}
            {encrypted && <button id="downloadSolutionCombo" onClick={(event) => handleSolutionComboDownload(event)}>Download Solution Combo</button>} */}

            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default JeffersonCipherForm;