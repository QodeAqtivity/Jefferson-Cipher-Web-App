
const caesarCipherDetails = ({ caesarCipher }) => {

    const handleEncryptedDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([caesarCipher.encrypted], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Caesar Cipher Encrypted';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    const handleUnencryptedDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([caesarCipher.unencrypted], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Caesar Cipher Unencrypted';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    const handleCipherShiftDownload = (event) => {
        event.preventDefault();
    
        const blob = new Blob([caesarCipher.shift], { type: 'text/plain'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');

        link.href = url;
        link.download = 'Caesar Shift';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    
    return (
        <div className="caesar-cipher-details">
            <h3>Encrypted String: {caesarCipher.encrypted.replaceAll(',', '')}</h3>
            <button id="downloadUnencrypted" onClick={(event) => handleUnencryptedDownload(event)}>Download Unencrypted</button>
            <button id="downloadEncrypted" onClick={(event) => handleEncryptedDownload(event)}>Download Encrypted</button>
            <button id="downloadCaesarShift" onClick={(event) => handleCipherShiftDownload(event)}>Download Cipher Shift</button>
        </div>
    )
}

export default caesarCipherDetails;