// elements in variables - query selector

//variables
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

//classes
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
