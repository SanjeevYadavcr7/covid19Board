export const getData = () => fetch("https://covid19infoboard.herokuapp.com/api/getdata").then(res => res.json())

export const createData = (data) =>{
fetch("https://covid19infoboard.herokuapp.com/api/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}).then((res) => {return res.json()})
.catch((error) => {return 'error'})
// console.log('Inside Create Data')
}
