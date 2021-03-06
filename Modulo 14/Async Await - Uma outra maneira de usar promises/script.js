
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


// primeiro criamos uma function declarando ela como async
// depois colocamos o await para que ela "espere" a promise ser resolvida
async function executar() {
    await inserirUsuarios('Brian');
    listarUsuarios();
}

executar();

