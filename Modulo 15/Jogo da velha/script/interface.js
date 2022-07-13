
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    //sempre que clicarmos
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
});

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {        

        setTimeout(()=> {
            if (playerTime == 0) {
            alert('O jogo acabou - Vencedor: O');
        } else {
            alert('O jogo acabou - Vencedor: X');
        }
        }, 10);        
    }   

    updateSquare(position);  
}

function newGame() {
    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;    
    gameOver = false;

    location.reload();       
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.classList.add(symbol);
    // square.innerHTML = `<div class='${symbol}'></div> `
}


// function resetSquares() {

//     let squares = document.querySelectorAll('.square');
    

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != '') {
//             let att = document.getElementsByClassName('square');
//             att.classList.remove('x');
//             att.classList.remove('o');
//         }

//     })
// }