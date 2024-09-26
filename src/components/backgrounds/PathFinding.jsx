import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Canvas from "../Canvas";
import PathFindingGrid from "../../util/pathFindingGrid";
import resizeCanvas from "../../util/draw";


const PathFindingPattern = () => {
	const [visited, setVisited] = useState([]);

	const dimensions = useWindowSize();
	const grid = new PathFindingGrid(dimensions)

	useEffect(() => {
		setVisited(grid.findPath());
	}, []);

	const setup = (context, canvas) => {
		grid.draw(context);
	}

	const predraw = (context, canvas) => {
		context.save();
		resizeCanvas(canvas);
	}

	const draw = (ctx, frameCount) => {
		grid.draw(ctx)
		if (visited.length > 0) {
			const numCells = Math.min(frameCount, visited.length - 1)
			for (let i = 0; i < numCells; i++) {
				grid.drawCell(ctx, visited[i])
			}
		}
	}

	return <Canvas draw={draw} />
}

export default PathFindingPattern