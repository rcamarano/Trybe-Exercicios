//LAKER E BOSTON CELTICS ESTÃO DISPUTANDO O TÍTULO DA NBA (LIGA DE BASQUETE AMERICANO).
//DESENVOLVA UMA FUNÇÃO QUE IRÁ RECEBER UM ARRAY DE CADA TIME CONTENDO A PONTUAÇÃO DAS PARTIDAS. ESTA FUNÇÃO DEVE RETORNAR QUAL TIME GANHOU MAIS PARTIDAS E SAGROU-SE CAMPEÃO.

function nbaChampion(lakers, celtics){
  let countLakers = 0;
  let countCeltics = 0;

  for(let index = 0; index < lakers.length; index += 1){
    if(lakers[index] > celtics[index]){
      countLakers += 1;
    } else {
      countCeltics += 1;
    }
  }

  if(countLakers > countCeltics){
    return 'Lakers foi o time campeão com ' + countLakers + ' vitórias';
  } else {
    return 'Celtics foi o time campeão com ' + countCeltics + ' vitórias';
  }
}

console.log(nbaChampion([106, 98, 107], [108, 99, 110]));
console.log(nbaChampion([106, 98, 107], [100, 96, 1]));