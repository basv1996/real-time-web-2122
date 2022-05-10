var socket = io();

console.log("goeie connectie manbro")

socket.on('usercnt', (msg) => {
  document.querySelector("#count").innerHTML=msg
})

const messages = document.getElementById('messages');
const form = document.getElementById('chatForm');
const input = document.getElementById('inputPokemon');
const feedbackTxt = document.querySelector(".feedback")
const pokImgCont = document.getElementById('pokemonImgContainter')
const createImage = document.createElement('img')
const scoreUL = document.getElementById('score')

const myName = prompt("what is your name?") || `user${Date.now()}`
appendMessage('You joined')
socket.emit('user-connected', myName)

socket.on('chat-message', (data)=> {
  console.log("de data: ", data)
  window.scrollTo(0, document.body.scrollHeight);
  appendMessage(`${data.myName}: ${data.msg}`)
});

socket.on("random-pokemon", results => {
    feedbackTxt.innerHTML = ""
    createImage.src = ""
    createImage.style.filter = "contrast(0%)"

    createImage.src = results.sprites.other.dream_world.front_default
    createImage.alt = "pokemon image" 
    pokImgCont.appendChild(createImage)
})

socket.on("user-connected", (results) => {
  // userName = document.createElement('li')
  // userName.textContent = myName
  // scoreUL.appendChild(userName)

  //Create pokemon sprite with no contrast
  createImage.src = results.sprites.other.dream_world.front_default
  createImage.alt = "pokemon image" 
  pokImgCont.appendChild(createImage)

});

socket.on("update-scoreBoard", (users) => {
  //console.log(Object.values(users))
  scoreUL.innerHTML = ''
  Object.values(users).forEach((user)=>{
    userNameAndScore = document.createElement('li')
    // userNameAndScore.textContent = ''
    userNameAndScore.textContent = (`${user.myName}: ${user.score}`)
    scoreUL.appendChild(userNameAndScore)
   // console.log("naam: ", user.myName)
    //console.log("score: ", user.score)
  })

 // console.log(users.myName)
   //userName = document.createElement('li')
   //userName.textContent = users.myName
  // scoreUL.appendChild(userName)

})


function updateScore() {

}

socket.on("good-guess", () => {
    feedbackTxt.innerHTML = "you guessed correctly"
    createImage.style.filter = "contrast(100%)"
    getNewPokemon()
    //console.log(users)
    //socket.emit("new-pokemon")

})

socket.on("get-pokemon", (pokemonName) => {
    feedbackTxt.innerHTML = pokemonName
})

function getNewPokemon() {
  setTimeout(function () {
    socket.emit("new-pokemon");
  }, 2000);
}

form.addEventListener('submit', e => {
  e.preventDefault()
  //if (input.value) {
    const msg = input.value
    appendMessage(`You: ${msg}`)
    socket.emit('chat-message', msg)
    input.value = ''
});

function appendMessage(msg) {
  const item = document.createElement('li');
  item.textContent = msg
  messages.appendChild(item)
}