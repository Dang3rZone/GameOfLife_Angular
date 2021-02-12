export class Board {
  board: number[][];

  constructor(width, height) {
    this.board = [];
    for (let i = 0; i < width; i++) {
      this.board[i] = [];
      for (let j = 0; j < height; j++) {
        this.board[i][j] = 0;
      }
    }
  }

  status(coordX: number, coordY: number): number {
    return this.board[coordX][coordY];
  }

  changeStatus(coordX: number, coordY: number) {
    this.board[coordX][coordY] = this.board[coordX][coordY] === 0 ? 1 : 0;
  }

  checkBoard() {
    let tempBoard = [];
    for (let i = 0; i < this.board.length; i++) {
      tempBoard[i] = [];
      for (let j = 0; j < this.board[i].length; j++) {}
    }
  }

  checkRules(coordX: number, coordY: number): number {
    const width = this.board.length;
    const height = this.board[0].length;

    const xMenos = coordX - 1 < 0 ? width - 1 : coordX - 1;
    const xMaas = coordX + 1 >= width ? 0 : coordX - 1;
    return;
  }
}
