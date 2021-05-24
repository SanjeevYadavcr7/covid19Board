import React from 'react'
import './RightCompo.css';

function NewsRightCompo() {
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
            <div className="newsBox no_display">
                <p className="head-text">Latest News</p>
                <div className="news">
                    <div className="newsDot">
                        <span className="dot1"><span className="dot12"></span></span>
                    </div>
                    <p>Govt. requests to rely on official channels for covid-19</p>
                </div>
                <div className="news">
                    <div className="newsDot">
                        <span className="dot3"><span className="dot32"></span></span>
                    </div>
                    <p>Humankind Group supports for plasma, beds and more</p>
                </div>
                <div className="news">
                    <div className="newsDot">
                        <span className="dot4"><span className="dot42"></span></span>
                    </div>
                    <p>Aarogya setu app joins the army to fight covid-19</p> 
                </div>
                <div className="news">
                    <span className="dot"><span className="dot2"></span></span>
                    <p>Hospitals buckle under record surge</p>
                </div>
            </div>
        </div>
    )
}

export default NewsRightCompo
