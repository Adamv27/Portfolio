import Grid from "./grid";
import GridNode from "./gridNode";

class LifeGrid extends Grid {
  constructor(dimensions) {
    super(dimensions)

    this.liveCells = {}

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (Math.random() > 0.7) {
          const cell = new GridNode(row, column, "#DADADA");
          this.liveCells[cell.hash] = cell;
        }
      }
    }
  }

  update(frameCount) {
    if (frameCount < 20 || frameCount % 20 !== 1) return;

    const cellsToCreate = [];
    const cellsToDie = [];
    for (const cellHash of Object.keys(this.liveCells)) {
      const neighbors = this.groupedNeighbors(this.liveCells[cellHash]);

      // Under population
      if (neighbors.live.length < 2) {
        cellsToDie.push(cellHash);
        // Over population
      } else if (neighbors.live.length > 3) {
        cellsToDie.push(cellHash);
      }

      neighbors.dead.forEach((deadCell) => {
        const deadCellsNeighbors = this.groupedNeighbors(deadCell);
        // Reproduction
        if (deadCellsNeighbors.live.length == 3) {
          const newCell = new GridNode(deadCell.row, deadCell.column, "#DADADA")
          if (!(newCell.hash in this.liveCells)) {
            cellsToCreate.push(newCell);
          }
        }
      })
    }

    for (const hash of cellsToDie) {
      delete this.liveCells[hash];
    }

    for (const cell of cellsToCreate) {
      this.liveCells[cell.hash] = cell;
    }
  }

  groupedNeighbors(cell) {
    const cells = {
      live: [],
      dead: []
    }
    const neighbors = this.neighborsOf(cell);
    neighbors.forEach((neighbor) => {
      neighbor.hash in this.liveCells ?
        cells.live.push(neighbor) :
        cells.dead.push(neighbor);
    });
    return cells;
  }

  draw(ctx) {
    super.draw(ctx);
    for (const cellHash of Object.keys(this.liveCells)) {
      this.drawCell(ctx, this.liveCells[cellHash]);
    }
  }
}

export default LifeGrid
