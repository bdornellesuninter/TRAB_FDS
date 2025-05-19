let botao = document.querySelector("#botao");
const frase = document.querySelector("#frase");

botao.addEventListener("click", clicou);

function clicou(){
    frase.innerHTML="Bem vindo(a), ao trabalho da disciplína de fundamentos de desenvolvimento de software, realizado por Bruno Dornelles.";
}