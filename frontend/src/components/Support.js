import React, {useState, useEffect} from 'react';
import './Dashboard.css'
import { createData, getData } from '../api/SupportApi';
import CovidApi from '../api/CovidApi';
import banner from './images/banner5.png';
import RightCompo from './miniCompo/SupportRight';
import CheckBox from './miniCompo/SupportCheckBox';
import heart from './images/heart2.svg'
import SupportSearchCompo from './miniCompo/SupportSearchCompo';


function Support() {
    const [word, setWord] = useState('');
    const [city, setCity] = useState('');
    const [data, setData] = useState('');
    const [reg, setReg] = useState([]);
    const [flag,setFlag] = useState(false);
    const FormOptionsData = [{'id':1,'value':'Oxygen'},{'id':2,'value':'Medicine'},{'id':3,'value':'Hospital'},{'id':4,'value':'Vaccine'},{'id':5,'value':'Food'},{'id':6,'value':'Financial'}]
    const [Filters, setFilters] = useState({
        options:[],
        cities:[]
    })

    const onSubmit = (childData) => {
        setData(childData);
        const newArray = [...reg];
        newArray.push(true);
        setReg(newArray);
    }

    function onDone(){
        setTimeout(()=>{
                console.log("Reloding windows")        
                window.location.reload();
        },2000)
    }

    useEffect(() => {
        if(data !== ''){
            const onFetch = async(data) => {
                // console.log("Pushing Data");
                const flag = await createData(data);
                if(flag !== 'error'){
                    setFlag(true);
                    // console.log("Data is successfully pushed");
                    const item = document.querySelector('#doneNotify');
                    item.classList.remove('afterSupport');
                    item.classList.add('notify');
                    onDone();
                }
                else console.log("Unable to push data")
            }
            onFetch(data)
        }
    }, [data])

    useEffect(() => {
        if(flag){
            setTimeout(() => {
                const item = document.querySelector('#doneNotify');
                item.classList.add('afterSupport');
                item.classList.remove('notify');
            },2000)
        }
    }
    ,[flag])

    const getWord = (word) =>{ setWord(word);}
    const getCity = (city) => { setCity(city);}

    const handleFilters = (filters, category) => {
        
        const newFilters = {...Filters};
        newFilters[category] = filters;
        // showFilteredResults(newFilters);
        setFilters(newFilters); // setting filters state acc. to received filters 
    }
    // const onRegDone = (e) => {
    //     console.log("Inside IsReg = ");
    //     console.log(e);
    //     // setReg(isReg);
    // }
    // console.log("IsReg = ");
    // console.log(reg);

    let today = new Date();
    const mins = ( today.getMinutes() > 15 ) ?today.getMinutes()-10:today.getMinutes();
    const secs = ( today.getSeconds() > 10 ) ?today.getSeconds()-8:today.getSeconds();
    const date = mins+"mins "+secs+"secs";

    return (
        <>
        <div className="box_m">
            <div className="box_m_1">
                <button className="afterSupport" id="doneNotify">Thank You! This means a lot<img src={heart} alt="heart"/></button>
                <p className="dates dates_support">{CovidApi.getTodayDate()}<span>day</span></p>
                <div className="banner"><img src={banner} alt="banner_image" /></div>
                <div className="support_search">
                    <p className="head-text">Looking for help! Search here....</p>
                    <div className="searchBox">
                        <CheckBox childWord={getWord} childCity={getCity} handleFilters={filters => handleFilters(filters, "options")} />
                        <p className="notice">* Table contains information of the people who want to help during this covid situation (updated {date} ago)             
                        </p>
                        <SupportSearchCompo arr={Filters} reg={reg} term="options" word={word} city={city} />
                    </div>
                </div>
            </div>
        </div>
        <div className="box_r">
            <RightCompo optionsData={FormOptionsData} onSubmit={onSubmit}/>
        </div>
        </>
    )
}

export default Support
