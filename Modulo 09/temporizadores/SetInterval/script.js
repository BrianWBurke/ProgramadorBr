var numero = 0;

function atualizarTexto() {
    let h = document.getElementsByTagName('h1')[0];

    h.innerHTML += ' ' + numero;

    numero++;
}


function mudarTexto() {
    setInterval(atualizarTexto, 3000)    ;
}