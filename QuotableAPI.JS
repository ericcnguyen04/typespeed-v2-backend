// installed axios for api
const axios = require('axios')

const uri = "htt://api.quotable.io/random"

module.exports = getData = () => {
    return axios.get(uri).then(response => response.data.content.split(" ")) // .split(" ") function changes stringified data into arrays with words
}