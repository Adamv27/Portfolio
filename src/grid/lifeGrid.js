import Grid from "./grid";
import GridNode from "./gridNode";

class LifeGrid extends Grid {
  constructor(dimensions) {
    super(dimensions)

    this.liveCells = {}
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (Math.random() > 0.7) {
          const cell = new GridNode(row, column, "#DADADA")
          this.liveCells[cell.hash] = cell;
        }
      }
    }
  }

  update(frameCount) {
    if (frameCount < 50 || frameCount % 50 !== 1) return;
    
    
    const deadCells = []; 
    for (const cellHash of Object.keys(this.liveCells)) {
      const neighbors = this.neighborsOf(this.liveCells[cellHash]);
      
      const liveCount = 0;
      for (const neighbor of neighbors) {
        if (neighbor.hash in this.liveCells) {
          liveCount++;
        } else {
          for (const neighbor of this.neighborsOf(neighbor)) {
            //
          }
        }
        


      }

      if (liveCount < 2) {
        deadCells.push(cellHash);
      } else if (liveCount > 3) {
        deadCells.push(cellHash);
      }


      


    }

  }

  draw(ctx) {
    super.draw(ctx);
    for (const cellHash of Object.keys(this.liveCells)) {
      this.drawCell(ctx, this.liveCells[cellHash]);
    }
  }
}

export default LifeGrid
