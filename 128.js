// 128A

var point = 0;
var pointStep = 1;

showScore();

function showScore() {
  document.getElementById("box128A").innerHTML = /*html*/ `
    <h1>Points Game </h1>
    <h2 id="score">0</h2>
    <button onclick="scorePoint()">Score Point</button>
    <button onclick="upgrade()">Upgrade</button>
    <button onclick="reload()">Reset</button>
    `;
}

function scorePoint() {
  point = point + pointStep;
  document.getElementById("score").innerHTML = point;
}

function upgrade() {
  if (point >= 10) {
    point = point - 10;
    pointStep++;
    document.getElementById("score").innerHTML = point;
  }
  return;
}

// 128B and 128C

getRandomNumber(1, 10)
showGame();
var secretNumber;
var tries = 0;

function getRandomNumber(min, max) {
  return secretNumber = min + Math.floor(Math.random() * (max - min + 1));
}

function showGame() {
    document.getElementById('box128B').innerHTML = /*html*/ `
    <h1>Guessing Game &#10067&#10067&#10067 </h1>
    <label for="number">Guess the secret number:</label>
    <input type="number" id="number"><br>
    <p id="attempts"></p>
    <button onclick="checkNumber()">Guess</button>
    <button onclick="reload()">Reset</button>
    <p id="result"></p>
    `;   
}

function checkNumber() {
    tries++;
    const guess = parseInt(document.getElementById('number').value)
    const dom = document.getElementById('result')

    document.getElementById('attempts').innerHTML = "Attempts: "+ tries

    if (guess === secretNumber) {
       dom.innerHTML = 'Correct!'
    } else {
        dom.innerHTML = 'Try Again!'
    }
}

// 128D
var computer;

gameSetup()

function getRandomNumber2(min, max) {
  const secretNumber = min + Math.floor(Math.random() * (max - min + 1));
  if (secretNumber === 1) {
    return "rock"
  } else if (secretNumber === 2) {
    return "scissors"
  } else if (secretNumber === 3) {
    return "paper"
  }
}

function gameSetup() {
  document.getElementById('box128D').innerHTML += /*html*/ `
  <h1>&#128142 Rock, &#128240 Paper,  Scissors &#9986</h1>
  <h2 id="computerAnswer"></h2>
  <button onclick="reload()">Play again</button>
  `;
  buttons('rock')
  buttons('scissors')
  buttons('paper')
  const element = getRandomNumber2(1,3)
  computer = element
}

function buttons(option) {
  document.getElementById('box128D').innerHTML += /*html*/ `
  <button id='${option}' onclick="checkAnswer('${option}')">${option}</button>
  `;
}

function checkAnswer(element) {
  const answerTag = document.getElementById("computerAnswer");
  if(computer === element) {
    answerTag.innerHTML = `It's a Tie`
  } else if (computer === 'scissors' && element === 'paper') {
    answerTag.innerHTML = `Computer wins!!`
  } else if (computer === 'scissors' && element === 'rock') {
    answerTag.innerHTML = `Congratulations! You win!!`
  } else if (computer === 'rock' && element === 'paper') {
    answerTag.innerHTML = `Congratulations! You win!!`
  } else if (computer === 'rock' && element === 'scissors') {
    answerTag.innerHTML = `Computer wins!!`
  } else if (computer === 'paper' && element === 'scissors') {
    answerTag.innerHTML = `Congratulations! You win!!`
  } else if (computer === 'paper' && element === 'rock') {
    answerTag.innerHTML = `Computer wins!!`
  }

  document.getElementById('rock').disabled=true
  document.getElementById('scissors').disabled=true
  document.getElementById('paper').disabled=true
}

function reload() {
  location.reload()
}

// 128E
var previousIndex;
const activeBox = document.getElementsByClassName('innerBox');
var time;


showOuterBox()
showActiveBox(0,8)

function showOuterBox() {
  document.getElementById('box128E').innerHTML += /*html*/ `
  <h1>Reaction Time Game </h1>
  <p id="reactionTime"></p>
  <div id="innerDiv"></div>
  `;
  innerBox();
  innerBox();
  innerBox();
  innerBox();
  innerBox();
  innerBox();
  innerBox();
  innerBox();
  innerBox();
}

function innerBox() {
  document.getElementById('innerDiv').innerHTML += /*html*/ `
  <div class="innerBox"></div>
  `; 
}

function clickActiveBox() {
  const clickTime = new Date().getTime()
  const timeDiff = (clickTime-time)/1000
  document.getElementById('reactionTime').innerHTML = `Reaction time: ${timeDiff} seconds`;

  activeBox[previousIndex].classList.remove("active")
  activeBox[previousIndex].removeAttribute("onclick")

  showActiveBox(0,8)
}

function showActiveBox(min, max) {
  const randomIndex = min + Math.floor(Math.random() * (max - min + 1));

  activeBox[randomIndex].classList.add("active");
  activeBox[randomIndex].setAttribute("onclick", "clickActiveBox()")

  time = new Date().getTime()

  previousIndex = randomIndex
}