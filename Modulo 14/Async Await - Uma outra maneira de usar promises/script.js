
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

function executar() {
    inserirUsuarios('Brian');
    listarUsuarios();
}

