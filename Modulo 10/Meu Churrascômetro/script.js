let resultCarne = 0;
let resultCerveja = 0;
let resultBebidas = 0;

function calc() {
    let adultos = Number(document.querySelector('input#adultos').value);
    let crianca = Number(document.querySelector('input#criancas').value);
    let duracao = Number(document.querySelector('input#duracao').value);
    let carne = 0.4;
    let cerveja = 1.2;
    let bebida = 1;

    if (duracao > 6) {
        carne = 0.65;
        cerveja = 2;
        bebida = 1.5;

        resultCarne = carne * adultos * (crianca / 2);
        resultCerveja = (cerveja * adultos) / 2;
        resultBebidas = (bebida * adultos) * (crianca / 2) / 2;
    } else {
        resultCarne = carne * adultos * (crianca / 2);
        resultCerveja = (cerveja * adultos) / 2;
        resultBebidas = (bebida * adultos) * (crianca / 2) / 2;
    }
}

function verificar() {
    let calcu = calc;

    if (this.adultos == '' && this.crianca == '' && this.duracao == '') {
        return true;
    } else {
        return false;
    }
}


function calcular() {
    let r = this.verificar();
    let c = this.calc();

    if (r = true) {
        alert('Favor verificar se as caixas estão devidamente preenchidas.');
    } else {
        let p = document.querySelector('p#paragrafo');

        p.innerHTML = `${resultCarne} KG de carne &#x1F969 <br>${resultCerveja} garrafas de cerveja &#x1F37A <br>${resultBebidas} Garrafas de 2L de bebidas &#x1F964 <br>`;
    }
}