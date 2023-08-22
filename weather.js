const axios = require('axios');
const url = "https://api.open-meteo.com/v1/forecast?latitude=12.9184&longitude=79.1325&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=GMT";


const getWeather = async (url)=>
{
    const response = await axios.get(url);
    console.log(response.data);
    const {hourly} = response.data;
    const {time} = hourly;
    const currentTime = new Date().toISOString().split(":")[0];
    
    var i = 0;
    let flag = 0;
    time.map((x)=>{
            currentT = x.split(":")[0];
        if(currentTime === currentT)
        {
            flag = i;
        }
        i = i+1;
    })
        return hourly.temperature_2m[flag];

}
const  rP = async (url)=>{
    const weatherdata = await getWeather(url);
    console.log(weatherdata)
}
rP(url);
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });