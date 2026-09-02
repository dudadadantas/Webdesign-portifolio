const nomeHospede = "Anna";
const valorDiaria = 180;
const noites = 10;
const temDesconto = noites >= 10;
const fatorDesconto = temDesconto ? 0.9 : 1;
const totalReserva = valorDiaria * noites * fatorDesconto;
console.log(totalReserva);
document.getElementById("resultado").textContent = `Reserva de ${nomeHospede} ${noites} noites - total R$ ${totalReserva.toFixed(2)}}`