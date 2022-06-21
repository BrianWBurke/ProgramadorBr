

let video = document.getElementById('video1');
// let container = document.getElementsByClassName('container');


function ocultar() {
    let controle = document.getElementsByClassName('controle').display;
    controle = 'inline';
}

// container.addEventListener('mouseout', function(){
//     let controle = document.getElementsByClassName('controle');
//     if(controle.display === 'none') {
//         controle.display = 'inline';
//     } else {
//         controle.display = 'none';
//     }
// });


// function ocultar() {
//     let img = document.getElementsByClassName('controle');
//     if (img.visibility === 'hidden'){
//         img.visibility = 'visible';        
//     } else { 
//         img.visibility = 'hidden';
//     }
// }

function retroceder() {
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}

function diminuir_vel() {
    video.playbackRate -= 0.1;
}

function aumentar_vel() {
    video.playbackRate += 0.1;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}