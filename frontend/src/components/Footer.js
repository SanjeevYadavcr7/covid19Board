import React from 'react';
import logo from './images/like.png';
import './Dashboard.css';

function Footer() {
    return (
        <div className="footers">
            <div className="footer_text">
                <img src={logo} alt="logo"/>
                <p>Designed and developed to help & support the people</p>
            </div>
            <p className="phantom">@phantom7 devs</p>
        </div>
    )
}

export default Footer

