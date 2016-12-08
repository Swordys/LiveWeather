var axios = require("axios");
const OPEN_WEATHER_MAP = `http://api.openweathermap.org/data/2.5/weather?q=&appid=ae9775702356c2bbd0be2d65fc0cfbf3&units=metric`;


function getTemp (location) {
    var encodeLoc = encodeURIComponent(location);
    let requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeLoc}&appid=ae9775702356c2bbd0be2d65fc0cfbf3&units=metric`;

    
    return axios.get(requestUrl).then((res) => {

        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            let datas = [res.data.main.temp.toString(), res.data.name]
            return datas;
        }
    }).catch((res) => {
        throw new Error(res.data.message);
    });
}


export default {
    getTemp
};