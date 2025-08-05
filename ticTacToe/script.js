function Player(name, symbol){
    this.name = name;
    this.symbol = symbol
}


const player1 = new Player('Adi', 'O');
const player2 = new Player('Moksh', 'X');

const arr = [['a','a','a'],['','',''],['','','']];

let gameStatus = true;

if (
    arr[0][0] === arr[0][1] &&
    arr[0][1] === arr[0][2] &&
    arr[0][0] !== ''
  ) {
    gameStatus = false;
  }

console.log(gameStatus);

