// elements in variables - query selector

//variables
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

//building a deck of cards
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

//empty array to contain the cards
class Deck {
  constructor(deck) {
    this.deck = [];
  }
}

//create deck
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}

console.log(deck);

// createDeck(suit,value) {

// }
