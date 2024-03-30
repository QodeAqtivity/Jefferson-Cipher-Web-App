
const JeffersonCipherDetails = ({ jeffersonCipher }) => {

    const handleDeliveryComboDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([jeffersonCipher.deliveryCombo], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Delivery Combo';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    const handleSolutionComboDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([jeffersonCipher.solutionCombo], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Solution Combo';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    const handleWheelSetDownload = (event) => {
        event.preventDefault();

        console.log('stak')
        console.log(jeffersonCipher.wheelSet[0]);
        jeffersonCipher.wheelSet[0].map((wheel) => {
            console.log(wheel[0]);
        })

        const blob = new Blob([jeffersonCipher.wheelSet], {type: 'text/plain'});

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');

        link.href = url;
        link.download = 'Wheel Set';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }

    return (
        <div className="jefferson-cipher-details">
            <h3>Encrypted String: {jeffersonCipher.encrypted.replaceAll(',', '')}</h3>
            <p><strong>Delivery Combo: </strong>{jeffersonCipher.deliveryCombo.replaceAll(',', ' ')}</p>
            <button id="downloadWheelSet" onClick={(event) => handleWheelSetDownload(event)}>Download WheelSet</button>
            <button id="downloadDeliveryCombo" onClick={(event) => handleDeliveryComboDownload(event)}>Download Delivery/Encrypted Combo</button>
            <button id="downloadSolutionCombo" onClick={(event) => handleSolutionComboDownload(event)}>Download Solution Combo</button>
        </div>
    )
}

export default JeffersonCipherDetails;