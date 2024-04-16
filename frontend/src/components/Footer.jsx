import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
    const donate_img_paths = ['./../public/donate_cat.png', './../public/donate_nocat.png'];
    // let donate_img = './../public/donate_nocat.png';
    const [donateImg, setDonateImg] = useState('./../public/donate_nocat.png');
    return(
        <div
         className="header" class='flex justify-around font-bold text-xl border-t border-solid border-green-500'>
            
            <div className="py-3">
                <Link to='/'>
                    <h4>Home</h4>
                </Link>
                <Link to='/ciphers'>
                    <h4>Ciphers</h4>
                </Link>
                <Link to='/about'>
                    <h4>About</h4>
                </Link>
                <Link to='/contact'>
                    <h4>Contact</h4>
                </Link>
            </div>
            
            <div className='py-3'>
                <Link to='/documentation'>
                    <h4>Documentation</h4>
                </Link>
                <Link to='/donate'>
                    <h4>Donate</h4>
                </Link>
                <Link to='/roadmap'>
                    <h4>Roadmap</h4>
                </Link>
                <Link to='/discord-bot'>
                    <h4>Discord Bot</h4>
                </Link>
            </div>

            <div className='py-3'>
                <Link to='/mobile-app'>
                    <h4>Mobile App</h4>
                </Link>
                <Link to='/nodes'>
                    <h4>Nodes</h4>
                </Link>
                <Link to='/tos'>
                    <h4>Terms of Service</h4>
                </Link>
                <Link to='/discord'>
                    <h4>Discord</h4>
                </Link>
            </div>

            <div className="flex self-center"
                onMouseEnter={() => {setDonateImg( './../public/donate_cat.png')}}
                onMouseLeave={() => {setDonateImg('./../public/donate_nocat.png')}}
            >
                <Link to='/donate'>
                    <img class='max-w-xs'
                    src={donateImg}></img>
                </Link>    
            </div>
            
        </div>
    )
}

export default Footer;