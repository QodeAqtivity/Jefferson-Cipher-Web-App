
const JeffersonCipherDetails = ({ jeffersonCipher }) => {
    return (
        <div className="jefferson-cipher-details">
            <h4>{jeffersonCipher.encrypted}</h4>
            <p><strong>Delivery Combo: </strong>{jeffersonCipher.deliveryCombo}</p>
        </div>
    )
}

export default JeffersonCipherDetails;