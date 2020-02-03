
const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var setScoreText;

function flipCard(){
  if( lockBoard) return;
  if(this === firstCard)return;

  this.classList.add('flip');

  if(!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  //second click

  secondCard = this;

  checkForMath();
}
function flipSound() {
  if(hasFlippedCard){
    mySound = new sound("video.mp4");
  }
}
function checkForMath (){
  let isMatch = firstCard.dataset.framework ===
    secondCard.dataset.framework;
  isMatch ? disableCards(): unFlipCards(); winner();flipSound();
  isMatch ? scoreUp(0): addClicker(); winner();flipSound();
}
//score settling
var score = 0;
var clickers = 0;

    function scoreUp(num){
      score = score + num;
      score++;
      document.getElementById('score').innerHTML =  "Score:" + score;
    }
    function addClicker(){
      if(score >= 9){
        clickers ++;
        document.getElementById('score').innerHTML = "Score:"+ score;
      }
    }

    function winner() {
        if(score === 9){
          document.getElementById('winner').innerHTML = "WINNER!! ";
          console.log("winner");
        }
    }
    function disableCards (){
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    }
    function unFlipCards(){
      lockBoard= true;
        setTimeout(() =>
        {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
          resetBoard();
          lockBoard = false;
        },1300);
    }
    (function shuffle(){
      cards.forEach(card => {
         let randomPos = Math.floor(Math.random() * 18);
        card.style.order = randomPos;
        });
    })();
    function resetBoard() {
      [hasFlippedCard,lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
    cards.forEach(card => card.addEventListener
    ('click', flipCard));
