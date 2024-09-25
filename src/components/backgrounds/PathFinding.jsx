import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import aStar from "../../util/aStar";
import Cell from "../../util/cell";
import Grid from "../../util/grid";
import Canvas from "../Canvas";


const PathFindingPattern = () => {
	const [steps, setSteps] = useState(0);
	const [visited, setVisisted] = useState(null);

	const dimensions = useWindowSize();
	const grid = new Grid(dimensions)

	const startingCell = new Cell(6, 8, "#FF0000")
	const targetCell = new Cell(40, 25, "#00DD00")

	useEffect(() => {
		setVisisted(aStar(startingCell, targetCell));
	}, []);


	useEffect(() => {
		const interval = setInterval(() => {
			setSteps(steps + 1);
		}, 1)

		return () => clearInterval(interval);
	}, [steps])


	const draw = (ctx, frameCount) => {
		grid.draw(ctx)
		grid.drawCell(ctx, startingCell)
		grid.drawCell(ctx, targetCell)
		if (visited != null) {
			const numCells = Math.min(steps, visited.length)
			for (let i = 0; i < numCells; i++) {
				grid.drawCell(ctx, visited[i])
			}
		}
	}

	return <Canvas draw={draw} />
}

export default PathFindingPattern