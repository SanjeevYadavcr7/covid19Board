import React from 'react';
import '../Dashboard.css';

function SearchCompo(props) {
    let countrySel = props.searchTerm;
    const {isFetching, countryData} = props;
    return (
        <div className="statusTable">
            <table>
                <thead>
                    <tr>
                        <th>Country/UT</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (!isFetching) ?
                    countryData.filter((rowData) => {
                        if(countrySel === '')return rowData;
                        else return rowData.country.toLowerCase().includes(countrySel.toLowerCase())
                    }).map((rowData, index) => {
                        return(
                        <tr key={rowData.country}>
                            <td>{rowData.country}</td>
                            <td>{rowData.active}</td>
                            <td>{rowData.recovered}</td>
                            <td>{rowData.deaths}</td>
                        </tr>
                        )
                    }) : ''
                }
                </tbody>
            </table>
        </div>
    )
}

export default SearchCompo
