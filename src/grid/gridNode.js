
class GridNode {
  constructor(row, column, color = "#CDBDEB") {
    this.row = row;
    this.column = column;
    this.color = color;
  }

  get hash() {
    return `${this.row},${this.column}`;
  }
 
  /**
   * @param {GridNode} cell 
  */
  isDiagonal(cell) {
    return cell.row != this.row && cell.column != this.column;
  }
}

export default GridNode
