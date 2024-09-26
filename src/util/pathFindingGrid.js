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
    return Math.max(Math.abs(this.column - cell.column), Math.abs(this.row - cell.row));
  }

  /**
   * @param {GridNode} cell 
   */
  isDiagonal(cell) {
    return cell.row != this.row && cell.column != this.column;
  }
}

class PathFindingGrid extends Grid {
  constructor(dimensions, cellSize = 20) {
    super(dimensions, cellSize)

    this.target = new GridNode(this.rows - 4, this.columns - 4);
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

      if (visited.has(current.hash)) {
        continue;
      }
      visited.add(current.hash);
      visitOrder.push(current)

      if (current.row == this.target.row && current.column == this.target.column) {
        return visitOrder;
      }


      this.neighborsOf(current).forEach((neighbor) => {
        let tentativeG = current.g + (neighbor.isDiagonal(current) ? neighbor.weight * 1.414 : neighbor.weight);

        if (tentativeG < neighbor.g) {
          cameFrom[neighbor.hash] = current;
          neighbor.g = tentativeG;
          neighbor.f = tentativeG + neighbor.costFrom(this.target);
          if (!visited.has(neighbor.hash)) {
            minHeap.add(neighbor);
          }
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