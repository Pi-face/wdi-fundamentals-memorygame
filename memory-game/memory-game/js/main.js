

let cards = ["queen","queen","king","king"];

cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne)
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardTwo);

if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a Match!")
}else{
	alert("Sorry, try again")
}

