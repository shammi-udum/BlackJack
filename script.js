let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
//this is where we're storing the message in the paragraph
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let inputEl = document.getElementById("input-el")
let user = []
const playerEl = document.getElementById("player-el")
let player = 200
const ulEl = document.getElementById("ul-el")

playerEl.addEventListener("click", function(){
    user.push(inputEl.value)
    inputEl.value = " "
})

playerEl.textContent =  "$ " + player
// connected to the startgame() function 
function getRandomCard(){
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    if ( randomCard > 10 ) {
        return 10 
    } else if ( randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}
//Starts game once the startgame button is clicked
function startGame(){
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "    
    for ( let i = 0; i < cards.length; i++ ){
        cardsEl.textContent += cards[i] + " "
    }
    if  (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}
// Connected to startGame() function to draw another card
function newCard(){
    if ( isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
 }
}

function renderUser(){
    
}