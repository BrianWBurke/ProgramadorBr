
let tela = document.getElementById('tela');

let context = tela.getContext('2d');

//retangulo preenchido com borda
context.rect(10, 10, 100, 200);
context.fillStyle = 'blue';
context.strokeStyle = 'red';
context.lineWidth = 5;
context.fill();
context.stroke();

//retângulo preenchido
/* context.fillStyle = 'blue';
 context.fillRect(10, 10, 100, 200); */


//retangulo de borda
/* context.strokeStyle = 'red';
 context.strokeRect(10, 10, 100, 200); */


//quadrado para limpar área
context.clearRect(20, 20, 30, 30);


