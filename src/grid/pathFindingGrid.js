import Grid from "./grid";
import MinHeap from "../util/minHeap";
import PathFindingNode from "./pathFindingNode";
import { newShade } from "../util/draw";

class PathFindingGrid extends Grid {
  constructor(dimensions, cellSize = 20) {
    super(dimensions, cellSize)

    this.target = new PathFindingNode(this.rows - 4, this.columns - 4);
    this.target.color = "#FF0000"

    this.start = new PathFindingNode(4, 4);
    this.start.g = 0;
    this.start.f = 0;
    this.start.color = "#00FF00"

    this.gradientCells = {};
  }

  findPath() {
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
        let tentativeG = current.g + (node.isDiagonal(current) ? node.weight * 1.414 : node.weight);
        if (tentativeG < node.g) {
          node.cameFrom = current;
          node.g = tentativeG;
          node.f = tentativeG + node.costFrom(this.target);
          if (!visited.has(node.hash)) {
            minHeap.add(node);
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