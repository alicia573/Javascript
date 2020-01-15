
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
        hasFlippedCard = true;1
        firstCard = this;

      return;
      }
       //second click

       secondCard = this;

       checkForMath();
    }
    function checkForMath (){
      let isMatch = firstCard.dataset.framework ===
        secondCard.dataset.framework;
      isMatch ? disableCards(): unFlipCards();addClicker();
    }
    //score settling
    var score = 0;
    var clickers = 0;

    function scoreUp(num){
      score = score + num;
      document.getElementById('score').innerHTML = 'Score: ' + score;
    }
    function addClicker(){
      if(score >= 9){
        clickers ++;
        score = score - 10;
        document.getElementById('score').innerHTML = 'Score: ' + score;
      }
    }
    while(1===1)
      setTimeout(scoreUp(clickers), 1000);

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
        },1500);
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
