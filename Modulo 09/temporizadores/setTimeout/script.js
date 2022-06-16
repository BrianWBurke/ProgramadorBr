

function mudarCor() {
    let h = document.getElementsByTagName('h1')[0];

    h.style.color = 'blue';

}

function mudarTexto() {
    let h = document.getElementsByTagName('h1')[0];

    h.innerHTML = 'Novo Texto';

    setTimeout(mudarCor, 3000);
}