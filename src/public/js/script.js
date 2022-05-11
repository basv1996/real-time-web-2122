var socket = io();

console.log("goeie connectie manbro")



const messages = document.getElementById('messages');
const form = document.getElementById('chatForm');
const input = document.getElementById('inputPokemon');
const feedbackTxt = document.querySelector(".feedback")
const pokImgCont = document.getElementById('pokemonImgContainter')
const createImage = document.createElement('img')
const scoreUL = document.getElementById('score')
const hintBtn = document.getElementById('giveHint1')

const myName = prompt("what is your name?") || `user${Date.now()}`
appendMessage('You joined')
socket.emit('user-connected', myName)

socket.on('usercnt', (msg) => {
  document.querySelector("#count").innerHTML=msg
})

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
  createImage.src = results.sprites.other.dream_world.front_default
  createImage.alt = "pokemon image" 
  pokImgCont.appendChild(createImage)
});

socket.on("update-scoreBoard", (users) => {
  scoreUL.innerHTML = ''
  Object.values(users).forEach((user)=>{
    userNameAndScore = document.createElement('li')
    userNameAndScore.textContent = (`${user.myName}: ${user.score}`)
    scoreUL.appendChild(userNameAndScore)
  })
})

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

hintBtn.addEventListener("click", ()=>{
  createImage.style.filter = "contrast(3%)"
})