import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/TitusEmedat" target="_blank" rel="noopener noreferrer">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/emediong.titusemedat?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/emedat24?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/emediong-titus-ba3979214" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;
