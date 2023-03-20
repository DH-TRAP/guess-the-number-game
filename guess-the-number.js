'use strict';
//Declaring Global values
//generates a random number form 1 to 6.
let secretNum = Math.trunc(Math.random() * 6) + 1;
//to maintain score and high score.
let score = 10;
let highScore = 0;

//Sets 0 as by default value for input field.
document.querySelector('.guess').value = 0;

//Function to reverse the Game Winning effects.
const gotoStart = function(){
    changeTextContent('.status', 'Start Guessing...');
    changeBg('.line','#FFFFFF');
    changeBg('.reveal','#FFFFFF');
    changeColor('.status','#FFFFFF');
    changeColor('.reveal','#000000');
    document.querySelector('.reveal').textContent='?';
    changeTextContent('.scoreVal', score);
}
//This function replaces the value of element's text with message.
const changeTextContent = function(el, message){
    document.querySelector(el).textContent = message;
}
//This function changes the BG colour of an element.
const changeBg = function(el, colour){
    document.querySelector(el).style.backgroundColor = colour;
}
//This function changes the colour of element's text.
const changeColor = function(el, colour){
    document.querySelector(el).style.color = colour;
}

//Setting On-Click event for Play Again Button.
document.querySelector('.playAgain').addEventListener('click', function(){
    score = 10;
    secretNum = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.guess').value = "0";
    gotoStart();
});
//Setting On-Click event for Check Button to check guess.
document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    if(guess == ''){changeTextContent('.status', 'Please Enter a number.')}
    else{
    //checking if number is between 1 to 6.
    if(guess < 1 || guess > 6) {
        gotoStart(); 
        changeTextContent('.status', 'The Number is between 1 to 6.')
    }
    else{
            //Winning Condition
            if(secretNum == guess){
                    changeTextContent('.status', 'Correct Number!!🎊🎊');
                    changeBg('.line','#4FAF44');
                    changeBg('.reveal','#4FAF44');
                    changeColor('.status','#4FAF44');
                    changeColor('.reveal','#FFFFFF');
                    changeTextContent('.reveal', guess);
                    if( score > highScore){
                    highScore = score;
                    changeTextContent('.highScoreVal', highScore);
                    }
            }
            //Reducing Score as guess was high.
            else if(guess > secretNum && score>0){
                    score--;
                    gotoStart();
                    changeTextContent('.status', 'Too High');
            }
            //Reducing Score as guess was low.
            else if(score>0){ 
                    score--;
                    gotoStart();
                    changeTextContent('.status', 'Too Low');
            };
        };
    };
});
