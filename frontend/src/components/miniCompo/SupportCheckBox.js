import React, {useState} from 'react';
import searchIcon from '../images/search.svg';


function SupportCheckBox(props) {

    const [flag, setFlag] = useState(true);
    const optionsData = [{'id':1,'value':'Oxygen'},{'id':2,'value':'Medicine'},{'id':3,'value':'Hospital'},{'id':4,'value':'Vaccine'},{'id':5,'value':'Food'},{'id':6,'value':'Financial'}]
    const [Checked, setChecked] = useState([]);
    
    const handleCity = (e) => { 
        // console.log("Passing City = "+e.target.value);
        props.childCity(e.target.value); 
    }

    const handleWord = (e) => {
        let sendWord = '';
        if(flag) sendWord = e.target.value
        else sendWord = '';
        setFlag(!flag);
        props.childWord(sendWord); 
    }

    const handleToggle = (value) => {
        // console.log("Inside HandleToggle")
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if(currentIndex === -1) newChecked.push(value);
        else newChecked.splice(currentIndex,1);
        setChecked(newChecked);   
        props.handleFilters(newChecked);
    }

    const checkUnCheck = (e) =>{
        if((e.target.id).length <= 5){
            const newId = e.target.id+"-input";
            const item = document.querySelector(`#${newId}`);
            if(item.checked) item.checked = false;
            else item.checked = true;
        }
    }

    const checkUnCheck2 = (e) =>{
        const newId = e.target.id;
        const item = document.querySelector(`#${newId}`);
        if(item.checked) item.checked = false;
        else item.checked = true;
    }

    return (
        <div className="search_float">
            <div className="searchInputBox">
                <img src={searchIcon} className="imgIcon" alt="search_logo" />
                <input type="text" className="searchInput" placeholder="Search Your City or Pincode"
                onChange = {(e) => handleCity(e)}/>
            </div>
            <div className="pickOptions">
            {optionsData.map((row) => {
                return(
                    <div className={`labels`} key={row.id} id={`box-${row.id}`} onClick={(e) =>{
                        checkUnCheck(e)
                        handleToggle(row.id);
                        }}>
                    <input type="checkbox" name="choice" id={`box-${row.id}-input`} value={row.value}
                    onClick={(e) =>checkUnCheck2(e)}
                    onChange={
                        (e) => {
                            handleWord(e);
                            handleToggle(row.id);
                        }} 
                    checked={Checked.indexOf(row.id) === -1 ? false : true} />
                    <label onClick={(e)=>checkUnCheck(e)} id={`box-${row.id}`} >{row.value}</label>
                    </div>
                    )
            })}
            </div>
        </div>
    )
}

export default SupportCheckBox
