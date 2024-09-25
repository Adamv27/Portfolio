
const drawGrid = (ctx, cellWidth = 40) => {
  const colCount = Math.floor(ctx.canvas.width / cellWidth);
  const rowCount = Math.floor(ctx.canvas.height / cellWidth);

  ctx.strokeStyle = '#9ca3af4d';

  let x = 0;
  for (let i = 0; i < colCount; i++) {
    x = i * cellWidth;
    drawLine(ctx, x, 0, x, ctx.canvas.height)
  }

  let y = 0;
  for (let i = 0; i < rowCount; i++) {
    y = i * cellWidth;
    drawLine(ctx, 0, y, ctx.canvas.width, y);
  }
}


const drawLine = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const drawCell = (ctx, cell) => {
  const cellWidth = 40;
  ctx.fillStyle = cell.color;
  ctx.fillRect(cell.x * cellWidth, cell.y * cellWidth, cellWidth - 1, cellWidth - 1);
}

export default drawGrid;
export { drawCell };