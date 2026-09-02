const nomePet = "Pipow";
const vacinado = true;
const castrado = false;
const idadeMeses = 7;
const podeAdotar = vacinado && castrado && idadeMeses >= 2;
const mensagem = podeAdotar ? `${nomePet} "está pronto para adoção!"` : `${nomePet} "ainda precisa de cuidados antes da adoção."`;
document.getElementById("resultado").textContent = mensagem;