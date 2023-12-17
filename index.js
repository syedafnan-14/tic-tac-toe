var btn = document.querySelectorAll('.grid-items');
var result = document.getElementById('result');
var currentPlayer = 'X'; 
var turn = document.querySelectorAll('.turn');
var board =['','','','','','','','','']
var gameActive = true;

function checkWinner(currentPlayer) {
    if (
        board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer ||
        board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer ||
        board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer ||
        board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer ||
        board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer ||
        board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer ||
        board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer ||
        board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer
    ) {
        return true;
    }
    return false;
}

function isTie(){
    for(var i of board){
        if(i=='')
            return false;
    }
    return true;
}
function updateBoard() {

    if(!gameActive) return;
    var index = Array.from(btn).indexOf(this);
    if (this.innerHTML === '') {
        this.innerHTML = currentPlayer;
        board[index] = currentPlayer;
        turn[0].classList.toggle('active');
        turn[1].classList.toggle('active');
        if(checkWinner(currentPlayer)){
            result.innerHTML = `${currentPlayer} won the match`;
            gameActive = false;
            board =['','','','','','','','',''];
        }
        else if(isTie()){
            result.innerHTML = `It's a TIE`;
            gameActive = false;
            board =['','','','','','','','',''];
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

for (var item of btn) {
    item.addEventListener('click', updateBoard);
}

function resetGame(){
    board =['','','','','','','','',''];
    for(var i=0;i<btn.length;i++){
        btn[i].innerHTML = '';
    }
    result.innerHTML = '';
    currentPlayer = 'X';
    gameActive = true;
    turn[0].classList.remove('active');
    turn[1].classList.remove('active');
    turn[0].classList.add('active');
}
