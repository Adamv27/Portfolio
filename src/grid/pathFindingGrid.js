import Grid from "./grid";
import MinHeap from "../util/minHeap";
import PathFindingNode from "./pathFindingNode";
import { newShade } from "../util/draw";
import randomInt from "../util/util";

class PathFindingGrid extends Grid {
  constructor(dimensions, cellSize = 20) {
    super(dimensions, cellSize)

    this.target = new PathFindingNode(this.rows - 4, this.columns - 4);
    this.target.color = "#FF0000"

    this.start = new PathFindingNode(4, 4);
    this.start.g = 0;
    this.start.f = 0;
    this.start.color = "#00FF00";

    this.gradientCells = {};
  }

  createWalls() {
    const walls = {};
    for (let column = 0; column < this.columns; column++) {
      if (Math.random() > 0.5) continue;
      const numWalls = randomInt(3, this.rows / 4);
      const rowStart = randomInt(this.start.row + 1, this.rows - numWalls - 5);
      for (let row = rowStart; row < rowStart + numWalls; row++) {
        const wall = new PathFindingNode(row, column, 1, true);
        wall.color = "#D8D8D8";
        walls[wall.hash] = wall;
      }
    }
    return walls;
  }

  findPath(walls) {
    const minHeap = new MinHeap(
      (gridNode) => gridNode.f
    );
    minHeap.add(this.start);

    const visited = new Set();
    const visitOrder = [];

    let current;
    while (minHeap.size > 0) {
      current = minHeap.remove()

      if (visited.has(current.hash)) {
        continue;
      }
      visited.add(current.hash);
      visitOrder.push(current)

      if (current.row == this.target.row && current.column == this.target.column) {
        return visitOrder;
      }

      this.neighborsOf(current).forEach((neighbor) => {
        let node = new PathFindingNode(neighbor.row, neighbor.column)
        if (!(node.hash in walls)) {
          let tentativeG = current.g + (node.isDiagonal(current) ? node.weight * 1.414 : node.weight);
          if (tentativeG < node.g) {
            node.cameFrom = current;
            node.g = tentativeG;
            node.f = tentativeG + node.costFrom(this.target);
            if (!visited.has(node.hash)) {
              minHeap.add(node);
            }
          }
        }
      })
    }
    return visitOrder;
  }

  cellsInBestPath(visitedCells) {
    const bestPath = [];
    let currentCell = visitedCells[visitedCells.length - 1];
    while (currentCell.hash != this.start.hash) {
      bestPath.push(currentCell);
      currentCell = currentCell.cameFrom;
    }
    return bestPath.reverse();
  }

  drawCell(ctx, cell) {
    if (cell.isWall) {
      super.drawCell(ctx, cell);
      return;
    }

    if (!(cell.hash in this.gradientCells)) {
      const color = newShade(cell.color, -100);
      this.gradientCells[cell.hash] = color;
    }

    const cellDefaultColor = "#A2D2FF";
    const storedColor = this.gradientCells[cell.hash];
    if (storedColor < cellDefaultColor) {
      cell.color = storedColor;
      this.gradientCells[cell.hash] = newShade(storedColor, 1);
    }
    super.drawCell(ctx, cell);
  }

  draw(ctx) {
    super.draw(ctx);
    super.drawCell(ctx, this.start);
    super.drawCell(ctx, this.target);
  }
}

export default PathFindingGrid
