let livrosDisponiveis = 15;
livrosDisponiveis -= 9; //3 livros foram emprestados
livrosDisponiveis += 5; //1 livro foi devolvido

console.log(livrosDisponiveis);
document.getElementById("resultado").textContent = `Livros disponíveis na estante: ${livrosDisponiveis}`;