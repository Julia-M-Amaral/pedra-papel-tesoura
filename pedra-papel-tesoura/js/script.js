

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
  
}

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
    } else if (jogadaPC === 'tesoura'){
      resultado = resultado.ganhou;
    } else{
      resultado = resultado.empate;
    };
};

  if (jogadaJogador === 'papel'){
    if(jogadaPC === 'pedra'){
      resultado = resultado.ganhou;
    } else if (jogadaPC === 'tesoura'){
      resultado = resultado.perdeu;
    } else{
      resultado = resultado.empate;
    };
  };

  if (jogadaJogador === 'tesoura'){
    if (jogadaComputador === 'papel'){
      resultado = resultado.ganhou;
    } else if (jogadaComputador === 'pedra'){
      resultado = resultado.perdeu;
    } else{
      resultado = resultado.empate;
    }
    
  }
console.log(`Voce escolheu: ${jogadaJogador} - Computador escolheu: ${jogadaPC}. Resultado: ${resultado}`);

}


