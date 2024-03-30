
const JeffersonCipherDetails = ({ jeffersonCipher }) => {
    return (
        <div className="jefferson-cipher-details">
            <h3>Encrypted String: {jeffersonCipher.encrypted.replaceAll(',', '')}</h3>
            <p><strong>Delivery Combo: </strong>{jeffersonCipher.deliveryCombo.replaceAll(',', ' ')}</p>
        </div>
    )
}

export default JeffersonCipherDetails;