window.addEventListener("load", start);

let min = 0;
let max = 100;
let guess = 50;

function updateGuess() {
  guess = Math.floor((min + max) / 2);
  document.querySelector("#guesses").innerHTML = ("beforeend", `Mit gæt er: ${guess}`);
}

function start() {
  console.log("javascript kører");
  document.querySelector("#start-button").addEventListener("click", startGame);
}

function startGame() {
  document.querySelector("#start-button").remove();
  document.querySelector("#button-list").insertAdjacentHTML(
    "beforeend",
    `<button id="higher">Højere</button>
    <button id="lower">Lavere</button>
    <button id="correct">Korrekt</button>`
  );
  document.querySelector("#higher").addEventListener("click", higher);
  document.querySelector("#lower").addEventListener("click", lower);
  document.querySelector("#correct").addEventListener("click", gameComplete);
  document.querySelector("#guesses").innerHTML = ("beforeend", `Mit gæt er: ${guess}`);
}

function retryGame() {
  min = 0;
  max = 100;
  guess = 50;
  document.querySelector("#retry").remove();
  document.querySelector("#button-list").insertAdjacentHTML(
    "beforeend",
    `<button id="higher">Højere</button>
    <button id="lower">Lavere</button>
    <button id="correct">Korrekt</button>`
  );
  document.querySelector("#higher").addEventListener("click", higher);
  document.querySelector("#lower").addEventListener("click", lower);
  document.querySelector("#correct").addEventListener("click", gameComplete);
  document.querySelector("#guesses").innerHTML = ("beforeend", `Mit gæt er: ${guess}`);
}

function higher() {
  min = guess;
  updateGuess();
}

function lower() {
  max = guess;
  updateGuess();
}

function gameComplete() {
  document.querySelector("#guesses").innerHTML = ("beforeend", `Yes! Jeg gættede det. Det korrekte svar var ${guess}`);
  document.querySelector("#button-list").innerHTML = ("beforeend", `<button id="retry">Prøv igen</button>`);
  document.querySelector("#retry").addEventListener("click", retryGame);
}
