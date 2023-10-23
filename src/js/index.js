const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click",()=>{
    //Alterna adicionando ou removendo a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if(modoEscuroEstaAtivo){
        imagemBotaoAlterarTema.setAttribute("src","./src/images/sun.png");
    }else{
        imagemBotaoAlterarTema.setAttribute("src","./src/images/moon.png");
    }
    
});