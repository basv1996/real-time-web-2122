//require dotenv
require("dotenv").config()

const express = require('express')
const app = express()
const fetch = require('node-fetch');

//import the routes
const router = require('./src/routes/home.js')

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
app.use('/', router)

// router implemented with all the routes
//app.use(router);

let userCount=0
let users = {}
let pokemon = {}


////////////////////////////////
//____ Fetching the data  ____//
////////////////////////////////

// fill with random sorted order data object
let dataSorted;


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const randomSortedPokemon = async () => {
    // API parameters to send with fetch
    const rndInt = randomIntFromInterval(1, 150)
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'
    const url = `${endpoint}`+ rndInt
    // fetching data from api
    const pokemonData = await fetchData(url)
    //console.log(pokemonData)
    dataSorted = pokemonData
    return dataSorted
}

// execute function to get data and sort order randomly.
// randomSortedPokemon()
// //.then(results => results.json())
//     .then(results  => {
//         console.log('order being randomized and data fetched')
//         //console.log(results)
//         //console.log(JSON.stringify(results))
//         app.get('/gameScreen', (req, res) => {
//             res.render('gameScreen', {
//                 results: results
//             });
//           });
//         return results
//     })

//     app.get('/', (req, res) => {
//         res.render('home');
//       });

    //console.log("data : ", results)

////////////////////////////////
//____ Socket Connection  ____//
////////////////////////////////

io.on('connection', (socket) => {
    userCount++
    io.emit('usercnt', userCount)

    socket.on('user-connected', (myName) => {
        users[socket.id] = {
            myName: myName,
            score: 0,
            id: socket.id
        }
        randomSortedPokemon()
        .then(results  => {
            console.log(results.forms[0].name)
         io.emit("user-connected", results)
    })
    })

    socket.on("new-pokemon", ()=>{
        randomSortedPokemon()
        .then(results  => {
            io.emit("random-pokemon", results)
            console.log("de gebr: ", users)
        })
    })

    socket.on('disconnect', () => {
        userCount--
        io.emit('usercnt', userCount)
        delete users[socket.id]
      });

    socket.on('chat-message', (msg) => {
            if(msg === dataSorted.forms[0].name) {
                io.emit("good-guess")
                users[socket.id].score++
        }
        console.log(dataSorted.forms[0].name)
      
        socket.broadcast.emit('chat-message', { msg: msg, myName: users[socket.id].myName })
      });

})





////////////////////////////////
//_________ API DATA  ________//
////////////////////////////////
    // storing api data in object
    http.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });