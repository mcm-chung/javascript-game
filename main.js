// DOM variables:
const startButton = document.querySelector(".start");
const hitButton = document.querySelector(".hit");
const standButton = document.querySelector(".stand");
// const pointPlayerDisplay = document.querySelector("#player-results");
// Card variables
var suits = ["spade", "diamond", "club", "heart"];
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
hitButton.style.display = "none";
standButton.style.display = "none";

// startButton.addEventListener("click", () => {
//   start.style.display("none");
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
    // const weight = parseInt(values[i]);
    // if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
    // if (values[i] == "A") weight = 11;
    // console.log(weight);
    let weight = parseInt(values[x]);
    if (values[x] == "J" || values[x] == "Q" || values[x] == "K") weight = 10;
    if (values[x] == "A") weight = 11;
    // console.log(weight);
    let card = { value: values[x], suit: suits[i], weight: weight };
    deck.push(card);
  }
}
console.log(deck);
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
  // console.log(deck.length);
  // console.log(deck[choice]);
  // console.log(cardChoice);
  return cardChoice;
}
const card = chooseCard();
// console.log(card);

const player = document.querySelector(".player-hand");
const dealer = document.querySelector(".dealer-hand");

const addCard = (player) => {
  const card = chooseCard();
  player.innerHTML += `<div id="${card.value}" class="card ${card.suit}">${card.value}<span class='iconify' data-icon='bi:suit-${card.suit}' data-inline='false'></span></div>`;
  return card;
  // dealer.innerHTML += `<div id="${card.value}" class="card ${card.suit}">${card.value} <span class='iconify' data-icon='bi:suit-${card.suit}' data-inline='false'></span></div>`;
};

startButton.addEventListener("click", () => {
  // const card = chooseCard();
  // console.log(card);

  // if (gameStart === false) {
  for (let index = 0; index < 2; index++) {
    const addDealerCard = addCard(dealer);
    const addPlayerCard = addCard(player);
    // addCard(dealer);
    // addCard(player);
    dealerHand.push(addDealerCard);
    playerHand.push(addPlayerCard);
    let points = getCardTotal(playerHand);
    dealerPoints = getCardTotal(dealerHand);
    console.log(dealerPoints);
    playerPoints = points;
    gameStart = true;
    console.log(playerPoints);
  }

  document.getElementById("dealer-results").innerHTML = `${getCardTotal(
    dealerHand
  )}`;
  document.getElementById("player-results").innerHTML = `${getCardTotal(
    playerHand
  )}`;

  startButton.style.display = "none";
  hitButton.style.display = "block";
  standButton.style.display = "block";
});

const getCardTotal = (deck) => {
  let points = 0;
  deck.forEach((card) => {
    const weight = card.weight;
    points += weight;
    return points;
  });
  return points;
};

hitButton.addEventListener("click", () => {
  if (playerHand.length < 5) {
    const playerCard = addCard(player);
    // const card = chooseCard();
    // dealerHand.push(card);
    playerHand.push(playerCard);
    getCardTotal(playerHand);
    console.log(getCardTotal(playerHand));
    // addCard(dealer);
    // addCard(player);
    console.log(playerHand);
  }

  document.getElementById("player-results").innerHTML = `${getCardTotal(
    playerHand
  )} `;
});

standButton.addEventListener("click", (e) => {
  checkEndOfGame();
  getCardTotal(dealerHand);
  console.log(getCardTotal(dealerHand));
  gameOver = true;

  document.getElementById("dealer-results").innerHTML = `${getCardTotal(
    dealerHand
  )} `;
});

document.getElementById("dealer-results").innerHTML = `${dealerPoints}`;
document.getElementById("player-results").innerHTML = `${playerPoints}`;

dealerWins = "Dealer Wins";

function checkEndOfGame() {
  if (dealerPoints <= 16) {
    if (dealerHand.length < 5) {
      const addDealerCard = addCard(dealer);
      dealerHand.push(addDealerCard);
    }
  }

  if (playerPoints > 21 || dealerPoints > playerPoints) {
    document.querySelector(".dealerWins").innerHTML = `${dealerWins}`;
  } else if (playerPoints > dealerPoints) {
    document.querySelector(".dealerWins").innerHTML = `${dealerWins}`;
  } else if ((playerPoints = dealerPoints)) {
    document.querySelector(".draw").innerHTML = `${draw}`;
  }
}
