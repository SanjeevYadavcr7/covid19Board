export const sortData = (data) => {

    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.cases > b.cases){
            return -1;
        }
        else{ return 1;}
    })
    return sortedData;
}

export const getMinDate = () => {
    const date = new Date();
    return date.toISOString().slice(0, 10);
  };
  
export const getMaxDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().slice(0, 10);
  };

export const covertToLakhs = (value) => {
    let string_value = value.toString(); 
    let n = string_value.length;
    let ans = "";
    for(let i=n-1;i>=0;i--){
        if(i === n-1-3 || i === (n-1-5) || i === (n-1-7) || i === (n-1-9))ans += ',';
        ans += string_value[i];
    }
    let newString = "";
    for(let i=ans.length-1;i>=0;i--){newString += ans[i]}
    return newString;
}