import { Link } from 'react-router-dom';

const CipherNavbar = () => {
    
    return (
        <header>
            <nav>
                <div className="container">
                    <Link to="/ciphers/jefferson-cipher">
                        <h3>Jefferson Cipher</h3>
                    </Link>
                    <Link to="/ciphers/vigenere-cipher">
                        <h3>Vigenere Cipher</h3>
                    </Link>
                    <Link to="/ciphers/caesar-cipher">
                        <h3>Caesar Cipher</h3>
                    </Link>
                </div>
            </nav>
        </header>        
    )
}

export default CipherNavbar;
