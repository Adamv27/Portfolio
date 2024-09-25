import { useEffect, useState } from "react";
import GridPattern from "../GridPattern"
import aStar from "../../util/aStar";
import Cell from "../../util/cell";

const PathFindingPattern = () => {
	const [steps, setSteps] = useState(0);
	const [visited, setVisisted] = useState(null);

	const startingCell = new Cell(6, 8, "#FF0000")
	const targetCell = new Cell(95, 50, "#00DD00")

	useEffect(() => {
		const results = aStar(startingCell, targetCell);
		setVisisted([startingCell, targetCell, ...results]);
	}, [])


	useEffect(() => {
		const intervalId = setInterval(() => {
			setSteps((prevSteps) => prevSteps + 1);
		}, 1);

		return () => clearInterval(intervalId);
	}, []);



	return (
		<GridPattern
			squares={visited}
			squareCount={steps}
			width={20}
			height={20}
		/>
	)
}

export default PathFindingPattern