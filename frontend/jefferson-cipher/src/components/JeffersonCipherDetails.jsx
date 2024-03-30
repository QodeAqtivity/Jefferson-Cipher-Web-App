
const JeffersonCipherDetails = ({ jeffersonCipher }) => {
    return (
        <div className="jefferson-cipher-details">
            <h3>Encrypted String: {jeffersonCipher.encrypted}</h3>
            <p><strong>Delivery Combo: </strong>{jeffersonCipher.deliveryCombo}</p>
        </div>
    )
}

export default JeffersonCipherDetails;