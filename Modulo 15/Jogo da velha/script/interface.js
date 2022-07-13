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
            alert('O jogo acabou - Vencedor: ' + playerTime);
        }, 10);        
    }   

    updateSquare(position);
    // updateSquares();


}

function newGame() {
    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;    
    gameOver = false;

    updateSquares();
}

//segundo jeito
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


// primeiro jeito:
function updateSquares() {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='1'></div>`
        }

    })
}