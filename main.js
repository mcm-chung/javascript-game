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
// function shuffle() {
//   for (let i = 0; i < deck.length; i++) {
//     let location1 = Math.floor(Math.random() * deck.length);
//     let location2 = Math.floor(Math.random() * deck.length);

//     shuffleDeck.push(deck[location1]);
//   }
//   console.log(shuffleDeck);
// }
// shuffle();

//choose card

function chooseCard() {
  let choice = Math.floor(Math.random() * deck.length);
  const cardChoice = deck[choice];

  const firstDeckHalf = deck.slice(0, choice);
  const secondDeckHalf = deck.slice(choice + 1);
  deck = firstDeckHalf.concat(secondDeckHalf);
  console.log(deck.length);
  console.log(deck[choice]);
  console.log(cardChoice);
  return cardChoice;
}
const card = chooseCard();
console.log(card);

const playerHand = document.querySelector(".player");

const addCard = () => {
  const card = chooseCard();
  playerHand.innerHTML += `<div id="${card.value}" class="card${card.suit}"></div>`;
};
