const BackGroundColorBlack = document.querySelector(".Escuro")
const BackGroundColorWhite = document.querySelector(".Claro")

BackGroundColorBlack.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#313131"
    document.querySelector(".header").style.backgroundColor = "#161616"
    document.querySelector(".coluna-azul").style.backgroundColor = "#161616"
    document.querySelector("body").style.color = "#aaaaaa"
    document.querySelector("footer").style.backgroundColor = "#0e0d0d"
    document.querySelector("a").style.color = "#aaaaaa"
    document.querySelector(".botoesPag").style.color = "#aaaaaa"
    document.querySelector(".botoesPagProjetos").style.color = "#aaaaaa"
    document.querySelector("body").style.transition = "0.5s"
})

BackGroundColorWhite.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#b1b0b0"
    document.querySelector(".header").style.backgroundColor = "#4a5981"
    document.querySelector(".coluna-azul").style.backgroundColor = "#4a5981"
    document.querySelector("body").style.color = "black"
    document.querySelector(".botoesPag").style.color = "black"
    document.querySelector(".botoesPagProjetos").style.color = "black"
    document.querySelector("a").style.color = "black"
})
