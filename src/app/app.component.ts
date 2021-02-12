import { Component } from '@angular/core';
import { Board } from './board.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numCols: number;
  numRows: number;
  generation: number;
  gameStatus: number; // -1 donts start | 0 active | 1 paused |

  board: Board;

  constructor() {
    this.numCols = 40;
    this.numRows = 40;
    this.generation = 0;
    this.board = new Board(this.numCols, this.numRows);
  }

  onClick(row, col) {
    console.log(row, col);
  }
}
