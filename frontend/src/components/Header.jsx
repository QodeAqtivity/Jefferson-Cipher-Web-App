import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
    const donate_img_paths = ['./../public/donate_cat.png', './../public/donate_nocat.png'];
    // let donate_img = './../public/donate_nocat.png';
    const [donateImg, setDonateImg] = useState('./../public/donate_nocat.png');
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleLogOut = () => {
        logout();
    }

    return(
        <div
         className="header" class='flex justify-around font-bold text-5xl py-5'>
            {user && <h3 class='text-xl'>Welcome {user.email}</h3>}
            {/* {console.log('Check here: ', user.email)}; */}
            <Link to='/'>
                <h1>QRYPTIQ AQTIVITIES</h1>
            </Link>
            <h3 class = 'text-xl'>
            {console.log('state is: ', user)}
            {((localStorage).getItem('user') && user && (<button onClick={handleLogOut}>Log Out</button>)) || (<Link to='/login'>Login</Link>)}
            {((localStorage).getItem('user') && user &&(<Link to='/Profile'>Profile</Link>)) || (<Link to='/signup'>Sign Up</Link>)} 
                {/* {((localStorage).getItem('user') && (<button onClick={handleLogOut}>Log Out</button>)) || (<Link to='/login'>Login</Link>)}
                {((localStorage).getItem('user') && (<Link to='/Profile'>Profile</Link>)) || (<Link to='/signup'>Sign Up</Link>)} */}
                {/* {!localStorage.getItem('user') && (<Link to='/login'>Login</Link>)}
                {!localStorage.getItem('user') && <Link to='/signup'>Sign Up</Link>} */}
            </h3>
            
        </div>
    )
}

export default Header;