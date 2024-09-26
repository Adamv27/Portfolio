import { MinQueue } from "heapify";
import Grid from "./grid";
import MinHeap from "./minHeap";


class GridNode {
  constructor(row, column, weight = 1) {
    this.row = row;
    this.column = column;
    this.weight = weight;
    this.g = Infinity;
    this.f = Infinity;
    this.color = "#CDBDEB";
  }

  get hash() {
    return `${this.row},${this.column}`;
  }
  /**
   * @param {GridNode} neighbor 
   */
  costFrom(cell) {
    return Math.max(Math.abs(cell.column - this.column), Math.abs(cell.row - this.row))
    //return Math.sqrt((this.column - cell.column) ** 2 + (this.row - cell.row) ** 2);
  }
}

class PathFindingGrid extends Grid {
  constructor(dimensions, cellSize = 20) {
    super(dimensions, cellSize)

    this.target = new GridNode(this.rows - 2, this.columns - 2);
    this.target.color = "#FF0000"

    this.start = new GridNode(4, 4);
    this.start.g = 0;
    this.start.f = 0;
    this.start.color = "#00FF00"
  }

  findPath() {
    const minHeap = new MinHeap(
      (gridNode) => gridNode.f
    );
    minHeap.add(this.start);

    const cameFrom = {};

    const visited = new Set();
    const visitOrder = [];

    let current;
    while (minHeap.size > 0) {
      current = minHeap.remove()

      if (current.row == this.target.row && current.column == this.target.column) {
        return visitOrder;
      }

      console.log(minHeap.peek());


      visited.add(current.hash);
      visitOrder.push(current)


      this.neighborsOf(current).forEach((neighbor) => {
        if (!visited.has(neighbor.hash)) {
          const g = current.g + neighbor.weight;
          if (g < neighbor.g) {
            cameFrom[neighbor.hash] = current;
            neighbor.g = g;
            neighbor.f = g + neighbor.costFrom(this.target);
          }
          minHeap.add(neighbor);
        }
      })
    }
    return visitOrder;
  }

  draw(ctx) {
    super.draw(ctx)
    this.drawCell(ctx, this.start)
    this.drawCell(ctx, this.target)
  }
}

export default PathFindingGrid
export { GridNode }