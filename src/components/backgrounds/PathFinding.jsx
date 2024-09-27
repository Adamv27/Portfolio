import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Canvas from "../Canvas";
import PathFindingGrid from "../../grid/pathFindingGrid";


const PathFindingPattern = () => {
	const [visited, setVisited] = useState([]);
	const [bestPath, setBestPath] = useState([]);

	const dimensions = useWindowSize();
	const grid = new PathFindingGrid(dimensions)

	useEffect(() => {
		const path = grid.findPath();
		setVisited(path);
		setBestPath(grid.cellsInBestPath(path))
	}, [dimensions]);

	const draw = (ctx, frameCount) => {
		grid.draw(ctx)
		if (visited.length > 0) {
			let numCells = Math.min(frameCount, visited.length - 1)
			for (let i = 0; i < numCells; i++) {
				grid.drawCell(ctx, visited[i])
			}
			if (numCells == visited.length - 1) {
				numCells = frameCount - (visited.length - 1);
				numCells = Math.min(numCells, bestPath.length - 1);
				for (let i = 0; i < numCells; i++) {
					const cell = bestPath[i];
					cell.color = "#FF00FF";
					grid.drawCell(ctx, bestPath[i])
				}
			}
		}
	}

	return <Canvas draw={draw} />
}

export default PathFindingPattern
