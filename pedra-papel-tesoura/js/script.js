function jogadaComputador(){

  let numAleatorio = Math.random();
  if (numAleatorio >=0 && numAleatorio < 1/3){
    jogadaPC = 'pedra';
  } else if (numAleatorio >= 1/3 && numAleatorio < 2/3){
    jogadaPC = 'papel';
  } else {
    jogadaPC = 'tesoura';
  }
  return jogadaPC;
};

let placar = {
  vitoria: 0,
  derrota: 0,
  empate: 0
};

function jogo(jogadaJogador){
  const jogadaPC = jogadaComputador();
  
  let resultado = {
    ganhou: 'Você ganhou.',
    perdeu: 'Você perdeu.',
    empate: 'Empate.',
  };

  if (jogadaJogador === 'pedra'){
    if (jogadaPC === 'papel'){
      resultado = resultado.perdeu;
      placar.derrota++;
    } else if (jogadaPC === 'tesoura'){
      resultado = resultado.ganhou;
      placar.vitoria++;
    } else{
      resultado = resultado.empate;
      placar.empate++;
    };
};

  if (jogadaJogador === 'papel'){
    if(jogadaPC === 'pedra'){
      resultado = resultado.ganhou;
      placar.vitoria++;
    } else if (jogadaPC === 'tesoura'){
      resultado = resultado.perdeu;
      placar.derrota++;
    } else{
      resultado = resultado.empate;
      placar.empate++;
    };
  };

  if (jogadaJogador === 'tesoura'){
    if (jogadaPC === 'papel'){
      resultado = resultado.ganhou;
      placar.vitoria++;
    } else if (jogadaPC === 'pedra'){
      resultado = resultado.perdeu;
      placar.derrota++;
    } else{
      resultado = resultado.empate;
      placar.empate++;
    };
  };

  document.querySelector('.p-resultado')
    .innerHTML = resultado;                                  

  document.querySelector('.p-jogadas')
    .innerHTML = `Você: <img src="img/${jogadaJogador}.png" class="btn-jogadaa">  <img src="img/${jogadaPC}.png" class="btn-jogadaa"> Computador`;

    placarAtualizado();

};

function resetarPlacar(){
  placar.vitoria = 0;
  placar.derrota =  0;
  placar.empate = 0;
  placarAtualizado();
};

function placarAtualizado(){

  document.querySelector('.p-placar')
  .innerHTML = `Vitória: ${placar.vitoria} Derrota: ${placar.derrota} Empate: ${placar.empate}`;

};



