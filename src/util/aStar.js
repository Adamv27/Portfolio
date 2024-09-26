const inBounds = (position) => {
  return position.x >= 0 && position.x <= 80
    && position.y >= 0 && position.y <= 32;
}


const distance = (cell1, cell2) => {
  let deltaX = Math.abs(cell2.x - cell1.x)
  let deltaY = Math.abs(cell2.y - cell1.y)
  return deltaX + deltaY;
}
/*
const aStar = (start, target) => {
  const visited = []

  //queue.push(0, 5)
  const visitedOrder = [start];

  const cameFrom = {};
  cameFrom[start.hash] = null;

  const cost = new Map();
  cost.set(start.hash, 0);

  let current;
  while (queue.size > 0) {
    //current = visitedOrder[queue.pop()];

    if (current.hash === target.hash) break;

    current.neighbors.forEach((neighbor) => {
      if (inBounds(neighbor)) {
        let newCost = cost.get(current.hash) + distance(current, neighbor);
        if (!cost.has(neighbor.hash) || newCost < cost.get(neighbor.hash)) {
          cost.set(neighbor.hash, newCost);
          let priority = newCost + distance(target, neighbor);

          //queue.push(visitedOrder.length, priority);
          visitedOrder.push(neighbor);
          cameFrom[neighbor.hash] = current;
        }
      }
    })
  }

  while (current.hash !== start.hash) {
    current.color = '#87CEFA';
    current = cameFrom[current.hash];
  }

  return visitedOrder;
}
 */
