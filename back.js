let player = {
    name : "User",
    perks: 200
}
let cardarray = []
let sum = 0
let hasblackjack = false
let IsAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.perks   


function getrandomcard(){
    let randomnum =  Math.floor( Math.random()*13 ) + 1 
    if( randomnum > 10){
        return 10
    }
    else if (randomnum === 1){
        return 11
    }
    else 
    return randomnum
}

function startgame(){
    IsAlive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cardarray = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(sum)
    rendergame()
}
function rendergame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cardarray.length; i++) {
        cardEl.textContent += cardarray[i] + " "
    }


    sumEl.textContent = "Sum: " + sum
if (sum <= 20){
    message = "Do you want to draw a new card?"
}
else if (sum === 21){
    message = "wohooo!! you got a blackjack"
    hasblackjack = true
}
else {
    message = "you are out of game!!"
    IsAlive = false
}
 messageEl.textContent = message
}
function newcard(){
    if( IsAlive === true && hasblackjack === false){
    let newcard = getrandomcard()
    sum += newcard
    cardarray.push(newcard)
    rendergame()
}
}


