//Botões abaixo
const BotaoCadastrar = document.querySelector(".BotaoCadastro");
const BotaoLogar = document.querySelector(".BotaoLogIn");
//Formularios
const FormularioCadastro = document.querySelector(".Cadastro");
const FormularioLogIn = document.querySelector(".Login");
//Cor de Fundo Formulario
const FundoForm = document.querySelector(".fundoFormulario");
// Temas de Fundo
const TemaClaro = document.querySelector(".Claro");
const TemaEscuro = document.querySelector(".Escuro");

BotaoCadastrar.addEventListener("click", function () {
  FormularioCadastro.style.left = "39%";
  FormularioCadastro.style.transition = "1s";
  FundoForm.style.visibility = "visible";
});

BotaoLogar.addEventListener("click", function () {
  FormularioLogIn.style.left = "39%";
  FormularioLogIn.style.transition = "1s";
  FundoForm.style.visibility = "visible";
});

FundoForm.addEventListener("click", function () {
  FormularioCadastro.style.left = "-40%";
  FormularioLogIn.style.left = "-40%";
  FundoForm.style.visibility = "hidden";
});

//Temas funcionamento
TemaEscuro.addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "#313131";
  document.querySelector("body").style.color = "#aaaaaa";
  document.querySelector(".navbar").style.backgroundColor = "#161616";
  document.querySelector("h1").style.color = "#aaaaaa";
  document.querySelector(".coluna-azul").style.backgroundColor = "#161616";
  document.querySelector(".HOME").style.color = "#aaaaaa";
  document.querySelector(".Quem-somos").style.color = "#aaaaaa";
  document.querySelector(".Projetos").style.color = "#aaaaaa";
  document.querySelector(".BotaoCadastro").style.backgroundColor = "#161616";
  document.querySelector(".BotaoLogIn").style.backgroundColor = "#161616";
  document.querySelector(".BotaoCadastro").style.color = "#aaaaaa";
  document.querySelector(".BotaoLogIn").style.color = "#aaaaaa";
  document.querySelector(".BotaoCadastro").style.border = "none";
  document.querySelector(".BotaoLogIn").style.border = "none";
  document.querySelector(".Cadastro").style.backgroundColor = "#313131"
  document.querySelector(".BotaoCadastrar").style.backgroundColor = "#161616"
  document.querySelector("footer").style.backgroundColor = "#0e0d0d"
  document.querySelector(".Login").style.backgroundColor = "#313131"
  document.querySelector(".BotaoEntrar").style.backgroundColor = "#161616"
  document.querySelector("body").style.transition = "0.3s";
});

TemaClaro.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#b1b0b0";
    document.querySelector("body").style.color = "black";
    document.querySelector(".navbar").style.backgroundColor = "#4A5981";
    document.querySelector("h1").style.color = "black";
    document.querySelector(".coluna-azul").style.backgroundColor = "#4A5981";
    document.querySelector(".HOME").style.color = "black";
    document.querySelector(".Quem-somos").style.color = "black";
    document.querySelector(".Projetos").style.color = "black";
    document.querySelector(".BotaoCadastro").style.backgroundColor = "#4A5981";
    document.querySelector(".BotaoLogIn").style.backgroundColor = "#4A5981";
    document.querySelector(".BotaoCadastro").style.color = "black";
    document.querySelector(".BotaoLogIn").style.color = "black";
    document.querySelector(".BotaoCadastro").style.border = "1px solid rgb(86, 145, 223)";
    document.querySelector(".BotaoLogIn").style.border = "1px solid rgb(86, 145, 223)";
    document.querySelector(".Cadastro").style.backgroundColor = "#4A5981"
    document.querySelector(".BotaoCadastrar").style.backgroundColor = "#43ccdf"
    document.querySelector("footer").style.backgroundColor = "#333"
    document.querySelector(".Login").style.backgroundColor = "#4A5981"
    document.querySelector(".BotaoEntrar").style.backgroundColor = "#43ccdf"
})
