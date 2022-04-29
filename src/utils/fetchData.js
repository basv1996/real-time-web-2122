// import fetch
const fetch = require('node-fetch');

// fetching data from the pokemon API
const getData = async function fetchData(url){
    const apiData = await fetch(url)
        .then(response => response.json())
        // if the request fails the error message will be shown in the console
        .catch(err => console.log(err))
    // returns the fetched data
    return apiData
};

// export modules 
module.exports = getData