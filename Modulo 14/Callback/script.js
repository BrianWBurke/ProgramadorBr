
// exemplo simples:
// function ola() {
//     console.log('Olá');
// }

// function tchau() {
//     console.log('Tchau');
// }

// function saudacao(s, nome) {
//     s();
//     console.log(nome);
// }

// saudacao(ola, "Mundo");

// saudacao(tchau, "Mundo");


// exemplo usual:
// esse exemplo funciona perfeitamente em nosso computador.

// let usuarios = ['Adriano', 'Marcia', 'José'];

// function inserirUsuarios(nome) {
//     usuarios.push(nome);
// }

// function listarUsuarios() {
//     console.log(usuarios);
// }

// inserirUsuarios('Brian');

// listarUsuarios();



// porém em servidores, pelo delay e outros fatores (internet, etc), então vamos simular um delay de servidor com setTimeout para o exemplo.
// depois de executada no navegador chame usuarios no console e verá o nome inserido e isso é um problema, porque ele listou primeiro os usuarios e depois inseriu:

// let usuarios = ['Adriano', 'Marcia', 'José'];

// function inserirUsuarios(nome) {
//     setTimeout(() => {usuarios.push(nome);}, 1000);    
// }

// function listarUsuarios() {
//     console.log(usuarios);
// }

// inserirUsuarios('Brian');

// listarUsuarios();



// para resolver esse problema utilizamos callback:

let usuarios = ['Adriano', 'Marcia', 'José'];

function inserirUsuarios(nome, callback) {
    setTimeout(() => {usuarios.push(nome); callback()}, 1000);    
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuarios('Brian', listarUsuarios);

// então basicamente o objetivo do callback é resolver algo que é assíncrono, mas que queremos executar algo só quando o tempo passar ou que algo acontecer