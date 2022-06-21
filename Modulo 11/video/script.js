

let video = document.getElementById('video1');
// let container = document.getElementsByClassName('container');


// container.addEventListener('mouseout', function(){
//     let controle = document.getElementsByClassName('controle');
//     if(controle.style.display === 'none') {
//         controle.style.display = 'inline';
//     } else {
//         controle.style.display = 'none';
//     }
// });


function ocultar() {
    let img = document.getElementsByClassName('controle');
    if (img.display === 'inline'){
        img.display = 'none';
    } else {
        img.display = 'inline';
    }
    
}

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