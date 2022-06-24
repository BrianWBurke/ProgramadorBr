
function novoAluno (nome, idade) {
    return{nome, idade};
}

let alunos =[
    novoAluno('Mario', 23),
    novoAluno('José', 45),
    novoAluno('Marcia', 29),
    novoAluno('João', 35)
]

// filtrando alunos com - de 30 anos
// for (let aluno of alunos) {
//     if(aluno.idade < 30) {
//         console.log(aluno.nome);
//     }
// }


// temos uma maneira melhor de fazer o for de cima com filter:
// basicamente utilizamos também o conceito de callback nesse exemplo

// se for menor do que 30 ele retorna true, caso contrário false
// function temMenosde30(aluno) {
    
//     return aluno.idade < 30;
// }

// function temMaisde30(aluno) {

//     return aluno.idade > 30;
// }

// function todos(aluno) {
//     return true;
// }


// let alunosComMenos30 = alunos.filter(temMenosde30);

// let alunosComMais30 = alunos.filter(temMaisde30);

// let todosOsAlunos = alunos.filter(todos);

// console.log(alunosComMenos30);
// console.log(alunosComMais30);
// console.log(todosOsAlunos);

// explicando: o filter precisa receber uma função, e dentro dessa função sempre que um elemento do array retornar como true ele mantem a função e descar as false, no console ele cria uma nova array com os elementos que retornaram true.



// outro exemplo:
// para alterar o resultado só alterar o argumento do filtro no console
// function temMenosde30(aluno) {
    
//     return aluno.idade < 30;
// }

// function temMaisde30(aluno) {

//     return aluno.idade > 30;
// }

// function filtro(callback) {
//     let alunosFiltrados = [];
//     for(let aluno of alunos) {
//         if(callback(aluno)) {
//             alunosFiltrados.push(aluno)
//         }
//     }

//     return alunosFiltrados;
// }

// console.log(filtro(temMenosde30));



// melhorando o exemplo anterior:
// function temMenosde30(aluno) {
    
//     return aluno.idade < 30;
// }

// function temMaisde30(aluno) {

//     return aluno.idade > 30;
// }

// function filtro(callback) {
//     let alunosFiltrados = [];
//     for(let aluno of this) {
//         if(callback(aluno)) {
//             alunosFiltrados.push(aluno)
//         }
//     }

//     return alunosFiltrados;
// }

// alunos.filtro = filtro;

// console.log(alunos.filtro(temMenosde30));



// mas por que da alteração anterior???
// com essa alteração agr podemos aplicar com qualquer array:
// então além da declarada nas linhas lá de cima criamos um novo array
// let jogadores =[
//     novoAluno('Igor', 23),
//     novoAluno('Leo', 45),
//     novoAluno('Michele', 29),
//     novoAluno('Maria', 35)
// ]

// function temMenosde30(aluno) {
    
//     return aluno.idade < 30;
// }

// function temMaisde30(aluno) {

//     return aluno.idade > 30;
// }

// function filtro(callback) {
//     let alunosFiltrados = [];
//     for(let aluno of this) {
//         if(callback(aluno)) {
//             alunosFiltrados.push(aluno)
//         }
//     }

//     return alunosFiltrados;
// }

// alunos.filtro = filtro;
// jogadores.filtro = filtro;

// console.log(jogadores.filtro(temMaisde30));




// simplificando ainda mais nosso codigo:
let jogadores =[
    novoAluno('Igor', 23),
    novoAluno('Leo', 45),
    novoAluno('Michele', 29),
    novoAluno('Maria', 35)
]

function temMenosde30(aluno) {
    
    return aluno.idade < 30;
}

function temMaisde30(aluno) {

    return aluno.idade > 30;
}

function filtro(callback) {
    let alunosFiltrados = [];
    for(let aluno of this) {
        if(callback(aluno)) {
            alunosFiltrados.push(aluno)
        }
    }

    return alunosFiltrados;
}


console.log(jogadores.filter(temMaisde30));
