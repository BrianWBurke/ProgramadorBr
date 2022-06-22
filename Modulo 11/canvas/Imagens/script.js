
let tela = document.getElementById('tela');

let context = tela.getContext('2d');

let img = new Image();
img.src = './assents/red.png';


img.onload = desenharImg;

function desenharImg() {    

   context.drawImage(this, 20, 20, 100, 100);

}