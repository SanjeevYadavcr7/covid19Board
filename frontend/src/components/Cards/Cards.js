import React from 'react'

const Cards = (props) => {
    const {data,country} = props;
    const {confirmed,recovered,deaths} = data;
    console.log("Props Data = ");
    console.log(JSON.stringify(props) + " || ");
    return(
        <div>
            <p>Country = {country}</p>
            <p>Confirmed = {confirmed.value}</p>
            <p>Deaths = {deaths.value}</p>
            <p>Recovered = {recovered.value}</p>
        </div>
    )
}

export default Cards;
