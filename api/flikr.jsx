var axios = require("axios");

const IMG_URL = `https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg`;

const CALL_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9f2d7a33cf00fb4f8b51255f6bb51773&tags=austria&per_page=1&format=json&nojsoncallback=1`;

function getPic(location) {
    var encodeLoc = encodeURIComponent(location);
    let requestUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9f2d7a33cf00fb4f8b51255f6bb51773&tags=${encodeLoc}&per_page=1&format=json&nojsoncallback=1`;

    return axios.get(requestUrl).then((res) => {

        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            let picData = [res.data.photos.photo[0].farm.toString(), res.data.photos.photo[0].server, res.data.photos.photo[0].id, res.data.photos.photo[0].secret];
            let farmId = picData[0];
            let serverId = picData[1];
            let id = picData[2];
            let secret  = picData[3];
            let retData = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_h.jpg`;
            return retData;
        }
    }).catch((res) => {
        throw new Error(res.data.message);
    });
}


export default{
    getPic
};
