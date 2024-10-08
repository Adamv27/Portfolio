import "../styles/Home.css";


import PathFindingPattern from "../components/backgrounds/PathFinding";

const Home = () => {
	return (
		<>
			<PathFindingPattern />
			<div id="home-text">
				<p className="text">Hi, I'm</p>
				<p id="name" className="text">Adam Vinch</p>
				<p className="text">Software Developer and Computer Science student </p>
			</div>
		</>
	)
}

export default Home 
