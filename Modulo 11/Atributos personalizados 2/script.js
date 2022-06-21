
let lista = document.querySelector('ul#lista');

lista.dataset.num = '4';

let num = parseInt(lista.getAttribute(lista.dataset.num));



let conteudo = '';

for (let i = 0; i < num; i++) {
    conteudo += '<li>' + i + '</li>';
}

lista.innerHTML = conteudo;