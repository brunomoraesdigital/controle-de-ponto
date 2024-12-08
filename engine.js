const visorContadorElemento = document.getElementById('visorContador');
const visorVoltaElemento = document.getElementById('visorVolta');
const playIconeElemento = document.getElementById('playIcone');
const pauseIconeElemento = document.getElementById('pauseIcone');

const iniciarBotao = document.getElementById('iniciar');
const pararBotao = document.getElementById('parar');
const zerarBotao = document.getElementById('zerar');
const voltaBotao = document.getElementById('volta');

let segundosDoContador = 0;
let intervalo = 0;
let cronometroAtivo = false;
let cronometroPausado = false;
let cronometroParado = true;
let guardarVolta = [];
let indiceDasVoltas = 0


function iniciarCronometro() {
  if (cronometroAtivo === false && cronometroPausado === false) {
    if (cronometroParado === true) {
      visorContadorElemento.textContent = formatarTempo(segundosDoContador);
      cronometroParado = false;
      visorVoltaElemento.textContent = '';
      visorVoltaElemento.classList.add('esconder');
    }
    console.log('iniciar pressionado');
    cronometroAtivo = true;
    // true - false
    intervalo = setInterval(function () {
      segundosDoContador++;
      visorContadorElemento.textContent = formatarTempo(segundosDoContador);
    }, 1000);
    playIconeElemento.classList.toggle("esconder");
    pauseIconeElemento.classList.toggle("esconder");
  } else if (cronometroAtivo === true && cronometroPausado === false) {
    console.log('pausar pressionado');
    cronometroAtivo = false;
    cronometroPausado = true;
    playIconeElemento.classList.toggle("esconder");
    pauseIconeElemento.classList.toggle("esconder");
    // false - true
    clearInterval(intervalo);
  } else if (cronometroAtivo === false && cronometroPausado === true) {
    console.log('retomar pressionado');
    cronometroPausado = false;
    // false - false
    iniciarCronometro();
  }
}
function pararCronometro() {
  if ((cronometroAtivo === true && cronometroPausado === false) || (cronometroAtivo === false && cronometroPausado === true)) {
    console.log('parar pressionado');
    cronometroAtivo = false;
    cronometroPausado = false;
    cronometroParado = true;
    guardarVolta = [];
    indiceDasVoltas = 0;
    // false - false
    clearInterval(intervalo);
    segundosDoContador = 0;
    playIconeElemento.classList.remove('esconder');
    pauseIconeElemento.classList.add('esconder');
  }
}
function zerarCronometro() {
  if ((cronometroAtivo === true && cronometroPausado === false) || (cronometroAtivo === false && cronometroPausado === true)) {
    console.log('zerar pressionado');
    cronometroAtivo = false;
    cronometroPausado = false;
    guardarVolta = [];
    indiceDasVoltas = 0;
    visorVoltaElemento.textContent = '';
    visorVoltaElemento.classList.add('esconder');
    // false - false
    clearInterval(intervalo);
    segundosDoContador = 0;
    visorContadorElemento.textContent = formatarTempo(segundosDoContador);
    playIconeElemento.classList.remove('esconder');
    pauseIconeElemento.classList.add('esconder');
  }
}
function registrarVolta() {

  if (cronometroAtivo === true && cronometroPausado === false) {
    console.log('volta pressionado');
    visorVoltaElemento.classList.remove('esconder');

    let criarRegistro = false;

    if (guardarVolta.length < 20) {
      guardarVolta.push(segundosDoContador);
      criarRegistro = true;
    }
    else if (guardarVolta.length === 20) {
      guardarVolta.push('Atingiu limite!');
      criarRegistro = true;
    }
    else {
      criarRegistro = false;
    }

    if (criarRegistro === true) {
      const tagP = document.createElement('p');
      if (guardarVolta.length < 21) {
        if (guardarVolta.length > 1) {
          tagP.textContent = `Volta-${(indiceDasVoltas + 1).toString().padStart(2, '0')}: ${formatarTempo(guardarVolta[indiceDasVoltas] - guardarVolta[indiceDasVoltas - 1])}`;
        } else {
          tagP.textContent = `Volta-${(indiceDasVoltas + 1).toString().padStart(2, '0')}: ${formatarTempo(guardarVolta[indiceDasVoltas])}`;
        }
      } else {
        tagP.textContent = `${guardarVolta[indiceDasVoltas]}`;
      }
      visorVoltaElemento.appendChild(tagP);
      indiceDasVoltas++;
    }
  }
}

function formatarTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}



iniciarBotao.addEventListener('click', iniciarCronometro);
pararBotao.addEventListener('click', pararCronometro);
zerarBotao.addEventListener('click', zerarCronometro);
voltaBotao.addEventListener('click', registrarVolta);