const resultText = document.querySelector('.result');
const resetBtn = document.querySelector('.reset')
const rollBtn = document.querySelector('.roll');
const editBtn = document.querySelector('.edit');
const player1Score = document.querySelector('.p1Score');
const player2Score = document.querySelector('.p2Score');

const player1Name = document.querySelector('.p1Name');
const player2Name = document.querySelector('.p2Name');


let player1 = 0;
let player2 = 0;

const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');

let p1Name = player1Name.textContent;
let p2Name = player2Name.textContent;

resetBtn.addEventListener('click', () =>{
    player1 = 0;
    player2 = 0;

    player1Score.textContent = `${p1Name}: ${player1}`;
    player2Score.textContent = `${p2Name}: ${player2}`;
});

editBtn.addEventListener('click', ()=>{
    p1Name =  prompt('Enter player 1 name:');
    p2Name = prompt('Enter player 2 Name:');

    player1Name.textContent = p1Name;
    player2Name.textContent = p2Name;

});

rollBtn.addEventListener('click' , ()=>{
    let sound = new Audio('/sounds/diceRoll.mp3');
    sound.play();
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
   
    dice1.setAttribute('src', `images/${randomNumber1}.png`);
    dice2.setAttribute('src', `images/${randomNumber2}.png`);

    if(randomNumber1 === randomNumber2){
        resultText.textContent = `Draw`;
        player1++;
        player2++;
        player1Score.textContent = `${p1Name}: ${player1}`;
        player2Score.textContent = `${p2Name}: ${player2}`;

    } else if (randomNumber1 > randomNumber2){
        resultText.textContent = ` 🚩 ${p1Name} Wins `
        player1++;
        player1Score.textContent = `${p1Name} : ${player1}`;
        player2Score.textContent = `${p2Name}: ${player2}`;

    } else {

        resultText.textContent = `${p2Name} Wins 🚩`
        player2++;
        player1Score.textContent = `${p1Name} : ${player1}`;
        player2Score.textContent = `${p2Name}: ${player2}`;

    }
});
