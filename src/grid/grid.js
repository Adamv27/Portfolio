import { drawLine } from "../util/draw";
import GridNode from "./gridNode";

class Grid {
  constructor(dimensions, cellSize = 20) {
    this.rows = Math.floor(dimensions.height / cellSize) + 1;
    this.columns = Math.floor(dimensions.width / cellSize) + 1;
    this.cellSize = cellSize
  }

  cellIsInGrid(cell) {
    return 0 <= cell.column && cell.column <= this.columns
      && 0 <= cell.row && cell.row <= this.rows;
  }

  neighborsOf(cell) {
    const neighbors = []
    const offsets = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, -1], [1, 1], [1, -1], [-1, 1]];
    offsets.forEach(([rowOffset, columnOffset]) => {
      const neighbor = new GridNode(cell.row + rowOffset, cell.column + columnOffset);
      if (this.cellIsInGrid(neighbor)) {
        neighbors.push(neighbor);
      }
    });
    return neighbors;
  }

  draw(ctx) {
    ctx.strokeStyle = '#9ca3af4d';
    let x = 0;
    for (let i = 0; i < this.columns; i++) {
      x = i * this.cellSize;
      drawLine(ctx, x, 0, x, ctx.canvas.height)
    }

    let y = 0;
    for (let i = 0; i < this.rows; i++) {
      y = i * this.cellSize;
      drawLine(ctx, 0, y, ctx.canvas.width, y);
    }
  }

  drawCell(ctx, cell) {
    let y = cell.row * this.cellSize;
    let x = cell.column * this.cellSize;
    ctx.fillStyle = cell.color;
    ctx.fillRect(x, y, this.cellSize - 1, this.cellSize - 1);
  }
}

export default Grid;
