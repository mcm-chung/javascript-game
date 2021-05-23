// DOM variables:
// const startButton = document.querySelector(".start");
// const hitButton = document.querySelector(".hit");
// const standButton = document.querySelector(".stand");

// Card variables
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//Game variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
let gameStart = false;
let gameOver = false;

//building a deck of cards
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

//create deck with suit and values
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { value: values[x], suit: suits[i] };
    deck.push(card);
  }
}

// console.log(deck);

//shuffle method
function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);

    let temp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = temp;
  }
}

console.log(shuffle(deck));

// console.log(deck);
