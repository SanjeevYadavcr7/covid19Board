import React from 'react'
import './RightCompo.css';
import {Link} from 'react-router-dom';
import china from '../images/bharat.jpg';
import vaccine from '../images/covidSheild.jpg';
import hands from '../images/aarogya.jpg';
import crowd from '../images/sputnik.jpg';

function RightCompo() {
    return (
        <div className="RightCompo">
            <div className="helplineBox no_display">
                <p className="head-text">Contact HelpLines</p>
                <div className="numBox">
                    <div className="numBox_icon"><p>G</p></div>
                    <div className="numBox_num"><p>ncov2019@gov.in<br/>
                        <span className="small-text">Global helpline</span></p>
                    </div>
                </div>
                <div className="numBox">
                    <div className="numBox_icon sec"><p className="sec-text">H</p></div>
                    <div className="numBox_num"><p>+91-11-23978046<br/>
                        <span className="small-text">Helpline number</span></p>
                    </div>
                </div>
                <div className="numBox">
                    <div className="numBox_icon third"><p className="third-text">P</p></div>
                    <div className="numBox_num"><p>http://needplasma.in/<br/>
                        <span className="small-text">Plasma helpline</span></p>
                    </div>
                </div>
                <div className="numBox fourthBox">
                    <div className="numBox_icon fourth"><p className="fourth-text">V</p></div>
                    <div className="numBox_num"><p>+91-9013151515<br/>
                        <span className="small-text">Vaccine helpline number</span></p>
                    </div>
                </div>
            </div>
            <div className="newsBox snewsBox no_display">
                <p className="head-text">Latest News</p>
                <Link className="newsBox_link" to="/news">see more</Link>
                <div className="news">
                    <img src={hands} alt="hands"/>
                    <p>
                        Use aarogya setu app for covid related official news  
                    </p>
                </div>
                <div className="news">
                    <img src={vaccine} alt="vaccine"/>
                    <p>
                        Doctors advices 12 weeks gap between two covidsheild doses
                    </p>
                </div>
                <div className="news">
                    <img src={china} alt="china"/>
                    <p>
                        DCGI approves clinical trials of covaxin on 2-18 years old
                    </p> 
                </div>
                <div className="news">
                    <img src={crowd} alt="news"/>
                    <p>Sputnik requires only 20 days gap between two doses</p>
                </div>
            </div>
        </div>
    )
}

export default RightCompo
