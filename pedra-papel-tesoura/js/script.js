function jogadaComputador(){

  let numAleatorio = Math.random();

  let jogadaPC = '';
  
  if(numAleatorio >=0 && numAleatorio < 1/3){
    return jogadaPC = 'rock';
  } else if(numAleatorio >= 1/3 && numAleatorio < 2/3){
    return jogadaPC = 'paper';
  } else {
    return jogadaPC = 'scissors';
  }
};

