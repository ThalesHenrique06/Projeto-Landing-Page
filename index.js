var setadireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function rolarparadireita() {
    leonardo.style ="display: none"
    bruna.style ="display: flex"
    setadireita.style ="display: none"
    setaesquerda.style ="display: flex; margin-top: 55px"
}

function rolarparaesquerda() {
    leonardo.style ="display: flex"
    bruna.style ="display: none"
    setadireita.style ="display: flex; margin-top: 55px"
    setaesquerda.style ="display: none"
}