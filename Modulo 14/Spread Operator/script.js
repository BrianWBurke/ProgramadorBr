//ex1
// var pessoa = {
//     nome: "josé Silva",
//     idade: 32
// }

// var contato = {
//     telefone: 87654322,
//     email: "jose@gmail.com"
// }

// var copia = { ...pessoa, cidade: "Rio de Janeiro", ...contato}
// copia.idade = 88;

// console.log(pessoa);
// console.log(copia);


//ex2
var notas_turma1 = [10, 8, 4, 3];

var notas_turma2 = [4, 5, 4, 6];

var todas_notas = [...notas_turma1, ...notas_turma2];

console.log(todas_notas);

