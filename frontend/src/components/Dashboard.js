import React, {Component} from 'react';
import CovidApi from '../api/CovidApi';
import { covertToLakhs } from '../util';
import CovidGraph from './Chart/Covidgraph';
import './Dashboard.css'
import RightCompo from './miniCompo/RightCompo';
import banner from './images/banner1.png';
import activep from './images/active.png';
import deceased from './images/deceased.png';
import recover from './images/recovered.png';
import total from './images/total3.png';

class main extends Component{
    render(){
        const gbl = '';
        const {country, countryList, isFetching, data2} = this.props;
        const {cases,recovered,deaths,active,todayCases,todayDeaths,todayRecovered} = data2;
        return(
            <>
                <div className="box_m"> 
                    <div className="box_m_1">
                        <p className="dates">
                            {CovidApi.getTodayDate()}
                            <span>day</span>
                        </p>
                        <div className="banner banner_dashboard">
                            <img src={banner} alt="banner_image" />
                        </div>
                        <div className="box_m_info">
                            <p className="box_title">
                                <span>Covid Pandemic Status</span>
                            {/* <form> */}
                                <select className="selectBox" onChange={(e) => this.props.onButtonClick(e.target.value)}>
                                    <option value={gbl}>{(country) ? country : 'Global'}</option>
                                    <option value={gbl}>Global</option>
                                    {countryList.map((country, i) => 
                                        (country !== "Belgium" && country !== "Burma") ? 
                                        <option key={i} value={country}>{country}</option>
                                    : '' )}
                                </select>
                            {/* </form> */}
                            </p>

                            <div className="boxes">
                                <div className="box_m_info_4">
                                    <div className="box_m_info_4_l">
                                        <img src={total} alt="total" />
                                        <p className="small_title">CONFIRMED</p>
                                    </div>
                                    <div className="box_m_info_4_r">
                                        <p className="count">{ (!isFetching) ? covertToLakhs(cases) : ''}</p>
                                        <p className="increment_count"><span>+ </span>
                                            {parseInt(todayCases/1000)}.{parseInt((todayCases%1000)/100)}k
                                        </p>
                                    </div>
                                </div>


                            {/* /////////// */}

                            <div className="box_m_info_1">
                                <div className="box_m_info_1_l">
                                    <img src={activep} alt="active" />
                                    <p className="small_title">ACTIVE</p>
                                </div>
                                <div className="box_m_info_1_r">
                                    <p className="count">{ (!isFetching) ? covertToLakhs(active) : ''}</p>
                                    <p className="increment_count"><span>+ </span>
                                        {parseInt(todayCases/1000)}.{parseInt((todayCases%1000)/100)}k
                                    </p>
                                </div>
                            </div>

                            {/* /////////// */}


                            <div className="box_m_info_2">
                                <div className="box_m_info_2_l">
                                    <img src={recover} alt="recovered" />
                                    <p className="small_title">RECOVERED</p>
                                </div>
                                <div className="box_m_info_2_r">
                                    <p className="count">{ (!isFetching) ? covertToLakhs(recovered) : ''}</p>
                                    <p className="increment_count"><span>+ </span>
                                    {parseInt(todayRecovered/1000)}.{parseInt((todayRecovered%1000)/100)}k</p>
                                </div>
                            </div>
                            <div className="box_m_info_3">
                            <div className="box_m_info_3_l">
                                    <img src={deceased} alt="deceased" />
                                    <p className="small_title">DECEASED</p>
                                </div>
                                <div className="box_m_info_3_r">
                                    <p className="count">{(!isFetching) ? covertToLakhs(deaths) : ''}</p>
                                    <p className="increment_count"><span>+ </span>
                                    {parseInt(todayDeaths/1000)}.{parseInt((todayDeaths%1000)/100)}k</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ChartComp">
                            <CovidGraph country={country} />
                        </div>
                    </div>
                </div>
                <div className="box_r">
                    <RightCompo />
                </div>
                </>
        )
    }
}

export default main;