function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}



let visor = document.getElementById("visor");

let numero1 = "";
let operador = "";

function abrirCalc() {
  let calc = document.getElementById("calc-box");

  if (calc.style.display === "none") {
    calc.style.display = "block";
  } else {
    calc.style.display = "none";
  }
}

function add(valor) {
  visor.value += valor;
}

function operacao(op) {
  numero1 = visor.value;
  operador = op;
  visor.value = "";
}

function calcular() {
  let numero2 = visor.value;
  let resultado = 0;

  if (operador === "+") resultado = Number(numero1) + Number(numero2);
  if (operador === "-") resultado = Number(numero1) - Number(numero2);
  if (operador === "*") resultado = Number(numero1) * Number(numero2);
  if (operador === "/") resultado = Number(numero1) / Number(numero2);

  visor.value = resultado;
}

function limpar() {
  visor.value = "";
}
