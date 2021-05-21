import React, {useState, useEffect} from 'react';
import '../Dashboard.css';
import { getData } from '../../api/SupportApi';

function SupportSearchCompo(props) {
    const word = props.word;
    const city = props.city;
    const arr = props.arr;
    const term = props.term;
    const [helperData,setHelperData] = useState([]);

    let check='';
    if(word === '' && city === '') check=0;
    else if(word === '') check=1;
    else check = 2;

    useEffect(() => {
        const fetchItems = async() => {
            console.log("Fetching Data")
            const data = await getData();
            let newData = [];
            let checkedIn = 1;
            const filterArray = arr[term];

            for(let i=0;i<filterArray.length;i++){
                if(filterArray[i] === 1){
                    checkedIn = 0;
                    data.map((rowData) =>{
                        let keyWord = "Oxygen";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 2){
                    checkedIn = 0;
                    data.map((rowData) =>{
                        let keyWord = "Medicine";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                    }
                    })
                }
                else if(filterArray[i] === 3){
                    checkedIn = 0;
                    data.map((rowData) =>{
                        let keyWord = "Hospital";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 4){
                    checkedIn = 0;
                    data.map((rowData) =>{
                        let keyWord = "Vaccine";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 5){
                    checkedIn = 0;
                    data.map((rowData) =>{
                        let keyWord = "Food";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
                else if(filterArray[i] === 6){
                    checkedIn = 0;
                    data.map((rowData) =>{
                        let keyWord = "Financial";
                        if(rowData.help.toLowerCase().includes(keyWord.toLowerCase())){
                            if(!newData.includes(rowData)) newData = [...newData,rowData]
                        }
                    })
                }
            }
            if(newData.length>0 || !checkedIn) setHelperData(newData);
            else setHelperData(data);
        }
        fetchItems()
    }, [arr]);

    return (
        <div className="statusTable">
            <table className="tableBox">
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
                        const arr = rowData.help.split(",");
                        return(
                        <tr key={rowData.name}>
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
                            else return rowData.city.toLowerCase().includes(city.toLowerCase())
                        }).map((rowData, index) => {
                            return(
                            <tr key={rowData.name}>
                                <td>{rowData.name}</td>
                                <td>{rowData.city}</td>
                                <td>{rowData.phone}</td>
                                <td>{rowData.help}</td>
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
