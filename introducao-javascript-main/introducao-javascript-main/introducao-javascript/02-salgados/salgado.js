const nomeSalgado = "Bauru";
const precoUnitario = 3.00;
const quantidade = 8;
const total = precoUnitario * quantidade;
console.log(`Total; R$ ${total}`);
document.getElementById("resultado").textContent = `${quantidade}x ${nomeSalgado} = R$ ${total.toFixed(2)}`;
