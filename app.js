var total, activePlayer, scores, gamePlaying;

init();


//document.querySelector('.box').style.display = 'none';
document.querySelector('.roll').addEventListener('click', dice)

function dice(){
if(gamePlaying){
  let random = Math.floor((Math.random()*6) +1);

  let box = document.querySelector('.box');

  box.style.display = 'block';
  box.src = 'box-' + random + '.png';


  if(random !== 1){
    total+=random;
    document.querySelector('.score-' + activePlayer).innerText ='Current: '+ total;
  }
  else{
    nextPlayer();
  }
}


}

document.querySelector('.hold').addEventListener('click', hold)

function hold(){
  scores[activePlayer] += total;
  document.querySelector('.total-'+activePlayer).innerText='Total: '+ scores[activePlayer];

  if(scores[activePlayer] >= 100){
    document.querySelector('.total-'+activePlayer).innerText='You won!';
    document.querySelector('.total-'+activePlayer).classList.add('winner');
    document.querySelector('.player-'+activePlayer).classList.remove('active');
    gamePlaying = false;
  }
  else{
    nextPlayer();
  }


}



function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  total = 0;
  document.querySelector('.player-0').classList.toggle('active');
  document.querySelector('.player-1').classList.toggle('active');
}

document.querySelector('.new-game').addEventListener('click', init)



function init(){
  gamePlaying = true;
  total = 0;
  activePlayer = 0;
  scores=[0,0];
  document.querySelector('.total-0').classList.remove('winner');
  document.querySelector('.total-1').classList.remove('winner');
  document.querySelector('.score-'+activePlayer).innerText='Current: 0';
  document.querySelector('.total-'+activePlayer).innerText='Total: 0';
  document.querySelector('.score-1').innerText='Current: 0';
  document.querySelector('.total-1').innerText='Total: 0';
  document.querySelector('.player-'+activePlayer).classList.add('active');
  document.querySelector('.box').style.display = 'none';
}
