import React from 'react'
import './Dashboard.css';
import CovidApi from '../api/CovidApi';
import NewsRightCompo from './miniCompo/NewsRightCompo';
import news1 from './images/news1.jpg'; 
import news2 from './images/images.jpg';
import news3 from './images/images2.jpg';
import news4 from './images/modi.jfif';
import news5 from './images/joeBiden.jfif';
import news6 from './images/images5.jpg';
import news7 from './images/images6.jpg';
import news8 from './images/images7.jpg';

function News() {
    return (
    <>
        <div className="box_m">
            <div className="box_m_1">
                <p className="newspageTitle">Top Covid-19 News</p>
                <p className="dates_news">{CovidApi.getTodayDate()}<span>day</span></p>
                <div className="newsBox">
                    <div className="newsBox1">
                        <div className="newsBox11">
                            <img src={news1} alt="news1"/>
                            <p>
                                <span className="newsTag">Important</span><br className="newsTag-break"/><br/>
                                <span className="newsPara">Covid will not hit peak after mid-May, says Delhi HC, asks center about its preparedness</span>
                                <br/>
                                <span className="newsSmallPara">
                                    Over 25.52 lakh cases are currently active while over 1.38 crore people have recovered after testing positive
                                </span>
                            </p>
                        </div>
                        <div className="newsBox12">
                            <div className="newsBox121">
                                <img src={news2} alt="news2" />
                                <p className="newsSmallPara">
                                    <strong>AIIMS Chief</strong> : Lock Down areas with over 10% positivity
                                </p>
                            </div>
                            <div className="newsBox122">
                                <img src={news3} alt="news3" />
                                <p className="newsSmallPara">
                                    Airfares soar, private jets in demand as rich indians flee covid 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="newsBox2">
                        <div className="smallNewsBox2">
                            <img src={news5} alt="news4" />
                            <p className="newsSmallPara">
                                <span className="newsTag greenT">International</span>
                                Joe Biden speaks to PM says 'India was there for us'
                                                            </p>
                        </div>
                        <div className="smallNewsBox2">
                            <img src={news6} alt="news4" />
                            <p className="newsSmallPara">
                                <span className="newsTag orangeT">Medical</span>
                                AstraZeneca covid vaccine benifits increase with age
                            </p>
                        </div>
                        <div className="smallNewsBox2">
                            <img src={news4} alt="news5" />
                            <p className="newsSmallPara">
                                <span className="newsTag">Latest</span>
                                Australian article is baseless says Indian government
                            </p>
                        </div>
                       
                    </div>
                    <div className="newsBox3">
                        <div className="newsBox32">
                            <img src={news7} alt="news7" />
                            <span className="newsTag">Important</span><br/><br/>
                            <p>
                                India is staring at a big coronavirus vaccine problem
                            </p>
                        </div>
                        <div className="newsBox31">
                            <img src={news8} alt="news8-img" />
                            <p>
                                <span className="newsTag">Important</span><br/><br/>
                                <span className="newsPara">To ensure oxygen supply india lifts oxygen from singapore</span>
                                <br/>
                                <span className="newsSmallPara">
                                    Oxygen tankers are being airlifted from Singapore to meet demand amid supplies running low in the country. Union Minister tweeted earlier in the day today.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="box_r">
            <NewsRightCompo />
        </div>
    </>
    )
}

export default News
