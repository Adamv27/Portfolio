import { drawLine } from "./draw";

class Grid {
  constructor(dimensions, cellSize = 40) {
    this.rows = Math.floor(dimensions.height / cellSize);
    this.columns = Math.floor(dimensions.width / cellSize) + 1;
    this.cellSize = cellSize
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
    let x = cell.x * this.cellSize;
    let y = cell.y * this.cellSize;
    ctx.fillStyle = cell.color;
    ctx.fillRect(x, y, this.cellSize - 1, this.cellSize - 1);
  }
}

export default Grid;