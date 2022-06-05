
var aluno = {
    nome: "João", notas: [7.5, 5.0]
}

var novaProp = "sobrenome";

aluno.matricula = 12345;

aluno[novaProp] = "Oliveira";

console.log(aluno);