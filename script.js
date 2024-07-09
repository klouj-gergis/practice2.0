'use strict';


/* console.log(document.querySelector('.message').textContent)


document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.guess').value = 23)
 */





let secretNumber = Math.trunc(Math.random() * 20)+1        

let highScore = 0
let score = 20
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent = 'No number!'
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        console.log(secretNumber)
// High score
        if(score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    }else if(guess > 20){
        document.querySelector('.message').textContent = `out of the guess range! (1 - 20)`
    }else if(guess !== secretNumber){
        if(score > 1){
            console.log(score)
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!': 'Too low!'
            score--
            console.log(score)
            document.querySelector('.score').textContent = score
        }else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
})


document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = 20
    score = 20
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    secretNumber = Math.trunc(Math.random() * 20)+1
    console.log(secretNumber)
})