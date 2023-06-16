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

        } else if (cpuMove === 'paper'){
            result = 'You Lost to cpu';

        } else if (cpuMove === 'scissors'){
            result = 'You won'
        }
    } else if (playerMove === 'paper'){

        if(cpuMove === 'rock'){
            result = 'You won'

        } else if (cpuMove === 'paper'){
            result = 'Its tie';

        } else if (cpuMove === 'scissors'){
            result = 'You lost to cpu'
        } 
    } else if (playerMove === 'scissors'){

        if(cpuMove === 'rock'){
            result = 'You lost'

        } else if (cpuMove === 'paper'){
            result = 'you won';

        } else if (cpuMove === 'scissors'){
            result = 'its tie';
        } 
    }

    alert(`You picked rock, Cpu picked ${cpuMove}, result is ${result}`)
}


