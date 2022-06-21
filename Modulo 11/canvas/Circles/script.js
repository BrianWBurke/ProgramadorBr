
let tela = document.getElementById('tela');

let context = tela.getContext('2d');


//lembrando que o circulo é um arco, então caso for preciso fazer um arco se utiliza da msm forma

context.beginPath();
context.strokeStyle = 'red';
context.fillStyle = 'blue';

// context.arc(x, y, raio, inicio, fim); (inicio e fim são em radianos)
context.arc(250, 250, 100, 0, 1.5 * Math.PI); //para um circulo completo se usa 2 * Math.PI

context.fill();
context.stroke();