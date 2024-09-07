//Botões abaixo
const BotaoCadastrar = document.querySelector(".BotaoCadastro")
const BotaoLogar = document.querySelector(".BotaoLogIn")
//Formularios
const FormularioCadastro = document.querySelector(".Cadastro")
const FormularioLogIn = document.querySelector(".Login")
//Cor de Fundo Formulario
const FundoForm = document.querySelector(".fundoFormulario")

BotaoCadastrar.addEventListener("click", function() {
    FormularioCadastro.style.left = "39%"
    FormularioCadastro.style.transition = "1s"
    FundoForm.style.visibility = "visible"
})

BotaoLogar.addEventListener("click", function() {
    FormularioLogIn.style.left = "39%"
    FormularioLogIn.style.transition = "1s"
    FundoForm.style.visibility = "visible"
})

FundoForm.addEventListener("click", function() {
    FormularioCadastro.style.left = "-40%"
    FormularioLogIn.style.left = "-40%"
    FundoForm.style.visibility = "hidden"

})
