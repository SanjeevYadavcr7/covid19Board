import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/like.png';
import './Dashboard.css';

function Footer() {
    return (
        <div className="footers">
            <div className="footer_text">
                <img src={logo} alt="logo"/>
                <p><span>Designed and developed</span> to help & support the people</p>
            </div>
            <p className="phantom">
                <Link to="/profile" target="_blank">
                    @phantom7 devs
                </Link>
            </p>
        </div>
    )
}

export default Footer

