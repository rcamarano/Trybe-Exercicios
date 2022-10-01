window.onload = function () {
  let button = document.getElementById('start-race-btn');
  let player1 = document.getElementById('player1');
  let player2 = document.getElementById('player2');

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  button.addEventListener('click', function (){
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 200 + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 200 + 'px';

    let player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    let player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;
    
    if(player1Win){
      alert('PLAYER 1 GANHOU!');
      resetCars(player1, player2);
      document.getElementById('audioWinner').play();
    } 

    if(player2Win){
      alert('PLAYER 2 GANHOU!');
      resetCars(player1, player2);
      document.getElementById('audioWinner').play();
    } 

  });

  let alternatives = document.getElementById('players');
  let playerName = document.getElementById('selectPlayer');
  let carSelected = 1;

  alternatives.addEventListener('click', function(event){
    let capture = event.target.className;

    if(carSelected === 1){
      player1.className = `${capture}`;
      playerName.innerHTML = 'PLAYER 2';
      carSelected = 2;
    } else {
      player2.className = `${capture}`;
      playerName.innerHTML = 'PLAYER 1';
      carSelected = 1;
    }
  })

  function resetCars(player1, player2){
    player1.style.marginLeft = 0;
    player1.className = 'startCar';
    player2.style.marginLeft = 0;
    player2.className = 'startCar';

  }

}