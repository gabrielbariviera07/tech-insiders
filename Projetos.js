// Temas de fundo
const BackGroundColorBlack = document.querySelector(".Escuro");
const BackGroundColorWhite = document.querySelector(".Claro");
// Itrns para exibição]
const BothItens = document.querySelector(".Ambos");
const OnlyImages = document.querySelector(".Imagens");
const OnlyVideos = document.querySelector(".Videos");

//Temas
BackGroundColorBlack.addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "#313131";
  document.querySelector("body").style.color = "#aaaaaa";
  document.querySelector(".header").style.backgroundColor = "#161616";
  document.querySelector(".header").style.color = "#aaaaaa";
  document.querySelector(".cron").style.backgroundColor = "#161616";
  document.querySelector(".sem").style.backgroundColor = "#161616";
  document.querySelector(".Painel").style.backgroundColor = "#161616";
  document.querySelector(".coluna-azul").style.backgroundColor = "#161616";
  document.querySelector("a").style.color = "#aaaaaa";
  document.querySelector(".HOME").style.color = "#aaaaaa";
  document.querySelector(".Quem-somos").style.color = "#aaaaaa";
  document.querySelector("footer").style.backgroundColor = "#0e0d0d";
  document.querySelector("body").style.transition = "0.5s";
});

BackGroundColorWhite.addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "#b1b0b0";
  document.querySelector("body").style.color = "black";
  document.querySelector(".header").style.backgroundColor = "#4a5981";
  document.querySelector(".header").style.color = "black";
  document.querySelector(".cron").style.backgroundColor = "#4a5981";
  document.querySelector(".sem").style.backgroundColor = "#4a5981";
  document.querySelector(".Painel").style.backgroundColor = "#4a5981";
  document.querySelector(".coluna-azul").style.backgroundColor = "#4a5981";
  document.querySelector("a").style.color = "black";
  document.querySelector(".HOME").style.color = "black";
  document.querySelector(".Quem-somos").style.color = "black";
  document.querySelector("footer").style.backgroundColor = "#333";
});
//Exibição 
BothItens.addEventListener("click", function() {

});

BothItens.addEventListener("click", function() {
     document.querySelector(".Projetos").style.display =  "flex"
     document.querySelector("main").style.display =  "flex"
     document.querySelector(".Botoes").style.bottom = "-25%"
     document.querySelector("footer").style.bottom = "-30%"
     document.querySelector(".Sub-titulo").style.display = "block"
})

OnlyImages.addEventListener("click", function() {
    document.querySelector(".Projetos").style.display =  "none"
    document.querySelector(".Sub-titulo").style.display = "none"
    document.querySelector(".Botoes").style.bottom = "50px"
    document.querySelector("footer").style.bottom = "0"
    document.querySelector("main").style.display =  "flex"
})

OnlyVideos.addEventListener("click", function() {
    document.querySelector("main").style.display =  "none"
    document.querySelector(".Botoes").style.bottom = "50px"
    document.querySelector("footer").style.bottom = "0"
    document.querySelector(".Projetos").style.display = "flex"
})
