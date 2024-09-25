class Cell {
  constructor(x, y, color = '#895AD6') {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  get hash() {
    return `${this.x},${this.y}`;
  }

  get neighbors() {
    const neighbors = [];
    [[-1, 0], [1, 0], [0, 1], [0, -1]].forEach((offset) => {
      neighbors.push(new Cell(this.x + offset[0], this.y + offset[1]))
    })
    return neighbors;
  }
}

export default Cell