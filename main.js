// DOM variables:
const startButton = document.querySelector(".start");
const hitButton = document.querySelector(".hit");
const standButton = document.querySelector(".stand");

// Card variables
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//Game variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerPoints = 0;
let dealerPoints = 0;
let gameStart = false;
let gameOver = false;

// button;
// hitButton.style.display = "none";
// standButton.style.display = "none";

// startButton.addEventListener("click", () => {
//   start.main.display("none");
// });

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
    const weight = parseInt(values[i]);
    if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
    if (values[i] == "J") weight = 11;
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

const player = document.querySelector(".player-hand");
const dealer = document.querySelector(".dealer-hand");

const addCard = () => {
  const card = chooseCard();
  player.innerHTML += `<div id="${card.value}" class="card ${card.suit}"></div>`;
  dealer.innerHTML += `<div id="${card.value}" class="card ${card.suit}"></div>`;
};

addCard();

// for (let index = 0; index < 1; index++) {
//   addCard();
// }

// player.push(deck.pop()).innerHTML;
// player.push(card.pop()).innerHTML;

startNewGame = () => {
  gameStart = true;
  for (let index = 0; index < 2; index++) {
    addCard();
    playerHand.push(card);
    dealerHand.push(card);
  }
};

hitButton.addEventListener("click", (e) => {
  playerHands.push(card);
  checkEndOfGame();
});

standButton.addEventListener("click", (e) => {
  gameOver = true;
  checkEndOfGame();
});

function checkEndOfGame() {
  if (playerPoints > 21) {
    playerWon = false;
    gameOver = true;
  } else if (dealerPoints > 21) {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) {
    if (playerPoints > dealerPoints) {
      playerWon = true;
    } else {
      playerWon = false;
    }
  }
}
