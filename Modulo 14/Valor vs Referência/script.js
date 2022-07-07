//No js temos duas maneiras para atribuir, uma delas é por referência e outra por valor.

//dois exemplos:
//primeiro exemplo (atribuir por valor) se alterarmos o valor b o a continua com o msm valor, pois o js trata os dois como independentes.
// let numeroA = 1;

// let numeroB = 5;

// numeroB = numeroA;

// numeroB = 6;

// console.log(numeroA);
// console.log(numeroB);






//segundo exemplo (atribuir por referencia), como foi atribuido o segundo valor para turmaB o js aplicará para a turmaA também (por se tratar de array e objeto).
// let turmaA = ["Brian", "Icaro", "Stefani"];

// let turmaB = turmaA

// turmaB.push("Joao");

// console.log(turmaA);
// console.log(turmaB);

//Para corrigir esse problema usamos o slice():
// let turmaA = ["Brian", "Icaro", "Stefani"];

// let turmaB = turmaA.slice()

// turmaB.push("Joao");

// console.log(turmaA);
// console.log(turmaB);

//ou:
// let turmaA = ["Brian", "Icaro", "Stefani"];

// let turmaB = [...turmaA];

// turmaB.push("Joao");

// console.log(turmaA);
// console.log(turmaB);


//Para objetos:
// let alunoA = {nome: "Brian", idade: 24};

// let alunoB = Object.assign({}, alunoA);

// alunoB.idade = 30;

// console.log(alunoA);
// console.log(alunoB);

//ou:
let alunoA = {nome: "Brian", idade: 24};

let alunoB = {...alunoA};

alunoB.idade = 35;

console.log(alunoA);
console.log(alunoB);
