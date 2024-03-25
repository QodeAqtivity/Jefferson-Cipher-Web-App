const CipherCreate = () => {


    return ( 
        <div className="main-create">
            <h1>Create a Cipher</h1>
            <hr />

            <div className="message-create">
                <form>
                    <label for="message">Message</label>
                    <input type="text" id="message"></input>
                    <button onClick={clickHandler}>Submit</button>
                    <br />
                    <input type="radio" id="Self-Generate" name="testname"></input> 
                    <label for='Self-Generate'>Self Generate Wheel Set</label>
                    <br />
                    <input type="radio" id="Random-Generate" name="testname"></input>
                    <label for='Random-Generate'>Randomly Generated Wheel Set</label>
                    
        
                </form>
            </div>
        </div>
        

     );
}
 
export default CipherCreate;