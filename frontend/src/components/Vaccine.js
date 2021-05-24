import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import CovidApi from '../api/CovidApi';
import RightCompo from './miniCompo/RightCompos';
import banner from './images/banner2.png';
import { getMinDate } from '../util';

function Vaccine() {
    const [pin, setPin] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [centers, setCenters] = useState([]);
    const [loadData, setLoadData] = useState(false);
    const [isFetching, setIsfetching] = useState(true);
    const [slots, setSlots] = useState(0);

    const fetchUser = async(api) => {
        let response = await fetch(api)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.centers);
            let centers = data.centers;
            let validSlots;
            centers.forEach((center) => {
                // console.log("Center = ");
                // console.log(center);
                let sessions = center.sessions;
                validSlots = sessions.filter((sessionArray) => sessionArray.min_age_limit <= age);
                let availableSlots = sessions.filter((sessionArray) => sessionArray.available_capacity > 0 );
                if(validSlots.length > 0){
                    setCenters((oldArray) => [...oldArray,center]);
                    if(availableSlots.length > 0){
                        setSlots((prev) => prev+1);
                    }  
                }
            })
        })
        .catch((error) => { console.log(error)});
        return {success:true, data:response};
    };

    useEffect(() => {
        let newdate = date.split("-").reverse().join("-");
        const fetchData = async() => {
            var api = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+pin+"&date="+newdate;
            if(loadData){
                let res = await fetchUser(api);
                if(res.success){
                    setLoadData(false);
                    setIsfetching(false);
                }
            } 
        }
        fetchData()
    },[loadData])
    
    function formSubmit(e){
        e.preventDefault();
        setCenters([]);
        setSlots(0);
        setLoadData(true);
    }

    return (
    <>
        <div className="box_m">
            <div className="box_m_1">
            <p className="dates">
                {CovidApi.getTodayDate()}
                <span>day</span>
                </p>
                <div className="banner_support">
                    <img src={banner} alt="banner_image" />
                </div>
                <div className="form_support">
                    <p className="head-text">Check Your Nearest Center</p>
                    <form onSubmit={formSubmit}>
                        <div className="form_div">
                            <input type="tel" placeholder="Enter Area Pincode" onChange={(e) => setPin(e.currentTarget.value)}/>
                            <input type="tel" placeholder="Enter age" onChange={(e) => setAge(e.currentTarget.value)}/>
                            <input type="date" id="date" min={getMinDate()} onChange={(e) => setDate(e.currentTarget.value)}/>
                        </div>
                        <button> Check Available Slot</button>
                    </form>
                    <div className="avail_center">
                        <p className="head-text2">Total Available Center(s) : {(isFetching && !slots) ? '' : slots}
                        <span>visit <Link to="/cowin" target="_blank" className="link">covin.gov.in</Link> to book your slot</span>  
                        </p>
                        <div className="statusTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Center<span className="box_rm">Name</span></th>
                                        <th>Location</th>
                                        <th>Available <span className="box_rm">Slots</span></th>
                                        <th>Vaccine</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    (centers.length) ?
                                    centers.map((center, index) => {
                                        console.log("Center Length[] = "+centers.length)
                                        // let sessions = center.sessions;
                                        return(
                                        <tr key={center.name}>
                                            <td>{center.name}</td>
                                            <td>{center.district_name}, {center.state_name}</td>
                                            <td>{(center.sessions[0].available_capacity === 0) ? 'Booked' : center.sessions[0].available_capacity}</td>
                                            <td>{center.sessions[0].vaccine}</td>
                                            {/* {
                                                sessions.map((centerSession, centerIndex) => {
                                                    let cap = centerSession.available_capacity;
                                                    return(
                                                        <>
                                                            {(cap>0) ? 
                                                            <>
                                                                <td>{centerSession.available_capacity}</td>
                                                                <td>{centerSession.vaccine}</td>
                                                            </>
                                                             : ''}
                                                                                                                    
                                                        </>
                                                    )
                                                })
                                            } */}
                                            <td>{center.fee_type}</td>
                                        </tr>
                                        )
                                    }) : 
                                    <tr>
                                        <td> - </td>
                                        <td> - </td>
                                        <td> - </td>
                                        <td> - </td>
                                        <td> - </td>
                                    </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="box_r">
            <RightCompo />
        </div>
    </>
    )
}

export default Vaccine
