import "../styles/Home.css";


import PathFindingPattern from "../components/backgrounds/PathFinding";
import Canvas from "../components/Canvas";

const Home = () => {
	return (
		<>
			<PathFindingPattern />
			<div id="home-text">
				<p className="text">Hi, I'm</p>
				<p id="name" className="text">Adam Vinch</p>
				<p className="text">I am a Software Developer and Computer Science student </p>
			</div>
		</>
	)
}

export default Home 