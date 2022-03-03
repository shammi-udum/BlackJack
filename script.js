let cards = []
// an array to store list of cards that are drawn.
let sum = 0
// starting sum 
let hasBlackJack = false
//state of the game
let isAlive = false
//state of the game
let message = " "
//messages for the if else statements
let messageEl = document.getElementById("message-el")
//this is where we're storing the message in the paragraph
let sumEl = document.getElementById("sum-el")
//displays the sum of the cards value after starting game and drawing a new card
let cardsEl = document.getElementById("cards-el")
//displays the individual cards in the array
let playerEl = document.getElementById("player-el")
//displays data in the <p> tag 
let player = {
    name: "Player",
    chips: 200
}

playerEl.textContent =  player.name + ": $ " + player.chips
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
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "    
    // render out all the cards we have
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
        //pushes new card into cards array
        renderGame()
 }
}