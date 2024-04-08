
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

    //https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
    function transposeAndFormat() {
        let wheelSet = ''

        for (let j = 0; j < jeffersonCipher.wheelSet[0].order.length; j++){ //current index on wheels
            let horizontal = ''
            for (let i = 0; i < jeffersonCipher.wheelSet.length; i++){ //length of message == # of wheels
                horizontal += jeffersonCipher.wheelSet[i].order[j] + ' '; //for all wheels, at index j
            }
            horizontal += '\n'
            wheelSet += horizontal;
        }

        wheelSet += '\n\n\n';

        
        for (let i = 0; i < jeffersonCipher.wheelSet.length; i++){
            wheelSet += jeffersonCipher.wheelSet[i].id + ' ';
        }

        return wheelSet;
        // return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    const handleWheelSetDownload = (event) => {
        event.preventDefault();

        const formattedWheelSet = transposeAndFormat();

        const blob = new Blob([formattedWheelSet], {type: 'text/plain'});

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
        <div className="jefferson-cipher-card" class='border border-solid rounded-lg border-green-500 p-4 mb-5 mr-96'>
            <div class='mb-4'>
                <h3><strong>Encrypted String:</strong> {jeffersonCipher.encrypted.replaceAll(',', '')}</h3>
                <p><strong>Delivery Combo: </strong><em>{jeffersonCipher.deliveryCombo.replaceAll(',', ' ')}</em></p>
            </div>
            
            <div className="buttons" class='flex justify-evenly'>
                <button 
                    id="downloadWheelSet" 
                    onClick={(event) => handleWheelSetDownload(event)}
                    class='border border-solid rounded-lg border-green-500 p-1.5 italic'
                >Download WheelSet</button>
                <button 
                    id="downloadDeliveryCombo" 
                    onClick={(event) => handleDeliveryComboDownload(event)}
                    class='border border-solid rounded-lg border-green-500 p-1.5 italic ml-4'
                >Download Delivery/Encrypted Combo</button>
                <button 
                    id="downloadSolutionCombo" 
                    onClick={(event) => handleSolutionComboDownload(event)}
                    class='border border-solid rounded-lg border-green-500 p-1.5 italic ml-4'   
                >Download Solution Combo</button>
            </div>
            
        </div>
    )
}

export default JeffersonCipherDetails;