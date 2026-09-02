const tituloFilme = "Coraline";
const classificacaoMinima = 10;
const idadeEspectador = 12;
const podeAssistir = idadeEspectador >= classificacaoMinima;
console.log(podeAssistir);
document.getElementById("resultado").textContent = `"${tituloFilme}" ` +
` (${classificacaoMinima} anos)` +
` - idade ${idadeEspectador}: pode assistir? ${podeAssistir}`;
