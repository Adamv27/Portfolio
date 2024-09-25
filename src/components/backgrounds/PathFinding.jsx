import { useEffect, useState } from "react";
import aStar from "../../util/aStar";
import Cell from "../../util/cell";
import drawGrid, { drawCell } from "../../util/draw";
import Canvas from "../Canvas";


const PathFindingPattern = () => {
	const [steps, setSteps] = useState(0);
	const [visited, setVisisted] = useState(null);

	const startingCell = new Cell(6, 8, "#FF0000")
	const targetCell = new Cell(40, 25, "#00DD00")

	useEffect(() => {
		setVisisted(aStar(startingCell, targetCell));
	}, []);


	useEffect(() => {
		const interval = setInterval(() => {
			setSteps(steps + 1);
		}, 10)

		return () => clearInterval(interval);
	}, [steps])


	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		drawGrid(ctx);
		drawCell(ctx, startingCell);
		drawCell(ctx, targetCell);
		if (visited != null) {
			const numCells = Math.min(steps, visited.length)
			for (let i = 0; i < numCells; i++) {
				drawCell(ctx, visited[i])
			}
		}
	}

	return <Canvas draw={draw} />
}

export default PathFindingPattern