

// 3 maneiras de declaração de funções:


// 1ª normal

// function dobro(x) {
//     console.log(2 * x);
// }
// dobro(5);



// 2ª como variável (função anônima)

// let dobro = function(x) {
//     console.log(2 * x);
// }
// dobro(15);



// 3ª arrow function


// let dobro = (x) => {
//     console.log(2 * x);
// }
// dobro(7);



// vantagens da arrow function: se tiver somente 1 argumento ela não precisa do parenteses, o exemplo de cima ficaria assim:

// let dobro = x => {
//     console.log(2 * x);
// }
// dobro(7);



// se a única coisa que ela faz é retornar um valor (return), desta forma:

// let dobro = x => {
//     return(2 * x);
// }
// console.log(dobro(8));



// poderíamos simplificar dessa forma:
// let dobro = (x) => 2 * x;

// console.log(dobro(9));



// só temos um problema com a arrow function, ela não entende muito bem o que é um this dentro dela.
// nesse exemplo ele retorna NaN:
// let dobro = () => 2 * this.x;

// let numero = {
//     x: 8,
//     d: dobro
// }

// console.log(numero.d());



// então teríamos que fazer desta maneira:
// let dobro = function () {
//     return 2 * this.x
// }

// let numero = {
//     x: 8,
//     d: dobro
// }

// console.log(numero.d());



// outro exemplo para a msm situação.
// nessa situação ele imprimiria o window
// let dobro = () => {console.log(this)};

// let numero = {
//     x: 8,
//     d: dobro
// }

// numero.d();



// já nessa ele imprimiria o objeto numero:
// let dobro = function () {
//     console.log(this);
// }

// let numero = {
//     x: 8,
//     d: dobro
// }

// numero.d();

