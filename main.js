//Selecionando elementos do DOM
const inputPeso = document.getElementById("inputPeso");
const inputAlt = document.getElementById("inputAlt");
const rdbF = document.getElementById("rdbF");
const rdbM = document.getElementById("rdbM");
const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");
const btnCalc = document.getElementById("btnCalc");
const btnLimp = document.getElementById("btnLimp");

let imc;

// autentica os campos, checando se são números e se não estão vazio
function autenticacao() {
  //Ta checando se o valor não é número
  if (isNaN(inputPeso.value) || inputPeso.value == "") {
    alert("Digite um valor válido(número) para o peso!");
    inputPeso.focus();
  } else if (isNaN(inputAlt.value) || inputAlt.value == "") {
    alert("Digite um valor válido(número) na altura!");
    inputAlt.focus();
  } else if (rdbF.checked == false && rdbM.checked == false) {
    alert("Escolha o sexo!");
  } else {
    return true;
  }
}

btnCalc.addEventListener("click", function (event) {
  event.preventDefault();

  if (autenticacao()) {
    imc = inputPeso.value / (inputAlt.value * inputAlt.value);
    //atribuimos o texto dentro do paragrafo igual ao imc
    resultado.textContent = imc.toFixed(2);
    mensagemPeloImc();
  }
});

function mensagemPeloImc() {
  //radio button estiver preenchido
  if (rdbF.checked == true) {
    if (imc < 19) {
      mensagem.textContent = "Peso abaixo do normal";
    } else if (imc < 23.9) {
      mensagem.textContent = "Peso normal";
    } else if (imc < 28.9) {
      mensagem.textContent = "Obesidade leve";
    } else if (imc < 38.9) {
      mensagem.textContent = "Obesidade moderada";
    } else {
      mensagem.textContent = "Obesida mórbida, toma cuidado!";
    }
  } else {
    if (imc < 20) {
      mensagem.textContent = "Peso abaixo do normal";
    } else if (imc < 24.9) {
      mensagem.textContent = "Peso normal";
    } else if (imc < 29.9) {
      mensagem.textContent = "Obesidade leve";
    } else if (imc < 39.9) {
      mensagem.textContent = "Obesidade moderada";
    } else {
      mensagem.textContent = "Obesida mórbida, toma cuidado!";
    }
  }
}

btnLimp.addEventListener("click", function (event) {
  event.preventDefault();

  inputPeso.value = "";
  inputAlt.value = "";
  rdbF.checked = false;
  rdbM.checked = false;
  resultado.textContent = "";
  mensagem.textContent = "";

  inputPeso.focus();
});
