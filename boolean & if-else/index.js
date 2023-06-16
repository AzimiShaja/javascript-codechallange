const score = {
    wins: 0,
    losses: 0,
    ties: 0
};


function pickComputerMove(){
    const randomMove = Math.floor(Math.random() * 3 + 1);

    let computerMove = '';

    if ( randomMove == 1){
        computerMove = 'rock';   
    } else if (randomMove == 2){
        computerMove = 'paper';
    } else if (randomMove == 3){
        computerMove = 'scissors'
    }
    return computerMove;
}

function checkWinner(playerMove){
    let cpuMove = pickComputerMove(); 
    let result = ' ';

    if ( playerMove === 'rock'){

        if(cpuMove === 'rock'){
            result = 'Its Tie'
            score.ties++;

        } else if (cpuMove === 'paper'){
            result = 'You Lost to cpu';
            score.losses++;

        } else if (cpuMove === 'scissors'){
            result = 'You won'
            score['wins']++;
        }
    } else if (playerMove === 'paper'){

        if(cpuMove === 'rock'){
            result = 'You won'
            score.wins++;

        } else if (cpuMove === 'paper'){
            result = 'Its tie';
            score.ties++;

        } else if (cpuMove === 'scissors'){
            result = 'You lost to cpu'
            score.losses++;
        } 
    } else if (playerMove === 'scissors'){

        if(cpuMove === 'rock'){
            result = 'You lost'
            score.losses++;

        } else if (cpuMove === 'paper'){
            result = 'you won';
            score.wins++;

        } else if (cpuMove === 'scissors'){
            result = 'its tie';
            score.ties++;
        } 
    }

    alert(`You picked rock, Cpu picked ${cpuMove}, result is ${result}
Wins: ${score.wins}, Losses: ${score.losses},  Ties: ${score.ties}
    `)
}
function resetGame(){
    score.losses = 0;
    score.ties = 0;
    score.wins= 0;
}
