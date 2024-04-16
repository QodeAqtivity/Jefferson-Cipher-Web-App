import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const donate_img_paths = ['./../public/donate_cat.png', './../public/donate_nocat.png'];
    // let donate_img = './../public/donate_nocat.png';
    const [donateImg, setDonateImg] = useState('./../public/donate_nocat.png');
    return(
        <div
         className="header" class='flex justify-around font-bold text-5xl py-5'>
            <Link to='/'>
                <h1>QODING AQTIVITY'S CIPHERS</h1>
            </Link>
            
        </div>
    )
}

export default Header;