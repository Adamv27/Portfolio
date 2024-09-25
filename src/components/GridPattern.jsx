import { useId } from "react"

import '../styles/GridPattern.css';


const GridPattern = ({
	width = 40,
	height = 40,
	x = -1,
	y = -1,
	strokeDasharray = 0,
	squares,
	squareCount,
	...props
}
) => {

	const id = useId();


	const displaySquares = [];
	for (let i = 0; i < squareCount; i++) {
		displaySquares.push(squares[i]);
	}

	return (
		<svg
			className='grid-pattern'
			aria-hidden="true"
			{...props}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path
						d={`M.5 ${height} V.5H ${width}`}
						fill="none"
						strokeDasharray={strokeDasharray}
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
			{squares && (
				<svg x={x} y={y}>
					{displaySquares.map((cell) => (
						<rect
							strokeWidth="0"
							key={`${cell.x}-${cell.y}`}
							width={width - 1}
							height={height - 1}
							x={cell.x * width + 1}
							y={cell.y * height + 1}
							fill={cell.color}
						/>
					))}
				</svg>
			)}
		</svg>
	)
}

export default GridPattern