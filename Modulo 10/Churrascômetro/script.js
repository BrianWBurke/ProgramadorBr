let resultCarne = 0;
let resultCerveja = 0;
let resultBebidas = 0;

function calc() {
    let adultos = Number(document.querySelector('input#adultos').value);
    let crianças = Number(document.querySelector('input#criancas').value);
    let duracao = Number(document.querySelector('input#duracao').value);
    let carne = 0.4;
    let cerveja = 1.2;
    let bebida = 1;

    if (duracao > 6) {
        carne = 0.65;
        cerveja = 2;
        bebida = 1.5;

        resultCarne = carne * adultos * (criança / 2);
        resultCerveja = (cerveja * adultos) / 2;
        resultBebidas = (bebidas * adultos) * (criança / 2) / 2;
    } else {
        resultCarne = carne * adultos * (criança / 2);
        resultCerveja = (cerveja * adultos) / 2;
        resultBebidas = (bebidas * adultos) * (criança / 2) / 2;
    }
    
    
}

function calcular(){
calc;

let p = document.querySelector('p#paragrafo');

p.innerHTML += `${resultCarne} KG de carne<br>`;
p.innerHTML += `${resultCerveja} garrafas de cerveja<br>`;
p.innerHTML += `${resultBebidas} Garrafas de 2L de bebidas<br>`;
}