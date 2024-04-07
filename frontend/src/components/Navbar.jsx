import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (

        <nav className="main-navbar">
            <div className="container" class="flex flex-row justify-around">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/ciphers">
                    <h3>Ciphers</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
            </div>
        </nav>
     
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
        