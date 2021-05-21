import React from 'react';
import './Dashboard.css';
import CovidApi from '../api/CovidApi';
import AboutRightCompo from './miniCompo/AboutRightCompo';
import banner from './images/banner4.png';
import icon1 from './images/cough.png';
import icon2 from './images/total.png';
import icon3 from './images/active.png';
import icon4 from './images/headache2.png';
import icon5 from './images/sore-throat.png';
import icon6 from './images/doctor.png';


function About() {
    const doColor = (e) => {
        let box = e.target.classList.value;
        let boxId = e.target.id;
        if(box.includes("newClass")){
            e.target.classList.remove('newClass');
            const iconId = document.querySelector(`#${boxId}-content`);
            iconId.classList.remove(`show-${boxId}`);
        }
        else{
            e.target.classList.add('newClass');
            const iconId = document.querySelector(`#${boxId}-content`);
            iconId.classList.add(`show-${boxId}`);
        }
    }

    return (
        <>
        <div className="box_m">
            <div className="box_m_1">
                <p className="dates">{CovidApi.getTodayDate()}<span>day</span></p>
                <div className="banner about_banner">
                    <img src={banner} alt="banner_image" />
                </div>
                <div className="symptomBox">
                    <div className="qBigBox">
                        <div className="qBox qBox1">
                            <p className="que" id="que1" onClick={doColor}>I am having fever</p>
                        </div>
                        <div className="qBox">
                            <p className="que" id="que2" onClick={doColor}>I am suffering from congestion and running nose</p>
                        </div>
                        <div className="qBox">
                            <p className="que" id="que3" onClick={doColor}>I am feeling difficulty in breathing </p>
                        </div>
                        <div className="qBox">
                        <p className="que" id="que4" onClick={doColor}>I am suffering from dry cough</p>                
                        </div>
                        <div className="qBox">
                        <p className="que" id="que5" onClick={doColor}>I am feeling body aches, fatigue and pressure</p>                
                        </div>
                        <div className="qBox qBox6">
                        <p className="que" id="que6" onClick={doColor}>I am feeling regular headaches</p>               
                        </div>
                    </div>
                    <div className="iconsBox">
                        <div className="icons icon2" id="que1-content">
                            <img src={icon2} alt="symptomIcon" />
                        </div>
                        <div className="icons icon3" id="que2-content">
                            <img src={icon3} alt="symptomIcon" />
                        </div>
                        <div className="icons" id="que3-content">
                            <img src={icon1} alt="symptomIcon" />
                        </div>
                        <div className="icons icon4" id="que4-content">
                            <img src={icon5} alt="symptomIcon" />
                        </div>
                        <div className="icons icon5" id="que5-content">
                            <img src={icon6} alt="symptomIcon" />
                        </div>
                        <div className="icons icon6" id="que6-content">
                            <img src={icon4} alt="symptomIcon" />
                        </div>
                        <p className="icon-text">* If you have any of these two symptoms then you may have covid</p>
                    </div>

                </div>
                
            </div>
        </div>
        <div className="box_r">
            <AboutRightCompo />
        </div>
        </>
    )
}

export default About
