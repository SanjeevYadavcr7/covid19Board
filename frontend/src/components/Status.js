import React,{useState} from 'react'
import './Dashboard.css';
import CovidApi from '../api/CovidApi';
import banner from './images/banner3.png';
import searchIcon from './images/search.svg';
import SearchCompo from './miniCompo/SearchCompo';
import RightCompo from './miniCompo/StatusRightCompo';

function Status(props) {
    const {isFetching, data2,countryData} = props;
    const [countrySearch,setCountrySearch] = useState('');
    
    return (
        <>
        <div className="box_m"> 
                    <div className="box_m_1">
                        <p className="dates">{CovidApi.getTodayDate()}<span>day</span></p>
                        <div className="banner banner_status">
                            <img src={banner} alt="banner_image" />
                        </div>
                        <div className="searchBox">
                            <div className="searchInputBox">
                                <img src={searchIcon} className="imgIcon" alt="search_logo" />
                                <input type="text" className="searchInput" placeholder="Search Your Country...." onChange={(e) => {
                                    setCountrySearch(e.target.value);
                                }}/>
                            </div>
                            <SearchCompo isFetching={isFetching} countryData={countryData} searchTerm={countrySearch} />
                        </div>
                    </div>
        </div>
        <div className="box_r">
            <RightCompo data={data2} countryData={countryData} />
        </div>
        </>
        
    )
}

export default Status
