import { Link } from 'react-router-dom';
import { useState } from 'react';

const Donate = () => {
    const [donateImg, setDonateImg] = useState('./../public/big_nocat.png');

    const playNiceAudio = () => {
        let nice = document.getElementById('nice')
        nice.play();
    }

    return(
        <div>
            <audio id="nice">
                <source src="./../public/nice.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <div className="flex self-center justify-center"
                onMouseEnter={() => {setDonateImg( './../public/big_cat.png')}}
                onMouseLeave={() => {setDonateImg('./../public/big_nocat.png')}}
            >
                <Link to='/donate'
                    onClick={playNiceAudio}
                >
                    <img 
                    src={donateImg}></img>
                </Link>    
            </div>
        </div>

        
    )
};

export default Donate;