const player1 = 'X';
const player2 = 'O';
const board = document.querySelector('.board');
const resetBtn = document.querySelector('button');

let player = player1;
let turnCount = 0;

function addLetters(e) {
    console.log(e.target);
    e.target.innerHTML = player;

    if (player === player1) player = player2;
    else player = player1;

    turnCount++;

    //determine winner
    if (turnCount > 5) {
        
    }
}

function reset() {
    console.dir(board);
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = '';
        }
    }
}

board.addEventListener('click', addLetters);
resetBtn.addEventListener('click', reset);