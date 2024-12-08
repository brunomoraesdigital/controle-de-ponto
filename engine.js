const visorContadorElemento = document.getElementById('visorContador');
const visorVoltaElemento = document.getElementById('visorVolta');

const iniciarBotao = document.getElementById('iniciar');
const pararBotao = document.getElementById('parar');
const zerarBotao = document.getElementById('zerar');
const voltaBotao = document.getElementById('volta');

let numerosDoContador = 0;
let intervalo= 0;


function iniciarCronometro() {
  console.log('iniciar');
  intervalo = setInterval(function () {
    numerosDoContador++;
    visorContadorElemento.textContent = numerosDoContador;
  }, 1000);
}
function pausarCronometro () {
  console.log('pausar');
}
function pararCronometro() {
  console.log('parar');
  clearInterval(intervalo);
}
function zerarCronometro () {
  console.log('zerar');
}
function registrarVolta () {
  console.log('volta');
}

iniciarBotao.addEventListener('click', iniciarCronometro);
pararBotao.addEventListener('click', pararCronometro);
zerarBotao.addEventListener('click', zerarCronometro);
voltaBotao.addEventListener('click', registrarVolta);