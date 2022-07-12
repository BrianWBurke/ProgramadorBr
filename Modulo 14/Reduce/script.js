function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

function idadeDaTurma (total, aluno) {
    return total + aluno.idade;
}

function nomeDaTurma (nomezao, aluno) {
    return nomezao + aluno.nome;
}

//precisamos passar a função da soma e quanto o total começa(no caso é 0)
console.log(alunos.reduce(idadeDaTurma, 0))

//pode ser feito com strings tbm, nesse caso a string começa vazia
console.log(alunos.reduce(nomeDaTurma, ""))