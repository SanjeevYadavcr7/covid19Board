import axios from 'axios';

export const getData = () => axios.get("http://localhost:4000/api/getdata").then(res => res.json())

export const createData = (data) =>{
fetch("http://localhost:4000/api/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}
)
console.log('Inside Create Data')
}
