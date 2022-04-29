//require dotenv
require("dotenv").config()

const express = require('express')
const app = express()
const fetch = require('node-fetch');

//import the routes
const router = require('./src/router')

//import fetch data
const fetchData = require('./src/utils/fetchData.js');

// http server on web, listens to port, express linked to port with data
//process listens to port with data from app
const http = require('http').createServer(app); 
const io = require('socket.io')(http); 
const port = process.env.PORT || 1234



//looks in public folder for static files
app.set('view engine', 'ejs'); 
app.set('views', './src/views');
app.use(express.static('./src/public'));

// router implemented with all the routes
//app.use(router);


////////////////////////////////
//____ Fetching the data  ____//
////////////////////////////////

// fill with random sorted order data object
let dataSorted;


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rndInt = randomIntFromInterval(1, 150)

const randomSortedPokemon = async () => {
    // API parameters to send with fetch
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'
    const url = `${endpoint}`+ rndInt

    // fetching data from api
    const pokemonData = await fetchData(url)
    //console.log(pokemonData)
    dataSorted = pokemonData
    return dataSorted
}

// execute function to get data and sort order randomly.
randomSortedPokemon()
//.then(results => results.json())
    .then(results  => {
        console.log('order being randomized and data fetched')
        console.log(results)
        //console.log(JSON.stringify(results))
        app.get('/', (req, res) => {
            res.render('home', {
                results: results
            });
          });
        return results
    })


    //console.log("data : ", results)

////////////////////////////////
//____ Socket Connection  ____//
////////////////////////////////


////////////////////////////////
//_________ API DATA  ________//
////////////////////////////////
    // storing api data in object
    let guessPokemon = {
        //img_path: dataSorted.sprites.other.dream_world
    }


    http.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });