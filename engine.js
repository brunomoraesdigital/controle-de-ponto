const visorContadorElemento = document.getElementById('visorContador');
const visorVoltaElemento = document.getElementById('visorVolta');
const playIconeElemento = document.getElementById('playIcone');
const pauseIconeElemento = document.getElementById('pauseIcone');

const iniciarBotao = document.getElementById('iniciar');
const pararBotao = document.getElementById('parar');
const zerarBotao = document.getElementById('zerar');
const voltaBotao = document.getElementById('volta');

let numerosDoContador = 0;
let intervalo= 0;
let cronometroAtivo = false;
let cronometroPausado = false;
let cronometroParado = true;


function iniciarCronometro() {
  if (cronometroAtivo == false && cronometroPausado == false) {
    console.log('iniciar pressionado');
    cronometroAtivo = true;
    // true - false
    intervalo = setInterval(function () {
      numerosDoContador++;
      visorContadorElemento.textContent = numerosDoContador;
    }, 1000);
    playIconeElemento.classList.toggle("esconder");
    pauseIconeElemento.classList.toggle("esconder");
  } else if (cronometroAtivo == true && cronometroPausado == false) {
    console.log('pausar pressionado');
    cronometroAtivo = false;
    cronometroPausado = true;
    playIconeElemento.classList.toggle("esconder");
    pauseIconeElemento.classList.toggle("esconder");
    // false - true
    clearInterval(intervalo);
  } else if (cronometroAtivo == false && cronometroPausado == true) {
    console.log('retomar pressionado');
    cronometroPausado = false;
    // false - false
    iniciarCronometro();
  }
}
function pararCronometro() {
if (cronometroAtivo == true || cronometroParado == true) {
  console.log('parar pressionado');
  cronometroAtivo = false;
  cronometroPausado = false;
  // false - false
  clearInterval(intervalo);
  numerosDoContador = 0;
  playIconeElemento.classList.remove('esconder');
  pauseIconeElemento.classList.add('esconder');
}
}
function zerarCronometro () {
  console.log('zerar pressionado');
  cronometroAtivo = false;
  cronometroPausado = false;
  // false - false
  clearInterval(intervalo);
  numerosDoContador = 0;
  visorContadorElemento.textContent = numerosDoContador;
  playIconeElemento.classList.remove('esconder');
  pauseIconeElemento.classList.add('esconder');
}
function registrarVolta () {
  console.log('volta pressionado');
}

iniciarBotao.addEventListener('click', iniciarCronometro);
pararBotao.addEventListener('click', pararCronometro);
zerarBotao.addEventListener('click', zerarCronometro);
voltaBotao.addEventListener('click', registrarVolta);