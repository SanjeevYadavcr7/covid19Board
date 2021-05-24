import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './RightCompo.css';
import injection from '../images/injection.svg';
import globe from '../images/globe.svg';
import heart from '../images/heart2.svg'
import arrow from '../images/arrow.svg'


function SupportRight(props) {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState();
    const [phone, setPhone] = useState();
    const [help, setHelp] = useState([]);
    const [notList, setNotList] = useState('');
    // const [rec, setRec] = useState(false);

    function resetState(){
        setHelp([]); 
        // Resetting state to avoid form filling by previos saved state data 
    }

    function submitHandler(e){
        e.preventDefault();
        const data = {name,city,pin,phone,help: help.toString()};
        props.onSubmit(data);
        e.target.reset();
        resetState();
    }

    function submitNow(){setHelp([...help,notList])}

    return (
        <div className="SupportRight">
            <p className="head-text">Want to help! Support now <img src={arrow} alt="arrow-down" /></p>
            <div className="support_form">
                <form onSubmit={submitHandler}>
                    <label>What is your name?</label>
                    <input type="text" placeholder="Eg. Sanjeev Yadav" onChange={(e) => {setName(e.target.value)}} required/>
                    <label>What is your city name?</label>
                    <input type="text" placeholder="Eg. Kanpur" onChange={(e) => {setCity(e.target.value)}} required/>
                    <label>What is area pincode?</label>
                    <input type="tel" placeholder="Eg. 208002" onChange={(e) => {setPin(e.target.value)}} required/>
                    <label>What is your contact no. ?</label>
                    <input type="tel" placeholder="Eg. 6392883207" onChange={(e) => {setPhone(e.target.value)}} required/>
                    <label>what do you want to help with?</label>
                    {props.optionsData.map((row) => {
                            return(
                                <div className="labels" key={row.id}>
                                    <input type="checkbox" name={`choice${row.id}`} value={row.value} onChange={
                                        (e) => {
                                            if(help.includes(e.target.value)){
                                                const index = help.indexOf(e.target.value);
                                                if(index>-1) help.splice(index,1);
                                            }
                                            else setHelp([...help,e.target.value])
                                            console.log("Help = "+help);
                                        }}/>
                                    <label>{row.value}</label>
                                </div>
                            )
                        })
                    }
                    <input type="text" name="notListed" placeholder="Not listed! Please Specify" onChange={(e) => {setNotList(e.target.value)}}/>
                    <button onClick={submitNow}>Give Help
                        <img src={heart} alt="heart" />
                    </button>
                </form>
            </div>
            <Link to="/vaccine" className="vaccine_link"><img src={injection} alt="injection"/>Know your vaccination center</Link>
            <Link to="/news" className="status_link"><img src={globe} alt="globe"/>covid19 related latest news</Link>
        </div>
    )
}

export default SupportRight
