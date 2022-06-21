let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular(ret) {    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if (ret == true) {
        alert('Por favor, preencha todos os camps')
    } else {
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne &#x1F969</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas (355ml cada) de Cerveja &#x1F37A</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas (2L) de Bebida &#x1F964</p>`
}
}

function verificar(callback) {
    let ret;
    if (document.getElementById('adultos') == '' ||  document.getElementById('criancas') == '' || document.getElementById('duracao') == '') {
        ret = true;
    } else {
        ret = false;
    }
}

function carnePP(duracao) {    
    if(duracao >= 6) {
        return 650;
    }
    return 400;
}

function cervejaPP(duracao) {    
    if(duracao >= 6) {
        return 2000;
    }
    return 1200;
}

function bebidasPP(duracao) {    
    if(duracao >= 6) {
        return 1500;
    }
    return 1000;
}