const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");
const texto = document.getElementById("redemensionar");


const alerta = () => {
    alert("O botao foi pressionado!");
}

const mudarCor = () => {
    titulo.style.color = "green";
}

const redemensionar = () => {
    texto.style.backgroundColor = "grey";
} 





botao.addEventListener("click",alerta);
titulo.addEventListener("mouseover",mudarCor);
window.addEventListener("resize", redemensionar); 
