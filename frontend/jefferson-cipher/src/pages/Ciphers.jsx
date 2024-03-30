
import JeffersonCipher from "./JeffersonCipher";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CipherNavbar from "./../components/CipherNavbar";
import VigenereCipher from "./VigenereCipher";
import CaesarCipher from "./CaesarCipher";

const Ciphers = () => {

    return(
        <div className="testdiv">
            <CipherNavbar />

        </div>
        
    )
};

export default Ciphers;