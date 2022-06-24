
// promises são maneiras mais eficientes de se utilizar callback (ou até msm substituir).
// utilizando o exemplo de callback da ultima aula:

// let usuarios = ['Adriano', 'Marcia', 'José'];

// function inserirUsuarios(nome, callback) {
//     setTimeout(() => {usuarios.push(nome); callback()}, 1000);    
// }

// function listarUsuarios() {
//     console.log(usuarios);
// }

// inserirUsuarios('Brian', listarUsuarios);


// com promise:
// ela é um objeto que recebe como argumento uma função

let usuarios = ['Adriano', 'Marcia', 'José'];

function inserirUsuarios(nome) {

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        usuarios.push(nome); 
        let error = false;

        if(!error) {
            resolve();
        } else {
            reject({msg:'Erro'})
        }      
    }, 1000);    
})
return promise;    
}


function listarUsuarios() {
    console.log(usuarios);
}

// o then serve para executar somente quando der o resolve
// o cath serve para tratar o erro, mas para dar o erro precisamos mudar o error para true ali em cima
inserirUsuarios('Brian').then(listarUsuarios).catch((error) => {console.log(error.msg)});

