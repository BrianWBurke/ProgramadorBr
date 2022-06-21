
let tela = document.getElementById('tela');

let context = tela.getContext('2d');

let circle = {
    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
}

function drawCircle(c) {

    context.beginPath();
    context.rect(0, 0, 500, 500);
    context.fillStyle = 'beige';
    context.fill();

   
context.beginPath();
context.strokeStyle = 'red';
context.fillStyle = 'blue';

// context.arc(x, y, raio, inicio, fim); (inicio e fim são em radianos)
context.arc(c.x, c.y, c.raio, c.inicio, c.fim); //para um circulo completo se usa 2 * Math.PI

context.fill();
context.stroke();
}

setInterval(function(){

    if(circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);

}, 90);


