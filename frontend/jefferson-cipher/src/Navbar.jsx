import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Qoding Aqitivity Cryptic Ciphers</h1>
                </Link>
                <Link to="/ciphers">
                    <h3>Ciphers</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
            </div>
        </header>        
    )
}

export default Navbar;


{/* <nav className="navbar"> 
    <h1> Qoding Aqtivity Jefferson Cipher </h1>
    <div className="container">
        <a href="/create">Create Jefferson Ciphers</a>
        <a href="/crack">Crack Jefferson Ciphers</a>
        <a href="/view">View Jefferson Ciphers</a>
    </div>
</nav> */}
        