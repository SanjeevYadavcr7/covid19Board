import React from 'react';
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
const urlCardData = "https://corona.lmao.ninja/v2/all?yesterday=";
const countryUrl = 'https://corona.lmao.ninja/v2/countries?yesterday=&sort=';

class CovidApi extends React.Component{

    static fetchDailyData = async() =>{
        try{
            const {data} = await axios.get(`${url}/daily`);
            const modifiedData = data.map((dailyData) => ({
                    confirmed: dailyData.confirmed.total,
                    deaths:dailyData.deaths.total,
                    date:dailyData.reportDate,
                }
            ))
            return modifiedData;
        }
        catch(error){console.log(error);}
    }

    static fetchCovidData2 = async(country) =>{
        let changeableUrl = urlCardData;
        if(country){
          changeableUrl = `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query =`
        }
        try{
          const {data : { cases,recovered,deaths,active,todayCases,todayDeaths,todayRecovered }} = await axios.get(changeableUrl);
          return {cases, recovered, deaths, active, todayCases,todayDeaths,todayRecovered}
        }catch(error){
          console.log(error);
        }
      }

      static fetchCountryData = async() => {
          try{
            const fetchedData = await axios.get(countryUrl);
            const data = (fetchedData.data).map((data) => ({
                country: data.country,
                active: data.active,
                deaths: data.deaths,
                recovered: data.recovered,
            }))
            return data;
          }
          catch(error){console.log("Error in fetchCountryData"+error)}
      }

      static getTodayDate(){
        let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'];
        let weekday = ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat']
        var today = new Date();
        var date = today.getDate()+" "+month[today.getMonth()]+" "+today.getFullYear()+", "+weekday[today.getDay()];
        return date;
    }

    static fetchCountriess = async() =>{
        const url = "https://covid19.mathdro.id/api";
        try{
          const {data :{countries}} = await axios.get(`${url}/countries`);
          return countries.map((country) => country.name);
        }
        catch(error){console.log(error);}
      }
}

export default CovidApi;



// 2632052 9839007768 9839034844
