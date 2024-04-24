import { useCaesarCiphersContext } from "../hooks/useCaesarsCipherContext";
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

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

    const { dispatch } = useCaesarCiphersContext()

    const handleDelete = async () => {
        const response = await fetch('/api/caesar-cipher/' + caesarCipher._id, {
            method: 'DELETE'
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_CAESAR_CIPHER', payload: json});
        }
    };

    
    return (
        <div className="border border-solid rounded-lg border-green-500 p-4 mb-5 mr-96 flex justify-between">
            <div className="caesar-cipher-card" class=''>
                <div className="caesar-cipher-details" class='p-2 mb-5'>
                    <h3 class='font-bold'>Encrypted String: {caesarCipher.encrypted.replaceAll(',', '')}</h3>
                    <p><em>{formatDistanceToNow(new Date(caesarCipher.createdAt), { addSuffix: true })}</em></p>
                    {/* <h3>{caesarCipher.encrypted.replaceAll(',', '')}</h3> */}
                </div>
                <div className="buttons" class='flex justify-evenly mb-2'>
                    <button 
                        id="downloadUnencrypted" 
                        onClick={(event) => handleUnencryptedDownload(event)}
                        class='border border-solid rounded-lg border-green-500 p-1.5 italic'
                    >Download Unencrypted</button>
                    <button 
                        id="downloadEncrypted" 
                        onClick={(event) => handleEncryptedDownload(event)}
                        class='border border-solid rounded-lg border-green-500 p-1.5 italic ml-4'
                    >Download Encrypted</button>
                    <button
                        id="downloadCaesarShift" 
                        onClick={(event) => handleCipherShiftDownload(event)}
                        class='border border-solid rounded-lg border-green-500 p-1.5 italic ml-4'
                    >Download Cipher Shift</button>
                </div>
            </div>

            <span 
                class="material-symbols-outlined"
                onClick={(event) => handleDelete(event)}
            >
                delete
            </span>
        </div>
       
    )
}

export default caesarCipherDetails;