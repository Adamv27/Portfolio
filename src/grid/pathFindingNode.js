import GridNode from "./gridNode";

class PathFindingNode extends GridNode {
  constructor(row, column, weight = 1, isWall = false) {
    super(row, column);
    this.weight = weight;
    this.g = Infinity;
    this.f = Infinity;
    this.cameFrom = null;
    this.isWall = isWall;
  }

  /**
   * @param {GridNode} neighbor 
  */
  costFrom(cell) {
    return Math.max(Math.abs(this.column - cell.column), Math.abs(this.row - cell.row));
  }
}

export default PathFindingNode 
