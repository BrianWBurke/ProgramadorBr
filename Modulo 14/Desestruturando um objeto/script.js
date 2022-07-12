var aluno = {
    matricula: 1234,
    nome: "Brian",
    telefone: 987654432,
    cidade: "Barra do piraí"
}

var aluno2 = {
    matricula: 1235,
    nome: "Igor",
    telefone: 98854845,
    cidade: "Barra do piraí"
}

var aluno3 = {
    matricula: 1236,
    nome: "João",
    telefone: 98854845,
    cidade: "Barra do piraí"
}

console.log(aluno);


//podemos criar variaveis para receber somente algumas informações
var { matricula, nome } = aluno;
console.log(matricula);
console.log(nome);

//ou até msm fazer uma cópia usando spread operator
var {...copia} = aluno;
copia.matricula = 654321;
console.log(aluno);
console.log(copia);

//ou pegar as informações e excluir o indesejavel
var {nome, ...copia2} = aluno;
console.log(copia2);
//para pegar essa informação precisamos utilizar "nome"
console.log(nome);

//tudo isso funciona para array
var alunos = [aluno, aluno2];

//lembrando que a posicão dentro dos colchetes nesse caso é importante, é como se o brian fosse [0] e igor [1], caso invertessemos igor seria [0] e brian[1], e iria imprimir informações erradas no console
var [ brian, igor ] = alunos;
console.log(brian);


//podemos utilizar o spread tbm
var alunosT = [aluno, aluno2, aluno3];
var [ brian, ...outros ] = alunosT;
console.log(brian);
console.log(outros);