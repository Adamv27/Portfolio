import Cell from "./cell";
import { MinQueue } from "heapify";

const inBounds = (position) => {
  return position.x >= 0 && position.x <= 100
    && position.y >= 0 && position.y <= 80;
}


const distance = (cell1, cell2) => {
  return Math.sqrt((cell2.x - cell1.x) ** 2 + (cell2.y - cell1.y) ** 2);
}

const aStar = (start, target) => {
  const queue = new MinQueue(10000)

  queue.push(0, 5)
  const visitedOrder = [start];

  const cameFrom = {};
  cameFrom[start.hash] = null;

  const cost = new Map();
  cost.set(start.hash, 0);

  let current;
  while (queue.size > 0) {
    current = visitedOrder[queue.pop()];

    if (current.hash === target.hash) break;

    current.neighbors.forEach((neighbor) => {
      if (inBounds(neighbor)) {
        let newCost = cost.get(current.hash) + distance(current, neighbor);
        if (!cost.has(neighbor.hash) || newCost < cost.get(neighbor.hash)) {
          cost.set(neighbor.hash, newCost);
          let priority = newCost + distance(target, neighbor);

          queue.push(visitedOrder.length, priority);
          visitedOrder.push(neighbor);
          cameFrom[neighbor.hash] = current;
        }
      }
    })
  }

  while (current.hash !== start.hash) {
    current.color = '#0000FF';
    current = cameFrom[current.hash];
  }


  console.log(visitedOrder);


  return visitedOrder;
}

export default aStar