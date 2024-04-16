import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (

        <nav className="main-navbar" class='border border-solid rounded-lg border-green-500 mb-5'>
            <div className="container" class="flex flex-row justify-around italic text-xl font-bold">
                
                <Link to="/ciphers">
                    <h3>Ciphers</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
                <Link to="/donate">
                    <h1>Donate</h1>
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
        