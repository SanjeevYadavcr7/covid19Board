import React, {useState, useEffect, useCallback} from 'react';
import '../Dashboard.css';
import { getData } from '../../api/SupportApi';

function SupportSearchCompo(props) {
    const word = props.word;
    const city = props.city;
    const arr = props.arr;
    const term = props.term;
    const [helperData,setHelperData] = useState([]);    

    function refreshPage(){ 
        window.location.reload(); 
    }
    
    const [reg, setReg] = useState([]);
    useEffect(()=>{
        setReg(props.reg);
        if(reg.length>0){
            window.location.reload();
        }
    },[])


    let check='';
    if(word === '' && city === '') check=0;
    else if(word === '') check=1;
    else check = 2;

    useEffect(() => {
        const fetchItems = async() => {
            const data = await getData();
            let newData = [];
            let checkedIn = 1;
            const filterArray = arr[term];

            for(let i=0;i<filterArray.length;i++){
                if(filterArray[i] === 1){
                    checkedIn = 0;
                    data.forEach((rowData) =>{
                        let keyWord = "Oxygen";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 2){
                    checkedIn = 0;
                    data.forEach((rowData) =>{
                        let keyWord = "Medicine";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                    }
                    })
                }
                else if(filterArray[i] === 3){
                    checkedIn = 0;
                    data.forEach((rowData) =>{
                        let keyWord = "Hospital";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 4){
                    checkedIn = 0;
                    data.forEach((rowData) =>{
                        let keyWord = "Vaccine";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 5){
                    checkedIn = 0;
                    data.forEach((rowData) =>{
                        let keyWord = "Food";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 6){
                    checkedIn = 0;
                    data.forEach((rowData) =>{
                        let keyWord = "Financial";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
            }
            if(newData.length>0 || !checkedIn) setHelperData(newData.reverse());
            else setHelperData(data.reverse());
        }
        fetchItems()
    }, [arr]);

    return (
        <div className="statusTable">
            <table>
                <thead>
                    <tr>
                        <th>Helper<span>s' Name</span></th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Resource</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (check === 0) ?
                    helperData.map((rowData, index) => {
                        const arr = rowData.help.split(",").join(' ').split(' ');
                        return(
                        <tr key={index}>
                            <td>{rowData.name}</td>
                            <td>{rowData.city}</td>
                            <td>{rowData.phone}</td>
                            <td className="last_col">
                            {
                                arr.map((row,index) => {
                                    return(
                                    <span key={index}>
                                        {row}
                                    </span>
                                    )
                                })
                            }
                            </td>
                        </tr>
                        )
                    }) :  
                        helperData.filter((rowData) => {
                            if(city === '')return rowData;
                            else{
                                if(city[0] >= '0' && city[0] <= '9'){ 
                                    let pincode = (rowData.pin).toString();
                                    return pincode.includes(city);
                                }
                                else return rowData.city.toLowerCase().includes(city.toLowerCase());
                                }
                        }).map((rowData, index) => {
                            return(
                            <tr key={index}>
                                <td>{rowData.name}</td>
                                <td>{rowData.city}</td>
                                <td>{rowData.phone}</td>
                                <td> {
                                        rowData.help.split(",").map((resource,index) => {
                                                return(
                                                    <span key={index}>
                                                    {resource}
                                                    </span>
                                                )
                                        })
                                    }</td>
                            </tr>
                            )
                        })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default SupportSearchCompo
