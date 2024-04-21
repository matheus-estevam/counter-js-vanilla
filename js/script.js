const botaoAdicionar = document.querySelector("#increase");
const botaoDiminuir = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const resultado = document.querySelector("#result");
let counter = 0;
resultado.innerHTML = counter;

function adicionar() {
  counter++;
  resultado.innerHTML = counter;
  if (counter > 0) {
    resultado.style.color = "green";
  }
}

function dimininuir() {
  counter--;
  resultado.innerHTML = counter;
  if (counter < 0) {
    resultado.style.color = "red";
  }
}

function inicio() {
  counter = 0;
  resultado.innerHTML = counter;
  if (counter === 0) {
    resultado.style.color = "black";
  }
}

console.log(counter);

botaoAdicionar.addEventListener("click", adicionar);
botaoDiminuir.addEventListener("click", dimininuir);
reset.addEventListener("click", inicio);
